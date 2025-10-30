export default function decorate(block) {
  // Detect phase type from content for color coding
  const firstRow = block.querySelector(':scope > div:first-child');
  const headerText = firstRow?.textContent.toLowerCase() || '';

  if (headerText.includes('correction phase')) {
    block.classList.add('correction-phase');
  } else if (headerText.includes('maintenance phase') || headerText.includes('hemodialysis')) {
    block.classList.add('maintenance-phase');
  }

  // Setup header section (first two rows)
  const rows = [...block.children];
  if (rows.length >= 2) {
    const headerSection = document.createElement('div');
    headerSection.classList.add('dosing-header');

    // Title row (with superscript)
    const titleRow = rows[0];
    titleRow.classList.add('dosing-title');

    // Description row
    const descRow = rows[1];
    descRow.classList.add('dosing-description');

    headerSection.append(titleRow, descRow);
    block.prepend(headerSection);
  }

  // Setup content card (remaining rows)
  if (rows.length >= 3) {
    const contentCard = document.createElement('div');
    contentCard.classList.add('dosing-card');

    // Phase label row (colored header)
    if (rows[2]) {
      rows[2].classList.add('phase-label');
    }

    // Two-column content row
    if (rows[3]) {
      const contentRow = rows[3];
      contentRow.classList.add('dosing-content-row');

      const columns = [...contentRow.children];
      if (columns.length >= 2) {
        columns[0].classList.add('dosing-image-col');
        columns[1].classList.add('dosing-text-col');

        // Style lists in text column
        const lists = columns[1].querySelectorAll('ul');
        lists.forEach(list => {
          list.classList.add('dosing-list');
        });
      }
    }

    // Append all content rows to card
    for (let i = 2; i < rows.length; i++) {
      contentCard.append(rows[i]);
    }

    block.append(contentCard);
  }
}
