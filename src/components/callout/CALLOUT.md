# Callout Component

A simple, text-only component for highlighting important information with a prominent left border. The callout provides visual distinction without relying on icons, making it lightweight and universally accessible.

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System)

## Features

- **Text-Only Design**: No icons required, reducing complexity and dependencies
- **Prominent Left Border**: 8px solid border for clear visual distinction
- **Rich Content Support**: Supports paragraphs, lists, and formatted text
- **Theme-Aware**: Automatically adapts to NT.GOV.AU and NTG Central themes
- **Accessible**: WCAG 2.1 AA compliant with semantic HTML structure
- **Lightweight**: No Font Awesome dependency

## Usage

### React Component

```tsx
import { Callout } from '@ntg-design-system/components';

// Basic callout
<Callout title="Important Note">
  This is important information that users should be aware of.
</Callout>

// With rich content
<Callout title="Getting Started">
  <p>Follow these steps:</p>
  <ol>
    <li>Install dependencies</li>
    <li>Configure your environment</li>
    <li>Run the development server</li>
  </ol>
</Callout>

// Custom styling
<Callout title="Custom Callout" className="my-custom-class">
  Additional content with custom styling applied.
</Callout>
```

### HTML Implementation

```html
<!-- Basic Callout -->
<div class="ntgds-callout">
  <div class="ntgds-callout__border"></div>
  <div class="ntgds-callout__content">
    <div class="ntgds-callout__header">
      <div class="ntgds-callout__text">
        <h3 class="ntgds-callout__title">Important Note</h3>
        <div class="ntgds-callout__body">
          This is important information that users should be aware of.
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Callout with Rich Content -->
<div class="ntgds-callout">
  <div class="ntgds-callout__border"></div>
  <div class="ntgds-callout__content">
    <div class="ntgds-callout__header">
      <div class="ntgds-callout__text">
        <h3 class="ntgds-callout__title">Getting Started</h3>
        <div class="ntgds-callout__body">
          <p>Follow these steps:</p>
          <ol>
            <li>Install dependencies</li>
            <li>Configure your environment</li>
            <li>Run the development server</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Props / Attributes

### React Props

| Prop        | Type              | Default | Description                                   |
| ----------- | ----------------- | ------- | --------------------------------------------- |
| `title`     | `string`          | -       | Callout heading text (required)               |
| `children`  | `React.ReactNode` | -       | Callout body content (required)               |
| `className` | `string`          | `''`    | Additional CSS classes for custom styling     |

### HTML Classes

| Class                    | Description                                |
| ------------------------ | ------------------------------------------ |
| `ntgds-callout`          | Base callout container (required)          |
| `ntgds-callout__border`  | Left border element (visual only)          |
| `ntgds-callout__content` | Content wrapper with padding               |
| `ntgds-callout__header`  | Header section containing title and body   |
| `ntgds-callout__text`    | Text content wrapper                       |
| `ntgds-callout__title`   | Callout heading (h3)                       |
| `ntgds-callout__body`    | Body content container (supports rich HTML) |

## Design Philosophy

### Why No Icons?

The Callout component intentionally does not support icons, distinguishing it from components like `Notification`, `Button`, and `Pill`:

**Benefits of text-only design:**

- **Reduced dependencies**: No Font Awesome requirement
- **Faster load times**: Lighter component with less CSS
- **Universal accessibility**: No reliance on icon recognition
- **Content flexibility**: Focus remains on the text content
- **Simpler implementation**: Fewer props and less complexity

**When to use Callout vs. Notification:**

- **Callout**: Static informational content, tips, notes, documentation
- **Notification**: Status messages, alerts, user feedback with variant-specific icons

## Content Guidelines

### Title Best Practices

**Do's:**

✅ Keep titles concise (3-8 words)
✅ Use sentence case ("Important note" not "IMPORTANT NOTE")
✅ Be descriptive and specific
✅ Front-load key information

**Examples:**

- ✅ "System Requirements"
- ✅ "Before You Begin"
- ✅ "Important Security Update"
- ❌ "Note" (too vague)
- ❌ "PLEASE READ THIS CAREFULLY" (too aggressive)

### Body Content

**Supported elements:**

- Paragraphs (`<p>`)
- Ordered lists (`<ol>`)
- Unordered lists (`<ul>`)
- Strong emphasis (`<strong>`, `<b>`)
- Italic emphasis (`<em>`, `<i>`)
- Inline code (`<code>`)

**Styling:**

- Paragraphs: Bottom margin of `8px` (except last)
- Lists: Bottom margin of `8px`, left padding of `20px`
- List items: Bottom margin of `4px` (except last)

**Example with rich content:**

```tsx
<Callout title="Accessibility Guidelines">
  <p>
    The NTG Design System follows <strong>WCAG 2.1 Level AA</strong> standards:
  </p>
  <ul>
    <li>Semantic HTML structure</li>
    <li>Proper heading hierarchy</li>
    <li>Keyboard navigation support</li>
    <li>High contrast color ratios</li>
  </ul>
  <p>
    For detailed information, see the <em>Accessibility</em> documentation.
  </p>
