# Header Component

A responsive site header component for NT.GOV.AU branding with integrated navigation and search functionality across desktop, tablet, and mobile devices.

## Features

- **NT.GOV.AU Branding** - Official logo with customizable link destination
- **Responsive Navigation** - Adapts from inline links (desktop) to drawer menu (mobile)
- **Integrated Search** - Always visible on desktop, collapsible on tablet/mobile with fixed overlay
- **Accessibility** - Full keyboard navigation, ARIA attributes, focus management, focus trap, body scroll lock
- **External Link Indicators** - Automatic icons for external links with proper security attributes
- **Smooth Animations** - Slide-in drawer and search expansion with reduced-motion support
- **Token-Based Styling** - Uses semantic design tokens for theming and consistency
- **Full Viewport Width** - Header stretches edge-to-edge across the entire screen
- **Responsive Link Spacing** - 8px gap between icons and text in navigation links

## File Structure

```
src/components/header/
├── Header.tsx                 # Main component with state management
├── HeaderDrawer.tsx           # Mobile drawer navigation with focus trap
├── NTGovAULogo.tsx            # SVG logo component
├── header.css                 # All styling with responsive breakpoints
├── Header.stories.tsx         # Storybook stories for all variants
└── HEADER.md                  # Documentation
```

## Component Architecture

### Header.tsx (Main Component)

**State Management:**
- `isSearchExpanded` - Tracks if search bar is expanded on tablet/mobile
- `isDrawerOpen` - Tracks if navigation drawer is open on mobile
- Mutual exclusivity: Only one can be open at a time

**Key Functions:**
- `toggleSearch()` - Opens/closes search expansion, closes drawer if open
- `toggleDrawer()` - Opens/closes navigation drawer, closes search if open
- `closeDrawer()` - Closes drawer and restores focus to hamburger button

**Effects:**
- Auto-focus search input when search expands (100ms delay)
- Escape key handler to collapse search and restore focus
- Cleanup listener removal on unmount

**Return Structure:**
```tsx
<header> // Main header element
  <div className="container">
    <Link> // Logo
    <nav> // Desktop navigation (≥768px)
    <div> // Desktop search (≥992px)
    <Button> // Search toggle (mobile/tablet)
    <Button> // Hamburger menu (mobile only)
  </div>
  {/* Expanded search overlay (tablet/mobile when active) */}
  <HeaderDrawer> // Portal for mobile drawer (mobile only)
</header>
```

### HeaderDrawer.tsx (Mobile Navigation)

**Features:**
- Fixed overlay with backdrop
- Slide-in animation from left
- Focus trap (Tab cycles through focusable elements within drawer)
- Body scroll lock when open
- Auto-closes on any navigation link click
- Closes on backdrop click or Escape key
- Portal rendering (prevents z-index stacking issues)

**Props:**
- `isOpen: boolean` - Controls visibility
- `onClose: () => void` - Called when drawer should close
- `navigationItems: NavigationItem[]` - List of links to display

### NTGovAULogo.tsx (Logo Component)

**Features:**
- SVG component rendering NT.GOV.AU logo
- Fixed size: 122x39px
- Semantic HTML with role="img" and aria-label
- Fill color uses CSS custom property for theming

## Usage

### Basic Usage

```tsx
import { Header } from "@ntg-design-system/components";

function App() {
  return (
    <Header
      navigationItems={[
        {
          href: "https://nt.gov.au/services",
          label: "Find online services",
          external: true,
        },
        {
          href: "/contacts",
          label: "Contacts",
        },
      ]}
      searchProps={{
        placeholder: "Search",
        onSubmit: (value) => {
          window.location.href = `/search?q=${value}`;
        },
      }}
    />
  );
}
```

### With Controlled Search

```tsx
import { Header } from "@ntg-design-system/components";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Header
      navigationItems={[
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
      ]}
      searchProps={{
        placeholder: "Search site...",
        value: searchValue,
        onChange: setSearchValue,
        onSubmit: (value) => {
          console.log("Searching for:", value);
        },
      }}
    />
  );
}
```

### Without Search

```tsx
<Header
  navigationItems={[
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
  ]}
  showSearch={false}
/>
```

### Custom Logo Link

```tsx
<Header
  logoHref="/home"
  navigationItems={[
    { href: "/about", label: "About" },
  ]}
/>
```

## Props

### HeaderProps

