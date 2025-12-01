import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A compact, theme-agnostic label component for categorization and region indication. Colors and styles are controlled by design tokens and adapt to NTG themes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "subtle",
        "darwin",
        "top-end",
        "east-arnhem",
        "big-rivers",
        "barkly",
        "central-australia",
      ],
      description: "Tag variant (region or style)",
    },
    children: {
      control: "text",
      description: "Tag label text.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the tag is disabled.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes.",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "TAG LABEL",
  },
};

export const Subtle: Story = {
  args: {
    variant: "subtle",
    children: "TAG LABEL",
  },
};

export const Darwin: Story = {
  args: {
    variant: "darwin",
    children: "TAG LABEL",
  },
};

export const TopEnd: Story = {
  args: {
    variant: "top-end",
    children: "TAG LABEL",
  },
};

export const EastArnhem: Story = {
  args: {
    variant: "east-arnhem",
    children: "TAG LABEL",
  },
};

export const BigRivers: Story = {
  args: {
    variant: "big-rivers",
    children: "TAG LABEL",
  },
};

export const Barkly: Story = {
  args: {
    variant: "barkly",
    children: "TAG LABEL",
  },
};

export const CentralAustralia: Story = {
  args: {
    variant: "central-australia",
    children: "TAG LABEL",
  },
};
