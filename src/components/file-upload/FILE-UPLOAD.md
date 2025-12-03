# FileUpload Component

A file upload component with drag-and-drop support, file validation, and upload progress tracking. The FileUpload component provides a consistent interface for file selection and management.

## Features

- **Drag and Drop**: Native drag-and-drop file selection
- **File Validation**: Built-in format and size validation with custom validation support
- **Multiple Files**: Support for single or multiple file selection
- **Upload States**: Visual feedback for uploading, success, and error states
- **Validation States**: Supports default, error, and success states for the entire component
- **Helper Text**: Optional helper text and file format/size information
- **Accessibility**: Fully accessible with proper ARIA attributes
- **File List Management**: Display and remove uploaded files

## Usage

```tsx
import { FileUpload } from "./components/file-upload/FileUpload";
import { useState } from "react";

function MyForm() {
  const [files, setFiles] = useState([]);

  const handleFilesSelected = (selectedFiles) => {
    // Handle file selection
    const newFiles = selectedFiles.map((file) => ({
      id: Date.now() + file.name,
      file,
      status: "uploading",
    }));
    setFiles([...files, ...newFiles]);
  };

  const handleFileRemove = (id) => {
    setFiles(files.filter((f) => f.id !== id));
  };

  return (
    <FileUpload
      label="Upload file"
      helperText="Select files to upload"
      acceptedFormats={["jpg", "png", "pdf"]}
      maxFileSize={10 * 1024 * 1024}
      files={files}
      onFilesSelected={handleFilesSelected}
      onFileRemove={handleFileRemove}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | required | The label for the file upload |
| `helperText` | `string` | - | Helper text displayed below the label |
| `successText` | `string` | - | Success message displayed when validationState is 'success' |
| `errorText` | `string` | - | Error message displayed when validationState is 'error' |
| `validationState` | `'default' \| 'error' \| 'success'` | `'default'` | The validation state of the file upload |
| `required` | `boolean` | `false` | Whether the file upload is required |
| `disabled` | `boolean` | `false` | Whether the file upload is disabled |
| `multiple` | `boolean` | `true` | Allow multiple file selection |
| `acceptedFormats` | `string[]` | - | Array of accepted file extensions (e.g., ['jpg', 'png', 'pdf']) |
| `maxFileSize` | `number` | - | Maximum file size in bytes |
| `dragAndDropText` | `string` | `'Drag and drop files or select files to upload'` | Text displayed in the drop zone |
| `selectFilesButtonText` | `string` | `'Select files'` | Text for the file selection button |
| `onFilesSelected` | `(files: File[]) => void` | - | Callback when files are selected |
| `onFileRemove` | `(fileId: string) => void` | - | Callback when a file is removed |
| `onValidate` | `(file: File) => { valid: boolean; errorMessage?: string }` | - | Custom validation function |
| `files` | `UploadedFile[]` | `[]` | Array of uploaded files to display |
| `className` | `string` | `''` | Additional CSS class names |

### UploadedFile Type

```tsx
interface UploadedFile {
  id: string;
  file: File;
  status: "uploading" | "success" | "error";
  errorMessage?: string;
}
```

## Examples

### Basic File Upload

```tsx
<FileUpload
  label="Upload file"
  helperText="Optional helper text"
  acceptedFormats={["jpg", "png", "pdf"]}
  maxFileSize={10 * 1024 * 1024}
/>
```

The component displays:
- Label with optional "(required)" indicator
- Helper text in gray
- Dashed border drop zone with upload icon
- Instructional text for drag and drop
- File format and size information
- Small secondary button for file selection

### Required

```tsx
<FileUpload
  label="Upload file"
  required
  acceptedFormats={["pdf"]}
  maxFileSize={5 * 1024 * 1024}
/>
```

### Single File Upload

```tsx
<FileUpload
  label="Upload document"
  multiple={false}
  acceptedFormats={["pdf"]}
  maxFileSize={10 * 1024 * 1024}
/>
```

### With Validation State

```tsx
<FileUpload
  label="Upload file"
  validationState="error"
  errorText="Please upload at least one file"
  acceptedFormats={["jpg", "png"]}
/>
```

### With Custom Validation

```tsx
<FileUpload
  label="Upload image"
  acceptedFormats={["jpg", "png"]}
  onValidate={(file) => {
    if (file.size > 5 * 1024 * 1024) {
      return {
        valid: false,
        errorMessage: "Image must be less than 5MB",
      };
    }
    return { valid: true };
  }}
