import React from "react";
import "./link.css";

/**
 * Link component for navigation and external links
 */
export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link destination */
  href?: string;
  /** Link content */
  children: React.ReactNode;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label */
  ariaLabel?: string;
  /** Whether the link is disabled */
  disabled?: boolean;
}

/**
 * A simple link component that works inline or standalone.
 * Fully theme-agnostic using design tokens.
 */
export const Link = ({
  href = "#",
  children,
  onClick,
  className,
  ariaLabel,
  disabled = false,
  ...props
}: LinkProps) => {
  const baseClass = "ntgds-link";

  const classes = [baseClass, disabled && `${baseClass}--disabled`, className]
    .filter(Boolean)
    .join(" ");

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <a
      href={href}
      className={classes}
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      {...(disabled && { tabIndex: -1 })}
      {...props}
    >
      {children}
    </a>
  );
};
