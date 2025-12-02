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

## Icon System Overview

The design system provides a single `Icon` React component that standardises Font Awesome usage:

- Pass a plain name (e.g. `"floppy-disk"`, `"arrow-right"`) instead of full FA class strings.
- Components like `Button`, `Notification`, and `Pill` internally render `<Icon />` for consistent sizing and theming.
- Color variants (`default`, `primary`, `secondary`, `tertiary`, `inverse`) map to semantic tokens; Notification icons use variant-driven CSS rather than a prop.
- Include Font Awesome 6 globally (CDN or bundled) for glyphs to display; without it, fallback square placeholders appear only when a name is not provided.

**Note:** Not all components use icons. `Callout` is a text-only informational component that does not support icons.

CDN example:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

Sample Button with icons:

```tsx
<Button iconLeft="download" iconRight="arrow-right" iconColor="inverse">
  Export Data
</Button>
```

## Scrollbar Component & Design System Integration

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System?node-id=2630-34&m=dev)

The NTG Design System provides a comprehensive, theme-aware scrollbar solution for scrollable panels, textareas, dropdowns, and lists. Scrollbars are styled using semantic tokens and a utility class, ensuring visual consistency and accessibility across supported browsers.

### Usage

- Apply `.ntgds-scrollable` to any scrollable element (e.g. `<textarea>`, `<div>`, `<ul>`).
- For larger hit area, add `.ntgds-scrollable--accessible`.
- Example:
  ```html
  <textarea class="ntgds-scrollable" rows="8"></textarea>
  <div class="ntgds-scrollable" style="max-height:240px">
    <ul>
      ...
    </ul>
  </div>
  <div class="ntgds-scrollable ntgds-scrollable--accessible">...</div>
  ```

### Tokens

Tokens are defined in `src/themes/theme-base.css` and are theme-aware:

- `--scrollbar-width`: visual thumb/track width (`4px`)
- `--scrollbar-track-bg`: track background (`#949391` fallback)
- `--scrollbar-track-hover-bg`: track hover (`#3B3B3A` fallback)
- `--scrollbar-thumb-bg`: thumb color (`#949391` fallback)
- `--scrollbar-thumb-hover-bg`: thumb hover (`#3B3B3A` fallback)
- `--scrollbar-endcap-bg`: optional endcap color (`#949391` fallback)
- `--scrollbar-gutter-hitbox`: accessible hitbox width (`12px`)
- `--scrollbar-radius`: thumb border radius (`0` for square corners)

### Accessibility

- Always associate scrollable form fields (e.g. `<textarea>`) with a `<label>` using `htmlFor` and `id`.
- Accessible variant (`--accessible`) increases the interactive area for users with motor impairments.
- High Contrast mode is supported via `forced-colors` media query.

### Limitations

- Native `<select>` dropdowns cannot be styled; use custom panels for full control.
- Mobile/iOS and overlay scrollbars may ignore styling.
- Decorative endcaps (per Figma) are not implemented via CSS pseudo-elements; use absolute elements if pixel-perfect fidelity is required.

### Storybook Examples

See `Scrollbars.stories.tsx` for live demos of textarea, long list, and dropdown panel scrollbars.

### Changelog

- v1.0.0: Initial implementation with semantic tokens, utility classes, accessible variant, and Storybook demos.

## Accordion Component

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System?node-id=2064-805&m=dev)

The Accordion component provides collapsible content sections with accessible keyboard navigation and customizable expansion behavior. It's ideal for FAQs, grouped content, settings panels, and any interface requiring progressive disclosure.

### Features

- **Single or Multiple Expansion** - Control whether one or multiple items can be open simultaneously
- **Toggle All Control** - Optional "Open all" / "Close all" button for batch operations
- **Default Open State** - Configure which items are expanded on initial render
- **Accessible** - Full ARIA support with proper roles, states, and keyboard navigation
- **Smooth Animations** - Chevron rotation and focus transitions with reduced-motion support
- **Token-Based Styling** - Consistent with design system color, spacing, and typography tokens

### Basic Usage

```tsx
import { Accordion, AccordionItem } from "@ntg/design-system";

<Accordion>
  <AccordionItem title="What is the NTG Design System?">
    <p>
      The NTG Design System is a comprehensive collection of reusable
      components...
    </p>
  </AccordionItem>
  <AccordionItem title="How do I get started?">
    <p>
      To get started, install the design system package using npm or yarn...
    </p>
  </AccordionItem>
  <AccordionItem title="Is it accessible?">
    <p>Yes! All components follow WCAG 2.1 AA guidelines...</p>
  </AccordionItem>
</Accordion>;
```

### Props

#### Accordion Props

