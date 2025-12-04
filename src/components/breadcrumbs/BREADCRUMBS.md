# Breadcrumbs Component

A breadcrumbs component that displays hierarchical navigation paths with support for collapsed variants and an interactive dropdown menu for long navigation paths.

## Features

- **Two Display Variants** - Default (full path) and collapsed (first ... last) modes
- **Interactive Dropdown** - Click ellipsis to reveal hidden breadcrumb items
- **Semantic HTML** - Uses `<nav>` and `<ol>` elements with proper ARIA attributes
- **Link Integration** - Reuses design system Link component for consistent styling
- **Icon Support** - Chevron separators and ellipsis icon via Icon component
- **Accessible** - Full keyboard navigation, screen reader support, ARIA labels
- **Token-Based Styling** - Uses semantic design tokens for theming
- **Responsive** - Mobile-friendly with adaptive dropdown sizing
- **Smooth Animations** - Fade-in/slide-down dropdown with reduced-motion support

## Usage

### Basic Example

```tsx
import { Breadcrumbs } from "@ntg/design-system";

<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Details" },
  ]}
/>
```

### Collapsed Variant with Dropdown

```tsx
<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Business Services", href: "/business" },
    { label: "Consulting", href: "/consulting" },
    { label: "Digital Transformation", href: "/digital" },
    { label: "Current Project" },
  ]}
  variant="collapsed"
/>
```

## Props

| Prop        | Type               | Default        | Description                                                    |
| ----------- | ------------------ | -------------- | -------------------------------------------------------------- |
| `items`     | `BreadcrumbItem[]` | required       | Array of breadcrumb items with label and optional href         |
| `variant`   | `string`           | `'default'`    | Display variant: `'default'` (full) or `'collapsed'` (ellipsis)|
| `className` | `string`           | `''`           | Additional CSS classes                                         |
| `ariaLabel` | `string`           | `'Breadcrumb'` | Accessible label for the navigation element                    |

### BreadcrumbItem Interface

```typescript
interface BreadcrumbItem {
  label: string;   // Display text for the breadcrumb
  href?: string;   // URL (optional, omit for current page)
}
```

## Variants

### Default Variant

Displays all breadcrumb items in a horizontal list:

```tsx
<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Page 1", href: "/page-1" },
    { label: "Parent page", href: "/parent" },
    { label: "Current page" },
  ]}
  variant="default"
/>
```

**Output:** Home > Page 1 > Parent page > Current page

### Collapsed Variant

Shows only first and last items with an interactive ellipsis dropdown:

```tsx
<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Page 1", href: "/page-1" },
    { label: "Parent page", href: "/parent" },
    { label: "Current page" },
  ]}
  variant="collapsed"
/>
```

**Output:** Home > ... > Current page

**Dropdown Behavior:**
- Click the ellipsis (...) button to open a dropdown showing hidden items
- Dropdown is center-aligned below the ellipsis
- Fade-in/slide-down animation (200ms)
- Click outside, press Escape, or select an item to close
- Fully keyboard accessible with proper focus management

## Dropdown Functionality

### Opening the Dropdown

- **Mouse:** Click the ellipsis icon
- **Keyboard:** Tab to ellipsis button, press Enter or Space

### Closing the Dropdown

- Click outside the dropdown menu
- Press the Escape key
- Click any item in the dropdown menu
- Click the ellipsis button again

### Dropdown Positioning

The dropdown menu is:
- **Center-aligned** below the ellipsis icon
- Positioned with `top: calc(100% + 4px)` for 4px gap
- Uses `transform: translateX(-50%)` for perfect centering
- Has `z-index: 1000` to appear above other content
- Constrains width: `min-width: 200px`, `max-width: 300px`
- Adjusts on mobile: `max-width: calc(100vw - 32px)`

### Dropdown Animation

The dropdown features a smooth entrance animation:

```css
@keyframes ntgds-breadcrumbs-dropdown-fade {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
```

**Animation Details:**
- Duration: 200ms
- Easing: ease-out
- Effect: Fades in while sliding down 8px
- Respects `prefers-reduced-motion` (no animation when enabled)

## Styling and Tokens

The Breadcrumbs component uses semantic design tokens:

