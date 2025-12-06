# ImageGallery

A responsive image gallery component with an interactive lightbox viewer, zoom functionality, keyboard navigation, touch gestures, and lazy-loading. Supports WEBP with fallback formats for broad browser compatibility.

## Features

- **Responsive Grid** - Auto-scaling columns based on viewport width
- **Interactive Lightbox** - Full-screen image viewer with navigation
- **Zoom Control** - Cycle through 1x → 1.5x → 2x → 3x magnification levels
- **Pan/Drag** - Drag zoomed images to pan; grab cursor visual feedback
- **Keyboard Navigation** - Arrow keys, Escape, and intuitive controls
- **Touch Gestures** - Swipe (30px threshold), pinch-zoom, and tap support
- **Lazy Loading** - IntersectionObserver for viewport-based thumbnail loading
- **WEBP Support** - Automatic fallback to JPG/PNG for older browsers via `<picture>`
- **Accessibility** - Full ARIA support, required alt text, focus management
- **Fullscreen Toggle** - Container-only fullscreen for immersive viewing

## Props

| Prop      | Type              | Default | Description                                  |
| --------- | ----------------- | ------- | -------------------------------------------- |
| `images`  | `GalleryImage[]`  | required | Array of image objects with metadata         |
| `columns` | `number`          | `3`     | Number of grid columns                       |
| `gap`     | `number`          | `16`    | Gap between grid items in pixels             |
| `className` | `string`       | `''`    | Additional CSS classes for wrapper           |

### GalleryImage

| Property      | Type     | Required | Description                                  |
| ------------- | -------- | -------- | -------------------------------------------- |
| `src`         | `string` | ✓        | Full-size image URL (JPG/PNG for fallback)  |
| `alt`         | `string` | ✓        | Descriptive alt text for accessibility      |
| `srcWebp`     | `string` |          | WEBP version of the image                    |
| `title`       | `string` |          | Title shown in lightbox above image          |
| `description` | `string` |          | Description shown below image; linked via `aria-describedby` |
| `srcSet`      | `string` |          | Responsive srcSet for main image (`400w, 800w, 1200w`) |
| `srcSetWebp`  | `string` |          | Responsive WEBP srcSet for main image       |

## Usage

### Basic Gallery

```tsx
import { ImageGallery } from "ntg-design-system";

const images = [
  {
    src: "/images/photo1.jpg",
    srcWebp: "/images/photo1.webp",
    alt: "A serene mountain landscape with a lake at sunrise",
    title: "Mountain Serenity",
    description: "Peaceful alpine landscape captured early morning",
  },
  {
    src: "/images/photo2.jpg",
    srcWebp: "/images/photo2.webp",
    alt: "A vibrant street scene with historic architecture",
  },
  // ... more images
];

export function PhotoAlbum() {
  return <ImageGallery images={images} columns={3} gap={16} />;
}
```

### With Responsive Columns

```tsx
<ImageGallery
  images={images}
  columns={4}
  gap={12}
  className="custom-gallery"
/>
```

### With Titles and Descriptions

```tsx
const detailedImages = [
  {
    src: "/image.jpg",
    srcWebp: "/image.webp",
    alt: "Beach sunset with golden hour light",
    title: "Golden Hour Beach",
    description: "Captured during the golden hour at a pristine tropical beach",
    srcSet: "/image-400w.jpg 400w, /image-800w.jpg 800w, /image-1200w.jpg 1200w",
    srcSetWebp: "/image-400w.webp 400w, /image-800w.webp 800w, /image-1200w.webp 1200w",
  },
];

<ImageGallery images={detailedImages} />;
```

## Keyboard Controls

| Key              | Action                      |
| ---------------- | --------------------------- |
| `Arrow Right`    | Next image                  |
| `Arrow Left`     | Previous image              |
| `Escape`         | Close lightbox              |
| `Tab`            | Navigate between buttons    |
| `Enter` / `Space`| Activate focused button     |

## Touch Gestures

| Gesture         | Action                              |
| --------------- | ----------------------------------- |
| **Tap**         | Click image to open; same as click  |
| **Swipe Right** | Previous image (30px+ threshold)    |
| **Swipe Left**  | Next image (30px+ threshold)        |
| **Pinch-Zoom**  | Zoom in/out (two-finger spread)     |
| **Drag**        | Pan zoomed image (when zoomed > 1x) |

## Zoom Behavior

Zoom cycles through magnification levels:

```
1x → 1.5x → 2x → 3x → 1x (repeats)
```

- Clicking "Zoom In" button advances the cycle
- Clicking "Zoom Out" button retreats the cycle
- Zoom Out button is disabled at 1x
- Zoom In button is disabled at 3x
- Pinch-zoom on touch devices works similarly
- Panning resets when zoom level changes

## Lazy Loading

Thumbnails are loaded on-demand using IntersectionObserver:

- Thumbnails load when visible in viewport (threshold: 0.1)
- Uses `data-src` attribute for deferred loading
- Reduces initial page load and bandwidth
- Main lightbox image loads immediately on selection

## WEBP Fallback Strategy

The component uses `<picture>` elements for automatic format selection:

```tsx
// User provides both formats
{
  src: "image.jpg",           // Fallback for older browsers
  srcWebp: "image.webp"        // Used by modern browsers
}

// Renders as:
// <picture>
//   <source srcSet="image.webp" type="image/webp" />
//   <img src="image.jpg" alt="..." />
// </picture>
```

