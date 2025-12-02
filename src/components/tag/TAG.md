# Tag Component

A compact label component used for categorizing, highlighting, or organizing content. The tag adapts to different themes automatically through the design system's token architecture.

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System?node-id=2362-102&m=dev)

## Features

- **Twelve Variants**: Default, Subtle, Darwin, Darwin-AC, Top End, Top End-AC, East Arnhem, Big Rivers, Barkly, Barkly-AC, Central Australia, Central Australia-AC
- **Accessible Color Variants**: Four regional variants with `-ac` suffix for improved WCAG AA/AAA contrast compliance
- **Compact Design**: Small, pill-shaped labels optimized for inline use
- **Theme-Aware**: Automatically adapts to NT.GOV.AU and NTG Central themes
- **Accessible**: WCAG 2.1 AA compliant with proper contrast and screen reader support
- **Flexible Content**: Supports text and optional icons
- **Removable**: Optional close button for dismissible tags

## Usage

### React Component

```tsx
import { Tag } from '@ntg-design-system/components';

// Default tag
<Tag>Default</Tag>

// Subtle tag
<Tag variant="subtle">Subtle</Tag>

// Region variants (standard colors)
<Tag variant="darwin">Darwin</Tag>
<Tag variant="top-end">Top End</Tag>
<Tag variant="east-arnhem">East Arnhem</Tag>
<Tag variant="big-rivers">Big Rivers</Tag>
<Tag variant="barkly">Barkly</Tag>
<Tag variant="central-australia">Central Australia</Tag>

// Region variants (accessible colors for improved WCAG contrast)
<Tag variant="darwin-ac">Darwin</Tag>
<Tag variant="top-end-ac">Top End</Tag>
<Tag variant="barkly-ac">Barkly</Tag>
<Tag variant="central-australia-ac">Central Australia</Tag>

// With close button
<Tag onClose={() => handleClose()}>Removable Tag</Tag>

// Disabled tag
<Tag disabled>Disabled</Tag>
```

### HTML Implementation

```html
<!-- Default Tag -->
<span class="ntgds-tag ntgds-tag--default">Default</span>

<!-- Subtle Tag -->
<span class="ntgds-tag ntgds-tag--subtle">Subtle</span>

<!-- Region Variants -->
<span class="ntgds-tag ntgds-tag--darwin">Darwin</span>
<span class="ntgds-tag ntgds-tag--top-end">Top End</span>
<span
  class="ntgds-tag ntgds-tag--east-arnhem"
  style="background: var(--clr-tag-tag-5, var(--ntg-colour-new-brand-regional-colours-east-arnhem, #D1DD26)); color: var(--clr-text-body, #3B3B3A);"
  >East Arnhem</span
>
<span
  class="ntgds-tag ntgds-tag--big-rivers"
  style="background: var(--clr-tag-tag-6, var(--ntg-colour-new-brand-regional-colours-big-rivers, #FCB414)); color: var(--clr-text-body, #3B3B3A);"
  >Big Rivers</span
>
<span
  class="ntgds-tag ntgds-tag--barkly"
  style="background: var(--clr-tag-tag-7, var(--ntg-colour-new-brand-regional-colours-barkly, #F05A24)); color: var(--clr-text-inverse, #fff);"
  >Barkly</span
>
<span
  class="ntgds-tag ntgds-tag--central-australia"
  style="background: var(--clr-tag-tag-8, var(--ntg-colour-new-brand-regional-colours-central-australia, #ED164E)); color: var(--clr-text-inverse, #fff);"
  >Central Australia</span
>

<!-- Removable Tag -->
<span class="ntgds-tag ntgds-tag--default">
  Removable Tag
  <button class="ntgds-tag__close" aria-label="Remove tag">
    <i class="fa-solid fa-times" aria-hidden="true"></i>
  </button>
</span>

<!-- Disabled Tag -->
<span
  class="ntgds-tag ntgds-tag--default ntgds-tag--disabled"
  aria-disabled="true"
>
  Disabled
</span>
```

## Props / Attributes

### React Props

| Prop        | Type         | Default  | Description                     |
| ----------- | ------------ | -------- | ------------------------------- | ------------- | ------------- | ---------------- | ------------ | -------- | -------------------- | ------------------------ | --------- | ------------- | ------------ | -------- | -------------------- | ----------- | -------------------- |
| `variant`   | `'default'   | 'subtle' | 'darwin'                        | 'darwin-ac'   | 'top-end'     | 'top-end-ac'     | 'east-arnhem' | 'big-rivers' | 'barkly'             | 'barkly-ac'              | 'central-australia' | 'central-australia-ac'` | `'default'` | Visual style variant. Variants with `-ac` suffix use accessible colors for improved WCAG contrast. |
| `disabled`  | `boolean`    | `false`  | Disables tag interaction        |
| `onClose`   | `() => void` | -        | Callback for close button click |
| `children`  | `ReactNode`  | -        | Tag text or content             |
| `className` | `string`     | -        | Additional CSS classes          |

### HTML Classes

