import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text", description: "TextArea id associated with label" },
    name: { control: "text", description: "Form field name" },
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
    maxLength: { control: "number", description: "Maximum character length" },
    showCharCount: { control: "boolean", description: "Show character counter" },
    className: { control: "text", description: "Additional CSS classes" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultEmpty: Story = {
  args: {
    id: "ta-default",
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "Placeholder text",
    maxWidth: 480,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default state with label, helper text (positioned between label and textarea), and placeholder. Min-height 120px with vertical resize.",
      },
    },
  },
};

export const WithCharCount: Story = {
  args: {
    id: "ta-charcount",
    label: "Description",
    placeholder: "Enter your description",
    maxLength: 100,
    showCharCount: true,
    helperText: "Keep it concise.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Character counter (left-aligned) shows current length and max length (0/100 format). Updates dynamically as user types.",
      },
    },
  },
};

export const Required: Story = {
  args: {
    id: "ta-required",
    label: "Comments",
    required: true,
    placeholder: "Enter your comments",
    helperText: "This field is required.",
    maxLength: 500,
    showCharCount: true,
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
    id: "ta-error",
    label: "Feedback",
    status: "error",
    errorText: "Feedback must be at least 10 characters.",
    placeholder: "Enter your feedback",
    defaultValue: "Too short",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Error state with red border and error message below the textarea. Red circle-exclamation icon (vertically centered) appears 8px to the left of the error text.",
      },
    },
  },
};

export const SuccessState: Story = {
  args: {
    id: "ta-success",
    label: "Review",
    status: "success",
    successText: "Thank you for your review!",
    placeholder: "Write your review",
    defaultValue: "This product is amazing! Highly recommend.",
    maxLength: 500,
    showCharCount: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Success state with green border and success message below the textarea. Green circle-check icon (vertically centered) appears 8px to the left of the success text.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: "ta-disabled",
    label: "Notes",
    disabled: true,
    placeholder: "Enter notes",
    defaultValue: "These notes are read-only",
  },
};

export const LongContent: Story = {
  args: {
    id: "ta-long",
    label: "Article Body",
    placeholder: "Write your article...",
    defaultValue: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    helperText: "Write a compelling article.",
    maxLength: 5000,
    showCharCount: true,
  },
};