</Callout>
```

## Theming

The Callout component automatically adapts to the active theme through CSS custom properties.

### CSS Custom Properties Used

| Property                    | Purpose                    | NT.GOV.AU         | NTG Central       |
| --------------------------- | -------------------------- | ----------------- | ----------------- |
| `--clr-stroke-strong`       | Left border color          | Navy (`#1f1f5f`)  | Blue (`#005EB8`)  |
| `--clr-surface-default`     | Background color           | White (`#ffffff`) | White (`#ffffff`) |
| `--clr-text-default`        | Title text color           | Dark (`#3b3b3a`)  | Dark (`#3b3b3a`)  |
| `--clr-text-body`           | Body text color            | Dark (`#3b3b3a`)  | Dark (`#3b3b3a`)  |
| `--sp-xl`                   | Content padding            | `24px`            | `24px`            |
| `--sp-md`                   | Header gap                 | `16px`            | `16px`            |
| `--sp-sm`                   | Content gap                | `10px`            | `10px`            |
| `--sp-xs`                   | Text elements gap          | `8px`             | `8px`             |
| `--sp-xxs`                  | List item spacing          | `4px`             | `4px`             |
| `--sp-lg`                   | List padding               | `20px`            | `20px`            |
| `--type-desktop-h5-size`    | Title font size            | `24px`            | `24px`            |
| `--type-desktop-h5-lh`      | Title line height          | `28px`            | `28px`            |
| `--type-desktop-body-default-size` | Body font size      | `16px`            | `16px`            |
| `--type-desktop-body-default-lh`   | Body line height    | `24px`            | `24px`            |
| `--type-font-default`       | Font family                | Lato              | Roboto            |

### Theme Switching

Callouts automatically update when the theme changes:

```typescript
// Themes are controlled via data-brand attribute on <html>
document.documentElement.setAttribute("data-brand", "ntg"); // NT.GOV.AU
document.documentElement.setAttribute("data-brand", "ntgcentral"); // NTG Central
```

### Key Visual Differences

**NT.GOV.AU Theme:**

- Font: Lato
- Border color: Navy blue (`#1f1f5f`)
- Clean, professional appearance

**NTG Central Theme:**

- Font: Roboto
- Border color: Corporate blue (`#005EB8`)
- Modern, approachable style

## Accessibility

### Semantic HTML

The Callout uses proper semantic structure:

- `<h3>` for title (can be changed to fit heading hierarchy)
- `<div>` containers with descriptive class names
- Native list elements (`<ol>`, `<ul>`, `<li>`)

### Screen Reader Support

The component is fully accessible to screen readers:

- Clear heading hierarchy
- Semantic list structure
- No ARIA attributes needed (semantic HTML is sufficient)
- No hidden content or decorative elements

