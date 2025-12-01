import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import "./scrollbar.css";

const Wrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: 20, maxWidth: 480 }}>{children}</div>
);

const meta = {
  title: "Components/Scrollbar",
  component: Wrapper,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Textarea: Story = {
  render: () => (
    <Wrapper>
      <label
        htmlFor="scrollableTextarea"
        style={{ display: "block", marginBottom: 8 }}
      >
        Scrollable Textarea
      </label>
      <textarea
        id="scrollableTextarea"
        className="ntgds-scrollable"
        style={{
          width: "100%",
          height: 140,
          padding: 12,
          boxSizing: "border-box",
        }}
        defaultValue={Array.from(
          { length: 30 },
          (_, i) => `Line ${i + 1}`
        ).join("\n")}
      />
    </Wrapper>
  ),
};

export const LongList: Story = {
  render: () => (
    <Wrapper>
      <div style={{ marginBottom: 8 }}>Scrollable List (max-height: 200px)</div>
      <div
        className="ntgds-scrollable"
        style={{
          maxHeight: 200,
          border: "1px solid var(--clr-stroke-subtle, #d4d4d2)",
          padding: 8,
        }}
      >
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {Array.from({ length: 50 }).map((_, i) => (
            <li
              key={i}
              style={{
                padding: "8px 6px",
                borderBottom: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              Item {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  ),
};

export const DropdownPanel: Story = {
  render: () => {
    const DropdownPanelDemo: React.FC = () => {
      const [open, setOpen] = useState(true);
      return (
        <div>
          <button
            onClick={() => setOpen((o) => !o)}
            style={{ marginBottom: 8 }}
          >
            Toggle Panel
          </button>
          {open && (
            <div style={{ position: "relative", width: 280 }}>
              <div
                className="ntgds-scrollable"
                style={{
                  maxHeight: 160,
                  border: "1px solid var(--clr-stroke-subtle, #d4d4d2)",
                  background: "var(--clr-surface-default, #fff)",
                  padding: 6,
                  boxSizing: "border-box",
                }}
              >
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {Array.from({ length: 30 }).map((_, i) => (
                    <li key={i} style={{ padding: "8px 6px" }}>
                      Option {i + 1}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      );
    };

    return (
      <Wrapper>
        <DropdownPanelDemo />
      </Wrapper>
    );
  },
};
