import React, { useState, useRef, useCallback } from "react";
import "./file-upload.css";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

export type FileStatus = "uploading" | "success" | "error";

export interface UploadedFile {
  id: string;
  file: File;
  status: FileStatus;
  errorMessage?: string;
}

export interface FileUploadProps {
  label: string;
  helperText?: string;
  successText?: string;
  errorText?: string;
  validationState?: "default" | "error" | "success";
  required?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  acceptedFormats?: string[];
  maxFileSize?: number;
  dragAndDropText?: string;
  selectFilesButtonText?: string;
  onFilesSelected?: (files: File[]) => void;
  onFileRemove?: (fileId: string) => void;
  onValidate?: (file: File) => { valid: boolean; errorMessage?: string };
  files?: UploadedFile[];
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  helperText,
  successText,
  errorText,
  validationState = "default",
  required = false,
  disabled = false,
  multiple = true,
  acceptedFormats,
  maxFileSize,
  dragAndDropText = "Drag and drop files or select files to upload",
  selectFilesButtonText = "Select files",
  onFilesSelected,
  onFileRemove,
  onValidate,
  files = [],
  className = "",
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const baseClass = "ntgds-file-upload";
  const containerClass = `${baseClass} ${
    disabled ? `${baseClass}--disabled` : ""
  } ${validationState !== "default" ? `${baseClass}--${validationState}` : ""} ${className}`.trim();

  const showHelperText = helperText && validationState === "default";
  const showSuccessText = successText && validationState === "success";
  const showErrorText = errorText && validationState === "error";

  const labelId = `${baseClass}-label`;
  const messageId = `${baseClass}-message`;

  // Built-in validation
  const validateFile = useCallback(
    (file: File): { valid: boolean; errorMessage?: string } => {
      // Custom validation takes precedence
      if (onValidate) {
        return onValidate(file);
      }

      // Built-in format validation
      if (acceptedFormats && acceptedFormats.length > 0) {
        const fileExtension = file.name.split(".").pop()?.toLowerCase();
        if (!fileExtension || !acceptedFormats.includes(fileExtension)) {
          return {
            valid: false,
            errorMessage: `File format not supported. Accepted formats: ${acceptedFormats.join(", ")}`,
          };
        }
      }

      // Built-in size validation
      if (maxFileSize && file.size > maxFileSize) {
        const sizeMB = (maxFileSize / (1024 * 1024)).toFixed(0);
        return {
          valid: false,
          errorMessage: `File must be less than ${sizeMB}MB`,
        };
      }

      return { valid: true };
    },
    [acceptedFormats, maxFileSize, onValidate]
  );

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0 || disabled) return;

      const selectedFiles = Array.from(fileList);
      
      if (onFilesSelected) {
        onFilesSelected(selectedFiles);
      }
    },
    [disabled, onFilesSelected]
  );

  const handleSelectClick = () => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    // Reset input so the same file can be selected again
    e.target.value = "";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (!disabled) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleRemoveFile = (fileId: string) => {
    if (onFileRemove) {
      onFileRemove(fileId);
    }
  };

  const getAcceptString = () => {
    if (!acceptedFormats || acceptedFormats.length === 0) return undefined;
    return acceptedFormats.map((format) => `.${format}`).join(",");
  };

  const getFileUploadInfo = () => {
    const info = [];
    if (acceptedFormats && acceptedFormats.length > 0) {
      info.push(`Supported file formats: ${acceptedFormats.join(", ")}`);
    }
    if (maxFileSize) {
      const sizeMB = (maxFileSize / (1024 * 1024)).toFixed(0);
      info.push(`Max file size is ${sizeMB}MB`);
    }
    return info;
  };

  const fileUploadInfo = getFileUploadInfo();

  return (
    <div className={containerClass}>
      <label id={labelId} className={`${baseClass}__label`}>
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

      <div
        className={`${baseClass}__drop-zone ${isDragging ? `${baseClass}__drop-zone--dragging` : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        aria-labelledby={labelId}
        aria-describedby={
          showHelperText || showSuccessText || showErrorText
            ? messageId
            : undefined
        }
      >
        <Icon name="upload" size="md" />
        
        <div className={`${baseClass}__description`}>
          <p className={`${baseClass}__drag-text`}>{dragAndDropText}</p>
          {fileUploadInfo.length > 0 && (
            <div className={`${baseClass}__info`}>
              {fileUploadInfo.map((info, index) => (
                <p key={index} className={`${baseClass}__info-text`}>
                  {info}
                </p>
              ))}
            </div>
          )}
        </div>

        <Button
          variant="secondary"
          size="small"
          onClick={handleSelectClick}
          disabled={disabled}
          type="button"
        >
          {selectFilesButtonText}
        </Button>

        <input
          ref={fileInputRef}
          type="file"
          className={`${baseClass}__input`}
          onChange={handleFileInputChange}
          multiple={multiple}
          accept={getAcceptString()}
          disabled={disabled}
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>

      {files.length > 0 && (
        <div className={`${baseClass}__file-list`}>
          {files.map((uploadedFile) => {
            const hasError = uploadedFile.status === "error";
            return (
              <div
                key={uploadedFile.id}
                className={`${baseClass}__file-item ${hasError ? `${baseClass}__file-item--error` : ""}`}
              >
                <div className={`${baseClass}__file-content`}>
                  <div className={`${baseClass}__file-info`}>
                    {uploadedFile.status === "success" && (
                      <Icon name="circle-check" size="sm" />
                    )}
                    {uploadedFile.status === "uploading" && (
                      <span className={`${baseClass}__spinner`}>
                        <Icon name="spinner" size="sm" />
                      </span>
                    )}
                    {uploadedFile.status === "error" && (
                      <Icon name="circle-exclamation" size="sm" />
                    )}
                    <span className={`${baseClass}__file-name`}>
                      {uploadedFile.file.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    className={`${baseClass}__remove-btn`}
                    onClick={() => handleRemoveFile(uploadedFile.id)}
                    aria-label={`Remove ${uploadedFile.file.name}`}
                  >
                    <Icon name="xmark" size="sm" />
                  </button>
                </div>
                {hasError && uploadedFile.errorMessage && (
                  <div className={`${baseClass}__file-error`}>
                    <p className={`${baseClass}__file-error-text`}>
                      {uploadedFile.errorMessage}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
