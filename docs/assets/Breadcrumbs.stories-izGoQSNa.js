import{B as p}from"./Breadcrumbs-D0Ki7nfR.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-DPy1hrv2.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CHNPYCiy.js";import"./Icon-D9ZymXa3.js";const f={title:"Components/Breadcrumbs",component:p,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","collapsed"],description:"Display variant"},ariaLabel:{control:"text",description:"Accessible label for the navigation"}}},e={args:{items:[{label:"Home",href:"/"},{label:"Page 1",href:"/page-1"},{label:"Parent page",href:"/parent"},{label:"Current page"}],variant:"default"}},a={args:{items:[{label:"Home",href:"/"},{label:"Page 1",href:"/page-1"},{label:"Parent page",href:"/parent"},{label:"Current page"}],variant:"collapsed"}},r={args:{items:[{label:"Home",href:"/"},{label:"Current page"}],variant:"default"}},n={args:{items:[{label:"Home",href:"/"},{label:"Level 1",href:"/level-1"},{label:"Level 2",href:"/level-2"},{label:"Level 3",href:"/level-3"},{label:"Level 4",href:"/level-4"},{label:"Current page"}],variant:"default"}},l={args:{items:[{label:"Home",href:"/"},{label:"Level 1",href:"/level-1"},{label:"Level 2",href:"/level-2"},{label:"Level 3",href:"/level-3"},{label:"Level 4",href:"/level-4"},{label:"Current page"}],variant:"collapsed"}},s={args:{items:[{label:"Home",href:"/"},{label:"Very Long Category Name That Extends",href:"/category"},{label:"Another Long Subcategory Name",href:"/subcategory"},{label:"Current Page With Long Title"}],variant:"collapsed"}},t={args:{items:[{label:"Home"}],variant:"default"}},o={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details"}],variant:"default",ariaLabel:"Product navigation"}},i={args:{items:[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Business Services",href:"/business"},{label:"Consulting",href:"/consulting"},{label:"Digital Transformation",href:"/digital"},{label:"Current Project"}],variant:"collapsed"},parameters:{docs:{description:{story:"Click the ellipsis (...) to open the dropdown menu showing hidden breadcrumb items. The dropdown is center-aligned with a fade-in/slide-down animation. Press Escape or click outside to close."}}}},c={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/electronics"},{label:"Laptops",href:"/laptops"},{label:"Current Model"}],variant:"collapsed"},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"On mobile devices, the collapsed variant maintains the same dropdown behavior but adjusts the dropdown width to fit smaller screens."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Current page"
    }],
    variant: "default"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home"
    }],
    variant: "default"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const v=["Default","Collapsed","TwoLevels","DeepNavigation","DeepNavigationCollapsed","WithLongLabels","SingleLevel","CustomAriaLabel","CollapsedWithDropdownInteractive","MobileCollapsed"];export{a as Collapsed,i as CollapsedWithDropdownInteractive,o as CustomAriaLabel,n as DeepNavigation,l as DeepNavigationCollapsed,e as Default,c as MobileCollapsed,t as SingleLevel,r as TwoLevels,s as WithLongLabels,v as __namedExportsOrder,f as default};
