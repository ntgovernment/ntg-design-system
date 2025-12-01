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
    src: "https://placehold.co/650x488",
    alt: "Placeholder image",
  },
};

export const WithCaption: Story = {
  args: {
    src: "https://placehold.co/650x488",
    alt: "Placeholder image with caption",
    caption:
      "Caption lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
};
