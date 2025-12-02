# Accordion Component

A flexible, accessible accordion component for displaying collapsible content sections. Built using React Context API with compound component pattern, supporting both single and multiple open items.

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System)

## Features

- **Two Modes**: Single (one item open at a time) or Multiple (any number of items can be open)
- **Toggle All Button**: Optional "Open all" / "Close all" functionality for multiple mode
- **Compound Components**: `<Accordion>` and `<AccordionItem>` for flexible composition
- **Default Open Items**: Configure which items are expanded on initial render
- **Keyboard Accessible**: Full keyboard navigation with proper ARIA attributes
- **Semantic HTML**: Uses native button elements with proper ARIA roles
- **Theme-Aware**: Automatically adapts to NT.GOV.AU and NTG Central themes
- **Smooth Transitions**: Animated chevron rotation with reduced motion support
- **High Contrast Support**: Adapts to Windows High Contrast mode

## Usage

### Basic Accordion

```tsx
import { Accordion, AccordionItem } from '@ntg-design-system/components';

<Accordion>
  <AccordionItem title="What is the NTG Design System?">
    <p>
      The NTG Design System is a comprehensive collection of reusable
      components, design tokens, and guidelines that help teams build
      consistent and accessible user interfaces.
    </p>
  </AccordionItem>
  <AccordionItem title="How do I get started?">
    <p>
      To get started, install the design system package using npm or yarn,
      then import the components you need into your React application.
    </p>
  </AccordionItem>
  <AccordionItem title="Is it accessible?">
    <p>
      Yes! All components are built with accessibility in mind, following
      WCAG 2.1 AA guidelines. This includes proper ARIA attributes, keyboard
      navigation, and focus management.
    </p>
  </AccordionItem>
</Accordion>
```

### Single Mode (One Open at a Time)

```tsx
<Accordion mode="single">
  <AccordionItem title="First Item">
    <p>
      When mode is set to "single", only one accordion item can be open at a
      time. Opening a new item will automatically close the previously open
      item.
    </p>
  </AccordionItem>
  <AccordionItem title="Second Item">
    <p>
      This is the content of the second item. Try opening this to see the
      first item close.
    </p>
  </AccordionItem>
  <AccordionItem title="Third Item">
    <p>And this is the third item's content.</p>
  </AccordionItem>
</Accordion>
```

### With Toggle All Button

```tsx
<Accordion showToggleAll={true} mode="multiple">
  <AccordionItem title="Design Principles">
    <p>
      Our design principles emphasize clarity, consistency, and
      accessibility. Every decision we make is guided by these core values.
    </p>
  </AccordionItem>
  <AccordionItem title="Component Library">
    <p>
      The component library includes buttons, forms, navigation elements,
      and more. All components are fully customizable through design tokens.
    </p>
  </AccordionItem>
  <AccordionItem title="Design Tokens">
    <p>
      Design tokens are the design decisions that define the visual
      characteristics of your design system, such as colors, spacing, and
      typography.
    </p>
  </AccordionItem>
  <AccordionItem title="Documentation">
    <p>
      Comprehensive documentation is available for each component, including
      usage examples, API references, and accessibility guidelines.
    </p>
  </AccordionItem>
</Accordion>
```

### Default Open Items

```tsx
<Accordion defaultOpenIndices={[0, 2]}>
  <AccordionItem title="Installation">
    <p>
      Install the design system using npm:
      <br />
      <code>npm install @ntg/design-system</code>
    </p>
  </AccordionItem>
  <AccordionItem title="Configuration">
    <p>Import the CSS and components in your application entry point.</p>
  </AccordionItem>
  <AccordionItem title="Usage">
    <p>
      Start using components by importing them from the package:
      <br />
      <code>import {"{ Button }"} from '@ntg/design-system'</code>
    </p>
  </AccordionItem>
</Accordion>
```

### Rich Content Support

```tsx
<Accordion showToggleAll>
  <AccordionItem title="Product Features">
    <h4 style={{ marginTop: 0 }}>Key Features:</h4>
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
  <AccordionItem title="Browser Support">
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ borderBottom: "1px solid #e6e5e3" }}>
          <th style={{ textAlign: "left", padding: "8px" }}>Browser</th>
          <th style={{ textAlign: "left", padding: "8px" }}>
            Minimum Version
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "8px" }}>Chrome</td>
          <td style={{ padding: "8px" }}>90+</td>
        </tr>
        <tr>
          <td style={{ padding: "8px" }}>Firefox</td>
          <td style={{ padding: "8px" }}>88+</td>
        </tr>
        <tr>
          <td style={{ padding: "8px" }}>Safari</td>
          <td style={{ padding: "8px" }}>14+</td>
        </tr>
        <tr>
          <td style={{ padding: "8px" }}>Edge</td>
          <td style={{ padding: "8px" }}>90+</td>
        </tr>
      </tbody>
    </table>
  </AccordionItem>
</Accordion>
```

