import React, { useState } from "react";
import "./radio-group.css";
import { RadioButton } from "../radio-button/RadioButton";
import { Icon } from "../icon/Icon";

export interface RadioGroupOption {
  value: string;
  label: string;
  helperText?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  label: string;
  options: RadioGroupOption[];
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  helperText?: string;
  successText?: string;
  errorText?: string;
  validationState?: "default" | "error" | "success";
  required?: boolean;
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  name,
  value: controlledValue,
  onChange,
  helperText,
  successText,
  errorText,
  validationState = "default",
  required = false,
  orientation = "vertical",
  className = "",
}) => {
  const [internalValue, setInternalValue] = useState<string>("");

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleRadioChange = (optionValue: string) => {
    if (!isControlled) {
      setInternalValue(optionValue);
    }
    if (onChange) {
      onChange(optionValue);
    }
  };

  const showHelperText = helperText && validationState === "default";
  const showSuccessText = successText && validationState === "success";
  const showErrorText = errorText && validationState === "error";

  const baseClass = "ntgds-radio-group";
  const containerClass = `${baseClass} ${
    validationState !== "default" ? `${baseClass}--${validationState}` : ""
  } ${className}`.trim();

  const labelId = `${baseClass}-label-${name}`;
  const messageId = `${baseClass}-message-${name}`;

  return (
    <div className={containerClass}>
      <label id={labelId} className={`${baseClass}__label`}>
        {label}
        {required && (
          <span className={`${baseClass}__required`}> (required)</span>
        )}
      </label>

      {showHelperText && (
        <p id={messageId} className={`${baseClass}__helper-text`}>{helperText}</p>
      )}

      {showSuccessText && (
        <div id={messageId} className={`${baseClass}__message ${baseClass}__message--success`}>
          <span className={`${baseClass}__icon-wrapper`}>
            <Icon name="circle-check" size="sm" />
          </span>
          <p className={`${baseClass}__success-text`}>{successText}</p>
        </div>
      )}

      {showErrorText && (
        <div id={messageId} className={`${baseClass}__message ${baseClass}__message--error`}>
          <span className={`${baseClass}__icon-wrapper`}>
            <Icon name="circle-exclamation" size="sm" />
          </span>
          <p className={`${baseClass}__error-text`}>{errorText}</p>
        </div>
      )}

      <div
        className={`${baseClass}__options ${baseClass}__options--${orientation}`}
        role="radiogroup"
        aria-labelledby={labelId}
        aria-describedby={
          showHelperText || showSuccessText || showErrorText
            ? messageId
            : undefined
        }
        aria-invalid={validationState === "error"}
        aria-required={required}
      >
        {options.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            name={name}
            value={option.value}
            checked={currentValue === option.value}
            onChange={() => handleRadioChange(option.value)}
            helperText={option.helperText}
            disabled={option.disabled}
            groupLabel={label}
            required={required}
          />
        ))}
      </div>
    </div>
  );
};
