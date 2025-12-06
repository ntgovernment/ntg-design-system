import React, { useEffect, useRef } from "react";
import { Link } from "../link/Link";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

export interface HeaderDrawerProps {
  /** Whether the drawer is open */
  isOpen: boolean;
  /** Callback when drawer should close */
  onClose: () => void;
  /** Navigation items to display */
  navigationItems: Array<{
    href: string;
    label: string;
    external?: boolean;
    ariaLabel?: string;
  }>;
}

export const HeaderDrawer: React.FC<HeaderDrawerProps> = ({
  isOpen,
  onClose,
  navigationItems,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Focus trap and initial focus
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;

    // Focus first focusable element when drawer opens
    const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    focusableElements[0]?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !drawerRef.current) return;

      const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="ntgds-header-drawer__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className="ntgds-header-drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Close button */}
        <div className="ntgds-header-drawer__close">
          <Button
            variant="tertiary"
            size="large"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="ntgds-header-drawer__close-button"
          >
            <Icon name="xmark" color="inverse" size="lg" />
          </Button>
        </div>

        {/* Navigation links */}
        <nav className="ntgds-header-drawer__nav">
          <ul className="ntgds-header-drawer__list">
            {navigationItems.map((item, index) => (
              <li key={index} className="ntgds-header-drawer__item">
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="ntgds-header-drawer__link ntgds-link--inverse"
                  aria-label={item.ariaLabel || item.label}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span>{item.label}</span>
                  {item.external && (
                    <Icon
                      name="arrow-up-right-from-square"
                      color="inverse"
                      size="sm"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
