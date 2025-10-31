import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const rows = [...block.children];

  // Structure:
  // Row 1: [Header info] [Phase title]
  // Row 2: [Image] [Content/bullets]

  if (rows.length < 2) return;

  // Create header bar
  const headerBar = document.createElement('div');
  const headerCell = rows[0].children[1]; // Right cell contains phase title
  if (headerCell) {
    while (headerCell.firstChild) {
      headerBar.appendChild(headerCell.firstChild);
    }
  }

  // Create content container
  const contentContainer = document.createElement('div');

  // Left column - Image
  const leftColumn = document.createElement('div');
  const imageCell = rows[1].children[0]; // Left cell of row 2
  if (imageCell) {
    while (imageCell.firstChild) {
      leftColumn.appendChild(imageCell.firstChild);
    }
  }

  // Right column - Content
  const rightColumn = document.createElement('div');
  const contentCell = rows[1].children[1]; // Right cell of row 2
  if (contentCell) {
    while (contentCell.firstChild) {
      rightColumn.appendChild(contentCell.firstChild);
    }
  }

  contentContainer.appendChild(leftColumn);
  contentContainer.appendChild(rightColumn);

  // Optimize images
  leftColumn.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });

  // Clear block and rebuild
  block.textContent = '';
  block.appendChild(headerBar);
  block.appendChild(contentContainer);

  // Add variant class if needed (green is default, pink for maintenance/hemodialysis)
  const headerText = headerBar.textContent.toLowerCase();
  if (headerText.includes('maintenance') || headerText.includes('hemodialysis')) {
    block.classList.add('pink');
  }
}
