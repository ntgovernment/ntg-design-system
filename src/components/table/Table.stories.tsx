import type { Meta, StoryObj } from "@storybook/react";
import { TableSortable, TableSortableProps } from "./TableSortable";

const columns: TableSortableProps["columns"] = [
  { key: "name", label: "Name", sortable: true },
  { key: "age", label: "Age", sortable: true },
  { key: "city", label: "City" },
];

const data: TableSortableProps["data"] = [
  { name: "Alice", age: 32, city: "Darwin" },
  { name: "Bob", age: 28, city: "Katherine" },
  { name: "Charlie", age: 40, city: "Alice Springs" },
  { name: "Dana", age: 35, city: "Nhulunbuy" },
];

const meta = {
  title: "Components/Table",
  component: TableSortable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    columns: { control: "object" },
    data: { control: "object" },
    title: {
      control: "text",
      description:
        "Table title displayed above the table. Editable via controls.",
    },
    subtitle: {
      control: "text",
      description:
        "Table subtitle displayed below the title. Editable via controls.",
    },
  },
} satisfies Meta<typeof TableSortable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SortableTable: Story = {
  args: {
    columns,
    data,
    title: "NTG Employees",
    subtitle:
      "Sortable table demo. Edit these fields to see changes instantly.",
  },
};