| Prop              | Type                        | Default | Description                                    |
| ----------------- | --------------------------- | ------- | ---------------------------------------------- |
| `navigationItems` | `NavigationItem[]`          | `[]`    | Array of navigation link objects               |
| `searchProps`     | `SearchProps`               | `{}`    | Configuration for the search bar               |
| `logoHref`        | `string`                    | `"/"`   | Destination URL when logo is clicked           |
| `showSearch`      | `boolean`                   | `true`  | Whether to display search functionality        |
| `className`       | `string`                    | `""`    | Additional CSS classes                         |
| `...props`        | `HTMLAttributes<HTMLElement>` | -     | Additional HTML attributes for header element  |

### NavigationItem

| Property    | Type      | Required | Description                                    |
| ----------- | --------- | -------- | ---------------------------------------------- |
| `href`      | `string`  | Yes      | Destination URL for the link                   |
| `label`     | `string`  | Yes      | Display text for the link                      |
| `external`  | `boolean` | No       | Whether link is external (adds icon, opens in new tab) |
| `ariaLabel` | `string`  | No       | Custom ARIA label for accessibility            |

### SearchProps

| Property      | Type                          | Description                           |
| ------------- | ----------------------------- | ------------------------------------- |
| `placeholder` | `string`                      | Placeholder text for search input     |
| `value`       | `string`                      | Controlled value for search input     |
| `onChange`    | `(value: string) => void`     | Callback when search value changes    |
| `onSubmit`    | `(value: string) => void`     | Callback when search is submitted     |

## Responsive Behavior

### Desktop (≥992px)

**Layout:** `[Logo] [Nav Links --- Search Bar]`

- Logo on the left (flex-shrink: 0)
- Navigation links with `margin-left: auto` push everything right
- Gap between links reduced to 8px
- Search bar always visible, form right-aligned within wrapper
- Search wrapper has `width: auto` and no margin (sits naturally)
- Header height: 94px

**Behavior:**
- Search always visible, no icon toggle
- No drawer menu
- All navigation links shown inline

### Tablet (768px - 991px)

**Layout:** `[Logo] [Nav Links] [Search Icon] [Hamburger]` (collapsed) → `[Logo] [Nav Links] [Search Icon with overlay] [Hamburger hidden]`

- Logo on the left (flex-shrink: 0)
- Navigation links visible inline with `margin-left: auto`
- Search icon button visible on right
- Hamburger button hidden
- When search icon clicked: Fixed overlay appears covering logo and nav
- Header height: 94px

**Behavior:**
- Navigation always visible inline
- Search expands as fixed overlay with close button
- Drawer menu hidden
- Search and drawer states mutually exclusive (only one open)

### Mobile (<768px)

**Layout:** `[Logo] [Search Icon] [Hamburger]` (collapsed) → `[Search Expanded] [Logo hidden] [Hamburger hidden]`

- Logo on the left (flex-shrink: 0, margin-right: auto)
- Search icon in middle-right (flex-shrink: 0)
- Hamburger button on far right (flex-shrink: 0)
- When search clicked: Fixed overlay covers entire header
- Header height: 72px

**Behavior:**
- Navigation hidden by default, accessible via hamburger menu
- Search expands as full-width fixed overlay with close button
- Drawer menu activated by hamburger button
- Search and drawer mutually exclusive (only one open at a time)

## CSS Architecture

### Core Styling

**Base Header (.ntgds-header)**
- `background: var(--clr-primary-600, #1f1f5f)` - Dark blue background
- `color: var(--clr-text-inverse, #ffffff)` - White text/icons
- `width: 100%` - Full viewport width

**Container (.ntgds-header__container)**
- `display: flex` - Flex layout for responsive alignment
- `align-items: center` - Vertical centering
- `justify-content: space-between` - Distribute elements
- `width: 100%` - Full width (no max-width constraint)
- `padding: 0 var(--sp-md, 16px)` - Horizontal padding

### Responsive Breakpoints

**Mobile (<768px)**
- Container height: 72px
- Search toggle: `display: flex`, `order: -1` (left side)
- Hamburger: `display: flex` (right side)
- Navigation: `display: none`
- Desktop search: `display: none`

**Tablet (768px - 991px)**
- Container height: 94px
- Search toggle: `display: flex` (positioned right via nav `margin-left: auto`)
- Hamburger: `display: none`
- Navigation: `display: flex`
- Desktop search: `display: none`
- Expanded search height: 94px

**Desktop (≥992px)**
- Container height: 94px
- Search toggle: `display: none`
- Hamburger: `display: none`
- Navigation: `display: flex` with `gap: var(--sp-sm, 8px)`
- Desktop search: `display: block`, `width: auto`, form right-aligned

### Expanded Search Overlay

