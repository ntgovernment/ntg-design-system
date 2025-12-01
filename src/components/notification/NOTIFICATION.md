# Notification Component

A theme-agnostic notification component for displaying important information, alerts, and status messages. The Notification adapts to NT.GOV.AU and NTG Central themes using semantic CSS variables.

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System?node-id=2362-102&m=dev)

## Features

- Four variants: Info, Success, Warning, Danger
- Theme-aware: adapts to NT.GOV.AU and NTG Central themes
- Accessible: WCAG 2.1 AA compliant with proper semantic structure
- Color-coded left border and icon for quick visual identification
- Flexible content with title and message
- Icon support via shared `Icon` component (Font Awesome glyphs)

## Usage

### React Component

```tsx
import { Notification } from '@ntg-design-system/components';

<Notification
  title="Information alert"
  message="Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  variant="info"
/>

<Notification
  title="Success alert"
  message="Your action was completed successfully."
  variant="success"
/>

<Notification
  title="Warning alert"
  message="Please review the following information."
  variant="warning"
/>

<Notification
  title="Danger alert"
  message="An error occurred while processing your request."
  variant="danger"
/>
```

### HTML Implementation

```html
<div class="ntgds-notification ntgds-notification--info">
  <div class="ntgds-notification__border"></div>
  <div class="ntgds-notification__content">
    <div class="ntgds-notification__header">
      <div class="ntgds-notification__icon">
        <!-- Rendered by <Icon name="circle-info" size="lg" /> -->
        <i
          class="ntgds-icon ntgds-icon--lg ntgds-icon--color-default fa-solid fa-circle-info"
          aria-hidden="true"
        ></i>
      </div>
      <div class="ntgds-notification__text">
        <div class="ntgds-notification__title">Information alert</div>
        <div class="ntgds-notification__message">
          Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </div>
      </div>
    </div>
  </div>
</div>
```

## Component Structure

The Notification component renders the following HTML structure:

```html
<div class="ntgds-notification ntgds-notification--[variant]">
  <div class="ntgds-notification__border"></div>
  <div class="ntgds-notification__content">
    <div class="ntgds-notification__header">
      <div class="ntgds-notification__icon">
        <i
          class="ntgds-icon ntgds-icon--lg fa-solid fa-[variant-icon]"
          aria-hidden="true"
        ></i>
      </div>
      <div class="ntgds-notification__text">
        <div class="ntgds-notification__title">[title]</div>
        <div class="ntgds-notification__message">[message]</div>
      </div>
    </div>
  </div>
</div>
```

## Props / Attributes

### React Props

| Prop        | Type                                           | Default  | Description                     |
| ----------- | ---------------------------------------------- | -------- | ------------------------------- |
| `title`     | `string`                                       | -        | Notification title (required)   |
| `message`   | `string`                                       | -        | Notification message (required) |
| `variant`   | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'` | Notification type               |
| `className` | `string`                                       | -        | Additional CSS classes          |

### HTML Classes

| Class                         | Description                        |
| ----------------------------- | ---------------------------------- |
| `ntgds-notification`          | Base notification class (required) |
| `ntgds-notification--info`    | Info variant styling               |
| `ntgds-notification--success` | Success variant styling            |
| `ntgds-notification--warning` | Warning variant styling            |
| `ntgds-notification--danger`  | Danger variant styling             |
| `ntgds-notification__border`  | Left border element                |
| `ntgds-notification__content` | Content wrapper                    |
| `ntgds-notification__header`  | Header container                   |
| `ntgds-notification__icon`    | Icon container                     |
| `ntgds-notification__text`    | Text content wrapper               |
| `ntgds-notification__title`   | Title text styling                 |
| `ntgds-notification__message` | Message text styling               |

## Theme Tokens

The Notification component uses semantic CSS variables for theme-agnostic styling.

### Base Tokens (from theme-base.css)

- Background: `var(--clr-surface-primary)`
- Outline (Info): `var(--clr-status-info)`
- Border (Info): `var(--clr-status-info)`
- Icon (Info): `var(--clr-status-info)`
- Success Color: `var(--clr-status-success)`
- Warning Color: `var(--clr-status-warning)`
- Danger Color: `var(--clr-status-danger)`
- Title Color: `var(--clr-text-default)`
- Message Color: `var(--clr-text-body)`
- Font Family: `var(--type-font-default)`

### NT.GOV.AU Theme

- `--clr-status-info: #107CC0`
- `--type-font-default: Lato`

### NTG Central Theme

- `--clr-status-info: #107CC0` (verify in theme files)
- `--type-font-default: Roboto`

## Accessibility

- Uses semantic HTML structure for proper content hierarchy.
- Icon is decorative (`aria-hidden="true"`). Screen reader context provided by surrounding text.
- Title uses appropriate heading-level styling.
- High contrast between background and text meets WCAG 2.1 AA standards.
- Color-coded borders and icons provide visual cues, not relying solely on color.

## Variant Icon Mapping

Each variant automatically renders an appropriate Font Awesome icon:

| Variant   | Icon Name              | Glyph (FA)       |
| --------- | ---------------------- | ---------------- |
| `info`    | `circle-info`          | Info Circle      |
| `success` | `circle-check`         | Check Circle     |
| `warning` | `triangle-exclamation` | Warning Triangle |
| `danger`  | `circle-xmark`         | X Mark Circle    |

Variant colors are applied via CSS to the icon (`color` property) using semantic status tokens.

## Fallback Colors

The component now provides hex fallbacks for status token usages to ensure visible borders/icons even if theme tokens are absent (e.g. embedding outside full theme context).

Example (from `notification.css`):

```css
outline: 1px solid var(--clr-status-info, #107cc0);
border-color: var(--clr-status-success, #107810);
color: var(--clr-status-warning, #d6410a);
```

Fallback hex values approximate NTG brand palette for info, success, warning, and danger, preserving contrast.

## Icon Integration Notes

Icons are rendered via the shared `Icon` component using variant → Font Awesome name mapping. Consumers should include Font Awesome 6 CSS globally. Icon color is controlled purely by variant CSS; there is no `iconColor` prop for Notification (simplifies visual consistency).

## Changelog

### Version 1.0.1 (November 2025)

- Migrated icon implementation from colored square to shared `Icon` component
- Added variant-to-icon mapping documentation

### Version 1.0.2 (November 2025)

- Added hex fallbacks for status tokens (border, outline, icon color) to improve resilience
- Documented fallback strategy and clarified icon integration specifics

### Version 1.0.0 (November 2025)

- Initial release
- Four notification variants (info, success, warning, danger)
- Theme support for NT.GOV.AU and NTG Central
- Accessibility compliant with WCAG 2.1 AA
- Comprehensive documentation
