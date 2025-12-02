import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/components/**/*.stories.@(ts|tsx)", "../src/**/*.mdx"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  docs: {
    defaultName: "Docs"
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes("node_modules");
        }
        return true;
      },
    },
  },
  staticDirs: [
    // Copy built CSS files to storybook static assets
    { from: "../dist/css", to: "/css" },
    // Copy tokens file to storybook static assets
    { from: "../src/tokens", to: "/tokens" },
    // Copy built JS file to storybook static assets
    { from: "../dist", to: "/dist" },
  ],
};
export default config;
