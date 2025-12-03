# Text Input Component

An accessible, theme-aware text input with labeled helper messaging and validation states. Matches RN specs for default and hovered empty states, and aligns with NTG Design System patterns.

**Design Reference:** Figma RN specs shared via code (default empty, hovered empty).

## Features

- Labeled input with optional helper text (positioned between label and input)
- Validation states with visual icons: default, error (circle-exclamation), success (circle-check)
- Clear, non-shifting focus ring using box-shadow (4px orange)
- Hover strengthens border color without changing layout
- Required indicator shows "(Required)" in normal weight beside label
- Theme-aware tokens for colors, spacing, and typography
- Max-width constraint (default 480px) for readability
- Controlled and uncontrolled usage
- Full WCAG 2.1 AA accessibility with aria-describedby and aria-invalid

## Usage

```tsx
import { TextInput } from "@ntg/design-system";

<TextInput
  id="email"
  name="email"
  type="email"
  label="Email"
  placeholder="name@example.com"
  helperText="We'll never share your email."
/>
```

## HTML Implementation

```html
<div class="ntgds-text-input" style="max-width: 480px;">
  <label class="ntgds-text-input__label" for="email">
    Email
    <span class="ntgds-text-input__required"> (Required)</span>
  </label>
  <div id="email-helper" class="ntgds-text-input__helper">
    We'll never share your email.
  </div>
  <input
    id="email"
    name="email"
    type="email"
    class="ntgds-text-input__control"
    placeholder="name@example.com"
    aria-describedby="email-helper"
    required
  />
</div>

<!-- Success State with Icon -->
<div class="ntgds-text-input ntgds-text-input--success" style="max-width: 480px;">
  <label class="ntgds-text-input__label" for="username">Username</label>
  <input
    id="username"
    type="text"
    class="ntgds-text-input__control"
    value="johndoe"
    aria-describedby="username-success"
  />
  <div id="username-success" class="ntgds-text-input__message ntgds-text-input__message--success">
    <span class="ntgds-text-input__message-icon">
      <i class="ntgds-icon ntgds-icon--sm fa-solid fa-circle-check" aria-hidden="true"></i>
    </span>
    <span>Username is available!</span>
  </div>
</div>

<!-- Error State with Icon -->
<div class="ntgds-text-input ntgds-text-input--error" style="max-width: 480px;">
  <label class="ntgds-text-input__label" for="password">Password</label>
  <input
    id="password"
    type="password"
    class="ntgds-text-input__control"
    aria-describedby="password-error"
    aria-invalid="true"
  />
  <div id="password-error" class="ntgds-text-input__message ntgds-text-input__message--error">
    <span class="ntgds-text-input__message-icon">
      <i class="ntgds-icon ntgds-icon--sm fa-solid fa-circle-exclamation" aria-hidden="true"></i>
    </span>
    <span>Password must be at least 8 characters.</span>
  </div>
</div>
```

## Props

| Prop         | Type                                                                 | Default   | Description                                        |
| ------------ | -------------------------------------------------------------------- | --------- | -------------------------------------------------- |
| `id`         | `string`                                                              | -         | Input id associated with label                     |
| `name`       | `string`                                                              | -         | Form field name                                    |
| `type`       | `'text'\| 'email'\| 'password'\| 'search'\| 'tel'\| 'url'`         | `'text'`  | Input type                                         |
| `label`      | `React.ReactNode`                                                     | -         | Visible label text                                 |
| `placeholder`| `string`                                                              | -         | Placeholder hint text                              |
| `value`      | `string`                                                              | -         | Controlled value                                   |
| `defaultValue`| `string`                                                             | -         | Uncontrolled initial value                         |
| `onChange`   | `(e: React.ChangeEvent<HTMLInputElement>) => void`                    | -         | Change handler                                     |
| `helperText` | `React.ReactNode`                                                     | -         | Optional helper message                            |
| `status`     | `'default'\| 'error'\| 'success'`                                    | `'default'`| Validation state styling                           |
| `errorText`  | `React.ReactNode`                                                     | -         | Error message (sets `aria-invalid`)                |
| `successText`| `React.ReactNode`                                                     | -         | Success message                                    |
| `required`   | `boolean`                                                             | `false`   | Marks field as required                            |
| `disabled`   | `boolean`                                                             | `false`   | Disables the field                                 |
| `maxWidth`   | `number \| string`                                                    | `480`     | Max width constraint                               |
| `className`  | `string`                                                              | `''`      | Additional CSS classes                             |
| `inputProps` | `React.InputHTMLAttributes<HTMLInputElement>`                         | -         | Extra input attributes                             |

## Accessibility

- Label associates with input via `htmlFor` and `id`
- Helper text positioned between label and input for improved scannability
- Helper/error/success messages referenced via `aria-describedby` (space-separated for multiple)
- Set `aria-invalid="true"` when in error state or when `errorText` is present
- Use `required` attribute for mandatory fields; visible "(Required)" indicator shown in normal weight
- Icons marked `aria-hidden="true"` (decorative only, text conveys meaning)
- 8px gap between validation icons and message text for readability
- High-contrast support via semantic tokens; visible 4px orange focus ring (box-shadow)
- Focus ring does not cause layout shift (uses box-shadow instead of border change)
- Hover state strengthens border color for visual feedback without layout shift

## Theming and Tokens

- Border (rest): `--clr-stroke-subtle` (fallback `#d4d4d2`)
- Border (hover): `--clr-stroke-strong` (fallback `#3b3b3a`)
- Focus ring: `--clr-focus-focus` (fallback `#ec8c58`) with `box-shadow`
- Label/input text: `--clr-text-default` (fallback `#3b3b3a`)
- Placeholder/helper: `--clr-text-helper` (fallback `#777674`)
- Success: `--clr-status-success` (fallback `#107810`)
- Danger: `--clr-status-danger` (fallback `#c33826`)
- Spacing: `--sp-md` (left padding `16px`), `--sp-xs` (gaps `8px`)
- Typography: `--type-desktop-body-*` tokens for base sizes/line heights

## Best Practices

- Do not use placeholder as a label; always supply a label
- Keep helper/error text concise; avoid long paragraphs
- Validate on blur or submit to reduce noise
- Ensure sufficient color contrast for all states
- Maintain 48px min height for touch targets

## Examples

### With Helper Text and Required
```tsx
<TextInput
  id="email"
  label="Email Address"
  type="email"
  required
  placeholder="name@example.com"
  helperText="We'll never share your email."
/>
```

### Error State with Icon
```tsx
<TextInput
  id="username"
  label="Username"
  status="error"
  errorText="Username is required."
  required
/>
```
Shows a red circle-exclamation icon 8px to the left of the error message.

### Success State with Icon
```tsx
<TextInput
  id="code"
  label="Verification code"
  status="success"
  successText="Code accepted."
/>
```
Shows a green circle-check icon 8px to the left of the success message.

### Password Field
```tsx
<TextInput
  id="password"
  label="Password"
  type="password"
  required
  placeholder="Enter your password"
  helperText="Must be at least 8 characters."
/>
```

## Changelog
- **v1.0.0**: Initial implementation with default/hover states, focus ring, validation messaging, icons for error/success states, helper text positioned between label and input, "(Required)" indicator in normal weight.
