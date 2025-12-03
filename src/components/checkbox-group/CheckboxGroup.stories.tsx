import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxGroup } from "./CheckboxGroup";

const meta: Meta<typeof CheckboxGroup> = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text", description: "CheckboxGroup id base" },
    name: { control: "text", description: "Form field name base" },
    label: { control: "text", description: "Group label text" },
    helperText: { control: "text", description: "Optional helper message" },
    orientation: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
      description: "Layout orientation",
    },
    status: {
      control: { type: "inline-radio" },
      options: ["default", "error", "success"],
      description: "Validation state styling",
    },
    errorText: { control: "text", description: "Error message (sets aria-invalid)" },
    successText: { control: "text", description: "Success message" },
    required: { control: "boolean", description: "Required field group" },
    disabled: { control: "boolean", description: "Disabled all checkboxes" },
    className: { control: "text", description: "Additional CSS classes" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: "option1", label: "Checkbox label" },
  { value: "option2", label: "Checkbox label" },
  { value: "option3", label: "Checkbox label" },
];

export const VerticalDefault: Story = {
  args: {
    id: "checkbox-group-vertical",
    name: "preferences",
    label: "Group Label",
    helperText: "Optional helper text",
    options: defaultOptions,
    orientation: "vertical",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default vertical layout with group label, helper text, and multiple checkboxes stacked vertically with 8px gap.",
      },
    },
  },
};

export const HorizontalDefault: Story = {
  args: {
    id: "checkbox-group-horizontal",
    name: "preferences",
    label: "Group Label",
    helperText: "Optional helper text",
    options: defaultOptions,
    orientation: "horizontal",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Horizontal layout with checkboxes arranged side-by-side with 8px gap. Wraps to next line if needed.",
      },
    },
  },
};

export const Required: Story = {
  args: {
    id: "checkbox-group-required",
    name: "terms",
    label: "Group Label",
    helperText: "You must select at least one option",
    options: defaultOptions,
    required: true,
    orientation: "vertical",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Required group showing '(Required)' indicator beside the group label in normal weight.",
      },
    },
  },
};

export const ErrorState: Story = {
  args: {
    id: "checkbox-group-error",
    name: "consent",
    label: "Group Label",
    helperText: "Select your preferences",
    options: defaultOptions,
    status: "error",
    errorText: "You must select at least one option.",
    orientation: "vertical",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Error state with error message below the checkbox group. Red circle-exclamation icon (vertically centered) appears 8px to the left of the error text.",
      },
    },
  },
};

export const SuccessState: Story = {
  args: {
    id: "checkbox-group-success",
    name: "preferences",
    label: "Group Label",
    options: defaultOptions,
    status: "success",
    successText: "Preferences saved successfully!",
    defaultValue: ["option1", "option2"],
    orientation: "vertical",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Success state with success message below. Green circle-check icon (vertically centered) appears 8px to the left of the success text.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: "checkbox-group-disabled",
    name: "disabled",
    label: "Group Label",
    helperText: "These options are not available",
    options: defaultOptions,
    disabled: true,
    orientation: "vertical",
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state with reduced opacity. All checkboxes are disabled.",
      },
    },
  },
};

export const WithPreselected: Story = {
  args: {
    id: "checkbox-group-preselected",
    name: "notifications",
    label: "Notification Preferences",
    helperText: "Choose which notifications you want to receive",
    options: [
      { value: "email", label: "Email notifications" },
      { value: "sms", label: "SMS notifications" },
      { value: "push", label: "Push notifications" },
    ],
    defaultValue: ["email", "push"],
    orientation: "vertical",
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox group with some options pre-selected using defaultValue.",
      },
    },
  },
};

export const HorizontalWithManyOptions: Story = {
  args: {
    id: "checkbox-group-many",
    name: "interests",
    label: "Select Your Interests",
    options: [
      { value: "tech", label: "Technology" },
      { value: "sports", label: "Sports" },
      { value: "music", label: "Music" },
      { value: "art", label: "Art" },
      { value: "travel", label: "Travel" },
      { value: "food", label: "Food" },
    ],
    orientation: "horizontal",
  },
  parameters: {
    docs: {
      description: {
        story: "Horizontal layout with multiple options that wrap to multiple lines.",
      },
    },
  },
};
