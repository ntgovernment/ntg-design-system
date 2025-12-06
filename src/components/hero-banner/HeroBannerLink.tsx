import React from "react";

export interface HeroBannerLinkProps {
  /** Link text */
  children: React.ReactNode;
  /** Link destination */
  href: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * HeroBannerLink component - Custom link styled for hero banner popular section
 */
export const HeroBannerLink: React.FC<HeroBannerLinkProps> = ({
  children,
  href,
  className = "",
}) => {
  return (
    <a href={href} className={`ntgds-hero-banner-link ${className}`.trim()}>
      {children}
    </a>
  );
};
