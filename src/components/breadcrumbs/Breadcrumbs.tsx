import React, { useState, useRef, useEffect } from "react";
import { Link } from "../link/Link";
import { Icon } from "../icon/Icon";
import "./breadcrumbs.css";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "default" | "collapsed";
  className?: string;
  ariaLabel?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  variant = "default",
  className = "",
  ariaLabel = "Breadcrumb",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const ellipsisRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        ellipsisRef.current &&
        !ellipsisRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        ellipsisRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const handleEllipsisClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownItemClick = () => {
    setIsOpen(false);
  };

  // Collapsed variant: show [first, ellipsis, last]
  const displayItems: BreadcrumbItem[] =
    variant === "collapsed" && items.length > 2
      ? [items[0], { label: "...", href: undefined }, items[items.length - 1]]
      : items;

  // Get middle items for dropdown (exclude first and last)
  const middleItems =
    variant === "collapsed" && items.length > 2
      ? items.slice(1, items.length - 1)
      : [];

  const baseClass = "ntgds-breadcrumbs";

  return (
    <nav className={`${baseClass} ${className}`.trim()} aria-label={ariaLabel}>
      <ol className={`${baseClass}__list`}>
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;

          return (
            <li key={index} className={`${baseClass}__item`}>
              {item.label === "..." ? (
                <span className={`${baseClass}__ellipsis-wrapper`}>
                  <button
                    ref={ellipsisRef}
                    className={`${baseClass}__ellipsis`}
                    onClick={handleEllipsisClick}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-label="Show hidden pages"
                    type="button"
                  >
                    <Icon
                      name="ellipsis"
                      style={{
                        fontSize: "24px",
                        color: "var(--clr-text-default, #3b3b3a)",
                      }}
                    />
                  </button>
                  {isOpen && middleItems.length > 0 && (
                    <ul
                      ref={dropdownRef}
                      className={`${baseClass}__dropdown`}
                      role="menu"
                    >
                      {middleItems.map((middleItem, idx) => (
                        <li
                          key={idx}
                          className={`${baseClass}__dropdown-item`}
                          role="none"
                        >
                          <span
                            className={`${baseClass}__dropdown-text`}
                            role="menuitem"
                            tabIndex={0}
                          >
                            {middleItem.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </span>
              ) : item.href ? (
                <Link href={item.href} className={`${baseClass}__link`}>
                  {item.label}
                </Link>
              ) : (
                <span className={`${baseClass}__current`} aria-current="page">
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span className={`${baseClass}__separator`} aria-hidden="true">
                  <Icon
                    name="chevron-right"
                    style={{
                      fontSize: "14px",
                      color: "var(--ntg-colour-secondary-ochre-default, #c33826)",
                    }}
                  />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
