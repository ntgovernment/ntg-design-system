# Pagination Component

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System?node-id=TBD&m=dev)

The Pagination component provides intuitive navigation through pages of content. It combines semantic Link elements for Previous/Next navigation with Button elements for page selection, offering clear visual hierarchy and excellent accessibility.

## Features

- **Smart Ellipsis** - Shows all pages when ≤7 total; uses ellipsis (...) for larger page counts
- **Sliding Window** - Displays current page ±2 with first and last pages always visible
- **Responsive Design** - Adapts page display count on tablets (5 pages) and mobile (3 pages)
- **Clear Active State** - Current page displayed as disabled primary button for non-clickability
- **Navigation Links** - Previous/Next use semantic Link components with chevron icons
- **Auto-Hide** - Previous link hidden on first page; Next link hidden on last page
- **Full Accessibility** - ARIA labels, semantic HTML, keyboard support, focus management
- **Token-Based Styling** - Uses design system tokens for colors, spacing, and typography

## Basic Usage

```tsx
import { Pagination } from "ntg-design-system";
import { useState } from "react";

export default function BlogPosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 25;

  return (
    <div>
      {/* Your paginated content here */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | required | Current active page (1-indexed). Must be between 1 and totalPages. |
| `totalPages` | `number` | required | Total number of pages available. |
| `onPageChange` | `(page: number) => void` | required | Callback fired when user clicks a page number or Previous/Next link. |
| `showPrevNext` | `boolean` | `true` | Show/hide Previous and Next navigation links. |
| `maxVisiblePages` | `number` | `7` | Maximum page numbers to display before using ellipsis (...). Ellipsis threshold. |
| `className` | `string` | `""` | Additional CSS class applied to the container. |
| `ariaLabel` | `string` | `"Pagination"` | ARIA label for the navigation element. |

## Visual States

### Page Numbers

| State | Appearance | Behavior |
|-------|-----------|----------|
| Default | Navy text on transparent background (tertiary button) | Clickable, hover shows ochre background with white text |
| Current | Navy text on navy background (primary button) | Disabled, not clickable, opacity 0.6 |
| Focus | Inherits Button focus styling (outline box-shadow) | Keyboard navigable |
| Hover | Ochre background with white text | Indicates interactivity |

### Navigation Links (Previous/Next)

| State | Appearance | Behavior |
|-------|-----------|----------|
| Visible | Navy text with chevron icon | Clickable, hover shows ochre background with white text |
| Hidden | Not rendered | Hidden when at first/last page or when `showPrevNext={false}` |
| Focus | Orange underline (Link component default) | Keyboard navigable, inherited from Link component |

### Ellipsis

| State | Appearance | Behavior |
|-------|-----------|----------|
| Display | Three dots (...) in navy text | Non-interactive, used to indicate skipped pages |

## Examples

### Few Pages (No Ellipsis)

When total pages ≤ 7, all pages display without ellipsis:

```tsx
<Pagination
  currentPage={2}
  totalPages={5}
  onPageChange={setCurrentPage}
/>
// Renders: Previous 1 2* 3 4 5 Next
```

### Many Pages (With Ellipsis)

When total pages > 7, sliding window pattern with ellipsis:

```tsx
<Pagination
  currentPage={10}
  totalPages={21}
  onPageChange={setCurrentPage}
/>
// Renders: Previous 1 ... 8 9 10* 11 12 ... 21 Next
```

### Without Previous/Next

Hide navigation links and show only page numbers:

```tsx
<Pagination
  currentPage={5}
  totalPages={10}
  onPageChange={setCurrentPage}
  showPrevNext={false}
/>
// Renders: 1 2 3 4 5* 6 7 8 9 10
```

### Custom Max Visible Pages

Reduce ellipsis threshold to show fewer pages:

```tsx
<Pagination
  currentPage={5}
  totalPages={10}
  onPageChange={setCurrentPage}
  maxVisiblePages={5}
/>
// Renders: Previous 1 ... 3 4 5* 6 7 ... 10 Next
```

## Ellipsis Algorithm

The component uses a sliding window pattern to display pages:

**Rule 1: Show all pages if total ≤ maxVisiblePages (default 7)**
```
totalPages: 7
Result: [1, 2, 3, 4, 5, 6, 7]
```

**Rule 2: Sliding window if total > maxVisiblePages**
```
totalPages: 21, currentPage: 10
Pattern: [1, ..., current±2, ..., last]
Result: [1, "...", 8, 9, 10, 11, 12, "...", 21]

totalPages: 21, currentPage: 3
Pattern: [1, 2, 3, 4, 5, ..., 21]
Result: [1, 2, 3, 4, 5, "...", 21]

