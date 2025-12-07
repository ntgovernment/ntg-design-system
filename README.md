# NTG Design System

The official design system for Northern Territory Government digital services, providing a consistent and accessible user experience across all government applications.

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/ntgovernment/ntg-design-system.git
cd ntg-design-system

# Install dependencies
npm install

# Start Storybook development server
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view the component library.

### Font Awesome Setup (Required)

The design system uses Font Awesome 6 for icons. Include it globally in your HTML:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

**Note:** Without Font Awesome, icons in `Button`, `Icon`, `Notification`, and `Pill` components will not display. `Callout` does not use icons and does not require Font Awesome.

### Basic Usage

#### 1. Import Theme and Component Styles

```html
<!-- In your HTML -->
<link rel="stylesheet" href="dist/css/theme-ntg.min.css" />
<link rel="stylesheet" href="dist/css/ntg-design-system-components.min.css" />
```

Or for React/Vite projects:

```typescript
// In your entry file (e.g., main.tsx)
import "ntg-design-system/dist/css/theme-ntg.min.css";
import "ntg-design-system/dist/css/ntg-design-system-components.min.css";
```

#### 2. Use React Components

```tsx
import { Button, Notification, Icon } from "ntg-design-system";

function App() {
  return (
    <>
      <Button variant="primary" iconLeft="download" iconColor="inverse">
        Download Report
      </Button>
      <Notification
        variant="success"
        title="Success"
        message="Your changes have been saved."
      />
      <Icon name="circle-info" size="lg" color="primary" />
    </>
  );
}
```

#### 3. Runtime Enhancement (Optional)

For vanilla HTML/JS projects, initialize runtime enhancements:

```html
<script type="module">
  import NTG from "./dist/ntg-design-system.min.js";
  NTG.initAll(); // Enhances all components with interactive behavior
</script>
```

## Overview

The NTG Design System is a comprehensive library of reusable UI components, design patterns, and guidelines that ensure consistency, accessibility, and quality across NT Government digital properties. Built on modern web standards, it supports both React-based applications and content management systems.

## Key Features

- **Consistent Design Language** - Unified visual style across all NT Government applications
- **Accessibility First** - WCAG compliant components ensuring inclusive digital services
- **Multiple Themes** - Support for NT Government and NTG Central branding
- **Responsive Design** - Mobile-first components that work across all devices
- **CMS Integration** - Seamless integration with Squiz DXP content management platform
- **Living Documentation** - Interactive component library with real-time examples
- **Unified Icon System** - Shared `Icon` component with Font Awesome integration and token-based color variants

## Documentation

