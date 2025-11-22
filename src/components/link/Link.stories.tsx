import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A simple, accessible link component for navigation and document downloads. Works inline within paragraphs or as standalone links. Fully theme-agnostic using design system tokens.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      description: "The URL the link points to.",
    },
    children: {
      control: "text",
      description: "The link text content.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the link is disabled.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes.",
    },
    ariaLabel: {
      control: "text",
      description: "Accessible label for screen readers.",
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Link sample text",
  },
};

export const InParagraph: Partial<Story> = {
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <p>
        Links can be inline (as part of a paragraph or text) or standalone.{" "}
        <Link href="#">This is an inline link</Link> that flows naturally with
        the surrounding text. Links work seamlessly within paragraphs and
        maintain proper text flow.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Inline links flow naturally within paragraph text and inherit the surrounding context.",
      },
    },
  },
};

export const AllStates: Partial<Story> = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div>
        <strong>Default:</strong>
        <br />
        <Link href="#default">Link sample text</Link>
      </div>
      <div>
        <strong>Hover:</strong>
        <br />
        <Link href="#hover">Link sample text</Link>
        <br />
        <small style={{ color: "var(--clr-text-helper)" }}>
          (Hover to see color change)
        </small>
      </div>
      <div>
        <strong>Visited:</strong>
        <br />
        <Link href="#visited">Link sample text</Link>
        <br />
        <small style={{ color: "var(--clr-text-helper)" }}>
          (Click to mark as visited)
        </small>
      </div>
      <div>
        <strong>Focus:</strong>
        <br />
        <Link href="#focus">Link sample text</Link>
        <br />
        <small style={{ color: "var(--clr-text-helper)" }}>
          (Tab to see focus state with background and border)
        </small>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All link states: default (blue), hover (ochre/red), visited (purple), and focus (background with bottom border). Links have no underline decoration in any state.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    href: "#",
    children: "Link sample text",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled links cannot be clicked and have reduced opacity.",
      },
    },
  },
};

export const NavigationLinks: Partial<Story> = {
  render: () => (
    <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Link href="#home">Home</Link>
      <Link href="#about">About Us</Link>
      <Link href="#services">Services</Link>
      <Link href="#contact">Contact</Link>
    </nav>
  ),
  parameters: {
    docs: {
      description: {
        story: "Links used in navigation menus.",
      },
    },
  },
};
