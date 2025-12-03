# Checkbox Component

An accessible, theme-aware checkbox with custom-styled 32x32px box, check icon, and validation states. Features optional group label, helper text, and validation messaging with icons. Matches RN specs and aligns with NTG Design System patterns.

**Design Reference:** Figma RN specs shared via code.

## Features

- Custom-styled 32x32px checkbox box (per RN spec) for consistent cross-browser appearance
- White check icon on primary color background when checked
- Optional group label above checkbox (bold, similar to form field labels)
- Helper text positioned between group label and checkbox
- Individual checkbox label beside the checkbox box
- Validation states with visual icons (vertically centered): default, error (circle-exclamation), success (circle-check)
- Clear, non-shifting focus ring using box-shadow (4px orange)
- Hover strengthens border color without changing layout
- Theme-aware tokens for colors, spacing, and typography
- Controlled and uncontrolled usage via `checked` / `defaultChecked`
- Visually-hidden native input maintains full keyboard and screen reader accessibility
- Full WCAG 2.1 AA accessibility with aria-describedby and aria-invalid

## Usage

```tsx
import { Checkbox } from "@ntg/design-system";

// Simple checkbox
<Checkbox
  id="newsletter"
  name="newsletter"
  label="Subscribe to newsletter"
/>

// With group label and helper text
<Checkbox
  id="terms"
  name="terms"
  label="I agree to the terms and conditions"
  groupLabel="Agreement"
  helperText="Please review before agreeing"
  required
/>

// Controlled with validation
<Checkbox
  id="consent"
  name="consent"
  label="I consent to data processing"
  checked={isConsented}
  onChange={(e) => setIsConsented(e.target.checked)}
  status={isConsented ? "success" : "error"}
  errorText={!isConsented && "Consent is required"}
/>
```

## HTML Implementation

```html
<div class="ntgds-checkbox">
  <div class="ntgds-checkbox__group-label">Label</div>
  <div id="checkbox-helper" class="ntgds-checkbox__helper">Optional helper text</div>
  <label class="ntgds-checkbox__wrapper">
    <input
      type="checkbox"
      id="checkbox-1"
      name="checkbox"
      class="ntgds-checkbox__input"
      aria-describedby="checkbox-helper"
    />
    <span class="ntgds-checkbox__box">
      <svg class="ntgds-icon" aria-hidden="true"><!-- check icon --></svg>
    </span>
    <span class="ntgds-checkbox__label">Checkbox label</span>
  </label>
</div>
```

## Props

| Prop            | Type              | Default     | Description                                        |
| --------------- | ----------------- | ----------- | -------------------------------------------------- |
| `id`            | `string`          | -           | Checkbox input id                                  |
| `name`          | `string`          | -           | Form field name                                    |
| `label`         | `React.ReactNode` | -           | Checkbox label text (appears beside checkbox)      |
| `groupLabel`    | `React.ReactNode` | -           | Optional group label above checkbox (bold)         |
| `helperText`    | `React.ReactNode` | -           | Optional helper message                            |
| `status`        | `string`          | `'default'` | Validation state: 'default', 'error', 'success'    |
| `errorText`     | `React.ReactNode` | -           | Error message (sets `aria-invalid`)                |
| `successText`   | `React.ReactNode` | -           | Success message                                    |
| `checked`       | `boolean`         | -           | Controlled checked state                           |
| `defaultChecked`| `boolean`         | `false`     | Uncontrolled initial checked state                 |
| `onChange`      | `function`        | -           | Change handler (receives event)                    |
| `disabled`      | `boolean`         | `false`     | Disables the checkbox                              |
| `className`     | `string`          | `''`        | Additional CSS classes                             |
| `inputProps`    | `object`          | -           | Extra input attributes                             |

## Accessibility

- Native checkbox input remains in the DOM (visually hidden) for full accessibility
- Label wraps input and visual checkbox box for proper click target association
- Group label provides context for the checkbox (similar to fieldset/legend pattern)
- Helper text positioned between group label and checkbox for improved scannability
- Helper/error/success messages referenced via `aria-describedby`
- Set `aria-invalid="true"` when in error state or when `errorText` is present
- Use `required` attribute for mandatory checkboxes
- Icons marked `aria-hidden="true"` (decorative only, text conveys meaning)
- Icons vertically centered with message text, 8px gap between icon and message for readability
- High-contrast support via semantic tokens; visible 4px orange focus ring (box-shadow)
- Focus ring does not cause layout shift (uses box-shadow instead of border change)
- Hover state strengthens border color for visual feedback without layout shift
- Keyboard navigation: Space toggles checkbox, Tab/Shift+Tab moves focus
- Check icon color (white) provides sufficient contrast against primary background

## Theming and Tokens

- Box border (rest): `--clr-stroke-subtle` (fallback `#d4d4d2`)
- Box border (hover): `--clr-stroke-strong` (fallback `#3b3b3a`)
- Box background (unchecked): `--clr-surface-default` (fallback `#fff`)
- Box background (checked): `--clr-action-default` (fallback `#3b3b3a`)
- Check icon: White (`#fff`)
- Focus ring: `--clr-focus-focus` (fallback `#ec8c58`) with `box-shadow`
- Label text: `--clr-text-default` (fallback `#3b3b3a`)
- Helper text: `--clr-text-helper` (fallback `#777674`)
- Success: `--clr-status-success` (fallback `#107810`)
- Danger: `--clr-status-danger` (fallback `#c33826`)
- Spacing: `--sp-xs` (gaps `8px`)
- Typography: `--type-desktop-body-*` tokens for base sizes/line heights

## Best Practices

- Always provide a `label` for the checkbox (beside the box)
- Use `groupLabel` when checkbox is part of a form context or needs additional heading
- For multiple related checkboxes, use the CheckboxGroup component (implemented separately)
- Keep checkbox labels concise and action-oriented (e.g., "I agree to...", "Enable notifications")
- Place most important/common option first when multiple checkboxes are present
- Validate on change or blur to provide immediate feedback
- Use error messages that explain what's required (e.g., "You must agree to continue")
- Ensure sufficient spacing between multiple checkboxes (minimum 8px gap)

## Examples

### Simple Checkbox
```tsx
<Checkbox
  id="remember"
  name="remember"
  label="Remember me"
/>
```

### With Group Label and Helper Text
```tsx
<Checkbox
  id="marketing"
  name="marketing"
  label="I want to receive marketing emails"
  groupLabel="Email Preferences"
  helperText="You can unsubscribe at any time"
/>
```

### Required with Error State
```tsx
<Checkbox
  id="terms"
  name="terms"
  label="I agree to the terms and conditions"
  groupLabel="Agreement"
  required
  status="error"
  errorText="You must agree to continue"
/>
```

### Controlled with Success State
```tsx
const [verified, setVerified] = useState(false);

<Checkbox
  id="verify"
  name="verify"
  label="Email verified"
  checked={verified}
  onChange={(e) => setVerified(e.target.checked)}
  status={verified ? "success" : "default"}
  successText={verified && "Verification complete!"}
/>
```

### Disabled State
```tsx
<Checkbox
  id="disabled"
  name="disabled"
  label="This option is unavailable"
  disabled
/>
```

## Related Components

- **CheckboxGroup**: Wrapper component for managing multiple related checkboxes with shared group label, helper text, and validation (to be implemented separately)

## Changelog
- **v1.0.0**: Initial implementation with custom 32x32px checkbox box, check icon, validation states, group label, helper text positioning, and full accessibility support.