/>
```

### Complete Example with State Management

```tsx
function FileUploadExample() {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const handleFilesSelected = (selectedFiles: File[]) => {
    // Add files with uploading status
    const newFiles = selectedFiles.map((file) => ({
      id: `${Date.now()}-${file.name}`,
      file,
      status: "uploading" as const,
    }));

    setFiles([...files, ...newFiles]);

    // Simulate upload process
    newFiles.forEach((newFile) => {
      setTimeout(() => {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === newFile.id
              ? { ...f, status: "success" as const }
              : f
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
      label="Upload files"
      helperText="Drag and drop or click to select files"
      acceptedFormats={["jpg", "png", "pdf"]}
      maxFileSize={10 * 1024 * 1024}
      files={files}
      onFilesSelected={handleFilesSelected}
      onFileRemove={handleFileRemove}
    />
  );
}
```

## Validation

The component supports both built-in and custom validation:

### Built-in Validation

- **Format validation**: Checks file extension against `acceptedFormats`
- **Size validation**: Checks file size against `maxFileSize`

### Custom Validation

Use the `onValidate` prop for custom validation logic:

```tsx
onValidate={(file) => {
  // Your custom validation
  if (/* invalid condition */) {
    return {
      valid: false,
      errorMessage: "Custom error message",
    };
  }
  return { valid: true };
}}
```

## File Status Icons

- **Success**: Green check circle icon
- **Uploading**: Animated rotating spinner icon
- **Error**: Red exclamation circle icon
- **Remove**: X icon button

## States

### Default State
- Dashed gray border (1px)
- White background
- Upload icon centered at top
- Bold instructional text for drag and drop
- Gray file format and size information
- Small secondary button ("Select files") with blue border

### Focus State
- Solid orange border (2px) around drop zone
- Triggered when the "Select files" button receives focus
- Drop zone border changes from dashed to solid

### Drag Over State
- Light gray background
- Solid gray border
- Visual feedback when dragging files over the drop zone

### Disabled State
- Solid gray border (no dashes)
- Light gray background
- Muted text colors
- Button is disabled

### Error State
- Dashed red border
- Light pink background
- Error message with icon below

### Uploading State
- Rotating spinner icon on file items
- Shows progress for individual files

## Accessibility

The FileUpload component follows WCAG 2.1 AA guidelines:

- Proper label association with `aria-labelledby`
- Descriptive messages with `aria-describedby`
- Hidden file input (visually hidden but accessible)
- Keyboard accessible button for file selection
- ARIA labels on remove buttons
- Focus indicators on interactive elements
- Spinner animation respects `prefers-reduced-motion`

## Design Tokens

The component uses the following design tokens:

- `--ntg-colour-neutrals-300`: Border color (#d4d4d2)
- `--ntg-colour-neutrals-white`: Background color (#ffffff)
- `--ntg-colour-neutrals-100`: Drag-over background (#f6f6f6)
- `--ntg-colour-neutrals-200`: Disabled background (#eae9e8)
- `--ntg-colour-neutrals-600`: Disabled text color (#949391)
- `--ntg-colour-neutrals-700`: Helper text color (#777674)
- `--ntg-colour-primary--orange-default`: Focus border color (#e35205)
- `--ntg-colour-status-danger-red-default`: Error color (#a60f37)
- `--ntg-colour-status-danger-red-50`: Error background (#f7e7eb)
- `--ntg-colour-status-success-green-default`: Success color (#107810)
- `--sp-xs`: Small spacing (8px)
- `--sp-md`: Medium spacing (16px)
- `--sp-xl`: Large spacing (24px)

## Button Component

The FileUpload component uses the Button component with the following configuration:
- **Variant**: `secondary` (blue border, white background)
- **Size**: `small` (compact 8px/16px padding, 14px font size)
- **Type**: `button` (prevents form submission)

This ensures consistent styling with the rest of the design system.

## Notes

- The component uses the small secondary Button component for file selection
- The component uses the Icon component for status indicators (upload, check, spinner, xmark, exclamation)
- Drag-and-drop is disabled when the component is disabled
- The file input is visually hidden but accessible to screen readers
- File validation happens on the parent component level via callbacks
- The component is controlled - parent manages file state via `files` prop
- Spinner animation respects `prefers-reduced-motion` for accessibility
- Focus state uses orange border (#e35205) to match design system focus states
- Dashed border changes to solid in disabled, focus, and drag-over states
- Drop zone has 24px padding matching Figma specifications
- File list items have 16px padding with status icons and remove buttons
