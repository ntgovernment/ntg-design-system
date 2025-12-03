import React, { useState, useCallback } from "react";
import { Icon } from "../icon/Icon";
import "./textarea.css";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  name?: string;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  status?: "default" | "error" | "success";
  errorText?: React.ReactNode;
  successText?: React.ReactNode;
  maxWidth?: number | string;
  maxLength?: number;
  showCharCount?: boolean;
  className?: string;
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
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
  maxLength,
  showCharCount = false,
  className = "",
  textareaProps,
  ...rest
}) => {
  const [charCount, setCharCount] = useState(
    (value?.toString() || defaultValue?.toString() || "").length
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      if (onChange) {
        onChange(e);
      }
    },
    [onChange]
  );

  const rootClasses = [
    "ntgds-textarea",
    status === "error" && "ntgds-textarea--error",
    status === "success" && "ntgds-textarea--success",
    disabled && "ntgds-textarea--disabled",
    required && "ntgds-textarea--required",
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
        <label htmlFor={id} className="ntgds-textarea__label">
          {label}
          {required && (
            <span className="ntgds-textarea__required"> (Required)</span>
          )}
        </label>
      )}
      {helperText && (
        <div id={helperId} className="ntgds-textarea__helper">
          {helperText}
        </div>
      )}
      <textarea
        id={id}
        name={name}
        className="ntgds-textarea__control"
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        aria-describedby={describedBy}
        aria-invalid={status === "error" || errorText ? true : undefined}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
        {...textareaProps}
        {...rest}
      />
      {(showCharCount || maxLength) && (
        <div className="ntgds-textarea__char-count">
          {charCount}
          {maxLength && `/${maxLength}`}
        </div>
      )}
      {errorText && (
        <div id={errorId} className="ntgds-textarea__message ntgds-textarea__message--error">
          <span className="ntgds-textarea__message-icon">
            <Icon name="circle-exclamation" size="sm" color="primary" />
          </span>
          <span>{errorText}</span>
        </div>
      )}
      {successText && (
        <div id={successId} className="ntgds-textarea__message ntgds-textarea__message--success">
          <span className="ntgds-textarea__message-icon">
            <Icon name="circle-check" size="sm" color="primary" />
          </span>
          <span>{successText}</span>
        </div>
      )}
    </div>
  );
};
