import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-BCH2fkpn.js";import{L as D}from"./Link-BLLqbDRp.js";import{I as x}from"./Icon-D9ZymXa3.js";import"./preload-helper-PPVm8Dsz.js";const C=({items:l,variant:w="default",className:N="",ariaLabel:S="Breadcrumb"})=>{const[n,v]=t.useState(!1),L=t.useRef(null),o=t.useRef(null);t.useEffect(()=>{const r=s=>{L.current&&!L.current.contains(s.target)&&o.current&&!o.current.contains(s.target)&&v(!1)};if(n)return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[n]),t.useEffect(()=>{const r=s=>{s.key==="Escape"&&n&&(v(!1),o.current?.focus())};if(n)return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[n]);const H=()=>{v(!n)},y=w==="collapsed"&&l.length>2?[l[0],{label:"...",href:void 0},l[l.length-1]]:l,_=w==="collapsed"&&l.length>2?l.slice(1,l.length-1):[],a="ntgds-breadcrumbs";return e.jsx("nav",{className:`${a} ${N}`.trim(),"aria-label":S,children:e.jsx("ol",{className:`${a}__list`,children:y.map((r,s)=>{const P=s===y.length-1;return e.jsxs("li",{className:`${a}__item`,children:[r.label==="..."?e.jsxs("span",{className:`${a}__ellipsis-wrapper`,children:[e.jsx("button",{ref:o,className:`${a}__ellipsis`,onClick:H,"aria-expanded":n,"aria-haspopup":"true","aria-label":"Show hidden pages",type:"button",children:e.jsx(x,{name:"ellipsis",style:{fontSize:"24px",color:"var(--clr-text-default, #3b3b3a)"}})}),n&&_.length>0&&e.jsx("ul",{ref:L,className:`${a}__dropdown`,role:"menu",children:_.map((j,E)=>e.jsx("li",{className:`${a}__dropdown-item`,role:"none",children:e.jsx("span",{className:`${a}__dropdown-text`,role:"menuitem",tabIndex:0,children:j.label})},E))})]}):r.href?e.jsx(D,{href:r.href,className:`${a}__link`,children:r.label}):e.jsx("span",{className:`${a}__current`,"aria-current":"page",children:r.label}),!P&&e.jsx("span",{className:`${a}__separator`,"aria-hidden":"true",children:e.jsx(x,{name:"chevron-right",style:{fontSize:"14px",color:"var(--ntg-colour-secondary-ochre-default, #c33826)"}})})]},s)})})})};try{C.displayName="Breadcrumbs",C.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"collapsed"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"Breadcrumb"},description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Components/Breadcrumbs",component:C,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","collapsed"],description:"Display variant"},ariaLabel:{control:"text",description:"Accessible label for the navigation"}}},i={args:{items:[{label:"Home",href:"/"},{label:"Page 1",href:"/page-1"},{label:"Parent page",href:"/parent"},{label:"Current page"}],variant:"default"}},c={args:{items:[{label:"Home",href:"/"},{label:"Page 1",href:"/page-1"},{label:"Parent page",href:"/parent"},{label:"Current page"}],variant:"collapsed"}},d={args:{items:[{label:"Home",href:"/"},{label:"Current page"}],variant:"default"}},p={args:{items:[{label:"Home",href:"/"},{label:"Level 1",href:"/level-1"},{label:"Level 2",href:"/level-2"},{label:"Level 3",href:"/level-3"},{label:"Level 4",href:"/level-4"},{label:"Current page"}],variant:"default"}},m={args:{items:[{label:"Home",href:"/"},{label:"Level 1",href:"/level-1"},{label:"Level 2",href:"/level-2"},{label:"Level 3",href:"/level-3"},{label:"Level 4",href:"/level-4"},{label:"Current page"}],variant:"collapsed"}},u={args:{items:[{label:"Home",href:"/"},{label:"Very Long Category Name That Extends",href:"/category"},{label:"Another Long Subcategory Name",href:"/subcategory"},{label:"Current Page With Long Title"}],variant:"collapsed"}},b={args:{items:[{label:"Home"}],variant:"default"}},h={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details"}],variant:"default",ariaLabel:"Product navigation"}},f={args:{items:[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Business Services",href:"/business"},{label:"Consulting",href:"/consulting"},{label:"Digital Transformation",href:"/digital"},{label:"Current Project"}],variant:"collapsed"},parameters:{docs:{description:{story:"Click the ellipsis (...) to open the dropdown menu showing hidden breadcrumb items. The dropdown is center-aligned with a fade-in/slide-down animation. Press Escape or click outside to close."}}}},g={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/electronics"},{label:"Laptops",href:"/laptops"},{label:"Current Model"}],variant:"collapsed"},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"On mobile devices, the collapsed variant maintains the same dropdown behavior but adjusts the dropdown width to fit smaller screens."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Page 1",
      href: "/page-1"
    }, {
      label: "Parent page",
      href: "/parent"
    }, {
      label: "Current page"
    }],
    variant: "default"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Page 1",
      href: "/page-1"
    }, {
      label: "Parent page",
      href: "/parent"
    }, {
      label: "Current page"
    }],
    variant: "collapsed"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Current page"
    }],
    variant: "default"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Level 1",
      href: "/level-1"
    }, {
      label: "Level 2",
      href: "/level-2"
    }, {
      label: "Level 3",
      href: "/level-3"
    }, {
      label: "Level 4",
      href: "/level-4"
    }, {
      label: "Current page"
    }],
    variant: "default"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Level 1",
      href: "/level-1"
    }, {
      label: "Level 2",
      href: "/level-2"
    }, {
      label: "Level 3",
      href: "/level-3"
    }, {
      label: "Level 4",
      href: "/level-4"
    }, {
      label: "Current page"
    }],
    variant: "collapsed"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Very Long Category Name That Extends",
      href: "/category"
    }, {
      label: "Another Long Subcategory Name",
      href: "/subcategory"
    }, {
      label: "Current Page With Long Title"
    }],
    variant: "collapsed"
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home"
    }],
    variant: "default"
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Products",
      href: "/products"
    }, {
      label: "Details"
    }],
    variant: "default",
    ariaLabel: "Product navigation"
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Services",
      href: "/services"
    }, {
      label: "Business Services",
      href: "/business"
    }, {
      label: "Consulting",
      href: "/consulting"
    }, {
      label: "Digital Transformation",
      href: "/digital"
    }, {
      label: "Current Project"
    }],
    variant: "collapsed"
  },
  parameters: {
    docs: {
      description: {
        story: "Click the ellipsis (...) to open the dropdown menu showing hidden breadcrumb items. The dropdown is center-aligned with a fade-in/slide-down animation. Press Escape or click outside to close."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Products",
      href: "/products"
    }, {
      label: "Electronics",
      href: "/electronics"
    }, {
      label: "Laptops",
      href: "/laptops"
    }, {
      label: "Current Model"
    }],
    variant: "collapsed"
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    },
    docs: {
      description: {
        story: "On mobile devices, the collapsed variant maintains the same dropdown behavior but adjusts the dropdown width to fit smaller screens."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const O=["Default","Collapsed","TwoLevels","DeepNavigation","DeepNavigationCollapsed","WithLongLabels","SingleLevel","CustomAriaLabel","CollapsedWithDropdownInteractive","MobileCollapsed"];export{c as Collapsed,f as CollapsedWithDropdownInteractive,h as CustomAriaLabel,p as DeepNavigation,m as DeepNavigationCollapsed,i as Default,g as MobileCollapsed,b as SingleLevel,d as TwoLevels,u as WithLongLabels,O as __namedExportsOrder,V as default};
