import React, { useState, useRef, useEffect } from "react";
import "./date-picker.css";
import { Icon } from "../icon/Icon";
import { Button } from "../button/Button";

export interface DatePickerProps {
  label: string;
  helperText?: string;
  successText?: string;
  errorText?: string;
  validationState?: "default" | "error" | "success";
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  helperText,
  successText,
  errorText,
  validationState = "default",
  required = false,
  disabled = false,
  value: controlledValue,
  onChange,
  placeholder = "DD/MM/YYYY",
  name,
  id,
  className = "",
}) => {
  const [internalValue, setInternalValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewDate, setViewDate] = useState<Date>(new Date());
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  // Parse value to Date
  useEffect(() => {
    if (currentValue) {
      const date = parseDate(currentValue);
      if (date) {
        setSelectedDate(date);
        setViewDate(date);
      }
    }
  }, [currentValue]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const parseDate = (dateString: string): Date | null => {
    if (!dateString) return null;
    
    // Try parsing DD/MM/YYYY format
    const parts = dateString.split("/");
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      const date = new Date(year, month, day);
      if (!isNaN(date.getTime())) return date;
    }
    
    // Try parsing YYYY-MM-DD format
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) return date;
    
    return null;
  };

  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    
    if (onChange) {
      onChange(newValue);
    }

    const date = parseDate(newValue);
    if (date) {
      setSelectedDate(date);
      setViewDate(date);
    }
  };

  const handleInputClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleIconClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    const formatted = formatDate(date);
    
    if (!isControlled) {
      setInternalValue(formatted);
    }
    
    if (onChange) {
      onChange(formatted);
    }
  };

  const handleConfirm = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handlePrevYear = () => {
    setViewDate(new Date(viewDate.getFullYear() - 1, viewDate.getMonth(), 1));
  };

  const handleNextYear = () => {
    setViewDate(new Date(viewDate.getFullYear() + 1, viewDate.getMonth(), 1));
  };

  const getDaysInMonth = (date: Date): (Date | null)[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Get day of week (0 = Sunday, 1 = Monday, etc.)
    let startDay = firstDay.getDay();
    // Convert to Monday = 0
    startDay = startDay === 0 ? 6 : startDay - 1;
    
    const days: (Date | null)[] = [];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    
    // Add all days in month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const isSameDay = (date1: Date | null, date2: Date | null): boolean => {
    if (!date1 || !date2) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const showHelperText = helperText && validationState === "default";
  const showSuccessText = successText && validationState === "success";
  const showErrorText = errorText && validationState === "error";

  const baseClass = "ntgds-date-picker";
  const containerClass = `${baseClass} ${
    disabled ? `${baseClass}--disabled` : ""
  } ${validationState !== "default" ? `${baseClass}--${validationState}` : ""} ${className}`.trim();

  const inputId = id || `${baseClass}-input`;
  const labelId = `${baseClass}-label`;
  const messageId = `${baseClass}-message`;

  const days = getDaysInMonth(viewDate);

  return (
    <div className={containerClass}>
      <label id={labelId} htmlFor={inputId} className={`${baseClass}__label`}>
        {label}
        {required && (
          <span className={`${baseClass}__required`}> (required)</span>
        )}
      </label>

      {showHelperText && (
        <p id={messageId} className={`${baseClass}__helper-text`}>
          {helperText}
        </p>
      )}

      {showSuccessText && (
        <div
          id={messageId}
          className={`${baseClass}__message ${baseClass}__message--success`}
        >
          <span className={`${baseClass}__icon-wrapper`}>
            <Icon name="circle-check" size="sm" />
          </span>
          <p className={`${baseClass}__success-text`}>{successText}</p>
        </div>
      )}

      {showErrorText && (
        <div
          id={messageId}
          className={`${baseClass}__message ${baseClass}__message--error`}
        >
          <span className={`${baseClass}__icon-wrapper`}>
            <Icon name="circle-exclamation" size="sm" />
          </span>
          <p className={`${baseClass}__error-text`}>{errorText}</p>
        </div>
      )}

      <div className={`${baseClass}__input-wrapper`}>
        <input
          ref={inputRef}
          id={inputId}
          type="text"
          name={name}
          value={currentValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          className={`${baseClass}__input`}
          aria-labelledby={labelId}
          aria-describedby={
            showHelperText || showSuccessText || showErrorText
              ? messageId
              : undefined
          }
          aria-invalid={validationState === "error"}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          readOnly
        />
        <button
          type="button"
          className={`${baseClass}__icon-button`}
          onClick={handleIconClick}
          disabled={disabled}
          aria-label="Open calendar"
          tabIndex={-1}
        >
          <Icon name="calendar-days" size="sm" />
        </button>

        {isOpen && (
          <div ref={dropdownRef} className={`${baseClass}__calendar`} role="dialog" aria-label="Choose date">
            <div className={`${baseClass}__calendar-header`}>
              <button
                type="button"
                className={`${baseClass}__nav-button`}
                onClick={handlePrevYear}
                aria-label="Previous year"
              >
                <Icon name="angles-left" size="sm" />
              </button>
              <button
                type="button"
                className={`${baseClass}__nav-button`}
                onClick={handlePrevMonth}
                aria-label="Previous month"
              >
                <Icon name="chevron-left" size="sm" />
              </button>
              <div className={`${baseClass}__month-year`}>
                <span className={`${baseClass}__month-name`}>
                  {monthNames[viewDate.getMonth()]}
                </span>
                <span className={`${baseClass}__year-name`}>
                  {viewDate.getFullYear()}
                </span>
              </div>
              <button
                type="button"
                className={`${baseClass}__nav-button`}
                onClick={handleNextMonth}
                aria-label="Next month"
              >
                <Icon name="chevron-right" size="sm" />
              </button>
              <button
                type="button"
                className={`${baseClass}__nav-button`}
                onClick={handleNextYear}
                aria-label="Next year"
              >
                <Icon name="angles-right" size="sm" />
              </button>
            </div>

            <div className={`${baseClass}__calendar-weekdays`}>
              {dayNames.map((day) => (
                <div key={day} className={`${baseClass}__weekday`}>
                  {day}
                </div>
              ))}
            </div>

            <div className={`${baseClass}__calendar-days`}>
              {days.map((day, index) => {
                const isSelected = isSameDay(day, selectedDate);
                return (
                  <div key={index} className={`${baseClass}__day-cell`}>
                    {day ? (
                      <button
                        type="button"
                        className={`${baseClass}__day-button ${
                          isSelected ? `${baseClass}__day-button--selected` : ""
                        }`}
                        onClick={() => handleDateSelect(day)}
                        aria-label={formatDate(day)}
                        aria-pressed={isSelected}
                      >
                        {day.getDate()}
                      </button>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className={`${baseClass}__calendar-footer`}>
              <Button
                variant="secondary"
                size="large"
                onClick={handleCancel}
                type="button"
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="large"
                onClick={handleConfirm}
                type="button"
              >
                Confirm
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
