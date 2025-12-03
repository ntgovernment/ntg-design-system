import type { Meta, StoryObj } from "@storybook/react";
import { DateInput } from "./DateInput";

const meta: Meta<typeof DateInput> = {
  title: "Components/DateInput",
  component: DateInput,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text", description: "DateInput id base for field ids" },
    name: { control: "text", description: "Form field name base" },
    label: { control: "text", description: "Visible label text" },
    helperText: { control: "text", description: "Optional helper message" },
    status: {
      control: { type: "inline-radio" },
      options: ["default", "error", "success"],
      description: "Validation state styling",
    },
    errorText: { control: "text", description: "Error message (sets aria-invalid)" },
    successText: { control: "text", description: "Success message" },
    required: { control: "boolean", description: "Required field" },
    disabled: { control: "boolean", description: "Disabled field" },
    maxWidth: { control: "text", description: "Max width constraint" },
    className: { control: "text", description: "Additional CSS classes" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultEmpty: Story = {
  args: {
    id: "date-default",
    name: "date",
    label: "Label",
    helperText: "Optional helper text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default state with label and helper text. Three separate inputs: Day (63px), Month (63px), Year (78px). Placeholders: DD, MM, YYYY.",
      },
    },
  },
};

export const Required: Story = {
  args: {
    id: "date-required",
    name: "birthdate",
    label: "Date of Birth",
    required: true,
    helperText: "Enter your date of birth",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Required field showing '(Required)' indicator beside the label in normal weight.",
      },
    },
  },
};

export const ErrorState: Story = {
  args: {
    id: "date-error",
    name: "date",
    label: "Start Date",
    status: "error",
    errorText: "Please enter a valid date.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Error state with red borders on all three inputs and error message below. Red circle-exclamation icon (vertically centered) appears 8px to the left of the error text.",
      },
    },
  },
};

export const SuccessState: Story = {
  args: {
    id: "date-success",
    name: "date",
    label: "Appointment Date",
    status: "success",
    successText: "Date confirmed!",
    dayValue: "15",
    monthValue: "06",
    yearValue: "2025",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Success state with green borders on all three inputs and success message below. Green circle-check icon (vertically centered) appears 8px to the left of the success text.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: "date-disabled",
    name: "date",
    label: "Event Date",
    disabled: true,
    dayValue: "25",
    monthValue: "12",
    yearValue: "2024",
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state with reduced opacity. Fields are read-only.",
      },
    },
  },
};

export const WithValue: Story = {
  args: {
    id: "date-value",
    name: "date",
    label: "Registration Date",
    helperText: "When did you register?",
    dayValue: "03",
    monthValue: "12",
    yearValue: "2025",
  },
  parameters: {
    docs: {
      description: {
        story: "Date input with pre-filled values in controlled mode.",
      },
    },
  },
};
