import type { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { Pagination } from "./Pagination";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: "number",
      description: "Current active page (1-indexed)",
    },
    totalPages: {
      control: "number",
      description: "Total number of pages",
    },
    showPrevNext: {
      control: "boolean",
      description: "Show/hide Previous and Next navigation links",
    },
    maxVisiblePages: {
      control: "number",
      description:
        "Maximum pages to show before using ellipsis (default: 7)",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

/**
 * Basic pagination example with few pages (no ellipsis).
 * Shows all 5 pages without using ellipsis since total <= 7.
 */
export const FewPages: StoryFn<typeof Pagination> = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={5}
      onPageChange={setCurrentPage}
    />
  );
};

/**
 * Standard pagination example with 10 pages.
 * Demonstrates ellipsis logic: [1, ..., current±1, ..., 10]
 */
export const Default: StoryFn<typeof Pagination> = () => {
  const [currentPage, setCurrentPage] = useState(5);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
    />
  );
};

/**
 * Many pages example (21 pages) showing ellipsis pattern.
 * Start at page 10 to demonstrate: [1, ..., 9, 10, 11, ..., 21]
 */
export const ManyPages: StoryFn<typeof Pagination> = () => {
  const [currentPage, setCurrentPage] = useState(10);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={21}
      onPageChange={setCurrentPage}
    />
  );
};

/**
 * First page state - Previous link is hidden.
 * Useful for showing initial pagination state.
 */
export const FirstPage: StoryFn<typeof Pagination> = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
    />
  );
};

/**
 * Last page state - Next link is hidden.
 * Demonstrates end-of-pagination behavior.
 */
export const LastPage: StoryFn<typeof Pagination> = () => {
  const [currentPage, setCurrentPage] = useState(10);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
    />
  );
};

/**
 * Without Previous/Next links.
 * Only page numbers are shown, no navigation buttons.
 */
export const WithoutPrevNext: StoryFn<typeof Pagination> = () => {
  const [currentPage, setCurrentPage] = useState(5);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
      showPrevNext={false}
    />
  );
};

/**
 * Custom max visible pages set to 5.
 * Ellipsis appears earlier with: [1, ..., current±1, ..., last]
 */
export const CustomMaxVisible: StoryFn<typeof Pagination> = () => {
  const [currentPage, setCurrentPage] = useState(5);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
      maxVisiblePages={5}
    />
  );
};

/**
 * Very long pagination (100 pages).
 * Demonstrates sliding window pattern at various positions.
 * Start at page 50 to show: [1, ..., 49, 50, 51, ..., 100]
 */
export const VeryLongPagination: StoryFn<typeof Pagination> = () => {
  const [currentPage, setCurrentPage] = useState(50);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={100}
      onPageChange={setCurrentPage}
    />
  );
};

/**
 * Edge case: exactly 7 pages (threshold).
 * Shows all pages without ellipsis: [1, 2, 3, 4, 5, 6, 7]
 */
export const ExactThreshold: StoryFn<typeof Pagination> = () => {
  const [currentPage, setCurrentPage] = useState(4);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={7}
      onPageChange={setCurrentPage}
    />
  );
};

/**
 * Edge case: 8 pages (just above threshold).
 * Shows ellipsis: [1, ..., current±1, ..., 8]
 */
export const JustAboveThreshold: StoryFn<typeof Pagination> = () => {
  const [currentPage, setCurrentPage] = useState(4);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={8}
      onPageChange={setCurrentPage}
    />
  );
};

/**
 * Interactive demo with detailed state.
 * Shows current page, total pages, and allows jumping to specific pages.
 */
export const Interactive: StoryFn<typeof Pagination> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 25;

  return (
    <div style={{ textAlign: "center" }}>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <p
        style={{
          marginTop: "20px",
          fontSize: "14px",
          color: "#666",
        }}
      >
        Viewing page {currentPage} of {totalPages}
      </p>
    </div>
  );
};
