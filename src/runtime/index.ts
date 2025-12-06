import { enhanceButtons } from "../components/button/button.runtime";

// React components
export { Accordion, AccordionItem } from "../components/accordion/Accordion";
export { BackToTopButton } from "../components/back-to-top-button/BackToTopButton";
export { Button } from "../components/button/Button";
export { Card } from "../components/card/Card";
export { Callout } from "../components/callout/Callout";
export { Dropdown } from "../components/dropdown/Dropdown";
export { FloatingButton } from "../components/floating-button/FloatingButton";
export { Icon } from "../components/icon/Icon";
export { Image } from "../components/image/Image";
export { ImageGallery } from "../components/image-gallery/ImageGallery";
export type { GalleryImage, ImageGalleryProps } from "../components/image-gallery/ImageGallery";
export { Link } from "../components/link/Link";
export { Notification } from "../components/notification/Notification";
export { Pagination } from "../components/pagination/Pagination";
export { Pill } from "../components/pill/Pill";
export { QuickExit } from "../components/quick-exit/QuickExit";
export { SearchBar } from "../components/search-bar/SearchBar";
export { Tag } from "../components/tag/Tag";

function initAll(root: ParentNode = document) {
  enhanceButtons(root);
}

export const components = {
  button: { enhanceButtons },
};

export const version = "0.2.0";

export default { version, initAll, components };
