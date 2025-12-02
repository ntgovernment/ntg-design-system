# Card Component

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System)

## Overview

The Card component provides a flexible, accessible container for displaying content with optional image, header, footer, and clickable behavior. It seamlessly integrates with existing design system components (Tag, Button, Image, Link) and supports responsive grid layouts with mobile-optimized image sizing.

## Features

- **ReactNode Composition** - Accept Image, Icon, and other components as ReactNode for maximum flexibility
- **Multiple Variants** - Support for default, minicard, and static layouts with different icon positioning
- **Icon Support** - Optional icon display with flexible positioning (inline, vertical, or left-aligned)
- **Component Integration** - Works seamlessly with Tag, Button, Image, Icon, and Link components
- **Clickable Cards** - Link wrapper makes entire card clickable with hover states (title color, shadow elevation)
- **Keyboard Navigation** - Full keyboard support with Tab navigation and visible focus states
- **Responsive Grid Layout** - Built-in width constraints: 4 columns (lg), 6 columns (md), 12 columns (mobile)
- **Mobile-Optimized Images** - Image height adapts: 200px on desktop, 150px on mobile
- **Figma-Precise Spacing** - Exact padding and gap values from design specifications
- **Theme-Aware Tokens** - All styling uses semantic design tokens for consistent theming
- **Accessibility First** - Semantic HTML, ARIA support, keyboard navigation, focus indicators, screen reader optimized

## Card Variants

The Card component supports three layout variants:

### Default Variant
Standard card with optional inline icon next to the title. Icon and title are horizontally aligned with an 8px gap.

### Minicard Variant
Compact card with icon positioned vertically above the title. Uses reduced padding (24px) and vertical layout, ideal for topic cards or navigation elements.

### Static Variant
Horizontal layout with a large icon (48px) on the left and title/description stacked on the right. Uses 12px gap, ideal for contact cards or information blocks.

## Usage

### Basic Card

```tsx
import { Card } from "@ntg/design-system";

<Card
  title="Card Title"
  description="This is a simple card with just a title and description."
/>
```

### Card with Icon (Default Variant)

```tsx
import { Card, Icon } from "@ntg/design-system";

<Card
  icon={<Icon name="heart" size="md" color="primary" />}
  title="Card with Icon"
  description="Join in and honour the resilience of survivors and the lives lost."
/>
```

### Card with Icon (Minicard Variant)

```tsx
import { Card, Icon } from "@ntg/design-system";

<Card
  icon={<Icon name="compass" size="md" color="primary" />}
  variant="minicard"
  title="Card title"
/>
```

### Card with Icon (Static Variant)

```tsx
import { Card, Icon } from "@ntg/design-system";

<Card
  icon={<Icon name="phone" size="lg" color="primary" />}
  variant="static"
  title="Card title"
  description="1800 000 000 or ext 12345"
/>
```

### Card with Image

```tsx
import { Card, Image } from "@ntg/design-system";

<Card
  image={
    <Image
      src="/path/to/image.jpg"
      alt="Northern Territory landscape"
      width="400"
      height="200"
    />
  }
  title="NT Government Announces New Initiative"
  description="Comprehensive update on the latest program designed to support Territory communities."
/>
```

### Card with Header (Tag + Date)

```tsx
import { Card, Tag } from "@ntg/design-system";

<Card
  header={
    <>
      <Tag variant="top-end-ac">TOP END</Tag>
      <span className="ntgds-card__date">2 Dec 2025</span>
    </>
  }
  title="Community Consultation Opens"
  description="Residents invited to provide feedback on proposed improvements."
/>
```

### Card with Footer (Button)

```tsx
import { Card, Button } from "@ntg/design-system";

<Card
  title="Understanding Heritage Programs"
  description="Explore how the NT Government is preserving indigenous heritage sites."
  footer={
    <Button variant="tertiary" iconRight="arrow-right">
      Read more
    </Button>
  }
/>
```

### Full Card (All Elements)

```tsx
import { Card, Image, Tag, Button } from "@ntg/design-system";

<Card
  image={
    <Image
      src="/news-thumbnail.jpg"
      alt="News article thumbnail"
      width="400"
      height="200"
    />
  }
  header={
    <>
      <Tag variant="darwin-ac">DARWIN</Tag>
      <span className="ntgds-card__date">2 Dec 2025</span>
    </>
  }
  title="Annual Territory Day Celebrations"
  description="Join us for fireworks, live music, and family activities at Mindil Beach."
  footer={
    <Button variant="tertiary" iconRight="arrow-right">
      View details
    </Button>
  }
/>
```

### Clickable Card (with href)

