import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text", description: "Input id associated with label" },
    name: { control: "text", description: "Form field name" },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "search", "tel", "url"],
      description: "Input type",
    },
    label: { control: "text", description: "Visible label text" },
    placeholder: { control: "text", description: "Placeholder hint text" },
    value: { control: "text", description: "Controlled value" },
    defaultValue: { control: "text", description: "Uncontrolled initial value" },
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
    maxWidth: { control: "text", description: "Max width (default 480)" },
    className: { control: "text", description: "Additional CSS classes" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultEmpty: Story = {
  args: {
    id: "ti-default",
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "Placeholder text",
    maxWidth: 480,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default state with label, helper text (positioned between label and input), and placeholder. Hover to see border strengthen from subtle to strong stroke token.",
      },
    },
  },
};

export const HoveredEmpty: Story = {
  name: "Hovered Empty",
  args: {
    id: "ti-hover",
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "Placeholder text",
    maxWidth: 480,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Hover the input to see the border color strengthen to the strong stroke token, matching RN hover state.",
      },
    },
  },
};

export const Required: Story = {
  args: {
    id: "ti-required",
    label: "Label",
    required: true,
    placeholder: "Placeholder text",
    helperText: "This field is required.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Required field showing '(Required)' indicator beside the label in normal weight. Helper text appears between label and input.",
      },
    },
  },
};

export const ErrorState: Story = {
  args: {
    id: "ti-error",
    label: "Label",
    status: "error",
    errorText: "Please enter a valid value.",
    placeholder: "Placeholder text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Error state with red border and error message below the input. Red circle-exclamation icon appears 8px to the left of the error text. Sets aria-invalid='true'.",
      },
    },
  },
};

export const SuccessState: Story = {
  args: {
    id: "ti-success",
    label: "Label",
    status: "success",
    successText: "Looks good!",
    placeholder: "Placeholder text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Success state with green border and success message below the input. Green circle-check icon appears 8px to the left of the success text.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: "ti-disabled",
    label: "Label",
    disabled: true,
    placeholder: "Placeholder text",
  },
};

export const WithValue: Story = {
  args: {
    id: "ti-value",
    label: "Email Address",
    type: "email",
    defaultValue: "user@example.com",
    helperText: "We'll never share your email.",
  },
};

export const Password: Story = {
  args: {
    id: "ti-password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    helperText: "Must be at least 8 characters.",
  },
};
