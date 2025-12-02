# Button Component

A versatile button component supporting multiple variants, two sizes, loading/disabled states, and flexible icon integration via the shared `Icon` component. The button adapts to different themes automatically through the design system's token architecture.

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System?node-id=13-1970&t=ea1GVGvBRPEpKpIT-1)

## Features

- **Three Variants**: Primary, Secondary, and Tertiary styles
- **Two Sizes**: Large (default) and Small
- **Icon Support**: Left/right icons using shared `Icon` component (string icon name, existing `<Icon />`, or arbitrary node) plus `iconColor` variants
- **Loading State**: Built-in loading spinner with disabled interaction
- **Accessible**: WCAG 2.1 AA compliant with proper focus states and ARIA attributes
- **Theme-Aware**: Automatically adapts to NT.GOV.AU and NTG Central themes

## Usage

### React Component

```tsx
import { Button } from '@ntg-design-system/components';

// Primary button (default)
<Button>Click me</Button>

// Secondary button
<Button variant="secondary">Cancel</Button>

// Tertiary button (text-only)
<Button variant="tertiary">Learn more</Button>

// Small button
<Button size="small">Small action</Button>

// With left icon (string icon name → Font Awesome 6)
<Button iconLeft="floppy-disk" iconColor="inverse">Save</Button>

// With right icon
<Button iconRight="arrow-right" iconColor="inverse">Next</Button>

// Loading state
<Button loading>Processing...</Button>

// Disabled state
<Button disabled>Unavailable</Button>

// Custom node icon (will be wrapped in <Icon>)
<Button iconLeft={<span style={{ fontWeight: 'bold' }}>A</span>}>Custom</Button>

// Passing an existing <Icon />
<Button iconLeft={<Icon name="circle-info" color="primary" />}>Info</Button>
```

### HTML Implementation

```html
<!-- Primary Button (Default) -->
<button class="ntgds-btn ntgds-btn--primary">Click me</button>

<!-- Secondary Button -->
<button class="ntgds-btn ntgds-btn--secondary">Cancel</button>

<!-- Tertiary Button -->
<button class="ntgds-btn ntgds-btn--tertiary">Learn more</button>

<!-- Small Button -->
<button class="ntgds-btn ntgds-btn--primary ntgds-btn--small">
  Small action
</button>

<!-- Button with Left Icon -->
<button class="ntgds-btn ntgds-btn--primary">
  <span class="ntgds-btn__icon ntgds-btn__icon--left">
    <i
      class="ntgds-icon ntgds-icon--md ntgds-icon--color-inverse fa-solid fa-floppy-disk"
      aria-hidden="true"
    ></i>
  </span>
  Save
</button>

<!-- Button with Right Icon -->
<button class="ntgds-btn ntgds-btn--primary">
  Next
  <span class="ntgds-btn__icon ntgds-btn__icon--right">
    <i
      class="ntgds-icon ntgds-icon--md ntgds-icon--color-inverse fa-solid fa-arrow-right"
      aria-hidden="true"
    ></i>
  </span>
</button>

<!-- Loading Button -->
<button class="ntgds-btn ntgds-btn--primary ntgds-btn--loading" disabled>
  <span class="ntgds-btn__loading-spinner"></span>
  <span class="ntgds-btn__loading-text">Processing...</span>
</button>

<!-- Disabled Button -->
<button class="ntgds-btn ntgds-btn--primary" disabled>Unavailable</button>
```

## Props / Attributes

### React Props

