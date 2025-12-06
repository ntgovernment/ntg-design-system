# HeroBanner Component

A prominent page header component that displays breadcrumb navigation, page title, description, call-to-action button, and optional popular links section. Typically used at the top of landing pages to provide context and guide users to key content.

## Usage

```tsx
import { HeroBanner } from "ntg-design-system";

function MyPage() {
  return (
    <HeroBanner
      variant="primary"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Current page" },
      ]}
      title="Page title"
      description="Optional short description of the page goal"
      ctaLabel="Call to action"
      ctaHref="/action"
      popularLinks={[
        { label: "Bus timetables and maps", href: "/transport/timetables" },
        { label: "Check your rego", href: "/transport/rego" },
        { label: "Find a Motor Vehicle Registry (MVR)", href: "/transport/mvr" },
        { label: "Government priorities", href: "/about/priorities" },
      ]}
      showBreadcrumbs={true}
      showCta={true}
      showPopular={true}
      showGraphic={true}
      popularHeading="Popular"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary"` | `"primary"` | Visual style variant. Primary uses purple/blue background, secondary uses light gray. |
| `breadcrumbs` | `BreadcrumbItem[]` | `undefined` | Array of breadcrumb navigation items. Automatically uses collapsed variant when more than 3 items. |
| `title` | `string` | *required* | Main page title displayed prominently at 32px (desktop) or 28px (mobile). |
| `description` | `string` | `undefined` | Optional short description text explaining the page goal. |
| `ctaLabel` | `string` | `undefined` | Label for the call-to-action button. |
| `ctaHref` | `string` | `undefined` | Destination URL for the CTA button. |
| `ctaOnClick` | `() => void` | `undefined` | Click handler for the CTA button. Takes precedence over `ctaHref`. |
| `popularLinks` | `HeroBannerPopularLink[]` | `[]` | Array of popular page links displayed as white pills. |
| `showBreadcrumbs` | `boolean` | `true` | Show/hide the breadcrumbs section. |
| `showCta` | `boolean` | `true` | Show/hide the call-to-action button. |
| `showPopular` | `boolean` | `true` | Show/hide the popular links section. |
| `showGraphic` | `boolean` | `true` | Show/hide the background graphic (Desert Rose). |
| `popularHeading` | `string` | `"Popular"` | Heading text for the popular links section. |
| `className` | `string` | `""` | Additional CSS classes for custom styling. |
| `ariaLabel` | `string` | `"Page header"` | ARIA label for the banner section. |
| `graphicOpacity` | `number` | `0.2` | Opacity of the background graphic (0-1). |

### BreadcrumbItem Interface

```tsx
interface BreadcrumbItem {
  label: string;
  href?: string; // Omit for current page
}
```

### HeroBannerPopularLink Interface

```tsx
interface HeroBannerPopularLink {
  label: string;
  href: string;
}
```

## Examples

### Complete Example

Full-featured hero banner with all elements:

```tsx
<HeroBanner
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Transport", href: "/services/transport" },
    { label: "Current page" },
  ]}
  title="Page title"
  description="Optional short description of the page goal"
  ctaLabel="Call to action"
  ctaHref="/action"
  popularLinks={[
    { label: "Bus timetables and maps", href: "/transport/timetables" },
    { label: "Check your rego", href: "/transport/rego" },
  ]}
/>
```

### Without Popular Links

Hero banner focusing on main content only:

```tsx
<HeroBanner
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Current page" },
  ]}
  title="Simple Hero Banner"
  description="A minimal hero banner without popular links"
  ctaLabel="Learn more"
  ctaHref="/learn"
  showPopular={false}
/>
```

### Minimal

Hero banner with only required props:

```tsx
<HeroBanner title="Welcome to NT.GOV.AU" />
```

### With Click Handler

Using `ctaOnClick` instead of `ctaHref`:

```tsx
<HeroBanner
  title="Interactive Banner"
  ctaLabel="Get started"
  ctaOnClick={() => {
    console.log("CTA clicked!");
    // Custom logic here
  }}
/>
```

### Secondary Variant

Light background variant with standard text colors:

```tsx
<HeroBanner
  variant="secondary"
  title="Secondary Hero Banner"
  description="Light gray background with dark text"
  ctaLabel="Learn more"
  ctaHref="/learn"
/>
```

