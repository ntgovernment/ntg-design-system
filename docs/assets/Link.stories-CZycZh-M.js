import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as r}from"./Link-BjDQhWTe.js";import"./iframe-DB-45t0D.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Components/Link",component:r,parameters:{layout:"centered",docs:{description:{component:"A simple, accessible link component for navigation and document downloads. Works inline within paragraphs or as standalone links. Fully theme-agnostic using design system tokens."}}},tags:["autodocs"],argTypes:{href:{control:"text",description:"The URL the link points to."},children:{control:"text",description:"The link text content."},disabled:{control:"boolean",description:"Whether the link is disabled."},className:{control:"text",description:"Additional CSS classes."},ariaLabel:{control:"text",description:"Accessible label for screen readers."}}},n={args:{href:"#",children:"Link sample text"}},s={render:()=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsxs("p",{children:["Links can be inline (as part of a paragraph or text) or standalone."," ",e.jsx(r,{href:"#",children:"This is an inline link"})," that flows naturally with the surrounding text. Links work seamlessly within paragraphs and maintain proper text flow."]})}),parameters:{docs:{description:{story:"Inline links flow naturally within paragraph text and inherit the surrounding context."}}}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Default:"}),e.jsx("br",{}),e.jsx(r,{href:"#default",children:"Link sample text"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Hover:"}),e.jsx("br",{}),e.jsx(r,{href:"#hover",children:"Link sample text"}),e.jsx("br",{}),e.jsx("small",{style:{color:"var(--clr-text-helper)"},children:"(Hover to see color change)"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Visited:"}),e.jsx("br",{}),e.jsx(r,{href:"#visited",children:"Link sample text"}),e.jsx("br",{}),e.jsx("small",{style:{color:"var(--clr-text-helper)"},children:"(Click to mark as visited)"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Focus:"}),e.jsx("br",{}),e.jsx(r,{href:"#focus",children:"Link sample text"}),e.jsx("br",{}),e.jsx("small",{style:{color:"var(--clr-text-helper)"},children:"(Tab to see focus state with background and border)"})]})]}),parameters:{docs:{description:{story:"All link states: default (blue), hover (ochre/red), visited (purple), and focus (background with bottom border). Links have no underline decoration in any state."}}}},i={args:{href:"#",children:"Link sample text",disabled:!0},parameters:{docs:{description:{story:"Disabled links cannot be clicked and have reduced opacity."}}}},a={render:()=>e.jsxs("nav",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{href:"#home",children:"Home"}),e.jsx(r,{href:"#about",children:"About Us"}),e.jsx(r,{href:"#services",children:"Services"}),e.jsx(r,{href:"#contact",children:"Contact"})]}),parameters:{docs:{description:{story:"Links used in navigation menus."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    children: "Link sample text"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "600px"
  }}>\r
      <p>\r
        Links can be inline (as part of a paragraph or text) or standalone.{" "}\r
        <Link href="#">This is an inline link</Link> that flows naturally with\r
        the surrounding text. Links work seamlessly within paragraphs and\r
        maintain proper text flow.\r
      </p>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Inline links flow naturally within paragraph text and inherit the surrounding context."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px"
  }}>\r
      <div>\r
        <strong>Default:</strong>\r
        <br />\r
        <Link href="#default">Link sample text</Link>\r
      </div>\r
      <div>\r
        <strong>Hover:</strong>\r
        <br />\r
        <Link href="#hover">Link sample text</Link>\r
        <br />\r
        <small style={{
        color: "var(--clr-text-helper)"
      }}>\r
          (Hover to see color change)\r
        </small>\r
      </div>\r
      <div>\r
        <strong>Visited:</strong>\r
        <br />\r
        <Link href="#visited">Link sample text</Link>\r
        <br />\r
        <small style={{
        color: "var(--clr-text-helper)"
      }}>\r
          (Click to mark as visited)\r
        </small>\r
      </div>\r
      <div>\r
        <strong>Focus:</strong>\r
        <br />\r
        <Link href="#focus">Link sample text</Link>\r
        <br />\r
        <small style={{
        color: "var(--clr-text-helper)"
      }}>\r
          (Tab to see focus state with background and border)\r
        </small>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "All link states: default (blue), hover (ochre/red), visited (purple), and focus (background with bottom border). Links have no underline decoration in any state."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    children: "Link sample text",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled links cannot be clicked and have reduced opacity."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <nav style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }}>\r
      <Link href="#home">Home</Link>\r
      <Link href="#about">About Us</Link>\r
      <Link href="#services">Services</Link>\r
      <Link href="#contact">Contact</Link>\r
    </nav>,
  parameters: {
    docs: {
      description: {
        story: "Links used in navigation menus."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const h=["Default","InParagraph","AllStates","Disabled","NavigationLinks"];export{t as AllStates,n as Default,i as Disabled,s as InParagraph,a as NavigationLinks,h as __namedExportsOrder,p as default};
