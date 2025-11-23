import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "radio",
      options: ["single", "multiple"],
      description: "Controls whether one or multiple items can be open at once",
    },
    showToggleAll: {
      control: "boolean",
      description: 'Shows "Open all" / "Close all" button when true',
    },
    defaultOpenIndices: {
      control: "object",
      description: "Array of indices that should be open by default",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="What is the NTG Design System?">
        <p>
          The NTG Design System is a comprehensive collection of reusable
          components, design tokens, and guidelines that help teams build
          consistent and accessible user interfaces.
        </p>
      </AccordionItem>
      <AccordionItem title="How do I get started?">
        <p>
          To get started, install the design system package using npm or yarn,
          then import the components you need into your React application.
        </p>
      </AccordionItem>
      <AccordionItem title="Is it accessible?">
        <p>
          Yes! All components are built with accessibility in mind, following
          WCAG 2.1 AA guidelines. This includes proper ARIA attributes, keyboard
          navigation, and focus management.
        </p>
      </AccordionItem>
    </Accordion>
  ),
};

export const SingleMode: Story = {
  args: {
    mode: "single",
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem title="First Item">
        <p>
          When mode is set to "single", only one accordion item can be open at a
          time. Opening a new item will automatically close the previously open
          item.
        </p>
      </AccordionItem>
      <AccordionItem title="Second Item">
        <p>
          This is the content of the second item. Try opening this to see the
          first item close.
        </p>
      </AccordionItem>
      <AccordionItem title="Third Item">
        <p>And this is the third item's content.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithToggleAll: Story = {
  args: {
    showToggleAll: true,
    mode: "multiple",
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem title="Design Principles">
        <p>
          Our design principles emphasize clarity, consistency, and
          accessibility. Every decision we make is guided by these core values.
        </p>
      </AccordionItem>
      <AccordionItem title="Component Library">
        <p>
          The component library includes buttons, forms, navigation elements,
          and more. All components are fully customizable through design tokens.
        </p>
      </AccordionItem>
      <AccordionItem title="Design Tokens">
        <p>
          Design tokens are the design decisions that define the visual
          characteristics of your design system, such as colors, spacing, and
          typography.
        </p>
      </AccordionItem>
      <AccordionItem title="Documentation">
        <p>
          Comprehensive documentation is available for each component, including
          usage examples, API references, and accessibility guidelines.
        </p>
      </AccordionItem>
    </Accordion>
  ),
};

export const DefaultOpen: Story = {
  args: {
    defaultOpenIndices: [0, 2],
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem title="Installation">
        <p>
          Install the design system using npm:
          <br />
          <code>npm install @ntg/design-system</code>
        </p>
      </AccordionItem>
      <AccordionItem title="Configuration">
        <p>Import the CSS and components in your application entry point.</p>
      </AccordionItem>
      <AccordionItem title="Usage">
        <p>
          Start using components by importing them from the package:
          <br />
          <code>import {"{ Button }"} from '@ntg/design-system'</code>
        </p>
      </AccordionItem>
    </Accordion>
  ),
};

export const RichContent: Story = {
  render: () => (
    <Accordion showToggleAll>
      <AccordionItem title="Product Features">
        <h4 style={{ marginTop: 0 }}>Key Features:</h4>
        <ul>
          <li>Responsive design out of the box</li>
          <li>Themeable with design tokens</li>
          <li>TypeScript support included</li>
          <li>Comprehensive documentation</li>
        </ul>
      </AccordionItem>
      <AccordionItem title="Technical Specifications">
        <div>
          <p>
            <strong>Framework:</strong> React 19+
          </p>
          <p>
            <strong>Styling:</strong> CSS Custom Properties
          </p>
          <p>
            <strong>Build:</strong> Vite + PostCSS
          </p>
        </div>
      </AccordionItem>
      <AccordionItem title="Browser Support">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #e6e5e3" }}>
              <th style={{ textAlign: "left", padding: "8px" }}>Browser</th>
              <th style={{ textAlign: "left", padding: "8px" }}>
                Minimum Version
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "8px" }}>Chrome</td>
              <td style={{ padding: "8px" }}>90+</td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>Firefox</td>
              <td style={{ padding: "8px" }}>88+</td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>Safari</td>
              <td style={{ padding: "8px" }}>14+</td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>Edge</td>
              <td style={{ padding: "8px" }}>90+</td>
            </tr>
          </tbody>
        </table>
      </AccordionItem>
    </Accordion>
  ),
};