## Props

### Accordion Props

| Prop                  | Type                         | Default      | Description                                                                    |
| --------------------- | ---------------------------- | ------------ | ------------------------------------------------------------------------------ |
| `children`            | `ReactNode`                  | -            | AccordionItem components (required)                                            |
| `mode`                | `'single' \| 'multiple'`     | `'multiple'` | Controls whether one or multiple items can be open at once                     |
| `defaultOpenIndices`  | `number[]`                   | `[]`         | Array of item indices that should be open by default (0-based)                 |
| `showToggleAll`       | `boolean`                    | `false`      | Shows "Open all" / "Close all" button (only functional in multiple mode)      |
| `className`           | `string`                     | `''`         | Additional CSS classes for custom styling                                      |

### AccordionItem Props

| Prop        | Type        | Default | Description                                            |
| ----------- | ----------- | ------- | ------------------------------------------------------ |
| `title`     | `string`    | -       | Item heading text (required)                           |
| `children`  | `ReactNode` | -       | Item content (required)                                |
| `className` | `string`    | `''`    | Additional CSS classes for custom styling              |
| `index`     | `string`    | -       | Internal prop set by parent (do not manually set)      |

**Note:** The `index` prop is automatically set by the parent `Accordion` component and should not be manually provided.

## HTML Implementation

For non-React projects, you can implement the accordion using HTML and JavaScript:

```html
<!-- Accordion Container -->
<div class="ntgds-accordion">
  <!-- Optional Toggle All Button -->
  <div class="ntgds-accordion__header">
    <button class="ntgds-btn ntgds-btn--tertiary" onclick="toggleAll()">
      Open all
    </button>
  </div>

  <!-- Accordion Items -->
  <div class="ntgds-accordion__items">
    <!-- Item 1 -->
    <div class="ntgds-accordion-item">
      <button
        id="accordion-trigger-0"
        class="ntgds-accordion-item__trigger"
        aria-expanded="false"
        aria-controls="accordion-panel-0"
        onclick="toggleItem(0)"
        type="button"
      >
        <span class="ntgds-accordion-item__title">What is the NTG Design System?</span>
        <span class="ntgds-accordion-item__icon" aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        id="accordion-panel-0"
        class="ntgds-accordion-item__panel"
        role="region"
        aria-labelledby="accordion-trigger-0"
        hidden
      >
        <div class="ntgds-accordion-item__content">
          <p>
            The NTG Design System is a comprehensive collection of reusable
            components, design tokens, and guidelines.
          </p>
        </div>
      </div>
    </div>

    <!-- Item 2 -->
    <div class="ntgds-accordion-item">
      <button
        id="accordion-trigger-1"
        class="ntgds-accordion-item__trigger"
        aria-expanded="false"
        aria-controls="accordion-panel-1"
        onclick="toggleItem(1)"
        type="button"
      >
        <span class="ntgds-accordion-item__title">How do I get started?</span>
        <span class="ntgds-accordion-item__icon" aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        id="accordion-panel-1"
        class="ntgds-accordion-item__panel"
        role="region"
        aria-labelledby="accordion-trigger-1"
        hidden
      >
        <div class="ntgds-accordion-item__content">
          <p>
            Install the design system package using npm or yarn, then import
            the components you need.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  // Toggle individual item
  function toggleItem(index) {
    const trigger = document.getElementById(`accordion-trigger-${index}`);
    const panel = document.getElementById(`accordion-panel-${index}`);
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    
    trigger.setAttribute('aria-expanded', !isExpanded);
    panel.hidden = isExpanded;
  }

  // Toggle all items
  function toggleAll() {
    const triggers = document.querySelectorAll('.ntgds-accordion-item__trigger');
    const panels = document.querySelectorAll('.ntgds-accordion-item__panel');
    const button = document.querySelector('.ntgds-accordion__header button');
    
    const allOpen = Array.from(triggers).every(
      t => t.getAttribute('aria-expanded') === 'true'
    );
    
    triggers.forEach((trigger, i) => {
      trigger.setAttribute('aria-expanded', !allOpen);
      panels[i].hidden = allOpen;
    });
    
    button.textContent = allOpen ? 'Open all' : 'Close all';
  }
</script>
```

## HTML Classes

