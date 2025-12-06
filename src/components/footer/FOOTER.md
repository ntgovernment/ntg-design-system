# Footer Component

Comprehensive, responsive footer for the NT.GOV.AU design system. It presents information and services, a secondary "Find out more" list, social links, disclaimer links, and acknowledgement content with accessible, token-driven styling.

## Highlights
- Responsive grid: 1-column mobile, 2-column tablet/desktop with a 2-column inner grid for Information and services
- Default NT.GOV.AU content (12 services, 6 resources, 5 social links, 7 disclaimer links)
- Font Awesome social icons with regular comment icon for "Have your say"
- Bulleted links with hover underline and focus ring; disclaimer links without bullets
- Token-driven spacing (24px section gaps, sp-xs bullet gap), 1200px max width, primary blue background

## Quick Start
```tsx
import { Footer } from "@ntg-design-system/components";

export function Layout() {
  return (
    <>
      <main>{/* page content */}</main>
      <Footer />
    </>
  );
}
```

## Props
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| sections | FooterSection[] | NT.GOV.AU sections | Two-section array: Information and services (12 links) and Find out more (6 links) |
| socialLinks | SocialLink[] | Facebook, LinkedIn, YouTube, Instagram, Have your say | Custom social links and icons |
| showAcknowledgement | boolean | true | Toggle acknowledgement section |
| logoComponent | React.ReactNode | <NTGovAULogoMono /> | Override logo element |
| className | string | "" | Additional CSS classes |

### Types
```ts
interface FooterSection {
  title: string;
  links: Array<{ href: string; label: string; external?: boolean }>;
}

interface SocialLink {
  icon: string; // Font Awesome name
  label: string;
  href: string;
}

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  showAcknowledgement?: boolean;
  logoComponent?: React.ReactNode;
  className?: string;
}
```

## Default Content
- Information and services (12 links): Art, boating, business, community, transport, education, emergency, employment, environment, health, housing, rights
- Find out more (6 links): About government, Public consultations, NT public holidays, Media releases, Government grants, Government priorities
- Social (5 links): Facebook, LinkedIn, YouTube, Instagram, Have your say (comment icon, regular style)
- Disclaimer links (7 links): Copyright/privacy, FOI, Interpreter services, Accessibility, Site map, Contacts, NTG staff systems
- Acknowledgement: Traditional owner acknowledgement + © current year

## Customization Examples
```tsx
// Custom sections
const sections: FooterSection[] = [
  { title: "Products", links: [{ href: "/a", label: "Product A" }] },
  { title: "Resources", links: [{ href: "/docs", label: "Documentation" }] },
];
<Footer sections={sections} />;

// Custom social links
const social: SocialLink[] = [
  { icon: "twitter", label: "Twitter", href: "https://twitter.com" },
  { icon: "github", label: "GitHub", href: "https://github.com" },
];
<Footer socialLinks={social} />;

// Hide acknowledgement
<Footer showAcknowledgement={false} />;

// Custom logo
<Footer logoComponent={<img src="/logo.svg" alt="My org" />} />;
```

## Layout & Responsiveness
- Mobile (<768px): Single column stacking all sections
- Tablet (768–991px): Two columns — Information on left; Find out more + Connect stacked on right
- Desktop (≥992px): Two main columns; Information uses an inner 2-column grid for its 12 links; Find out more and Connect share the right column
- Wrapper max-width: 1200px centered

## Styling & Tokens
- Background: var(--theme-colour-primary-blue-default)
- Text/links: var(--clr-text-inverse); hover underline enforced over Link inverse styles
- Spacing: section gaps var(--sp-xxl); link list gap var(--sp-sm); bullet gap var(--sp-xs) via padding-left calc(var(--sp-sm)+var(--sp-xs))
- Bullets: ::before bullet on footer links; disclaimer links remove bullets and use pipe dividers
- Social links: brand icons use faStyle="brands"; comment icon uses faStyle="regular"; hover keeps inverse color with underline on label
- Focus: 2px focus outline from Link inverse variant

## Accessibility
- Semantic <footer>, headings, nav lists
- Descriptive aria-labels for all links
- Keyboard focus outline, hover underline for visibility
- External links use target="_blank" with rel="noopener noreferrer"
- Contrast meets AA on primary blue background with inverse text

## Files & Stories
- Component: src/components/footer/Footer.tsx
- Sub-components: src/components/footer/FooterLink.tsx, src/components/footer/NTGovAULogoMono.tsx
- Styles: src/components/footer/footer.css
- Storybook: src/components/footer/Footer.stories.tsx (5 stories)
- Barrel: src/components/footer/index.ts

## Build & Publish
- Build library: npm run build
- Build Storybook (GitHub Pages output): npm run build-storybook → outputs to docs/
- Publish by committing the updated docs/ to the repository branch configured for GitHub Pages

## Recent Updates
- Updated background token to --theme-colour-primary-blue-default
- Desktop layout simplified to two main columns with internal 2-col grid for Information
- FooterLink hover underline enforced over inverse Link styles
- Increased bullet-to-text gap using --sp-xs
- "Have your say" uses Font Awesome regular comment icon
