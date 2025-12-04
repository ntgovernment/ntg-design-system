import React, { useMemo } from "react";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";
import "./pagination.css";

export interface PaginationProps {
  /** Current active page (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Show/hide Previous and Next navigation buttons */
  showPrevNext?: boolean;
  /** Maximum number of pages to show before using ellipsis (default: 7) */
  maxVisiblePages?: number;
  /** Additional CSS class */
  className?: string;
  /** ARIA label for the pagination nav */
  ariaLabel?: string;
}

/**
 * Pagination component for navigating through pages of content.
 * 
 * Features:
 * - Shows all pages when total <= maxVisiblePages (default 7)
 * - Uses ellipsis (...) to replace skipped pages when total > maxVisiblePages
 * - Sliding window pattern: [1, ..., current±1, ..., last]
 * - Previous/Next buttons only visible when not at boundaries
 * - Current page styled as primary button (not clickable, not focusable)
 * - Previous/Next shown as tertiary buttons with chevron icons
 * - Responsive: reduces visible pages on smaller screens
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showPrevNext = true,
  maxVisiblePages = 7,
  className = "",
  ariaLabel = "Pagination",
}) => {
  // Generate page array with ellipsis logic
  const pages = useMemo(() => {
    const pages: (number | string)[] = [];

    // Show all pages if total <= threshold
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pages.push(1);

    // Add left ellipsis if there's a gap
    if (currentPage - 1 > 2) {
      pages.push("...");
    }

    // Add pages around current (±1)
    const rangeStart = Math.max(2, currentPage - 1);
    const rangeEnd = Math.min(totalPages - 1, currentPage + 1);

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    // Add right ellipsis if there's a gap
    if (currentPage + 1 < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page
    pages.push(totalPages);

    return pages;
  }, [currentPage, totalPages, maxVisiblePages]);

  const handlePageChange = (page: number) => {
    if (page !== currentPage && page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const baseClass = "ntgds-pagination";
  const containerClasses = [baseClass, className].filter(Boolean).join(" ");

  return (
    <nav
      className={containerClasses}
      aria-label={ariaLabel}
      role="navigation"
    >
      {/* Previous Button */}
      {showPrevNext && currentPage > 1 && (
        <Button
          variant="tertiary"
          onClick={() => handlePageChange(currentPage - 1)}
          className={`${baseClass}__nav ${baseClass}__nav--prev`}
          aria-label="Previous page"
        >
          <Icon name="chevron-left" size="sm" />
          Previous
        </Button>
      )}

      {/* Page buttons and ellipsis */}
      <div className={`${baseClass}__pages`}>
        {pages.map((page, index) => {
          const isEllipsis = typeof page === "string";
          const isCurrentPage = page === currentPage;

          if (isEllipsis) {
            return (
              <span
                key={`ellipsis-${index}`}
                className={`${baseClass}__ellipsis`}
                aria-hidden="true"
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;

          // Current page: styled as primary button (not clickable, not focusable)
          if (isCurrentPage) {
            return (
              <span
                key={`page-${pageNum}`}
                aria-current="page"
                aria-label={`Current page, page ${pageNum}`}
                className={`${baseClass}__page ${baseClass}__page--active`}
              >
                {pageNum}
              </span>
            );
          }

          // Other pages: tertiary button
          return (
            <Button
              key={`page-${pageNum}`}
              variant="tertiary"
              onClick={() => handlePageChange(pageNum)}
              aria-label={`Go to page ${pageNum}`}
              className={`${baseClass}__page`}
            >
              {pageNum}
            </Button>
          );
        })}
      </div>

      {/* Next Button */}
      {showPrevNext && currentPage < totalPages && (
        <Button
          variant="tertiary"
          onClick={() => handlePageChange(currentPage + 1)}
          className={`${baseClass}__nav ${baseClass}__nav--next`}
          aria-label="Next page"
        >
          Next
          <Icon name="chevron-right" size="sm" />
        </Button>
      )}
    </nav>
  );
};
