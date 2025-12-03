import React from "react";
import { Icon } from "../icon/Icon";
import { Checkbox, CheckboxProps } from "../checkbox/Checkbox";
import "./checkbox-group.css";

export interface CheckboxGroupOption extends Omit<CheckboxProps, 'groupLabel' | 'helperText' | 'errorText' | 'successText'> {
  value: string;
}

export interface CheckboxGroupProps {
  id?: string;
  name?: string;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  options: CheckboxGroupOption[];
  orientation?: "vertical" | "horizontal";
  status?: "default" | "error" | "success";
  errorText?: React.ReactNode;
  successText?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  value?: string[];
  defaultValue?: string[];
  onChange?: (selectedValues: string[]) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  id,
  name,
  label,
  helperText,
  options,
  orientation = "vertical",
  status = "default",
  errorText,
  successText,
  required,
  disabled,
  className = "",
  value,
  defaultValue,
  onChange,
}) => {
  const [internalValue, setInternalValue] = React.useState<string[]>(defaultValue || []);
  
  const currentValue = value !== undefined ? value : internalValue;

  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    const newValue = checked
      ? [...currentValue, optionValue]
      : currentValue.filter(v => v !== optionValue);
    
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const rootClasses = [
    "ntgds-checkbox-group",
    `ntgds-checkbox-group--${orientation}`,
    status === "error" && "ntgds-checkbox-group--error",
    status === "success" && "ntgds-checkbox-group--success",
    disabled && "ntgds-checkbox-group--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const helperId = helperText ? `${id || name}-helper` : undefined;
  const errorId = errorText ? `${id || name}-error` : undefined;
  const successId = successText ? `${id || name}-success` : undefined;
  const describedBy = [helperId, errorId, successId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={rootClasses}>
      {label && (
        <div className="ntgds-checkbox-group__label-container">
          <div className="ntgds-checkbox-group__label">
            {label}
            {required && (
              <span className="ntgds-checkbox-group__required"> (Required)</span>
            )}
          </div>
          {helperText && (
            <div id={helperId} className="ntgds-checkbox-group__helper">
              {helperText}
            </div>
          )}
        </div>
      )}
      <div className="ntgds-checkbox-group__options" role="group" aria-describedby={describedBy}>
        {options.map((option, index) => {
          const { value: optionValue, ...checkboxProps } = option;
          const isChecked = currentValue.includes(optionValue);
          
          return (
            <Checkbox
              key={optionValue || index}
              {...checkboxProps}
              id={`${id || name}-${optionValue || index}`}
              name={`${name}[]`}
              checked={isChecked}
              onChange={(e) => handleCheckboxChange(optionValue, e.target.checked)}
              disabled={disabled || option.disabled}
              status={status}
            />
          );
        })}
      </div>
      {errorText && (
        <div id={errorId} className="ntgds-checkbox-group__message ntgds-checkbox-group__message--error">
          <span className="ntgds-checkbox-group__message-icon">
            <Icon name="circle-exclamation" size="sm" color="primary" />
          </span>
          <span>{errorText}</span>
        </div>
      )}
      {successText && (
        <div id={successId} className="ntgds-checkbox-group__message ntgds-checkbox-group__message--success">
          <span className="ntgds-checkbox-group__message-icon">
            <Icon name="circle-check" size="sm" color="primary" />
          </span>
          <span>{successText}</span>
        </div>
      )}
    </div>
  );
};
