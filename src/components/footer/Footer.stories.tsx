import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Footer, FooterProps, FooterSection, SocialLink } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Navigation/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Footer component for NT.GOV.AU design system. Displays organization information, service links, social media, and acknowledgement. Responsive across mobile, tablet, and desktop breakpoints.",
      },
    },
    backgrounds: {
      disable: true, // Disable default Storybook backgrounds since footer has its own
    },
  },
  tags: ["autodocs"],
  argTypes: {
    sections: {
      control: false,
      description: "Custom footer sections with titles and links",
    },
    socialLinks: {
      control: false,
      description: "Custom social media links with icon, label, and href",
    },
    showAcknowledgement: {
      control: "boolean",
      description: "Show/hide the traditional owner acknowledgement section",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <main
          style={{
            flex: 1,
            padding: "2rem",
            backgroundColor: "#f5f4f2",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <h1>Page Content</h1>
          <p>This is where your page content would go.</p>
        </main>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default desktop view with all sections, social links, disclaimer links,
 * and acknowledgement text. Demonstrates the complete footer layout.
 */
export const Desktop: Story = {
  args: {
    showAcknowledgement: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
  render: (args) => <Footer {...args} />,
};

/**
 * Tablet view (768-991px) showing 2-column layout with Information and
 * services on the left, and Find out more + Connect with us on the right.
 */
export const Tablet: Story = {
  args: {
    showAcknowledgement: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  render: (args) => <Footer {...args} />,
};

/**
 * Mobile view (<768px) showing single-column stacked layout with all
 * sections flowing vertically.
 */
export const Mobile: Story = {
  args: {
    showAcknowledgement: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: (args) => <Footer {...args} />,
};

/**
 * Custom sections example showing how to override the default NT.GOV.AU
 * content with your own footer sections and social links.
 */
export const CustomSections: Story = {
  args: {
    sections: [
      {
        title: "Products",
        links: [
          { href: "/products/software", label: "Software Solutions" },
          { href: "/products/hardware", label: "Hardware" },
          { href: "/products/services", label: "Professional Services" },
          { href: "/products/support", label: "Technical Support" },
        ],
      },
      {
        title: "Resources",
        links: [
          { href: "/docs", label: "Documentation" },
          { href: "/tutorials", label: "Tutorials" },
          { href: "/faq", label: "FAQ" },
          { href: "/community", label: "Community" },
        ],
      },
    ],
    socialLinks: [
      { icon: "twitter", label: "Twitter", href: "https://twitter.com" },
      { icon: "facebook", label: "Facebook", href: "https://facebook.com" },
      { icon: "github", label: "GitHub", href: "https://github.com" },
    ],
    showAcknowledgement: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

/**
 * Minimal footer example without acknowledgement section, showing just
 * the main content areas and disclaimer links.
 */
export const Minimal: Story = {
  args: {
    showAcknowledgement: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

/**
 * Extended example showing all footer features on desktop with custom
 * content and full accessibility.
 */
export const Extended: Story = {
  args: {
    sections: [
      {
        title: "Main Services",
        links: [
          { href: "/service-1", label: "Service Category One" },
          { href: "/service-2", label: "Service Category Two" },
          { href: "/service-3", label: "Service Category Three" },
          { href: "/service-4", label: "Service Category Four" },
          { href: "/service-5", label: "Service Category Five" },
          { href: "/service-6", label: "Service Category Six" },
          { href: "/service-7", label: "Service Category Seven" },
          { href: "/service-8", label: "Service Category Eight" },
        ],
      },
      {
        title: "Additional Resources",
        links: [
          { href: "/about", label: "About Us" },
          { href: "/blog", label: "Blog" },
          { href: "/events", label: "Events" },
          { href: "/news", label: "News" },
        ],
      },
    ],
    socialLinks: [
      { icon: "facebook", label: "Facebook", href: "https://facebook.com" },
      { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
      { icon: "youtube", label: "YouTube", href: "https://youtube.com" },
      { icon: "instagram", label: "Instagram", href: "https://instagram.com" },
    ],
    showAcknowledgement: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};
