# Dropdown Component

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System)

The Dropdown component provides a native HTML `<select>` element with design system styling, form validation states, and semantic token integration. It leverages browser-native accessibility and keyboard navigation for a maintainable, standards-compliant form control.

## Features

- **Native HTML Select** - Uses standard `<select>` and `<option>` elements for maximum compatibility
- **Browser-Native Accessibility** - Built-in ARIA support and screen reader compatibility
- **Native Keyboard Navigation** - Arrow keys, Enter, Space, Tab automatically supported
- **Validation States** - Support for error and success states with messaging
- **Disabled Options** - Individual options can be disabled
- **Form Integration** - Follows TextInput pattern with helper text, status messages, and ID generation
- **Cross-Platform** - Works consistently across desktop and mobile browsers

## Basic Usage

```tsx
import { Dropdown } from "ntg-design-system";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

<Dropdown
  options={options}
  label="Select an option"
  onChange={(value) => console.log(value)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `DropdownOption[]` | required | Array of options with `value`, `label`, and optional `disabled` |
| `value` | `string` | undefined | Currently selected value (controlled component) |
| `onChange` | `(value: string) => void` | undefined | Callback when selection changes |
| `label` | `string` | undefined | Label text displayed above the dropdown |
| `helperText` | `string` | undefined | Helper text displayed below the label |
| `status` | `'default' \| 'error' \| 'success'` | `'default'` | Validation status affecting border color |
| `errorText` | `string` | undefined | Error message displayed when status is 'error' |
| `successText` | `string` | undefined | Success message displayed when status is 'success' |
| `required` | `boolean` | false | Whether field is required (shows asterisk in label) |
| `disabled` | `boolean` | false | Whether the dropdown is disabled |
| `name` | `string` | `'dropdown'` | Field name used for ID generation |
| `className` | `string` | `''` | Additional CSS classes |

## Advanced Examples

### With Validation

```tsx
const [value, setValue] = useState("");
const [status, setStatus] = useState<"default" | "error">("default");

<Dropdown
  options={options}
  value={value}
  onChange={setValue}
  label="Required Field"
  required={true}
  status={status}
  errorText={status === "error" ? "Please select an option" : undefined}
  helperText="You must select a valid option"
/>
```

### With Disabled Options

```tsx
const options = [
  { value: "opt1", label: "Available" },
  { value: "opt2", label: "Unavailable", disabled: true },
  { value: "opt3", label: "Available" },
];

<Dropdown options={options} label="Select" />
```

### Large List with Scrolling

```tsx
const manyOptions = Array.from({ length: 50 }, (_, i) => ({
  value: `opt${i}`,
  label: `Option ${i + 1}`,
}));

<Dropdown
  options={manyOptions}
  label="Large List"
  helperText="Browser handles scrolling automatically"
/>
```

## Keyboard Controls

Native `<select>` elements provide built-in keyboard navigation across all browsers:

| Key | Action |
|-----|--------|
| `ArrowDown` / `ArrowUp` | Navigate through options |
| `Enter` / `Space` | Open dropdown menu |
| `Type character` | Jump to option starting with that character |
| `Escape` | Close dropdown |
| `Tab` | Move to next focusable element |
| `Shift + Tab` | Move to previous focusable element |

## Validation States

### Error State

```tsx
<Dropdown
  options={options}
  label="Category"
  status="error"
  errorText="Please select a valid category"
/>
```

### Success State

```tsx
<Dropdown
  options={options}
  label="Status"
  value="confirmed"
  status="success"
  successText="Selection confirmed"
