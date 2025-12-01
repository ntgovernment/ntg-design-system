# Table Styles – NTG Design System

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System?node-id=3077-894&m=dev)

## Overview

The NTG Design System table styles provide accessible, theme-aware, and responsive tables for data display. All table assets (CSS, stories, docs) are grouped in `src/components/table/` for maintainability.

### Interactive Table Component

The `TableSortable` React component supports:

- Sortable columns (click header to sort)
- Accessible ARIA attributes and keyboard navigation
- Live editing of title and subtitle via Storybook controls
- Customizable columns and data

## Features

- Semantic HTML: `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`
- Striped rows for readability
- Responsive/mobile layout: header/cell pairs stack vertically
- Optional title and subtitle
- Accessible: ARIA attributes, keyboard navigation, screen reader support
- Token-based styling for colors, spacing, and typography

## Usage Example

```tsx
import { TableSortable } from "./TableSortable";

const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "age", label: "Age", sortable: true },
  { key: "city", label: "City" },
];

const data = [
  { name: "Alice", age: 32, city: "Darwin" },
  { name: "Bob", age: 28, city: "Katherine" },
  { name: "Charlie", age: 40, city: "Alice Springs" },
  { name: "Dana", age: 35, city: "Nhulunbuy" },
];

<TableSortable
  columns={columns}
  data={data}
  title="NTG Employees"
  subtitle="Sortable table demo. Edit these fields to see changes instantly."
/>;
```

## Props & Classes

### TableSortable Props

| Prop     | Type   | Description                                                |
| -------- | ------ | ---------------------------------------------------------- |
| columns  | array  | Table columns, each with key, label, and optional sortable |
| data     | array  | Table data, array of objects matching column keys          |
| title    | string | Table title (optional, editable in Storybook)              |
| subtitle | string | Table subtitle (optional, editable in Storybook)           |

### CSS Classes

| Class                   | Description                           |
| ----------------------- | ------------------------------------- |
| `.ntgds-table`          | Main table element                    |
| `.ntgds-table-title`    | Optional table title (above table)    |
| `.ntgds-table-subtitle` | Optional table subtitle (below title) |

## Tokens Used

| Token                     | Purpose            | Fallback Value            |
| ------------------------- | ------------------ | ------------------------- |
| `--clr-surface-primary`   | Table background   | `#fff`                    |
| `--clr-surface-secondary` | Odd row background | `#F6F6F6`                 |
| `--clr-stroke-strong-03`  | Header border      | `#949391`                 |
| `--clr-stroke-subtle`     | Row border         | `#D4D4D2`                 |
| `--clr-link-default`      | Header text color  | `#1F1F5F`                 |
| `--clr-text-body`         | Cell text color    | `#3B3B3A`                 |
| `--clr-text-default`      | Title color        | `#3B3B3A`                 |
| `--clr-text-helper`       | Subtitle color     | `#777674`                 |
| `--type-font-default`     | Font family        | `Lato, Arial, sans-serif` |

## Accessibility

- Use semantic table markup: `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`
- Add `aria-label` or `<caption>` for screen readers
- Keyboard navigation: Tab to cells, arrow keys in some screen readers
- Responsive/mobile: Table layout stacks for small screens

## Responsive/Mobile

- At max-width 600px, table, header, and cells stack vertically
- Padding reduced to 12px, font-size remains 16px
- Header width: 119px, cell width: 227px (matches Figma)

## Title & Subtitle

- Use `.ntgds-table-title` and `.ntgds-table-subtitle` above the table for optional headings
- Title: bold, 24px, center
- Subtitle: regular, 16px, center, helper color

## Storybook Demo

See `Table.stories.tsx` for a live demo of all features:

- Sortable columns (click header to sort)
- Title and subtitle (editable via controls)
- Striped rows and responsive/mobile layout
- Accessible ARIA attributes

## Best Practices

1. Use semantic markup for accessibility
2. Add ARIA labels or captions for screen readers
3. Keep tables scannable and avoid excessive columns
4. Use striped rows for readability
5. Test on mobile for stacking and touch targets
6. Use Storybook controls to preview and edit table title/subtitle live

---

**© Northern Territory Government**