| Class                          | Description                      |
| ------------------------------ | -------------------------------- |
| `ntgds-tag`                    | Base tag class (required)        |
| `ntgds-tag--default`           | Default variant styling          |
| `ntgds-tag--subtle`            | Subtle variant styling           |
| `ntgds-tag--darwin`            | Darwin region styling            |
| `ntgds-tag--top-end`           | Top End region styling           |
| `ntgds-tag--east-arnhem`       | East Arnhem region styling       |
| `ntgds-tag--big-rivers`        | Big Rivers region styling        |
| `ntgds-tag--barkly`            | Barkly region styling            |
| `ntgds-tag--central-australia` | Central Australia region styling |
| `ntgds-tag--darwin-ac`            | Darwin region (accessible) styling            |
| `ntgds-tag--top-end-ac`           | Top End region (accessible) styling           |
| `ntgds-tag--barkly-ac`            | Barkly region (accessible) styling            |
| `ntgds-tag--central-australia-ac` | Central Australia region (accessible) styling |
| `ntgds-tag--disabled`          | Disabled state styling           |
| `ntgds-tag__close`             | Close button styling             |

## Variants

## Theme Tokens & Variants

All regional tag variants use semantic CSS variables for backgrounds, with design token fallbacks for theme support. Example:

- Darwin: `background: var(--clr-tag-tag-3, var(--ntg-colour-new-brand-regional-colours-darwin, #76BA43));`
- Top End: `background: var(--clr-tag-tag-4, var(--ntg-colour-new-brand-regional-colours-top-end, #009DC1));`
- East Arnhem: `background: var(--clr-tag-tag-5, var(--ntg-colour-new-brand-regional-colours-east-arnhem, #D1DD26));`
- Big Rivers: `background: var(--clr-tag-tag-6, var(--ntg-colour-new-brand-regional-colours-big-rivers, #FCB414));`
- Barkly: `background: var(--clr-tag-tag-7, var(--ntg-colour-new-brand-regional-colours-barkly, #F05A24));`
- Central Australia: `background: var(--clr-tag-tag-8, var(--ntg-colour-new-brand-regional-colours-central-australia, #ED164E));`

**Text color for yellow tags (Big Rivers, East Arnhem):**

- Uses `color: var(--clr-text-body, #3B3B3A);` for accessibility and contrast.

## Accessible Color Variants

The Tag component includes **accessible color variants** with an `-ac` suffix to ensure WCAG AA/AAA compliance for improved color contrast. These variants are specifically designed for applications where text readability and accessibility are critical.

### Available Accessible Variants

| Variant | Standard Color | Accessible Color | Improvement |
|---------|----------------|------------------|-------------|
| `darwin-ac` | #76ba43 | #398600 | Darker green for better contrast |
| `top-end-ac` | #009dc1 | #00819e | Darker teal for better contrast |
| `barkly-ac` | #f05a24 | #d2430f | Darker orange for better contrast |
| `central-australia-ac` | #ed164e | #e8114b | Adjusted pink for better contrast |

### When to Use Accessible Variants

✅ **Use `-ac` variants when:**
- Text readability is critical (forms, data tables, key information)
- Meeting WCAG AA (4.5:1 contrast) or AAA (7:1 contrast) requirements
- Building government services that must meet accessibility standards
- Users may have visual impairments or color blindness

❌ **Use standard variants when:**
- Tags are decorative or secondary visual elements
- Standard colors already meet accessibility requirements in your context
- Brand consistency with existing NT Government materials is more important

### Missing Accessible Variants

**Note:** Accessible variants are not yet available for `east-arnhem` and `big-rivers` regions. These variants currently use standard colors with dark text (`color: var(--clr-text-body)`) to ensure adequate contrast against their bright yellow backgrounds.

### WCAG Compliance

All accessible variants maintain sufficient contrast ratios for white text on colored backgrounds, meeting WCAG 2.1 Level AA requirements. For detailed contrast requirements and testing, see [WCAG 2.1 Success Criterion 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

## Accessibility

Tags with yellow backgrounds (Big Rivers, East Arnhem) use body text color for optimal contrast and WCAG 2.1 AA compliance. All tag variants support proper ARIA attributes and keyboard navigation when interactive.

## Changelog

### Version 1.1.0 (December 2025)

- Added accessible color variants (`-ac` suffix) for improved WCAG contrast
- Four new accessible regional variants: darwin-ac, top-end-ac, barkly-ac, central-australia-ac
- Enhanced documentation with accessibility guidelines and variant comparison
- Added semantic token mappings for accessible colors in theme-ntg.css
- Comprehensive Storybook examples showing standard vs accessible variant comparisons

### Version 1.0.0 (November 2025)

- Initial release
- Eight tag variants (default, subtle, darwin, top-end, east-arnhem, big-rivers, barkly, central-australia)
- Removable tag functionality with close button
- Full theme support (NT.GOV.AU and NTG Central)
- Accessibility compliant (WCAG 2.1 AA)
- Comprehensive documentation with Figma design reference
