# Section Footnotes Block

A simple text block for displaying footnotes, disclaimers, and reference lists.

## Features
- Separate styling for footnotes and references
- Automatic detection of reference sections
- Support for ordered lists
- Small font size (14px) for legal/reference text
- Color-coded: black for footnotes, blue for references

## Usage - Footnotes

```markdown
+---------------------------------------------------------------+
| **Section-Footnotes**                                         |
+---------------------------------------------------------------+
| * Please see Product Monograph for complete information.     |
|                                                               |
| † Monitor serum K+ and adjust dose based on level.<sup>1</sup>|
+---------------------------------------------------------------+
```

## Usage - References

```markdown
+---------------------------------------------------------------+
| **Section-Footnotes**                                         |
+---------------------------------------------------------------+
| **References:**                                               |
| 1. LOKELMA® Product Monograph. AstraZeneca Canada Inc. 2023. |
| 2. AstraZeneca. Data on File. CMC Dossier, May 7, 2018.      |
+---------------------------------------------------------------+
```

## Usage - Combined

```markdown
+---------------------------------------------------------------+
| **Section-Footnotes**                                         |
+---------------------------------------------------------------+
| * Please see Product Monograph for complete information.     |
|                                                               |
| † Monitor serum K+ and adjust dose.<sup>1</sup>               |
+---------------------------------------------------------------+
| **References:**                                               |
| 1. LOKELMA® Product Monograph. AstraZeneca Canada Inc.       |
| 2. AstraZeneca. Data on File. CMC Dossier.                   |
+---------------------------------------------------------------+
```

## CSS Variables Used
- `--lokelma-blue`: Reference text color (#003b45)

## Notes
- Use `<sup>` tags for superscript reference numbers
- Paragraphs starting with "Reference" will be styled as references
- Ordered lists will be automatically styled as reference lists
