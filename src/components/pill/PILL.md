# Pill Component

A compact, theme-agnostic label for status, categorization, or highlighting. The Pill adapts to NT.GOV.AU and NTG Central themes using semantic CSS variables and design token fallbacks. It is always removable with a close button.

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System?node-id=2362-102&m=dev)

## Features

- Single, consistent design for all use cases
- Always removable with an accessible close button (x icon via shared `Icon` component)
- Theme-aware: adapts to NT.GOV.AU and NTG Central themes
- Accessible: WCAG 2.1 AA compliant, proper contrast, screen reader support
- Flexible content: text label
- States: default, hover, focus, disabled
- Icon support: Shared `Icon` component (Font Awesome powered)

## Usage

### React Component

```tsx
import { Pill } from '@ntg-design-system/components';

<Pill onClose={() => console.log('Closed')}>Pill Label</Pill>
<Pill disabled onClose={() => {}}>Disabled Pill</Pill>
```

### HTML Implementation

```html
<div class="ntgds-pill">
  <div class="ntgds-pill__label">Pill Label</div>
  <button class="ntgds-pill__close" aria-label="Remove pill" type="button">
    <!-- Rendered by <Icon name="xmark" size="sm" /> -->
    <i
      class="ntgds-icon ntgds-icon--sm ntgds-icon--color-default fa-solid fa-xmark"
      aria-hidden="true"
    ></i>
  </button>
</div>

<div class="ntgds-pill ntgds-pill--disabled" aria-disabled="true">
  <div class="ntgds-pill__label">Disabled Pill</div>
  <button
    class="ntgds-pill__close"
    aria-label="Remove pill"
    type="button"
    disabled
  >
    <!-- Rendered by <Icon name="xmark" size="sm" /> -->
    <i
      class="ntgds-icon ntgds-icon--sm ntgds-icon--color-default fa-solid fa-xmark"
      aria-hidden="true"
    ></i>
  </button>
</div>
```

## Props / Attributes

### React Props

| Prop        | Type         | Default | Description                                |
| ----------- | ------------ | ------- | ------------------------------------------ |
| `disabled`  | `boolean`    | `false` | Disables pill interaction and close button |
| `onClose`   | `() => void` | -       | Callback for close button click            |
| `children`  | `ReactNode`  | -       | Pill text or content                       |
| `className` | `string`     | -       | Additional CSS classes                     |

### HTML Classes

| Class                  | Description                |
| ---------------------- | -------------------------- |
| `ntgds-pill`           | Base pill class (required) |
| `ntgds-pill--disabled` | Disabled state styling     |
| `ntgds-pill__label`    | Label text container       |
| `ntgds-pill__close`    | Close button styling       |

## Theme Tokens

The Pill component uses semantic CSS variables for theme-agnostic styling. Theme-specific overrides are applied in `theme-ntg.css` and `theme-central.css`.

### Base Tokens (from theme-base.css)

- Background: `var(--clr-surface-primary)`
- Hover Background: `var(--clr-surface-primary-hover)`
- Outline: `var(--clr-stroke-subtle)`
- Text Color: `var(--clr-link-default)`
- Font Family: `var(--type-font-default)`
- Border Radius: `var(--clr-pill-border-radius)`
- Icon Color: `var(--clr-icon-default)`
- Focus Outline: `var(--clr-focus-focus)`

### NT.GOV.AU Theme Overrides (theme-ntg.css)

- `--clr-link-default: #1F1F5F`
- `--clr-surface-primary-hover: #EAE9E8`
- `--clr-stroke-subtle: #D4D4D2`
- `--type-font-default: Lato`
- `--clr-pill-border-radius: 0`
- `--clr-icon-default: #1F1F5F`

### NTG Central Theme Overrides (theme-central.css)

- `--clr-link-default: #102040`
- `--clr-surface-primary-hover: #ECF0F0`
- `--clr-stroke-subtle: #D0E0E0`
- `--type-font-default: Roboto`
- `--clr-pill-border-radius: 100px`
- `--clr-icon-default: #208820`

## Accessibility

- Meets WCAG 2.1 AA contrast requirements in both themes.
- Disabled state uses `aria-disabled` and reduced opacity.
- Close button has `aria-label="Remove pill"` for screen readers.
- Focus outline is visible and theme-aware.
- Icon is decorative (`aria-hidden="true"`).

## Icon Implementation

The close icon now uses the shared `Icon` component internally (`<Icon name="xmark" size="sm" />`). You do not supply iconColor; it inherits from the pill’s context. Include Font Awesome 6 globally (CDN or bundler) for the glyph to render.

### React

```tsx
<Pill onClose={() => {}}>Label</Pill>
```

### Rendered HTML (icon excerpt)

```html
<i
  class="ntgds-icon ntgds-icon--sm ntgds-icon--color-default fa-solid fa-xmark"
  aria-hidden="true"
></i>
```

If Font Awesome is missing the icon space remains (fallback square suppressed since a name is provided) but the glyph will not display.

## Changelog

### Version 1.1.1 (November 2025)

- Migrated to shared `Icon` component (`xmark`) replacing legacy `fa-times`
- Removed custom span fallback; styling now targets `.ntgds-icon`
- Documentation updated for unified icon strategy

### Version 1.1.0 (November 2025)

- Simplified to single variant, always removable
- Enhanced theme support with specific overrides for NT.GOV.AU and NTG Central
- Added hover and focus states
- Updated icon to support both Font Awesome and custom span markups
- Improved accessibility and documentation

### Version 1.0.0 (November 2025)

- Initial release
- Six pill variants (default, subtle, info, success, warning, error)
- Removable pill functionality with close button
- Full theme support (NT.GOV.AU and NTG Central)
- Accessibility compliant (WCAG 2.1 AA)
- Comprehensive documentation with Figma design reference