```tsx
import { Card, Image, Tag } from "@ntg/design-system";

<Card
  image={
    <Image src="/article.jpg" alt="Article preview" width="400" height="200" />
  }
  header={
    <>
      <Tag variant="subtle">ARTICLE</Tag>
      <span className="ntgds-card__date">28 Nov 2025</span>
    </>
  }
  title="Understanding Territory Heritage Programs"
  description="Explore how the NT Government is preserving heritage sites."
  href="/articles/heritage-programs"
/>
```

**Note:** When `href` is provided, the entire card becomes clickable. Footer buttons remain visible but have pointer events disabled to prevent nested interactivity.

## Props

| Prop          | Type          | Default | Description                                                                                                    |
| ------------- | ------------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| `image`       | `ReactNode`   | -       | Image content (pass Image component as ReactNode for maximum flexibility)                                      |
| `header`      | `ReactNode`   | -       | Header content (typically Tag + date with `.ntgds-card__date` class)                                           |
| `icon`        | `ReactNode`   | -       | Icon to display (positioning depends on variant: inline, vertical, or left-aligned)                            |
| `variant`     | `string`      | `'default'` | Card layout variant: `'default'`, `'minicard'`, or `'static'`                                              |
| `title`       | `string`      | **required** | Card title (required for semantic consistency, screen readers, and SEO)                                   |
| `description` | `string`      | -       | Card description text                                                                                          |
| `footer`      | `ReactNode`   | -       | Footer content (typically Button with tertiary variant and arrow icon)                                         |
| `href`        | `string`      | -       | Link destination (makes entire card clickable via Link wrapper, footer buttons disabled)                       |
| `disabled`    | `boolean`     | `false` | Whether the card is disabled (reduces opacity, disables pointer events)                                        |
| `className`   | `string`      | `''`    | Additional CSS classes                                                                                         |

**Important:** `title` is required for semantic HTML, accessibility (screen readers), and SEO. While you can technically pass an empty string, this is **strongly discouraged** as it breaks semantic meaning and harms accessibility.

