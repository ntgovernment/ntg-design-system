import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "collapsed"],
      description: "Display variant",
    },
    ariaLabel: {
      control: "text",
      description: "Accessible label for the navigation",
    },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Page 1", href: "/page-1" },
      { label: "Parent page", href: "/parent" },
      { label: "Current page" },
    ],
    variant: "default",
  },
};

export const Collapsed: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Page 1", href: "/page-1" },
      { label: "Parent page", href: "/parent" },
      { label: "Current page" },
    ],
    variant: "collapsed",
  },
};

export const TwoLevels: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Current page" },
    ],
    variant: "default",
  },
};

export const DeepNavigation: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Level 1", href: "/level-1" },
      { label: "Level 2", href: "/level-2" },
      { label: "Level 3", href: "/level-3" },
      { label: "Level 4", href: "/level-4" },
      { label: "Current page" },
    ],
    variant: "default",
  },
};

export const DeepNavigationCollapsed: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Level 1", href: "/level-1" },
      { label: "Level 2", href: "/level-2" },
      { label: "Level 3", href: "/level-3" },
      { label: "Level 4", href: "/level-4" },
      { label: "Current page" },
    ],
    variant: "collapsed",
  },
};

export const WithLongLabels: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      {
        label: "Very Long Category Name That Extends",
        href: "/category",
      },
      {
        label: "Another Long Subcategory Name",
        href: "/subcategory",
      },
      { label: "Current Page With Long Title" },
    ],
    variant: "collapsed",
  },
};

export const SingleLevel: Story = {
  args: {
    items: [{ label: "Home" }],
    variant: "default",
  },
};

export const CustomAriaLabel: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Details" },
    ],
    variant: "default",
    ariaLabel: "Product navigation",
  },
};

export const CollapsedWithDropdownInteractive: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Business Services", href: "/business" },
      { label: "Consulting", href: "/consulting" },
      { label: "Digital Transformation", href: "/digital" },
      { label: "Current Project" },
    ],
    variant: "collapsed",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Click the ellipsis (...) to open the dropdown menu showing hidden breadcrumb items. The dropdown is center-aligned with a fade-in/slide-down animation. Press Escape or click outside to close.",
      },
    },
  },
};

export const MobileCollapsed: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Electronics", href: "/electronics" },
      { label: "Laptops", href: "/laptops" },
      { label: "Current Model" },
    ],
    variant: "collapsed",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "On mobile devices, the collapsed variant maintains the same dropdown behavior but adjusts the dropdown width to fit smaller screens.",
      },
    },
  },
};
