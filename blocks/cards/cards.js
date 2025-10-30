import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const ul = document.createElement('ul');
  const rows = [...block.children];

  // Skip the first row if it's the block header (contains "Cards")
  const startRow = rows[0]?.textContent.trim().toLowerCase().includes('cards') ? 1 : 0;
  const contentRows = rows.slice(startRow);

  if (contentRows.length === 0) return;

  // Find the number of columns (cards) from the first content row
  const numColumns = contentRows[0]?.children.length || 0;

  // Transpose: create one card per column
  for (let col = 0; col < numColumns; col++) {
    const li = document.createElement('li');

    // Collect all cells from this column across all rows
    contentRows.forEach((row) => {
      const cell = row.children[col];
      if (cell && cell.textContent.trim()) {
        const cardDiv = document.createElement('div');

        // Move content from cell to cardDiv
        while (cell.firstElementChild) {
          cardDiv.append(cell.firstElementChild);
        }

        // Classify as image or body
        if (cardDiv.querySelector('picture')) {
          cardDiv.className = 'cards-card-image';
        } else {
          cardDiv.className = 'cards-card-body';
        }

        li.append(cardDiv);
      }
    });

    // Only add card if it has content
    if (li.children.length > 0) {
      ul.append(li);
    }
  }

  // Optimize images
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });

  block.textContent = '';
  block.append(ul);
}
