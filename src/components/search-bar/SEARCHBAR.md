# SearchBar Component

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System)

The SearchBar component provides a search input with two variants: Primary (separate button) and Secondary (inline icon). It leverages semantic tokens, smooth transitions, and accessible focus states for a polished search experience.

## Features

- **Two Variants** - Primary with separate button or Secondary with inline icon
- **Focus Ring** - 4px orange box-shadow applied to entire component wrapper (focus-within)
- **Smooth Transitions** - 0.2s ease transitions on hover and focus states
- **Semantic Tokens** - Theme-aware colors and spacing
- **Accessible** - Proper ARIA labels, keyboard navigation, screen reader support
- **Disabled State** - 0.6 opacity for disabled interactions
- **Placeholder Styling** - Matches design system text-helper color (#777674)

## Basic Usage

```tsx
import { SearchBar } from "ntg-design-system";

// Primary variant (default)
<SearchBar
  placeholder="Search"
  onChange={(value) => console.log(value)}
  onSubmit={(value) => console.log("Submit:", value)}
/>

// Secondary variant
<SearchBar
  placeholder="Search"
  variant="secondary"
  onChange={(value) => console.log(value)}
  onSubmit={(value) => console.log("Submit:", value)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | `"Search"` | Placeholder text displayed in input |
| `value` | `string` | `""` | Controlled value of the input (optional) |
| `onChange` | `(value: string) => void` | undefined | Callback when input text changes |
| `onSubmit` | `(value: string) => void` | undefined | Callback when form is submitted (Enter key or button click) |
| `variant` | `"primary" \| "secondary"` | `"primary"` | Layout variant: primary (button on right) or secondary (inline icon) |
| `disabled` | `boolean` | false | Whether the search bar is disabled |
| `width` | `string \| number` | `"296px"` | Width of the search bar (Primary variant only) |
| `className` | `string` | `""` | Additional CSS classes |

## Variants

### Primary Variant

The Primary variant displays the search input on the left with a separate red button on the right, forming a seamless rectangular bar.

**Layout:**
- Default width: 296px (customizable via `width` prop)
- Input wrapper: flexible width, white background, 48px height
- Button: fixed 48px width and height, red background (#c33826), magnifying-glass icon
- No gap between input and button (seamless connection)
- No rounded borders (square corners)

**Styling:**
- Border: 1px `--clr-stroke-subtle` (#d4d4d2)
- Border (hover): remains subtle, input background changes to `--clr-surface-hover` (#eae9e8)
- Button (hover): background to `--clr-status-danger-hover` (#a22f20)
- Button (focus): background changes to dark blue (#1f1f5f) with matching border
- Focus: 4px orange box-shadow around entire wrapper with `:focus-within`
- Placeholder: `--clr-text-helper` (#777674)

**Example:**
```tsx
<SearchBar
  placeholder="Search products..."
  variant="primary"
  onChange={setSearchValue}
  onSubmit={handleSearch}
/>
```

### Secondary Variant

The Secondary variant displays the search input with an inline search icon on the right, in a compact fixed-width container with square corners.

**Layout:**
- Fixed width: 246px
- Input and icon in single wrapper: flex with space-between
- Icon button: 24px x 24px, transparent background
- Gap between input and icon: 20px
- No rounded borders (square corners)

**Styling:**
- Border: 1px `--clr-stroke-subtle` (#d4d4d2)
- Border (hover): remains subtle, background changes to `--clr-surface-hover` (#eae9e8)
- Icon color: `--ntg-colour-neutrals-600` (#949391)
- Icon (hover): opacity to 0.8
- Focus: 4px orange box-shadow around entire wrapper with `:focus-within`
- Placeholder: `--clr-text-helper` (#777674)

**Example:**
```tsx
<SearchBar
  placeholder="Find components..."
  variant="secondary"
  onChange={setSearchValue}
  onSubmit={handleSearch}
/>
```

## Usage Examples

### Controlled Component

```tsx
const [searchValue, setSearchValue] = useState("");

<SearchBar
  placeholder="Search"
  value={searchValue}
  onChange={setSearchValue}
  onSubmit={(value) => console.log("Searching for:", value)}
/>
```

### Form Integration

```tsx
const handleSubmit = (searchTerm: string) => {
  // Perform search or navigation
  window.location.search = `?q=${searchTerm}`;
};

<SearchBar
  placeholder="Search documentation"
  variant="primary"
  onSubmit={handleSubmit}
/>
```

### Disabled State

```tsx
<SearchBar
  placeholder="Search"
  disabled={true}
  variant="secondary"
/>
```

## Keyboard Controls

- `Enter` - Submit search (triggers `onSubmit` callback)
- `Tab` - Move to next focusable element
- `Shift + Tab` - Move to previous focusable element
- `Type text` - Input characters into search field

## Focus States

The SearchBar uses CSS `:focus-within` pseudo-class to apply focus styling to the entire component wrapper when either the input or button receives focus.

**Focus Styling:**
- Orange box-shadow: `0 0 0 4px var(--clr-focus-focus, #ec8c58)`
- Applied to entire `.ntgds-search-bar` wrapper
- Primary variant button changes to dark blue (#1f1f5f) when focused
- Smooth transition: 0.2s ease
- Does not cause layout shift (uses box-shadow instead of border)

**Implementation:**
```css
.ntgds-search-bar:focus-within {
  outline: none;
  box-shadow: 0 0 0 4px var(--clr-focus-focus, #ec8c58);
}

.ntgds-search-bar--primary:focus-within .ntgds-search-bar__button {
  background: #1f1f5f;
  border-color: #1f1f5f;
}
```

## Styling and Tokens

The SearchBar component uses semantic design tokens:

| Token | Purpose | Fallback |
|-------|---------|----------|
| `--clr-surface-default` | Input background | #ffffff |
| `--clr-surface-hover` | Input background (hover) | #eae9e8 |
| `--clr-stroke-subtle` | Border color (default) | #d4d4d2 |
| `--clr-text-default` | Input text color | #3b3b3a |
| `--clr-text-helper` | Placeholder text color | #777674 |
| `--clr-focus-focus` | Focus ring color | #ec8c58 |
| `--clr-status-danger` | Button background (Primary) | #c33826 |
| `--clr-status-danger-hover` | Button background (Primary hover) | #a22f20 |
| `--ntg-colour-neutrals-600` | Icon color (Secondary) | #949391 |
| `--type-desktop-body-default-size` | Input text size | 16px |
| `--type-desktop-body-default-lh` | Input text line height | 24px |

## Accessibility

The SearchBar component is fully accessible and follows WCAG 2.1 AA guidelines:

### ARIA Labels

- Input: `aria-label="Search"` - Identifies purpose to screen readers
- Button/Icon: `aria-label="Submit search"` - Describes action to screen readers

### Keyboard Navigation

- Tab key moves focus through input and button
- Enter key submits the search form
- Escape key (browser default) clears focus if needed

### Focus Management

- `:focus-within` applies focus styling to entire wrapper when any child receives focus
- 4px orange focus ring is clearly visible for keyboard navigation
- No focus management required; browser handles native input focus

### High Contrast Mode

- Uses semantic tokens (colors from design system)
- Focus ring has sufficient contrast for visibility
- Border colors provide adequate contrast

### Screen Readers

- Semantic HTML form structure with input and button
- ARIA labels describe purpose and action
- No decorative elements; all elements have meaning

## Hover States

### Primary Variant Hover

- **Input wrapper**: Background changes from white to `--clr-surface-hover` (#eae9e8)
- **Button**: Background changes from `--clr-status-danger` (#c33826) to `--clr-status-danger-hover` (#a22f20)
- **Button (focus)**: Background changes to dark blue (#1f1f5f) with matching border color
- **Transition**: 0.2s ease on all hover properties
- **Disabled prevention**: `:not(:disabled)` pseudo-class prevents hover effects when disabled

### Secondary Variant Hover

- **Input wrapper**: Background changes from white to `--clr-surface-hover` (#eae9e8)
- **Icon button**: Opacity changes from 1 to 0.8
- **Transition**: 0.2s ease on opacity
- **Disabled prevention**: `:not(:disabled)` pseudo-class prevents hover effects when disabled

## Implementation Details

### Component Structure

**Primary Variant:**
```html
<form class="ntgds-search-bar ntgds-search-bar--primary">
  <div class="ntgds-search-bar__input-wrapper">
    <input class="ntgds-search-bar__input" type="text" />
  </div>
  <button class="ntgds-search-bar__button" type="submit">
    <svg><!-- magnifying-glass icon --></svg>
  </button>
</form>
```

**Secondary Variant:**
```html
<form class="ntgds-search-bar ntgds-search-bar--secondary">
  <div class="ntgds-search-bar__input-wrapper">
    <input class="ntgds-search-bar__input" type="text" />
    <button class="ntgds-search-bar__icon-button" type="button">
      <svg><!-- magnifying-glass icon --></svg>
    </button>
  </div>
</form>
```

### Form Submission

- Primary variant: Button `type="submit"` triggers form submission
- Secondary variant: Icon button `type="button"` calls `onSubmit` handler directly
- Both support Enter key submission within the input

### No State Tracking for Styling

The component does NOT track focus state in React. Instead, CSS `:focus-within` pseudo-class handles all focus styling automatically, matching other input components (TextInput, TextArea, etc.) in the design system.

## Browser Support

The SearchBar component works in all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Storybook Examples

See `SearchBar.stories.tsx` for interactive demos including:

- **PrimaryDefault** - Default Primary variant with placeholder
- **PrimaryWithValue** - Primary variant with pre-filled value
- **PrimaryDisabled** - Disabled Primary variant
- **PrimaryInteractive** - Primary with value tracking and submission
- **PrimaryFullWidth** - Primary expands to fill available width
- **SecondaryDefault** - Default Secondary variant with inline icon
- **SecondaryWithValue** - Secondary variant with pre-filled value
- **SecondaryDisabled** - Disabled Secondary variant
- **SecondaryInteractive** - Secondary with value tracking and submission
- **CustomPlaceholder** - Both variants with custom placeholder text
- **FocusedPrimaryState** - Primary variant focused with orange ring
- **FocusedSecondaryState** - Secondary variant focused with orange ring

## Best Practices

1. **Use Appropriate Variant** - Choose Primary for full-width searches, Secondary for inline/compact searches
2. **Provide Clear Placeholder** - Keep placeholder text concise (e.g., "Search products", "Find components")
3. **Handle Submissions** - Implement `onSubmit` callback for actual search logic
4. **Disable When Needed** - Set `disabled={true}` when search is unavailable or loading
5. **Controlled Inputs** - Use `value` and `onChange` for predictable form behavior
6. **Keyboard Support** - Ensure Enter key triggers search via form submission
7. **Focus Visibility** - Rely on browser's native focus ring; don't disable it
8. **Mobile Friendly** - Both variants work on mobile; Primary expands, Secondary is fixed width
9. **Accessibility** - Don't remove ARIA labels; they're essential for screen readers
10. **Theme Integration** - Use semantic tokens; they automatically adapt to brand themes

## Comparison: Primary vs Secondary

| Feature | Primary | Secondary |
|---------|---------|-----------|
| Width | Default 296px (customizable) | Fixed (246px) |
| Border Radius | 0 (square corners) | 0 (square corners) |
| Button | Separate, prominent | Inline, compact |
| Button/Icon Color | Red (#c33826), blue on focus (#1f1f5f) | Gray (#949391) |
| Use Case | Full-width searches, headers | Compact searches, toolbars |
| Focus Ring | Around entire wrapper | Around entire wrapper |
| Space Efficiency | Customizable width | Minimal footprint |
| Touch Target | Large (48px button) | Smaller (24px icon) |
| Visual Emphasis | Button prominent (red/blue) | Icon subtle (gray) |

## Changelog

- v1.1.0: Updated Primary variant with 296px default width, no rounded borders, seamless input-button connection, blue button focus state; Secondary variant now uses neutrals-600 icon color and no rounded borders
- v1.0.0: Initial implementation with Primary and Secondary variants, focus-within styling, and placeholder color consistency
