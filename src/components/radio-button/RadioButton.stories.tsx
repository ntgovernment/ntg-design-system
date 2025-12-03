import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label text for the radio button",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed above the radio button",
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
      description: "The validation state of the radio button",
    },
    required: {
      control: "boolean",
      description: "Whether the radio button is required",
    },
    disabled: {
      control: "boolean",
      description: "Whether the radio button is disabled",
    },
    groupLabel: {
      control: "text",
      description: "Label of the group this radio button belongs to (hides individual required indicator)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Unselected: Story = {
  args: {
    label: "Option 1",
    name: "radio-group",
  },
};

export const Selected: Story = {
  args: {
    label: "Option 1",
    name: "radio-group",
    checked: true,
  },
};

export const Required: Story = {
  args: {
    label: "Option 1",
    name: "radio-group",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Option 1",
    name: "radio-group",
    validationState: "error",
    errorText: "This option cannot be selected",
  },
};

export const WithSuccess: Story = {
  args: {
    label: "Option 1",
    name: "radio-group",
    checked: true,
    validationState: "success",
    successText: "Great choice!",
  },
};

export const Disabled: Story = {
  args: {
    label: "Option 1",
    name: "radio-group",
    disabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    label: "Option 1",
    name: "radio-group",
    disabled: true,
    checked: true,
  },
};

export const WithoutGroupLabel: Story = {
  args: {
    label: "I agree to the terms and conditions",
    name: "agreement",
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button without a group label shows '(required)' indicator when required.",
      },
    },
  },
};