**Clickable Cards:** When `href` is provided:
- The entire card becomes clickable via Link wrapper
- Footer buttons remain visible but have `pointer-events: none` to prevent nested interactions
- Hover state applies title color change (#c33826) and box-shadow elevation
- Focus state shows orange box-shadow (4px, #ec8c58) for keyboard navigation
- All cards are keyboard accessible via Tab key

## Styling and Tokens

### Responsive Breakpoints

| Breakpoint      | Token                       | Value  | Grid Columns | Card Width |
| --------------- | --------------------------- | ------ | ------------ | ---------- |
| **Large (lg)**  | `--global-breakpoints-lg`   | 992px  | 4 columns    | 33.33%     |
| **Medium (md)** | `--global-breakpoints-md`   | 768px  | 6 columns    | 50%        |
| **Small**       | `--global-breakpoints-sm`   | 320px  | 12 columns   | 100%       |

### Component Measurements

| Element         | Property          | Desktop Value             | Mobile Value              | Token/Fallback                          |
| --------------- | ----------------- | ------------------------- | ------------------------- | --------------------------------------- |
| Card            | Border            | 1px solid                 | 1px solid                 | `var(--clr-stroke-subtle, #d4d4d2)`     |
| Card            | Background        | White                     | White                     | `var(--clr-surface-default, #fff)`      |
| Image           | Height            | 200px                     | 150px                     | Fixed value (responsive)                |
| Image           | Width             | 100%                      | 100%                      | Full container width                    |
| Header          | Padding           | 24px 24px 4px             | 24px 24px 4px             | Fixed values                            |
| Body            | Padding           | 24px 24px 4px             | 24px 24px 4px             | Fixed values                            |
| Body            | Gap               | 12px                      | 12px                      | Fixed value                             |
| Footer          | Padding           | 8px 24px 24px             | 8px 24px 24px             | Fixed values                            |
| Title           | Font Size         | 20px                      | 20px                      | Fixed value                             |
| Title           | Line Height       | 24px                      | 24px                      | Fixed value                             |
| Title           | Font Weight       | 700 (Bold)                | 700 (Bold)                | Fixed value                             |
| Title           | Color             | #1f1f5f                   | #1f1f5f                   | `var(--clr-text-default, #1f1f5f)`      |
| Description     | Font Size         | 16px                      | 16px                      | Fixed value                             |
| Description     | Line Height       | 24px                      | 24px                      | Fixed value                             |
| Description     | Color             | #3b3b3a                   | #3b3b3a                   | `var(--clr-text-body, #3b3b3a)`         |
| Date            | Font Size         | 14px                      | 14px                      | Fixed value                             |
| Date            | Line Height       | 20px                      | 20px                      | Fixed value                             |
| Date            | Color             | #3b3b3a                   | #3b3b3a                   | `var(--clr-text-body, #3b3b3a)`         |
| Hover (clickable) | Border Color    | Action color              | Action color              | `var(--clr-action-default, #003f87)`    |
| Focus (clickable) | Outline         | 2px solid                 | 2px solid                 | `var(--clr-focus-focus, #107cc0)`       |

### Design Tokens Used

| Token                      | Purpose                        | Fallback Value |
| -------------------------- | ------------------------------ | -------------- |
| `--clr-surface-default`    | Card background                | `#fff`         |
| `--clr-stroke-subtle`      | Card border                    | `#d4d4d2`      |
| `--clr-text-default`       | Title text color               | `#1f1f5f`      |
| `--clr-text-body`          | Description and date text      | `#3b3b3a`      |
| `--clr-action-default`     | Hover border color (clickable) | `#003f87`      |
| `--clr-focus-focus`        | Focus outline color            | `#107cc0`      |
| `--type-font-default`      | Font family                    | Lato, Arial    |

## Component Integration

### Tag in Header

Use Tag component with accessible color variants (`-ac` suffix) for better contrast:

```tsx
<Card
  header={
    <>
      <Tag variant="darwin-ac">DARWIN</Tag>
      <span className="ntgds-card__date">2 Dec 2025</span>
    </>
  }
  title="Regional News"
  description="Latest updates from the Darwin region."
/>
```

**Available Accessible Tag Variants:**
- `darwin-ac` - #398600 (accessible Darwin green)
- `top-end-ac` - #00819e (accessible Top End blue)
- `barkly-ac` - #d2430f (accessible Barkly orange)
- `central-australia-ac` - #e8114b (accessible Central Australia red)

### Button in Footer

Use tertiary Button variant with arrow-right icon (recommended pattern):

```tsx
<Card
  title="Article Title"
  description="Article summary text."
  footer={
    <Button variant="tertiary" iconRight="arrow-right">
      Read more
    </Button>
  }
/>
```

**Button Configuration:**
- Variant: `tertiary` (recommended for card footers)
- Icon: `arrow-right` positioned right
- Text: Action-oriented (e.g., "Read more", "Learn more", "View details")
- **padLeft prop**: Set to `false` for tertiary buttons to align with card text/tags

```tsx
<Card
  title="Card with Footer"
  footer={
    <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>
      Read more
    </Button>
  }
/>
```

**Why padLeft={false}?**
- Removes left padding from tertiary buttons
- Aligns button text with card body text and tags
- Creates cleaner visual hierarchy in card footers
- Recommended pattern for all card footer buttons

### Image as ReactNode

Pass Image component as ReactNode to `image` prop:

```tsx
import { Card, Image } from "@ntg/design-system";

<Card
  image={
    <Image
      src="/path/to/image.jpg"
      alt="Descriptive alt text"
      width="400"
      height="200"
    />
  }
  title="Card with Image"
/>
```

**Image Best Practices:**
- Always provide descriptive `alt` text for accessibility
- Use aspect ratio close to 2:1 (e.g., 400x200) for optimal display
- Image will be cropped to fill container (object-fit: cover)
- Responsive height: 200px desktop, 150px mobile

### Link Wrapper for Clickable Cards

When `href` is provided, Card wraps content in Link component:

```tsx
<Card
  href="/article/123"
  title="Clickable Card"
  description="Entire card is clickable with hover state."
/>
```

**Clickable Card Behavior:**
- Entire card becomes interactive via Link wrapper
- Hover applies title color change to `#c33826` and box-shadow elevation (`0px 6px 12px rgba(0, 0, 0, 0.1)`)
- Hover also changes footer button label color to match title for visual consistency
- Focus shows orange box-shadow ring (`0 0 0 4px #ec8c58`) without border change to prevent layout shift
- Footer buttons remain visible but have `pointer-events: none` to prevent nested interactions
- No text decoration (underlines) on clickable cards
- Keyboard accessible (Tab to focus, Enter to navigate)

## Responsive Design

### Breakpoint Strategy

The Card component uses a **mobile-first responsive approach** with three breakpoints:

#### Mobile (<768px)
- **Width**: 100% (12 columns)
- **Image Height**: 150px
- **Use Case**: Single column layout, stacked cards

#### Medium (768px - 991px)
- **Width**: 50% (6 columns)
- **Image Height**: 200px
- **Use Case**: Two-column grid, tablets in portrait

#### Large (≥992px)
- **Width**: 33.33% (4 columns)
- **Image Height**: 200px
- **Use Case**: Three-column grid, desktop displays

### Grid Layout Example

```tsx
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
  }}
>
  <Card {...props1} />
  <Card {...props2} />
  <Card {...props3} />
  <Card {...props4} />
</div>
```

**Grid Container Recommendations:**
- Use CSS Grid with `repeat(auto-fill, minmax(300px, 1fr))`
- Gap: 24px between cards (matches design system spacing)
- Max-width: 1200px for optimal readability
- Cards automatically adjust to available space

### Image Height Responsiveness

The Card component automatically adjusts image height based on viewport width:

```css
/* Mobile default */
.ntgds-card__image {
  height: 150px;
}

/* Desktop (≥768px) */
@media (min-width: 768px) {
  .ntgds-card__image {
    height: 200px;
  }
}
```

**Rationale:**
- Reduces image dominance on small screens
- Improves content visibility on mobile
- Maintains aspect ratio with object-fit: cover
- Faster page load on mobile (less visible image area)

## Accessibility

The Card component follows WCAG 2.1 AA guidelines and implements accessible patterns:

### Semantic HTML

- Uses `<article>` element for semantic structure
- Uses `<h3>` for title (appropriate heading level for card contexts)
- Proper content hierarchy (header → body → footer)

### Required Title

The `title` prop is **required** for semantic consistency:

```tsx
// ✅ Good: Descriptive title
<Card title="Annual Territory Day Celebrations" />

// ❌ Bad: Empty title (technically allowed but discouraged)
<Card title="" />
```

**Why Title is Required:**
- **Screen Readers**: Title provides primary context for card content
- **SEO**: Search engines use title as primary semantic signal
- **Keyboard Navigation**: Screen reader users navigate by headings
- **Content Structure**: Maintains proper document outline

While you can pass an empty string to satisfy TypeScript, this breaks semantic meaning and should be avoided. If you truly need a title-less card, reconsider whether Card is the right component.

### Alternative Text for Images

Always provide descriptive `alt` text for images:

```tsx
<Card
  image={
    <Image
      src="/event.jpg"
      alt="Territory Day fireworks over Mindil Beach"
      width="400"
      height="200"
    />
  }
  title="Territory Day Event"
/>
```

### Keyboard Navigation

All cards support keyboard navigation for improved accessibility:

- **Tab**: Focus on any card (clickable or non-clickable)
- **Enter**: Activate focused clickable card (when `href` is provided)
- **Focus Indicator**: Orange box-shadow ring (4px, #ec8c58) without border change to prevent layout shift

**Implementation Details:**
- Non-clickable cards: `tabIndex={0}` enables keyboard focus
- Clickable cards: Link wrapper is naturally focusable
- Focus ring uses `box-shadow` instead of `border` to prevent 1px layout shift
- Focus color: `#ec8c58` (orange) for high contrast visibility

### Card Interactivity Behavior

**Important Change:** As of the latest version, `href` and `footer` can coexist. When both are provided:

```tsx
// ✅ Now Supported: Clickable card with visible footer
<Card
  href="/article"
  title="Article Title"
  footer={
    <Button variant="tertiary" iconRight="arrow-right" padLeft={false}>
      Read more
    </Button>
  }
/>
```

**Behavior:**
- Entire card is clickable via Link wrapper
- Footer buttons remain visible but have `pointer-events: none` to prevent nested interactions
- Hover state applies to both title color and footer button appearance
- This allows visual consistency while maintaining accessibility

**Accessibility Considerations:**
- Footer buttons are disabled via CSS (`pointer-events: none`) when card is clickable
- Screen readers navigate the card as a single interactive element
- Keyboard users activate the entire card with Enter key
- No nested interactive elements for assistive technology

### Accessible Color Variants

Use Tag variants with `-ac` suffix for improved contrast:

```tsx
<Card
  header={
    <>
      <Tag variant="darwin-ac">DARWIN</Tag>
      <span className="ntgds-card__date">2 Dec 2025</span>
    </>
  }
  title="Regional Update"
/>
```

**Available Accessible Variants:**
- `darwin-ac`, `top-end-ac`, `barkly-ac`, `central-australia-ac`
- All meet WCAG AA contrast ratio (4.5:1 minimum)
- Many meet WCAG AAA contrast ratio (7:1 minimum)

### High Contrast Mode

The Card component supports Windows High Contrast mode:

```css
@media (forced-colors: active) {
  .ntgds-card {
    border: 1px solid CanvasText;
  }

  .ntgds-card-link:hover .ntgds-card {
    border: 2px solid LinkText;
  }
}
```

## Examples

### News Article Card

```tsx
<Card
  image={
    <Image
      src="/news-thumbnail.jpg"
      alt="Community consultation session"
      width="400"
      height="200"
    />
  }
  header={
    <>
      <Tag variant="default">NEWS</Tag>
      <span className="ntgds-card__date">1 Dec 2025</span>
    </>
  }
  title="Community Consultation Opens for Major Project"
  description="Residents invited to provide feedback on proposed infrastructure improvements in the greater Darwin area."
  footer={
    <Button variant="tertiary" iconRight="arrow-right">
      Learn more
    </Button>
  }
/>
```

### Event Card

```tsx
<Card
  image={
    <Image
      src="/event-venue.jpg"
      alt="Mindil Beach sunset"
      width="400"
      height="200"
    />
  }
  header={
    <>
      <Tag variant="darwin-ac">DARWIN</Tag>
      <span className="ntgds-card__date">15 Dec 2025</span>
    </>
  }
  title="Annual Territory Day Celebrations"
  description="Join us for fireworks, live music, and family activities at Mindil Beach to celebrate Territory Day."
  footer={
    <Button variant="tertiary" iconRight="arrow-right">
      View details
    </Button>
  }
/>
```

### Article Link Card

```tsx
<Card
  image={
    <Image
      src="/heritage-site.jpg"
      alt="Indigenous rock art site"
      width="400"
      height="200"
    />
  }
  header={
    <>
      <Tag variant="subtle">ARTICLE</Tag>
      <span className="ntgds-card__date">28 Nov 2025</span>
    </>
  }
  title="Understanding Territory Heritage Programs"
  description="Explore how the NT Government is preserving and promoting indigenous heritage sites across the region."
  href="/articles/heritage-programs"
/>
```

## Best Practices

### Content Guidelines

1. **Title Length**: Keep titles under 60 characters for optimal readability
2. **Description Length**: Limit descriptions to 120-160 characters (2-3 lines)
3. **Title Required**: Always provide meaningful title text (avoid empty strings)
4. **Action-Oriented Text**: Use verbs in button text ("Read more", "Learn more", "View details")

### Image Guidelines

1. **Alt Text**: Always provide descriptive alt text for accessibility
2. **Aspect Ratio**: Use images close to 2:1 ratio (e.g., 400x200, 800x400)
3. **File Size**: Optimize images for web (aim for <200KB)
4. **Responsive Images**: Consider providing srcset for different screen densities

### Tag Selection

1. **Accessible Variants**: Use `-ac` suffix variants for better contrast (darwin-ac, top-end-ac, barkly-ac, central-australia-ac)
2. **Semantic Labels**: Use Tags to categorize content (region, type, status)
3. **Consistency**: Use consistent Tag variants across similar content types

### Interaction Patterns

1. **Exclusive href/footer**: Choose one interaction model:
   - Clickable card: Use `href` for navigation
   - Card with actions: Use `footer` with Button
2. **Tertiary Buttons**: Use tertiary variant in footers (recommended pattern)
3. **Icon Direction**: Place arrow icons right for forward navigation (`iconRight="arrow-right"`)

### Responsive Layout

1. **Grid Container**: Use CSS Grid with `repeat(auto-fill, minmax(300px, 1fr))`
2. **Gap Spacing**: Use 24px gap between cards
3. **Max Width**: Constrain grid container to 1200px for readability
4. **Mobile Testing**: Test at all breakpoints (mobile, tablet, desktop)

## Storybook Examples

See `Card.stories.tsx` for interactive demos including:

- **Default** - Simple card with title and description
- **WithImage** - Card with Image component
- **WithHeader** - Card with Tag and date
- **WithFooter** - Card with Button footer
- **FullCardFigma** - Complete implementation matching Figma design
- **NewsCard** - Real-world news article example
- **EventCard** - Event card with Darwin accessible Tag
- **ClickableCard** - Clickable card with href (hover to see border change)
- **DisabledCard** - Disabled state demonstration
- **GridDemo** - Responsive grid layout with 4 cards showing breakpoint behavior

## Changelog

### v1.0.0 (2025-12-02)
- Initial implementation with ReactNode composition
- Responsive grid layout with 4-6-12 column constraints at lg/md/mobile breakpoints
- Mobile-optimized image sizing (200px desktop, 150px mobile)
- Integration with Tag, Button, Image, and Link components
- Clickable card support with Link wrapper and hover border-color change
- Mutual exclusivity between href and footer props
- Comprehensive Storybook stories and documentation
- Full accessibility support (semantic HTML, ARIA, keyboard navigation)
- High Contrast mode support

---

**© Northern Territory Government**
