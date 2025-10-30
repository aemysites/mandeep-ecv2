export default function decorate(block) {
  // Check if there's a background image in the first row
  const firstRow = block.querySelector(':scope > div:first-child');
  if (!firstRow || !firstRow.querySelector('picture')) {
    block.classList.add('no-image');
  }

  // Add specific styling class based on content
  const heading = block.querySelector('h1, h2');
  if (heading) {
    heading.classList.add('hero-banner-title');
  }

  // Wrap text content in a container for better positioning
  const textContent = block.querySelector(':scope > div:last-child');
  if (textContent && textContent !== firstRow) {
    textContent.classList.add('hero-banner-content');
  }
}
