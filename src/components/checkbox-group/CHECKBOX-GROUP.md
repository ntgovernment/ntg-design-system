# CheckboxGroup Component

An accessible wrapper component for managing multiple related checkboxes with shared group label, helper text, and validation. Supports vertical and horizontal layouts with configurable spacing. Matches RN specs and aligns with NTG Design System patterns.

**Design Reference:** Figma RN specs shared via code.

## Features

- Manages multiple Checkbox components with shared state
- Configurable orientation: vertical (stacked) or horizontal (inline with wrapping)
- Group label with optional "(Required)" indicator in normal weight
- Helper text positioned between group label and checkbox options
- Validation states with visual icons (vertically centered): default, error (circle-exclamation), success (circle-check)
- Consistent 8px gap between checkboxes and elements
- Controlled and uncontrolled usage via `value` / `defaultValue`
- Array-based value management (selected checkbox values)
- Theme-aware tokens for colors, spacing, and typography
- Full WCAG 2.1 AA accessibility with role="group" and aria-describedby

## Usage

```tsx
import { CheckboxGroup } from "@ntg/design-system";

// Vertical layout (default)
<CheckboxGroup
  id="preferences"
  name="preferences"
  label="Email Preferences"
  helperText="Choose which emails you want to receive"
  options={[
    { value: "newsletter", label: "Weekly newsletter" },
    { value: "updates", label: "Product updates" },
    { value: "marketing", label: "Marketing emails" },
  ]}
/>

// Horizontal layout
<CheckboxGroup
  id="interests"
  name="interests"
  label="Interests"
  orientation="horizontal"
  options={[
    { value: "tech", label: "Technology" },
    { value: "sports", label: "Sports" },
    { value: "music", label: "Music" },
  ]}
/>

// Controlled with validation
<CheckboxGroup
  id="consent"
  name="consent"
  label="Required Agreements"
  required
  value={selectedValues}
  onChange={(values) => setSelectedValues(values)}
  status={selectedValues.length > 0 ? "success" : "error"}
  errorText={selectedValues.length === 0 && "You must agree to at least one"}
  options={[
    { value: "terms", label: "I agree to the terms and conditions" },
    { value: "privacy", label: "I agree to the privacy policy" },
  ]}
/>
```

## Props

| Prop            | Type                        | Default      | Description                                        |
| --------------- | --------------------------- | ------------ | -------------------------------------------------- |
| `id`            | `string`                    | -            | Base id for checkbox group and individual items    |
| `name`          | `string`                    | -            | Base form field name (suffixed with `[]`)          |
| `label`         | `React.ReactNode`           | -            | Group label text                                   |
| `helperText`    | `React.ReactNode`           | -            | Optional helper message                            |
| `options`       | `CheckboxGroupOption[]`     | **required** | Array of checkbox options                          |
| `orientation`   | `'vertical' \| 'horizontal'`| `'vertical'` | Layout direction for checkboxes                    |
| `status`        | `string`                    | `'default'`  | Validation state: 'default', 'error', 'success'    |
| `errorText`     | `React.ReactNode`           | -            | Error message (sets `aria-invalid`)                |
| `successText`   | `React.ReactNode`           | -            | Success message                                    |
| `required`      | `boolean`                   | `false`      | Marks group as required                            |
| `disabled`      | `boolean`                   | `false`      | Disables all checkboxes                            |
| `value`         | `string[]`                  | -            | Controlled selected values array                   |
| `defaultValue`  | `string[]`                  | `[]`         | Uncontrolled initial selected values               |
| `onChange`      | `function`                  | -            | Change handler (receives array of selected values) |
| `className`     | `string`                    | `''`         | Additional CSS classes                             |

### CheckboxGroupOption Type

| Property | Type                                    | Description                           |
| -------- | --------------------------------------- | ------------------------------------- |
| `value`  | `string` (required)                     | Unique value for this checkbox option |
| `label`  | `React.ReactNode`                       | Checkbox label text                   |
| Other props extend from `CheckboxProps` excluding `groupLabel`, `helperText`, `errorText`, `successText` |

