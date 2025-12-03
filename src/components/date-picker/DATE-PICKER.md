# DatePicker Component

A date picker component that provides a text input field with a calendar icon for selecting dates. The DatePicker component features a custom calendar dropdown with month/year navigation and date selection.

## Features

- **Custom Calendar Dropdown**: Full-featured calendar with month/year navigation
- **Calendar Icon**: Calendar icon button that opens the custom calendar dropdown
- **Validation States**: Supports default, error, and success states
- **Helper Text**: Optional helper text and validation messages
- **Controlled/Uncontrolled**: Supports both controlled and uncontrolled patterns
- **Accessibility**: Fully accessible with proper ARIA attributes and keyboard navigation
- **Custom Placeholder**: Configurable placeholder text (DD/MM/YYYY format)

## Usage

```tsx
import { DatePicker } from "./components/date-picker/DatePicker";
import { useState } from "react";

function MyForm() {
  const [date, setDate] = useState("");

  return (
    <DatePicker
      label="Select date"
      helperText="Choose a date"
      value={date}
      onChange={setDate}
      required
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | required | The label for the date picker |
| `helperText` | `string` | - | Helper text displayed below the label |
| `successText` | `string` | - | Success message displayed when validationState is 'success' |
| `errorText` | `string` | - | Error message displayed when validationState is 'error' |
| `validationState` | `'default' \| 'error' \| 'success'` | `'default'` | The validation state of the date picker |
| `required` | `boolean` | `false` | Whether the date picker is required |
| `disabled` | `boolean` | `false` | Whether the date picker is disabled |
| `value` | `string` | - | The current date value (YYYY-MM-DD format for controlled component) |
| `onChange` | `(value: string) => void` | - | Callback when the date changes |
| `placeholder` | `string` | `'DD/MM/YYYY'` | Placeholder text for the input |
| `name` | `string` | - | Name attribute for form submission |
| `id` | `string` | - | ID for the input element |
| `className` | `string` | `''` | Additional CSS class names |

## Examples

### Basic Date Picker

```tsx
<DatePicker
  label="Label"
  helperText="Optional helper text"
  placeholder="DD/MM/YYYY"
/>
```

### Required

```tsx
<DatePicker
  label="Birth date"
  required
  helperText="This field is required"
/>
```

### Controlled Component

```tsx
const [date, setDate] = useState("");

<DatePicker
  label="Select date"
  value={date}
  onChange={setDate}
/>
```

### With Validation State

```tsx
<DatePicker
  label="Label"
  validationState="success"
  successText="Input validated"
  value="2024-12-04"
/>
```

### With Error

```tsx
<DatePicker
  label="Label"
  validationState="error"
  errorText="Please select a valid date"
/>
```

### Disabled

```tsx
<DatePicker
  label="Label"
  disabled
  helperText="This field is disabled"
/>
```

## Date Format

The component uses DD/MM/YYYY format:
- Displays dates in `DD/MM/YYYY` format (e.g., "04/12/2024")
- The `value` prop accepts `DD/MM/YYYY` format
- The `onChange` callback returns dates in `DD/MM/YYYY` format
- Also accepts `YYYY-MM-DD` format for backward compatibility

Example:
```tsx
// Setting value
<DatePicker value="04/12/2024" />

