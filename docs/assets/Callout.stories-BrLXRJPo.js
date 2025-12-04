import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-D0A1nOia.js";import"./preload-helper-PPVm8Dsz.js";const r=({title:i,children:a,className:l=""})=>e.jsxs("div",{className:`ntgds-callout ${l}`.trim(),children:[e.jsx("div",{className:"ntgds-callout__border"}),e.jsx("div",{className:"ntgds-callout__content",children:e.jsx("div",{className:"ntgds-callout__header",children:e.jsxs("div",{className:"ntgds-callout__text",children:[e.jsx("h3",{className:"ntgds-callout__title",children:i}),e.jsx("div",{className:"ntgds-callout__body",children:a})]})})})]});try{r.displayName="Callout",r.__docgenInfo={description:`Callout component for highlighting important information
Features a prominent left border for visual distinction`,displayName:"Callout",props:{title:{defaultValue:null,description:"Callout heading text",name:"title",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Callout body content",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const u={title:"Components/Callout",component:r,parameters:{layout:"padded",docs:{description:{component:"Callout component for highlighting important information with a prominent left border. Perfect for tips, notes, and informational content. Does not support icons."}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Callout heading text"},children:{control:"text",description:"Callout body content (supports rich content)"},className:{control:"text",description:"Additional CSS classes"}}},t={args:{title:"Callout heading",children:"Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in."}},n={args:{title:"Getting Started Guide",children:"Placeholder"},render:()=>e.jsxs(r,{title:"Getting Started Guide",children:[e.jsx("p",{children:"Follow these steps to get started with the NTG Design System:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Install the package using npm or yarn"}),e.jsx("li",{children:"Import the theme CSS in your application"}),e.jsx("li",{children:"Import components as needed"}),e.jsx("li",{children:"Refer to the documentation for component APIs"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," Callout is a text-only component and does not support icons."]})]})},o={args:{title:"Accessibility Guidelines",children:"The NTG Design System is committed to providing accessible components that meet WCAG 2.1 AA standards. All components include proper ARIA attributes, keyboard navigation support, and semantic HTML. We test with screen readers and ensure high contrast mode compatibility. When using callouts, ensure that the information is also conveyed through text and not color alone. This helps users with visual impairments or color blindness understand the content."}},s={args:{title:"Quick Note",children:"This is a brief callout with minimal content."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Callout heading",
    children: "Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in."
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Getting Started Guide",
    children: "Placeholder"
  },
  render: () => <Callout title="Getting Started Guide">\r
      <p>\r
        Follow these steps to get started with the NTG Design System:\r
      </p>\r
      <ol>\r
        <li>Install the package using npm or yarn</li>\r
        <li>Import the theme CSS in your application</li>\r
        <li>Import components as needed</li>\r
        <li>Refer to the documentation for component APIs</li>\r
      </ol>\r
      <p>\r
        <strong>Note:</strong> Callout is a text-only component and does not support icons.\r
      </p>\r
    </Callout>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Accessibility Guidelines",
    children: "The NTG Design System is committed to providing accessible components that meet WCAG 2.1 AA standards. All components include proper ARIA attributes, keyboard navigation support, and semantic HTML. We test with screen readers and ensure high contrast mode compatibility. When using callouts, ensure that the information is also conveyed through text and not color alone. This helps users with visual impairments or color blindness understand the content."
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Quick Note",
    children: "This is a brief callout with minimal content."
  }
}`,...s.parameters?.docs?.source}}};const m=["Basic","RichContent","LongContent","ShortContent"];export{t as Basic,o as LongContent,n as RichContent,s as ShortContent,m as __namedExportsOrder,u as default};