| Prop                 | Type                     | Default      | Description                                                                                               |
| -------------------- | ------------------------ | ------------ | --------------------------------------------------------------------------------------------------------- |
| `mode`               | `'single' \| 'multiple'` | `'multiple'` | Controls expansion behavior. `'single'` allows only one item open at a time, `'multiple'` allows several. |
| `defaultOpenIndices` | `number[]`               | `[]`         | Array of item indices (0-based) that should be expanded on mount.                                         |
| `showToggleAll`      | `boolean`                | `false`      | Shows "Open all" / "Close all" button. Label changes dynamically based on state.                          |
| `className`          | `string`                 | `''`         | Additional CSS class for the accordion container.                                                         |
| `children`           | `ReactNode`              | required     | One or more `<AccordionItem>` components.                                                                 |

#### AccordionItem Props

| Prop        | Type        | Default  | Description                                              |
| ----------- | ----------- | -------- | -------------------------------------------------------- |
| `title`     | `string`    | required | The heading text displayed in the trigger button.        |
| `children`  | `ReactNode` | required | The collapsible content shown when the item is expanded. |
| `className` | `string`    | `''`     | Additional CSS class for the accordion item.             |

### Advanced Examples

#### Single Expansion Mode

Only one item can be open at a time. Opening a new item automatically closes the previous one.

```tsx
<Accordion mode="single">
  <AccordionItem title="First Item">
    <p>When mode is "single", only one item can be open at a time.</p>
  </AccordionItem>
  <AccordionItem title="Second Item">
    <p>Opening this will automatically close the first item.</p>
  </AccordionItem>
  <AccordionItem title="Third Item">
    <p>And this is the third item's content.</p>
  </AccordionItem>
</Accordion>
```

#### With Toggle All Button

Display a tertiary button that opens or closes all items with a single click. The button label automatically changes between "Open all" and "Close all" based on the current state.

```tsx
<Accordion showToggleAll mode="multiple">
  <AccordionItem title="Design Principles">
    <p>
      Our design principles emphasize clarity, consistency, and accessibility.
    </p>
  </AccordionItem>
  <AccordionItem title="Component Library">
    <p>The component library includes buttons, forms, navigation, and more.</p>
  </AccordionItem>
  <AccordionItem title="Design Tokens">
    <p>
      Design tokens define the visual characteristics of your design system.
    </p>
  </AccordionItem>
  <AccordionItem title="Documentation">
    <p>Comprehensive documentation is available for each component.</p>
  </AccordionItem>
</Accordion>
```

#### Default Open Items

Specify which items should be expanded when the component first renders.

```tsx
<Accordion defaultOpenIndices={[0, 2]}>
  <AccordionItem title="Installation">
    <p>Install using: npm install @ntg/design-system</p>
  </AccordionItem>
  <AccordionItem title="Configuration">
    <p>Import the CSS and components in your entry point.</p>
  </AccordionItem>
  <AccordionItem title="Usage">
    <p>Start using: import {`{ Button }`} from '@ntg/design-system'</p>
  </AccordionItem>
</Accordion>
```

#### Rich Content

Accordion items can contain any valid React content, including headings, lists, tables, and other components.

```tsx
<Accordion showToggleAll>
  <AccordionItem title="Product Features">
    <h4>Key Features:</h4>
    <ul>
      <li>Responsive design out of the box</li>
      <li>Themeable with design tokens</li>
      <li>TypeScript support included</li>
      <li>Comprehensive documentation</li>
    </ul>
  </AccordionItem>
  <AccordionItem title="Technical Specifications">
    <div>
      <p>
        <strong>Framework:</strong> React 19+
      </p>
      <p>
        <strong>Styling:</strong> CSS Custom Properties
      </p>
      <p>
        <strong>Build:</strong> Vite + PostCSS
      </p>
    </div>
  </AccordionItem>
</Accordion>
```

### Styling and Tokens

The Accordion component uses semantic design tokens for consistent theming:

| Token                     | Purpose                                 | Fallback Value |
| ------------------------- | --------------------------------------- | -------------- |
| `--clr-stroke-subtle`     | Border color                            | `#e6e5e3`      |
| `--clr-surface-secondary` | Hover/focus background                  | `#f5f4f2`      |
| `--clr-text-primary`      | Title and content text                  | `#3b3b3a`      |
| `--clr-icon-default`      | Chevron icon color                      | `#3b3b3a`      |
| `--clr-focus-focus`       | Focus outline color                     | `#107cc0`      |
| `--spacing-md`            | Spacing between toggle button and items | `16px`         |
| `--font-size-base`        | Text size                               | `1rem`         |

### Accessibility

The Accordion component is fully accessible and follows WCAG 2.1 AA guidelines:

- **ARIA Attributes** - Uses `aria-expanded`, `aria-controls`, and `role="region"` for proper screen reader support
- **Keyboard Navigation** - Full keyboard support (Tab, Enter, Space)
- **Focus Management** - Visible focus indicators with proper outline styles
- **Semantic HTML** - Uses native `<button>` elements for triggers
- **Reduced Motion** - Respects `prefers-reduced-motion` to disable animations
- **High Contrast Mode** - Supports `forced-colors` for Windows High Contrast

#### Keyboard Controls

