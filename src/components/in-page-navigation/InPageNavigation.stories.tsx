import type { Meta, StoryObj } from "@storybook/react";
import { InPageNavigation } from "./InPageNavigation";

const meta = {
  title: "Components/InPageNavigation",
  component: InPageNavigation,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InPageNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "On this page",
    links: [
      { href: "#section-1", label: "Link to section 1" },
      { href: "#section-2", label: "Link to section 2" },
      { href: "#section-3", label: "Link to section 3" },
      { href: "#section-4", label: "Link to section 4" },
      { href: "#section-5", label: "Link to section 5" },
    ],
  },
};

export const MultipleLinks: Story = {
  args: {
    title: "On this page",
    links: [
      { href: "#introduction", label: "Introduction" },
      { href: "#overview", label: "Overview" },
      { href: "#features", label: "Features and Benefits" },
      { href: "#getting-started", label: "Getting Started" },
      { href: "#installation", label: "Installation Guide" },
      { href: "#configuration", label: "Configuration Options" },
      { href: "#usage", label: "Usage Examples" },
      { href: "#troubleshooting", label: "Troubleshooting" },
      { href: "#faq", label: "Frequently Asked Questions" },
      { href: "#support", label: "Support and Resources" },
    ],
  },
};

export const CustomTitle: Story = {
  args: {
    title: "Table of Contents",
    links: [
      { href: "#chapter-1", label: "Chapter 1: Introduction" },
      { href: "#chapter-2", label: "Chapter 2: Foundations" },
      { href: "#chapter-3", label: "Chapter 3: Advanced Topics" },
      { href: "#chapter-4", label: "Chapter 4: Best Practices" },
      { href: "#chapter-5", label: "Chapter 5: Conclusion" },
    ],
  },
};