Comprehensive documentation and interactive examples are available through the [Component Library](https://ntgovernment.github.io/ntg-design-system), where you can browse and interact with all available components.

### DXP Component Development

The design system includes integration with **Squiz DXP** (Digital Experience Platform) for content management. A dedicated Component Viewer allows design system components to be previewed and embedded within Squiz DXP.

**For local DXP component development**, see the comprehensive guide:

📘 **[Previewing DXP Components Locally](PREVIEWING-DXP-COMPONENTS-LOCALLY.md)**

This guide covers:

- Setting up the dxp-next CLI
- Starting the local development server
- Component architecture and file structure
- Creating custom preview data
- Troubleshooting common errors
- Deployment to Squiz DXP environments

**Quick Start:**

```bash
# Navigate to DXP component directory
cd src/components/component-viewer/dxp

# Start development server
dxp-next cmp dev-ui .

# Open http://localhost:3000 in browser
```

## Available Components

The design system provides a comprehensive component library with full TypeScript support and Storybook documentation. Each component has dedicated documentation in its respective folder.

### Core Components

- **Form Elements**: Button, TextInput, TextArea, Checkbox, CheckboxGroup, RadioButton, RadioGroup, Dropdown, DateInput, DatePicker, FileUpload, SearchBar
- **Navigation**: Header, Footer, Breadcrumbs, Link, Pagination, BackToTopButton, HeroBanner, InPageNavigation
- **Display**: Card, Image, ImageGallery, Document, Table, Tag, Pill, Icon
- **Feedback**: Notification, Callout
- **Layout**: Accordion, QuickExit (safety banner)
- **Utilities**: Scrollbar (custom scrollbar styling)

**Icon System**: All components using icons leverage the `Icon` component which wraps Font Awesome 6. Requires Font Awesome CDN or bundle. See [src/components/icon/ICON.md](src/components/icon/ICON.md).

**For detailed component documentation, props, and usage examples**, refer to individual component folders in `src/components/` or view the [Storybook documentation](https://ntgovernment.github.io/ntg-design-system). Component-specific documentation:

- Footer: [src/components/footer/FOOTER.md](src/components/footer/FOOTER.md)
- Document: [src/components/document/DOCUMENT.md](src/components/document/DOCUMENT.md)
- HeroBanner: [src/components/hero-banner/HEROBANNER.md](src/components/hero-banner/HEROBANNER.md)
- InPageNavigation: [src/components/in-page-navigation/INPAGENAVIGATION.md](src/components/in-page-navigation/INPAGENAVIGATION.md)

## Demo Images

The design system includes optimized demo images for development and testing:

- **Location**: `public/demo-images/` - 12 WEBP images at 2x resolution (~141KB total)
- **Sizes**: Gallery (640×480), Cards (800×400), Details (1300×976)
- **Generation**: Run `python generate-demo-images.py` to regenerate
- **Documentation**: See [public/demo-images/README.md](public/demo-images/README.md)

## Project Structure

```
ntg-design-system/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── accordion/      # Accordion component
│   │   ├── back-to-top-button/ # BackToTopButton fixed position component
│   │   ├── floating-button/ # FloatingButton fixed duplicate action component
│   │   ├── quick-exit/      # QuickExit safety banner component
│   │   ├── button/         # Button component
│   │   │   ├── button.css
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── button.runtime.ts
│   │   │   └── BUTTON.md  # Component documentation
│   │   ├── breadcrumbs/    # Breadcrumbs component with collapsed dropdown
│   │   ├── callout/        # Callout component
│   │   ├── card/           # Card component
│   │   ├── checkbox/       # Checkbox component
│   │   ├── checkbox-group/ # CheckboxGroup component
│   │   ├── date-input/     # DateInput component
│   │   ├── date-picker/    # DatePicker component with custom calendar
│   │   ├── dropdown/       # Dropdown component
│   │   ├── file-upload/    # FileUpload component with drag-and-drop
│   │   ├── icon/           # Icon component (Font Awesome wrapper)
│   │   ├── image/          # Image component
│   │   ├── image-gallery/  # ImageGallery component with lightbox
│   │   ├── in-page-navigation/ # InPageNavigation component for in-page section jumping
│   │   ├── link/           # Link component
│   │   ├── notification/   # Notification component
│   │   ├── pagination/     # Pagination component with ellipsis logic
│   │   ├── pill/           # Pill component
│   │   ├── radio-button/   # RadioButton component
│   │   ├── radio-group/    # RadioGroup component
│   │   ├── scrollbar/      # Scrollbar utility styles
│   │   ├── search-bar/     # SearchBar component
│   │   ├── table/          # Table component
│   │   ├── tag/            # Tag component
│   │   ├── text-input/     # TextInput component
│   │   ├── textarea/       # TextArea component
│   │   └── ...            # Other components
│   ├── themes/             # Brand theme files (CSS @layer architecture)
│   │   ├── layers.css      # Unified @layer declaration
│   │   ├── theme-base.css  # Shared semantic tokens (~60 tokens)
│   │   ├── typography-base.css # Shared typography (96 tokens)
│   │   ├── theme-ntg.css   # NT.GOV.AU theme
│   │   ├── theme-central.css # NTG Central theme
│   │   └── theme-template.css # Template for creating new themes
│   ├── tokens/             # Primitive design tokens (colors, spacing, typography)
│   │   └── ntg-design-system-tokens.css
│   ├── foundations/        # Base styles and resets
│   │   ├── reset.css       # CSS reset
│   │   └── base.css        # Base typography and styles
│   ├── runtime/            # Component initialization
│   │   └── index.ts        # Main entry point, component exports
│   ├── components.css      # Component CSS imports with @layer
│   ├── components.hmr.ts   # Hot module replacement for development
│   └── layers.css          # CSS cascade layer order declaration
├── dist/                   # Production build output
│   ├── css/               # Compiled stylesheets
│   │   ├── theme-ntg.min.css
│   │   ├── theme-central.min.css
│   │   └── ntg-design-system-components.min.css
│   ├── types/             # TypeScript definitions
│   └── ntg-design-system.min.js # IIFE bundle for vanilla JS
├── docs/                   # Published component documentation (Storybook build)
├── .storybook/            # Storybook configuration
│   ├── main.ts            # Storybook main config
│   ├── preview.ts         # Storybook preview config
│   └── preview-head.html  # Font Awesome CDN link
├── package.json           # Dependencies and build scripts
├── vite.config.ts         # Vite build configuration
├── tsconfig.json          # TypeScript configuration
├── postcss.config.cjs     # PostCSS configuration (autoprefixer, presets)
└── README.md              # This file
```

## Architecture Overview

### CSS Cascade Layers

The design system uses CSS `@layer` to ensure predictable cascade order:

```css
/* From src/layers.css */
@layer theme-primitives,  /* Lowest priority */
       semantics,
       typography,
       overrides,
       foundations,
       components; /* Highest priority */
```

**Layer Purposes:**

- `theme-primitives`: Maps brand-specific primitives to generic `--theme-*` tokens
- `semantics`: Shared semantic tokens (colors, spacing, etc.)
- `typography`: Shared typography tokens
- `overrides`: Theme-specific customizations (fonts, radii)
- `foundations`: CSS reset and base styles
- `components`: Component-specific styles

### Token Flow Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│ PRIMITIVES (src/tokens/ntg-design-system-tokens.css)            │
│ --ntg-colour-primary-blue-default: #003f87;                   │
│ --global-spacing-spacing-16: 1rem;                              │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│ THEME-PRIMITIVES (@layer theme-primitives in theme files)       │
│ --theme-colour-primary-blue-default: var(--ntg-colour-...);     │
│ --theme-spacing-md: var(--global-spacing-spacing-16);           │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│ SEMANTICS (@layer semantics in theme-base.css)                  │
│ --clr-action-default: var(--theme-colour-primary-blue-default); │
│ --sp-md: var(--theme-spacing-md);                               │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│ COMPONENTS (@layer components in component CSS files)           │
│ .ntgds-btn {                                                    │
│   background: var(--clr-action-default);                        │
│   padding: var(--sp-md);                                        │
│ }                                                               │
└─────────────────────────────────────────────────────────────────┘
```

**Flow:**

1. **Primitives** define raw values with brand prefixes (e.g., `--ntg-`, `--ntg-central-`)
2. **Theme-Primitives** map these to generic `--theme-*` tokens (abstraction layer)
3. **Semantics** map `--theme-*` to meaningful `--clr-*`, `--sp-*`, `--type-*` tokens
4. **Components** use only semantic tokens for styling

This architecture allows:

- Shared semantic layer across all themes (no duplication)
- Easy theme switching without component changes
- Clear separation of concerns
- Predictable cascade with `@layer`

### Accessible Color Variants

The design system includes **accessible color variants** with an `-ac` suffix to ensure WCAG AA/AAA compliance for improved color contrast. These variants are specifically designed for text/background combinations where standard brand colors may not meet accessibility standards.

**Available Accessible Variants:**

| Token                                                          | Hex Value | Purpose                                   |
| -------------------------------------------------------------- | --------- | ----------------------------------------- |
| `--ntg-colour-new-brand-regional-colours-darwin-ac`            | `#398600` | Accessible Darwin region color            |
| `--ntg-colour-new-brand-regional-colours-top-end-ac`           | `#00819e` | Accessible Top End region color           |
| `--ntg-colour-new-brand-regional-colours-barkly-ac`            | `#d2430f` | Accessible Barkly region color            |
| `--ntg-colour-new-brand-regional-colours-central-australia-ac` | `#e8114b` | Accessible Central Australia region color |
| `--ntg-colour-new-brand-primary-territory-ac`                  | `#d6410a` | Accessible Territory primary color        |
| `--ntg-colour-new-brand-secondary-coastline-ac`                | `#288186` | Accessible Coastline secondary color      |

**When to Use Accessible Variants:**

✅ **Use `-ac` variants when:**

- Applying color to text with light backgrounds
- Creating colored backgrounds with white/light text
- Meeting WCAG AA (4.5:1 contrast) or AAA (7:1 contrast) requirements
- Building components where accessibility is critical (e.g., tags, badges, notifications)

❌ **Use standard variants when:**

- Color is decorative only (not conveying information)
- Sufficient contrast is already guaranteed by semantic tokens
- Component design has been tested for accessibility with standard colors

**Example Usage in Theme Mappings:**

```css
/* In theme files (e.g., theme-ntg.css) */
@layer theme-primitives {
  /* Map accessible variants to theme tokens */
  --theme-colour-regional-darwin: var(
    --ntg-colour-new-brand-regional-colours-darwin-ac
  );
  --theme-colour-regional-top-end: var(
    --ntg-colour-new-brand-regional-colours-top-end-ac
  );
}

@layer semantics {
  /* Use in semantic tokens for components */
  --clr-tag-regional-darwin: var(--theme-colour-regional-darwin);
}
```

**Components Using Accessible Variants:**

The following components are configured to use accessible color variants by default:

- **Tag component**: Regional color variants (tag-3, tag-4, tag-7, tag-8)
- **Future components**: As the design system expands, more components may adopt accessible variants

For detailed WCAG contrast requirements and testing, see [WCAG 2.1 Success Criterion 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

### Build Output

The build process generates:

```bash
npm run build
```

Produces:

```
dist/
├── css/
│   ├── theme-ntg.min.css                    # NT.GOV.AU theme (minified)
│   ├── theme-central.min.css                # NTG Central theme (minified)
│   └── ntg-design-system-components.min.css # All components (minified)
├── types/
│   ├── components/
│   │   ├── button/
│   │   │   └── Button.d.ts                  # TypeScript definitions
│   │   └── ...
│   └── runtime/
│       └── index.d.ts
└── ntg-design-system.min.js                 # IIFE bundle for vanilla JS
```

**Build Configuration:**

- **CSS**: PostCSS with autoprefixer and preset-env (via [`postcss.config.cjs`](postcss.config.cjs))
- **JS/TS**: Vite with IIFE format for global `NTG` namespace (via [`vite.config.ts`](vite.config.ts))
- **Types**: Generated via `vite-plugin-dts` for TypeScript consumers

## Themes

The design system provides officially branded themes:

- **NT Government Theme** - Primary NT Government branding and color palette
- **NTG Central Theme** - NTG Central specific branding and styling

All themes utilize CSS custom properties, enabling consistent application of brand guidelines while maintaining flexibility.

### Creating a New Theme

Follow these steps to create a custom theme for your organization.

#### Architecture Overview

The theme system uses a 4-layer token architecture:

```
┌──────────────────────────────────────────────────────────────────────────┐
│ Layer 1: Primitives (ntg-design-system-tokens.css)                       │
│   └─ Raw values: --ntg-colour-primary-blue-default: #003f87            │
├──────────────────────────────────────────────────────────────────────────┤
│ Layer 2: Theme-Primitives (@layer theme-primitives)                      │
│   └─ Mappings: --theme-colour-primary-blue-default: var(--ntg-colour-...)│
├──────────────────────────────────────────────────────────────────────────┤
│ Layer 3: Semantics (theme-base.css + typography-base.css)                │
│   └─ Semantics: --clr-action-default: var(--theme-colour-...)            │
├──────────────────────────────────────────────────────────────────────────┤
│ Layer 4: Overrides (@layer overrides)                                    │
│   └─ Customizations: --type-font-default, --radii-button                 │
└──────────────────────────────────────────────────────────────────────────┘
```

This architecture allows shared semantic tokens to work across all themes while maintaining brand-specific customizations.

#### Step-by-Step Guide

##### 1. Copy the Theme Template

```bash
cp src/themes/theme-template.css src/themes/theme-yourorg.css
```

##### 2. Define Your Primitive Tokens

First, add your organization's color primitives to [`src/tokens/ntg-design-system-tokens.css`](src/tokens/ntg-design-system-tokens.css):

```css
/* Add your theme's primitives */
:root {
  /* Neutrals */
  --yourorg-colour-neutrals-white: #ffffff;
  --yourorg-colour-neutrals-black: #000000;
  --yourorg-colour-neutrals-100: #f5f5f5;
  /* ... continue for 200-900 */

  /* Primary colors */
  --yourorg-colour-primary-blue-default: #0066cc;
  --yourorg-colour-primary-blue-100: #e6f0ff;
  /* ... continue for 200-900 */

  /* Add orange, secondary, and status colors following the pattern */
}
```

##### 3. Map Theme-Primitive Tokens

In your [`theme-yourorg.css`](src/themes/theme-yourorg.css), replace all `--YOUR-THEME-PREFIX` placeholders:

```css
@layer theme-primitives {
  :root {
    /* Map your primitives to generic --theme-* tokens */
    --theme-colour-neutrals-white: var(--yourorg-colour-neutrals-white);
    --theme-colour-neutrals-black: var(--yourorg-colour-neutrals-black);
    --theme-colour-primary-blue-default: var(
      --yourorg-colour-primary-blue-default
    );
    /* ... complete all required mappings (see template) */
  }
}
```

**Required Mappings:**

- 11 neutral shades (white, black, 100-900)
- 9 primary blue shades (100-900 + default)
- 9 primary orange shades
- 9 secondary accent shades
- 40 status color shades (info, success, warning, danger × 10 each)
- 18 component-specific semantic mappings

##### 4. Customize Overrides (Optional)

Add theme-specific customizations in the overrides layer:

```css
@layer overrides {
  :root {
    /* Typography */
    --type-font-default: "Your Font", system-ui, sans-serif;
    --type-font-alt: "Your Alt Font", Georgia, serif;

    /* Border radii */
    --radii-button: 8px; /* or 0 for square, or "full" for rounded */

    /* Custom tag colors */
    --clr-tag-region1-bg: var(--yourorg-colour-secondary-green-100);
    --clr-tag-region1-text: var(--yourorg-colour-secondary-green-700);
  }
}
```

##### 5. Build the Theme

Add a build script to [`package.json`](package.json):

```json
{
  "scripts": {
    "build:css:theme:yourorg": "postcss src/themes/theme-yourorg.css -o dist/css/theme-yourorg.min.css --env production"
  }
}
```

Then build:

```bash
npm run build:css:theme:yourorg
```

##### 6. Add to Storybook (Optional)

Add your theme to [`.storybook/preview.ts`](.storybook/preview.ts):

```typescript
const THEME_MAP = {
  ntg: "./css/theme-ntg.min.css",
  ntgcentral: "./css/theme-central.min.css",
  yourorg: "./css/theme-yourorg.min.css", // Add this line
} as const;

// Add to toolbar options
toolbars: {
  theme: {
    items: [
      { value: "ntg", title: "NT.GOV.AU" },
      { value: "ntgcentral", title: "NTG Central" },
      { value: "yourorg", title: "Your Organization" }, // Add this
    ],
  },
}
```

##### 7. Verify Your Theme

1. **Check CSS syntax**: Ensure no errors in your theme file
2. **Test all color shades**: Verify buttons, links, status indicators render correctly
3. **Test typography**: Confirm custom fonts load and display properly
4. **Validate accessibility**: Run contrast checks on all text/background combinations
5. **Test interactions**: Hover, focus, active, disabled states for all components

#### Theme Integration Checklist

- [ ] Primitive tokens defined in [`src/tokens/ntg-design-system-tokens.css`](src/tokens/ntg-design-system-tokens.css)
- [ ] Theme file created from [`theme-template.css`](src/themes/theme-template.css)
- [ ] All `--theme-*` mappings completed (no `--YOUR-THEME-PREFIX` remaining)
- [ ] Overrides configured (fonts, radii, custom tokens)
- [ ] Build script added to [`package.json`](package.json)
- [ ] Theme builds without errors (`npm run build:css:theme:yourorg`)
- [ ] Theme added to Storybook toolbar (if using Storybook)
- [ ] Visual testing completed across all components
- [ ] Accessibility testing passed (WCAG 2.1 AA)

For more details, see the comprehensive inline documentation in [`src/themes/theme-template.css`](src/themes/theme-template.css).

## Technology

Built with industry-standard modern web technologies:

- React 19
- TypeScript 5.9
- CSS Custom Properties
- Squiz DXP-Next Integration
- Automated documentation with Storybook

## Adding a New Component

Follow this workflow to add a new component to the design system.

### Component Development Workflow

#### 1. Create Component Folder

Create a new folder in [`src/components/`](src/components/) with your component name in lowercase-hyphenated format:

```bash
mkdir src/components/your-component
cd src/components/your-component
```

#### 2. Create Required Files

Every component needs these four files:

```
src/components/your-component/
├── YourComponent.tsx       # React component
├── your-component.css      # Component styles
├── YourComponent.stories.tsx # Storybook documentation
└── YOUR-COMPONENT.md       # Component documentation (optional)
```

#### 3. Implement the React Component

Create [`YourComponent.tsx`](src/components/your-component/YourComponent.tsx) following this pattern:

```tsx
import React from "react";
import "./your-component.css";

export interface YourComponentProps {
  /** Component variant */
  variant?: "primary" | "secondary";
  /** Component size */
  size?: "small" | "large";
  /** Additional CSS classes */
  className?: string;
  /** Child content */
  children: React.ReactNode;
}

export const YourComponent: React.FC<YourComponentProps> = ({
  variant = "primary",
  size = "large",
  className = "",
  children,
  ...props
}) => {
  const baseClass = "ntgds-your-component";

  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
```

**Key Patterns:**

- Use `ntgds-` prefix for all CSS classes
- Export TypeScript interface for props
- Provide sensible defaults
- Use BEM-style naming: `ntgds-component__element--modifier`
- Spread remaining props for HTML attributes

#### 4. Create Component Styles

Create [`your-component.css`](src/components/your-component/your-component.css) using design tokens:

```css
/* Base component styles */
.ntgds-your-component {
  display: flex;
  padding: var(--sp-md, 1rem);
  gap: var(--sp-sm, 0.75rem);
  background: var(--clr-surface-default, #fff);
  color: var(--clr-text-default, #333);
  border-radius: var(--radii-default, 4px);
  font-family: var(--type-font-default);
  font-size: var(--type-desktop-body-default-size);
}

/* Variant modifiers */
.ntgds-your-component--primary {
  background: var(--clr-action-default, #003f87);
  color: var(--clr-text-inverse, #fff);
}

.ntgds-your-component--secondary {
  background: var(--clr-surface-secondary, #f5f4f2);
  border: 1px solid var(--clr-stroke-subtle, #e6e5e3);
}

/* Size modifiers */
.ntgds-your-component--small {
  padding: var(--sp-xs, 0.5rem) var(--sp-sm, 0.75rem);
  font-size: var(--type-desktop-body-sm-size);
}

/* State modifiers */
.ntgds-your-component:hover {
  background: var(--clr-action-hover, #004a9e);
}

.ntgds-your-component:focus {
  outline: 2px solid var(--clr-focus-focus, #107cc0);
  outline-offset: 2px;
}
```

**Token Categories:**

- `--sp-*`: Spacing (xs, sm, md, lg, xl, xxl, xxxl)
- `--clr-*`: Colors (action, surface, text, stroke, status, etc.)
- `--type-*`: Typography (font families, sizes, weights)
- `--radii-*`: Border radius values
- `--border-width-*`: Border widths

See [`src/themes/theme-base.css`](src/themes/theme-base.css) for all available semantic tokens.

#### 5. Create Storybook Stories

Create [`YourComponent.stories.tsx`](src/components/your-component/YourComponent.stories.tsx):

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { YourComponent } from "./YourComponent";

const meta = {
  title: "Components/YourComponent",
  component: YourComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["small", "large"],
      description: "Component size",
    },
  },
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Component",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Component",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Component",
  },
};
```

#### 6. Export from Runtime

Add your component to [`src/runtime/index.ts`](src/runtime/index.ts):

```typescript
// React components
export { YourComponent } from "../components/your-component/YourComponent";
```

#### 7. Import CSS in Component Stylesheet

Add your component CSS to [`src/components.css`](src/components.css):

```css
@import "./components/your-component/your-component.css" layer(components);
```

**Important:** Add the `layer(components)` directive to ensure proper CSS cascade order.

#### 8. Build and Test

```bash
# Start Storybook to see your component
npm run storybook