### Keyboard Navigation

- Callout content is naturally keyboard-accessible
- Links within callout body are focusable
- No interactive elements in the callout itself

### Color Contrast

All text meets WCAG 2.1 Level AA contrast requirements:

- **Title**: Dark text on white background (≥7:1 ratio)
- **Body**: Dark text on white background (≥7:1 ratio)
- **Border**: High contrast with background (≥3:1 ratio)

### High Contrast Mode

Callout adapts to forced colors mode (Windows High Contrast):

```css
@media (forced-colors: active) {
  .ntgds-callout {
    border: 2px solid;
  }
}
```

## Use Cases

### Documentation and Help Text

```tsx
<Callout title="Before You Begin">
  <p>Make sure you have the following installed:</p>
  <ul>
    <li>Node.js 18 or higher</li>
    <li>npm 9 or higher</li>
    <li>A code editor (VS Code recommended)</li>
  </ul>
</Callout>
```

### Tips and Best Practices

```tsx
<Callout title="Pro Tip">
  Use semantic design tokens instead of hardcoded values to ensure your
  components automatically adapt to theme changes.
</Callout>
```

### Important Notes

```tsx
<Callout title="Security Notice">
  <p>
    Never commit sensitive information like API keys or passwords to version
    control.
  </p>
  <p>
    Use environment variables or secure credential management systems instead.
  </p>
</Callout>
```

### Step-by-Step Instructions

```tsx
<Callout title="Installation Steps">
  <ol>
    <li>Clone the repository from GitHub</li>
    <li>Run <code>npm install</code> to install dependencies</li>
    <li>Copy <code>.env.example</code> to <code>.env</code></li>
    <li>Run <code>npm run dev</code> to start the development server</li>
  </ol>
</Callout>
```

### Reference Information

```tsx
<Callout title="System Requirements">
  <p>Minimum requirements for running this application:</p>
  <ul>
    <li><strong>RAM:</strong> 4GB (8GB recommended)</li>
    <li><strong>Storage:</strong> 500MB available space</li>
    <li><strong>Browser:</strong> Chrome 90+, Firefox 88+, Safari 14+</li>
  </ul>
</Callout>
```

## Examples

### Basic Callout

```tsx
<Callout title="Important Information">
  This is a simple callout with basic text content. The left border provides
  clear visual distinction from surrounding content.
</Callout>
```

### Multiple Paragraphs

```tsx
<Callout title="Design System Guidelines">
  <p>
    The NTG Design System provides a comprehensive set of reusable components
    and design patterns for building consistent, accessible digital services.
  </p>
  <p>
    All components follow WCAG 2.1 AA accessibility standards and are tested
    across modern browsers and assistive technologies.
  </p>
</Callout>
```

### With Ordered List

```tsx
<Callout title="Quick Start Guide">
  <p>Follow these steps to get started:</p>
  <ol>
    <li>Install the design system package</li>
    <li>Import the theme CSS file</li>
    <li>Import components as needed</li>
    <li>Refer to component documentation for usage</li>
  </ol>
</Callout>
```

### With Unordered List

```tsx
<Callout title="Component Features">
  <p>This design system includes:</p>
  <ul>
    <li>React components with TypeScript support</li>
    <li>CSS-only implementations for CMS integration</li>
    <li>Comprehensive Storybook documentation</li>
    <li>Multiple theme support (NT.GOV.AU, NTG Central)</li>
  </ul>
</Callout>
```

### Mixed Content

```tsx
<Callout title="Testing Requirements">
  <p>All components must pass the following checks:</p>
  <ul>
    <li>Unit tests with 80%+ coverage</li>
    <li>Accessibility audit (WCAG 2.1 AA)</li>
    <li>Cross-browser testing</li>
    <li>Visual regression tests</li>
  </ul>
  <p>
    <strong>Note:</strong> Automated tests run on every pull request.
  </p>
</Callout>
```

