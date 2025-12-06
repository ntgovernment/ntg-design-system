import type { Meta, StoryObj } from "@storybook/react";
import { Document } from "./Document";

const meta = {
  title: "Components/Document",
  component: Document,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    fileFormat: {
      control: "select",
      options: ["DOCX", "PDF", "XLSX", "PPTX"],
    },
    external: {
      control: "boolean",
    },
    description: {
      control: "text",
    },
  },
} satisfies Meta<typeof Document>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "This is the document title",
    href: "https://nt.gov.au/documents/sample.docx",
    fileFormat: "DOCX",
    fileSize: "182 KB",
    description: "Optional description of the document.",
  },
};

export const PDF: Story = {
  args: {
    ...Default.args,
    fileFormat: "PDF",
    href: "https://nt.gov.au/documents/sample.pdf",
  },
};

export const XLSX: Story = {
  args: {
    ...Default.args,
    fileFormat: "XLSX",
    href: "https://nt.gov.au/documents/sample.xlsx",
  },
};

export const PPTX: Story = {
  args: {
    ...Default.args,
    fileFormat: "PPTX",
    href: "https://nt.gov.au/documents/sample.pptx",
  },
};

export const WithoutDescription: Story = {
  args: {
    title: "Document without description",
    href: "https://nt.gov.au/documents/one-pager.pdf",
    fileFormat: "PDF",
    fileSize: "320 KB",
    description: "",
  },
};

export const External: Story = {
  args: {
    title: "External document link",
    href: "https://example.com/documents/overview.pdf",
    fileFormat: "PDF",
    fileSize: "540 KB",
    description: "Opens in a new tab.",
    external: true,
  },
};