| Prop          | Type                                                               | Default     | Description                                                                                        |
| ------------- | ------------------------------------------------------------------ | ----------- | -------------------------------------------------------------------------------------------------- |
| `variant`     | `'primary' \| 'secondary' \| 'tertiary'`                           | `'primary'` | Visual style variant                                                                               |
| `size`        | `'large' \| 'small'`                                               | `'large'`   | Size variant. `large` uses base styles; `small` adds compact modifier.                             |
| `padLeft`     | `boolean`                                                          | `true`      | Controls left padding on tertiary buttons. Set to `false` to align with surrounding text.          |
| `iconLeft`    | `React.ReactNode`                                                  | -           | Left icon: string name (e.g. `'floppy-disk'`), `<Icon />`, or arbitrary node (wrapped for sizing). |
| `iconRight`   | `React.ReactNode`                                                  | -           | Right icon (same rules as `iconLeft`).                                                             |
| `iconColor`   | `'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'inverse'` | `'default'` | Color variant applied to any rendered icon via token-based classes.                                |
| `loading`     | `boolean`                                                          | `false`     | Shows loading spinner and disables interaction                                                     |
| `loadingIcon` | `React.ReactNode`                                                  | -           | Optional custom loading indicator; default spinner used when omitted.                              |
| `disabled`    | `boolean`                                                          | `false`     | Disables button interaction                                                                        |
| `children`    | `React.ReactNode`                                                  | -           | Button text or content                                                                             |
| `onClick`     | `(event: React.MouseEvent<HTMLButtonElement>) => void`             | -           | Click event handler                                                                                |
| `type`        | `'button' \| 'submit' \| 'reset'`                                  | `'button'`  | Native button type attribute                                                                       |

### HTML Classes

| Class                        | Description                                            |
| ---------------------------- | ------------------------------------------------------ |
| `ntgds-btn`                  | Base button class (required)                           |
| `ntgds-btn--primary`         | Primary variant styling                                |
| `ntgds-btn--secondary`       | Secondary variant styling                              |
| `ntgds-btn--tertiary`        | Tertiary variant styling                               |
| `ntgds-btn--small`           | Small size modifier                                    |
| `ntgds-btn--loading`         | Loading state styling                                  |
| `ntgds-btn--disabled`        | Disabled state styling (also use `disabled` attribute) |
| `ntgds-btn__icon`            | Icon wrapper                                           |
| `ntgds-btn__icon--left`      | Left icon positioning                                  |
| `ntgds-btn__icon--right`     | Right icon positioning                                 |
| `ntgds-btn__loading-spinner` | Loading spinner element                                |
| `ntgds-btn__loading-text`    | Loading text wrapper                                   |

## Variants

### Primary Button

The default, high-emphasis button for primary actions.

**Characteristics:**

- Filled background with primary brand color
- White text for contrast
- Highest visual weight
- Use sparingly (1-2 per screen section)

**Use cases:**

- Form submissions
- Primary call-to-action
- Confirmations
- Main navigation actions

**Theme differences:**

- **NT.GOV.AU**: Navy blue background (`#1f1f5f`), ochre hover (`#c33826`)
- **NTG Central**: Blue background (`#005EB8`), darker blue hover

### Secondary Button

Medium-emphasis button for secondary actions.

**Characteristics:**

- Outlined style with transparent background
- Brand color border and text
- Less visual weight than primary
- Can have multiple per screen

**Use cases:**

- Cancel actions
- Alternative options
- Back navigation
- Tertiary actions that need more emphasis than text links

**Theme differences:**

- **NT.GOV.AU**: Navy border with ochre hover
- **NTG Central**: Blue border with darker hover

### Tertiary Button

Low-emphasis button styled as a text link.

**Characteristics:**

- No background or border
- Styled as an inline link
- Lowest visual weight
- Unlimited per screen
- Optional left padding control via `padLeft` prop

**Use cases:**

- "Learn more" links
- Auxiliary actions
- Dense interfaces
- Navigation within content
- Card footers (use `padLeft={false}` for alignment)

**Theme differences:**

- Both themes: Primary brand color with underline on hover

**Left Padding Control:**

The `padLeft` prop controls left padding on tertiary buttons:

```tsx
// Default: With left padding (standard button alignment)
<Button variant="tertiary">Learn more</Button>

// No left padding: Aligns with surrounding text
<Button variant="tertiary" padLeft={false}>Learn more</Button>
```

**When to use padLeft={false}:**
- Card footers (aligns with card content)
- Inline with text or lists
- Navigation menus
- Dense layouts requiring tight spacing

**Styling Details:**
- `padLeft={true}` (default): Standard padding
- `padLeft={false}`: `padding-left: 0` and `justify-content: flex-start`
- Only affects tertiary variant (ignored on primary/secondary)

