import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Tag } from "../tag/Tag";
import { Button } from "../button/Button";
import { Image } from "../image/Image";
import { Icon } from "../icon/Icon";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    image: {
      control: false,
      description: "Image content (pass Image component as ReactNode)",
    },
    header: {
      control: false,
      description: "Header content (typically Tag + date with .ntgds-card__date)",
    },
    title: {
      control: "text",
      description: "Card title (required for accessibility and SEO)",
    },
    description: {
      control: "text",
      description: "Card description text",
    },
    footer: {
      control: false,
      description: "Footer content (typically Button with tertiary variant)",
    },
    href: {
      control: "text",
      description: "Link destination (makes card clickable, mutually exclusive with footer)",
    },
    disabled: {
      control: "boolean",
      description: "Whether the card is disabled",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    description: "This is a simple card with just a title and description.",
  },
};

export const WithImage: Story = {
  args: {
    image: (
      <Image
        src="https://picsum.photos/400/200"
        alt="Placeholder image"
        width="400"
        height="200"
      />
    ),
    title: "Card with Image",
    description: "This card includes an image component passed as ReactNode.",
  },
};

export const WithHeader: Story = {
  args: {
    header: (
      <>
        <Tag variant="top-end-ac">REGION</Tag>
        <span className="ntgds-card__date">12 Dec 2024</span>
      </>
    ),
    title: "Card with Header",
    description: "This card has a header with a Tag and date.",
  },
};

export const WithIcon: Story = {
  args: {
    icon: <Icon name="heart" size="md" color="primary" />,
    title: "Card with Icon",
    description: "Join in and honour the resilience of survivors and the lives lost.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Card with an icon displayed inline with the title. The icon and title are aligned with an 8px gap in a flex container.",
      },
    },
  },
};

export const MiniCard: Story = {
  args: {
    icon: <Icon name="compass" size="md" color="primary" />,
    variant: "minicard",
    title: "Card title",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Minicard variant with icon positioned vertically above the title. Compact layout with 24px padding ideal for topic cards or navigation elements.",
      },
    },
  },
};

export const StaticCard: Story = {
  args: {
    icon: <Icon name="phone" size="lg" color="primary" />,
    variant: "static",
    title: "Card title",
    description: "1800 000 000 or ext 12345",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Static card variant with large icon (48px) on the left and title/description stacked on the right. Horizontal layout with 12px gap ideal for contact cards or info blocks.",
      },
    },
  },
};

export const WithFooter: Story = {
  args: {
    title: "Card with Footer",
    description: "This card includes a footer with a tertiary button.",
        footer: (
          <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>
        Read more
      </Button>
    ),
  },
};

export const FullCardFigma: Story = {
  name: "Full Card (Figma Design)",
  args: {
    image: (
      <Image
        src="https://picsum.photos/400/200"
        alt="Northern Territory landscape"
        width="400"
        height="200"
      />
    ),
    header: (
      <>
        <Tag variant="top-end-ac">TOP END</Tag>
        <span className="ntgds-card__date">2 Dec 2025</span>
      </>
    ),
    title: "NT Government Announces New Initiative",
    description:
      "Comprehensive update on the latest program designed to support Territory communities and drive regional development.",
    footer: (
      <Button variant="tertiary" iconRight="arrow-right">
        Read more
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete card implementation matching Figma specifications with all elements: image, Tag header, date, title, description, and tertiary button footer.",
      },
    },
  },
};

export const NewsCard: Story = {
  args: {
    image: (
      <Image
        src="https://picsum.photos/seed/news/400/200"
        alt="News article thumbnail"
        width="400"
        height="200"
      />
    ),
    header: (
      <>
        <Tag variant="default">NEWS</Tag>
        <span className="ntgds-card__date">1 Dec 2025</span>
      </>
    ),
    title: "Community Consultation Opens for Major Project",
    description:
      "Residents invited to provide feedback on proposed infrastructure improvements in the greater Darwin area.",
        footer: (
          <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>
        Learn more
      </Button>
    ),
  },
};

export const EventCard: Story = {
  args: {
    image: (
      <Image
        src="https://picsum.photos/seed/event/400/200"
        alt="Event venue"
        width="400"
        height="200"
      />
    ),
    header: (
      <>
        <Tag variant="darwin-ac">DARWIN</Tag>
        <span className="ntgds-card__date">15 Dec 2025</span>
      </>
    ),
    title: "Annual Territory Day Celebrations",
    description:
      "Join us for fireworks, live music, and family activities at Mindil Beach to celebrate Territory Day.",
        footer: (
          <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>
        View details
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Event card using the Darwin accessible color variant (darwin-ac) for improved contrast and WCAG compliance.",
      },
    },
  },
};

