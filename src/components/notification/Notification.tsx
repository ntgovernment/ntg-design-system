import React from "react";
import { Icon } from "../icon/Icon";

export interface NotificationProps {
  title: string;
  message: string;
  variant?: "info" | "success" | "warning" | "danger";
  className?: string;
}

export const Notification: React.FC<NotificationProps> = ({
  title,
  message,
  variant = "info",
  className = "",
}) => {
  const iconNameMap: Record<
    NonNullable<NotificationProps["variant"]>,
    string
  > = {
    info: "circle-info",
    success: "circle-check",
    warning: "triangle-exclamation",
    danger: "circle-xmark",
  };

  return (
    <div
      className={`ntgds-notification ntgds-notification--${variant} ${className}`.trim()}
    >
      <div className="ntgds-notification__border"></div>
      <div className="ntgds-notification__content">
        <div className="ntgds-notification__header">
          <div className="ntgds-notification__icon">
            <Icon name={iconNameMap[variant]} size="lg" />
          </div>
          <div className="ntgds-notification__text">
            <div className="ntgds-notification__title">{title}</div>
            <div className="ntgds-notification__message">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