# Build the component library
npm run build

# Verify TypeScript types are generated
ls dist/types/components/your-component/
```

#### 9. Create Runtime Enhancement (Optional)

If your component needs JavaScript interactivity beyond React, create [`your-component.runtime.ts`](src/components/your-component/your-component.runtime.ts):

```typescript
export function enhanceYourComponents(root: ParentNode = document) {
  for (const el of root.querySelectorAll<HTMLElement>(
    ".ntgds-your-component"
  )) {
    if ((el as any)._dsEnhanced) continue;
    (el as any)._dsEnhanced = true;

    // Add event listeners or initialize behavior
    el.addEventListener("click", () => {
      console.log("Component clicked");
    });
  }
}
```

Then add to [`src/runtime/index.ts`](src/runtime/index.ts):

```typescript
import { enhanceYourComponents } from "../components/your-component/your-component.runtime";

function initAll(root: ParentNode = document) {
  enhanceButtons(root);
  enhanceYourComponents(root); // Add this
}

export const components = {
  button: { enhanceButtons },
  yourComponent: { enhanceYourComponents }, // Add this
};
```

### Component Development Checklist

- [ ] Folder created in [`src/components/your-component/`](src/components/)
- [ ] `YourComponent.tsx` implemented with TypeScript interface
- [ ] `your-component.css` created using design tokens
- [ ] `YourComponent.stories.tsx` created with multiple variants
- [ ] Component exported from [`src/runtime/index.ts`](src/runtime/index.ts)
- [ ] CSS imported in [`src/components.css`](src/components.css) with `layer(components)`
- [ ] Component appears in Storybook (`npm run storybook`)
- [ ] Build succeeds without errors (`npm run build`)
- [ ] TypeScript types generated in `dist/types/`
- [ ] Component follows naming conventions (BEM, `ntgds-` prefix)
- [ ] Uses semantic design tokens (not hardcoded values)
- [ ] Accessibility tested (keyboard nav, screen readers, ARIA)
- [ ] Documentation added to component `.md` file (optional)

### Reference Implementation

See the [`Button`](src/components/button/Button.tsx) component as a reference implementation:

- [`Button.tsx`](src/components/button/Button.tsx) - Component implementation
- [`button.css`](src/components/button/button.css) - Styles with design tokens
- [`Button.stories.tsx`](src/components/button/Button.stories.tsx) - Storybook documentation
- [`button.runtime.ts`](src/components/button/button.runtime.ts) - Runtime enhancements
- [`BUTTON.md`](src/components/button/BUTTON.md) - Detailed documentation

## Getting Started

For implementation instructions and best practices, please refer to the technical documentation available through the component library.

For general inquiries about the design system, please contact the NT Government Digital Services team.

## Development Commands

### Installation

```bash
npm install
```

Installs all dependencies including React 19, TypeScript, Vite, Storybook, and PostCSS.

### Development

```bash
npm run storybook
```

Starts Storybook development server at [http://localhost:6006](http://localhost:6006).

**Features:**

- Live component preview with interactive controls
- Hot module replacement (HMR) via [`src/components.hmr.ts`](src/components.hmr.ts)
- Theme switcher toolbar
- Accessibility checks (a11y addon)
- Auto-generated documentation from TypeScript props

### Building

#### Build All

```bash
npm run build
```

Builds both JavaScript and CSS for production. Output goes to [`dist/`](dist/).

#### Build JavaScript Only

```bash
npm run build:js
```

Builds TypeScript to IIFE bundle:

- Input: [`src/runtime/index.ts`](src/runtime/index.ts)
- Output: `dist/ntg-design-system.min.js`
- Format: IIFE (Immediately Invoked Function Expression)
- Global: `window.NTG`

#### Build CSS Only

```bash
npm run build:css
```

Builds all themes and component styles via PostCSS.

#### Build Individual Themes

```bash
npm run build:css:theme:ntg        # NT.GOV.AU theme
npm run build:css:theme:central    # NTG Central theme
npm run build:css:components       # Component styles
```

Each command:

1. Processes CSS with [`postcss.config.cjs`](postcss.config.cjs)
2. Applies autoprefixer for browser compatibility
3. Minifies output
4. Outputs to `dist/css/`

### Documentation

#### Build Storybook

```bash
npm run build-storybook
```

Builds static Storybook site to [`docs/`](docs/) folder. This is used for GitHub Pages deployment.

**Process:**

1. Runs `npm run build` to generate CSS/JS
2. Builds Storybook with production config
3. Copies built assets to `docs/` folder
4. Includes Font Awesome CDN in output

#### Publishing to GitHub Pages

The design system uses a git worktree for GitHub Pages deployment, keeping the `gh-pages` branch separate from your working directory.

**One-Time Setup:**

```bash
# Create gh-pages worktree (only needed once)
git worktree add /d/Projects/ntg-design-system-gh-pages gh-pages
```

This creates a separate directory at `/d/Projects/ntg-design-system-gh-pages` that tracks the `gh-pages` branch.

**Publishing Updates:**

After making changes to components and building Storybook:

```bash
# 1. Build Storybook documentation
npm run build-storybook

