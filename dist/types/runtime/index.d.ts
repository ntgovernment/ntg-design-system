import { enhanceButtons } from '../components/button/button.runtime';
export { Accordion, AccordionItem } from '../components/accordion/Accordion';
export { Button } from '../components/button/Button';
export { Icon } from '../components/icon/Icon';
export { Notification } from '../components/notification/Notification';
export { Pill } from '../components/pill/Pill';
declare function initAll(root?: ParentNode): void;
export declare const components: {
    button: {
        enhanceButtons: typeof enhanceButtons;
    };
};
export declare const version = "0.2.0";
declare const _default: {
    version: string;
    initAll: typeof initAll;
    components: {
        button: {
            enhanceButtons: typeof enhanceButtons;
        };
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map