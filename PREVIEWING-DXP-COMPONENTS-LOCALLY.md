# Previewing DXP Components Locally

This guide provides comprehensive instructions for previewing and developing Squiz DXP components locally using the `dxp-next` CLI.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Component Architecture](#component-architecture)
- [Development Workflow](#development-workflow)
- [Data Structure](#data-structure)
- [Troubleshooting](#troubleshooting)
- [Integration with Design System](#integration-with-design-system)
- [Deployment](#deployment)

---

## Overview

The NTG Design System includes a **Component Viewer** specifically designed for Squiz DXP integration. This component allows design system components to be previewed and embedded within the Squiz DXP content management platform.

**Key Features:**

- Two-tab interface (Design/Code views)
- Embedded Storybook iframe previews
- Links to Figma, Storybook, and GitHub
- Bootstrap 5.3.8 integration
- Local development server with hot-reload

**Location:** `src/components/component-viewer/dxp/`

---

## Prerequisites

### 1. Install Squiz DXP CLI

```bash
npm install -g @squiz/dxp-cli-next
```

Verify installation:

```bash
dxp-next --version
```

### 2. Verify Component Structure

Ensure your DXP component directory has the required structure:

```
src/components/component-viewer/dxp/
├── manifest.json              # Component configuration (REQUIRED)
├── main.mjs                   # Component logic (REQUIRED)
├── previews/
│   ├── preview.html          # HTML wrapper template
│   └── example.data.json     # Sample input data
└── static/
    ├── default.css           # Component styles
    └── default.js            # Client-side JavaScript
```

**Critical:** The `manifest.json` file is required for the CLI to recognize the component. Without it, you'll see "No components found" errors.

---

## Quick Start

### Starting the Development Server

Navigate to the DXP component directory and start the server:

```bash
# Navigate to component directory
cd src/components/component-viewer/dxp

# Start development server
dxp-next cmp dev-ui .
```

**Expected Output:**

```
2025-12-07T06:05:43.128Z info: Edge Component development webserver started on port http://localhost:5555
2025-12-07T06:05:43.133Z info: UI started on port http://localhost:3000
2025-12-07T06:05:43.147Z info: Watching paths:
2025-12-07T06:05:52.709Z info: Live reload enabled
```

**Open in Browser:**

- **UI:** http://localhost:3000 (Component development interface)
- **Edge Server:** http://localhost:5555 (Component rendering service)

### Preview with Specific Data

To preview with a specific data file:

```bash
# Preview with example.data.json (default)
dxp-next cmp dev-ui . --preview example

# Preview with custom data file
dxp-next cmp dev-ui . --preview button-secondary
```

The `--preview` flag references `.data.json` files in the `previews/` directory (without the `.data.json` extension).

---

## Component Architecture

### File Structure Explained

#### 1. `manifest.json` - Component Configuration

Defines metadata, input schema, and output configuration for the DXP component.

**Key Sections:**

```json
{
  "$schema": "http://localhost:3000/schemas/v1.json",
  "name": "component-viewer",
  "namespace": "ntg-dxp-components",
  "displayName": "Component Viewer",
  "version": "0.0.1",
  "mainFunction": "main",
  "functions": [
    {
      "name": "main",
      "entry": "main.mjs",
      "input": {
        "type": "object",
        "required": [],
        "properties": {
          /* 8 input properties */
        }
      },
      "output": {
        "responseType": "html",
        "staticFiles": [
          {
            "location": "header",
            "file": { "type": "css", "filepath": "default.css" }
          },
          {
            "location": "footer",
            "file": { "type": "js", "filepath": "default.js" }
          }
        ]
      }
    }
  ],
  "previews": {
    "default": {
      "functionData": {
        "main": {
          "inputData": {
            "type": "file",
            "path": "previews/example.data.json"
          },
          "wrapper": {
            "path": "previews/preview.html"
          }
        }
      }
    }
  }
}
```

**Important Fields:**

- `name`: Component identifier (must match directory name)
- `namespace`: Organization namespace
- `functions[].entry`: Path to main component file
- `input.properties`: Defines all configurable inputs
- `output.staticFiles`: CSS/JS files injected into output
- `previews.default`: Default preview configuration

#### 2. `main.mjs` - Component Logic

**⚠️ Critical Note:** This file uses TypeScript syntax but has a `.mjs` extension, which can cause esbuild transformation errors.

**Current Implementation:**

```typescript
export type Input = Partial<{
  componentViewerTabTitleLeft: string;
  componentViewerTabTitleRight: string;
  componentViewerStorybookPreview: string;
  componentViewerCodeBlock: string;
  componentViewerFigmaUrl: string;
  componentViewerStorybookUrl: string;
  componentViewerGitHubUrl: string;
  componentViewerNewTab: string;
}>;

export default async function main(
  input: Input,
  info?: unknown
): Promise<string> {
  return `<div class="container">...</div>`;
}
```

**Known Issue:** The TypeScript type annotations (`input: Input`, `Promise<string>`) cause esbuild errors. If you encounter transformation errors, convert to plain JavaScript:

**Corrected JavaScript Version:**

```javascript
/**
 * @param {Object} input
 * @param {string} [input.componentViewerTabTitleLeft]
 * @param {string} [input.componentViewerTabTitleRight]
 * @param {string} [input.componentViewerStorybookPreview]
 * @param {string} [input.componentViewerCodeBlock]
 * @param {string} [input.componentViewerFigmaUrl]
 * @param {string} [input.componentViewerStorybookUrl]
 * @param {string} [input.componentViewerGitHubUrl]
 * @param {string} [input.componentViewerNewTab]
 * @returns {Promise<string>}
 */
export default async function main(input) {
  return `<div class="container">
    <div class="ntgds-component-viewer mx-auto">
      <!-- Component HTML -->
    </div>
  </div>`;
}
```

**Function Responsibilities:**

- Receives input data object
- Generates HTML string output
- Uses Bootstrap 5.3.8 tabs component
- Embeds Storybook iframe preview
- Renders code block and external links

#### 3. `preview.html` - Preview Template

Wraps the component output with necessary HTML structure and dependencies.

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      rel="stylesheet"
    />
    [component://static-header]
  </head>
  <body>
    [component://output] [component://static-footer]
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

**DXP Directives:**

- `[component://static-header]`: Injects CSS files from `manifest.json`
- `[component://output]`: Injects HTML from `main.mjs` function
- `[component://static-footer]`: Injects JS files from `manifest.json`

#### 4. `example.data.json` - Sample Data

Provides input values for previewing the component.

```json
{
  "componentViewerTabTitleLeft": "Design",
  "componentViewerTabTitleRight": "Code",
  "componentViewerStorybookPreview": "https://ntgovernment.github.io/ntg-design-system/?path=/story/components-button--primary",
  "componentViewerCodeBlock": "https://ntgovernment.github.io/ntg-design-system/?path=/story/components-button--primary",
  "componentViewerFigmaUrl": "https://www.figma.com/file/xyz123/Design-System?node-id=0%3A1",
  "componentViewerStorybookUrl": "https://github.com/ntgovernment/ntg-design-system",
  "componentViewerGitHubUrl": "https://github.com/ntgovernment/ntg-design-system",
  "componentViewerNewTab": "true"
}
```

**All fields are optional** (no `required` fields in `manifest.json`).

#### 5. `default.css` - Component Styles

Defines component-specific styling with design tokens.

**Key Classes:**

```css
.ntgds-component-viewer {
  max-width: 920px;
  margin: 0 auto;
}

.preview-frame {
  border: 2px solid #e1e1e1;
  border-radius: 12px;
  background: white;
}

.preview-body {
  min-height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.link-bar {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
}
```

#### 6. `default.js` - Client-Side JavaScript

Currently empty, but can be used for additional interactivity:

```javascript
// Client-side JavaScript goes here
// Example: Tab switching, iframe resizing, etc.
```

---

## Development Workflow

### 1. Making Changes

**Edit Component Logic:**

```bash
# Edit main.mjs
code src/components/component-viewer/dxp/main.mjs
```

**Edit Styles:**

```bash
# Edit default.css
code src/components/component-viewer/dxp/static/default.css
```

**Edit Data:**

```bash
# Edit example.data.json
code src/components/component-viewer/dxp/previews/example.data.json
```

### 2. Live Reload

The development server watches for file changes and automatically reloads:

- **`main.mjs`**: Component re-renders
- **`default.css`**: Styles hot-reload
- **`example.data.json`**: Preview updates
- **`preview.html`**: Template refreshes

**Console Output:**

```
2025-12-07T06:05:52.709Z info: Live reload enabled
```

### 3. Testing Different Scenarios

Create multiple data files for different use cases:

```bash
# Create data files
touch src/components/component-viewer/dxp/previews/accordion.data.json
touch src/components/component-viewer/dxp/previews/button-secondary.data.json
touch src/components/component-viewer/dxp/previews/form-input.data.json
```

**Example: `accordion.data.json`**

```json
{
  "componentViewerTabTitleLeft": "Accordion Design",
  "componentViewerTabTitleRight": "Accordion Code",
  "componentViewerStorybookPreview": "https://ntgovernment.github.io/ntg-design-system/?path=/story/components-accordion--default",
  "componentViewerCodeBlock": "<details class=\"ntgds-accordion\">...</details>",
  "componentViewerFigmaUrl": "https://www.figma.com/file/xyz123/Accordion",
  "componentViewerStorybookUrl": "https://ntgovernment.github.io/ntg-design-system/?path=/docs/components-accordion--docs",
  "componentViewerGitHubUrl": "https://github.com/ntgovernment/ntg-design-system/tree/main/src/components/accordion",
  "componentViewerNewTab": "true"
}
```

**Preview the new data:**

```bash
dxp-next cmp dev-ui . --preview accordion
```

### 4. Debugging

**Enable Verbose Logging:**

```bash
dxp-next cmp dev-ui . --verbose
```

**Check Component Output:**

Visit `http://localhost:5555/render/component-viewer/main` to see raw HTML output without the wrapper.

**Inspect DXP Directives:**

Check the browser's View Source to verify directives are replaced correctly:

- `[component://static-header]` → CSS link tags
- `[component://output]` → Component HTML
- `[component://static-footer]` → JS script tags

---

## Data Structure

### Input Properties

The component accepts 8 optional string properties:

| Property                          | Type     | Description             | Example                            |
| --------------------------------- | -------- | ----------------------- | ---------------------------------- |
| `componentViewerTabTitleLeft`     | `string` | Left tab title          | `"Design"`                         |
| `componentViewerTabTitleRight`    | `string` | Right tab title         | `"Code"`                           |
| `componentViewerStorybookPreview` | `string` | Storybook iframe URL    | `"https://.../?path=/story/..."`   |
| `componentViewerCodeBlock`        | `string` | Code snippet to display | `"<button>...</button>"`           |
| `componentViewerFigmaUrl`         | `string` | Figma project URL       | `"https://www.figma.com/file/..."` |
| `componentViewerStorybookUrl`     | `string` | Storybook external URL  | `"https://github.com/..."`         |
| `componentViewerGitHubUrl`        | `string` | GitHub repo URL         | `"https://github.com/..."`         |
| `componentViewerNewTab`           | `string` | New tab URL             | Any URL string                     |

### Property Naming Convention

All properties follow the `componentViewer[PascalCase]` pattern:

- Prefix: `componentViewer`
- Suffix: PascalCase descriptor (e.g., `TabTitleLeft`, `FigmaUrl`)

### Creating Custom Data Files

**Template:**

```json
{
  "componentViewerTabTitleLeft": "",
  "componentViewerTabTitleRight": "",
  "componentViewerStorybookPreview": "",
  "componentViewerCodeBlock": "",
  "componentViewerFigmaUrl": "",
  "componentViewerStorybookUrl": "",
  "componentViewerGitHubUrl": "",
  "componentViewerNewTab": ""
}
```

**Best Practices:**

- Use descriptive file names: `[component-name].data.json`
- Include all properties (even if empty) for consistency
- Use absolute URLs for all external links
- Ensure Storybook URLs use the `?path=/story/...` format

---

## Troubleshooting

### Common Errors and Solutions

#### 1. Path Duplication Error

**Error:**

```
Error: ENOENT: no such file or directory, scandir 'C:\Projects\ntg-design-system\src\components\component-viewer\dxp\src\components\component-viewer\dxp'
```

**Cause:** Providing the full path when already in the component directory.

**Solution:**

```bash
# ❌ Wrong (from inside dxp/ directory)
cd src/components/component-viewer/dxp
dxp-next cmp dev-ui src/components/component-viewer/dxp

# ✅ Correct (use dot for current directory)
cd src/components/component-viewer/dxp
dxp-next cmp dev-ui .

# ✅ Or run from project root
cd C:\Projects\ntg-design-system
dxp-next cmp dev-ui src\components\component-viewer\dxp
```

#### 2. No Components Found

**Error:**

```
2025-12-07T06:02:31.660Z error: Error: ENOENT: no such file or directory, scandir '...'
```

**Cause:** Missing `manifest.json` file or incorrect component structure.

**Solution:**

1. Verify `manifest.json` exists in the component directory:

```bash
ls src/components/component-viewer/dxp/manifest.json
```

2. Validate `manifest.json` syntax:

```bash
# Check for JSON syntax errors
cat src/components/component-viewer/dxp/manifest.json | jq .
```

3. Ensure `name` field in `manifest.json` matches directory name:

```json
{
  "name": "component-viewer",  // Must match folder name
  ...
}
```

#### 3. esbuild Transformation Error

**Error:**

```
Error during esbuild transformation: Error: Transform failed with 1 error:
<stdin>:2:7: ERROR: Unexpected "type"
```

**Cause:** TypeScript syntax in `.mjs` file that esbuild cannot parse.

**Solution:**

Convert `main.mjs` from TypeScript to plain JavaScript:

**Before (TypeScript):**

```typescript
export type Input = Partial<{...}>;

export default async function main(input: Input, info?: unknown): Promise<string> {
  // ...
}
```

**After (JavaScript with JSDoc):**

```javascript
/**
 * @typedef {Object} Input
 * @property {string} [componentViewerTabTitleLeft]
 * @property {string} [componentViewerTabTitleRight]
 * // ... other properties
 */

/**
 * @param {Input} input
 * @returns {Promise<string>}
 */
export default async function main(input) {
  // ...
}
```

Or remove types entirely:

```javascript
export default async function main(input) {
  return `<div>...</div>`;
}
```

#### 4. Port Already in Use

**Error:**

```
Error: listen EADDRINUSE: address already in use :::3000
```

**Cause:** Another process is using port 3000 or 5555.

**Solution:**

Option 1: Stop the conflicting process:

```bash
# Find process using port 3000
lsof -i :3000
kill -9 [PID]

# Or on Windows
netstat -ano | findstr :3000
taskkill /PID [PID] /F
```

Option 2: Use different ports:

```bash
dxp-next cmp dev-ui . --port 3001
```

#### 5. Blank Preview Window

**Symptoms:**

- Development server starts successfully
- Browser shows empty page at http://localhost:3000

**Causes & Solutions:**

1. **Check browser console for errors:**

```bash
# Open DevTools (F12) and check Console tab
# Look for JavaScript errors or network failures
```

2. **Verify main function returns valid HTML:**

```javascript
// ❌ Wrong (returns undefined)
export default async function main(input) {
  console.log(input);
}

// ✅ Correct (returns HTML string)
export default async function main(input) {
  return `<div>Hello</div>`;
}
```

3. **Check static file paths:**

Ensure CSS/JS files exist:

```bash
ls src/components/component-viewer/dxp/static/default.css
ls src/components/component-viewer/dxp/static/default.js
```

4. **Validate preview.html syntax:**

```bash
# Check for unclosed tags or syntax errors
cat src/components/component-viewer/dxp/previews/preview.html
```

#### 6. Styles Not Applied

**Symptoms:**

- Component renders but looks unstyled
- Layout is broken or missing colors

**Solutions:**

1. **Verify CSS file is included in manifest.json:**

```json
{
  "output": {
    "staticFiles": [
      {
        "location": "header",
        "file": {
          "type": "css",
          "filepath": "default.css" // Must exist in static/
        }
      }
    ]
  }
}
```

2. **Check CSS file path:**

```bash
# Path should be relative to static/ directory
ls src/components/component-viewer/dxp/static/default.css
```

3. **Inspect browser DevTools:**

- Open Network tab
- Look for failed CSS requests
- Check if `[component://static-header]` was replaced correctly

4. **Bootstrap CDN loading:**

Ensure Bootstrap CSS loads in `preview.html`:

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
```

#### 7. Live Reload Not Working

**Symptoms:**

- File changes don't trigger browser refresh
- Need to manually reload

**Solutions:**

1. **Verify "Live reload enabled" message:**

```
2025-12-07T06:05:52.709Z info: Live reload enabled
```

2. **Check file is in watched paths:**

The CLI should display watched directories:

```
2025-12-07T06:05:43.147Z info: Watching paths:
```

3. **Restart development server:**

```bash
# Ctrl+C to stop
dxp-next cmp dev-ui .
```

4. **Clear browser cache:**

Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

---

## Integration with Design System

### Relationship to Storybook

The DXP Component Viewer is designed to **embed** Storybook components within the Squiz DXP platform:

```
┌─────────────────────────────────────────────────┐
│ Squiz DXP Content Management                    │
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │ Component Viewer (DXP Component)          │ │
│  │                                           │ │
│  │  ┌─────────────────────────────────────┐ │ │
│  │  │ Storybook Iframe Preview            │ │ │
│  │  │ (Design System Component)           │ │ │
│  │  │                                     │ │ │
│  │  │  [Button Component]                 │ │ │
│  │  └─────────────────────────────────────┘ │ │
│  │                                           │ │
│  │  Links: Figma | Storybook | GitHub       │ │
│  └───────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

**Flow:**

1. Design system components are developed in `src/components/`
2. Components are documented in Storybook
3. Storybook is built and deployed to GitHub Pages
4. DXP Component Viewer embeds Storybook iframes
5. Content editors use Component Viewer in Squiz DXP

### Building for DXP Deployment

**Step 1: Build Design System**

```bash
# Build Storybook documentation
npm run build-storybook

# Deploy to GitHub Pages (see main README)
cd /d/Projects/ntg-design-system-gh-pages
# ... sync and push
```

**Step 2: Update Component Viewer Data**

Point to production Storybook URLs:

```json
{
  "componentViewerStorybookPreview": "https://ntgovernment.github.io/ntg-design-system/?path=/story/components-button--primary",
  "componentViewerStorybookUrl": "https://ntgovernment.github.io/ntg-design-system"
}
```

**Step 3: Deploy DXP Component**

(Consult Squiz DXP deployment documentation for your environment)

```bash
# Example: Package component for DXP upload
dxp-next cmp package .
```

### CSS Isolation

The Component Viewer uses:

- **Bootstrap 5.3.8**: For tabs, layout, utilities
- **Bootstrap Icons 1.11.3**: For external link icons
- **Custom CSS**: Minimal styles in `default.css`

**No conflicts with design system** because:

- Design system uses `.ntgds-*` prefixed classes
- Bootstrap is scoped to `.ntgds-component-viewer`
- Storybook content is isolated in iframe

---

## Deployment

### Local Development Checklist

Before deploying to DXP:

- [ ] Component renders without errors in dev server
- [ ] All tabs function correctly (Design/Code switching)
- [ ] Storybook iframe loads content
- [ ] External links work (Figma, Storybook, GitHub)
- [ ] Styles applied correctly
- [ ] No console errors in browser DevTools
- [ ] Live reload works for rapid iteration
- [ ] Multiple preview data files tested

### Pre-Deployment Validation

1. **Build Storybook:**

```bash
npm run build-storybook
```

2. **Test Production URLs:**

Update data files with production Storybook URLs and verify loading.

3. **Validate Accessibility:**

- Keyboard navigation works (Tab, Enter, Shift+Tab)
- Focus indicators visible
- Screen reader compatibility
- ARIA attributes correct

4. **Cross-Browser Testing:**

Test in:

- Chrome/Edge (Chromium)
- Firefox
- Safari (if targeting macOS/iOS)

### DXP Deployment

(Consult your Squiz DXP documentation for specific deployment steps)

**General Process:**

1. **Package Component:**

```bash
dxp-next cmp package src/components/component-viewer/dxp
```

2. **Upload to DXP:**

Use Squiz DXP admin interface to upload packaged component.

3. **Configure in CMS:**

- Add component to page templates
- Configure default input values
- Set up content editor permissions

4. **Test in Production:**

- Create test pages with component
- Verify iframe loading in production
- Check external links resolve correctly

---

## Additional Resources

### Official Documentation

- **Squiz DXP CLI:** https://docs.squiz.net/squiz-dxp/latest/dxp-cli/
- **Component Service Commands:** https://docs.squiz.net/squiz-dxp/latest/dxp-cli/commands/component-service/
- **Dev-UI Command:** https://docs.squiz.net/squiz-dxp/latest/dxp-cli/commands/component-service/dev.html

### Related Files

- **Main README:** `README.md` (design system overview)
- **Component Documentation:** `src/components/*/README.md`
- **Storybook Configuration:** `.storybook/main.ts`

### Getting Help

- **DXP Issues:** Contact Squiz support
- **Design System Issues:** NT Government Digital Services team
- **Storybook Questions:** See Storybook documentation at https://storybook.js.org

---

## Appendix: Command Reference

### Quick Commands

```bash
# Start development server
dxp-next cmp dev-ui .

# Start with specific preview
dxp-next cmp dev-ui . --preview example

# Package component for deployment
dxp-next cmp package .

# View CLI help
dxp-next cmp dev-ui --help

# Check CLI version
dxp-next --version
```

### File Paths (Windows)

```bash
# Component directory
cd C:\Projects\ntg-design-system\src\components\component-viewer\dxp

# Edit files
code main.mjs
code static/default.css
code previews/example.data.json
code manifest.json
```

### Port Defaults

- **UI Server:** http://localhost:3000
- **Edge Server:** http://localhost:5555

---

**Last Updated:** December 7, 2025  
**DXP CLI Version:** @squiz/dxp-cli-next (latest)  
**Design System Version:** See `package.json`
