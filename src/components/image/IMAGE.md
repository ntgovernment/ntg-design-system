# Image Component

A theme-agnostic image display component with optional caption support. The Image adapts to NT.GOV.AU and NTG Central themes using semantic CSS variables.

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System?node-id=2362-102&m=dev)

## Features

- Responsive image display with optional caption
- Theme-aware: adapts to NT.GOV.AU and NTG Central themes
- Accessible: WCAG 2.1 AA compliant with required alt text and semantic HTML
- Flexible sizing: supports width and height props for container dimensions
- Semantic structure: uses `<figure>` and `<figcaption>` for captions
- Image fills container with `object-fit: cover` for consistent display

## Usage

### React Component

```tsx
import { Image } from '@ntg-design-system/components';

<Image src="https://placehold.co/650x488" alt="Placeholder image" />
<Image
  src="https://placehold.co/650x488"
  alt="Image with caption"
  caption="Caption lorem ipsum dolor sit amet, consectetur adipiscing elit."
  width={650}
  height={488}
/>
```

### HTML Implementation

```html
<div class="ntgds-image" style="width: 650px; height: 488px;">
  <figure class="ntgds-image__figure">
    <img
      class="ntgds-image__img"
      src="https://placehold.co/650x488"
      alt="Placeholder image"
      style="width: 100%; height: 100%;"
    />
  </figure>
</div>

<div class="ntgds-image" style="width: 650px; height: 488px;">
  <figure class="ntgds-image__figure">
    <img
      class="ntgds-image__img"
      src="https://placehold.co/650x488"
      alt="Image with caption"
      style="width: 100%; height: 100%;"
    />
    <figcaption class="ntgds-image__caption">
      Caption lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam.
    </figcaption>
  </figure>
</div>
## Component Structure

The Image component renders the following semantic HTML structure:

```html
<div class="ntgds-image" style="width: [width]; height: [height];">
  <figure class="ntgds-image__figure">
    <img class="ntgds-image__img" src="[src]" alt="[alt]" style="width: 100%; height: 100%;" />
    <!-- Optional -->
    <figcaption class="ntgds-image__caption">[caption]</figcaption>
  </figure>
</div>
```

This ensures proper semantic markup for images and captions, improving accessibility and SEO.

## Props / Attributes

### React Props

| Prop        | Type               | Default | Description                           |
| ----------- | ------------------ | ------- | ------------------------------------- |
| `src`       | `string`           | -       | Image source URL (required)           |
| `alt`       | `string`           | -       | Alt text for accessibility (required) |
| `caption`   | `string`           | -       | Optional caption text                 |
| `width`     | `number \| string` | -       | Container width (affects image size) |
| `height`    | `number \| string` | -       | Container height (affects image size)|
| `className` | `string`           | -       | Additional CSS classes                |

### HTML Classes

| Class                  | Description                          |
| ---------------------- | ------------------------------------ |
| `ntgds-image`          | Base image container class (required)|
| `ntgds-image__figure`  | Figure element wrapper               |
| `ntgds-image__img`     | Image element styling                |
| `ntgds-image__caption` | Figcaption element for caption text  |

## Theme Tokens

The Image component uses semantic CSS variables for theme-agnostic styling.

### Base Tokens (from theme-base.css)

- Caption Color: `var(--clr-text-helper)`
- Font Family: `var(--type-font-default)`

### NT.GOV.AU Theme Overrides (theme-ntg.css)

- `--clr-text-helper: #777674`
- `--type-font-default: Lato`

### NTG Central Theme Overrides (theme-central.css)

- `--clr-text-helper: #777674` (assumed; verify in theme files)
- `--type-font-default: Roboto`

## Accessibility

- Requires `alt` prop for screen readers to describe the image.
- Uses semantic `<figure>` and `<figcaption>` elements for captions, improving context for assistive technologies.
- Container dimensions are defined via props, ensuring predictable layout.
- Image fills the container with `object-fit: cover`, maintaining aspect ratio.
- Inherits responsive behavior from global reset styles.

## Changelog

### Version 1.1.0 (November 2025)

- Enhanced accessibility with semantic `<figure>` and `<figcaption>` elements
- Added width/height props to define container dimensions
- Image now fills container with `object-fit: cover`
- Updated HTML structure for better screen reader support

### Version 1.0.0 (November 2025)

- Initial release
- Responsive image with optional caption
- Theme support for NT.GOV.AU and NTG Central
- Accessibility compliant with required alt text
- Comprehensive documentation
