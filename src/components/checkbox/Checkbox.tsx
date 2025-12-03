import React from "react";
import { Icon } from "../icon/Icon";
import "./checkbox.css";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id?: string;
  name?: string;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  groupLabel?: React.ReactNode;
  status?: "default" | "error" | "success";
  errorText?: React.ReactNode;
  successText?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  helperText,
  groupLabel,
  status = "default",
  errorText,
  successText,
  checked,
  defaultChecked,
  onChange,
  disabled,
  className = "",
  inputProps,
  ...rest
}) => {
  const rootClasses = [
    "ntgds-checkbox",
    status === "error" && "ntgds-checkbox--error",
    status === "success" && "ntgds-checkbox--success",
    disabled && "ntgds-checkbox--disabled",
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
      {groupLabel && (
        <div className="ntgds-checkbox__group-label">
          {groupLabel}
        </div>
      )}
      {helperText && (
        <div id={helperId} className="ntgds-checkbox__helper">
          {helperText}
        </div>
      )}
      <label className="ntgds-checkbox__wrapper">
        <input
          id={id}
          name={name}
          type="checkbox"
          className="ntgds-checkbox__input"
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          aria-describedby={describedBy}
          aria-invalid={status === "error" || errorText ? true : undefined}
          disabled={disabled}
          {...inputProps}
          {...rest}
        />
        <span className="ntgds-checkbox__box">
          <Icon name="check" size="sm" color="primary" aria-hidden="true" />
        </span>
        {label && <span className="ntgds-checkbox__label">{label}</span>}
      </label>
      {errorText && (
        <div id={errorId} className="ntgds-checkbox__message ntgds-checkbox__message--error">
          <span className="ntgds-checkbox__message-icon">
            <Icon name="circle-exclamation" size="sm" color="primary" />
          </span>
          <span>{errorText}</span>
        </div>
      )}
      {successText && (
        <div id={successId} className="ntgds-checkbox__message ntgds-checkbox__message--success">
          <span className="ntgds-checkbox__message-icon">
            <Icon name="circle-check" size="sm" color="primary" />
          </span>
          <span>{successText}</span>
        </div>
      )}
    </div>
  );
};