# 2. Navigate to gh-pages worktree
cd /d/Projects/ntg-design-system-gh-pages

# 3. Clear old files (preserving .git)
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# 4. Copy new build from main project
cp -r /d/Projects/ntg-design-system/docs/. .

# 5. Stage all changes
git add -A

# 6. Commit with descriptive message
git commit -m "Update Storybook documentation"

# 7. Push to GitHub Pages
git push origin gh-pages

# 8. Return to main project
cd /d/Projects/ntg-design-system
```

**Simplified One-Liner (after building):**

```bash
cd /d/Projects/ntg-design-system-gh-pages && \
  find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} + && \
  cp -r /d/Projects/ntg-design-system/docs/. . && \
  git add -A && \
  git commit -m "Update Storybook documentation" && \
  git push origin gh-pages && \
  cd /d/Projects/ntg-design-system
```

**What This Does:**

1. **Worktree Benefits**: Keeps `gh-pages` branch isolated, no need to switch branches in your main working directory
2. **Clean Sync**: Removes old files (except `.git`) to ensure a clean deployment
3. **Preserves History**: Git worktree maintains full commit history on `gh-pages` branch
4. **Live Updates**: Changes appear at `https://ntgovernment.github.io/ntg-design-system` within minutes

**Checking Worktree Status:**