/>
```

## Styling and Tokens

The Dropdown component uses semantic design tokens for consistent theming:

| Token | Purpose | Fallback |
|-------|---------|----------|
| `--clr-text-default` | Label and select text | #3b3b3a |
| `--clr-text-helper` | Helper text color | #777674 |
| `--clr-text-disabled` | Disabled text color | #c9c8c6 |
| `--clr-surface-default` | Select background | #ffffff |
| `--clr-field-disabled` | Disabled background | #f5f4f2 |
| `--clr-stroke-subtle` | Border color (default) | #d4d4d2 |
| `--clr-stroke-strong` | Border color (hover) | #3b3b3a |
| `--clr-focus-focus` | Focus box-shadow color | #ec8c58 |
| `--clr-status-danger` | Error border/text color | #c33826 |
| `--clr-status-success` | Success border/text color | #107810 |
| `--sp-xs` | Small spacing (messages) | 8px |
| `--sp-md` | Medium spacing (padding) | 16px |
| `--sp-xxs` | Extra small spacing (required margin) | 4px |
| `--type-desktop-body-default-size` | Body text size | 16px |
| `--type-desktop-body-default-lh` | Body text line height | 24px |
| `--type-desktop-body-sm-size` | Small text size | 14px |
| `--type-desktop-body-sm-lh` | Small text line height | 20px |

### Styling Limitations (Native Select)

Native `<select>` elements have inherent browser limitations:

- **Option Styling** - Individual `<option>` elements cannot be styled with CSS (browser restriction)
- **Dropdown Menu** - The dropdown panel uses OS-native rendering (Windows, macOS, iOS, Android)
- **Consistency** - Appearance varies by browser and operating system
- **Customization** - Only the closed select control can be styled; the open menu is handled by the browser

These limitations ensure:
- ✅ Best mobile experience with platform-native pickers
- ✅ Optimal accessibility with built-in screen reader support
- ✅ Consistent keyboard navigation across browsers
- ✅ Minimal JavaScript required

If full dropdown styling is required (custom option backgrounds, hover effects, shadows), consider a custom dropdown implementation using ARIA listbox pattern.

## Accessibility

The Dropdown component is fully accessible and follows WCAG 2.1 AA guidelines:

### Native HTML Benefits

- **Built-in ARIA** - Native `<select>` elements have proper roles and states automatically
- **Screen Reader Support** - All major screen readers (NVDA, JAWS, VoiceOver) fully support native selects
- **Keyboard Navigation** - Browser-native keyboard support works consistently across platforms
- **Mobile Accessibility** - Native pickers on iOS/Android provide optimal touch experience

### ARIA Attributes

- `aria-describedby` - Links select to helper/error/success messages
- `required` attribute - Indicates required fields to assistive technology
- `disabled` attribute - Properly disables field for keyboard and screen readers

### Semantic HTML

- `<label>` with `htmlFor` - Associates label with select element
- `<select>` - Standard form control with built-in accessibility
- `<option>` - Native option elements with value and disabled attributes

### High Contrast Mode

The component supports Windows High Contrast mode for proper border and text visibility.

## Native Select Behavior

Native `<select>` elements provide built-in functionality:

- **Platform-native UI** - Dropdown appearance and behavior match OS conventions (Windows, macOS, iOS, Android)
- **Automatic scrolling** - Long option lists automatically scrollable by browser
- **Touch-friendly** - Mobile devices show native picker interfaces optimized for touch
- **No JavaScript state** - All interactions handled by browser without custom logic
- **Browser controls menu** - Opened dropdown menu cannot be styled; rendered by OS
- **Best accessibility** - Built-in screen reader support and keyboard navigation

### What Can Be Styled

Only the closed select element is stylable:
- Border color and hover state
- Background color
- Text color and font
- Padding and sizing
- Focus state with box-shadow

### What Cannot Be Styled

These are browser-controlled and not accessible to CSS:
- Individual `<option>` element backgrounds
- Hover/selected option appearance
- Dropdown menu padding or borders
- Option text alignment or spacing
- Scrollbar appearance within menu

## Form Pattern Consistency

The Dropdown component follows the established form component pattern:

### ID Generation

IDs are generated from the `name` prop:
- Select: `{name}-select`
- Helper: `{name}-helper` (if helperText provided)
- Error: `{name}-error` (if errorText provided)
- Success: `{name}-success` (if successText provided)

### ARIA DescribedBy

Helper and error/success messages are linked via `aria-describedby`:
```tsx
aria-describedby="[helperId, errorId, successId].filter(Boolean).join(' ')"
```

### Status Cascading

CSS modifiers cascade to child elements:
- `.ntgds-dropdown--error` - Applies error styles to select and messages
- `.ntgds-dropdown--success` - Applies success styles to select and messages
- `.ntgds-dropdown--disabled` - Applies disabled styles to select

## Browser Support

The Dropdown component works in all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Implementation Details

### Native HTML Elements

The component uses standard HTML5 form controls:
- `<select>` element for the dropdown
- `<option>` elements for each choice
- `<label>` element for accessibility
- Standard `onChange` event handling

### Controlled Component

The Dropdown can be used as a controlled component:
```tsx
const [value, setValue] = useState("");
<Dropdown value={value} onChange={setValue} options={options} />
```

### Browser Behavior

All dropdown behavior is handled by the browser:
- Opening/closing the dropdown
- Keyboard navigation
- Option selection
- Scrolling long lists
- Touch/mobile interactions

## Storybook Examples

See `Dropdown.stories.tsx` for interactive demos including:

- **Basic** - Simple dropdown with 5 options
- **Controlled** - Controlled value state demo
- **Disabled** - Fully disabled dropdown
- **LargeList** - 12+ options demonstrating native scroll behavior
- **CustomLabel** - With label and helper text
- **ErrorState** - Validation error with red border
- **SuccessState** - Validation success with green border
- **Interactive** - Live value display with status changes
- **KeyboardNavigation** - Demonstrates native keyboard controls
- **WithDisabledOptions** - Individual options disabled

## Best Practices

1. **Use Descriptive Labels** - Keep option labels clear and concise (2-5 words)
2. **Group Related Options** - Use separate dropdowns for unrelated categories
3. **Provide Helper Text** - Explain what the field does or what's expected
4. **Validation Feedback** - Show error messages for better user guidance
5. **Disabled Options** - Use sparingly; explain why options are disabled in helper text
6. **Long Lists** - Browser handles scrolling automatically; keep lists under 30 items for better UX
7. **Mobile First** - Native pickers provide optimal mobile experience
8. **Form Integration** - Use with `<form>` elements for standard HTML5 validation
9. **Accessibility** - Rely on browser's native accessibility implementation
10. **Custom Styling** - If full option styling is required, implement custom ARIA listbox pattern instead

## Comparison: Native Select vs Custom Dropdown

| Feature | Native Select | Custom Dropdown |
|---------|---------------|-----------------|
| Browser Support | All | Modern browsers |
| Mobile Experience | Optimized native pickers | Custom |
| Styling Options | Limited (closed element only) | Full control |
| Option Customization | Not possible | Full control |
| Accessibility | Built-in | Manual ARIA |
| Keyboard Navigation | Browser-native | Custom |
| Code Complexity | Minimal | Moderate |
| Maintenance | Low | Medium |

Choose **Native Select** for:
- Standard form dropdowns where consistency matters
- Best mobile experience
- Minimal code maintenance
- Built-in accessibility

Choose **Custom Dropdown** for:
- Full design control needed
- Custom option styling required
- Desktop-only applications
- Complex option rendering

## Changelog

- v2.0.0: Refactored to use native `<select>` element for better maintainability, cross-platform support, and automatic accessibility. Added TextInput styling consistency.
- v1.0.0: Initial custom implementation with ARIA listbox pattern
