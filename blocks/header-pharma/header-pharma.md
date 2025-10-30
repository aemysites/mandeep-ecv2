# Header Pharma Block

A multi-level navigation system for pharmaceutical websites with utility nav, main nav, breadcrumbs, and sub-navigation tabs.

## Features
- Four-level navigation hierarchy
- Utility navigation (login, language selector)
- Main navigation with logo and menu items
- Breadcrumb navigation
- Sub-navigation with tabs and active state indicator
- Responsive mobile hamburger menu
- Sticky header option

## Usage

The header-pharma block loads content from a nav fragment. Create a `/nav.html` file with four sections:

```markdown
+---------------------------------------------------------------+
| **Header-Pharma**                                             |
+---------------------------------------------------------------+
```

Then create `/nav.md` with four sections:

### Section 1: Utility Navigation
```markdown
- [Medical Information](#)
- [Log Out](#)
- [EN](#) | [FR](#)
```

### Section 2: Main Navigation
```markdown
- [![Logo](./images/logo.svg)](#)
- [THERAPEUTIC AREAS](#)
- [PRODUCTS](#)
- [ABOUT US](#)
```

### Section 3: Breadcrumb
```markdown
- [Home](#)
- [Lokelma](#)
- [Dosing & Administration](#)
```

### Section 4: Sub Navigation (Tabs)
```markdown
- [Home](#)
- [About Hyperkalemia](#)
- [Efficacy Profile](#)
- [Safety Profile](#)
- [Mechanism of Action](#)
- [Dosing & Administration](#)
- [Resources](#)
```

## CSS Variables Used
- `--lokelma-gold`: Active tab indicator (#f0ab00)
- `--lokelma-pink`: Hover and active text color (#c62263)

## Active Tab Detection
The block automatically detects the current page and marks the corresponding tab as active based on the URL path.

## Mobile Behavior
- Hamburger menu appears below 900px width
- All navigation levels collapse into expandable mobile menu
- Body scroll is disabled when mobile menu is open

## Notes
- Requires `fragment.js` from the EDS boilerplate
- Loads navigation content from `/nav` path (customizable via metadata)
- Language selector should be styled with `.language` class and `.active` on current language
