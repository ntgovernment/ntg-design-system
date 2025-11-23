# Icon Component

Reusable Font Awesome wrapper with design token-based color and size variants.

## Features

- Font Awesome support (solid, regular, brands)
- Size variants: sm, md, lg
- Color variants mapped to semantic icon tokens
- Accessible: decorative by default, labeled via `ariaLabel`
- Fallback span rendering for custom glyphs when no `name` provided

## Installation (Font Awesome)

This component does not bundle Font Awesome. Include FA CSS globally via CDN or package:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  integrity="sha512-..."
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

## React Usage

```tsx
import { Icon } from '@ntg-design-system/components';

<Icon name="xmark" size="sm" color="primary" ariaLabel="Close" />
<Icon name="circle-check" faStyle="regular" color="success" ariaLabel="Status ok" />
<Icon name="github" faStyle="brands" size="lg" ariaLabel="GitHub" />

// Fallback square glyph (no Font Awesome name)
<Icon color="secondary" ariaLabel="Decorative square" />
```

## Props

| Prop        | Type                                                               | Default   | Description                                                                    |
| ----------- | ------------------------------------------------------------------ | --------- | ------------------------------------------------------------------------------ |
| `name`      | `string`                                                           | -         | Font Awesome icon name without style prefix (e.g. `xmark`, `circle-info`).     |
| `size`      | `'sm' \| 'md' \| 'lg'`                                             | `md`      | Size variant adjusting relative `font-size`.                                   |
| `color`     | `'default' \| 'primary' \| 'secondary' \| 'tertiary' \| 'inverse'` | `default` | Token-mapped color variant (falls back to `currentColor` when token unset).    |
| `faStyle`   | `'solid' \| 'regular' \| 'brands'`                                 | `solid`   | Font Awesome style family; mapped to `fa-solid`, `fa-regular`, or `fa-brands`. |
| `ariaLabel` | `string`                                                           | -         | Accessible label; when provided the icon is announced (omit for decorative).   |
| `className` | `string`                                                           | -         | Additional CSS classes appended.                                               |
| `style`     | `React.CSSProperties`                                              | -         | Inline style overrides.                                                        |
| `children`  | `React.ReactNode`                                                  | -         | Custom glyph fallback content rendered in a `<span>` when `name` not provided. |

## HTML (Example)

```html
<i
  class="ntgds-icon ntgds-icon--md ntgds-icon--color-primary fa-solid fa-xmark"
  aria-label="Close"
></i>
```

## CSS Classes

| Class                  | Description                                   |
| ---------------------- | --------------------------------------------- |
| `ntgds-icon`           | Base icon wrapper                             |
| `ntgds-icon--sm/md/lg` | Size variants controlling relative font size  |
| `ntgds-icon--color-*`  | Color variants mapped to semantic icon tokens |

## Tokens

- Default: `var(--clr-icon-default)`
- Primary: `var(--clr-icon-primary)`
- Secondary: `var(--clr-icon-secondary)`
- Tertiary: `var(--clr-icon-tertiary)`
- Inverse: `var(--clr-icon-inverse)`

## Accessibility

- Decorative by default (`aria-hidden="true"`).
- Provide `ariaLabel` when meaningful.
- Avoid redundant text near labeled icons.

## Fallback Strategy

If `name` is omitted (or a non-FA child is supplied), the component renders a `span.ntgds-icon`. CSS applies a square fallback (1em × 1em, filled with `currentColor`, small radius) so spacing remains consistent. Provide custom children to override the square.

```css
.ntgds-icon:not(.fa-solid):not(.fa-regular):not(.fa-brands) {
  width: 1em;
  height: 1em;
  background: currentColor;
  border-radius: 2px;
}
```

Use this for temporary placeholder icons during development; replace with a proper `name` before release.

## Integration

The `Icon` component standardises icon rendering across other components:

- **Button**: Pass string names via `iconLeft` / `iconRight` (`floppy-disk`, `arrow-right`). Button wraps arbitrary nodes in `Icon` for consistent sizing/color.
- **Notification**: Internal variant → icon mapping (`info` → `circle-info`, `success` → `circle-check`, etc.) using default color styling.
- **Pill**: Close button always renders `<Icon name="xmark" size="sm" />`; color derives from contextual token.

## Scrollbar Tokens (note)

The design system provides semantic scrollbar tokens in `theme-base.css` (for example `--scrollbar-track-bg`, `--scrollbar-thumb-bg`, `--scrollbar-width`). These are intended for use by a scrollbar stylesheet or per-component scrollable panels (e.g. `.ntgds-scrollable`). The `Icon` component itself does not style scrollbars but consumers should use these tokens when implementing scrollable UIs that need visual parity with the system.

### Example: Button

```tsx
<Button iconLeft="download" iconRight="arrow-right" iconColor="inverse">
  Export
</Button>
```

### Example: Notification (implicit)

```tsx
<Notification variant="warning" title="Heads up" message="Check the fields." />
// Renders <Icon name="triangle-exclamation" /> internally
```

### Example: Custom Fallback

```tsx
<Icon>
  <svg width="12" height="12" aria-hidden="true">
    <circle cx="6" cy="6" r="6" />
  </svg>
</Icon>
```

## Changelog

### 0.2.0 (November 2025)

- Fixed props table formatting
- Added Integration section (Button, Notification, Pill)
- Documented fallback square CSS snippet
- Clarified token/color fallback behavior

### 0.1.0 (November 2025)

- Initial implementation with Font Awesome support and token-based theming.
