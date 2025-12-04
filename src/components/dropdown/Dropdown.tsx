import React from "react";
import { Icon } from "../icon/Icon";
import "./dropdown.css";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /** Array of options to display */
  options: DropdownOption[];
  /** Currently selected value */
  value?: string;
  /** Callback when selection changes */
  onChange?: (value: string) => void;
  /** Label for the dropdown */
  label?: string;
  /** Helper text below the label */
  helperText?: string;
  /** Validation status: 'default' | 'error' | 'success' */
  status?: "default" | "error" | "success";
  /** Error message to display */
  errorText?: string;
  /** Success message to display */
  successText?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the dropdown is disabled */
  disabled?: boolean;
  /** Field name for ID generation */
  name?: string;
  /** Additional CSS classes */
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  label,
  helperText,
  status = "default",
  errorText,
  successText,
  required = false,
  disabled = false,
  name = "dropdown",
  className = "",
}) => {
  // Generate unique IDs for ARIA attributes
  const selectId = `${name}-select`;
  const helperId = helperText ? `${name}-helper` : "";
  const errorId = errorText ? `${name}-error` : "";
  const successId = successText ? `${name}-success` : "";
  const describedBy = [helperId, errorId, successId]
    .filter(Boolean)
    .join(" ");

  const baseClass = "ntgds-dropdown";
  const classes = [
    baseClass,
    `${baseClass}--${status}`,
    disabled ? `${baseClass}--disabled` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {label && (
        <label className={`${baseClass}__label`} htmlFor={selectId}>
          {label}
          {required && (
            <span className={`${baseClass}__required`}> (Required)</span>
          )}
        </label>
      )}

      {helperText && (
        <div className={`${baseClass}__helper`} id={helperId}>
          {helperText}
        </div>
      )}

      <select
        id={selectId}
        className={`${baseClass}__select`}
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        required={required}
        aria-describedby={describedBy || undefined}
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

      {errorText && (
        <div className={`${baseClass}__message ${baseClass}__message--error`} id={errorId}>
          <span className={`${baseClass}__message-icon`}>
            <Icon name="circle-exclamation" size="sm" color="primary" />
          </span>
          <span>{errorText}</span>
        </div>
      )}

      {successText && (
        <div className={`${baseClass}__message ${baseClass}__message--success`} id={successId}>
          <span className={`${baseClass}__message-icon`}>
            <Icon name="circle-check" size="sm" color="primary" />
          </span>
          <span>{successText}</span>
        </div>
      )}
    </div>
  );
};
