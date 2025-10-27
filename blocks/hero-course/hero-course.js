export default function decorate(block) {
  if (!block.querySelector(':scope > div:first-child picture')) {
    block.classList.add('no-image');
  }

  // Add button-container class to paragraphs with links
  const allParagraphs = block.querySelectorAll('p');
  allParagraphs.forEach((p) => {
    if (p.querySelector('a')) {
      p.classList.add('button-container');
    }
  });
}
