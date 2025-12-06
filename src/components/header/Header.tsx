import React, { useState, useRef, useEffect } from "react";
import { Link } from "../link/Link";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";
import { SearchBar } from "../search-bar/SearchBar";
import { NTGovAULogo } from "./NTGovAULogo";
import { HeaderDrawer } from "./HeaderDrawer";
import "./header.css";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Navigation items to display */
  navigationItems?: Array<{
    href: string;
    label: string;
    external?: boolean;
    ariaLabel?: string;
  }>;
  /** Search bar configuration */
  searchProps?: {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
  };
  /** Logo link href */
  logoHref?: string;
  /** Whether to show the search bar */
  showSearch?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  navigationItems = [],
  searchProps = {},
  logoHref = "/",
  showSearch = true,
  className = "",
  ...props
}) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const baseClass = "ntgds-header";

  // Handle search toggle
  const toggleSearch = () => {
    const newState = !isSearchExpanded;
    setIsSearchExpanded(newState);
    if (newState && isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  };

  // Handle drawer toggle
  const toggleDrawer = () => {
    const newState = !isDrawerOpen;
    setIsDrawerOpen(newState);
    if (newState && isSearchExpanded) {
      setIsSearchExpanded(false);
    }
  };

  // Close drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    // Return focus to hamburger button
    setTimeout(() => {
      const hamburger = document.querySelector(
        `.${baseClass}__hamburger`
      ) as HTMLElement;
      hamburger?.focus();
    }, 100);
  };

  // Auto-focus search input when expanded
  useEffect(() => {
    if (isSearchExpanded) {
      setTimeout(() => {
        const searchInput = document.querySelector(
          `.${baseClass}__search-expanded input`
        ) as HTMLInputElement;
        searchInput?.focus();
      }, 100);
    }
  }, [isSearchExpanded, baseClass]);

  // Handle escape key to collapse search
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchExpanded) {
        setIsSearchExpanded(false);
        setTimeout(() => {
          const searchButton = document.querySelector(
            `.${baseClass}__search-toggle`
          ) as HTMLElement;
          searchButton?.focus();
        }, 100);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isSearchExpanded, baseClass]);

  const classes = [baseClass, className].filter(Boolean).join(" ");

  return (
    <>
      <header className={classes} {...props}>
        <div className={`${baseClass}__container`}>
          {/* Logo */}
          <Link href={logoHref} className={`${baseClass}__logo ntgds-link--inverse`}>
            <NTGovAULogo />
          </Link>

          {/* Desktop Navigation (≥768px) */}
          <nav className={`${baseClass}__nav ${baseClass}__nav--desktop`}>
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${baseClass}__nav-link ntgds-link--inverse`}
                aria-label={item.ariaLabel || item.label}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
                {item.external && (
                  <Icon
                    name="arrow-up-right-from-square"
                    color="inverse"
                    size="sm"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Search (≥992px - always visible) */}
          {showSearch && (
            <div className={`${baseClass}__search ${baseClass}__search--desktop`}>
              <SearchBar
                placeholder={searchProps.placeholder || "Search"}
                value={searchProps.value}
                onChange={searchProps.onChange}
                onSubmit={searchProps.onSubmit}
              />
            </div>
          )}

          {/* Tablet/Mobile Search Button (<992px) */}
          {showSearch && (
            <Button
              variant="tertiary"
              size="large"
              onClick={toggleSearch}
              aria-label="Toggle search"
              aria-expanded={isSearchExpanded}
              className={`${baseClass}__search-toggle ${
                isSearchExpanded ? `${baseClass}__search-toggle--active` : ""
              }`}
            >
              <Icon name="magnifying-glass" color="inverse" size="md" />
            </Button>
          )}

          {/* Mobile Hamburger Button (<768px) */}
          <Button
            variant="tertiary"
            size="large"
            onClick={toggleDrawer}
            aria-label="Toggle navigation menu"
            aria-expanded={isDrawerOpen}
            className={`${baseClass}__hamburger ${
              isDrawerOpen ? `${baseClass}__hamburger--active` : ""
            }`}
          >
            <Icon name="bars" color="inverse" size="md" />
          </Button>
        </div>

        {/* Expanded Search Section (Tablet/Mobile) */}
        {showSearch && isSearchExpanded && (
          <div className={`${baseClass}__search-expanded`}>
            <div className={`${baseClass}__search-expanded-container`}>
              <SearchBar
                placeholder={searchProps.placeholder || "Search"}
                value={searchProps.value}
                onChange={searchProps.onChange}
                onSubmit={searchProps.onSubmit}
                className={`${baseClass}__search-expanded-input`}
              />
              <Button
                variant="tertiary"
                size="large"
                onClick={() => setIsSearchExpanded(false)}
                aria-label="Close search"
                className={`${baseClass}__search-close`}
              >
                <Icon name="x" color="inverse" size="md" />
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      <HeaderDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        navigationItems={navigationItems}
      />
    </>
  );
};
