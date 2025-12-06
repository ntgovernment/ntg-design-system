import React from "react";
import { Icon } from "../icon/Icon";
import "./quick-exit.css";

export interface QuickExitProps {
  /** Main call-to-action label */
  label?: string;
  /** Supporting message text */
  message?: string;
  /** Optional handler when the banner is activated */
  onClick?: () => void;
  /** Optional handler for the "What is this?" action (used when href is not provided) */
  onWhatIsThis?: () => void;
  /** Optional href for the "What is this?" link; renders as <a> when provided */
  whatIsThisHref?: string;
  /** Accessible label for the banner */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

const defaultLabel = "Quick exit";
const defaultMessage = "Click anywhere in this banner to exit. Call 000 if you’re in immediate danger.";
const defaultWhatIsThis = "What is this?";

/**
 * QuickExit is a full-width safety banner. Use only one instance per page.
 */
export const QuickExit: React.FC<QuickExitProps> = ({
  label = defaultLabel,
  message = defaultMessage,
  onClick,
  onWhatIsThis,
  whatIsThisHref,
  ariaLabel,
  className = "",
}) => {
  const baseClass = "ntgds-quick-exit";
  const classes = [baseClass, className].filter(Boolean).join(" ");
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.();
    }
  };

  const whatIsThis = whatIsThisHref ? (
    <a className={`${baseClass}__link`} href={whatIsThisHref}>
      {defaultWhatIsThis}
    </a>
  ) : (
    <button
      type="button"
      className={`${baseClass}__link`}
      onClick={onWhatIsThis}
      aria-label={defaultWhatIsThis}
    >
      {defaultWhatIsThis}
    </button>
  );

  return (
    <div className={classes} role="region" aria-label={ariaLabel || label}>
      <button
        type="button"
        className={`${baseClass}__action`}
        onClick={onClick}
        onKeyDown={handleKeyDown}
      >
        <div className={`${baseClass}__heading`}>
          <span className={`${baseClass}__icon`} aria-hidden="true">
            <Icon name="right-from-bracket" size="md" color="inverse" />
          </span>
          <span className={`${baseClass}__title`}>{label}</span>
        </div>
        <p className={`${baseClass}__message`}>{message}</p>
      </button>
      {whatIsThis}
    </div>
  );
};

QuickExit.displayName = "QuickExit";