## Sizes

### Default Size

Standard button size for most use cases.

**Specifications:**

- Padding: `16px 24px` (`var(--sp-md) var(--sp-xl)`)
- Font size: `16px` (`var(--type-desktop-body-default-size)`)
- Font weight: `700` (Bold)
- Icon size: `1em` (16px)

### Small Size

Compact button for space-constrained interfaces.

**Specifications:**

- Padding: `8px 16px` (`var(--sp-xs) var(--sp-md)`)
- Font size: `14px` (`var(--type-desktop-body-sm-size)`)
- Font weight: `700` (Bold)
- Icon size: `0.875em` (14px)

**Use cases:**

- Table actions
- Dense data views
- Inline editing controls
- Mobile interfaces

## States

### Default State

Standard interactive state.

**Visual indicators:**

- Full opacity
- Standard colors per variant
- Normal cursor

### Hover State

Triggered when cursor is over the button.

**Visual changes:**

- **Primary**: Background changes to hover color (`--clr-action-hover`)
- **Secondary**: Background fills with hover color, border color changes
- **Tertiary**: Text color changes to hover color
- Cursor: pointer

### Focus State

Triggered by keyboard navigation (Tab key).

**Visual indicators:**

- Focus ring: `4px` offset outline in focus color (`--clr-focus-focus`)
- **NT.GOV.AU**: Orange focus ring (`#ec8c58`)
- **NTG Central**: Green focus ring (`#91C46C`)
- Maintains base state colors

### Active/Pressed State

Triggered when button is clicked.

**Visual changes:**

- **Primary**: Background darkens to pressed color (`--clr-action-pressed`)
- **Secondary**: Background fills with pressed color
- **Tertiary**: Text color changes to pressed color
- Focus ring removed during press

### Disabled State

Button cannot be interacted with.

**Visual indicators:**

- Opacity: `0.6`
- Cursor: not-allowed
- Background: Disabled color (`--clr-action-disabled`)
- Border: Disabled stroke color (`--clr-stroke-disabled`)
- Text: Disabled text color (`--clr-text-disabled`)
- All interactions prevented

**Implementation:**

```html
<button class="ntgds-btn ntgds-btn--primary" disabled>Disabled</button>
```

### Loading State

Button is processing an action.

**Visual indicators:**

- Disabled interaction (but styled differently)
- Animated spinner on left side
- Text opacity reduced to `0.7`
- Cursor: default (not clickable)

**Implementation:**

```tsx
<Button loading>Processing...</Button>
```

**Accessibility:** Spinner uses CSS animation, automatically respects `prefers-reduced-motion` media query.

## Icon Integration

Buttons render icons through the shared `Icon` component. Passing a string to `iconLeft`/`iconRight` is interpreted as a Font Awesome icon name (no style prefix). The component applies `fa-solid fa-{name}` plus sizing & color token classes automatically.

### Font Awesome Setup

Load Font Awesome 6 once globally:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

### Supplying Icons

```tsx
<Button iconLeft="floppy-disk" iconColor="inverse">Save</Button>
<Button iconRight="arrow-right" iconColor="inverse">Next</Button>
<Button iconLeft="download" iconRight="arrow-right">Download</Button>
<Button iconLeft={<Icon name="circle-info" color="primary" />}>Info</Button>
<Button iconLeft={<span>?</span>}>Help</Button>
```

### Spacing & Sizing

- Left icon wrapper adds `margin-right: var(--sp-xs)`
- Right icon wrapper adds `margin-left: var(--sp-xs)`
- Small buttons force icon size `sm`; large uses `md`
- `iconColor` maps to semantic icon color tokens

### Common Icon Names (FA v6)

