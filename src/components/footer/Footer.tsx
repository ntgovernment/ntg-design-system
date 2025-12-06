import React from "react";
import { Icon } from "../icon/Icon";
import { FooterLink } from "./FooterLink";
import { NTGovAULogoMono } from "./NTGovAULogoMono";
import "./footer.css";

// Export sub-components for convenience
export { FooterLink } from "./FooterLink";
export { NTGovAULogoMono } from "./NTGovAULogoMono";

export interface FooterSection {
  title: string;
  links: Array<{
    href: string;
    label: string;
    external?: boolean;
  }>;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Custom footer sections (default: NT.GOV.AU standard sections) */
  sections?: FooterSection[];
  /** Custom social media links (default: Facebook, LinkedIn, YouTube, Instagram, Have your say) */
  socialLinks?: SocialLink[];
  /** Whether to show acknowledgement section (default: true) */
  showAcknowledgement?: boolean;
  /** Custom logo component (default: NTGovAULogoMono) */
  logoComponent?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

// Default footer content matching NT.GOV.AU
const DEFAULT_SECTIONS: FooterSection[] = [
  {
    title: "Information and services",
    links: [
      { href: "/services/art-sport-leisure", label: "Art, sport and leisure" },
      { href: "/services/boating-fishing-marine", label: "Boating, fishing and marine" },
      { href: "/services/business-industry", label: "Business and industry" },
      { href: "/services/community-support-care", label: "Community support and care" },
      { href: "/services/driving-transport", label: "Driving and transport" },
      { href: "/services/education-learning", label: "Education and learning" },
      { href: "/services/emergency-safety", label: "Emergency and safety" },
      { href: "/services/employment-money-taxes", label: "Employment, money and taxes" },
      { href: "/services/environment", label: "Environment" },
      { href: "/services/health-wellbeing", label: "Health and wellbeing" },
      { href: "/services/housing-property-land", label: "Housing, property and land" },
      { href: "/services/rights-crime-law", label: "Your rights, crime and the law" },
    ],
  },
  {
    title: "Find out more",
    links: [
      { href: "/about", label: "About government" },
      { href: "/consultations", label: "Public consultations" },
      { href: "/holidays", label: "NT public holidays" },
      { href: "/media", label: "Media releases" },
      { href: "/grants", label: "Government grants" },
      { href: "/priorities", label: "Government priorities" },
    ],
  },
];

const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  { icon: "facebook", label: "Facebook", href: "https://facebook.com/ntgovernment" },
  { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com/company/nt-government" },
  { icon: "youtube", label: "YouTube", href: "https://youtube.com/ntgovernment" },
  { icon: "instagram", label: "Instagram", href: "https://instagram.com/ntgovernment" },
  { icon: "comment", label: "Have your say", href: "https://nt.gov.au/have-your-say" },
];

const DISCLAIMER_LINKS = [
  { href: "/copyright", label: "Copyright, disclaimer and privacy" },
  { href: "/foia", label: "Freedom of information" },
  { href: "/interpreters", label: "Interpreter services" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/sitemap", label: "Site map" },
  { href: "/contacts", label: "Contacts" },
  { href: "/staff-systems", label: "NTG staff systems" },
];

export const Footer: React.FC<FooterProps> = ({
  sections = DEFAULT_SECTIONS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  showAcknowledgement = true,
  logoComponent = <NTGovAULogoMono />,
  className = "",
  ...props
}) => {
  const baseClass = "ntgds-footer";
  const classes = [baseClass, className].filter(Boolean).join(" ");

  return (
    <footer className={classes} {...props}>
      <div className={`${baseClass}__inner`}>
        {/* Main Sections Grid */}
        <div className={`${baseClass}__sections`}>
          {/* Information and Services Section (spans 1 col on tablet, wraps to 2 cols content) */}
          <div className={`${baseClass}__section`}>
            <h3 className={`${baseClass}__section-title`}>{sections[0]?.title}</h3>
            <div className={`${baseClass}__links-grid`}>
              <ul className={`${baseClass}__link-list`}>
                {sections[0]?.links.slice(0, 6).map((link, idx) => (
                  <li key={idx}>
                    <FooterLink
                      href={link.href}
                      external={link.external}
                      ariaLabel={link.label}
                    >
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
              <ul className={`${baseClass}__link-list`}>
                {sections[0]?.links.slice(6).map((link, idx) => (
                  <li key={idx + 6}>
                    <FooterLink
                      href={link.href}
                      external={link.external}
                      ariaLabel={link.label}
                    >
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Find out more + Connect with us Wrapper (for tablet 2-col layout) */}
          <div className={`${baseClass}__section-group`}>
            {/* Find out more Section */}
            <div className={`${baseClass}__section`}>
              <h3 className={`${baseClass}__section-title`}>{sections[1]?.title}</h3>
              <ul className={`${baseClass}__link-list`}>
                {sections[1]?.links.map((link, idx) => (
                  <li key={idx}>
                    <FooterLink
                      href={link.href}
                      external={link.external}
                      ariaLabel={link.label}
                    >
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect with us Section */}
            <div className={`${baseClass}__section`}>
              <h3 className={`${baseClass}__section-title`}>Connect with us</h3>
              <div className={`${baseClass}__social`}>
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClass}__social-link`}
                    aria-label={social.label}
                  >
                    <Icon
                      name={social.icon}
                      faStyle={social.icon === "comment" ? "regular" : "brands"}
                      size="md"
                      color="inverse"
                    />
                    <span className={`${baseClass}__social-label`}>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Logo and Disclaimer Links (Full Width) */}
        <div className={`${baseClass}__logo-section`}>
          <div className={`${baseClass}__logo`}>{logoComponent}</div>
          <nav className={`${baseClass}__disclaimer-links`}>
            {DISCLAIMER_LINKS.map((link, idx) => (
              <React.Fragment key={idx}>
                <FooterLink href={link.href} ariaLabel={link.label} className={`${baseClass}__disclaimer-link`}>
                  {link.label}
                </FooterLink>
                {idx < DISCLAIMER_LINKS.length - 1 && (
                  <span className={`${baseClass}__disclaimer-divider`}>|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Acknowledgement Section (Full Width) */}
        {showAcknowledgement && (
          <div className={`${baseClass}__acknowledgement`}>
            <p className={`${baseClass}__acknowledgement-text`}>
              The Northern Territory Government acknowledges the Traditional Owners of the Northern Territory and recognises their continuing cultural and spiritual connections to the lands, waters and communities. We pay our respects to all Aboriginal and Torres Strait Islander people and their cultures, their Elders past and present, and to future generations.
            </p>
            <p className={`${baseClass}__copyright`}>
              © 2025 Northern Territory Government of Australia
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};
