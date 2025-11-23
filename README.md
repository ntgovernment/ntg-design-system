# NTG Design System

The official design system for Northern Territory Government digital services, providing a consistent and accessible user experience across all government applications.

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
│   │   │   └── BUTTON.md  # Component documentation
│   │   ├── callout/        # Callout component with DXP integration
│   │   └── component-viewer/ # Component viewer for CMS
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
│   │   ├── reset.css
│   │   └── base.css
│   └── runtime/            # Component initialization
├── dist/                   # Production build output
│   ├── css/               # Compiled stylesheets
│   └── types/             # TypeScript definitions
├── docs/                   # Published component documentation
└── .storybook/            # Documentation configuration
```

## Themes

The design system provides officially branded themes:

- **NT Government Theme** - Primary NT Government branding and color palette
- **NTG Central Theme** - NTG Central specific branding and styling

All themes utilize CSS custom properties, enabling consistent application of brand guidelines while maintaining flexibility.

## Technology

Built with industry-standard modern web technologies:

- React 19
- TypeScript 5.9
- CSS Custom Properties
- Squiz DXP-Next Integration
- Automated documentation with Storybook

## Getting Started

For implementation instructions and best practices, please refer to the technical documentation available through the component library.

For general inquiries about the design system, please contact the NT Government Digital Services team.

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
