import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as f}from"./Link-CHNPYCiy.js";import"./iframe-DPy1hrv2.js";import"./preload-helper-PPVm8Dsz.js";const s=({title:i="On this page",links:o,className:c=""})=>{const r="ntgds-in-page-navigation",p=[r,c].filter(Boolean).join(" ");return e.jsxs("nav",{className:p,children:[e.jsx("h2",{className:`${r}__title`,children:i}),e.jsx("ul",{className:`${r}__links`,children:o.map((l,h)=>e.jsx("li",{children:e.jsx(f,{href:l.href,children:l.label})},h))})]})};try{s.displayName="InPageNavigation",s.__docgenInfo={description:`InPageNavigation component for displaying page section links.
Provides a titled list of navigation links with left border accent.`,displayName:"InPageNavigation",props:{title:{defaultValue:{value:"On this page"},description:'Section title (default: "On this page")',name:"title",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"Array of navigation links",name:"links",required:!0,type:{name:"InPageNavigationLink[]"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const m={title:"Components/InPageNavigation",component:s,parameters:{layout:"padded"},tags:["autodocs"]},n={args:{title:"On this page",links:[{href:"#section-1",label:"Link to section 1"},{href:"#section-2",label:"Link to section 2"},{href:"#section-3",label:"Link to section 3"},{href:"#section-4",label:"Link to section 4"},{href:"#section-5",label:"Link to section 5"}]}},t={args:{title:"On this page",links:[{href:"#introduction",label:"Introduction"},{href:"#overview",label:"Overview"},{href:"#features",label:"Features and Benefits"},{href:"#getting-started",label:"Getting Started"},{href:"#installation",label:"Installation Guide"},{href:"#configuration",label:"Configuration Options"},{href:"#usage",label:"Usage Examples"},{href:"#troubleshooting",label:"Troubleshooting"},{href:"#faq",label:"Frequently Asked Questions"},{href:"#support",label:"Support and Resources"}]}},a={args:{title:"Table of Contents",links:[{href:"#chapter-1",label:"Chapter 1: Introduction"},{href:"#chapter-2",label:"Chapter 2: Foundations"},{href:"#chapter-3",label:"Chapter 3: Advanced Topics"},{href:"#chapter-4",label:"Chapter 4: Best Practices"},{href:"#chapter-5",label:"Chapter 5: Conclusion"}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "On this page",
    links: [{
      href: "#section-1",
      label: "Link to section 1"
    }, {
      href: "#section-2",
      label: "Link to section 2"
    }, {
      href: "#section-3",
      label: "Link to section 3"
    }, {
      href: "#section-4",
      label: "Link to section 4"
    }, {
      href: "#section-5",
      label: "Link to section 5"
    }]
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "On this page",
    links: [{
      href: "#introduction",
      label: "Introduction"
    }, {
      href: "#overview",
      label: "Overview"
    }, {
      href: "#features",
      label: "Features and Benefits"
    }, {
      href: "#getting-started",
      label: "Getting Started"
    }, {
      href: "#installation",
      label: "Installation Guide"
    }, {
      href: "#configuration",
      label: "Configuration Options"
    }, {
      href: "#usage",
      label: "Usage Examples"
    }, {
      href: "#troubleshooting",
      label: "Troubleshooting"
    }, {
      href: "#faq",
      label: "Frequently Asked Questions"
    }, {
      href: "#support",
      label: "Support and Resources"
    }]
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Table of Contents",
    links: [{
      href: "#chapter-1",
      label: "Chapter 1: Introduction"
    }, {
      href: "#chapter-2",
      label: "Chapter 2: Foundations"
    }, {
      href: "#chapter-3",
      label: "Chapter 3: Advanced Topics"
    }, {
      href: "#chapter-4",
      label: "Chapter 4: Best Practices"
    }, {
      href: "#chapter-5",
      label: "Chapter 5: Conclusion"
    }]
  }
}`,...a.parameters?.docs?.source}}};const k=["Default","MultipleLinks","CustomTitle"];export{a as CustomTitle,n as Default,t as MultipleLinks,k as __namedExportsOrder,m as default};
