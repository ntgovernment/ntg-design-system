import type { Meta, StoryObj } from "@storybook/react";
import { Icon, IconProps } from "./Icon";

const meta: Meta<IconProps> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `Icon component wrapping Font Awesome. Ensure Font Awesome CSS is included separately (CDN or package).\n\nUsage: <Icon name=\"xmark\" size=\"sm\" color=\"primary\" />`,
      },
    },
  },
  argTypes: {
    name: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    color: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "tertiary", "inverse"],
    },
    faStyle: {
      control: { type: "select" },
      options: ["solid", "regular", "brands"],
    },
    ariaLabel: { control: "text" },
  },
  args: {
    name: "xmark",
    size: "md",
    color: "default",
    faStyle: "solid",
  },
};

export default meta;

type Story = StoryObj<IconProps>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Icon {...args} size="sm" />
      <Icon {...args} size="md" />
      <Icon {...args} size="lg" />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Icon {...args} color="default" />
      <Icon {...args} color="primary" />
      <Icon {...args} color="secondary" />
      <Icon {...args} color="tertiary" />
      <Icon
        {...args}
        color="inverse"
        style={{ background: "#333", padding: "4px" }}
        ariaLabel="inverse icon"
      />
    </div>
  ),
};

export const Styles: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Icon {...args} faStyle="solid" name="xmark" />
      <Icon {...args} faStyle="regular" name="circle-check" />
      <Icon {...args} faStyle="brands" name="github" />
    </div>
  ),
};

export const CustomGlyph: Story = {
  args: { name: undefined },
  render: () => (
    <Icon ariaLabel="custom square glyph" color="primary">
      {/* Fallback simple square */}
    </Icon>
  ),
};
