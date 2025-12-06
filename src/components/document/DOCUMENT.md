# Document

A simple document link row with format-aware icon, title link, meta text, and optional description. Uses the shared Link and Icon components and design tokens.

## Usage
```tsx
import { Document } from "@ntg-design-system/components";

<Document
  title="Annual report"
  href="/files/annual-report.pdf"
  fileFormat="PDF"
  fileSize="1.2 MB"
  description="Summary of financial performance"
/>
```

## Props
- `title` (string, required): Document title text.
- `href` (string, required): Destination URL.
- `fileFormat` ("DOCX" | "PDF" | "XLSX" | "PPTX", default "DOCX"): Controls icon and meta prefix.
- `fileSize` (string, optional): File size text appended to the meta line.
- `description` (string, optional): Optional helper/description line beneath the header.
- `external` (boolean, optional): Opens in a new tab when true.
- `ariaLabel` (string, optional): Accessible label for the title link.
- `className` (string, optional): Additional classes on the root.

## Styling
- Icon: Font Awesome regular style, mapped per format; 32px size; wrapper padding `--sp-xs`; surface background `--clr-surface-secondary`.
- Title link: Underline by default and hover; no underline on focus to show Link focus border; uses `--clr-link-default` and inherits Link focus styles.
- Meta: `--clr-text-helper`, 14px.
- Description: `--clr-text-default`, 14px.

## Storybook
See Component Library → Components → Document for format variations and external link example.
