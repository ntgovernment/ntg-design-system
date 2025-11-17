import React from "react";
import "./button.css";

/**
 * Button component for user interactions
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant of the button */
  variant?: "primary" | "secondary" | "tertiary";
  /** Size of the button */
  size?: "large" | "small";
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Show loading state */
  loading?: boolean;
  /** Button content */
  children: React.ReactNode;
  /** Icon to display on the left */
  iconLeft?: React.ReactNode;
  /** Icon to display on the right */
  iconRight?: React.ReactNode;
  /** Custom loading icon (optional) */
  loadingIcon?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "primary",
  size = "large",
  loading = false,
  disabled = false,
  children,
  className,
  iconLeft,
  iconRight,
  loadingIcon,
  ...props
}: ButtonProps) => {
  const baseClass = "ntgds-btn";

  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    size === "small" && `${baseClass}--small`,
    loading && `${baseClass}--loading`,
    (iconLeft || iconRight) && `${baseClass}--with-icon`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Default loading spinner component
  const defaultLoadingIcon = <span className={`${baseClass}__loading-spinner`} aria-hidden="true" />;

  const renderContent = () => {
    if (loading) {
      return loadingIcon || defaultLoadingIcon;
    }

    return (
      <>
        {iconLeft && <span className={`${baseClass}__icon ${baseClass}__icon--left`}>{iconLeft}</span>}
        {children}
        {iconRight && <span className={`${baseClass}__icon ${baseClass}__icon--right`}>{iconRight}</span>}
      </>
    );
  };

  return (
    <button className={classes} disabled={disabled} {...props}>
      {renderContent()}
    </button>
  );
};
