import React from "react";
import { Link } from "../link/Link";
import { Icon } from "../icon/Icon";
import "./document.css";

export type FileFormat = "DOCX" | "PDF" | "XLSX" | "PPTX";

export interface DocumentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Document title text shown as a link */
  title: string;
  /** Destination URL */
  href: string;
  /** File format to drive icon and meta prefix */
  fileFormat?: FileFormat;
  /** Optional file size string, e.g. "182 KB" */
  fileSize?: string;
  /** Optional helper/description line under the title/meta block */
  description?: string;
  /** Whether the link opens in a new tab */
  external?: boolean;
  /** Accessible label for the title link */
  ariaLabel?: string;
  /** Additional CSS classes on the root */
  className?: string;
}

const FILE_ICON_MAP: Record<FileFormat, string> = {
  DOCX: "file-word",
  PDF: "file-pdf",
  XLSX: "file-excel",
  PPTX: "file-powerpoint",
};

export const Document: React.FC<DocumentProps> = ({
  title,
  href,
  fileFormat = "DOCX",
  fileSize,
  description,
  external = false,
  ariaLabel,
  className = "",
  ...divProps
}) => {
  const baseClass = "ntgds-document";
  const classes = [baseClass, className].filter(Boolean).join(" ");

  const metaText = fileSize ? `${fileFormat} | ${fileSize}` : fileFormat;
  const iconName = FILE_ICON_MAP[fileFormat];

  return (
    <div className={classes} {...divProps}>
      <div className={`${baseClass}__header`}>
        <div className={`${baseClass}__icon`}> 
          <Icon name={iconName} faStyle="regular" size="lg" ariaLabel={fileFormat} />
        </div>
        <div className={`${baseClass}__content`}>
          <Link
            href={href}
            className={`${baseClass}__title`}
            ariaLabel={ariaLabel || title}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {title}
          </Link>
          <div className={`${baseClass}__meta`}>{metaText}</div>
        </div>
      </div>
      {description && <div className={`${baseClass}__description`}>{description}</div>}
    </div>
  );
};