| Key                | Action                                                          |
| ------------------ | --------------------------------------------------------------- |
| `Tab`              | Move focus between accordion triggers and the toggle all button |
| `Enter` or `Space` | Toggle the focused accordion item                               |
| `Shift + Tab`      | Move focus backwards                                            |

### Browser Support

The Accordion component works in all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Implementation Details

The Accordion uses React Context to manage state across compound components:

- **Context Provider** - Tracks which items are open using a `Set<string>` for efficient lookups
- **Single Mode** - Clears all open items before adding the newly selected one
- **Multiple Mode** - Toggles items in/out of the open set independently
- **Toggle All Logic** - Compares open items count to total items to determine button label

The chevron icon rotates 180° when an item is expanded, with smooth CSS transitions (disabled for users with `prefers-reduced-motion`).

### Storybook Examples

See `Accordion.stories.tsx` for interactive demos including:

- **Basic** - Simple three-item accordion with multiple expansion
- **SingleMode** - One item open at a time
- **WithToggleAll** - "Open all" / "Close all" button demonstration
- **DefaultOpen** - Items pre-expanded on mount
- **RichContent** - Complex nested content (lists, tables, formatted text)

### Best Practices

1. **Use Descriptive Titles** - Keep trigger button text clear and concise (3-10 words)
2. **Group Related Content** - Accordion works best for related, scannable sections
3. **Avoid Nesting** - Don't nest accordions inside accordion items (creates confusion)
4. **Consider Defaults** - Open important items by default to guide user attention
5. **Content Length** - Keep individual items focused; if content is very long, consider alternative layouts
6. **Mobile Experience** - Accordions work well on mobile; test touch targets meet 44x44px minimum

### Changelog

- v1.0.0: Initial implementation with single/multiple modes, toggle all functionality, ARIA support, and Storybook stories.

## Project Structure

```
ntg-design-system/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── button/         # Button component
│   │   │   ├── button.css
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── button.runtime.ts
│   │   │   └── BUTTON.md  # Component documentation
│   │   ├── accordion/      # Accordion component
│   │   ├── icon/           # Icon component (Font Awesome wrapper)
│   │   ├── notification/   # Notification component
│   │   ├── pill/           # Pill component
│   │   ├── table/          # Table component
│   │   ├── scrollbar/      # Scrollbar utility styles
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
       components;         /* Highest priority */
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
│ PRIMITIVES (src/tokens/ntg-design-system-tokens.css)           │
│ --ntg-colour-primary-blue-default: #003f87;                    │
│ --global-spacing-spacing-16: 1rem;                              │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│ THEME-PRIMITIVES (@layer theme-primitives in theme files)      │
│ --theme-colour-primary-blue-default: var(--ntg-colour-...);    │
│ --theme-spacing-md: var(--global-spacing-spacing-16);          │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│ SEMANTICS (@layer semantics in theme-base.css)                 │
│ --clr-action-default: var(--theme-colour-primary-blue-default);│
│ --sp-md: var(--theme-spacing-md);                               │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│ COMPONENTS (@layer components in component CSS files)          │
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

| Token | Hex Value | Purpose |
|-------|-----------|---------|
| `--ntg-colour-new-brand-regional-colours-darwin-ac` | `#398600` | Accessible Darwin region color |
| `--ntg-colour-new-brand-regional-colours-top-end-ac` | `#00819e` | Accessible Top End region color |
| `--ntg-colour-new-brand-regional-colours-barkly-ac` | `#d2430f` | Accessible Barkly region color |
| `--ntg-colour-new-brand-regional-colours-central-australia-ac` | `#e8114b` | Accessible Central Australia region color |
| `--ntg-colour-new-brand-primary-territory-ac` | `#d6410a` | Accessible Territory primary color |
| `--ntg-colour-new-brand-secondary-coastline-ac` | `#288186` | Accessible Coastline secondary color |

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
  --theme-colour-regional-darwin: var(--ntg-colour-new-brand-regional-colours-darwin-ac);
  --theme-colour-regional-top-end: var(--ntg-colour-new-brand-regional-colours-top-end-ac);
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
┌─────────────────────────────────────────────────────────────┐
│ Layer 1: Primitives (ntg-design-system-tokens.css)         │
│   └─ Raw values: --ntg-colour-primary-blue-default: #003f87│
├─────────────────────────────────────────────────────────────┤
│ Layer 2: Theme-Primitives (@layer theme-primitives)        │
│   └─ Mappings: --theme-colour-primary-blue-default: var(--ntg-colour-...)│
├─────────────────────────────────────────────────────────────┤
│ Layer 3: Semantics (theme-base.css + typography-base.css)  │
│   └─ Semantics: --clr-action-default: var(--theme-colour-...)│
├─────────────────────────────────────────────────────────────┤
│ Layer 4: Overrides (@layer overrides)                      │
│   └─ Customizations: --type-font-default, --radii-button   │
└─────────────────────────────────────────────────────────────┘
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
    --theme-colour-primary-blue-default: var(--yourorg-colour-primary-blue-default);
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
  for (const el of root.querySelectorAll<HTMLElement>(".ntgds-your-component")) {
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
