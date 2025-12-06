import React from "react";
import { Link } from "../link/Link";
import "./in-page-navigation.css";

export interface InPageNavigationLink {
  /** Link destination (anchor format: #section-id) */
  href: string;
  /** Link label text */
  label: string;
}

export interface InPageNavigationProps {
  /** Section title (default: "On this page") */
  title?: string;
  /** Array of navigation links */
  links: InPageNavigationLink[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * InPageNavigation component for displaying page section links.
 * Provides a titled list of navigation links with left border accent.
 */
export const InPageNavigation: React.FC<InPageNavigationProps> = ({
  title = "On this page",
  links,
  className = "",
}) => {
  const baseClass = "ntgds-in-page-navigation";
  const classes = [baseClass, className].filter(Boolean).join(" ");

  return (
    <nav className={classes}>
      <h2 className={`${baseClass}__title`}>{title}</h2>
      <ul className={`${baseClass}__links`}>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
