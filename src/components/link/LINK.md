# Link Component

A simple, accessible link component for navigation and external links. The link adapts to different themes automatically through the design system's token architecture.

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System?node-id=2189-2267&t=ea1GVGvBRPEpKpIT-1)

## Features

- **Simple & Clean**: No variants, sizes, or icons - just straightforward links with no underline decoration
- **Accessible**: WCAG 2.1 AA compliant with proper focus states and keyboard navigation
- **Theme-Aware**: Automatically adapts to NT.GOV.AU and NTG Central themes
- **Inline & Standalone**: Works seamlessly within paragraphs or as standalone links
- **All States**: Default, hover, visited, and focus states with proper visual feedback

## Usage

### React Component

```tsx
import { Link } from '@ntg-design-system/components';

// Basic link
<Link href="/about">About Us</Link>

// Disabled link
<Link href="#" disabled>Unavailable</Link>

// Link with custom click handler
<Link href="#" onClick={(e) => handleClick(e)}>
  Custom Action
</Link>
```

### HTML Implementation

```html
<!-- Basic Link -->
<a href="/about" class="ntgds-link"> About Us </a>

<!-- Disabled Link -->
<a href="#" class="ntgds-link ntgds-link--disabled" aria-disabled="true">
  Unavailable
</a>

<!-- Link in Paragraph -->
<p>
  Visit our <a href="/about" class="ntgds-link">about page</a> to learn more.
</p>
```

## Props / Attributes

### React Props

| Prop        | Type                          | Default | Description                         |
| ----------- | ----------------------------- | ------- | ----------------------------------- |
| `href`      | `string`                      | `'#'`   | Link destination URL                |
| `children`  | `ReactNode`                   | -       | Link text or content                |
| `disabled`  | `boolean`                     | `false` | Disables link interaction           |
| `onClick`   | `(event: MouseEvent) => void` | -       | Click event handler                 |
| `className` | `string`                      | -       | Additional CSS classes              |
| `ariaLabel` | `string`                      | -       | Accessible label for screen readers |

### HTML Classes

| Class                  | Description                |
| ---------------------- | -------------------------- |
| `ntgds-link`           | Base link class (required) |
| `ntgds-link--disabled` | Disabled state styling     |

## States

### Default State

Standard interactive state with blue color and no underline.

**Visual indicators:**

- Color: `var(--clr-link-default)` (navy blue)
- Text decoration: None
- Border-bottom: 4px transparent
- Cursor: pointer

### Hover State

Triggered when cursor is over the link.

**Visual changes:**

- Color changes to: `var(--clr-link-hover)` (ochre/red)
- Text decoration: None
- Cursor: pointer

**Theme differences:**

- **NT.GOV.AU**: Ochre color (`#C33826`)
- **NTG Central**: Theme-specific hover color

### Visited State

Shows which links have been clicked before.

**Visual indicators:**

- Color: `var(--clr-link-visited)` (purple `#7C19AA`)
- Text decoration: None
- Same for all themes

### Focus State

Triggered by keyboard navigation (Tab key).

**Visual indicators:**

- Background: `var(--clr-focus-focus)` (orange/green)
- Border-bottom: `4px solid var(--clr-stroke-strong)` (navy/blue)
- Color returns to: `var(--clr-link-default)` (not hover)
- Text decoration: None
- No outline (uses background + border instead)

**Theme differences:**

- **NT.GOV.AU**: Orange background (`#EC8C58`), navy border
- **NTG Central**: Green background, blue border

**Important:** Links do NOT have a "pressed" or "active" state. They maintain the hover color during click.

### Disabled State

Link cannot be interacted with.

**Visual indicators:**

- Color: `var(--clr-text-disabled)`
- Opacity: `0.6`
- Cursor: not-allowed
- Pointer events disabled
- Border-bottom: transparent

**Implementation:**

```tsx
<Link href="#" disabled>
  Unavailable
</Link>
```

## Inline vs Standalone

Links work the same whether inline within paragraphs or standalone.

### Inline Links

```tsx
<p>
  Visit our <Link href="/about">about page</Link> to learn more about our
  services.
</p>
```

**Characteristics:**

- Flow naturally with surrounding text
- Inherit paragraph context
- Show all states (default, hover, visited, focus)

### Standalone Links

