import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from "./Notification";

const meta: Meta<typeof Notification> = {
  title: "Components/Notification",
  component: Notification,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A theme-agnostic notification component with variants for info, success, warning, and danger states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Notification title",
    },
    message: {
      control: "text",
      description: "Notification message content",
    },
    variant: {
      control: "select",
      options: ["info", "success", "warning", "danger"],
      description: "Notification variant type",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Info: Story = {
  args: {
    title: "Information alert",
    message:
      "Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.",
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    title: "Success alert",
    message:
      "Your action was completed successfully. All changes have been saved.",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    title: "Warning alert",
    message:
      "Please review the following information before proceeding with this action.",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    title: "Danger alert",
    message:
      "An error occurred while processing your request. Please try again later.",
    variant: "danger",
  },
};
