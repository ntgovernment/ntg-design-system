import{j as a}from"./jsx-runtime-u17CrQMm.js";import{L as c}from"./Link-CHNPYCiy.js";import{I as v}from"./Icon-D9ZymXa3.js";import"./iframe-DPy1hrv2.js";import"./preload-helper-PPVm8Dsz.js";const l=({title:o,headerHref:d="#",iconProps:f={name:"chevron-left",size:"md",color:"default"},items:m,activeHref:p,className:g=""})=>{const e="ntgds-side-navigation",u=[e,g].filter(Boolean).join("");return a.jsxs("nav",{className:u,children:[a.jsx("div",{className:`${e}__header-wrapper`,children:a.jsxs(c,{href:d,className:`${e}__header`,children:[a.jsx(v,{...f}),a.jsx("h2",{className:`${e}__title`,children:o})]})}),a.jsx("ul",{className:`${e}__items`,children:m.map((t,h)=>{const r=p===t.href;return a.jsx("li",{className:`${e}__item ${r?`${e}__item--active`:""}`,children:a.jsx("div",{className:`${e}__link-wrapper`,children:a.jsx(c,{href:t.href,className:`${e}__link ${r?`${e}__link--active`:""}`,...r&&{"aria-current":"page"},children:t.label})})},h)})})]})};try{l.displayName="SideNavigation",l.__docgenInfo={description:`SideNavigation component for displaying sibling page navigation.
Shows a titled list of navigation links with active state indication.
Responsive: sidebar on desktop, full-width on mobile.`,displayName:"SideNavigation",props:{title:{defaultValue:null,description:"Navigation title",name:"title",required:!0,type:{name:"string"}},headerHref:{defaultValue:{value:"#"},description:"Header link destination URL (makes icon + title clickable)",name:"headerHref",required:!1,type:{name:"string"}},iconProps:{defaultValue:{value:'{ name: "chevron-left", size: "md", color: "default" }'},description:"Icon props for the header icon",name:"iconProps",required:!1,type:{name:"IconProps"}},items:{defaultValue:null,description:"Array of navigation items",name:"items",required:!0,type:{name:"SideNavigationItem[]"}},activeHref:{defaultValue:null,description:"Currently active/selected page href for aria-current",name:"activeHref",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const H={title:"Components/SideNavigation",component:l,parameters:{layout:"padded"},tags:["autodocs"]},n={args:{title:"Page title",headerHref:"#",items:[{href:"/page-1",label:"Navigation list item"},{href:"/page-2",label:"Navigation list item"},{href:"/page-3",label:"Navigation list item"},{href:"/page-4",label:"Navigation list item"},{href:"/page-5",label:"Navigation list item"},{href:"/page-6",label:"Navigation list item"}],activeHref:"/page-3"}},i={args:{title:"Documentation",headerHref:"/docs",iconProps:{name:"book",size:"md",color:"default"},items:[{href:"/docs/getting-started",label:"Getting Started"},{href:"/docs/installation",label:"Installation"},{href:"/docs/configuration",label:"Configuration"},{href:"/docs/usage",label:"Usage Guide"},{href:"/docs/advanced",label:"Advanced Topics"},{href:"/docs/api-reference",label:"API Reference"},{href:"/docs/examples",label:"Examples"},{href:"/docs/troubleshooting",label:"Troubleshooting"},{href:"/docs/faq",label:"FAQ"},{href:"/docs/support",label:"Support"}],activeHref:"/docs/usage"}},s={args:{title:"Services",headerHref:"/services",iconProps:{name:"briefcase",size:"md",color:"default"},items:[{href:"/services/benefits",label:"Benefits"},{href:"/services/grants",label:"Grants"},{href:"/services/licenses",label:"Licenses"},{href:"/services/permits",label:"Permits"}],activeHref:"/services/benefits"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Page title",
    headerHref: "#",
    items: [{
      href: "/page-1",
      label: "Navigation list item"
    }, {
      href: "/page-2",
      label: "Navigation list item"
    }, {
      href: "/page-3",
      label: "Navigation list item"
    }, {
      href: "/page-4",
      label: "Navigation list item"
    }, {
      href: "/page-5",
      label: "Navigation list item"
    }, {
      href: "/page-6",
      label: "Navigation list item"
    }],
    activeHref: "/page-3"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Documentation",
    headerHref: "/docs",
    iconProps: {
      name: "book",
      size: "md",
      color: "default"
    },
    items: [{
      href: "/docs/getting-started",
      label: "Getting Started"
    }, {
      href: "/docs/installation",
      label: "Installation"
    }, {
      href: "/docs/configuration",
      label: "Configuration"
    }, {
      href: "/docs/usage",
      label: "Usage Guide"
    }, {
      href: "/docs/advanced",
      label: "Advanced Topics"
    }, {
      href: "/docs/api-reference",
      label: "API Reference"
    }, {
      href: "/docs/examples",
      label: "Examples"
    }, {
      href: "/docs/troubleshooting",
      label: "Troubleshooting"
    }, {
      href: "/docs/faq",
      label: "FAQ"
    }, {
      href: "/docs/support",
      label: "Support"
    }],
    activeHref: "/docs/usage"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Services",
    headerHref: "/services",
    iconProps: {
      name: "briefcase",
      size: "md",
      color: "default"
    },
    items: [{
      href: "/services/benefits",
      label: "Benefits"
    }, {
      href: "/services/grants",
      label: "Grants"
    }, {
      href: "/services/licenses",
      label: "Licenses"
    }, {
      href: "/services/permits",
      label: "Permits"
    }],
    activeHref: "/services/benefits"
  }
}`,...s.parameters?.docs?.source}}};const y=["Default","MultipleItems","CustomIcon"];export{s as CustomIcon,n as Default,i as MultipleItems,y as __namedExportsOrder,H as default};
