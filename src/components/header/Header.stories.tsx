import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Header component for site-wide navigation with NT.GOV.AU branding, navigation links, and integrated search. Responsive design adapts from desktop to mobile with drawer navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    navigationItems: {
      control: "object",
      description: "Array of navigation link objects",
    },
    searchProps: {
      control: "object",
      description: "Configuration for the search bar",
    },
    logoHref: {
      control: "text",
      description: "Destination URL for logo link",
    },
    showSearch: {
      control: "boolean",
      description: "Whether to display the search functionality",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultNavigationItems = [
  {
    href: "https://nt.gov.au/services",
    label: "Find online services",
    external: true,
    ariaLabel: "Find online services (opens in new window)",
  },
  {
    href: "https://nt.gov.au/contacts",
    label: "Contacts",
  },
];

/**
 * Default header with all features enabled. Desktop view shows navigation links
 * and inline search bar. Resize browser to see responsive behavior.
 */
export const Default: Story = {
  args: {
    navigationItems: defaultNavigationItems,
    searchProps: {
      placeholder: "Search",
      onSubmit: (value) => {
        console.log("Search submitted:", value);
      },
    },
    logoHref: "/",
    showSearch: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default header configuration with NT.GOV.AU logo, navigation links, and search. On desktop (≥992px), all elements are visible. On tablet (768-991px), search becomes collapsible. On mobile (<768px), navigation moves to a drawer.",
      },
    },
  },
};

/**
 * Desktop view (≥992px) showing always-visible navigation and inline search bar.
 */
export const Desktop: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        story:
          "Desktop layout displays logo on the left, navigation links in the center, and search bar on the right. All elements are always visible for easy access.",
      },
    },
  },
};

/**
 * Tablet view (768-991px) showing collapsible search with visible navigation.
 */
export const Tablet: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    docs: {
      description: {
        story:
          "Tablet layout keeps navigation links visible but collapses search behind an icon button. Click the search icon to expand the search bar below the header.",
      },
    },
  },
};

/**
 * Mobile view (<768px) with drawer navigation and collapsible search.
 */
export const Mobile: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "Mobile layout shows logo, search icon, and hamburger menu. Click the search icon to expand search below header. Click hamburger to open navigation drawer from the left.",
      },
    },
  },
};

/**
 * Mobile with search expanded showing the full search bar below header.
 */
export const MobileSearchExpanded: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "Example of mobile header with search expanded. The search bar slides down below the header with animation. Search icon button shows active state.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    // Auto-expand search for demo
    setTimeout(() => {
      const searchButton = canvasElement.querySelector(
        ".ntgds-header__search-toggle"
      ) as HTMLElement;
      searchButton?.click();
    }, 500);
  },
};

/**
 * Mobile with drawer open showing navigation links in slide-out panel.
 */
export const MobileDrawerOpen: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "Example of mobile header with navigation drawer open. The drawer slides in from the left with backdrop overlay. Click backdrop, close button, or any link to close.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    // Auto-open drawer for demo
    setTimeout(() => {
      const hamburger = canvasElement.querySelector(
        ".ntgds-header__hamburger"
      ) as HTMLElement;
      hamburger?.click();
    }, 500);
  },
};

/**
 * Header without search functionality.
 */
export const WithoutSearch: Story = {
  args: {
    navigationItems: defaultNavigationItems,
    logoHref: "/",
    showSearch: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Header can be configured without search functionality by setting showSearch to false. Only logo and navigation links are displayed.",
      },
    },
  },
};

/**
 * Header with custom navigation items including internal and external links.
 */
export const CustomNavigation: Story = {
  args: {
    navigationItems: [
      {
        href: "/about",
        label: "About",
      },
      {
        href: "/services",
        label: "Services",
      },
      {
        href: "https://example.com",
        label: "External Link",
        external: true,
        ariaLabel: "External Link (opens in new window)",
      },
    ],
    searchProps: {
      placeholder: "Search site...",
    },
    logoHref: "/",
    showSearch: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Header supports custom navigation items with both internal and external links. External links automatically get the external link icon and open in new tabs.",
      },
    },
  },
};

/**
 * Interactive example showing search functionality.
 */
export const InteractiveSearch: Story = {
  args: {
    navigationItems: defaultNavigationItems,
    logoHref: "/",
    showSearch: true,
  },
  render: (args) => {
    const [searchValue, setSearchValue] = React.useState("");

    return (
      <>
        <Header
          {...args}
          searchProps={{
            placeholder: "Type to search...",
            value: searchValue,
            onChange: setSearchValue,
            onSubmit: (value) => {
              alert(`Searching for: ${value}`);
            },
          }}
        />
        <div style={{ padding: "2rem", background: "#f5f5f5" }}>
          <p>
            <strong>Current search value:</strong> {searchValue || "(empty)"}
          </p>
          <p>
            Try typing in the search box and submitting. The search value is
            controlled by React state.
          </p>
        </div>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive example demonstrating controlled search input with onChange and onSubmit handlers. Search value is managed in React state.",
      },
    },
  },
};
