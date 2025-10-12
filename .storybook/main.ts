import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/components/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
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
