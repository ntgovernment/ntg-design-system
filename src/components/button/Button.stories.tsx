import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

// Valid Font Awesome (v6) icon names used with shared <Icon /> component
// These are passed as plain strings; Button will render <Icon name={value} />
// Legacy names like 'save' have been updated to 'floppy-disk'.
const ICON_OPTIONS = [
  "none",
  "floppy-disk",
  "download",
  "arrow-right",
  "plus",
  "check",
  "square-check",
  "circle-info",
  "circle-check",
  "triangle-exclamation",
  "circle-xmark",
];

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
      options: ICON_OPTIONS,
      description:
        "Icon name (Font Awesome) for the left side. Leave 'none' for no icon.",
      mapping: ICON_OPTIONS.reduce<Record<string, string | undefined>>(
        (acc, name) => {
          acc[name] = name === "none" ? undefined : name;
          return acc;
        },
        {}
      ),
    },
    iconRight: {
      control: { type: "select" },
      options: ICON_OPTIONS,
      description:
        "Icon name (Font Awesome) for the right side. Leave 'none' for no icon.",
      mapping: ICON_OPTIONS.reduce<Record<string, string | undefined>>(
        (acc, name) => {
          acc[name] = name === "none" ? undefined : name;
          return acc;
        },
        {}
      ),
    },
    iconColor: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "tertiary", "inverse"],
      description: "Color variant applied to any rendered icon.",
    },
    padLeft: {
      control: "boolean",
      description: "Remove left padding (tertiary only)",
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

export const TertiaryNoLeftPad: Story = {
  args: {
    variant: "tertiary",
    children: "Find out more",
    iconRight: "arrow-right",
    padLeft: false,
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
    iconLeft: "floppy-disk",
    iconColor: "inverse",
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: "primary",
    children: "Label",
    iconRight: "arrow-right",
    iconColor: "inverse",
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: "secondary",
    children: "Label",
    iconLeft: "download",
    iconRight: "arrow-right",
    iconColor: "default",
  },
};

export const SmallWithIcon: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Label",
    iconLeft: "download",
    iconColor: "inverse",
  },
};
