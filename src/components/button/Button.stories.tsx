import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

// Font Awesome icon helper
const createIcon = (iconClass: string) => {
  if (!iconClass) return undefined;
  return <i className={iconClass} />;
};

// Available Font Awesome icons
const ICON_OPTIONS = {
  none: "",
  "square-check": "fa-regular fa-square-check",
  save: "fas fa-save",
  download: "fas fa-download",
  "arrow-right": "fas fa-arrow-right",
  plus: "fas fa-plus",
  check: "fas fa-check",
};

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
    iconLeft: {
      control: { type: "select" },
      options: Object.keys(ICON_OPTIONS),
      description: "Icon to display on the left side of the button text.",
      mapping: Object.fromEntries(Object.entries(ICON_OPTIONS).map(([key, value]) => [key, createIcon(value)])),
    },
    iconRight: {
      control: { type: "select" },
      options: Object.keys(ICON_OPTIONS),
      description: "Icon to display on the right side of the button text.",
      mapping: Object.fromEntries(Object.entries(ICON_OPTIONS).map(([key, value]) => [key, createIcon(value)])),
    },
    loadingIcon: {
      table: { disable: true },
      description: "Uses default loading spinner (not customizable in docs).",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    children: "Loading",
  },
  argTypes: {
    iconLeft: { table: { disable: true } },
    iconRight: { table: { disable: true } },
    loadingIcon: { table: { disable: true } },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Label",
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: "primary",
    children: "Label",
    iconLeft: createIcon(ICON_OPTIONS.save),
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: "primary",
    children: "Label",
    iconRight: createIcon(ICON_OPTIONS["arrow-right"]),
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: "secondary",
    children: "Label",
    iconLeft: createIcon(ICON_OPTIONS.download),
    iconRight: createIcon(ICON_OPTIONS["arrow-right"]),
  },
};

export const SmallWithIcon: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Label",
    iconLeft: createIcon(ICON_OPTIONS.download),
  },
};
