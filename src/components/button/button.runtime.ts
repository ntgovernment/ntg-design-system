export function enhanceButtons(root: ParentNode = document, customFn?: (el: HTMLElement) => void) {
  for (const el of root.querySelectorAll<HTMLElement>(".ntgds-btn")) {
    if ((el as any)._dsEnhanced) continue;
    (el as any)._dsEnhanced = true;
    el.addEventListener("click", () => {
      if (customFn) customFn(el);
      // Custom JS
    });
  }
}
