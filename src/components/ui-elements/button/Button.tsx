import React from "react";
import "./button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "large" | "small";
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loadingIcon?: React.ReactNode;
}

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