### Toggle Sections

Control visibility of individual sections:

```tsx
<HeroBanner
  title="Customized Banner"
  showBreadcrumbs={false}
  showCta={false}
  showPopular={true}
  showGraphic={false}
  popularLinks={[
    { label: "Quick link 1", href: "#" },
    { label: "Quick link 2", href: "#" },
  ]}
/>
```

## Variants

### Primary (Default)
- **Background**: Purple/blue (`--theme-colour-primary-blue-400`, #44447a)
- **Text**: White/inverse colors
- **Use case**: Main landing pages, important sections

### Secondary
- **Background**: Light gray (`--theme-colour-neutrals-100`, #f6f6f6)
- **Text**: Dark/default colors
- **Use case**: Sub-pages, content sections with lighter emphasis

## Styling

The HeroBanner component uses the NT Government design tokens for consistent theming:

**Primary Variant:**
- **Background**: `--theme-colour-primary-blue-400` (#44447a)
- **Text Color**: `--clr-text-inverse` (white)

**Secondary Variant:**
- **Background**: `--theme-colour-neutrals-100` (#f6f6f6)
- **Text Color**: `--clr-text-default` (dark)

**Layout:**
- **Spacing**: `--sp-xl` (24px top padding), `--sp-xxxl` (48px bottom padding)
- **Container**: Max-width 1200px, centered
- **Grid**: Single column on mobile, 2-column on tablet/desktop (768px+)
- **Popular Links**: White background pills with 8px padding
- **Background Graphic**: Desert Rose positioned at bottom-right, 20% opacity by default

### Layout Behavior

- **Mobile (<768px)**: Single column, full-width popular links, smaller title (28px)
- **Tablet/Desktop (≥768px)**: 2-column grid with flexible main content and fixed-width popular section (449px)

### Breadcrumb Integration

The component automatically applies inverse styling to breadcrumbs:
- White link color with underline
- Standard focus states maintained
- Collapsed variant automatically used when >3 items

### Popular Link Pills

Popular links are displayed as white pill-shaped buttons:
- White background on purple
- 8px padding
- Hover: Slight background darkening
- Focus: Standard focus ring with brand colors

## Accessibility

- Uses semantic HTML (`<section>`, `<h1>`, `<aside>`)
- ARIA labels for navigation regions
- Keyboard accessible for all interactive elements
- Focus states visible on all links and buttons
- Supports screen readers with proper heading hierarchy

## Design Tokens Used

| Token | Purpose |
|-------|---------|
| `--theme-colour-primary-blue-400` | Primary variant background (#44447a) |
| `--theme-colour-neutrals-100` | Secondary variant background (#f6f6f6) |
| `--clr-text-inverse` | White text on primary variant |
| `--clr-text-default` | Dark text on secondary variant |
| `--clr-link-default` | Link color (secondary variant breadcrumbs) |
| `--clr-link-hover` | Link hover color |
| `--clr-surface-default` | Popular link pill background |
| `--clr-surface-hover` | Popular link hover state |
| `--clr-focus-focus` | Focus state background |
| `--clr-stroke-strong` | Focus state border |
| `--sp-xs` (8px) | Popular link padding, grid gaps |
| `--sp-md` (16px) | Container padding (mobile), content gaps |
| `--sp-xl` (24px) | Top padding, breadcrumb bottom padding |
| `--sp-xxl` (32px) | Content grid gap |
| `--sp-xxxl` (48px) | Bottom padding |
| `--type-desktop-heading-xl-*` | Title typography (32px) |
| `--type-desktop-heading-sm-*` | Popular heading typography (20px) |
| `--type-desktop-body-default-*` | Description and link typography (16px) |

## Sub-Components

- **HeroBannerGraphic** - Desert Rose SVG background graphic
- **HeroBannerLink** - Custom link styled for popular section

## Related Components

- **[Breadcrumbs](./BREADCRUMBS.md)** - Used internally for navigation
- **[Button](./BUTTON.md)** - Used for call-to-action

## Storybook

View interactive examples and play with props in [Storybook](https://ntgovernment.github.io/ntg-design-system/?path=/docs/components-herobanner--docs).
