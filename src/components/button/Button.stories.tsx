import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  args: {
    children: "Button",
    variant: "primary",
    size: "large",
  },

  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
      description: "The visual style of the button.",
    },

    size: {
      control: "select",
      options: ["large", "small"],
      description: "The size of the button.",
    },

    loading: {
      control: "boolean",
      description: "Show a loading indicator.",
    },

    disabled: {
      control: "boolean",
      description: "Disable the button.",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Label",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Label",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Label",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Label",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Label",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Label",
  },
};
