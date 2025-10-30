import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav-pharma');
    const navSections = nav.querySelector('.nav-pharma-sections');
    if (navSections && !isDesktop.matches) {
      toggleMenu(nav, navSections);
    }
  }
}

function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-pharma-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');

  if (!expanded || isDesktop.matches) {
    window.addEventListener('keydown', closeOnEscape);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
  }
}

export default async function decorate(block) {
  // Load nav as fragment
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  // Create nav structure
  block.textContent = '';
  const nav = document.createElement('nav');
  nav.id = 'nav-pharma';
  nav.className = 'nav-pharma';

  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  // Structure: utility-nav, main-nav, breadcrumb, sub-nav
  const sections = [...nav.children];

  // Utility nav (top bar with login, language)
  if (sections[0]) {
    sections[0].classList.add('nav-pharma-utility');
  }

  // Main nav (logo + menu items)
  if (sections[1]) {
    sections[1].classList.add('nav-pharma-main');
    const navBrand = sections[1].querySelector('.button');
    if (navBrand) {
      navBrand.className = 'nav-pharma-brand';
      navBrand.closest('.button-container')?.classList.remove('button-container');
    }
  }

  // Breadcrumb navigation
  if (sections[2]) {
    sections[2].classList.add('nav-pharma-breadcrumb');
  }

  // Sub navigation (tabs)
  if (sections[3]) {
    sections[3].classList.add('nav-pharma-subnav');
    const navSections = sections[3];

    // Mark active tab
    const currentPath = window.location.pathname;
    const links = navSections.querySelectorAll('a');
    links.forEach(link => {
      if (link.href && currentPath.includes(link.getAttribute('href'))) {
        link.closest('li')?.classList.add('active');
      }
    });
  }

  // Hamburger for mobile
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-pharma-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav-pharma" aria-label="Open navigation">
      <span class="nav-pharma-hamburger-icon"></span>
    </button>`;

  const navSections = sections[1];
  hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
  nav.prepend(hamburger);
  nav.setAttribute('aria-expanded', 'false');

  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-pharma-wrapper';
  navWrapper.append(nav);
  block.append(navWrapper);
}
