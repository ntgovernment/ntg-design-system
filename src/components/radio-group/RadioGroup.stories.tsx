import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label for the radio group",
    },
    name: {
      control: "text",
      description: "The name attribute for all radio buttons in the group",
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
      description: "The validation state of the radio group",
    },
    required: {
      control: "boolean",
      description: "Whether the radio group is required",
    },
    orientation: {
      control: "radio",
      options: ["vertical", "horizontal"],
      description: "The layout orientation of the radio buttons",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const basicOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Default: Story = {
  args: {
    label: "Choose an option",
    name: "basic-radio-group",
    options: basicOptions,
  },
};

export const Vertical: Story = {
  args: {
    label: "Choose your preference",
    name: "vertical-radio-group",
    options: basicOptions,
    orientation: "vertical",
    helperText: "Select one option from the list",
  },
};

export const Horizontal: Story = {
  args: {
    label: "Choose your preference",
    name: "horizontal-radio-group",
    options: basicOptions,
    orientation: "horizontal",
    helperText: "Select one option from the list",
  },
};

export const Required: Story = {
  args: {
    label: "Choose an option",
    name: "required-radio-group",
    options: basicOptions,
    required: true,
    helperText: "This field is required",
  },
};

export const WithError: Story = {
  args: {
    label: "Choose an option",
    name: "error-radio-group",
    options: basicOptions,
    validationState: "error",
    errorText: "Please select an option",
  },
};

export const WithSuccess: Story = {
  args: {
    label: "Choose an option",
    name: "success-radio-group",
    options: basicOptions,
    value: "option1",
    validationState: "success",
    successText: "Great choice!",
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: "Choose an option",
    name: "disabled-options-radio-group",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2 (Disabled)", disabled: true },
      { value: "option3", label: "Option 3" },
    ],
  },
};

export const WithHelperTextPerOption: Story = {
  args: {
    label: "Choose your plan",
    name: "plan-radio-group",
    options: [
      { value: "basic", label: "Basic", helperText: "Free forever" },
      { value: "pro", label: "Pro", helperText: "$9.99/month" },
      { value: "enterprise", label: "Enterprise", helperText: "Contact sales" },
    ],
  },
};
