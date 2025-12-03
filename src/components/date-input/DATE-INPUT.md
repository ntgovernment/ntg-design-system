# DateInput Component

An accessible, theme-aware date input with three separate fields for day, month, and year. Features labeled helper messaging, validation states with icons, and numeric input constraints. Matches RN specs and aligns with NTG Design System patterns.

**Design Reference:** Figma RN specs shared via code.

## Features

- Three separate numeric inputs: Day (2 digits), Month (2 digits), Year (4 digits)
- Field widths: Day 63px, Month 63px, Year 78px (per RN spec)
- Labeled input with helper text positioned between main label and input fields
- Validation states with visual icons (vertically centered): default, error (circle-exclamation), success (circle-check)
- Clear, non-shifting focus ring using box-shadow (4px orange)
- Hover strengthens border color without changing layout
- Required indicator shows "(Required)" in normal weight beside label
- Theme-aware tokens for colors, spacing, and typography
- Numeric input with inputMode="numeric" for mobile keyboards
- Controlled and uncontrolled usage for each field
- Full WCAG 2.1 AA accessibility with aria-describedby and aria-invalid

## Usage

```tsx
import { DateInput } from "@ntg/design-system";

<DateInput
  id="birthdate"
  name="birthdate"
  label="Date of Birth"
  helperText="Enter your date of birth"
  required
  onChange={(day, month, year) => console.log(day, month, year)}
/>
```

## Props

| Prop            | Type              | Default     | Description                                        |
| --------------- | ----------------- | ----------- | -------------------------------------------------- |
| `id`            | `string`          | -           | Base id for field ids (suffixed with -day, -month, -year) |
| `name`          | `string`          | -           | Base form field name (suffixed with -day, -month, -year) |
| `label`         | `React.ReactNode` | -           | Visible main label text                            |
| `helperText`    | `React.ReactNode` | -           | Optional helper message                            |
| `status`        | `string`          | `'default'` | Validation state: 'default', 'error', 'success'    |
| `errorText`     | `React.ReactNode` | -           | Error message (sets `aria-invalid`)                |
| `successText`   | `React.ReactNode` | -           | Success message                                    |
| `required`      | `boolean`         | `false`     | Marks fields as required                           |
| `disabled`      | `boolean`         | `false`     | Disables all fields                                |
| `maxWidth`      | `number \| string`| -           | Max width constraint                               |
| `dayValue`      | `string`          | -           | Controlled day value                               |
| `monthValue`    | `string`          | -           | Controlled month value                             |
| `yearValue`     | `string`          | -           | Controlled year value                              |
| `onDayChange`   | `function`        | -           | Day change handler                                 |
| `onMonthChange` | `function`        | -           | Month change handler                               |
| `onYearChange`  | `function`        | -           | Year change handler                                |
| `onChange`      | `function`        | -           | Combined change handler (day, month, year)         |
| `className`     | `string`          | `''`        | Additional CSS classes                             |
| `dayProps`      | `object`          | -           | Extra day input attributes                         |
| `monthProps`    | `object`          | -           | Extra month input attributes                       |
| `yearProps`     | `object`          | -           | Extra year input attributes                        |

## Accessibility

- Main label provides context for all three date fields
- Individual field labels ("Day", "Month", "Year") associate with their respective inputs
- Helper text positioned between main label and input fields for improved scannability
- Helper/error/success messages referenced via `aria-describedby` on all three inputs
- Set `aria-invalid="true"` when in error state or when `errorText` is present
- Use `required` attribute for mandatory fields; visible "(Required)" indicator shown in normal weight
- Icons marked `aria-hidden="true"` (decorative only, text conveys meaning)
- Icons vertically centered with message text, 8px gap between icon and message for readability
- High-contrast support via semantic tokens; visible 4px orange focus ring (box-shadow)
- Focus ring does not cause layout shift (uses box-shadow instead of border change)
- Hover state strengthens border color for visual feedback without layout shift
- `inputMode="numeric"` triggers numeric keyboard on mobile devices
- Text centered within inputs for better readability of numeric values

## Theming and Tokens

- Border (rest): `--clr-stroke-subtle` (fallback `#d4d4d2`)
- Border (hover): `--clr-stroke-strong` (fallback `#3b3b3a`)
- Focus ring: `--clr-focus-focus` (fallback `#ec8c58`) with `box-shadow`
- Label/input text: `--clr-text-default` (fallback `#3b3b3a`)
- Placeholder/helper: `--clr-text-helper` (fallback `#777674`)
- Success: `--clr-status-success` (fallback `#107810`)
- Danger: `--clr-status-danger` (fallback `#c33826`)
- Spacing: `--sp-md` (horizontal padding `16px`), `--sp-xs` (gaps `8px`)
- Typography: `--type-desktop-body-*` tokens for base sizes/line heights

## Best Practices

- Validate date values appropriately (e.g., day 1-31, month 1-12, year range)
- Consider adding auto-focus to next field when max length is reached
- Provide clear error messages for invalid dates (e.g., "February 30" doesn't exist)
- Use combined `onChange` handler to validate full date at once
- Consider locale-specific date formats if needed (this component uses DD/MM/YYYY order)
- Keep helper text concise and relevant

## Examples

### Basic Date Input
```tsx
<DateInput
  id="start-date"
  name="start"
  label="Start Date"
  helperText="Format: DD/MM/YYYY"
/>
```

### Required with Validation
```tsx
<DateInput
  id="dob"
  name="dob"
  label="Date of Birth"
  required
  status={isValid ? "success" : "error"}
  errorText={!isValid && "Please enter a valid date."}
  successText={isValid && "Date confirmed!"}
/>
```

### Controlled with Auto-validation
```tsx
const [day, setDay] = useState("");
const [month, setMonth] = useState("");
const [year, setYear] = useState("");

<DateInput
  id="event-date"
  name="event"
  label="Event Date"
  dayValue={day}
  monthValue={month}
  yearValue={year}
  onChange={(d, m, y) => {
    setDay(d);
    setMonth(m);
    setYear(y);
    // Validate full date here
  }}
/>
```

## Changelog
- **v1.0.0**: Initial implementation with three separate fields, validation states, icons, helper text positioning, and "(Required)" indicator.
