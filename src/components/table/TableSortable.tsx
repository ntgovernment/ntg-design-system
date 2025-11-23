import React, { useState } from "react";
import { Icon } from "../icon/Icon";

export interface TableSortableProps {
  columns: Array<{
    key: string;
    label: string;
    sortable?: boolean;
  }>;
  data: Array<Record<string, React.ReactNode>>;
  title?: string | null;
  subtitle?: string | null;
}

export type SortState = {
  key: string;
  direction: "asc" | "desc";
};

export const TableSortable: React.FC<TableSortableProps> = ({
  columns,
  data,
  title = null,
  subtitle = null,
}) => {
  const [sort, setSort] = useState<SortState | null>(null);

  const sortedData = React.useMemo(() => {
    if (!sort) return data;
    const { key, direction } = sort;
    return [...data].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      if (typeof aVal === "string" && typeof bVal === "string") {
        return direction === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return direction === "asc" ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });
  }, [data, sort]);

  const handleSort = (key: string) => {
    setSort((prev) => {
      if (!prev || prev.key !== key) return { key, direction: "asc" };
      return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
    });
  };

  return (
    <div style={{ maxWidth: 480 }}>
      {title != null && title !== "" && (
        <div className="ntgds-table-title">{title}</div>
      )}
      {subtitle != null && subtitle !== "" && (
        <div className="ntgds-table-subtitle">{subtitle}</div>
      )}
      <table
        className="ntgds-table"
        aria-label={title != null && title !== "" ? title : "Sortable table"}
      >
        <thead>
          <tr>
            {columns.map((col) => {
              const isSorted = sort?.key === col.key;
              const ariaSort = isSorted
                ? sort?.direction === "asc"
                  ? "ascending"
                  : "descending"
                : undefined;
              return (
                <th key={col.key} scope="col">
                  {col.sortable ? (
                    <button
                      type="button"
                      aria-sort={ariaSort}
                      aria-label={`Sort by ${col.label}`}
                      className="ntgds-table-sort-btn"
                      onClick={() => handleSort(col.key)}
                      style={{
                        background: "var(--clr-surface-primary, #fff)",
                        border: "none",
                        padding: 0,
                        margin: 0,
                        font: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            color: "var(--clr-link-default, #1f1f5f)",
                            fontSize: "16px",
                            lineHeight: "16px",
                            fontFamily:
                              "var(--type-font-default, Lato, Arial, sans-serif)",
                          }}
                        >
                          {col.label}
                        </span>
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 0,
                          }}
                        >
                          <Icon
                            name="chevron-up"
                            size="sm"
                            style={{
                              width: 10,
                              height: 6,
                              minWidth: 10,
                              minHeight: 6,
                              color:
                                isSorted && sort?.direction === "asc"
                                  ? "#3B3B3A"
                                  : "#949391",
                            }}
                            ariaLabel={
                              isSorted && sort?.direction === "asc"
                                ? "Sorted ascending"
                                : undefined
                            }
                          />
                          <Icon
                            name="chevron-down"
                            size="sm"
                            style={{
                              width: 10,
                              height: 6,
                              minWidth: 10,
                              minHeight: 6,
                              color:
                                isSorted && sort?.direction === "desc"
                                  ? "#3B3B3A"
                                  : "#949391",
                            }}
                            ariaLabel={
                              isSorted && sort?.direction === "desc"
                                ? "Sorted descending"
                                : undefined
                            }
                          />
                        </span>
                      </span>
                    </button>
                  ) : (
                    <span
                      style={{
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: "var(--clr-link-default, #1f1f5f)",
                        fontSize: "16px",
                        lineHeight: "16px",
                        fontFamily:
                          "var(--type-font-default, Lato, Arial, sans-serif)",
                      }}
                    >
                      {col.label}
                    </span>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