## Best Practices

### Do's

✅ Use callouts for supplementary information
✅ Keep titles concise and descriptive
✅ Use rich content (lists, formatting) to improve readability
✅ Place callouts near related content
✅ Limit to 1-2 callouts per page section
✅ Use consistent terminology across callouts

### Don'ts

❌ Don't use callouts for critical alerts (use Notification instead)
❌ Don't nest callouts inside other callouts
❌ Don't make titles longer than one line
❌ Don't use callouts for primary content
❌ Don't overuse—reserve for truly important information
❌ Don't use custom colors that break theme consistency

## Component Comparison

| Component      | Purpose                      | Icons | Variants | Interactive |
| -------------- | ---------------------------- | ----- | -------- | ----------- |
| **Callout**    | Static informational content | No    | No       | No          |
| **Notification** | Status messages, alerts     | Yes   | 4 types  | Dismissible |
| **Alert**      | Inline form validation       | Yes   | 4 types  | No          |
| **Banner**     | Page-level announcements     | Maybe | Multiple | Maybe       |

**When to use Callout:**

- Documentation and help text
- Tips and best practices
- Prerequisites and requirements
- Reference information
- Step-by-step instructions

**When to use Notification:**

- Success messages
- Error messages
- Warning alerts
- Informational system messages

## Browser Support

The Callout component supports all modern browsers:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

**Fallbacks:**

- CSS custom properties: Fallback values provided for all tokens
- Flexbox layout: Widely supported across all modern browsers
- No JavaScript dependencies: Works without React runtime

## Technical Details

### File Structure

```
src/components/callout/
├── callout.css          # Component styles
├── Callout.tsx         # React component
├── Callout.stories.tsx # Storybook stories
└── CALLOUT.md         # This documentation
```

### CSS Architecture

The callout uses the design system's layered CSS architecture:

```css
@layer components {
  .ntgds-callout {
    /* Base callout styles referencing semantic tokens */
  }
}
```

**Token chain:**

1. **Primitive**: `--ntg-colour-primary--blue-default: #1f1f5f`
2. **Theme-Primitive**: `--theme-colour-primary-blue-default: var(--ntg-colour-primary--blue-default)`
3. **Semantic**: `--clr-stroke-strong: var(--theme-colour-primary-blue-default)`
4. **Component**: `border-left: 8px solid var(--clr-stroke-strong)`

### Bundle Size

- CSS: ~1.2KB minified
- React component: ~0.5KB minified (with tree-shaking)
- Zero runtime dependencies (except React)
- No Font Awesome dependency

### Performance Considerations

- **Lightweight**: Minimal CSS and no JavaScript runtime logic
- **No external dependencies**: Works without Font Awesome
- **Static rendering**: Perfect for SSR and static site generation
- **Zero hydration cost**: Pure presentational component

## Migration Guide

### From Icon-Based Callout (Pre-v2.0)

If you were previously using the Callout component with icons:

**Before:**

```tsx
<Callout title="Important" icon="circle-info">
  Content here
</Callout>
```

**After (v2.0+):**

```tsx
// Option 1: Use Callout without icon (recommended)
<Callout title="Important">
  Content here
</Callout>

// Option 2: Switch to Notification if status indication is needed
<Notification variant="info" title="Important" message="Content here" />
```

**Breaking changes:**

- `icon` prop removed
- Font Awesome no longer required for Callout
- Icon-related CSS classes removed

## Related Components

- **Notification**: For status messages with icons and variants
- **Alert**: For inline form validation feedback
- **Banner**: For page-level announcements
- **Typography**: For standard text formatting

## Changelog

- **v2.0.0**: Removed icon support, simplified to text-only component
- **v1.0.0**: Initial implementation with optional icon support

---

**Need Help?**

For questions or issues with the Callout component, refer to the [Component Library](https://ntgovernment.github.io/ntg-design-system) or contact the NT Government Digital Services team.
