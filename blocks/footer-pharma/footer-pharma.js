export default function decorate(block) {
  const rows = [...block.children];

  // Structure: back-to-top, local-footer, global-footer
  if (rows.length >= 1) {
    // Back to top button (first row)
    const backToTop = rows[0];
    backToTop.classList.add('footer-pharma-back-to-top');

    const backBtn = backToTop.querySelector('a');
    if (backBtn) {
      backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  if (rows.length >= 2) {
    // Local footer (product-specific)
    const localFooter = rows[1];
    localFooter.classList.add('footer-pharma-local');

    // Style logo
    const logo = localFooter.querySelector('picture');
    if (logo) {
      logo.closest('p')?.classList.add('footer-logo');
    }

    // Style legal text
    const paragraphs = localFooter.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
      if (index > 0 && !p.querySelector('picture')) {
        p.classList.add('footer-legal');
      }
    });
  }

  if (rows.length >= 3) {
    // Global footer (company-wide)
    const globalFooter = rows[2];
    globalFooter.classList.add('footer-pharma-global');

    // Top section: AZ logo + links
    const firstDiv = globalFooter.querySelector(':scope > div:first-child');
    if (firstDiv) {
      firstDiv.classList.add('footer-global-top');

      const logo = firstDiv.querySelector('picture');
      if (logo) {
        logo.closest('p')?.classList.add('footer-global-logo');
      }

      const links = firstDiv.querySelectorAll('a');
      if (links.length > 0) {
        const linksContainer = document.createElement('div');
        linksContainer.classList.add('footer-global-links');
        links.forEach(link => {
          const linkWrapper = link.closest('p');
          if (linkWrapper) {
            linksContainer.appendChild(linkWrapper);
          }
        });
        firstDiv.appendChild(linksContainer);
      }
    }

    // Middle section: Copyright + badges
    const secondDiv = globalFooter.querySelector(':scope > div:nth-child(2)');
    if (secondDiv) {
      secondDiv.classList.add('footer-global-middle');

      // Badges container
      const badges = secondDiv.querySelectorAll('picture');
      if (badges.length > 0) {
        const badgesContainer = document.createElement('div');
        badgesContainer.classList.add('footer-badges');
        badges.forEach(badge => {
          badgesContainer.appendChild(badge.closest('p'));
        });
        secondDiv.appendChild(badgesContainer);
      }
    }
  }

  // Add overall container
  block.classList.add('footer-pharma-container');
}
