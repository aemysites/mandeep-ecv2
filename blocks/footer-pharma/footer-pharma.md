# Footer Pharma Block

A comprehensive multi-part footer with back-to-top button, local product footer, and global company footer.

## Features
- Back-to-top smooth scroll button
- Local footer (product-specific branding and legal)
- Global footer (company-wide links and certifications)
- Responsive layout
- Dark background (#1c1c1c) with white text

## Usage

The footer has three main sections (rows):

### Row 1: Back to Top Button

```markdown
+---------------------------------------------------------------+
| **Footer-Pharma**                                             |
+---------------------------------------------------------------+
| [Back to Top](#)                                              |
| ![Back icon](./images/back-to-top-icon.svg)                   |
+---------------------------------------------------------------+
```

### Row 2: Local Footer (Product-specific)

```markdown
+---------------------------------------------------------------+
| ![LOKELMA Logo](./images/lokelma-logo-white.svg)             |
|                                                               |
| LOKELMA® and the logo are registered trademarks of           |
| ZS Pharma, Inc., used under license by AstraZeneca Canada.   |
|                                                               |
| CA-9431E Last updated: XX/XX                                  |
+---------------------------------------------------------------+
```

### Row 3: Global Footer (Company-wide)

```markdown
+---------------------------------------------------------------+
| ![AZ Logo](./images/az-logo-white.svg)                       |
| [Legal Notice](#) [Privacy Policy](#) [Cookie Policy](#)     |
| [Contact Us](#)                                               |
|                                                               |
| © AstraZeneca Canada Inc. All rights reserved. 2025.         |
| The AstraZeneca logo is a registered trademark of            |
| AstraZeneca AB. CA-10570E                                     |
|                                                               |
| ![IMC Badge](./images/imc-badge.svg)                          |
| ![PAAB Badge](./images/paab-badge.svg)                        |
+---------------------------------------------------------------+
```

## Complete Example

```markdown
+---------------------------------------------------------------+
| **Footer-Pharma**                                             |
+---------------------------------------------------------------+
| [Back to Top](#)                                              |
| ![Back icon](./images/back-to-top-icon.svg)                   |
+---------------------------------------------------------------+
| ![LOKELMA Logo](./images/lokelma-logo-white.svg)             |
|                                                               |
| LOKELMA® is a registered trademark. Legal text here.         |
|                                                               |
| CA-9431E Last updated: 12/2023                                |
+---------------------------------------------------------------+
| ![AZ Logo](./images/az-logo-white.svg)                       |
| [Legal Notice](#) [Privacy Policy](#) [Contact Us](#)        |
|                                                               |
| © AstraZeneca Canada Inc. All rights reserved. 2025.         |
|                                                               |
| ![IMC Badge](./images/imc-badge.svg)                          |
| ![PAAB Badge](./images/paab-badge.svg)                        |
+---------------------------------------------------------------+
```

## CSS Variables Used
- `--lokelma-blue`: Back-to-top text color (#004957)
- `--lokelma-pink`: Hover color for links (#c62263)

## Behavior
- Back-to-top button scrolls to page top with smooth animation
- All footer links can be customized per product
- Badges and certifications display in a horizontal row
- Responsive: stacks vertically on mobile devices

## Customization
- Replace product logo in local footer section
- Update legal text and product codes
- Add/remove company links in global footer
- Include relevant certification badges
