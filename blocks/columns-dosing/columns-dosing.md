# Columns Dosing Block

A two-column layout with colored header bar for displaying pharmaceutical dosing information.

## Features
- Colored header bar (green for correction phase, pink for maintenance)
- Two-column layout: image on left, bulleted content on right
- Automatic phase detection from header text
- Responsive layout (stacks on mobile)
- Box shadow for card elevation

## Usage - Correction Phase (Green Header)

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
| ![Dosing visualization](./images/dosing-3x.png)               |
| - Once normokalemia is achieved, follow maintenance phase     |
| - If not achieved by day 3, consider other treatments         |
+---------------------------------------------------------------+
```

## Usage - Maintenance Phase (Pink Header)

```markdown
+---------------------------------------------------------------+
| **Columns-Dosing**                                            |
+---------------------------------------------------------------+
| Maintenance Phase Dosing<sup>1*</sup>                         |
+---------------------------------------------------------------+
| Recommended dosing in the maintenance phase                   |
+---------------------------------------------------------------+
| Maintenance Phase  \|  Once-daily dosing                      |
+---------------------------------------------------------------+
| ![Dosing visualization](./images/dosing-1x.png)               |
| - Use minimal effective dose<sup>†</sup>                      |
| - Titrate in 5 g increments ▲ up to 10 g or ▼ down to 5 g    |
+---------------------------------------------------------------+
```

## Row Structure
1. **Row 1**: Phase title with superscript (e.g., "Correction Phase Dosing¹*")
2. **Row 2**: Description text
3. **Row 3**: Phase label (colored header bar)
4. **Row 4**: Two columns - Image | Bulleted list

## CSS Variables Used
- `--lokelma-green`: Correction phase header (#00927c)
- `--lokelma-pink`: Maintenance phase header (#c62263)
- `--lokelma-blue`: Text color (#003b45)

## Special Formatting
- Use `<sup>` tags for superscript numbers
- Use `▲` and `▼` symbols for up/down indicators
- Symbols will be styled in green automatically