| Token                     | Purpose                          | Fallback Value |
| ------------------------- | -------------------------------- | -------------- |
| `--clr-link-default`      | Breadcrumb link color            | `#1f1f5f`      |
| `--clr-link-hover`        | Link hover color                 | `#c33826`      |
| `--clr-link-visited`      | Visited link color               | `#7c19aa`      |
| `--clr-focus-focus`       | Focus outline color              | `#ec8c58`      |
| `--clr-stroke-strong`     | Focus border bottom              | `#1f1f5f`      |
| `--clr-text-default`      | Current page text                | `#3b3b3a`      |
| `--ntg-colour-secondary-ochre-default` | Separator chevron color | `#c33826`      |
| `--clr-surface-default`   | Dropdown background              | `#fff`         |
| `--clr-surface-hover`     | Ellipsis and dropdown item hover | `#eae9e8`      |
| `--sp-xs`                 | Gap between items                | `8px`          |
| `--sp-md`                 | Dropdown item padding            | `16px`         |
| `--type-font-default`     | Font family                      | `"Lato"`       |
| `--type-desktop-body-default-size` | Font size             | `16px`         |
| `--type-desktop-body-default-line-height` | Line height    | `24px`         |

**Dropdown Styling:**
- Background: white (`--clr-surface-default`)
- Hover state: light gray background (`--clr-surface-hover`)
- Focus state: 4px orange focus ring (box-shadow)
- Items render as plain text (non-interactive text spans)
- Shadow: `0px 6px 12px rgba(0, 0, 0, 0.1)`
- Z-index: `1000`
- Width: `min-width: 200px`, `max-width: 300px`
- Mobile: `max-width: calc(100vw - 32px)` on ≤768px
- Separator icon size: `14px` (chevron-right, ochre color)
- Ellipsis icon size: `24px` (ellipsis, text default color)

## Accessibility

The Breadcrumbs component follows WCAG 2.1 AA guidelines:

### Semantic HTML

- Uses `<nav>` element with `aria-label` attribute
- Uses `<ol>` (ordered list) for breadcrumb structure
- Uses `<li>` for individual items

### ARIA Attributes

- `aria-label="Breadcrumb"` on `<nav>` (customizable via prop)
- `aria-current="page"` on current page item
- `aria-hidden="true"` on separator icons
- `aria-expanded` on ellipsis button (true/false based on state)
- `aria-haspopup="true"` on ellipsis button
- `role="menu"` on dropdown list
- `role="menuitem"` on dropdown items

### Keyboard Navigation

| Key                | Action                                               |
| ------------------ | ---------------------------------------------------- |
| `Tab`              | Move focus between links and ellipsis button         |
| `Shift + Tab`      | Move focus backwards                                 |
| `Enter` or `Space` | Activate focused link or toggle dropdown             |
| `Escape`           | Close dropdown and return focus to ellipsis button   |

### Screen Reader Support

- Navigation landmark announced as "Breadcrumb navigation"
- Current page announced with "current page"
- Separator icons hidden from screen readers
- Dropdown state announced (expanded/collapsed)
- Hidden items count communicated via ellipsis button label

### Focus Management

- Visible focus indicators on all interactive elements
- Breadcrumb links: orange background + 4px navy border-bottom
- Dropdown items: 4px orange focus ring using `box-shadow`
- Focus ring uses `box-shadow: 0 0 0 4px var(--clr-focus-focus)` for clarity

### Reduced Motion

Users with motion sensitivity see instant dropdown appearance without animation:

```css
@media (prefers-reduced-motion: reduce) {
  .ntgds-breadcrumbs__dropdown {
    animation: none;
  }
}
```

## Mobile Behavior

On mobile devices (max-width: 768px):

- Collapsed variant is recommended for space efficiency
- Dropdown maintains same interaction pattern (no modal/sheet conversion)
- Dropdown width adjusts: `max-width: calc(100vw - 32px)`
- Touch-friendly 44px minimum tap target on ellipsis button
- Same keyboard/assistive tech support

**Recommendation:** Use `variant="collapsed"` by default on mobile to save horizontal space.

## Implementation Details

### Collapsed Variant Logic

When `variant="collapsed"` and `items.length > 2`:

