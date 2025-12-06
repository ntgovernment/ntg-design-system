import React from "react";
import { Link } from "../link/Link";

export interface FooterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link destination URL */
  href: string;
  /** Link text content */
  children: React.ReactNode;
  /** Whether link is external (opens in new tab) */
  external?: boolean;
  /** Custom ARIA label for accessibility */
  ariaLabel?: string;
}

/**
 * Footer Link Sub-Component
 * Specialized link component for use within Footer sections
 * Features:
 * - CSS pseudo-element bullet point via ::before { content: "•"; }
 * - Inverse styling (white text on dark background)
 * - Underline on hover state
 * - 8px gap between bullet and text
 * - 2px orange focus ring (inherited from Link --inverse variant)
 */
export const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
  external = false,
  ariaLabel,
  className = "",
  ...props
}) => {
  return (
    <Link
      href={href}
      className={`ntgds-footer-link ntgds-link--inverse ${className}`}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Link>
  );
};