// Getting value from onChange
onChange={(value) => {
  console.log(value); // "04/12/2024"
}}
```

## Calendar Dropdown

The component includes a custom calendar dropdown that:
- Opens when clicking the input field or calendar icon
- Features month/year navigation with chevron buttons (previous/next month and year)
- Displays a 7-column day grid (Monday to Sunday)
- Highlights the selected date with blue background (#1f1f5f)
- Includes Cancel and Confirm buttons
- Closes when clicking outside the calendar
- Uses the `calendar-days` icon from the Icon component
- Calendar icon is positioned on the right side of the input (48px width)
- Is disabled when the component is disabled

### Calendar Navigation
- **Double chevron left** (angles-left): Previous year
- **Single chevron left** (chevron-left): Previous month
- **Month/Year display**: Shows current viewing month and year
- **Single chevron right** (chevron-right): Next month
- **Double chevron right** (angles-right): Next year

## States

### Default State (Input)
- Gray border (1px solid #d4d4d2)
- White background
- Gray placeholder text (DD/MM/YYYY)
- Calendar icon on the right
- Cursor pointer on input

### Focus State (Input)
- Orange box-shadow (4px) for focus ring
- Dark gray border (#3b3b3a)
- No layout shift with box-shadow

### Hover State (Input)
- Slightly darker border color
- Icon button opacity reduces to 0.7

### Calendar Open State
- Calendar dropdown appears below input with 4px gap
- White background with box-shadow (0px 6px 12px rgba(0, 0, 0, 0.1))
- 8px padding with 8px gap between sections
- Width: 280px (7 columns × 40px)

### Calendar Day States
- **Default**: Gray text (#3b3b3a), transparent background, 40x40px
- **Hover**: Light gray background (#f6f6f6)
- **Selected**: Blue background (#1f1f5f), white text, 40x40px
- **Selected + Hover**: Blue background with reduced opacity

### Disabled State
- Light gray background (#eae9e8)
- Gray text color
- Cursor not-allowed
- Calendar icon is disabled

### Error State
- Red border (#a60f37)
- Error message with red icon below

### Success State
- Green border (#107810)
- Success message with green icon below

## Accessibility

The DatePicker component follows WCAG 2.1 AA guidelines:

- Custom calendar with full keyboard and screen reader support
- Proper label association with `htmlFor` and `id`
- ARIA attributes (`aria-labelledby`, `aria-describedby`, `aria-invalid`, `aria-expanded`, `aria-haspopup`)
- Keyboard accessible:
  - Tab to focus input
  - Click input or calendar icon to open/close calendar
  - Tab to navigate between calendar buttons
  - Enter/Space to select date or navigate months/years
  - Escape to close calendar (handled by click outside)
- Focus indicator with 4px orange ring on input
- Calendar icon button has `aria-label="Open calendar"`
- Each day button has `aria-label` with full date and `aria-pressed` for selected state
- Calendar has `role="dialog"` with `aria-label="Choose date"`
- Screen reader announces selected dates and navigation

## Calendar Dropdown Structure

The calendar dropdown consists of:

1. **Header Section**
   - Previous year button (angles-left icon)
   - Previous month button (chevron-left icon)
   - Month and year display (bold, centered)
   - Next month button (chevron-right icon)
   - Next year button (angles-right icon)

2. **Weekday Headers**
   - 7 columns: Mo, Tu, We, Th, Fr, Sa, Su
   - Gray text (#777674), 14px font size
   - Each cell: 40x40px

3. **Day Grid**
   - 7 columns × up to 6 rows (42 cells max)
   - Empty cells for days before/after current month
   - Each day: 40x40px button
   - Selected day: blue background (#1f1f5f)

4. **Footer Section**
   - Two buttons: Cancel (secondary) and Confirm (primary)
   - Each button takes 50% width with 8px gap
   - Large size buttons

## Browser Support

The component uses a custom calendar implementation with React:
- Works consistently across all modern browsers
- Chrome, Edge, Firefox, Safari: Full support
- Custom styling ensures consistent appearance
- No dependency on native browser date pickers

## Design Tokens

The component uses the following design tokens:

- `--ntg-colour-neutrals-300`: Border color (#d4d4d2)
- `--ntg-colour-neutrals-400`: Hover border color (#cac9c6)
- `--ntg-colour-neutrals-900`: Focus border color (#3b3b3a)
- `--ntg-colour-neutrals-white`: Background color (#ffffff)
- `--ntg-colour-neutrals-200`: Disabled background (#eae9e8)
- `--ntg-colour-neutrals-600`: Disabled text color (#949391)
- `--ntg-colour-neutrals-700`: Placeholder color (#777674)
- `--ntg-colour-primary--orange-300`: Focus ring color (#ec8c58)
- `--ntg-colour-status-danger-red-default`: Error color (#a60f37)
- `--ntg-colour-status-success-green-default`: Success color (#107810)
- `--sp-xs`: Small spacing (8px)
- `--sp-md`: Medium spacing (16px)

## Notes

- Uses custom calendar implementation for consistent appearance across browsers
- Input height is 52px with min-height of 48px matching other form components
- Maximum width is 700px for larger viewports
- Calendar icon is positioned absolutely within the input wrapper
- The icon button is not focusable (tabIndex={-1}) as clicking the input opens the calendar
- Date format is DD/MM/YYYY for display and value
- Component supports both controlled and uncontrolled patterns
- Focus ring uses box-shadow to prevent layout shift
- Calendar dropdown has z-index: 1000 to appear above other content
- Input is readOnly to prevent manual typing (dates selected via calendar only)
- Calendar closes when clicking outside (uses click outside detection)
- Month/year navigation allows quick date selection
- Selected date persists visually in the calendar when reopened
- Cancel button closes calendar without changing selection
- Confirm button closes calendar and confirms the current selection
- Calendar positioning is below the input with 4px gap
- Week starts on Monday following European convention
