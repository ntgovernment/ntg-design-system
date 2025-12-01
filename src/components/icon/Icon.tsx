import React from "react";

export type IconSize = "sm" | "md" | "lg";
export type IconColor =
  | "default"
  | "primary"
  | "secondary"
  | "tertiary"
  | "inverse";

export interface IconProps {
  /** Font Awesome icon name without style prefix, e.g. "xmark" */
  name?: string;
  /** Optional children for custom glyph if no name provided */
  children?: React.ReactNode;
  /** Size variant */
  size?: IconSize;
  /** Color variant mapped to design tokens */
  color?: IconColor;
  /** Additional class names */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Accessible label; when present icon is not aria-hidden */
  ariaLabel?: string;
  /** Font Awesome style family; defaults to solid */
  faStyle?: "solid" | "regular" | "brands";
}

const sizeClassMap: Record<IconSize, string> = {
  sm: "ntgds-icon--sm",
  md: "ntgds-icon--md",
  lg: "ntgds-icon--lg",
};

const colorClassMap: Record<IconColor, string> = {
  default: "ntgds-icon--color-default",
  primary: "ntgds-icon--color-primary",
  secondary: "ntgds-icon--color-secondary",
  tertiary: "ntgds-icon--color-tertiary",
  inverse: "ntgds-icon--color-inverse",
};

export const Icon: React.FC<IconProps> = ({
  name,
  children,
  size = "md",
  color = "default",
  className = "",
  style,
  ariaLabel,
  faStyle = "solid",
}) => {
  const classes = [
    "ntgds-icon",
    sizeClassMap[size],
    colorClassMap[color],
    className.trim(),
  ]
    .filter(Boolean)
    .join(" ");

  const isDecorative = !ariaLabel;

  // Map style to FA prefix
  const faPrefix =
    faStyle === "regular"
      ? "fa-regular"
      : faStyle === "brands"
      ? "fa-brands"
      : "fa-solid";

  // If a Font Awesome name is provided, render <i> with FA classes;
  // Otherwise, render a span wrapper so CSS can fallback style.
  if (name) {
    return (
      <i
        className={`${classes} ${faPrefix} fa-${name}`.trim()}
        style={style}
        aria-hidden={isDecorative ? "true" : undefined}
        aria-label={ariaLabel}
      />
    );
  }

  return (
    <span
      className={classes}
      style={style}
      aria-hidden={isDecorative ? "true" : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </span>
  );
};
