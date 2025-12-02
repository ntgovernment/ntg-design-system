import { enhanceButtons } from "../components/button/button.runtime";

// React components
export { Accordion, AccordionItem } from "../components/accordion/Accordion";
export { Button } from "../components/button/Button";
export { Callout } from "../components/callout/Callout";
export { Icon } from "../components/icon/Icon";
export { Notification } from "../components/notification/Notification";
export { Pill } from "../components/pill/Pill";

function initAll(root: ParentNode = document) {
  enhanceButtons(root);
}

export const components = {
  button: { enhanceButtons },
};

export const version = "0.2.0";

export default { version, initAll, components };
