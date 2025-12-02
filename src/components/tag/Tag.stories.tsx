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
        "darwin-ac",
        "top-end",
        "top-end-ac",
        "east-arnhem",
        "big-rivers",
        "barkly",
        "barkly-ac",
        "central-australia",
        "central-australia-ac",
      ],
      description: "Tag variant (region or style). Variants with -ac suffix use accessible colors for improved WCAG contrast.",
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
    variant: "darwin-ac",
    children: "DARWIN",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Darwin region tag with accessible color variant (WCAG AA/AAA compliant). Uses #398600 for improved text contrast.",
      },
    },
  },
};

export const TopEnd: Story = {
  args: {
    variant: "top-end-ac",
    children: "TOP END",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Top End region tag with accessible color variant (WCAG AA/AAA compliant). Uses #00819e for improved text contrast.",
      },
    },
  },
};

export const EastArnhem: Story = {
  args: {
    variant: "east-arnhem",
    children: "EAST ARNHEM",
  },
};

export const BigRivers: Story = {
  args: {
    variant: "big-rivers",
    children: "BIG RIVERS",
  },
};

export const Barkly: Story = {
  args: {
    variant: "barkly-ac",
    children: "BARKLY",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Barkly region tag with accessible color variant (WCAG AA/AAA compliant). Uses #d2430f for improved text contrast.",
      },
    },
  },
};

export const CentralAustralia: Story = {
  args: {
    variant: "central-australia-ac",
    children: "CENTRAL AUSTRALIA",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Central Australia region tag with accessible color variant (WCAG AA/AAA compliant). Uses #e8114b for improved text contrast.",
      },
    },
  },
};
