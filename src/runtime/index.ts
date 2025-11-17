import { enhanceButtons } from "../components/button/button.runtime";

function initAll(root: ParentNode = document) {
  enhanceButtons(root);
}

export const components = {
  button: { enhanceButtons },
};

export const version = "0.2.0";

export default { version, initAll, components };
