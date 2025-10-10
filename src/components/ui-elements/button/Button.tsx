import React from "react";
import "./button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "large" | "small";
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = ({ variant = "primary", size = "large", loading = false, disabled = false, children, className, ...props }: ButtonProps) => {
  const baseClass = "ntgds-btn";

  const classes = [baseClass, `${baseClass}--${variant}`, size === "small" && `${baseClass}--small`, loading && `${baseClass}--loading`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading ? <span className={`${baseClass}__loading-indicator`} /> : children}
    </button>
  );
};
