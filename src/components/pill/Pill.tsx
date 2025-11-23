import React from "react";
import { Icon } from "../icon/Icon";

export interface PillProps {
  // No variant prop; only default styling
  disabled?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Pill: React.FC<PillProps> = ({
  disabled = false,
  onClose,
  children,
  className = "",
}) => {
  const handleClose = onClose || (() => {});
  return (
    <div
      className={`ntgds-pill${
        disabled ? " ntgds-pill--disabled" : ""
      } ${className}`.trim()}
      aria-disabled={disabled || undefined}
    >
      <div className="ntgds-pill__label">{children}</div>
      <button
        className="ntgds-pill__close"
        aria-label="Remove pill"
        type="button"
        onClick={handleClose}
        disabled={disabled}
      >
        <Icon name="xmark" size="sm" />
      </button>
    </div>
  );
};
