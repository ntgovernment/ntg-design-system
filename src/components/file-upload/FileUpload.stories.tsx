import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload, UploadedFile } from "./FileUpload";
import { useState } from "react";

const meta: Meta<typeof FileUpload> = {
  title: "Components/FileUpload",
  component: FileUpload,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label for the file upload",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the label",
    },
    successText: {
      control: "text",
      description: "Success message displayed when validationState is 'success'",
    },
    errorText: {
      control: "text",
      description: "Error message displayed when validationState is 'error'",
    },
    validationState: {
      control: "select",
      options: ["default", "error", "success"],
      description: "The validation state of the file upload",
    },
    required: {
      control: "boolean",
      description: "Whether the file upload is required",
    },
    disabled: {
      control: "boolean",
      description: "Whether the file upload is disabled",
    },
    multiple: {
      control: "boolean",
      description: "Allow multiple file selection",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    label: "Upload file",
    helperText: "Optional helper text",
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024, // 10MB
  },
};

export const Required: Story = {
  args: {
    label: "Upload file",
    helperText: "This field is required",
    required: true,
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024,
  },
};

export const WithError: Story = {
  args: {
    label: "Upload file",
    validationState: "error",
    errorText: "Error message goes here",
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024,
  },
};

export const WithSuccess: Story = {
  args: {
    label: "Upload file",
    validationState: "success",
    successText: "Files uploaded successfully",
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024,
  },
};

export const Disabled: Story = {
  args: {
    label: "Upload file",
    helperText: "File upload is currently disabled",
    disabled: true,
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024,
  },
};

export const SingleFile: Story = {
  args: {
    label: "Upload file",
    helperText: "Select a single file",
    multiple: false,
    acceptedFormats: ["pdf"],
    maxFileSize: 5 * 1024 * 1024, // 5MB
  },
};

export const WithUploadedFiles: Story = {
  render: (args) => {
    const [files, setFiles] = useState<UploadedFile[]>([
      {
        id: "1",
        file: new File([""], "Filename.pdf", { type: "application/pdf" }),
        status: "success",
      },
      {
        id: "2",
        file: new File([""], "Filename.pdf", { type: "application/pdf" }),
        status: "success",
      },
    ]);

    return (
      <FileUpload
        {...args}
        files={files}
        onFileRemove={(id) => {
          setFiles(files.filter((f) => f.id !== id));
        }}
      />
    );
  },
  args: {
    label: "Upload file",
    helperText: "Optional helper text",
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024,
  },
};

export const WithUploadingFile: Story = {
  args: {
    label: "Upload file",
    helperText: "Optional helper text",
    files: [
      {
        id: "1",
        file: new File([""], "Filename.pdf", { type: "application/pdf" }),
        status: "uploading",
      },
    ],
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024,
  },
};

export const WithErrorFile: Story = {
  args: {
    label: "Upload file",
    helperText: "Optional helper text",
    files: [
      {
        id: "1",
        file: new File([""], "Filename.pdf", { type: "application/pdf" }),
        status: "error",
        errorMessage: "File must be less than 10MB",
      },
    ],
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024,
  },
};

export const WithMultipleFileStates: Story = {
  args: {
    label: "Upload file",
    helperText: "Optional helper text",
    files: [
      {
        id: "1",
        file: new File([""], "Filename.pdf", { type: "application/pdf" }),
        status: "success",
      },
      {
        id: "2",
        file: new File([""], "Filename.pdf", { type: "application/pdf" }),
        status: "success",
      },
      {
        id: "3",
        file: new File([""], "Filename.pdf", { type: "application/pdf" }),
        status: "uploading",
      },
      {
        id: "4",
        file: new File([""], "Filename.pdf", { type: "application/pdf" }),
        status: "error",
        errorMessage: "File must be less than 10MB",
      },
    ],
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [files, setFiles] = useState<UploadedFile[]>([]);

    const handleFilesSelected = (selectedFiles: File[]) => {
      const newFiles: UploadedFile[] = selectedFiles.map((file) => ({
        id: `${Date.now()}-${file.name}`,
        file,
        status: "uploading" as const,
      }));

      setFiles([...files, ...newFiles]);

      // Simulate upload
      newFiles.forEach((newFile) => {
        setTimeout(() => {
          setFiles((prev) =>
            prev.map((f) =>
              f.id === newFile.id ? { ...f, status: "success" as const } : f
            )
          );
        }, 2000);
      });
    };

    const handleFileRemove = (id: string) => {
      setFiles(files.filter((f) => f.id !== id));
    };

    return (
      <FileUpload
        {...args}
        files={files}
        onFilesSelected={handleFilesSelected}
        onFileRemove={handleFileRemove}
      />
    );
  },
  args: {
    label: "Upload file",
    helperText: "Try dragging and dropping files or clicking to select",
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024,
  },
};
