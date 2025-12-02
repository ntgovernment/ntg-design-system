import React from "react";
import { Link } from "../link/Link";
import "./card.css";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Image content (pass Image component as ReactNode for maximum flexibility) */
  image?: React.ReactNode;
  /** Header content (typically Tag + date span with .ntgds-card__date class) */
  header?: React.ReactNode;
  /** Icon to display inline with title (optional, typically Icon component) */
  icon?: React.ReactNode;
  /** Card variant: default (inline icon), minicard (vertical icon), or static (large left icon) */
  variant?: "default" | "minicard" | "static";
  /** Card title (required for semantic consistency, screen readers, and SEO) */
  title: string;
  /** Card description text */
  description?: string;
  /** Footer content (typically Button with tertiary variant and arrow icon) */
  footer?: React.ReactNode;
  /** Link destination (makes entire card clickable, footer remains visible) */
  href?: string;
  /** Whether the card is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card component for displaying content with optional image, header, footer, and clickable behavior.
 * 
 * Integrates with Tag, Button, Image, and Link components from the design system.
 * Supports responsive grid layouts with 4-6-12 column constraints at lg/md/mobile breakpoints.
 * 
 * When href is provided, the entire card becomes clickable via Link wrapper (footer is excluded).
 * When footer is provided, href should be omitted to avoid nested interactivity issues.
 */
export const Card: React.FC<CardProps> = ({
  image,
  header,
  icon,
  variant = "default",
  title,
  description,
  footer,
  href,
  disabled = false,
  className = "",
  ...props
}) => {
  const baseClass = "ntgds-card";

  const classes = [
    baseClass,
    variant === "minicard" && `${baseClass}--minicard`,
    variant === "static" && `${baseClass}--static`,
    disabled && `${baseClass}--disabled`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const cardContent = (
    <article 
      className={classes} 
      {...(!href && !disabled && { tabIndex: 0 })}
      {...props}
    >
      {image && <div className={`${baseClass}__image`}>{image}</div>}
      <div className={`${baseClass}__content`}>
        {header && <div className={`${baseClass}__header`}>{header}</div>}
        <div className={`${baseClass}__body`}>
          {icon && variant === "static" ? (
            <>
              <div className={`${baseClass}__icon ${baseClass}__icon--large`}>{icon}</div>
              <div className={`${baseClass}__title-and-body`}>
                <div className={`${baseClass}__title-container`}>
                  <h3 className={`${baseClass}__title`}>{title}</h3>
                </div>
                {description && (
                  <p className={`${baseClass}__description`}>{description}</p>
                )}
              </div>
            </>
          ) : icon ? (
            <div className={`${baseClass}__title-container ${variant === "minicard" ? `${baseClass}__title-container--vertical` : ""}`}>
              <div className={`${baseClass}__icon`}>{icon}</div>
              <h3 className={`${baseClass}__title`}>{title}</h3>
            </div>
          ) : (
            <h3 className={`${baseClass}__title`}>{title}</h3>
          )}
          {!icon || variant !== "static" ? description && (
            <p className={`${baseClass}__description`}>{description}</p>
          ) : null}
        </div>
        {footer && (
          <div className={`${baseClass}__footer`}>{footer}</div>
        )}
      </div>
    </article>
  );

  // When href is provided, wrap card in Link (exclude footer per Option A)
  if (href && !disabled) {
    return (
      <Link href={href} className="ntgds-card-link">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};
