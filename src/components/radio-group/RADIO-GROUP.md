# RadioGroup Component

A wrapper component for managing multiple RadioButton components with shared state. The RadioGroup component provides a consistent way to display and manage a group of radio buttons with validation states and helper text.

## Features

- **Managed State**: Handles the selection state for all radio buttons in the group
- **Flexible Layout**: Supports both vertical and horizontal orientations
- **Validation States**: Supports default, error, and success states
- **Helper Text**: Optional helper text displayed below the label
- **Per-Option Helper Text**: Each option can have its own helper text
- **Accessibility**: Fully accessible with proper ARIA attributes and role="radiogroup"
- **Required Indicator**: Shows "(required)" text when the group is required
- **Disabled Options**: Individual radio buttons can be disabled

## Usage

```tsx
import { RadioGroup } from "./components/radio-group/RadioGroup";

function MyForm() {
  const [value, setValue] = useState("option1");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <RadioGroup
      label="Choose an option"
      name="choice"
      options={options}
      value={value}
      onChange={setValue}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | required | The label for the radio group |
| `options` | `RadioGroupOption[]` | required | Array of options to display |
| `name` | `string` | required | The name attribute for all radio buttons in the group |
| `value` | `string` | - | The currently selected value (controlled component) |
| `onChange` | `(value: string) => void` | - | Callback when selection changes |
| `helperText` | `string` | - | Helper text displayed below the label |
| `successText` | `string` | - | Success message displayed when validationState is 'success' |
| `errorText` | `string` | - | Error message displayed when validationState is 'error' |
| `validationState` | `'default' \| 'error' \| 'success'` | `'default'` | The validation state of the radio group |
| `required` | `boolean` | `false` | Whether the radio group is required |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | The layout orientation of the radio buttons |
| `className` | `string` | `''` | Additional CSS class names |

### RadioGroupOption Type

```tsx
interface RadioGroupOption {
  value: string;
  label: string;
  helperText?: string;
  disabled?: boolean;
}
```

## Examples

### Basic Radio Group

```tsx
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

<RadioGroup
  label="Choose an option"
  name="choice"
  options={options}
/>
```

### Controlled Component

```tsx
const [value, setValue] = useState("option1");

<RadioGroup
  label="Choose an option"
  name="choice"
  options={options}
  value={value}
  onChange={setValue}
/>
```

### Horizontal Layout

```tsx
<RadioGroup
  label="Choose your preference"
  name="preference"
  options={options}
  orientation="horizontal"
/>
```

### Required

```tsx
<RadioGroup
  label="Choose an option"
  name="choice"
  options={options}
  required
  helperText="This field is required"
/>
```

### With Error State

```tsx
<RadioGroup
  label="Choose an option"
  name="choice"
  options={options}
  validationState="error"
  errorText="Please select an option"
/>
```

### With Success State

```tsx
<RadioGroup
  label="Choose an option"
  name="choice"
  options={options}
  value="option1"
  validationState="success"
  successText="Great choice!"
/>
```

### With Disabled Options

```tsx
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2 (Disabled)", disabled: true },
  { value: "option3", label: "Option 3" },
];

<RadioGroup
  label="Choose an option"
  name="choice"
  options={options}
/>
```

### With Per-Option Helper Text

```tsx
const options = [
  { value: "basic", label: "Basic", helperText: "Free forever" },
  { value: "pro", label: "Pro", helperText: "$9.99/month" },
  { value: "enterprise", label: "Enterprise", helperText: "Contact sales" },
];

<RadioGroup
  label="Choose your plan"
  name="plan"
  options={options}
/>
```

## Accessibility

The RadioGroup component follows WCAG 2.1 AA guidelines:

- Uses `role="radiogroup"` for proper semantics
- Proper ARIA attributes (`aria-labelledby`, `aria-describedby`, `aria-invalid`, `aria-required`)
- Each RadioButton is keyboard accessible
- Focus indicator with 4px orange outline
- Sufficient color contrast for all states
- Clear visual distinction between selected and unselected states

## Design Tokens

The component uses the following design tokens:

- `--clr-text-default`: Default text color
- `--clr-text-subtle`: Helper text color
- `--clr-text-error`: Error message color
- `--clr-text-success`: Success message color
- `--sp-xs`: Small spacing (8px)
- `--sp-md`: Medium spacing (16px)
- `--type-desktop-body-default-*`: Typography tokens

## Notes

- The RadioGroup manages the selection state internally if no `value` prop is provided (uncontrolled)
- When `value` and `onChange` props are provided, it becomes a controlled component
- Only one radio button in a group can be selected at a time
- The `name` prop is crucial for grouping radio buttons together
- Use vertical orientation for longer option lists
- Use horizontal orientation for short lists with concise labels
- The `groupLabel` prop is automatically passed to each RadioButton to hide individual required indicators