```tsx
<Link href="/contact">Contact Us</Link>
```

**Characteristics:**

- Can stand alone outside paragraphs
- Same styling as inline links
- Show all states (default, hover, visited, focus)

**Note:** Unlike some design systems, this link component does NOT differentiate between inline and standalone styling. All links have the same weight and behavior.

## Theming

The Link component automatically adapts to the active theme through CSS custom properties.

### CSS Custom Properties Used

| Property                             | Purpose             | NT.GOV.AU          | NTG Central        |
| ------------------------------------ | ------------------- | ------------------ | ------------------ |
| `--clr-link-default`                 | Default link color  | Navy (`#1f1f5f`)   | Blue (`#005EB8`)   |
| `--clr-link-hover`                   | Hover state color   | Ochre (`#c33826`)  | Theme hover        |
| `--clr-link-visited`                 | Visited state color | Purple (`#7c19aa`) | Purple (`#7c19aa`) |
| `--clr-stroke-strong`                | Focus border color  | Navy               | Blue               |
| `--clr-focus-focus`                  | Focus background    | Orange (`#ec8c58`) | Green              |
| `--clr-text-disabled`                | Disabled text       | Grey               | Grey               |
| `--type-font-default`                | Font family         | Lato               | Roboto             |
| `--type-desktop-body-default-size`   | Font size           | 16px               | 16px               |
| `--type-desktop-body-default-weight` | Font weight         | 400                | 400                |
| `--type-desktop-body-default-lh`     | Line height         | 24px               | 24px               |

### Theme Switching

Links automatically update when the theme changes:

```typescript
// Themes are controlled via data-brand attribute
document.documentElement.setAttribute("data-brand", "ntg"); // NT.GOV.AU
document.documentElement.setAttribute("data-brand", "ntgcentral"); // NTG Central
```

### Key Visual Differences

**NT.GOV.AU Theme:**

- Font: Lato
- Default: Navy blue
- Hover: Ochre (earthy red-orange)
- Focus background: Orange
- Focus border: Navy

**NTG Central Theme:**

- Font: Roboto
- Default: Corporate blue
- Hover: Theme-specific color
- Focus background: Green
- Focus border: Blue

## Accessibility

### Keyboard Navigation

- **Tab**: Navigate to link
- **Shift + Tab**: Navigate to previous element
- **Enter**: Activate link
- **Space**: Activate link (when focused)

### Screen Reader Support

The link component is fully accessible to screen readers:

**Basic link:**

```html
<Link href="/about">About Us</Link>
<!-- Announces: "About Us, link" -->
```

**Link with aria-label:**

```html
<Link href="/report.pdf" ariaLabel="Download quarterly report PDF, 352 kilobytes">
  Download Report
</Link>
```

**Disabled link:**

```html
<Link href="#" disabled>Unavailable</Link>
<!-- Announces: "Unavailable, link, disabled" -->
```

### Focus Indicators

All links include a visible focus indicator that meets WCAG 2.1 Level AA requirements:

- Focus background: High contrast color
- Focus border: 4px bottom border
- Color returns to default (not hover)
- Clearly visible in all contexts

### Color Contrast

All link states meet WCAG 2.1 Level AA contrast requirements:

- **Default**: Navy on white (≥7:1)
- **Hover**: Ochre on white (≥4.5:1)
- **Visited**: Purple on white (≥4.5:1)
- **Focus**: Orange/green background with navy/blue border (high contrast)
- **Disabled**: Reduced contrast intentional (3:1 acceptable for disabled)

### Best Practices

✅ **Do:**

- Use descriptive link text ("Download annual report" not "Click here")
- Ensure links are keyboard accessible
- Provide context for screen readers
- Use proper href attributes
- Rely on color change for hover/visited states

❌ **Don't:**

- Use vague text like "Click here" or "Read more"
- Create fake links with `href="#"` for actions (use buttons instead)
- Override focus states
- Use links for non-navigation actions
- Add custom underlines or text decorations

## Examples

### Navigation Menu

```tsx
<nav>
  <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/about">About</Link>
    </li>
    <li>
      <Link href="/services">Services</Link>
    </li>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
  </ul>
</nav>
```

### Document Downloads

