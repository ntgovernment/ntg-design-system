import React from "react";
import "./tag.css";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual style variant */
  variant?:
    | "default"
    | "subtle"
    | "darwin"
    | "top-end"
    | "east-arnhem"
    | "big-rivers"
    | "barkly"
    | "central-australia";
  /** Whether the tag is disabled */
  disabled?: boolean;
  /** Tag content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const Tag = ({
  variant = "default",
  disabled = false,
  children,
  className,
  ...props
}: TagProps) => {
  const baseClass = "ntgds-tag";
  const classes = [
    baseClass,
    variant && `${baseClass}--${variant}`,
    disabled && `${baseClass}--disabled`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} aria-disabled={disabled} {...props}>
      {children}
    </span>
  );
};
