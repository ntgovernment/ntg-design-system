import React from "react";
import "./callout.css";

export interface CalloutProps {
  /** Callout heading text */
  title: string;
  /** Callout body content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Callout component for highlighting important information
 * Features a prominent left border for visual distinction
 */
export const Callout: React.FC<CalloutProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div className={`ntgds-callout ${className}`.trim()}>
      <div className="ntgds-callout__border"></div>
      <div className="ntgds-callout__content">
        <div className="ntgds-callout__header">
          <div className="ntgds-callout__text">
            <h3 className="ntgds-callout__title">{title}</h3>
            <div className="ntgds-callout__body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