```bash
# List all worktrees
git worktree list

# View gh-pages branch status
cd /d/Projects/ntg-design-system-gh-pages
git status
git log --oneline -5
```

**Removing Worktree (if needed):**

```bash
# Remove worktree and delete the directory
git worktree remove /d/Projects/ntg-design-system-gh-pages
```

**Troubleshooting:**

- **"Worktree already exists"**: The worktree was previously created. Navigate to the directory: `cd /d/Projects/ntg-design-system-gh-pages`
- **"No such directory"**: Worktree was removed. Recreate with: `git worktree add /d/Projects/ntg-design-system-gh-pages gh-pages`
- **Push rejected**: Pull latest changes first: `cd /d/Projects/ntg-design-system-gh-pages && git pull && git push origin gh-pages`
- **Changes not appearing**: GitHub Pages can take 1-2 minutes to rebuild. Check repository Settings → Pages for build status

### File Watching

Vite automatically watches files when running `npm run storybook`:

- TypeScript files: [`src/**/*.ts`](src/), [`src/**/*.tsx`](src/)
- CSS files: [`src/**/*.css`](src/)
- Story files: [`src/**/*.stories.tsx`](src/)

Changes trigger instant HMR updates without full page reload.

### Output Structure

After `npm run build`, you'll have:

```
dist/
├── css/
│   ├── theme-ntg.min.css                    # 15-20KB (minified)
│   ├── theme-central.min.css                # 15-20KB (minified)
│   └── ntg-design-system-components.min.css # 10-15KB (minified)
├── types/                                    # TypeScript definitions
│   ├── components/
│   └── runtime/
└── ntg-design-system.min.js                 # 5-10KB (minified)
```

### Environment Variables

No environment variables required. All configuration is in:

- [`vite.config.ts`](vite.config.ts) - Vite build settings
- [`tsconfig.json`](tsconfig.json) - TypeScript compiler options
- [`postcss.config.cjs`](postcss.config.cjs) - CSS processing
- [`.storybook/main.ts`](.storybook/main.ts) - Storybook configuration

### Troubleshooting

**Issue: Icons not appearing in Storybook**

- Ensure [`.storybook/preview-head.html`](.storybook/preview-head.html) includes Font Awesome CDN link
- Check browser console for Font Awesome loading errors

**Issue: Theme not applying in Storybook**

- Verify theme is built: `npm run build:css:theme:yourorg`
- Check theme is added to `THEME_MAP` in [`.storybook/preview.ts`](.storybook/preview.ts)
- Use Storybook toolbar to select theme

**Issue: TypeScript errors in components**

- Run `npm install` to ensure all type definitions are installed
- Check [`tsconfig.json`](tsconfig.json) includes your source files
- Restart TypeScript server in VS Code: Cmd/Ctrl+Shift+P → "TypeScript: Restart TS Server"

**Issue: CSS changes not reflecting**

- Ensure CSS is imported in [`src/components.css`](src/components.css) with `layer(components)`
- Check file is being watched by Vite (should see in terminal output)
- Hard refresh browser: Cmd/Ctrl+Shift+R

**Issue: Build fails with PostCSS errors**

- Verify all `@import` paths are correct
- Check for CSS syntax errors
- Ensure [`postcss.config.cjs`](postcss.config.cjs) has all required plugins installed

## Contributing

This is an official NT Government project. Contributions are managed through internal processes. External parties interested in contributing should contact the design system team.

## License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

## Support

For technical support and questions:

- Explore the [Component Library](https://ntgovernment.github.io/ntg-design-system)
- Contact NT Government Digital Services

---

**© Northern Territory Government**