| Action        | Icon Name              | Notes / Replaces         |
| ------------- | ---------------------- | ------------------------ |
| Save          | `floppy-disk`          | Replaces legacy `save`   |
| Delete        | `trash`                |                          |
| Download      | `download`             |                          |
| Upload        | `upload`               |                          |
| Add           | `plus`                 |                          |
| Edit          | `pencil`               |                          |
| Confirm       | `check`                |                          |
| Close         | `xmark`                | Replaces `times`         |
| Warning       | `triangle-exclamation` |                          |
| Info          | `circle-info`          |                          |
| Success       | `circle-check`         |                          |
| Error         | `circle-xmark`         |                          |
| Continue      | `arrow-right`          |                          |
| Back          | `arrow-left`           |                          |
| External Link | `up-right-from-square` | Replaces `external-link` |

## Theming

The Button component automatically adapts to the active theme through CSS custom properties.

### CSS Custom Properties Used

| Property                 | Purpose                     | NT.GOV.AU              | NTG Central       |
| ------------------------ | --------------------------- | ---------------------- | ----------------- |
| `--clr-action-default`   | Primary button background   | Navy (`#1f1f5f`)       | Blue (`#005EB8`)  |
| `--clr-action-hover`     | Hover state background      | Ochre (`#c33826`)      | Dark Blue         |
| `--clr-action-pressed`   | Active/pressed state        | Dark Ochre (`#a22f20`) | Darker Blue       |
| `--clr-action-secondary` | Secondary button background | White                  | White             |
| `--clr-action-disabled`  | Disabled state background   | Light Grey             | Light Grey        |
| `--clr-link-default`     | Text/border color           | Navy                   | Blue              |
| `--clr-link-inverse`     | Primary button text         | White                  | White             |
| `--clr-stroke-strong`    | Secondary border            | Navy                   | Blue              |
| `--clr-focus-focus`      | Focus ring color            | Orange                 | Green             |
| `--radii-button`         | Border radius               | `0` (sharp)            | `100px` (rounded) |
| `--sp-md`                | Vertical padding            | `16px`                 | `16px`            |
| `--sp-xl`                | Horizontal padding          | `24px`                 | `24px`            |
| `--sp-xs`                | Small padding               | `8px`                  | `8px`             |

### Theme Switching

Buttons automatically update when the theme changes in Storybook or your application:

```typescript
// Themes are controlled via data-brand attribute on <html>
document.documentElement.setAttribute("data-brand", "ntg"); // NT.GOV.AU
document.documentElement.setAttribute("data-brand", "ntgcentral"); // NTG Central
```

### Key Visual Differences

**NT.GOV.AU Theme:**

- Font: Lato
- Button corners: Sharp (0px border radius)
- Primary color: Navy blue
- Accent color: Ochre (earthy red-orange)
- Focus ring: Orange

**NTG Central Theme:**

- Font: Roboto
- Button corners: Fully rounded (100px border radius)
- Primary color: Corporate blue
- Accent color: Green
- Focus ring: Light green

## Accessibility

### Keyboard Navigation

- **Tab**: Navigate to button
- **Shift + Tab**: Navigate to previous element
- **Enter**: Activate button
- **Space**: Activate button

### Screen Reader Support

The button component is fully accessible to screen readers:

**Disabled state:**

```html
<button disabled aria-disabled="true">Unavailable</button>
```

**Loading state:**

```html
<button disabled aria-busy="true" aria-live="polite">
  <span aria-hidden="true" class="ntgds-btn__loading-spinner"></span>
  <span>Processing...</span>
</button>
```

**Icon-only buttons (use aria-label):**

```html
<button class="ntgds-btn ntgds-btn--primary" aria-label="Close dialog">
  <span class="ntgds-btn__icon ntgds-btn__icon--left">
    <i
      class="ntgds-icon ntgds-icon--md fa-solid fa-xmark"
      aria-hidden="true"
    ></i>
  </span>
</button>
```

### Focus Indicators

All buttons include a visible focus indicator that meets WCAG 2.1 Level AA requirements:

- Focus ring width: `2px`
- Focus ring offset: `2px`
- Focus ring color: High contrast with background
- Visible in all color modes

### Color Contrast

All button variants meet WCAG 2.1 Level AA contrast requirements:

- **Primary**: White text on dark background (≥4.5:1)
- **Secondary**: Dark text/border on white background (≥4.5:1)
- **Tertiary**: Brand color meets contrast ratio (≥4.5:1)
- **Disabled**: Reduced contrast intentional (3:1 acceptable for disabled)

