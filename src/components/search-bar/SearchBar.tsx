import React, { useRef } from "react";
import { Icon } from "../icon/Icon";
import "./search-bar.css";

export interface SearchBarProps
  extends Omit<
    React.FormHTMLAttributes<HTMLFormElement>,
    "onSubmit" | "onChange"
  > {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  width?: string | number;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search",
  value = "",
  onChange,
  onSubmit,
  variant = "primary",
  disabled = false,
  width = "296px",
  className = "",
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit && inputRef.current) {
      onSubmit(inputRef.current.value);
    }
  };

  const handleIconClick = () => {
    if (onSubmit && inputRef.current) {
      onSubmit(inputRef.current.value);
    }
  };

  const baseClass = "ntgds-search-bar";
  const wrapperClass = [baseClass, `${baseClass}--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  if (variant === "primary") {
    return (
      <form
        className={wrapperClass}
        onSubmit={handleFormSubmit}
        style={{ width }}
        {...props}
      >
        <div className={`${baseClass}__input-wrapper`}>
          <input
            ref={inputRef}
            type="text"
            className={`${baseClass}__input`}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
            disabled={disabled}
            aria-label="Search"
          />
        </div>
        <button
          type="submit"
          className={`${baseClass}__button`}
          disabled={disabled}
          aria-label="Submit search"
        >
          <Icon name="magnifying-glass" color="inverse" size="md" />
        </button>
      </form>
    );
  }

  // Secondary variant
  return (
    <form
      className={wrapperClass}
      onSubmit={handleFormSubmit}
      {...props}
    >
      <div className={`${baseClass}__input-wrapper`}>
        <input
          ref={inputRef}
          type="text"
          className={`${baseClass}__input`}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
          aria-label="Search"
        />
        <button
          type="button"
          className={`${baseClass}__icon-button`}
          onClick={handleIconClick}
          disabled={disabled}
          aria-label="Submit search"
        >
          <Icon name="magnifying-glass" size="md" style={{ color: "var(--ntg-colour-neutrals-600, #949391)" }} />
        </button>
      </div>
    </form>
  );
};
