import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "../breadcrumbs/Breadcrumbs";
import { Button } from "../button/Button";
import { HeroBannerGraphic } from "./HeroBannerGraphic";
import { HeroBannerLink } from "./HeroBannerLink";
import "./hero-banner.css";

export interface HeroBannerPopularLink {
  label: string;
  href: string;
}

export interface HeroBannerProps {
  /** Visual style variant of the hero banner */
  variant?: "primary" | "secondary";
  /** Breadcrumb navigation items */
  breadcrumbs?: BreadcrumbItem[];
  /** Main page title */
  title: string;
  /** Optional description text below title */
  description?: string;
  /** Call-to-action button label */
  ctaLabel?: string;
  /** Call-to-action button destination */
  ctaHref?: string;
  /** Call-to-action button click handler */
  ctaOnClick?: () => void;
  /** Array of popular page links */
  popularLinks?: HeroBannerPopularLink[];
  /** Show/hide popular section */
  showPopular?: boolean;
  /** Popular section heading */
  popularHeading?: string;
  /** Additional CSS classes */
  className?: string;
  /** ARIA label for the banner section */
  ariaLabel?: string;
  /** Show/hide background graphic */
  showGraphic?: boolean;
  /** Opacity of background graphic */
  graphicOpacity?: number;
}

/**
 * HeroBanner component displays a prominent page header with breadcrumbs,
 * title, description, CTA button, and optional popular links section.
 */
export const HeroBanner: React.FC<HeroBannerProps> = ({
  variant = "primary",
  breadcrumbs,
  title,
  description,
  ctaLabel,
  ctaHref,
  ctaOnClick,
  popularLinks = [],
  showPopular = true,
  popularHeading = "Popular",
  className = "",
  ariaLabel = "Page header",
  showGraphic = true,
  graphicOpacity = 0.2,
}) => {
  const baseClass = "ntgds-hero-banner";

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ctaOnClick) {
      e.preventDefault();
      ctaOnClick();
    } else if (ctaHref) {
      window.location.href = ctaHref;
    }
  };

  return (
    <section
      className={`${baseClass} ${baseClass}--${variant} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <div className={`${baseClass}__container`}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className={`${baseClass}__breadcrumbs`}>
            <Breadcrumbs
              items={breadcrumbs}
              variant={breadcrumbs.length > 3 ? "collapsed" : "default"}
              className={`${baseClass}__breadcrumbs-nav`}
            />
          </div>
        )}

        <div className={`${baseClass}__content`}>
          <div className={`${baseClass}__main`}>
            <h1 className={`${baseClass}__title`}>{title}</h1>

            {description && (
              <p className={`${baseClass}__description`}>{description}</p>
            )}

            {ctaLabel && (
              <Button
                variant="secondary"
                size="large"
                onClick={handleCtaClick}
                className={`${baseClass}__cta`}
              >
                {ctaLabel}
              </Button>
            )}
          </div>

          {showPopular && popularLinks.length > 0 && (
            <aside className={`${baseClass}__popular`}>
              <h2 className={`${baseClass}__popular-heading`}>
                {popularHeading}
              </h2>
              <div className={`${baseClass}__popular-links`}>
                {popularLinks.map((link, index) => (
                  <HeroBannerLink key={index} href={link.href}>
                    {link.label}
                  </HeroBannerLink>
                ))}
              </div>
            </aside>
          )}
        </div>

        {showGraphic && (
          <HeroBannerGraphic
            className={`${baseClass}__watermark`}
            opacity={graphicOpacity}
          />
        )}
      </div>
    </section>
  );
};
