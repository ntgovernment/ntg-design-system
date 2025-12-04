import type { Meta, StoryFn } from "@storybook/react";
import { BackToTopButton } from "./BackToTopButton";

const meta = {
  title: "Components/BackToTopButton",
  component: BackToTopButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    ariaLabel: {
      control: "text",
      description: "Aria label for accessibility",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button",
    },
  },
} satisfies Meta<typeof BackToTopButton>;

export default meta;

/**
 * Default BackToTopButton shown in fixed bottom-right position.
 */
export const Default: StoryFn<typeof BackToTopButton> = () => {
  return (
    <div style={{ minHeight: "150vh", padding: "20px" }}>
      <h2>Scroll down to see the button</h2>
      <p>
        The BackToTopButton appears in the lower right corner and scrolls the page to the top when clicked.
      </p>
      <BackToTopButton ariaLabel="Back to top" />
    </div>
  );
};

/**
 * Button in disabled state.
 */
export const Disabled: StoryFn<typeof BackToTopButton> = () => {
  return <BackToTopButton disabled ariaLabel="Back to top" />;
};

/**
 * Button with custom aria label.
 */
export const CustomLabel: StoryFn<typeof BackToTopButton> = () => {
  return <BackToTopButton ariaLabel="Return to page top" />;
};

/**
 * Interactive demo with long content showing the button in action.
 */
export const Interactive: StoryFn<typeof BackToTopButton> = () => {
  return (
    <div style={{ minHeight: "200vh", padding: "20px" }}>
      <h1>Long Page Content</h1>
      <p>Scroll down to see the button in the lower right corner.</p>
      {Array.from({ length: 30 }).map((_, i) => (
        <p key={i}>
          Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      ))}
      <p>Click the button in the lower right to scroll back to top.</p>
      <BackToTopButton ariaLabel="Back to top" />
    </div>
  );
};
