# BackToTopButton Component

A fixed-position button for scrolling back to the top of a page with smooth animation. Features "Back to top" text with an up arrow icon. Styled as a secondary button with dark hover color (`--clr-bg-dark` token) and positioned in the lower right corner of the viewport.

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System)

## Features

- **Secondary Button Styling** - Uses secondary button appearance with custom hover color
- **Text + Icon Layout** - Displays "Back to top" text with up arrow icon side by side
- **Custom Hover Color** - Applies `--clr-bg-dark` token on hover for dark surface contrast
- **Smooth Scrolling** - Animates scroll to top with `behavior: "smooth"`
- **Fixed Positioning** - Always visible at lower right of page (bottom: 32px, right: 32px)
- **Responsive** - Adjusts size and spacing on mobile devices
- **Accessible** - WCAG 2.1 AA compliant with ARIA labels and keyboard support
- **Theme-Aware** - Automatically adapts to NT.GOV.AU and NTG Central themes

## Usage

### React Component

```tsx
import { BackToTopButton } from '@ntg-design-system/components';

// Basic usage - appears in lower right corner with text and icon
<BackToTopButton />

// With custom aria label
<BackToTopButton ariaLabel="Return to page top" />

// With custom click handler
<BackToTopButton 
  onClick={() => console.log('Scrolled to top')}
/>

// Disabled state
<BackToTopButton disabled />
```

### HTML Implementation

```html
<!-- Basic Button -->
<button class="ntgds-back-to-top" aria-label="Back to top" type="button">
  <span class="ntgds-back-to-top__text">Back to top</span>
  <i class="ntgds-icon ntgds-icon--sm ntgds-icon--color-default fa-solid fa-arrow-up"></i>
</button>

<!-- Disabled -->
<button class="ntgds-back-to-top" aria-label="Back to top" type="button" disabled>
  <span class="ntgds-back-to-top__text">Back to top</span>
  <i class="ntgds-icon ntgds-icon--sm ntgds-icon--color-default fa-solid fa-arrow-up"></i>
</button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Custom click handler (scroll happens first) |
| `ariaLabel` | `string` | `'Back to top'` | Accessible label for screen readers |
| `disabled` | `boolean` | `false` | Disables button interaction |
| `ref` | `React.Ref<HTMLButtonElement>` | - | Forward reference to button element |

## Visual States

### Default State

- **Background**: Secondary action color (#f6f6f6)
- **Border**: 1px solid navy (#1f1f5f)
- **Text**: Navy color (#1f1f5f), 14px, font-weight 700, "Lato" font
- **Icon**: Navy color (#1f1f5f), 20×20px
- **Layout**: Row flex with 4px gap between text and icon
- **Position**: Lower right (32px from bottom/right)

### Hover State

- **Background**: Dark color (`--clr-bg-dark`, typically navy)
- **Border**: Dark color (matches background)
- **Text**: White (#ffffff)
- **Icon**: White (#ffffff)
- **Smooth transition**: 0.2s ease-in-out

### Focus State

- **Outline**: 4px focus ring (`--clr-focus-focus`)
- **Background**: Secondary action color (#f6f6f6, maintained)
- **Text/Icon**: Navy (#1f1f5f)

### Active/Pressed State

- **Background**: Pressed color (`--clr-action-pressed`)
- **Shadow**: None
- **Text/Icon**: White

### Disabled State

- **Opacity**: 0.6
- **Cursor**: not-allowed
- **Background**: Disabled color (`--clr-action-disabled`)
- **Border**: Disabled stroke color
- **Text/Icon**: Disabled text color

## Sizing

### Desktop

- **Width**: Auto (content-based)
- **Height**: Auto (content-based)
- **Padding**: 8px
- **Gap**: 4px between text and icon
- **Text**: 14px font size, 20px line height
- **Icon**: 20×20px

### Mobile

- **Width**: Auto (content-based)
- **Height**: Auto (content-based)
- **Padding**: 6px
- **Gap**: 3px between text and icon
- **Text**: 13px font size, 18px line height
- **Icon**: 18×18px
- **Bottom/Right**: 16px (from edges)

## Positioning

The button is fixed at the lower right of the page:

- **Bottom**: 32px (desktop), 16px (mobile)
- **Right**: 32px (desktop), 16px (mobile)
- **Z-index**: 1000
- **Position**: fixed (always visible on viewport)

## Styling and Tokens

| Token | Purpose | Fallback |
|-------|---------|----------|
| `--clr-action-secondary` | Button background | #f6f6f6 |
| `--clr-bg-dark` | Hover background (key token) | Inherited |
| `--clr-stroke-strong` | Border color | #1f1f5f |
| `--clr-link-default` | Default text/icon color | #1f1f5f |
| `--clr-link-inverse` | Hover/active text/icon color | #ffffff |
| `--clr-focus-focus` | Focus ring color | Inherited |
| `--clr-action-pressed` | Active background | Inherited |
| `--clr-action-disabled` | Disabled background | Inherited |
| `--clr-text-disabled` | Disabled text/icon color | Inherited |
| `--type-font-default` | Font family | "Lato" |
| `--sp-lg` | Spacing (desktop) | 32px |
| `--sp-md` | Spacing (mobile) | 16px |

## Accessibility

### Keyboard Navigation

- **Tab**: Navigate to button
- **Shift + Tab**: Navigate to previous element
- **Enter**: Activate button (scroll to top)
- **Space**: Activate button (scroll to top)

### Screen Reader Support

- **Aria Label**: "Back to top" (customizable)
- **Text**: Visible "Back to top" text provides semantic meaning
- **Icon**: Uses Font Awesome, rendered as visual enhancement
- **Button Role**: Semantic `<button>` element

### Focus Indicators

- **Focus ring**: 4px offset outline
- **Color**: `--clr-focus-focus` (orange or green based on theme)
- **Visible**: Meets WCAG 2.1 Level AA requirements

### Motion Preferences

Respects `prefers-reduced-motion` - transitions disabled for users with motion sensitivity.

## Examples

### Basic Page Implementation

```tsx
function MyPage() {
  return (
    <>
      <header>Page Header</header>
      <main>
        <h1>Long Page Content</h1>
        <p>Page content here...</p>
      </main>
      <BackToTopButton />
    </>
  );
}
```

### With Visibility Toggle

```tsx
function PageWithConditionalButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main>Page content...</main>
      {showButton && <BackToTopButton />}
    </>
  );
}
```

### With Analytics

```tsx
<BackToTopButton 
  onClick={() => {
    analytics.track('back_to_top_clicked');
  }}
/>
```

## Best Practices

✅ Use on pages with significant vertical content
✅ Keep default positioning (lower right)
✅ Use descriptive aria labels
✅ Test keyboard navigation
✅ Show/hide based on scroll position (optional)
✅ Include in all page templates
✅ Respect motion preferences

❌ Don't block important content
❌ Don't override focus styles
❌ Don't use on short pages
❌ Don't change button styling
❌ Don't place in center of viewport

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Changelog

### v1.0.0

- Initial implementation
- Secondary button styling with --clr-bg-dark hover
- "Back to top" text with up arrow icon layout
- Smooth scroll-to-top behavior
- Fixed positioning at bottom-right
- Responsive sizing and spacing
- Full WCAG 2.1 AA accessibility
- Storybook documentation
