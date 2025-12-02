# Scrollbar Component

A utility class for styling scrollbars with consistent visual design across Chrome, Safari, Edge, and Firefox. Provides accessible variants with larger hit targets and compact variants for tight layouts.

**Design Reference:** [View in Figma](https://www.figma.com/design/pztoZYJOfhXlFLRtU47qNd/NTG-Design-System)

## Features

- **Utility Class**: `.ntgds-scrollable` for any scrollable container
- **Three Variants**: Default (4px), Accessible (12px hit target), Compact (4px explicit)
- **Theme-Aware Tokens**: Uses design system color tokens for consistent theming
- **Cross-Browser**: WebKit (Chrome/Safari/Edge) and Firefox support
- **Hover States**: Track and thumb darken on hover per Figma specifications
- **High Contrast Mode**: Adapts to Windows High Contrast for accessibility
- **RTL Support**: Browsers handle scrollbar placement automatically
- **Minimal Impact**: Pure CSS utility, no JavaScript required

## Usage

### Basic Scrollable Container

```tsx
// Apply to any scrollable element
<div className="ntgds-scrollable" style={{ maxHeight: 200, overflow: 'auto' }}>
  {/* Long content here */}
</div>
```

### Scrollable Textarea

```tsx
<textarea
  className="ntgds-scrollable"
  style={{
    width: '100%',
    height: 140,
    padding: 12,
  }}
  defaultValue="Long text content..."
/>
```

### Scrollable List

```tsx
<div
  className="ntgds-scrollable"
  style={{
    maxHeight: 200,
    border: '1px solid var(--clr-stroke-subtle)',
    padding: 8,
  }}
>
  <ul>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
</div>
```

### Dropdown Panel

```tsx
<div
  className="ntgds-scrollable"
  style={{
    maxHeight: 160,
    border: '1px solid var(--clr-stroke-subtle)',
    background: 'var(--clr-surface-default)',
  }}
>
  <ul>
    {options.map((option, i) => (
      <li key={i}>{option}</li>
    ))}
  </ul>
</div>
```

### Accessible Variant (Larger Hit Target)

```tsx
<div
  className="ntgds-scrollable ntgds-scrollable--accessible"
  style={{ maxHeight: 200 }}
>
  {/* Content */}
</div>
```

**Benefits:**
- 12px hit target (easier to click/drag)
- 4px visual width (maintains clean appearance)
- Better for touch interfaces and motor accessibility

### Compact Variant (Explicit 4px)

```tsx
<div
  className="ntgds-scrollable ntgds-scrollable--compact"
  style={{ maxHeight: 200 }}
>
  {/* Content */}
</div>
```

**Benefits:**
- Explicit 4px width (same as default)
- Use when you need to ensure consistent sizing
- Good for dense layouts

## HTML Implementation

```html
<!-- Basic Scrollable Container -->
<div class="ntgds-scrollable" style="max-height: 200px; overflow: auto;">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <!-- ... more items ... -->
    <li>Item 50</li>
  </ul>
</div>

<!-- Accessible Variant -->
<div
  class="ntgds-scrollable ntgds-scrollable--accessible"
  style="max-height: 200px; overflow: auto;"
>
  <p>Long content that requires scrolling...</p>
</div>

<!-- Compact Variant -->
<div
  class="ntgds-scrollable ntgds-scrollable--compact"
  style="max-height: 200px; overflow: auto;"
>
  <p>Dense layout content...</p>
</div>
```

## Classes

| Class                             | Description                                                      |
| --------------------------------- | ---------------------------------------------------------------- |
| `ntgds-scrollable`                | Base utility class for styled scrollbars (required)              |
| `ntgds-scrollable--accessible`    | Accessible variant with 12px hit target, 4px visual width        |
| `ntgds-scrollable--compact`       | Compact variant with explicit 4px width                          |

## CSS Custom Properties Used

| Property                          | Purpose                    | Default Fallback |
| --------------------------------- | -------------------------- | ---------------- |
| `--scrollbar-width`               | Visual scrollbar width     | `4px`            |
| `--scrollbar-track-bg`            | Track background color     | `#949391`        |
| `--scrollbar-track-hover-bg`      | Track hover background     | `#3b3b3a`        |
| `--scrollbar-thumb-bg`            | Thumb background color     | `#949391`        |
| `--scrollbar-thumb-hover-bg`      | Thumb hover background     | `#3b3b3a`        |
| `--scrollbar-radius`              | Border radius (not used)   | `999px`          |
| `--scrollbar-gutter-hitbox`       | Accessible hit target size | `12px`           |

**Note:** These tokens are defined in `src/themes/theme-base.css` and map to semantic color tokens.

## Styling Details

### Default Variant

**Visual Specifications:**
- Width: 4px (track and thumb)
- Track color: `#949391` (medium grey)
- Thumb color: `#949391` (same as track)
- Hover track: `#3b3b3a` (dark grey)
- Hover thumb: `#3b3b3a` (dark grey)
- Border radius: 0px (square corners)

**Browser Support:**
- **Firefox**: `scrollbar-width: thin` with `scrollbar-color`
- **WebKit** (Chrome/Safari/Edge): `::-webkit-scrollbar` pseudo-elements

### Accessible Variant

**Visual Specifications:**
- Hit target: 12px (easier to grab)
- Visual width: 4px (centered within hit target)
- Colors: Same as default variant

**Implementation:**
- Uses `background-clip: content-box` to center 4px visual thumb
- Transparent borders create larger interactive area
- Only affects WebKit browsers (Firefox uses thin by default)

### Compact Variant

**Visual Specifications:**
- Width: 4px (explicit, same as default)
- Use for consistency in mixed layouts

## Behavior

### Hover States

**Default State:**
- Track: `#949391`
- Thumb: `#949391`

**Hover State:**
- Track: `#3b3b3a` (darkens)
- Thumb: `#3b3b3a` (darkens)

**Rationale:**
- Matches Figma specifications
- Provides visual feedback on interaction
- Maintains subtle appearance when not in use

### Overflow Handling

The `.ntgds-scrollable` class sets `overflow: auto`, which:
- Shows scrollbars only when content overflows
- Hides scrollbars when content fits
- Respects `overflow-x` and `overflow-y` if set explicitly

**Recommendation:** Combine with `max-height` or `max-width` to control when scrolling occurs:

```tsx
<div className="ntgds-scrollable" style={{ maxHeight: 200 }}>
  {/* Content */}
</div>
```

## Accessibility

### Keyboard Navigation

Scrollable containers support standard keyboard navigation:
- **Arrow Keys**: Scroll content when container is focused
- **Page Up/Down**: Scroll by page
- **Home/End**: Jump to start/end
- **Space**: Scroll by page (in some contexts)

**Recommendation:** Ensure scrollable containers are focusable for keyboard users:

```tsx
<div className="ntgds-scrollable" tabIndex={0} style={{ maxHeight: 200 }}>
  {/* Content */}
</div>
```

### Screen Readers

Screen readers announce scrollable regions automatically. No additional ARIA attributes required for basic scrolling.

For complex scrollable regions (e.g., virtualized lists), consider:
- `role="region"` with `aria-labelledby` for labeled regions
- `aria-live` for dynamic content updates

### Motor Accessibility

**Accessible Variant Benefits:**
- Larger 12px hit target easier to click and drag
- Reduces fine motor control requirements
- Better for touch interfaces and trackpads
- Recommended for public-facing applications

### High Contrast Mode

Scrollbars adapt to Windows High Contrast mode:

```css
@media (forced-colors: active) {
  .ntgds-scrollable {
    scrollbar-color: ButtonText Canvas;
  }
  .ntgds-scrollable::-webkit-scrollbar-track {
    background: Canvas;
  }
  .ntgds-scrollable::-webkit-scrollbar-thumb {
    background: ButtonText;
  }
}
```

**Result:**
- Track uses system Canvas color
- Thumb uses system ButtonText color
- Maintains contrast ratios in all high contrast themes

## Browser Support

### Full Support

- Chrome 90+
- Edge 90+
- Safari 14+
- Firefox 88+
- Opera 76+

### Fallbacks

**Older Browsers:**
- Uses browser default scrollbars
- Functionality maintained (only styling differs)
- Graceful degradation (no broken layouts)

**Firefox:**
- Uses `scrollbar-width: thin` and `scrollbar-color`
- Cannot customize width precisely (browser controls "thin" size)
- Hover states supported via `scrollbar-color` property

**WebKit Browsers:**
- Full customization via `::-webkit-scrollbar` pseudo-elements
- Precise width control
- Track and thumb styling
- Hover states via `:hover` pseudo-class

## Best Practices

### Do's

✅ Apply to containers with `overflow: auto` or `overflow: scroll`
✅ Use with `max-height` or `max-width` to control when scrolling occurs
✅ Use accessible variant for public-facing, touch-friendly interfaces
✅ Test scrolling with keyboard navigation
✅ Ensure containers are focusable when needed (`tabIndex={0}`)
✅ Use compact variant for dense, consistent layouts

### Don'ts

❌ Don't apply to containers without overflow
❌ Don't remove scrollbars entirely (harms accessibility)
❌ Don't use custom scrollbars on body/html (use browser default)
❌ Don't rely on scrollbar visibility for critical interactions
❌ Don't make scrollbars too narrow (<4px reduces usability)
❌ Don't override high contrast mode styles

## Use Cases

### Textarea with Many Lines

```tsx
<textarea
  className="ntgds-scrollable"
  rows={6}
  style={{ width: '100%', padding: 12 }}
>
  Long text content...
</textarea>
```

### Dropdown Menu with Many Options

```tsx
<div
  className="ntgds-scrollable ntgds-scrollable--accessible"
  role="listbox"
  style={{
    maxHeight: 160,
    border: '1px solid var(--clr-stroke-subtle)',
  }}
>
  {options.map((option) => (
    <div key={option.id} role="option">
      {option.label}
    </div>
  ))}
</div>
```

### Code Block with Syntax Highlighting

```tsx
<pre
  className="ntgds-scrollable"
  style={{
    maxHeight: 400,
    padding: 16,
    background: '#f5f4f2',
  }}
>
  <code>{codeString}</code>
</pre>
```

### Data Table Body

```tsx
<div
  className="ntgds-scrollable"
  style={{
    maxHeight: 400,
    overflowY: 'auto',
    overflowX: 'hidden',
  }}
>
  <table>
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          <td>{row.name}</td>
          <td>{row.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

### Modal Content Area

```tsx
<div className="modal">
  <div className="modal-header">
    <h2>Modal Title</h2>
  </div>
  <div
    className="ntgds-scrollable"
    style={{
      maxHeight: 'calc(80vh - 120px)',
      padding: 24,
    }}
  >
    {/* Long modal content */}
  </div>
  <div className="modal-footer">
    <button>Close</button>
  </div>
</div>
```

## Theming

Scrollbars automatically adapt to the active theme through CSS custom properties defined in theme files.

### Theme Switching

```typescript
// Themes are controlled via data-brand attribute on <html>
document.documentElement.setAttribute("data-brand", "ntg"); // NT.GOV.AU
document.documentElement.setAttribute("data-brand", "ntgcentral"); // NTG Central
```

### Key Visual Differences

**NT.GOV.AU Theme:**
- Track: Medium grey (`#949391`)
- Thumb: Medium grey (`#949391`)
- Hover: Dark grey (`#3b3b3a`)

**NTG Central Theme:**
- Track: Medium grey (`#949391`)
- Thumb: Medium grey (`#949391`)
- Hover: Dark grey (`#3b3b3a`)

Both themes use consistent scrollbar styling with token-based theming.

## Technical Details

### File Structure

```
src/components/scrollbar/
├── scrollbar.css         # Component styles
├── Scrollbars.stories.tsx # Storybook stories
└── SCROLLBAR.md         # This documentation
```

### CSS Architecture

The scrollbar uses utility classes that can be applied to any element:

```css
.ntgds-scrollable {
  overflow: auto;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: var(--ntgds-scrollbar-thumb-bg)
    var(--ntgds-scrollbar-track-bg);
}

.ntgds-scrollable::-webkit-scrollbar {
  width: var(--ntgds-scrollbar-width); /* WebKit */
}
```

### Bundle Size

- CSS: ~1.5KB minified
- Zero JavaScript required
- Pure CSS utility class

### Performance Considerations

- **No JavaScript**: Pure CSS implementation, zero runtime cost
- **Browser Native**: Uses native scrolling performance
- **Minimal Repaints**: Only colors change on hover (efficient)
- **Hardware Accelerated**: Native browser scrolling uses GPU when available

## Limitations

### Firefox Customization

Firefox supports limited scrollbar customization:
- Cannot set exact width (only `auto`, `thin`, `none`)
- Cannot create accessible variant with larger hit target
- Hover states work via `scrollbar-color` property

**Workaround:** Firefox "thin" scrollbars are reasonably accessible by default.

### End Caps / Decorative Elements

The Figma design shows small rectangular end caps at the top/bottom of the scrollbar track. These cannot be implemented reliably with pure CSS across browsers.

**Alternatives:**
- Omit end caps (current implementation)
- Add decorative elements via JavaScript
- Use absolutely positioned elements (fragile, not recommended)

### RTL (Right-to-Left) Support

Browsers automatically place scrollbars on the correct side for RTL languages. No additional CSS required.

**Tested:**
- `dir="rtl"` on container or ancestors
- Scrollbars appear on left side automatically
- All functionality works as expected

## Comparison with Other Solutions

| Solution               | Pros                                  | Cons                                    |
| ---------------------- | ------------------------------------- | --------------------------------------- |
| **Native Scrollbars**  | Zero setup, always accessible         | Inconsistent appearance across browsers |
| **Custom JS Library**  | Pixel-perfect control, animations     | Accessibility issues, performance cost  |
| **ntgds-scrollable**   | Consistent styling, accessible, fast  | Limited Firefox customization           |
| **overflow: overlay**  | Floats over content                   | Deprecated, removed from standards      |

**Recommendation:** Use `.ntgds-scrollable` for consistent, accessible scrollbars without JavaScript overhead.

## Related Patterns

- **Virtualized Lists**: For extremely long lists (thousands of items)
- **Infinite Scroll**: For progressive content loading
- **Pagination**: Alternative to scrolling for discrete content sections
- **Collapse/Expand**: For reducing visible content without scrolling

## Migration Guide

### From Custom JavaScript Scrollbars

**Before:**
```tsx
import CustomScrollbar from 'custom-scrollbar-library';

<CustomScrollbar style={{ maxHeight: 200 }}>
  {content}
</CustomScrollbar>
```

**After:**
```tsx
<div className="ntgds-scrollable" style={{ maxHeight: 200 }}>
  {content}
</div>
```

**Benefits:**
- Remove JavaScript dependency
- Improve performance (native scrolling)
- Better accessibility (native browser behavior)
- Smaller bundle size

### From Browser Default Scrollbars

**Before:**
```tsx
<div style={{ maxHeight: 200, overflow: 'auto' }}>
  {content}
</div>
```

**After:**
```tsx
<div className="ntgds-scrollable" style={{ maxHeight: 200 }}>
  {content}
</div>
```

**Benefits:**
- Consistent appearance across browsers
- Styled to match design system
- Hover states per design specifications

## Examples

### Textarea Story

```tsx
<label htmlFor="scrollableTextarea" style={{ display: 'block', marginBottom: 8 }}>
  Scrollable Textarea
</label>
<textarea
  id="scrollableTextarea"
  className="ntgds-scrollable"
  style={{
    width: '100%',
    height: 140,
    padding: 12,
    boxSizing: 'border-box',
  }}
  defaultValue={Array.from({ length: 30 }, (_, i) => `Line ${i + 1}`).join('\\n')}
/>
```

### Long List Story

```tsx
<div style={{ marginBottom: 8 }}>Scrollable List (max-height: 200px)</div>
<div
  className="ntgds-scrollable"
  style={{
    maxHeight: 200,
    border: '1px solid var(--clr-stroke-subtle)',
    padding: 8,
  }}
>
  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
    {Array.from({ length: 50 }).map((_, i) => (
      <li
        key={i}
        style={{
          padding: '8px 6px',
          borderBottom: '1px solid rgba(0,0,0,0.04)',
        }}
      >
        Item {i + 1}
      </li>
    ))}
  </ul>
</div>
```

### Dropdown Panel Story

```tsx
function DropdownPanelDemo() {
  const [open, setOpen] = useState(true);
  
  return (
    <div>
      <button onClick={() => setOpen(!open)} style={{ marginBottom: 8 }}>
        Toggle Panel
      </button>
      {open && (
        <div style={{ position: 'relative', width: 280 }}>
          <div
            className="ntgds-scrollable"
            style={{
              maxHeight: 160,
              border: '1px solid var(--clr-stroke-subtle)',
              background: 'var(--clr-surface-default)',
              padding: 6,
              boxSizing: 'border-box',
            }}
          >
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {Array.from({ length: 30 }).map((_, i) => (
                <li key={i} style={{ padding: '8px 6px' }}>
                  Option {i + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
```

## Changelog

- **v1.0.0**: Initial implementation with default, accessible, and compact variants

---

**Need Help?**

For questions or issues with the Scrollbar utility, refer to the [Component Library](https://ntgovernment.github.io/ntg-design-system) or contact the NT Government Digital Services team.