1. Display array becomes: `[items[0], { label: "...", href: undefined }, items[items.length - 1]]`
2. Middle items extracted: `items.slice(1, items.length - 1)`
3. Ellipsis button triggers dropdown toggle
4. Dropdown shows all middle items as plain text spans (non-interactive)
5. Items have keyboard focus support and hover background state

### Click-Outside Detection

Uses `useEffect` with `mousedown` event listener:

```typescript
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      ellipsisRef.current &&
      !ellipsisRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }
}, [isOpen]);
```

### Escape Key Handling

Separate `useEffect` for keyboard interaction:

```typescript
useEffect(() => {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      ellipsisRef.current?.focus();
    }
  };

  if (isOpen) {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }
}, [isOpen]);
```

### Link Component Integration

- Uses design system `Link` component for breadcrumb links
- Inherits all Link styling: underline, hover ochre, visited purple
- Focus state: orange background + navy border-bottom
- Dropdown items also use Link component for consistency

### Icon Component Integration

- Chevron separators: `<Icon name="chevron-right" style={{ fontSize: "14px", color: "var(--ntg-colour-secondary-ochre-default, #c33826)" }} />`
- Ellipsis button: `<Icon name="ellipsis" style={{ fontSize: "24px", color: "var(--clr-text-default, #3b3b3a)" }} />`
- Custom fontSize and color styles override default Icon sizing
- Chevron uses ochre token (`--ntg-colour-secondary-ochre-default`) for visual hierarchy

## Browser Support

The Breadcrumbs component works in all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**CSS Features Used:**
- CSS Custom Properties (design tokens)
- Flexbox layout
- CSS Animations (`@keyframes`)
- `prefers-reduced-motion` media query
- `transform` and `translateX/Y` for positioning

## Storybook Examples

See `Breadcrumbs.stories.tsx` for interactive demos:

- **Default** - Four-level breadcrumb with full path
- **Collapsed** - Four-level breadcrumb with ellipsis dropdown
- **TwoLevels** - Simple two-item breadcrumb (Home > Current)
- **DeepNavigation** - Six-level full breadcrumb
- **DeepNavigationCollapsed** - Six-level collapsed with dropdown
- **WithLongLabels** - Long text labels in collapsed mode
- **SingleLevel** - Single item (Home only)
- **CustomAriaLabel** - Custom navigation label
- **CollapsedWithDropdownInteractive** - Interactive demo with dropdown
- **MobileCollapsed** - Mobile viewport demonstration

## Best Practices

1. **Use Collapsed for Deep Paths** - For navigation with 4+ levels, use `variant="collapsed"`
2. **Keep Labels Concise** - Breadcrumb labels should be 1-3 words when possible
3. **Current Page No Link** - Omit `href` for the current page (last item)
4. **Consistent Hierarchy** - Breadcrumbs should reflect actual site structure
5. **Mobile First** - Consider defaulting to `collapsed` variant on mobile
6. **Test Keyboard Nav** - Verify Tab, Enter, Escape work correctly
7. **Screen Reader Testing** - Test with NVDA/JAWS to ensure proper announcements
8. **Avoid Too Many Levels** - 6+ levels may indicate information architecture issues

## Comparison Table

| Feature               | Default Variant | Collapsed Variant |
| --------------------- | --------------- | ----------------- |
| All items visible     | ✓               | ✗                 |
| Space efficient       | ✗               | ✓                 |
| Dropdown menu         | ✗               | ✓                 |
| Animation             | N/A             | ✓                 |
| Mobile friendly       | ✗               | ✓                 |
| Best for 2-3 levels   | ✓               | ✗                 |
| Best for 4+ levels    | ✗               | ✓                 |

## Changelog

### v1.0.0
- Initial implementation with default and collapsed variants
- Array-based API with `BreadcrumbItem` interface
- Link component integration for breadcrumb links
- Icon component integration (chevron-right, ellipsis)
- Semantic HTML with `<nav>`, `<ol>`, ARIA attributes
- Interactive dropdown menu for collapsed variant
- Center-aligned dropdown positioning
- Fade-in/slide-down animation (200ms, ease-out)
- Click-outside and Escape key handlers
- Keyboard navigation support
- Screen reader accessibility
- `prefers-reduced-motion` support
- Mobile responsive design
- Token-based styling with 14+ semantic tokens
- Comprehensive Storybook documentation
