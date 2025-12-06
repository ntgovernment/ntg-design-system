# InPageNavigation Component

## Overview

The **InPageNavigation** component displays a titled list of navigation links for page section jumping. It's designed to be placed at the top of page content (typically below the page title) to help users quickly navigate to different sections of a long page.

This component uses a distinctive left border accent (4px) and semantic anchor-based links (`#section-id` format) to provide accessible in-page navigation.

## Purpose

- **Section Navigation**: Help users jump to specific sections within a long page
- **Page Outline**: Display a table of contents or "On this page" navigation
- **Accessibility**: Provide keyboard-accessible anchor links for screen readers and keyboard navigation
- **Visual Hierarchy**: Use design tokens and semantic HTML for consistent styling across themes

## Features

✅ **Full-Width Layout**: Spans the entire container width on all screen sizes  
✅ **Responsive Design**: Same vertical layout on desktop and mobile  
✅ **Semantic Links**: Uses Link component for theme-aware, accessible navigation  
✅ **Anchor-Based**: Real `href` anchors (`#section-1`, `#section-2`) for true page jumping  
✅ **Left Border Accent**: 4px left border using `--clr-stroke-subtle` token  
✅ **Customizable Title**: Default "On this page" but fully configurable  
✅ **Design Tokens**: All colors, spacing, and typography use semantic tokens  
✅ **BEM Naming**: Follows `ntgds-*` prefix convention for consistent CSS naming  

## Props

```typescript
export interface InPageNavigationLink {
  /** Link destination (anchor format: #section-id) */
  href: string;
  /** Link label text */
  label: string;
}

export interface InPageNavigationProps {
  /** Section title (default: "On this page") */
  title?: string;
  /** Array of navigation links */
  links: InPageNavigationLink[];
  /** Additional CSS classes */
  className?: string;
}
```

### Props Details

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"On this page"` | Heading text for the navigation section. Can be customized to "Table of Contents", "Quick Links", etc. |
| `links` | `InPageNavigationLink[]` | *required* | Array of link objects with `href` and `label` properties |
| `className` | `string` | `""` | Additional CSS classes for custom styling or layout modifications |

### Link Object Structure

Each item in the `links` array must be an object with:
- **`href`** (string): The anchor link destination, typically in format `#section-id`. Should match the `id` attribute of target elements on the page
- **`label`** (string): The display text for the link

## Usage

### Basic Example

```tsx
import { InPageNavigation } from "ntg-design-system";

function DocumentationPage() {
  const sections = [
    { href: "#introduction", label: "Introduction" },
    { href: "#features", label: "Features" },
    { href: "#installation", label: "Installation" },
    { href: "#usage", label: "Usage Examples" },
    { href: "#troubleshooting", label: "Troubleshooting" },
  ];

  return (
    <article>
      <h1>Getting Started</h1>
      <InPageNavigation links={sections} />
      
      <section id="introduction">
        <h2>Introduction</h2>
        {/* Content */}
      </section>
      
      <section id="features">
        <h2>Features</h2>
        {/* Content */}
      </section>
      
      {/* More sections */}
    </article>
  );
}
```

### Custom Title

```tsx
<InPageNavigation 
  title="Table of Contents"
  links={[
    { href: "#chapter-1", label: "Chapter 1: Basics" },
    { href: "#chapter-2", label: "Chapter 2: Advanced" },
    { href: "#chapter-3", label: "Chapter 3: Conclusion" },
  ]}
/>
```

### With Additional CSS Classes

```tsx
<InPageNavigation 
  links={sections}
  className="custom-navigation-style"
/>
```

## HTML Structure

The component renders as semantic HTML:

```html
<nav class="ntgds-in-page-navigation">
  <h2 class="ntgds-in-page-navigation__title">On this page</h2>
  <ul class="ntgds-in-page-navigation__links">
    <li>
      <a href="#section-1" class="ntgds-link">Link to section 1</a>
    </li>
    <li>
      <a href="#section-2" class="ntgds-link">Link to section 2</a>
    </li>
    <!-- More items -->
  </ul>
</nav>
```

## Styling & Design Tokens

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.ntgds-in-page-navigation` | Base wrapper element (full width, flex column) |
| `.ntgds-in-page-navigation__title` | Heading element (18px, bold) |
| `.ntgds-in-page-navigation__links` | Unordered list container (flex column, 8px gap) |
| `.ntgds-link` | Individual link items (inherited from Link component) |

### Design Tokens Used

| Token | Value | Usage |
|-------|-------|-------|
| `--clr-stroke-subtle` | `#D4D4D2` (NT.GOV.AU) | Left border color |
| `--clr-text-default` | `#3B3B3A` (NT.GOV.AU) | Title text color |
| `--sp-md` | `16px` | Padding-left and gap between title and links |
| `--type-font-default` | `Lato` (theme-dependent) | Title and link font family |
| `--type-desktop-body-default-size` | `16px` | Link font size |
| `--type-desktop-body-default-weight` | `400` | Link font weight |
| `--type-desktop-body-default-lh` | `24px` | Link line height |
| `--clr-link-default` | `#1F1F5F` (NT.GOV.AU) | Link default color |
| `--clr-link-hover` | `#C33826` (NT.GOV.AU) | Link hover color |

