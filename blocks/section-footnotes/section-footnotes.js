export default function decorate(block) {
  // Detect footnote sections vs reference sections
  const rows = [...block.children];

  rows.forEach((row) => {
    const text = row.textContent.toLowerCase();

    if (text.includes('reference') || text.includes('références')) {
      row.classList.add('references-section');
    } else {
      row.classList.add('footnote-section');
    }

    // Style ordered lists as reference lists
    const ol = row.querySelector('ol');
    if (ol) {
      ol.classList.add('reference-list');
    }
  });

  // Add overall container styling
  block.classList.add('footnotes-container');
}