| Class                            | Description                                          |
| -------------------------------- | ---------------------------------------------------- |
| `ntgds-accordion`                | Base accordion container (required)                  |
| `ntgds-accordion__header`        | Header section containing toggle all button          |
| `ntgds-accordion__items`         | Container for all accordion items with top border    |
| `ntgds-accordion-item`           | Individual accordion item container                  |
| `ntgds-accordion-item__trigger`  | Button that toggles item open/closed                 |
| `ntgds-accordion-item__title`    | Title text within trigger button                     |
| `ntgds-accordion-item__icon`     | Chevron icon container (rotates when open)           |
| `ntgds-accordion-item__panel`    | Collapsible content panel                            |
| `ntgds-accordion-item__content`  | Inner content wrapper with padding                   |

## Styling and Tokens

### CSS Custom Properties Used

| Property                    | Purpose                      | Fallback Value |
| --------------------------- | ---------------------------- | -------------- |
| `--clr-stroke-subtle`       | Border color (dividers)      | `#e6e5e3`      |
| `--clr-surface-secondary`   | Hover/focus background       | `#f5f4f2`      |
| `--clr-text-primary`        | Text and icon color          | `#3b3b3a`      |
| `--clr-focus-focus`         | Focus outline color          | `#107cc0`      |
| `--clr-icon-default`        | Chevron icon color           | `#3b3b3a`      |
| `--spacing-md`              | Header margin bottom         | `16px`         |
| `--font-size-base`          | Text font size               | `1rem`         |

### Component Measurements

| Element       | Property             | Value                      |
| ------------- | -------------------- | -------------------------- |
| Trigger       | Padding              | `24px`                     |
| Trigger       | Font Weight          | `600` (Semi-bold)          |
| Trigger       | Text Align           | `left`                     |
| Content       | Padding              | `0 24px 24px 24px`         |
| Content       | Font Size            | `1rem` (16px)              |
| Content       | Line Height          | `1.5`                      |
| Icon          | Size                 | `24px × 24px`              |
| Icon          | Rotation (expanded)  | `180deg`                   |
| Border        | Width                | `1px`                      |
| Border        | Style                | `solid`                    |
| Transitions   | Duration             | `0.2s ease`                |

## Behavior

### Single Mode

When `mode="single"`:
- Only one accordion item can be open at a time
- Opening a new item automatically closes the currently open item
- Clicking an open item will close it
- "Toggle All" button is hidden (not functional in single mode)

### Multiple Mode

When `mode="multiple"` (default):
- Any number of items can be open simultaneously
- Each item operates independently
- "Toggle All" button is functional when `showToggleAll={true}`
- All items can be closed at once

### Toggle All Button

The toggle all button behavior:
- Shows "Open all" when not all items are open
- Shows "Close all" when all items are open
- Only visible when `showToggleAll={true}`
- Only functional in `mode="multiple"`
- Uses tertiary Button variant aligned to the right

## Accessibility

The Accordion component follows WCAG 2.1 AA guidelines and implements the WAI-ARIA Accordion pattern.

### Semantic HTML

- Uses native `<button>` elements for triggers (keyboard accessible by default)
- Proper heading hierarchy can be maintained within content
- Uses `role="region"` on panels for screen reader navigation
- Chevron icon has `aria-hidden="true"` (decorative only)

### ARIA Attributes

Each accordion item includes:

**Trigger button:**
- `aria-expanded`: `"true"` when open, `"false"` when closed
- `aria-controls`: ID of the associated panel
- `id`: Unique identifier for `aria-labelledby` reference

**Content panel:**
- `role="region"`: Identifies as a significant page section
- `aria-labelledby`: References the trigger button ID
- `hidden` attribute: Hides content when collapsed

### Keyboard Navigation

**Trigger buttons:**
- **Tab**: Move focus to next trigger
- **Shift + Tab**: Move focus to previous trigger
- **Enter** or **Space**: Toggle item open/closed
- **Arrow keys**: Not implemented (not required by ARIA spec)

**Toggle All button:**
- **Tab**: Focus button
- **Enter** or **Space**: Toggle all items

### Focus Management

- Visible focus indicator on triggers (2px outline with offset)
- Focus remains on trigger after toggling (does not move to content)
- High contrast mode support with ButtonText outline
- Reduced motion support (transitions can be disabled)

### Screen Reader Support

Screen readers announce:
- Button role and label (item title)
- Expanded/collapsed state via `aria-expanded`
- Associated content via `aria-controls` and `aria-labelledby`
- Region role for content panels

**Example announcement:**
> "What is the NTG Design System?, button, collapsed. Press Enter to expand."

## Theming

The Accordion component automatically adapts to the active theme through CSS custom properties.

### Theme Switching

```typescript
// Themes are controlled via data-brand attribute on <html>
document.documentElement.setAttribute("data-brand", "ntg"); // NT.GOV.AU
document.documentElement.setAttribute("data-brand", "ntgcentral"); // NTG Central
```