```tsx
<div>
  <h2>Available Documents</h2>
  <ul>
    <li>
      <Link href="/annual-report.pdf">Annual Report 2024 (PDF, 2.4 MB)</Link>
    </li>
    <li>
      <Link href="/financial-statement.pdf">
        Financial Statement (PDF, 1.8 MB)
      </Link>
    </li>
    <li>
      <Link href="/policy-document.doc">Policy Document (DOC, 856 KB)</Link>
    </li>
  </ul>
</div>
```

### Inline Content Links

```tsx
<article>
  <h1>Welcome to Our Website</h1>
  <p>
    For more information about our organization, please visit our{" "}
    <Link href="/about">about page</Link>. You can also{" "}
    <Link href="/contact">contact us</Link> directly or{" "}
    <Link href="/annual-report.pdf">
      download our annual report (PDF, 2.4 MB)
    </Link>
    .
  </p>
</article>
```

### Footer Links

```tsx
<footer>
  <div>
    <h3>Quick Links</h3>
    <ul>
      <li>
        <Link href="/privacy">Privacy Policy</Link>
      </li>
      <li>
        <Link href="/terms">Terms of Service</Link>
      </li>
      <li>
        <Link href="/accessibility">Accessibility</Link>
      </li>
      <li>
        <Link href="/sitemap">Sitemap</Link>
      </li>
    </ul>
  </div>
</footer>
```

### Conditional Links

```tsx
function DocumentLink({ available }: { available: boolean }) {
  return available ? (
    <Link href="/document.pdf">Download Document (PDF, 352 KB)</Link>
  ) : (
    <Link href="#" disabled>
      Document Unavailable
    </Link>
  );
}
```

## Browser Support

The Link component supports all modern browsers:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

**Fallbacks:**

- CSS custom properties: Fallback values provided in tokens
- Focus-visible: Graceful degradation for older browsers
- Transitions: Work in all modern browsers

## Technical Details

### File Structure

```
src/components/link/
├── link.css           # Component styles
├── Link.tsx          # React component
├── Link.stories.tsx  # Storybook stories
└── LINK.md          # This documentation
```

### CSS Architecture

The link uses the design system's layered CSS architecture:

```css
@layer components {
  .ntgds-link {
    /* Base link styles referencing semantic tokens */
  }
}
```

**Token chain:**

1. **Primitive**: `--ntg-colour-primary--blue-default: #1f1f5f`
2. **Theme-Primitive**: `--theme-colour-primary-blue-default: var(--ntg-colour-primary--blue-default)`
3. **Semantic**: `--clr-link-default: var(--theme-colour-primary-blue-default)`
4. **Component**: `color: var(--clr-link-default)`

### Bundle Size

- CSS: ~1KB minified
- React component: ~0.5KB minified (with tree-shaking)
- Zero runtime dependencies (except React)

## Design Specifications

Based on the NT Government Design System specifications ([View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System?node-id=2189-2267&t=ea1GVGvBRPEpKpIT-1)):

### Default State

```
Color: var(--clr-link-default, #1F1F5F)
Font: Lato, 16px, weight 400
Line-height: 24px
Text-decoration: none
Border-bottom: 4px transparent
```

### Hover State

```
Color: var(--clr-link-hover, #C33826)
Text-decoration: none
Border-bottom: 4px transparent
```

### Visited State

```
Color: var(--clr-link-visited, #7C19AA)
Text-decoration: none
Border-bottom: 4px transparent
```

### Focus State

```
Color: var(--clr-link-default, #1F1F5F)
Background: var(--clr-focus-focus, #EC8C58)
Text-decoration: none
Border-bottom: 4px solid var(--clr-stroke-strong, #1F1F5F)
Outline: none (replaced with background + border)
```

## Related Components

- **Button**: For actions and form submissions
- **Navigation**: For site navigation menus
- **Breadcrumb**: For hierarchical navigation

## Changelog

### Version 1.0.0 (November 2025)

- Initial release
- Basic link functionality without underline decoration
- Full theme support (NT.GOV.AU and NTG Central)
- Accessibility compliant (WCAG 2.1 AA)
- All states implemented (default, hover, visited, focus)
- Comprehensive documentation with Figma design reference

## See Also

- [Button Component Documentation](../button/BUTTON.md)
- [CSS Architecture Documentation](../../REFACTORING-SUMMARY.md)
- [Design Tokens](../../tokens/ntg-design-system-tokens.css)
