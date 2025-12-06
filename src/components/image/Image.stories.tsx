import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  parameters: {
    docs: {
      description: {
        component:
          "A theme-agnostic image component with optional caption support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "Image source URL",
    },
    alt: {
      control: "text",
      description: "Alt text for accessibility",
    },
    caption: {
      control: "text",
      description: "Optional caption text",
    },
    width: {
      control: "text",
      description: "Image width",
    },
    height: {
      control: "text",
      description: "Image height",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "/demo-images/detail-1.webp",
    alt: "Scenic landscape with gradient sky and green fields",
  },
};

export const WithCaption: Story = {
  args: {
    src: "/demo-images/detail-2.webp",
    alt: "Beautiful sunset with warm color gradient",
    caption:
      "Lightweight WEBP demo image optimized for web performance. Images are under 50KB to ensure fast loading across all devices and network conditions.",
  },
};