**Mobile/Tablet (.ntgds-header__search-expanded)**
- `position: fixed` - Overlay positioning
- `top: 0, left: 0, right: 0` - Full width
- `z-index: 1050` - Above header, below drawer
- `height: 72px` (mobile) or `94px` (tablet) - Matches header height
- `display: flex`, `align-items: center` - Centering
- Animation: `slideDown` with opacity and translateY

**Search Container (.ntgds-header__search-expanded-container)**
- `display: flex`
- `align-items: center`
- `gap: var(--sp-sm, 8px)` - 8px space between input and close button
- `width: 100%`

**Close Button (.ntgds-header__search-close)**
- `flex-shrink: 0` - Maintains size

### Z-Index Stacking

- Header: default (auto)
- Search expanded: 1050
- Drawer backdrop/panel: 1100

### Animation

**slideDown**
```css
from { opacity: 0; transform: translateY(-10px); }
to { opacity: 1; transform: translateY(0); }
```
- Duration: 300ms
- Easing: ease-out
- Applies to: Search expansion, drawer slide

**Reduced Motion**
- All animations disabled via `@media (prefers-reduced-motion: reduce)`

### Design Tokens

**Colors**
- `--clr-primary-600: #1f1f5f` - Header background
- `--clr-text-inverse: #ffffff` - Text/icon color
- `--clr-focus-focus: #ec8c58` - Focus ring (orange)
- `--clr-accent-500: #ec8c58` - Accent color for inverse links

**Spacing**
- `--sp-xs: 10px` - Drawer padding
- `--sp-sm: 8px` - Link gap, button spacing
- `--sp-md: 16px` - Container padding, nav gap
- `--sp-lg: 20px` - Container gap (logo to nav)

**Typography**
- `--type-font-default: "Lato", sans-serif`
- `--type-desktop-body-default-size: 16px`
- `--type-desktop-body-default-weight: 400`
- `--type-desktop-body-default-lh: 24px`

## Accessibility Implementation

### ARIA Attributes

**Header Element**
- No special ARIA needed (semantic HTML)

**Logo Link**
- `role="img"` on SVG
- `aria-label` for screen readers

**Navigation Links**
- `aria-label` for custom descriptions (optional)
- External links get automatic "opens in new window" treatment

**Search Toggle Button**
- `aria-label="Toggle search"`
- `aria-expanded={isSearchExpanded}` - Current state

**Hamburger Button**
- `aria-label="Toggle navigation menu"`
- `aria-expanded={isDrawerOpen}` - Current state

**Drawer**
- `role="dialog"` on panel
- `aria-modal="true"` on panel
- `aria-label="Navigation menu"` on panel

### Keyboard Navigation

**Tab Key**
- Cycles through: Logo, Nav links, Search button, Hamburger
- When drawer open: Cycles only within drawer (focus trap)
- Focus indicator: 2px orange outline with 2px offset

**Enter/Space**
- Activates buttons and links

**Escape Key**
- Closes expanded search and returns focus to search button
- Closes drawer and returns focus to hamburger button
- No action in drawer (handled by component)

### Focus Management

**Auto-Focus Behavior**
- Search input auto-focused when search expands (100ms delay for animation)
- First drawer link focused when drawer opens
- Focus restored to trigger button when closing

**Focus Trap in Drawer**
- Tab cycles through drawer links and close button only
- Shift+Tab cycles backwards
- No focus escape while drawer open

**Visual Focus Indicators**
- 2px solid orange outline (`--clr-focus-focus`)
- 2px offset from element
- 2px border-radius on button elements
- High contrast mode: Respects `@media (forced-colors: active)` for 2px outline

### Screen Reader Support

**Announced Information**
- Header semantic structure (landmark)
- Link destinations and purposes
- Button states (expanded/collapsed)
- External link indicators
- Drawer modal status
- Form labels for search

**Skip Links**
- Not included in Header itself but can be added at page level

## Performance Optimizations

### CSS

**will-change**
- Applied to `.ntgds-header-drawer__panel` for transform animations

**pointer-events**
- Backdrop has `pointer-events: auto` to handle clicks

**Animations**
- Use GPU-accelerated properties (transform, opacity)
- No layout-triggering animations (width, height)

### JavaScript

**Effect Dependencies**
- Debounce focus management with timeouts to avoid rapid rerenders
- Cleanup listeners on unmount
- Dependencies specified for escape key handler

**Portal Usage**
- Drawer rendered via Portal to prevent CSS stacking context issues

## Browser Compatibility

| Browser | Version | Support |
| --- | --- | --- |
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| iOS Safari | 14+ | ✅ Full |
| Chrome Mobile | Latest | ✅ Full |

**Note:** CSS Grid, Flexbox, CSS Custom Properties, and ES6+ are required.

## Examples

