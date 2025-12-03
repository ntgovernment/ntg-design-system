# TextArea Component

An accessible, theme-aware multi-line text area with labeled helper messaging, validation states, and character counter. Matches RN specs and aligns with NTG Design System patterns.

**Design Reference:** Figma RN specs shared via code.

## Features

- Multi-line text input with min-height 120px and vertical resize
- Character counter (left-aligned) with optional max-length enforcement
- Labeled input with helper text (positioned between label and textarea)
- Validation states with visual icons (vertically centered): default, error (circle-exclamation), success (circle-check)
- Clear, non-shifting focus ring using box-shadow (4px orange)
- Hover strengthens border color without changing layout
- Required indicator shows "(Required)" in normal weight beside label
- Theme-aware tokens for colors, spacing, and typography
- Max-width constraint (default 480px) for readability
- Controlled and uncontrolled usage
- Full WCAG 2.1 AA accessibility with aria-describedby and aria-invalid

## Usage

```tsx
import { TextArea } from "@ntg/design-system";

<TextArea
  id="comments"
  label="Comments"
  placeholder="Enter your comments"
  helperText="Please be specific."
  maxLength={500}
  showCharCount
/>
```

## Props

| Prop            | Type              | Default   | Description                                        |
| --------------- | ----------------- | --------- | -------------------------------------------------- |
| `id`            | `string`          | -         | TextArea id associated with label                  |
| `name`          | `string`          | -         | Form field name                                    |
| `label`         | `React.ReactNode` | -         | Visible label text                                 |
| `placeholder`   | `string`          | -         | Placeholder hint text                              |
| `value`         | `string`          | -         | Controlled value                                   |
| `defaultValue`  | `string`          | -         | Uncontrolled initial value                         |
| `onChange`      | `function`        | -         | Change handler                                     |
| `helperText`    | `React.ReactNode` | -         | Optional helper message                            |
| `status`        | `string`          | `'default'`| Validation state: 'default', 'error', 'success'   |
| `errorText`     | `React.ReactNode` | -         | Error message (sets `aria-invalid`)                |
| `successText`   | `React.ReactNode` | -         | Success message                                    |
| `required`      | `boolean`         | `false`   | Marks field as required                            |
| `disabled`      | `boolean`         | `false`   | Disables the field                                 |
| `maxWidth`      | `number \| string`| `480`     | Max width constraint                               |
| `maxLength`     | `number`          | -         | Maximum character length                           |
| `showCharCount` | `boolean`         | `false`   | Show character counter (format: current/max)       |
| `className`     | `string`          | `''`      | Additional CSS classes                             |
| `textareaProps` | `object`          | -         | Extra textarea attributes                          |

## Accessibility

- Label associates with textarea via `htmlFor` and `id`
- Helper text positioned between label and textarea for improved scannability
- Helper/error/success messages referenced via `aria-describedby` (space-separated for multiple)
- Set `aria-invalid="true"` when in error state or when `errorText` is present
- Use `required` attribute for mandatory fields; visible "(Required)" indicator shown in normal weight
- Icons marked `aria-hidden="true"` (decorative only, text conveys meaning)
- Icons vertically centered with message text, 8px gap between icon and message for readability
- High-contrast support via semantic tokens; visible 4px orange focus ring (box-shadow)
- Focus ring does not cause layout shift (uses box-shadow instead of border change)
- Hover state strengthens border color for visual feedback without layout shift
- Vertical resize allows users to adjust height; min-height 120px ensures usability

## Theming and Tokens

- Border (rest): `--clr-stroke-subtle` (fallback `#d4d4d2`)
- Border (hover): `--clr-stroke-strong` (fallback `#3b3b3a`)
- Focus ring: `--clr-focus-focus` (fallback `#ec8c58`) with `box-shadow`
- Label/textarea text: `--clr-text-default` (fallback `#3b3b3a`)
- Placeholder/helper: `--clr-text-helper` (fallback `#777674`)
- Success: `--clr-status-success` (fallback `#107810`)
- Danger: `--clr-status-danger` (fallback `#c33826`)
- Spacing: `--sp-md` (horizontal padding `16px`), `--sp-xs` (vertical padding `8px`, gaps)
- Typography: `--type-desktop-body-*` tokens for base sizes/line heights

## Best Practices

- Do not use placeholder as a label; always supply a label
- Keep helper/error text concise; avoid long paragraphs
- Use character counter for fields with length limits (e.g., comments, reviews)
- Set appropriate min-height for expected content length
- Allow vertical resize for user flexibility
- Validate on blur or submit to reduce noise
- Ensure sufficient color contrast for all states

## Examples

### With Character Counter
```tsx
<TextArea
  id="description"
  label="Product Description"
  maxLength={500}
  showCharCount
  helperText="Describe the product features."
/>
```

### Error State with Icon
```tsx
<TextArea
  id="feedback"
  label="Feedback"
  status="error"
  errorText="Feedback must be at least 10 characters."
  required
/>
```

### Success State with Icon
```tsx
<TextArea
  id="review"
  label="Review"
  status="success"
  successText="Thank you for your review!"
  maxLength={500}
  showCharCount
/>
```

## Changelog
- **v1.0.0**: Initial implementation with character counter, validation states, icons, helper text positioning, and "(Required)" indicator.
