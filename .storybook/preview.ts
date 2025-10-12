// .storybook/preview.ts

// Dev-only HMR entry (loads foundations + every component CSS from /src for instant updates)
import "../src/components.hmr.ts";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

// Map toolbar values → actual theme CSS files (using built files)
const THEME_MAP = {
  ntg: "./css/theme-ntg.min.css",
  ntgcentral: "./css/theme-central.min.css",
} as const;

type BrandKey = keyof typeof THEME_MAP;

function applyTheme(brand: BrandKey) {
  const id = "ds-theme-link";
  const href = THEME_MAP[brand];

  let link = document.getElementById(id) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  if (link.href !== href) link.href = href;

  document.documentElement.setAttribute("data-brand", brand);
}

export const globalTypes = {
  brand: {
    name: "Brand",
    description: "Switch design system theme",
    defaultValue: "ntg",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "ntg", title: "NT Gov" },
        { value: "ntgcentral", title: "NTG Central" },
      ],
      dynamicTitle: true,
    },
  },
};

export const parameters = {
  docs: {
    source: {
      language: "html",
      format: true,
      transform: (code: string, storyContext: any) => {
        try {
          // Get the component and args from story context
          const Component = storyContext.component;
          const args = storyContext.args || {};

          // Create the component element
          const componentElement = createElement(Component, args);

          // Render to static HTML markup
          const html = renderToStaticMarkup(componentElement);

          // Format the HTML nicely
          const formattedHtml = html
            .replace(/></g, ">\n<") // Add line breaks between tags
            .replace(/^\s+|\s+$/g, "") // Trim whitespace
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line.length > 0)
            .join("\n");

          return formattedHtml;
        } catch (error) {
          console.warn("Failed to extract HTML from story:", error);

          // Simple fallback - just show a basic structure
          const componentName = storyContext.component?.name || "Component";
          const children = storyContext.args?.children || "";
          return `<${componentName.toLowerCase()}>${children}</${componentName.toLowerCase()}>`;
        }
      },
    },
  },
};

export const decorators = [
  (Story: () => JSX.Element, context: any) => {
    const brand = (context.globals.brand || "ntg") as BrandKey;
    applyTheme(brand);
    return Story();
  },
];

// Optional: live-refresh the injected <link> when a theme CSS file changes in dev
if (import.meta && (import.meta as any).hot) {
  (import.meta as any).hot.accept(["../src/themes/theme-ntg.css", "../src/themes/theme-central.css"], () => {
    const link = document.getElementById("ds-theme-link") as HTMLLinkElement | null;
    if (link) link.href = link.href.split("?")[0] + "?t=" + Date.now();
  });
}
