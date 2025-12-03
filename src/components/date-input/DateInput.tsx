import React, { useState, useCallback } from "react";
import { Icon } from "../icon/Icon";
import "./date-input.css";

export interface DateInputProps {
  id?: string;
  name?: string;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  status?: "default" | "error" | "success";
  errorText?: React.ReactNode;
  successText?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  maxWidth?: number | string;
  className?: string;
  dayValue?: string;
  monthValue?: string;
  yearValue?: string;
  onDayChange?: (value: string) => void;
  onMonthChange?: (value: string) => void;
  onYearChange?: (value: string) => void;
  onChange?: (day: string, month: string, year: string) => void;
  dayProps?: React.InputHTMLAttributes<HTMLInputElement>;
  monthProps?: React.InputHTMLAttributes<HTMLInputElement>;
  yearProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const DateInput: React.FC<DateInputProps> = ({
  id,
  name,
  label,
  helperText,
  status = "default",
  errorText,
  successText,
  required,
  disabled,
  maxWidth,
  className = "",
  dayValue,
  monthValue,
  yearValue,
  onDayChange,
  onMonthChange,
  onYearChange,
  onChange,
  dayProps,
  monthProps,
  yearProps,
}) => {
  const [internalDay, setInternalDay] = useState("");
  const [internalMonth, setInternalMonth] = useState("");
  const [internalYear, setInternalYear] = useState("");

  const currentDay = dayValue !== undefined ? dayValue : internalDay;
  const currentMonth = monthValue !== undefined ? monthValue : internalMonth;
  const currentYear = yearValue !== undefined ? yearValue : internalYear;

  const handleDayChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (dayValue === undefined) setInternalDay(value);
      onDayChange?.(value);
      onChange?.(value, currentMonth, currentYear);
    },
    [dayValue, onDayChange, onChange, currentMonth, currentYear]
  );

  const handleMonthChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "").slice(0, 2);
      if (monthValue === undefined) setInternalMonth(value);
      onMonthChange?.(value);
      onChange?.(currentDay, value, currentYear);
    },
    [monthValue, onMonthChange, onChange, currentDay, currentYear]
  );

  const handleYearChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "").slice(0, 4);
      if (yearValue === undefined) setInternalYear(value);
      onYearChange?.(value);
      onChange?.(currentDay, currentMonth, value);
    },
    [yearValue, onYearChange, onChange, currentDay, currentMonth]
  );

  const rootClasses = [
    "ntgds-date-input",
    status === "error" && "ntgds-date-input--error",
    status === "success" && "ntgds-date-input--success",
    disabled && "ntgds-date-input--disabled",
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
        <div className="ntgds-date-input__label-container">
          <label className="ntgds-date-input__label">
            {label}
            {required && (
              <span className="ntgds-date-input__required"> (Required)</span>
            )}
          </label>
          {helperText && (
            <div id={helperId} className="ntgds-date-input__helper">
              {helperText}
            </div>
          )}
        </div>
      )}
      <div className="ntgds-date-input__fields">
        <div className="ntgds-date-input__field ntgds-date-input__field--day">
          <label htmlFor={`${id || name}-day`} className="ntgds-date-input__field-label">
            Day
          </label>
          <input
            id={`${id || name}-day`}
            name={`${name}-day`}
            type="text"
            inputMode="numeric"
            className="ntgds-date-input__control"
            placeholder="DD"
            value={currentDay}
            onChange={handleDayChange}
            aria-describedby={describedBy}
            aria-invalid={status === "error" || errorText ? true : undefined}
            required={required}
            disabled={disabled}
            maxLength={2}
            {...dayProps}
          />
        </div>
        <div className="ntgds-date-input__field ntgds-date-input__field--month">
          <label htmlFor={`${id || name}-month`} className="ntgds-date-input__field-label">
            Month
          </label>
          <input
            id={`${id || name}-month`}
            name={`${name}-month`}
            type="text"
            inputMode="numeric"
            className="ntgds-date-input__control"
            placeholder="MM"
            value={currentMonth}
            onChange={handleMonthChange}
            aria-describedby={describedBy}
            aria-invalid={status === "error" || errorText ? true : undefined}
            required={required}
            disabled={disabled}
            maxLength={2}
            {...monthProps}
          />
        </div>
        <div className="ntgds-date-input__field ntgds-date-input__field--year">
          <label htmlFor={`${id || name}-year`} className="ntgds-date-input__field-label">
            Year
          </label>
          <input
            id={`${id || name}-year`}
            name={`${name}-year`}
            type="text"
            inputMode="numeric"
            className="ntgds-date-input__control"
            placeholder="YYYY"
            value={currentYear}
            onChange={handleYearChange}
            aria-describedby={describedBy}
            aria-invalid={status === "error" || errorText ? true : undefined}
            required={required}
            disabled={disabled}
            maxLength={4}
            {...yearProps}
          />
        </div>
      </div>
      {errorText && (
        <div id={errorId} className="ntgds-date-input__message ntgds-date-input__message--error">
          <span className="ntgds-date-input__message-icon">
            <Icon name="circle-exclamation" size="sm" color="primary" />
          </span>
          <span>{errorText}</span>
        </div>
      )}
      {successText && (
        <div id={successId} className="ntgds-date-input__message ntgds-date-input__message--success">
          <span className="ntgds-date-input__message-icon">
            <Icon name="circle-check" size="sm" color="primary" />
          </span>
          <span>{successText}</span>
        </div>
      )}
    </div>
  );
};
