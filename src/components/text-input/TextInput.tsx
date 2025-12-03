import React from "react";
import { Icon } from "../icon/Icon";
import "./text-input.css";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  type?: "text" | "email" | "password" | "search" | "tel" | "url";
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  status?: "default" | "error" | "success";
  errorText?: React.ReactNode;
  successText?: React.ReactNode;
  maxWidth?: number | string;
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  type = "text",
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  helperText,
  status = "default",
  errorText,
  successText,
  required,
  disabled,
  maxWidth = 480,
  className = "",
  inputProps,
  ...rest
}) => {
  const rootClasses = [
    "ntgds-text-input",
    status === "error" && "ntgds-text-input--error",
    status === "success" && "ntgds-text-input--success",
    disabled && "ntgds-text-input--disabled",
    required && "ntgds-text-input--required",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const helperId = helperText ? `${id || name}-helper` : undefined;
  const errorId = errorText ? `${id || name}-error` : undefined;
  const successId = successText ? `${id || name}-success` : undefined;
  const describedBy = [helperId, errorId, successId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={rootClasses} style={{ maxWidth }}>
      {label && (
        <label htmlFor={id} className="ntgds-text-input__label">
          {label}
          {required && (
            <span className="ntgds-text-input__required"> (Required)</span>
          )}
        </label>
      )}
      {helperText && (
        <div id={helperId} className="ntgds-text-input__helper">
          {helperText}
        </div>
      )}
      <input
        id={id}
        name={name}
        type={type}
        className="ntgds-text-input__control"
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        aria-describedby={describedBy}
        aria-invalid={status === "error" || errorText ? true : undefined}
        required={required}
        disabled={disabled}
        {...inputProps}
        {...rest}
      />
      {errorText && (
        <div id={errorId} className="ntgds-text-input__message ntgds-text-input__message--error">
          <span className="ntgds-text-input__message-icon">
            <Icon name="circle-exclamation" size="sm" color="primary" />
          </span>
          <span>{errorText}</span>
        </div>
      )}
      {successText && (
        <div id={successId} className="ntgds-text-input__message ntgds-text-input__message--success">
          <span className="ntgds-text-input__message-icon">
            <Icon name="circle-check" size="sm" color="primary" />
          </span>
          <span>{successText}</span>
        </div>
      )}
    </div>
  );
};