totalPages: 21, currentPage: 19
Pattern: [1, ..., 17, 18, 19, 20, 21]
Result: [1, "...", 17, 18, 19, 20, 21]
```

## Styling and Tokens

The Pagination component uses semantic design tokens for consistent theming:

| Token | Purpose | Fallback Value |
|-------|---------|----------------|
| `--clr-link-default` | Default page button text color | `#1f1f5f` |
| `--clr-link-inverse` | Hover page button text color | `#ffffff` |
| `--clr-action-default` | Active/current page background | `#1f1f5f` |
| `--clr-action-hover` | Hover background (Previous/Next) | `#c33826` |
| `--clr-focus-focus` | Focus indicator color (Links) | `#ec8c58` |
| `--clr-text-primary` | Ellipsis text color | `#1f1f5f` |
| `--sp-xs` | Gap between elements | `8px` |
| `--type-desktop-body-default-size` | Text size | `16px` |
| `--type-font-default` | Font family | `"Lato"` |

## Accessibility

The Pagination component is fully accessible and follows WCAG 2.1 AA guidelines:

### ARIA Attributes

- `role="navigation"` on the container
- `aria-label="Pagination"` (customizable via `ariaLabel` prop)
- `aria-current="page"` on the current page button
- `aria-label="Previous page"` on Previous link
- `aria-label="Next page"` on Next link
- `aria-label="Go to page X"` on each page button (when not current)
- `aria-hidden="true"` on ellipsis spans

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Move focus to next interactive element (Previous, page buttons, Next) |
| `Shift + Tab` | Move focus to previous interactive element |
| `Enter` or `Space` | Activate focused page button or navigation link |

### Focus Management

- Previous/Next Links: Orange underline indicator (inherited from Link component)
- Page Buttons: Outline box-shadow indicator (inherited from Button component)
- Current page button: Not focusable (disabled) to prevent confusion
- Visual focus indicators clearly distinguish interactive elements

### Color Contrast

All text/background combinations meet WCAG AA (4.5:1) contrast requirements:
- Navy text (#1f1f5f) on white background
- White text (#ffffff) on navy background
- White text (#ffffff) on ochre background

## Responsive Behavior

The component automatically adjusts for smaller screens:

### Desktop (>768px)
- Max visible pages: 7
- Full text labels: "Previous" and "Next"
- Standard padding and font sizes

### Tablet (480-768px)
- Max visible pages: 5
- Full text labels maintained
- Reduced padding and smaller font (14px)

### Mobile (<480px)
- Max visible pages: 3
- Navigation text hidden, icons only
- Minimal padding for touch targets
- Font size reduced to 13px for compact display

## Best Practices

1. **Page Ranges** - Use for large content lists (news, products, search results)
2. **Update URL** - Consider syncing current page with URL query parameter (`?page=2`)
3. **Scroll Position** - Reset scroll to top when changing pages for better UX
4. **Loading States** - Show loading indicator while fetching new page content
5. **Preserving State** - Store page state in parent component or URL for persistence
6. **Keyboard Focus** - Consider moving focus to main content after page change
7. **Analytics** - Track pagination clicks for user behavior insights

## Browser Support

The Pagination component works in all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Component Composition

The Pagination component internally uses:

- **Link component** - For Previous/Next navigation with semantic `<a>` elements
- **Button component** - For page numbers (tertiary variant) and current page (primary variant disabled)
- **Icon component** - For chevron-left and chevron-right icons with size "sm"

This composition ensures consistency with the design system's established patterns.

## Storybook Examples

See `Pagination.stories.tsx` for interactive demos including:

- **FewPages** - Pagination with 5 pages (no ellipsis)
- **Default** - Standard pagination with 10 pages
- **ManyPages** - Large pagination with 21 pages showing ellipsis
- **FirstPage** - Initial state with Previous link hidden
- **LastPage** - End state with Next link hidden
- **WithoutPrevNext** - Page numbers only (no navigation links)
- **CustomMaxVisible** - Ellipsis threshold set to 5 pages
- **VeryLongPagination** - 100-page example showing sliding window
- **ExactThreshold** - Edge case with exactly 7 pages
- **JustAboveThreshold** - Edge case with 8 pages
- **Interactive** - Full interactive demo with page counter

## Changelog

### v1.0.0
- Initial implementation with Link elements for Previous/Next navigation
- Button components for page numbers (tertiary and primary variants)
- Smart ellipsis logic with 7-page threshold
- Sliding window pattern: [1, ..., current±2, ..., last]
- Responsive behavior: 7 pages (desktop), 5 (tablet), 3 (mobile)
- Auto-hide Previous/Next at page boundaries
- Full ARIA support with semantic labels
- Focus management with inherited focus styles
- Keyboard navigation support
- High contrast mode support
- Reduced motion support
- 10+ interactive Storybook stories
