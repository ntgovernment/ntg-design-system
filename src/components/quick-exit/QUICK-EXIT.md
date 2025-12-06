# QuickExit

A fixed, full-width safety banner that lets users leave quickly. It mirrors the Figma spec: bold heading, supporting message, and an inline “What is this?” helper. **Use only one QuickExit per page.**

## What it does
- Fixed to the top of the viewport (with safe-area padding) and darkens on hover
- Clickable main area with icon + heading + message
- Optional “What is this?” link or button
- Responsive padding/typography (desktop and mobile)

## When to use
- Long or sensitive pages where users may need a one-tap escape
- Safety-critical contexts (e.g., domestic violence resources) where rapid exit is required

## Props
- `label` (string, default: "Quick exit")
- `message` (string, default: "Click anywhere in this banner to exit. Call 000 if you’re in immediate danger.")
- `onClick` (function): handler for the primary escape action
- `onWhatIsThis` (function): handler for helper action when no href is provided
- `whatIsThisHref` (string): renders helper as `<a>` when provided
- `ariaLabel` (string): accessible label for the region
- `className` (string): custom class

## Usage
```tsx
import { QuickExit } from "@ntg-design-system";

<QuickExit
  label="Quick exit"
  message="Click anywhere in this banner to exit. Call 000 if you’re in immediate danger."
  onClick={() => window.location.assign("https://www.google.com")}
  whatIsThisHref="https://example.com/safety"
/>
```

## Accessibility
- The container uses `role="region"` with `aria-label`
- The main area is a button (keyboard and screen-reader accessible)
- Hover/focus: visible color change and focus ring
- Only one QuickExit per page; place it near the top of the DOM to ensure early navigation

## Theming & layout
- Background: `#c33826` default, hover `#a22f20` (tokenize if available)
- Paddings: 32px/24px (desktop), 24px/16px (mobile); safe-area top inset respected
- Typography: Lato Bold 24/28 for heading, 16/24 for body
- Layout: horizontal row, icon 32px, gap 24px desktop, 16px mobile

## Notes and guidance
- Wire `onClick` to a real escape destination (neutral, fast-loading site) in production
- Keep copy concise and direct; match label and message to your safety pattern
- Ensure Font Awesome 6 is available for the `right-from-bracket` icon
