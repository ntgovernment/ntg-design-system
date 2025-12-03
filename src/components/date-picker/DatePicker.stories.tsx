import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label for the date picker",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the label",
    },
    successText: {
      control: "text",
      description: "Success message displayed when validationState is 'success'",
    },
    errorText: {
      control: "text",
      description: "Error message displayed when validationState is 'error'",
    },
    validationState: {
      control: "select",
      options: ["default", "error", "success"],
      description: "The validation state of the date picker",
    },
    required: {
      control: "boolean",
      description: "Whether the date picker is required",
    },
    disabled: {
      control: "boolean",
      description: "Whether the date picker is disabled",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "DD/MM/YYYY",
  },
};

export const Required: Story = {
  args: {
    label: "Label",
    helperText: "Optional helper text",
    required: true,
    placeholder: "DD/MM/YYYY",
  },
};

export const WithValue: Story = {
  args: {
    label: "Label",
    helperText: "Optional helper text",
    value: "2024-12-04",
    placeholder: "DD/MM/YYYY",
  },
};

export const WithSuccess: Story = {
  args: {
    label: "Label",
    validationState: "success",
    successText: "Input validated",
    value: "2024-12-04",
    placeholder: "DD/MM/YYYY",
  },
};

export const WithError: Story = {
  args: {
    label: "Label",
    validationState: "error",
    errorText: "Please select a valid date",
    placeholder: "DD/MM/YYYY",
  },
};

export const Disabled: Story = {
  args: {
    label: "Label",
    helperText: "This field is disabled",
    disabled: true,
    placeholder: "DD/MM/YYYY",
  },
};

export const DisabledWithValue: Story = {
  args: {
    label: "Label",
    disabled: true,
    value: "2024-12-04",
    placeholder: "DD/MM/YYYY",
  },
};

export const WithCalendarOpen: Story = {
  render: (args) => {
    return (
      <div style={{ minHeight: "500px", paddingBottom: "400px" }}>
        <DatePicker {...args} />
      </div>
    );
  },
  args: {
    label: "Label",
    helperText: "Click the input or calendar icon to open",
    placeholder: "DD/MM/YYYY",
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    const [validationState, setValidationState] = useState<"default" | "error" | "success">("default");

    const handleChange = (newValue: string) => {
      setValue(newValue);
      if (newValue) {
        setValidationState("success");
      } else {
        setValidationState("default");
      }
    };

    return (
      <div style={{ minHeight: "500px", paddingBottom: "400px" }}>
        <DatePicker
          {...args}
          value={value}
          onChange={handleChange}
          validationState={validationState}
          successText={validationState === "success" ? "Date selected" : undefined}
        />
      </div>
    );
  },
  args: {
    label: "Select a date",
    helperText: "Choose a date from the calendar",
    placeholder: "DD/MM/YYYY",
  },
};
