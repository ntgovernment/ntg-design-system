import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text", description: "Checkbox input id" },
    name: { control: "text", description: "Form field name" },
    label: { control: "text", description: "Checkbox label text" },
    groupLabel: { control: "text", description: "Optional group label above checkbox" },
    helperText: { control: "text", description: "Optional helper message" },
    status: {
      control: { type: "inline-radio" },
      options: ["default", "error", "success"],
      description: "Validation state styling",
    },
    errorText: { control: "text", description: "Error message (sets aria-invalid)" },
    successText: { control: "text", description: "Success message" },
    checked: { control: "boolean", description: "Controlled checked state" },
    defaultChecked: { control: "boolean", description: "Uncontrolled initial checked state" },
    disabled: { control: "boolean", description: "Disabled checkbox" },
    className: { control: "text", description: "Additional CSS classes" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultUnchecked: Story = {
  args: {
    id: "checkbox-default",
    name: "default",
    label: "Checkbox label",
    groupLabel: "Label",
    helperText: "Optional helper text",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default unchecked state with group label, helper text, and checkbox label. 32x32px checkbox box with border.",
      },
    },
  },
};

export const DefaultChecked: Story = {
  args: {
    id: "checkbox-checked",
    name: "checked",
    label: "Checkbox label",
    groupLabel: "Label",
    helperText: "Optional helper text",
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default checked state showing white check icon on dark background. Background changes to primary color when checked.",
      },
    },
  },
};

export const Required: Story = {
  args: {
    id: "checkbox-required",
    name: "terms",
    label: "I agree to the terms and conditions",
    groupLabel: "Label",
    helperText: "You must agree to continue",
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Required checkbox. Note: HTML5 required attribute is applied but visual '(Required)' indicator is typically shown on group label in CheckboxGroup.",
      },
    },
  },
};

export const ErrorState: Story = {
  args: {
    id: "checkbox-error",
    name: "consent",
    label: "I consent to data processing",
    groupLabel: "Label",
    status: "error",
    errorText: "You must consent to continue.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Error state with red border on checkbox box and error message below. Red circle-exclamation icon (vertically centered) appears 8px to the left of the error text.",
      },
    },
  },
};

export const SuccessState: Story = {
  args: {
    id: "checkbox-success",
    name: "verified",
    label: "Email verified",
    groupLabel: "Label",
    status: "success",
    successText: "Verification complete!",
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Success state with green border on checkbox box and success message below. Green circle-check icon (vertically centered) appears 8px to the left of the success text.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: "checkbox-disabled",
    name: "disabled",
    label: "Disabled option",
    groupLabel: "Label",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state with reduced opacity and not-allowed cursor.",
      },
    },
  },
};

export const DisabledChecked: Story = {
  args: {
    id: "checkbox-disabled-checked",
    name: "disabled-checked",
    label: "Disabled checked option",
    groupLabel: "Label",
    disabled: true,
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state while checked, showing check icon with reduced opacity.",
      },
    },
  },
};

export const WithoutGroupLabel: Story = {
  args: {
    id: "checkbox-simple",
    name: "simple",
    label: "Subscribe to newsletter",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Simple checkbox without group label or helper text. Suitable for single checkboxes or when used in a CheckboxGroup.",
      },
    },
  },
};