### Full NT.GOV.AU Header

```tsx
<Header
  navigationItems={[
    {
      href: "https://nt.gov.au/services",
      label: "Find online services",
      external: true,
      ariaLabel: "Find online services (opens in new window)",
    },
    {
      href: "https://nt.gov.au/contacts",
      label: "Contacts",
    },
  ]}
  searchProps={{
    placeholder: "Search",
    onSubmit: (value) => {
      window.location.href = `https://nt.gov.au/search?q=${encodeURIComponent(value)}`;
    },
  }}
  logoHref="https://nt.gov.au"
/>
```

### Simple Internal Site Header

```tsx
<Header
  navigationItems={[
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/contact", label: "Contact" },
  ]}
  searchProps={{
    placeholder: "Search our site",
    onSubmit: (value) => {
      navigate(`/search?q=${value}`);
    },
  }}
  logoHref="/"
/>
```

### Header with Event Tracking

```tsx
<Header
  navigationItems={[
    { href: "/services", label: "Services" },
  ]}
  searchProps={{
    placeholder: "Search",
    onSubmit: (value) => {
      // Track search event
      analytics.track("search", { query: value });
      // Navigate to results
      window.location.href = `/search?q=${value}`;
    },
  }}
/>
```

### Minimal Header

```tsx
<Header navigationItems={[]} showSearch={false} />
```

## Related Components

- [Link](../link/LINK.md) - Used for navigation items with inverse styling
- [Button](../button/BUTTON.md) - Used for search and hamburger toggles
- [Icon](../icon/ICON.md) - Used for visual indicators (search, external, hamburger, close)
- [SearchBar](../search-bar/SEARCHBAR.md) - Integrated search functionality

## Common Patterns

### Handling Navigation Clicks

```tsx
const navigationItems = [
  {
    href: "/about",
    label: "About",
    ariaLabel: "Learn about us",
  },
];

// Drawer auto-closes when link clicked (handled internally)
// Optional: Add analytics tracking to links
```

### Custom Search Behavior

```tsx
const [searchValue, setSearchValue] = useState("");

const handleSearchSubmit = (value: string) => {
  // Clear input
  setSearchValue("");
  // Navigate or fetch results
};

<Header
  searchProps={{
    value: searchValue,
    onChange: setSearchValue,
    onSubmit: handleSearchSubmit,
  }}
/>
```

### Theming via CSS Custom Properties

```css
:root {
  --clr-primary-600: #1a1a3f; /* Custom header color */
  --clr-text-inverse: #f5f5f5; /* Custom text color */
  --clr-focus-focus: #ffa500; /* Custom focus color */
}
```

## Troubleshooting

**Search not expanding on click**
- Check if `isSearchExpanded` state is updating
- Verify SearchBar component is rendering
- Check CSS for `.ntgds-header__search-expanded` visibility

**Drawer not closing on link click**
- Ensure navigation links have `href` attribute
- Check if `closeDrawer()` is called in HeaderDrawer
- Verify onClick handlers aren't preventing default

**Focus not visible**
- Check CSS for focus-visible styles
- Verify `outline` and `outline-offset` properties
- Test with keyboard navigation (Tab key)

**Animations not smooth**
- Check for `prefers-reduced-motion` affecting animations
- Verify animation keyframes are correct
- Check z-index conflicts with other elements

## Notes for Developers & AI Agents

1. **Header maintains full viewport width** - No max-width constraint, uses 100% width
2. **Mutual exclusivity** - Search expanded and drawer open cannot both be true simultaneously
3. **Portal rendering** - Drawer uses React Portal to avoid CSS stacking context issues
4. **Focus trap** - Drawer implements focus cycling with Tab/Shift+Tab
5. **Body scroll lock** - Drawer prevents body scrolling when open
6. **Auto-close behavior** - Drawer closes when any navigation link is clicked
7. **Search overlay** - Fixed positioning used for search expansion to cover header content
8. **Animation performance** - Uses transform and opacity (GPU-accelerated properties only)
9. **Design tokens** - All colors and spacing use CSS custom properties for theming
10. **Responsive strategy** - Mobile-first approach with breakpoints at 768px and 992px
11. **Link styling** - Uses inverse color variant (`ntgds-link--inverse`) on dark background
12. **Icon spacing** - Navigation links have 8px gap between text and icons

## Changelog

- **v1.0.0** - Initial Header component release
  - Full responsive design (mobile, tablet, desktop)
  - Integrated search with expand/collapse
  - Mobile drawer navigation with focus trap
  - NT.GOV.AU logo branding
  - Comprehensive accessibility features
  - Smooth animations with reduced-motion support