### Key Visual Differences

**NT.GOV.AU Theme:**
- Font: Lato
- Border color: Subtle grey
- Focus outline: Blue
- Hover background: Light grey

**NTG Central Theme:**
- Font: Roboto
- Border color: Subtle grey
- Focus outline: Blue
- Hover background: Light grey

Both themes use consistent interaction patterns with token-based theming.

## Best Practices

### Do's

✅ Use clear, concise titles for accordion items
✅ Keep content focused and scannable
✅ Use single mode for mutually exclusive content
✅ Use multiple mode for independent content sections
✅ Provide default open indices for important content
✅ Use rich content (lists, tables, formatting) when helpful
✅ Maintain heading hierarchy within content
✅ Test keyboard navigation thoroughly

### Don'ts

❌ Don't nest accordions inside accordions
❌ Don't hide critical information in collapsed items by default
❌ Don't use more than 10-12 items (consider alternative navigation)
❌ Don't make titles too long (2-8 words recommended)
❌ Don't use accordions for short content (show directly instead)
❌ Don't disable keyboard navigation
❌ Don't remove focus indicators

## Use Cases

### FAQs

```tsx
<Accordion>
  <AccordionItem title="What is the NTG Design System?">
    <p>A comprehensive collection of reusable components...</p>
  </AccordionItem>
  <AccordionItem title="How do I get started?">
    <p>Install the package using npm or yarn...</p>
  </AccordionItem>
  <AccordionItem title="Is it accessible?">
    <p>Yes! All components follow WCAG 2.1 AA guidelines...</p>
  </AccordionItem>
</Accordion>
```

### Documentation Sections

```tsx
<Accordion mode="single" defaultOpenIndices={[0]}>
  <AccordionItem title="Installation">
    <p>Installation instructions...</p>
  </AccordionItem>
  <AccordionItem title="Configuration">
    <p>Configuration details...</p>
  </AccordionItem>
  <AccordionItem title="Usage">
    <p>Usage examples...</p>
  </AccordionItem>
</Accordion>
```

### Settings or Preferences

```tsx
<Accordion showToggleAll>
  <AccordionItem title="Appearance Settings">
    <p>Theme, color, and layout preferences...</p>
  </AccordionItem>
  <AccordionItem title="Privacy Settings">
    <p>Data collection and privacy controls...</p>
  </AccordionItem>
  <AccordionItem title="Notification Settings">
    <p>Email and push notification preferences...</p>
  </AccordionItem>
</Accordion>
```

## Browser Support

The Accordion component supports all modern browsers:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

**Fallbacks:**
- CSS custom properties: Fallback values provided
- Flexbox layout: Widely supported
- SVG icons: Widely supported
- Context API: React 16.3+

## Technical Details

### File Structure

```
src/components/accordion/
├── accordion.css         # Component styles
├── Accordion.tsx        # React component with Context API
├── Accordion.stories.tsx # Storybook stories
└── ACCORDION.md         # This documentation
```

### CSS Architecture

The accordion uses the design system's layered CSS architecture:

```css
@layer components {
  .ntgds-accordion {
    /* Base accordion styles referencing semantic tokens */
  }
}
```

### Bundle Size

- CSS: ~2KB minified
- React component: ~1.5KB minified (with tree-shaking)
- Zero runtime dependencies (except React)

### Performance Considerations

- **Context API**: Efficient re-renders only for items that change state
- **Controlled Component**: State managed at parent level for predictability
- **Lazy Content**: Collapsed content is hidden with `display: none` (not rendered)
- **CSS Transitions**: Smooth animations without JavaScript
- **Reduced Motion**: Respects user preferences automatically

## Related Components

- **Tabs**: For content that is mutually exclusive and always visible
- **Drawer**: For off-canvas content panels
- **Modal**: For focused content that requires user interaction
- **Collapsible**: For single collapsible sections without accordion context

## Migration from Other Patterns

### From Manual Disclosure Widgets

**Before:**
```tsx
const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)}>
  Toggle Content
</button>
{isOpen && <div>Content here</div>}
```

**After:**
```tsx
<Accordion>
  <AccordionItem title="Toggle Content">
    Content here
  </AccordionItem>
</Accordion>
```

**Benefits:**
- Built-in ARIA attributes
- Keyboard navigation
- Consistent styling
- Less boilerplate code

## Changelog

- **v1.0.0**: Initial implementation with single/multiple modes, toggle all, and full accessibility support

---

**Need Help?**

For questions or issues with the Accordion component, refer to the [Component Library](https://ntgovernment.github.io/ntg-design-system) or contact the NT Government Digital Services team.
