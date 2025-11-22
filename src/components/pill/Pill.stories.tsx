import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pill } from "./Pill";

const meta = {
  title: "Components/Pill",
  component: Pill,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A compact, always-removable Pill component. Theme-agnostic styling via tokens. Close button is always present and disabled when the Pill is disabled.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Pill label/content",
    },
    disabled: {
      control: "boolean",
      description: "Disables the Pill and its close action",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    onClose: {
      action: "closed",
      description: "Close handler (defaults to no-op if not provided)",
    },
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Pill label",
  },
};

export const Hover: Story = {
  args: {
    children: "Hover over me",
  },
  parameters: {
    docs: {
      description:
        "Hover state changes background to var(--clr-surface-primary-hover, #EAE9E8).",
    },
  },
};

export const Focus: Story = {
  args: {
    children: "Focus state",
  },
  parameters: {
    docs: {
      description:
        "Focus state shows 4px outline with var(--clr-focus-focus, #EC8C58).",
    },
  },
};