export const ClickableCard: Story = {
  args: {
    image: (
      <Image
        src="https://picsum.photos/seed/click/400/200"
        alt="Article preview"
        width="400"
        height="200"
      />
    ),
    header: (
      <>
        <Tag variant="subtle">ARTICLE</Tag>
        <span className="ntgds-card__date">28 Nov 2025</span>
      </>
    ),
    title: "Understanding Territory Heritage Programs",
    description:
      "Explore how the NT Government is preserving and promoting indigenous heritage sites across the region.",
    href: "/articles/heritage-programs",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Clickable card with href prop. The entire card becomes a link (footer is excluded). Hover to see border color change and the title color shift to the link hover token.",
      },
    },
  },
};

export const FooterHoverSync: Story = {
  name: "Footer Hover Sync",
  args: {
    image: (
      <Image
        src="https://picsum.photos/seed/sync/400/200"
        alt="Sync hover demo"
        width="400"
        height="200"
      />
    ),
    header: (
      <>
        <Tag variant="default">NEWS</Tag>
        <span className="ntgds-card__date">3 Dec 2025</span>
      </>
    ),
    title: "Hover syncs title and footer label",
    description:
      "Hovering the card container updates the tertiary footer button label color to the link hover token, matching the RN hover spec.",
    footer: (
      <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>
        Learn more
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Non-clickable card demonstrating container hover updating the footer tertiary button label color. This aligns footer behavior with title hover styling.",
      },
    },
  },
};

export const DisabledCard: Story = {
  args: {
    image: (
      <Image
        src="https://picsum.photos/seed/disabled/400/200"
        alt="Disabled card"
        width="400"
        height="200"
      />
    ),
    title: "Disabled Card Example",
    description: "This card is disabled and non-interactive.",
    footer: (
      <Button variant="tertiary" iconRight="arrow-right">
        Read more
      </Button>
    ),
    disabled: true,
  },
};

export const GridDemo = {
  name: "Responsive Grid Layout",
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "24px",
        maxWidth: "1200px",
      }}
    >
      <Card
        image={
          <Image
            src="https://picsum.photos/seed/grid1/400/200"
            alt="Card 1"
            width="400"
            height="200"
          />
        }
        header={
          <>
            <Tag variant="darwin-ac">DARWIN</Tag>
            <span className="ntgds-card__date">2 Dec 2025</span>
          </>
        }
        title="Grid Card One"
        description="Demonstrating responsive grid layout with 4-6-12 column behavior."
        footer={
          <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>
            Read more
          </Button>
        }
      />
      <Card
        image={
          <Image
            src="https://picsum.photos/seed/grid2/400/200"
            alt="Card 2"
            width="400"
            height="200"
          />
        }
        header={
          <>
            <Tag variant="top-end-ac">TOP END</Tag>
            <span className="ntgds-card__date">1 Dec 2025</span>
          </>
        }
        title="Grid Card Two"
        description="Cards automatically adjust width at breakpoints: 33.33% (lg), 50% (md), 100% (mobile)."
        footer={
          <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>
            Learn more
          </Button>
        }
      />
      <Card
        image={
          <Image
            src="https://picsum.photos/seed/grid3/400/200"
            alt="Card 3"
            width="400"
            height="200"
          />
        }
        header={
          <>
            <Tag variant="barkly-ac">BARKLY</Tag>
            <span className="ntgds-card__date">30 Nov 2025</span>
          </>
        }
        title="Grid Card Three"
        description="Image height also responds: 200px on desktop, 150px on mobile."
        footer={
          <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>
            View details
          </Button>
        }
      />
      <Card
        image={
          <Image
            src="https://picsum.photos/seed/grid4/400/200"
            alt="Card 4"
            width="400"
            height="200"
          />
        }
        header={
          <>
            <Tag variant="central-australia-ac">CENTRAL</Tag>
            <span className="ntgds-card__date">29 Nov 2025</span>
          </>
        }
        title="Grid Card Four"
        description="Resize browser window to see responsive grid behavior in action."
        footer={
          <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>
            Discover
          </Button>
        }
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Grid layout demonstration showing 4 cards with responsive behavior. Cards display as 4 columns on large screens (≥992px), 6 columns on medium screens (≥768px), and 12 columns on mobile (<768px). Image heights adjust from 200px (desktop) to 150px (mobile).",
      },
    },
  },
};