### CSS Source

Located in: `src/components/in-page-navigation/in-page-navigation.css`

```css
@layer components {
  .ntgds-in-page-navigation {
    width: 100%;
    padding-left: var(--sp-md, 16px);
    border-left: 4px solid var(--clr-stroke-subtle, #d4d4d2);
    display: flex;
    flex-direction: column;
    gap: var(--sp-md, 16px);
  }

  .ntgds-in-page-navigation__title {
    color: var(--clr-text-default, #3b3b3a);
    font-size: 18px;
    font-family: var(--type-font-default);
    font-weight: 700;
    line-height: 20px;
    margin: 0;
    word-wrap: break-word;
  }

  .ntgds-in-page-navigation__links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ntgds-in-page-navigation__links li {
    margin: 0;
    padding: 0;
  }

  .ntgds-in-page-navigation__links .ntgds-link {
    font-size: var(--type-desktop-body-default-size, 16px);
    font-weight: var(--type-desktop-body-default-weight, 400);
    line-height: var(--type-desktop-body-default-lh, 24px);
  }
}
```

## Responsive Behavior

- **Desktop & Mobile**: Same vertical layout (full-width, left border, stacked links)
- **Full Width**: Component spans 100% of its container width
- **Flexible Gaps**: Uses `--sp-md` token for responsive spacing that adapts to theme

## Accessibility

### Keyboard Navigation

✅ **Tab Navigation**: Links are fully keyboard accessible  
✅ **Enter/Space**: Activate link with keyboard  
✅ **Focus Indicators**: Link component provides visible focus states (4px bottom border + background)  

### Screen Reader Support

✅ **Semantic `<nav>` Element**: Identifies section as navigation landmark  
✅ **Semantic `<h2>` Heading**: Title is properly announced  
✅ **Semantic `<a>` Tags**: Each link is a proper anchor element  
✅ **Anchor Links**: Real `#section-id` hrefs work with screen readers  
✅ **List Structure**: `<ul>` and `<li>` elements provide list semantics  

### WCAG 2.1 Compliance

- **WCAG 2.1 Level AA**: Full compliance with proper contrast ratios
- **Link Styling**: Inherits Link component's accessible focus indicators
- **Color Contrast**: 
  - Left border: Sufficient contrast with background
  - Title text: 7:1 contrast ratio (default on white)
  - Links: 7:1 contrast ratio (default state), adjusts on hover

## Best Practices

### ✅ Do

- **Use Real Anchors**: Always use `#section-id` format for `href` values to enable proper page jumping
- **Match Section IDs**: Ensure link `href` anchors match the `id` attributes of target sections
- **Descriptive Labels**: Use clear, descriptive link labels that match the corresponding section headings
- **Limit List Size**: Keep the list to 5-10 items for optimal usability (use subsections for longer pages)
- **Place Strategically**: Position below page title or hero content, before main content
- **Use Custom Titles**: Choose appropriate titles ("On this page", "Table of Contents", "Quick Links", etc.)

### ❌ Don't

- **Don't Use JavaScript Routes**: Avoid custom `onClick` handlers; use native anchor links for accessibility
- **Don't Hardcode Colors**: Always use design tokens (`--clr-*`, `--sp-*`, `--type-*`)
- **Don't Modify Link Component**: Keep using the Link component for consistency; customize through CSS classes if needed
- **Don't Remove Border**: The left border is a key visual indicator; keep it unless there's a specific design requirement
- **Don't Make it Inline**: Component is designed as a block element; don't use `display: inline` or `display: inline-block`

## Customization

### Custom Styling

To add custom styles, use the `className` prop:

```tsx
<InPageNavigation 
  links={sections}
  className="custom-spacing"
/>
```

Then define your custom CSS:

```css
.ntgds-in-page-navigation.custom-spacing {
  padding-left: 24px; /* Larger left padding */
  gap: 24px; /* Larger gap between title and links */
}

.ntgds-in-page-navigation.custom-spacing .ntgds-in-page-navigation__links {
  gap: 12px; /* Larger gap between links */
}
```

### Theming

The component automatically adapts to active theme (NT.GOV.AU or NTG Central) through CSS custom properties. No code changes needed:

```tsx
// No changes required - component adapts automatically
<InPageNavigation links={sections} />

// When theme changes (via Storybook toolbar or application logic),
// the component updates colors automatically
```

## Integration with Page

### Complete Page Example

