// .storybook/preview.ts

// Dev-only HMR entry (loads foundations + every component CSS from /src for instant updates)
import "../src/components.hmr.ts";

// Map toolbar values → actual theme CSS files
const THEME_MAP = {
  ntg: new URL("../src/themes/theme-ntg.css", import.meta.url).href,
  ntgcentral: new URL("../src/themes/theme-central.css", import.meta.url).href,
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