## Accessibility

- Uses `role="group"` to semantically group related checkboxes
- Group label provides context for all checkboxes (similar to fieldset/legend)
- Helper text positioned between group label and options for improved scannability
- Helper/error/success messages referenced via `aria-describedby` on the group
- Each checkbox maintains full individual accessibility via Checkbox component
- "(Required)" indicator shown in normal weight beside group label
- Icons marked `aria-hidden="true"` (decorative only, text conveys meaning)
- Icons vertically centered with message text, 8px gap for readability
- Keyboard navigation: Tab moves between checkboxes, Space toggles
- Group-level validation messages apply context to all checkboxes

## Theming and Tokens

- Inherits all checkbox styling from Checkbox component
- Group label: `--clr-text-default` (fallback `#3b3b3a`), font-weight `700`
- Required indicator: `--clr-status-danger` (fallback `#a60f37`), font-weight `400`
- Helper text: `--clr-text-helper` (fallback `#777674`)
- Success: `--clr-status-success` (fallback `#107810`)
- Danger: `--clr-status-danger` (fallback `#c33826`)
- Spacing: `--sp-xs` (gaps `8px`)
- Typography: `--type-desktop-body-*` tokens

## Best Practices

- Use for 2-7 related options; consider other patterns for more options
- Keep option labels concise and parallel in structure
- Use vertical orientation by default; horizontal for compact layouts or few options
- Validate on change to provide immediate feedback
- Provide clear error messages explaining minimum/maximum selections if applicable
- Consider required indicator when at least one selection is mandatory
- Use helper text to explain the purpose or constraints of the group

## Examples

### Basic Vertical Group
```tsx
<CheckboxGroup
  id="notifications"
  name="notifications"
  label="Email Notifications"
  helperText="Select which notifications you want"
  options={[
    { value: "news", label: "News updates" },
    { value: "offers", label: "Special offers" },
    { value: "events", label: "Event invitations" },
  ]}
/>
```

### Horizontal Group
```tsx
<CheckboxGroup
  id="size"
  name="size"
  label="Available Sizes"
  orientation="horizontal"
  options={[
    { value: "s", label: "Small" },
    { value: "m", label: "Medium" },
    { value: "l", label: "Large" },
    { value: "xl", label: "Extra Large" },
  ]}
/>
```

### Required with Error
```tsx
<CheckboxGroup
  id="terms"
  name="terms"
  label="Legal Agreements"
  required
  status="error"
  errorText="You must agree to all required terms"
  options={[
    { value: "terms", label: "I agree to the Terms of Service" },
    { value: "privacy", label: "I agree to the Privacy Policy" },
  ]}
/>
```

### Controlled with Validation
```tsx
const [selected, setSelected] = useState<string[]>([]);
const isValid = selected.length >= 2;

<CheckboxGroup
  id="interests"
  name="interests"
  label="Select At Least 2 Interests"
  value={selected}
  onChange={setSelected}
  status={isValid ? "success" : selected.length > 0 ? "default" : "error"}
  errorText={!isValid && selected.length > 0 && "Please select at least 2 options"}
  successText={isValid && "Great choices!"}
  options={[
    { value: "tech", label: "Technology" },
    { value: "sports", label: "Sports" },
    { value: "music", label: "Music" },
    { value: "art", label: "Art" },
  ]}
/>
```

### With Pre-selected Options
```tsx
<CheckboxGroup
  id="defaults"
  name="defaults"
  label="Default Settings"
  defaultValue={["email", "push"]}
  options={[
    { value: "email", label: "Email notifications" },
    { value: "sms", label: "SMS notifications" },
    { value: "push", label: "Push notifications" },
  ]}
/>
```

## Related Components

- **Checkbox**: Individual checkbox component used within CheckboxGroup

## Changelog
- **v1.0.0**: Initial implementation with vertical/horizontal orientation, group label, helper text, validation states, controlled/uncontrolled support, and full accessibility.
