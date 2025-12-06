# FloatingButton

Fixed-position duplicate of a primary action that appears when the source button leaves the viewport. Intended for persistent primary actions on long pages. **Use only one FloatingButton per page.**

## What it does
- Mirrors an existing button identified by `targetId`
- Fixed to the bottom of the viewport with responsive padding and safe-area insets
- Shows when the target is off-screen; hides when the target returns
- Alignment: left on desktop/tablet, centered on small screens
- Inherits all `Button` props (variant, size, icons, loading, disabled)

## When to use
- Long pages where the primary action should remain reachable while scrolling
- Forms or application flows where “Apply now” / “Continue” should stay accessible

## API
- `targetId` (string, required): id of the source button to mirror
- All `Button` props are supported (variant, size, icons, loading, disabled, etc.)
- Visibility logic: becomes visible whenever the target is outside the viewport; hidden and `aria-hidden` when target is visible

## Usage
```tsx
import { FloatingButton, Button } from "@ntg-design-system";

// Source button in content
<Button id="apply-btn" variant="primary" iconRight="arrow-right">Apply now</Button>

// Floating duplicate appears when source scrolls out of view
<FloatingButton
  targetId="apply-btn"
  variant="primary"
  iconRight="arrow-right"
>
  Apply now
</FloatingButton>
```

## Accessibility
- When hidden: floating button is disabled, removed from tab order, wrapper is `aria-hidden`
- When visible: standard button semantics; label and icon should match the source
- Do not place focusable elements inside `aria-hidden` containers (handled automatically by disabling when hidden)

## Constraints & guidance
- Only one FloatingButton per page
- Keep the source button in normal document flow; the floating version is supplemental
- Use the same label and icon as the source to avoid user confusion
- Ensure `targetId` matches a unique element id on the page

## Theming & layout
- Uses the same Button variants and tokens (color, spacing, typography)
- Layout: max width 800px with horizontal padding (24px desktop, 16px mobile); left-aligned on desktop/tablet, centered on small screens

## Troubleshooting
- Floating button not appearing: ensure the target id exists and the element is scrollable out of view
- Appears immediately: expected when the target starts outside the viewport
- Icon color mismatch: icons inherit the button’s label color unless `iconColor` is explicitly set