```tsx
import { InPageNavigation } from "ntg-design-system";

export function ServiceDocumentation() {
  const navigationSections = [
    { href: "#overview", label: "Overview" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#benefits", label: "Benefits" },
    { href: "#eligibility", label: "Eligibility" },
    { href: "#apply", label: "How to Apply" },
    { href: "#faq", label: "FAQs" },
  ];

  return (
    <main>
      <h1>Apply for Service</h1>
      
      {/* In-page navigation placed below title */}
      <InPageNavigation links={navigationSections} />

      {/* Page content with matching section IDs */}
      <section id="overview">
        <h2>Overview</h2>
        <p>Service description...</p>
      </section>

      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>Step-by-step process...</p>
      </section>

      <section id="benefits">
        <h2>Benefits</h2>
        <p>Key benefits of service...</p>
      </section>

      {/* More sections */}
    </main>
  );
}
```

## Storybook Stories

Three stories are provided in `InPageNavigation.stories.tsx`:

1. **Default**: 5 sample links with default "On this page" title
2. **MultipleLinks**: 10 links demonstrating longer navigation lists
3. **CustomTitle**: Alternative title "Table of Contents" with chapter links

View in Storybook at: `Components/InPageNavigation`

## Common Use Cases

### 1. Long Documentation Pages
```tsx
<InPageNavigation 
  title="Documentation Contents"
  links={[
    { href: "#introduction", label: "Introduction" },
    { href: "#installation", label: "Installation" },
    { href: "#configuration", label: "Configuration" },
    { href: "#examples", label: "Examples" },
    { href: "#api-reference", label: "API Reference" },
  ]}
/>
```

### 2. Frequently Asked Questions
```tsx
<InPageNavigation 
  title="Jump to Question"
  links={[
    { href: "#faq-pricing", label: "What are the pricing options?" },
    { href: "#faq-support", label: "What support is available?" },
    { href: "#faq-integration", label: "How do I integrate this?" },
  ]}
/>
```

### 3. Service or Benefit Application Pages
```tsx
<InPageNavigation 
  links={[
    { href: "#eligibility", label: "Check Eligibility" },
    { href: "#requirements", label: "Requirements" },
    { href: "#process", label: "Application Process" },
    { href: "#submit", label: "Submit Application" },
  ]}
/>
```

## Related Components

- **[Link](../link/LINK.md)**: Individual link component used within InPageNavigation
- **[Breadcrumbs](../breadcrumbs/)**: Hierarchical navigation showing page location
- **[Pagination](../pagination/)**: Navigation between multiple pages
- **[Header](../header/)**: Primary site navigation
- **[Footer](../footer/)**: Secondary site navigation and information

## File Locations

| File | Purpose |
|------|---------|
| `src/components/in-page-navigation/InPageNavigation.tsx` | React component implementation |
| `src/components/in-page-navigation/in-page-navigation.css` | Component styles with design tokens |
| `src/components/in-page-navigation/InPageNavigation.stories.tsx` | Storybook stories and examples |
| `src/components/in-page-navigation/INPAGENAVIGATION.md` | This documentation |

## TypeScript Support

Full TypeScript support with exported interfaces:

```typescript
import { 
  InPageNavigation, 
  InPageNavigationProps, 
  InPageNavigationLink 
} from "ntg-design-system";

// Use with strict typing
const config: InPageNavigationProps = {
  title: "Contents",
  links: [
    { href: "#section-1", label: "Section 1" },
    { href: "#section-2", label: "Section 2" },
  ] as InPageNavigationLink[],
};

<InPageNavigation {...config} />
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Flexbox support required
- JavaScript: ES6+ (React 18+)
- IE 11: Not supported

## Performance

- **Minimal Bundle**: ~1KB CSS + component code
- **Zero Dependencies**: Only requires React (Link component)
- **No External Libraries**: Pure CSS with design tokens
- **Fast Rendering**: Simple flex layout, no expensive calculations

## Troubleshooting

### Links Not Working

**Problem**: Clicking links doesn't navigate  
**Solution**: Ensure target elements have matching `id` attributes:
```tsx
// InPageNavigation
{ href: "#my-section", label: "My Section" }

// HTML
<section id="my-section">...</section>
```

### Styling Not Applying

**Problem**: Custom CSS not visible  
**Solution**: Ensure CSS is imported in `src/components.css` with proper layer:
```css
@import "./components/in-page-navigation/in-page-navigation.css" layer(components);
```

### Title Not Visible

**Problem**: Title text not showing  
**Solution**: Check that title prop is provided and not empty:
```tsx
<InPageNavigation 
  title="On this page"  {/* Explicitly provide title */}
  links={sections}
/>
```

### Focus States Not Showing

**Problem**: Keyboard focus not visible on links  
**Solution**: This is inherited from Link component. Check that component.css is imported and browser supports `:focus-visible`

## Contributing

When modifying InPageNavigation:

1. Update TypeScript interfaces if adding new props
2. Update CSS with design tokens (no hardcoded colors/spacing)
3. Add corresponding Storybook stories for new features
4. Update this documentation
5. Test keyboard navigation and screen reader compatibility
6. Verify all theme colors apply correctly

---

**Last Updated**: December 2025  
**Maintained By**: NT Government Digital Services  
**Component Version**: 1.0.0