### Motion Sensitivity

Loading spinner respects user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  .ntgds-btn__loading-spinner {
    animation: none;
  }
}
```

## Examples

### Form Actions

```tsx
<div style={{ display: "flex", gap: "16px" }}>
  <Button variant="primary" type="submit">
    Submit Application
  </Button>
  <Button variant="secondary" type="button">
    Save as Draft
  </Button>
  <Button variant="tertiary" type="button">
    Cancel
  </Button>
</div>
```

### Data Table Actions

```tsx
<div style={{ display: "flex", gap: "8px" }}>
  <Button size="small" iconLeft="pencil">
    Edit
  </Button>
  <Button size="small" variant="secondary" iconLeft="trash">
    Delete
  </Button>
</div>
```

### Navigation

```tsx
<div style={{ display: "flex", gap: "16px", justifyContent: "space-between" }}>
  <Button variant="secondary" iconLeft="arrow-left">
    Previous
  </Button>
  <Button variant="primary" iconRight="arrow-right" iconColor="inverse">
    Next
  </Button>
</div>
```

### Loading State

```tsx
function SubmitForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitForm();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Button variant="primary" loading={isSubmitting} onClick={handleSubmit}>
      {isSubmitting ? "Submitting..." : "Submit"}
    </Button>
  );
}
```

### Icon Variety

```tsx
<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
  <Button iconLeft="floppy-disk" iconColor="inverse">
    Save Changes
  </Button>
  <Button iconLeft="download">Download Report</Button>
  <Button iconLeft="plus">Add Item</Button>
  <Button iconRight="up-right-from-square">Open External</Button>
  <Button variant="tertiary" iconRight="arrow-right">
    Learn More
  </Button>
</div>
```

## Best Practices

### Do's

✅ Use Primary buttons for the most important action on the page
✅ Limit Primary buttons to 1-2 per screen section
✅ Use descriptive button text ("Save Changes" not just "Save")
✅ Include icons for common actions (save, delete, download)
✅ Use loading state for async operations
✅ Disable buttons during form validation failures
✅ Provide clear focus indicators
✅ Use appropriate size for context (small for tables)

### Don'ts

❌ Don't use more than one Primary button in a button group
❌ Don't use vague text like "Click Here" or "Submit"
❌ Don't forget to disable during loading states
❌ Don't use disabled state for authorization (hide instead)
❌ Don't put icons on both sides unless necessary
❌ Don't override focus styles
❌ Don't use tertiary buttons for critical actions

## Browser Support

The Button component supports all modern browsers:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

**Fallbacks:**

- CSS custom properties: Fallback values provided
- CSS Grid/Flexbox: Widely supported
- Font Awesome: Graceful degradation if not loaded

## Technical Details

### File Structure

```
src/components/button/
├── button.css           # Component styles
├── button.runtime.ts    # Runtime logic (if needed)
├── Button.tsx          # React component
├── Button.stories.tsx  # Storybook stories
└── BUTTON.md          # This documentation
```

### CSS Architecture

The button uses the design system's layered CSS architecture:

```css
@layer components {
  .ntgds-btn {
    /* Base button styles referencing semantic tokens */
  }
}
```

**Token chain:**

1. **Primitive**: `--ntg-colour-primary--blue-default: #1f1f5f`
2. **Theme-Primitive**: `--theme-colour-primary-blue-default: var(--ntg-colour-primary--blue-default)`
3. **Semantic**: `--clr-action-default: var(--theme-colour-primary-blue-default)`
4. **Component**: `background: var(--clr-action-default)`

### Bundle Size

- CSS: ~2.5KB minified
- React component: ~1.2KB minified (with tree-shaking)
- Zero runtime dependencies (except React)

## Related Components

- **Link**: For text-based navigation
- **IconButton**: Icon-only button variant
- **ButtonGroup**: Grouping multiple buttons
- **SplitButton**: Button with dropdown menu

## Changelog

See [REFACTORING-SUMMARY.md](../../REFACTORING-SUMMARY.md) for details on recent CSS architecture changes.
