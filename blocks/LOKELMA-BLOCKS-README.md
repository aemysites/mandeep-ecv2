# LOKELMA Custom EDS Blocks

Custom blocks created for the LOKELMA pharmaceutical website based on Figma design (node-id: 677-7864).

## Created Blocks

### 1. hero-banner
**Purpose**: Full-width banner with background image and title overlay
**Location**: `blocks/hero-banner/`
**Files**:
- `hero-banner.js` - EDS decoration function
- `hero-banner.css` - Styling with teal background
- `hero-banner.md` - Usage documentation

**Features**:
- Teal background (#00927c) with optional background image
- White text overlay
- Responsive layout
- Centered content with max-width constraint

**Usage in Markdown**:
```markdown
+----------------------------------------------------------+
| **Hero-Banner**                                          |
+----------------------------------------------------------+
| ![Background](./images/hero-bg.png)                      |
+----------------------------------------------------------+
| ## Dosing & Administration                               |
+----------------------------------------------------------+
```

---

### 2. columns-dosing
**Purpose**: Two-column layout with colored header for dosing information
**Location**: `blocks/columns-dosing/`
**Files**:
- `columns-dosing.js` - Phase detection and structure setup
- `columns-dosing.css` - Color-coded styling
- `columns-dosing.md` - Usage documentation

**Features**:
- Colored header bar (green for correction, pink for maintenance)
- Two-column layout: image + bulleted content
- Automatic phase detection from header text
- Box shadow for elevation
- Responsive (stacks on mobile)

**Usage in Markdown**:
```markdown
+---------------------------------------------------------------+
| **Columns-Dosing**                                            |
+---------------------------------------------------------------+
| Correction Phase Dosing<sup>1*</sup>                          |
+---------------------------------------------------------------+
| Recommended dosing in the correction phase                    |
+---------------------------------------------------------------+
| Correction Phase  \|  TID dosing                              |
+---------------------------------------------------------------+
| ![Dosing](./images/dosing-3x.png)                             |
| - Bullet point 1                                              |
| - Bullet point 2                                              |
+---------------------------------------------------------------+
```

---

### 3. section-footnotes
**Purpose**: Footnotes, disclaimers, and reference lists
**Location**: `blocks/section-footnotes/`
**Files**:
- `section-footnotes.js` - Section detection and styling
- `section-footnotes.css` - Small text styling
- `section-footnotes.md` - Usage documentation

**Features**:
- Separate styling for footnotes (black) vs references (blue)
- Automatic detection of reference sections
- Support for ordered lists
- Small font size (14px) for legal text

**Usage in Markdown**:
```markdown
+---------------------------------------------------------------+
| **Section-Footnotes**                                         |
+---------------------------------------------------------------+
| * Disclaimer text here                                        |
| † Additional note<sup>1</sup>                                 |
+---------------------------------------------------------------+
| **References:**                                               |
| 1. Reference citation here                                    |
| 2. Another reference                                          |
+---------------------------------------------------------------+
```

---

### 4. header-pharma
**Purpose**: Multi-level navigation for pharmaceutical sites
**Location**: `blocks/header-pharma/`
**Files**:
- `header-pharma.js` - Navigation structure and mobile menu
- `header-pharma.css` - Four-level navigation styling
- `header-pharma.md` - Usage documentation

**Features**:
- Utility navigation (login, language selector)
- Main navigation with logo and menu
- Breadcrumb navigation
- Sub-navigation tabs with active state
- Responsive hamburger menu
- Sticky header capable

**Usage**: Loads from `/nav` fragment (see header-pharma.md for details)

---

### 5. footer-pharma
**Purpose**: Multi-part footer with back-to-top, local, and global sections
**Location**: `blocks/footer-pharma/`
**Files**:
- `footer-pharma.js` - Section structure and scroll behavior
- `footer-pharma.css` - Dark theme styling
- `footer-pharma.md` - Usage documentation

**Features**:
- Back-to-top smooth scroll button
- Local footer (product-specific branding)
- Global footer (company links and certifications)
- Dark background (#1c1c1c) with white text
- Responsive layout

**Usage in Markdown**:
```markdown
+---------------------------------------------------------------+
| **Footer-Pharma**                                             |
+---------------------------------------------------------------+
| [Back to Top](#) ![Icon](./images/back-icon.svg)             |
+---------------------------------------------------------------+
| ![Logo](./images/lokelma-logo.svg)                            |
| Legal text and product codes                                  |
+---------------------------------------------------------------+
| ![AZ Logo](./images/az-logo.svg)                              |
| [Legal Notice](#) [Privacy](#) [Contact](#)                   |
| Copyright text                                                |
| ![Badge1](./images/badge1.svg) ![Badge2](./images/badge2.svg)|
+---------------------------------------------------------------+
```

---

## CSS Variables Required

Add these variables to your `styles/styles.css`:

```css
:root {
  /* LOKELMA Brand Colors */
  --lokelma-green: #00927c;      /* Correction phase, accents */
  --lokelma-pink: #c62263;       /* Maintenance phase, accents */
  --lokelma-blue: #003b45;       /* Primary text, headers */
  --lokelma-gold: #f0ab00;       /* Active tab indicator */

  /* AstraZeneca Colors */
  --az-mulberry: #830051;        /* Language selector active */
  --az-dark-gray: #1c1c1c;       /* Footer background */
  --az-gray: #f3f3f3;            /* Utility nav background */
  --az-border: #dddddd;          /* Borders */
}
```

## Typography

The blocks use these font families (ensure they're loaded):

- **Lexia**: Headings, navigation, body text
  - Light (300), Regular (400), Medium (500)
- **Inter**: Lists, legal text, labels
  - Regular (400), Semi-Bold (600), Bold (700)

## EDS Compatibility Checklist

All blocks follow EDS standards:

✅ **Naming Convention**: `blockname-variant` format
✅ **File Structure**: Each block has `.js`, `.css`, `.md` files
✅ **Decoration Function**: `export default function decorate(block)` pattern
✅ **CSS Scoping**: All styles scoped to block class
✅ **Responsive Design**: Mobile-first with media queries
✅ **Accessibility**: Semantic HTML, ARIA attributes where needed
✅ **No Dependencies**: Blocks work standalone (except header/footer using fragment)

## Testing Blocks

1. **Preview individual blocks**: Create test pages in `/content/`
2. **Check responsive behavior**: Test at 320px, 768px, 900px, 1200px widths
3. **Verify colors**: Ensure CSS variables are defined in `styles/styles.css`
4. **Test interactions**: Back-to-top scroll, mobile menu toggle
5. **Validate markup**: Check EDS grid table format in markdown

## Integration with LOKELMA Page

To recreate the full LOKELMA Dosing & Administration page:

1. **Header**: Use `Header-Pharma` block with `/nav` fragment
2. **Hero**: Use `Hero-Banner` block with teal background
3. **Content Sections**: Use `Columns-Dosing` block (4 instances)
   - Correction Phase (green header)
   - Maintenance Phase (pink header)
   - Hemodialysis Dosing (pink header)
   - Administration Instructions
4. **Footnotes**: Use `Section-Footnotes` block
5. **Footer**: Use `Footer-Pharma` block

## Assets Required

Images extracted from Figma to `content/images/`:
- `lokelma-hero-bg1.png` - Hero background
- `dosing-v01-1.png` - Correction phase dosing card
- `dosing-v01-2.png` - Maintenance phase dosing card
- `dosing-v01-4.png` - Administration images
- Various SVG icons for navigation and footer badges

## Support

For questions or issues with these blocks:
1. Check individual block `.md` files for usage examples
2. Verify CSS variables are defined in `styles/styles.css`
3. Ensure fonts (Lexia, Inter) are loaded
4. Test in EDS preview server (`aem up`)

---

**Created**: October 30, 2025
**Source**: Figma design - LOKELMA-myAZ-integration_Phase4 (node-id: 677-7864)
**EDS Compatible**: ✅ Yes
