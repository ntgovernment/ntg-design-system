import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";
import React, { useState } from "react";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the search input",
    },
    value: {
      control: "text",
      description: "Controlled value of the search input",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "Search bar variant: primary (button on right) or secondary (inline icon)",
    },
    disabled: {
      control: "boolean",
      description: "Whether the search bar is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryDefault: Story = {
  args: {
    placeholder: "Search",
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Primary variant with search button on the right. Default state with placeholder text.",
      },
    },
  },
};

export const PrimaryWithValue: Story = {
  args: {
    placeholder: "Search",
    value: "React components",
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Primary variant with pre-filled value. Shows text input on left, red button on right.",
      },
    },
  },
};

export const PrimaryDisabled: Story = {
  args: {
    placeholder: "Search",
    variant: "primary",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Primary variant disabled. Input and button are not interactive with 0.6 opacity.",
      },
    },
  },
};

export const PrimaryInteractive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState<string>("");

    const handleSubmit = (searchValue: string) => {
      setResult(`Searched for: "${searchValue}"`);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <SearchBar
          placeholder="Search"
          value={value}
          onChange={setValue}
          onSubmit={handleSubmit}
          variant="primary"
        />
        {result && <p style={{ color: "#3b3b3a" }}>{result}</p>}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Primary variant with interactive value tracking. Type text and click the button or press Enter to submit.",
      },
    },
  },
};

export const PrimaryFullWidth: Story = {
  args: {
    placeholder: "Search",
    variant: "primary",
  },
  render: (args) => <SearchBar {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Primary variant expands to fill available width. Button remains fixed width while input takes remaining space.",
      },
    },
  },
};

export const SecondaryDefault: Story = {
  args: {
    placeholder: "Search",
    variant: "secondary",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Secondary variant with inline search icon. Fixed 246px width with compact appearance.",
      },
    },
  },
};

export const SecondaryWithValue: Story = {
  args: {
    placeholder: "Search",
    value: "Design tokens",
    variant: "secondary",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Secondary variant with pre-filled value. Shows text input with inline icon button.",
      },
    },
  },
};

export const SecondaryDisabled: Story = {
  args: {
    placeholder: "Search",
    variant: "secondary",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Secondary variant disabled. Input and icon button are not interactive with 0.6 opacity.",
      },
    },
  },
};

export const SecondaryInteractive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState<string>("");

    const handleSubmit = (searchValue: string) => {
      setResult(`Searched for: "${searchValue}"`);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <SearchBar
          placeholder="Search"
          value={value}
          onChange={setValue}
          onSubmit={handleSubmit}
          variant="secondary"
        />
        {result && <p style={{ color: "#3b3b3a" }}>{result}</p>}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Secondary variant with interactive value tracking. Type text and click the icon or press Enter to submit.",
      },
    },
  },
};

export const CustomPlaceholder: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3 style={{ margin: "0 0 12px 0", color: "#3b3b3a" }}>Primary</h3>
        <SearchBar
          placeholder="Search products..."
          variant="primary"
        />
      </div>
      <div>
        <h3 style={{ margin: "0 0 12px 0", color: "#3b3b3a" }}>Secondary</h3>
        <SearchBar
          placeholder="Find components..."
          variant="secondary"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Both variants with custom placeholder text. Shows flexibility across different use cases.",
      },
    },
  },
};

export const FocusedPrimaryState: Story = {
  render: () => {
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const input = ref.current?.querySelector("input") as HTMLInputElement;
      if (input) {
        input.focus();
      }
    }, []);

    return (
      <div ref={ref}>
        <SearchBar
          placeholder="Search"
          variant="primary"
          autoFocus
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Primary variant in focused state. Shows 4px orange focus ring around entire component wrapper.",
      },
    },
  },
};

export const FocusedSecondaryState: Story = {
  render: () => {
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const input = ref.current?.querySelector("input") as HTMLInputElement;
      if (input) {
        input.focus();
      }
    }, []);

    return (
      <div ref={ref}>
        <SearchBar
          placeholder="Search"
          variant="secondary"
          autoFocus
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Secondary variant in focused state. Shows 4px orange focus ring around entire component wrapper.",
      },
    },
  },
};
