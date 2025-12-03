import React from "react";
import "./radio-button.css";
import { Icon } from "../icon/Icon";

export interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  helperText?: string;
  successText?: string;
  errorText?: string;
  validationState?: "default" | "error" | "success";
  groupLabel?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  helperText,
  successText,
  errorText,
  validationState = "default",
  groupLabel,
  required,
  disabled,
  className = "",
  ...props
}) => {
  const showHelperText = helperText && validationState === "default";
  const showSuccessText = successText && validationState === "success";
  const showErrorText = errorText && validationState === "error";

  const baseClass = "ntgds-radio-button";
  const containerClass = `${baseClass} ${
    disabled ? `${baseClass}--disabled` : ""
  } ${validationState !== "default" ? `${baseClass}--${validationState}` : ""} ${className}`.trim();

  return (
    <div className={containerClass}>
      {showHelperText && (
        <p className={`${baseClass}__helper-text`}>{helperText}</p>
      )}

      {showSuccessText && (
        <div className={`${baseClass}__message ${baseClass}__message--success`}>
          <span className={`${baseClass}__icon-wrapper`}>
            <Icon name="circle-check" size="sm" />
          </span>
          <p className={`${baseClass}__success-text`}>{successText}</p>
        </div>
      )}

      {showErrorText && (
        <div className={`${baseClass}__message ${baseClass}__message--error`}>
          <span className={`${baseClass}__icon-wrapper`}>
            <Icon name="circle-exclamation" size="sm" />
          </span>
          <p className={`${baseClass}__error-text`}>{errorText}</p>
        </div>
      )}

      <label className={`${baseClass}__label-container`}>
        <input
          type="radio"
          className={`${baseClass}__input`}
          disabled={disabled}
          aria-describedby={
            showHelperText || showSuccessText || showErrorText
              ? `${baseClass}-message`
              : undefined
          }
          aria-invalid={validationState === "error"}
          {...props}
        />
        <span className={`${baseClass}__button`}>
          <span className={`${baseClass}__dot`}></span>
        </span>
        <span className={`${baseClass}__label-text`}>
          {label}
          {required && !groupLabel && (
            <span className={`${baseClass}__required`}> (required)</span>
          )}
        </span>
      </label>
    </div>
  );
};
