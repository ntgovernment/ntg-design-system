import type { Meta, StoryObj } from "@storybook/react";
import { Callout } from "./Callout";

const meta = {
  title: "Components/Callout",
  component: Callout,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Callout component for highlighting important information with a prominent left border. Perfect for tips, notes, and informational content. Does not support icons.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Callout heading text",
    },
    children: {
      control: "text",
      description: "Callout body content (supports rich content)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Callout heading",
    children:
      "Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.",
  },
};

export const RichContent: Story = {
  args: {
    title: "Getting Started Guide",
    children: "Placeholder",
  },
  render: () => (
    <Callout title="Getting Started Guide">
      <p>
        Follow these steps to get started with the NTG Design System:
      </p>
      <ol>
        <li>Install the package using npm or yarn</li>
        <li>Import the theme CSS in your application</li>
        <li>Import components as needed</li>
        <li>Refer to the documentation for component APIs</li>
      </ol>
      <p>
        <strong>Note:</strong> Callout is a text-only component and does not support icons.
      </p>
    </Callout>
  ),
};

export const LongContent: Story = {
  args: {
    title: "Accessibility Guidelines",
    children:
      "The NTG Design System is committed to providing accessible components that meet WCAG 2.1 AA standards. All components include proper ARIA attributes, keyboard navigation support, and semantic HTML. We test with screen readers and ensure high contrast mode compatibility. When using callouts, ensure that the information is also conveyed through text and not color alone. This helps users with visual impairments or color blindness understand the content.",
  },
};

export const ShortContent: Story = {
  args: {
    title: "Quick Note",
    children: "This is a brief callout with minimal content.",
  },
};
