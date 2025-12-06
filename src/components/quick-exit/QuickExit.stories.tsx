import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { QuickExit } from "./QuickExit";

const meta = {
  title: "Components/QuickExit",
  component: QuickExit,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    label: "Quick exit",
    message: "Click anywhere in this banner to exit. Call 000 if you’re in immediate danger.",
  },
} satisfies Meta<typeof QuickExit>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoPage: React.FC<{ args: any }> = ({ args }) => (
  <div style={{ minHeight: "160vh", background: "#f9f9f9", padding: "160px 0 120px" }}>
    <QuickExit {...args} />
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "24px" }}>
      <p>
        This page simulates a long-scrolling experience. The QuickExit banner stays visible at the top and can be activated to
        navigate users away quickly. The “What is this?” link remains accessible for additional guidance.
      </p>
      <div style={{ height: "140vh" }} />
    </div>
  </div>
);

export const Default: Story = {
  render: (args) => <DemoPage args={args} />,
};

export const WithWhatIsThisLink: Story = {
  args: {
    whatIsThisHref: "https://example.com/safety",
  },
  render: (args) => <DemoPage args={args} />,
};

export const MobileViewport: Story = {
  args: {},
  render: (args) => <DemoPage args={args} />,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
