# RadioButton Component

A custom-styled radio button component that provides a consistent look and feel across the design system. The RadioButton component features a circular button with an inner dot when selected.

## Features

- **Custom Styling**: 32x32px circular button with 16px inner dot
- **Validation States**: Supports default, error, and success states
- **Helper Text**: Optional helper text displayed above the radio button
- **Accessibility**: Fully accessible with proper ARIA attributes and keyboard navigation
- **Required Indicator**: Shows "(required)" text when the radio button is required and not part of a group
- **Disabled State**: Visual indication when the radio button is disabled

## Usage

```tsx
import { RadioButton } from "./components/radio-button/RadioButton";

function MyForm() {
  return (
    <RadioButton
      label="Option 1"
      name="choice"
      helperText="Select your preferred option"
    />
  );
}
```

## Props

The RadioButton component accepts all standard HTML input props for radio buttons, plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | required | The label text for the radio button |
| `helperText` | `string` | - | Helper text displayed above the radio button |
| `successText` | `string` | - | Success message displayed when validationState is 'success' |
| `errorText` | `string` | - | Error message displayed when validationState is 'error' |
| `validationState` | `'default' \| 'error' \| 'success'` | `'default'` | The validation state of the radio button |
| `groupLabel` | `string` | - | Label of the group this radio button belongs to (hides individual required indicator) |
| `required` | `boolean` | `false` | Whether the radio button is required |
| `disabled` | `boolean` | `false` | Whether the radio button is disabled |

## Examples

### Basic Radio Button

```tsx
<RadioButton
  label="Option 1"
  name="choice"
/>
```

### With Helper Text

```tsx
<RadioButton
  label="Option 1"
  name="choice"
  helperText="This is the recommended option"
/>
```

### Required

```tsx
<RadioButton
  label="Option 1"
  name="choice"
  required
/>
```

### With Error State

```tsx
<RadioButton
  label="Option 1"
  name="choice"
  validationState="error"
  errorText="This option cannot be selected"
/>
```

### With Success State

```tsx
<RadioButton
  label="Option 1"
  name="choice"
  validationState="success"
  successText="Great choice!"
/>
```

### Disabled

```tsx
<RadioButton
  label="Option 1"
  name="choice"
  disabled
/>
```

## Accessibility

The RadioButton component follows WCAG 2.1 AA guidelines:

- Uses semantic HTML with native radio input
- Proper ARIA attributes (`aria-invalid`, `aria-describedby`)
- Keyboard accessible (Tab to focus, Space to select)
- Focus indicator with 4px orange outline
- Sufficient color contrast for all states
- Clear visual distinction between selected and unselected states

## Design Tokens

The component uses the following design tokens:

- `--clr-text-default`: Default text color
- `--clr-text-subtle`: Helper text color
- `--clr-text-error`: Error message color
- `--clr-text-success`: Success message color
- `--clr-border-default`: Default border color
- `--clr-border-active`: Active/selected state border color
- `--clr-border-error`: Error state border color
- `--clr-border-success`: Success state border color
- `--clr-border-focus`: Focus ring color
- `--clr-bg-primary`: Background color
- `--sp-xs`: Small spacing (8px)
- `--type-desktop-body-default-*`: Typography tokens

## Notes

- Radio buttons should typically be used within a RadioGroup component
- The `name` prop is required to group radio buttons together
- Only one radio button in a group can be selected at a time
- The custom button is 32x32px with a 2px border and 16px inner dot
- The dot animates with a scale transition when selected
- Use `groupLabel` prop when the radio button is part of a RadioGroup to hide the individual required indicator
