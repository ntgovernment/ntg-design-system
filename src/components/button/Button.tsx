import React from "react";
import { Icon } from "../icon/Icon";
import type { IconColor } from "../icon/Icon";
import "./button.css";

/**
 * Button component for user interactions
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant of the button */
  variant?: "primary" | "secondary" | "tertiary";
  /** Size of the button */
  size?: "large" | "small";
  /** Remove left padding (tertiary only) */
  padLeft?: boolean;
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
  /** Color variant for left/right icons (design token mapped) */
  iconColor?: IconColor;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "primary",
  size = "large",
  loading = false,
  disabled = false,
  padLeft = true,
  children,
  className,
  iconLeft,
  iconRight,
  loadingIcon,
  iconColor,
  ...props
}: ButtonProps) => {
  const baseClass = "ntgds-btn";
  const resolvedIconColor = iconColor ?? (variant === "primary" ? "inverse" : "default");

  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    size === "small" && `${baseClass}--small`,
    loading && `${baseClass}--loading`,
    (iconLeft || iconRight) && `${baseClass}--with-icon`,
    variant === "tertiary" && padLeft === false && `${baseClass}--no-left-pad`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Default loading spinner component
  const defaultLoadingIcon = (
    <span className={`${baseClass}__loading-spinner`} aria-hidden="true" />
  );

  const renderContent = () => {
    if (loading) {
      return loadingIcon || defaultLoadingIcon;
    }
    const iconSize = size === "small" ? "sm" : "md";
    const resolveIcon = (icon: React.ReactNode) => {
      if (!icon) return null;
      if (typeof icon === "string") {
        return <Icon name={icon} size={iconSize} color={resolvedIconColor} />;
      }
      // If already an Icon element, normalize size
      if (React.isValidElement(icon) && (icon.type as any) === Icon) {
        // Already an Icon; leave as-is to respect provided props
        return icon;
      }
      // Fallback: wrap arbitrary node inside Icon for consistent sizing
      return (
        <Icon size={iconSize} color={resolvedIconColor}>
          {icon}
        </Icon>
      );
    };

    return (
      <>
        {iconLeft && (
          <span className={`${baseClass}__icon ${baseClass}__icon--left`}>
            {resolveIcon(iconLeft)}
          </span>
        )}
        {children}
        {iconRight && (
          <span className={`${baseClass}__icon ${baseClass}__icon--right`}>
            {resolveIcon(iconRight)}
          </span>
        )}
      </>
    );
  };

  return (
    <button className={classes} disabled={disabled} {...props}>
      {renderContent()}
    </button>
  );
};