**Benefits:**
- ~30% smaller file sizes with WEBP
- Graceful fallback for IE11 and older browsers
- Browser automatically selects optimal format
- No JavaScript required for format negotiation

**Providing srcSet:**

```tsx
{
  src: "image.jpg",
  srcWebp: "image.webp",
  srcSet: "image-400w.jpg 400w, image-800w.jpg 800w, image-1200w.jpg 1200w",
  srcSetWebp: "image-400w.webp 400w, image-800w.webp 800w, image-1200w.webp 1200w"
}
```

## Accessibility

### Alt Text (Required)

All images **must** include descriptive `alt` text:

```tsx
// ✓ Good: Descriptive and concise
{ alt: "A golden retriever playing in a snow-covered park" }

// ✗ Poor: Too generic
{ alt: "dog" }

// ✗ Poor: Lacks context
{ alt: "photo" }
```

### ARIA Labels and Descriptions

- All interactive buttons have `aria-label`
- Image descriptions use `aria-describedby` linking to description text
- Lightbox marked as `role="region" aria-modal="true"`
- Focus management: lightbox receives focus on open

### Focus Management

- Gallery grid items are focusable via Tab
- Lightbox controls are navigable with Tab/Shift+Tab
- Close button positioned for easy discovery
- Focus outline visible on all interactive elements
- Supports `:focus-visible` for keyboard users

### Screen Reader Support

- Images announced with full context (number, title, alt text)
- Zoom, pan, and gesture controls announced
- Thumbnail strip announces when selected
- All buttons have descriptive labels
- Semantic HTML structure preserved

## Fullscreen Toggle

Clicking the expand button toggles a fullscreen-like view:

- Container expands to fill viewport (`inset: 0`)
- Does not request browser fullscreen API (simpler UX)
- Maintains full functionality (zoom, pan, navigation)
- Respects safe-area insets on notched devices
- Toggle button shows "Exit Fullscreen" when active

## Mobile Responsiveness

The gallery adapts to all screen sizes:

- Grid columns reduce on smaller screens
- Touch targets maintain 44×44px minimum
- Horizontal thumbnail strip remains scrollable
- Navigation arrows hide on very small screens (< 480px)
- Optimal spacing and padding for touch interaction
- Respects `prefers-reduced-motion` for animations

## Performance Notes

### Lazy Loading Benefits

- IntersectionObserver triggers load only when thumbnail visible
- Reduces initial image downloads (~50-70% fewer images on first load)
- Improves Core Web Vitals: LCP, FID, CLS
- Minimal memory overhead with observer cleanup

### WEBP Benefits

- Average 25-35% file size reduction vs. JPG
- Maintains visual quality at smaller sizes
- Reduces bandwidth and improves loading speed
- No performance cost (browser-native format support)

### Optimization Tips

1. **Provide multiple sizes** using `srcSet` for different viewports
2. **Use WEBP variants** for modern browsers; provide JPG fallback
3. **Compress images** before upload (use tools like ImageOptim, TinyPNG)
4. **Consider CDN** for serving images from edge locations
5. **Lazy-load gallery itself** if below fold (Intersection Observer wrapper)

## Browser Support

- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Mobile browsers: iOS 12+, Android 5+
- WEBP support: ~95% of users (fallback handles remainder)

## Implementation Details

### State Management

Component uses React hooks for state:

- `lightboxOpen`: Boolean for visibility
- `selectedIndex`: Current image index (0-based)
- `zoomLevel`: Current magnification (1, 1.5, 2, 3)
- `isFullscreen`: Container fullscreen mode
- `panX`, `panY`: Drag offset when zoomed
- Touch event tracking for swipe and pinch

### Event Listeners

- Keyboard: `keydown` for arrows and Escape
- Mouse: `mousedown`, `mousemove`, `mouseup` for pan drag
- Touch: `touchstart`, `touchmove`, `touchend` for swipe/pinch
- All listeners cleaned up on unmount

### IntersectionObserver Usage

- Created once on mount, reused for all thumbnails
- Threshold 0.1 for early load (before thumbnail fully visible)
- Cleaned up on unmount to prevent memory leaks
- No polyfill needed (modern browser support ~98%)

## Styling and Tokens

The component uses semantic design tokens:

| Token                   | Purpose                      | Fallback       |
| ----------------------- | ---------------------------- | -------------- |
| `--clr-misc-black`      | Lightbox backdrop            | `#000000`      |
| `--clr-text-inverse`    | Button text color            | `#ffffff`      |
| `--clr-focus-focus`     | Focus indicator color        | `#107cc0`      |
| `--sp-xs`               | Small spacing (8px)          | `8px`          |
| `--sp-sm`               | Small-medium spacing (12px)  | `12px`         |
| `--sp-md`               | Medium spacing (16px)        | `16px`         |
| `--radii-default`       | Border radius                | `4px`          |
| `--type-*`              | Typography tokens            | System fonts   |

## Changelog

- v1.0.0: Initial release with zoom, keyboard/touch nav, lazy-loading, WEBP support, and full accessibility.

## Related Components

- [Image](../image/IMAGE.md) - Single image component with caption
- [Button](../button/BUTTON.md) - Navigation and control buttons used internally
- [Icon](../icon/ICON.md) - Font Awesome icons for controls
