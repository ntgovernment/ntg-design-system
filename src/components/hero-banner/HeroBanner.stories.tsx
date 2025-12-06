import type { Meta, StoryObj } from "@storybook/react";
import { HeroBanner } from "./HeroBanner";

const meta = {
  title: "Components/HeroBanner",
  component: HeroBanner,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "HeroBanner displays a prominent page header with breadcrumbs, title, description, CTA button, and optional popular links section. Typically used at the top of landing pages.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "Visual style variant of the hero banner",
    },
    title: {
      control: "text",
      description: "Main page title displayed prominently",
    },
    description: {
      control: "text",
      description: "Optional short description of the page goal",
    },
    ctaLabel: {
      control: "text",
      description: "Call-to-action button label",
    },
    ctaHref: {
      control: "text",
      description: "Call-to-action button destination URL",
    },
    showPopular: {
      control: "boolean",
      description: "Show/hide the popular links section",
    },
    popularHeading: {
      control: "text",
      description: "Heading for the popular links section",
    },
    showGraphic: {
      control: "boolean",
      description: "Show/hide the background graphic",
    },
    graphicOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description: "Opacity of the background graphic",
    },
  },
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Transport", href: "/services/transport" },
      { label: "Current page" },
    ],
    title: "Page title",
    description: "Optional short description of the page goal",
    ctaLabel: "Call to action",
    ctaHref: "#",
    popularLinks: [
      { label: "Bus timetables and maps", href: "#" },
      { label: "Check your rego", href: "#" },
      { label: "Find a Motor Vehicle Registry (MVR)", href: "#" },
      { label: "Government priorities", href: "#" },
    ],
    showPopular: true,
    popularHeading: "Popular",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Transport", href: "/services/transport" },
      { label: "Current page" },
    ],
    title: "Secondary Hero Banner",
    description: "Light background variant with standard text colors",
    ctaLabel: "Get started",
    ctaHref: "#",
    popularLinks: [
      { label: "Bus timetables and maps", href: "#" },
      { label: "Check your rego", href: "#" },
      { label: "Find a Motor Vehicle Registry (MVR)", href: "#" },
      { label: "Government priorities", href: "#" },
    ],
    showPopular: true,
    popularHeading: "Popular",
  },
};

export const WithoutBreadcrumbs: Story = {
  args: {
    title: "Welcome to NT.GOV.AU",
    description: "Find government services and information for the Northern Territory",
    ctaLabel: "Explore services",
    ctaHref: "#",
    popularLinks: [
      { label: "Bus timetables and maps", href: "#" },
      { label: "Check your rego", href: "#" },
      { label: "Find a Motor Vehicle Registry (MVR)", href: "#" },
      { label: "Government priorities", href: "#" },
    ],
  },
};

export const WithoutDescription: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Current page" },
    ],
    title: "Page title",
    ctaLabel: "Get started",
    ctaHref: "#",
    popularLinks: [
      { label: "Bus timetables and maps", href: "#" },
      { label: "Check your rego", href: "#" },
    ],
  },
};

export const WithoutCTA: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Current page" },
    ],
    title: "Information Page",
    description: "This page provides important information but doesn't require a call to action",
    popularLinks: [
      { label: "Related page 1", href: "#" },
      { label: "Related page 2", href: "#" },
      { label: "Related page 3", href: "#" },
    ],
  },
};

export const WithoutPopular: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Current page" },
    ],
    title: "Simple Hero Banner",
    description: "A minimal hero banner without popular links",
    ctaLabel: "Learn more",
    ctaHref: "#",
    showPopular: false,
  },
};

export const MinimalContent: Story = {
  args: {
    title: "Minimal Example",
  },
};

export const LongTitle: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Current page" },
    ],
    title: "Northern Territory Government Services and Information Portal for Citizens",
    description: "Access a comprehensive range of government services, forms, and information to support Northern Territory residents and businesses",
    ctaLabel: "Browse all services",
    ctaHref: "#",
    popularLinks: [
      { label: "Driver's licence renewal", href: "#" },
      { label: "Business registration", href: "#" },
      { label: "Public transport information", href: "#" },
      { label: "Healthcare services", href: "#" },
      { label: "Education and schools", href: "#" },
    ],
  },
};

export const ManyPopularLinks: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Current page" },
    ],
    title: "Services Hub",
    description: "Quick access to commonly used services",
    ctaLabel: "View all services",
    ctaHref: "#",
    popularLinks: [
      { label: "Bus timetables", href: "#" },
      { label: "Check rego", href: "#" },
      { label: "MVR locations", href: "#" },
      { label: "Priorities", href: "#" },
      { label: "Healthcare", href: "#" },
      { label: "Education", href: "#" },
      { label: "Business", href: "#" },
      { label: "Tourism", href: "#" },
    ],
  },
};

export const CollapsedBreadcrumbs: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Transport", href: "/services/transport" },
      { label: "Vehicles", href: "/services/transport/vehicles" },
      { label: "Registration", href: "/services/transport/vehicles/registration" },
      { label: "Current page" },
    ],
    title: "Vehicle Registration",
    description: "Register your vehicle or renew your registration online",
    ctaLabel: "Start registration",
    ctaHref: "#",
    popularLinks: [
      { label: "Check rego status", href: "#" },
      { label: "Calculate registration fees", href: "#" },
      { label: "Find a registry", href: "#" },
    ],
  },
};
