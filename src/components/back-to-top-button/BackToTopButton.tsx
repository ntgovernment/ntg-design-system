import React from "react";
import { Icon } from "../icon/Icon";
import "./back-to-top-button.css";

export interface BackToTopButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Click handler - typically scrolls to top smoothly */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Aria label for accessibility */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * BackToTopButton component for scrolling back to the top of a page.
 * Styled as a secondary button with custom hover color using --clr-bg-dark token.
 * Fixed position at bottom-right of page.
 */
export const BackToTopButton = React.forwardRef<
  HTMLButtonElement,
  BackToTopButtonProps
>(
  (
    {
      onClick,
      ariaLabel = "Back to top",
      className = "",
      ...props
    }: BackToTopButtonProps,
    ref
  ) => {
    const baseClass = "ntgds-back-to-top";

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Call provided onClick handler if exists
      if (onClick) {
        onClick(event);
      }
    };

    const classes = [baseClass, className].filter(Boolean).join(" ");

    return (
      <button
        ref={ref}
        className={classes}
        onClick={handleClick}
        aria-label={ariaLabel}
        type="button"
        {...props}
      >
        <span className={`${baseClass}__text`}>Back to top</span>
        <Icon
          name="arrow-up"
          size="sm"
          color="default"
          className={`${baseClass}__icon`}
        />
      </button>
    );
  }
);

BackToTopButton.displayName = "BackToTopButton";
