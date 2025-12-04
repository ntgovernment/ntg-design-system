import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["default", "error", "success"],
      description: "Validation status",
    },
    disabled: {
      control: "boolean",
      description: "Whether the dropdown is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the field is required",
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
];

const largeOptionsList = [
  { value: "opt1", label: "First Option" },
  { value: "opt2", label: "Second Option" },
  { value: "opt3", label: "Third Option" },
  { value: "opt4", label: "Fourth Option" },
  { value: "opt5", label: "Fifth Option" },
  { value: "opt6", label: "Sixth Option" },
  { value: "opt7", label: "Seventh Option" },
  { value: "opt8", label: "Eighth Option" },
  { value: "opt9", label: "Ninth Option" },
  { value: "opt10", label: "Tenth Option" },
  { value: "opt11", label: "Eleventh Option" },
  { value: "opt12", label: "Twelfth Option" },
];

export const Basic: Story = {
  args: {
    options: basicOptions,
    label: "Select an option",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string>("option2");
    return (
      <Dropdown
        {...args}
        value={selectedValue}
        onChange={setSelectedValue}
      />
    );
  },
  args: {
    options: basicOptions,
    label: "Controlled Dropdown",
    helperText: "Selected value updates dynamically",
  },
};

export const Disabled: Story = {
  args: {
    options: basicOptions,
    label: "Disabled Dropdown",
    disabled: true,
    value: "option1",
  },
};

export const LargeList: Story = {
  args: {
    options: largeOptionsList,
    label: "Large List with Scrollbar",
    helperText: "12+ options trigger scrollable behavior",
  },
};

export const CustomLabel: Story = {
  args: {
    options: basicOptions,
    label: "Choose a category",
    helperText: "Select from the available categories below",
    required: true,
  },
};

export const ErrorState: Story = {
  args: {
    options: basicOptions,
    label: "Selection Required",
    status: "error",
    errorText: "Please select a valid option",
    required: true,
  },
};

export const SuccessState: Story = {
  args: {
    options: basicOptions,
    label: "Status Confirmed",
    value: "option3",
    status: "success",
    successText: "Selection confirmed successfully",
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [status, setStatus] = useState<"default" | "error" | "success">(
      "default"
    );
    const [message, setMessage] = useState<string>("");

    const handleChange = (value: string) => {
      setSelectedValue(value);
      setStatus("success");
      setMessage(`Selected: ${value}`);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Dropdown
          {...args}
          value={selectedValue}
          onChange={handleChange}
          status={status}
          successText={message || undefined}
        />
        <div
          style={{
            padding: "12px",
            backgroundColor: "#f5f5f5",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        >
          Current value: <strong>{selectedValue || "None"}</strong>
        </div>
      </div>
    );
  },
  args: {
    options: basicOptions,
    label: "Interactive Dropdown",
  },
};

export const KeyboardNavigation: Story = {
  args: {
    options: basicOptions,
    label: "Keyboard Navigation",
    helperText: "Native select supports arrow keys, enter, space, and tab",
  },
};

export const Required: Story = {
  args: {
    options: basicOptions,
    label: "Required Field",
    required: true,
    helperText: "This field is required (indicated by *)",
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: "opt1", label: "Available Option 1" },
      { value: "opt2", label: "Unavailable Option", disabled: true },
      { value: "opt3", label: "Available Option 2" },
      { value: "opt4", label: "Unavailable Option", disabled: true },
      { value: "opt5", label: "Available Option 3" },
    ],
    label: "Dropdown with Disabled Options",
    helperText: "Some options are disabled and cannot be selected",
  },
};
