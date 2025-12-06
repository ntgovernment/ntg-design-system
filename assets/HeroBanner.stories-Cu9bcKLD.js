import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as R}from"./Breadcrumbs-D0Ki7nfR.js";import{B as T}from"./Button-Dj14bnFu.js";import"./iframe-DPy1hrv2.js";import"./Link-CHNPYCiy.js";import"./Icon-D9ZymXa3.js";import"./preload-helper-PPVm8Dsz.js";const f=({className:a="",opacity:n=.2})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"500",height:"500",viewBox:"0 0 284.757 287.367",className:a,"aria-hidden":"true",style:{opacity:n},children:e.jsxs("g",{id:"logo-ntg-mono",children:[e.jsx("path",{id:"Path_3","data-name":"Path 3",d:"M120.044,1.847C107.731,3.694,95.727,23.393,100.96,38.168c7.08,20.315,22.162,54.174,43.093,54.789,21.238-.616,36.013-34.166,43.093-54.789,5.233-14.775-7.079-33.551-19.084-36.321-11.389-2.462-32.012-2.462-48.017,0M18.776,74.181c-6.156,11.081,1.231,32.935,15.7,37.86,20.007,7.079,55.4,16.006,68.948-.308C116.35,94.5,99.729,61.561,88.648,43.093c-8-13.236-30.165-15.39-39.707-7.387C39.4,43.4,26.779,59.714,18.776,74.181m-8,126.2c4.617,11.7,25.856,19.392,38.783,11.081,17.853-11.7,46.786-34.166,42.477-55.4C86.8,135.126,51.4,127.739,30.165,124.969,15.082,123.122,0,139.435,0,152.055c0,12.312,4.617,32.935,10.773,48.325m91.418,84.954c12,3.694,31.088-8.618,32.627-24.317,2.155-21.546,3.078-58.791-15.7-68.64-19.392-8.926-47.094,14.775-62.176,30.165-10.773,11.081-8,33.551,1.847,41.246,9.234,7.7,28.01,16.621,43.4,21.546m121.89-20.007c10.158-7.08,12.62-30.165,1.847-41.246-15.082-15.39-43.093-39.091-62.176-30.165-18.776,9.85-17.853,46.786-15.7,68.64,1.539,15.7,20.623,27.395,32.627,24.317,11.7-3.078,30.165-12.312,43.4-21.546m60.637-110.194c.923-12.62-15.082-28.934-30.473-27.087-21.239,2.462-56.636,10.158-61.869,31.088-4.309,21.238,24.624,43.708,42.477,55.4,12.928,8.311,33.551.616,38.783-10.773,5.54-11.7,10.158-32.012,11.081-48.633M238.548,37.86c-9.234-8.619-31.7-5.848-39.707,7.387-11.081,18.468-27.7,51.4-14.775,68.64,13.543,16.621,48.633,7.387,68.948.308,14.467-4.925,21.238-26.471,16.006-37.86-5.848-10.773-18.468-27.395-30.473-38.476",transform:"translate(0 0)",fill:"#ababab"}),e.jsx("path",{id:"Path_4","data-name":"Path 4",d:"M128.792,27.062c-1.539,9.234-13.543,32.935-4,45.247,10.158,13.236,34.782,5.54,44.324,6.464l-1.231.308c-8,4.617-33.551,9.85-36.937,24.932-3.694,16.314,17.545,31.4,22.778,39.4l-1.231-.616c-8.311-3.694-28.626-20.931-42.169-14.159C95.55,136.025,97.4,161.881,94.318,171.115v-1.231c-2.462-8.926-1.847-35.705-15.39-42.477-15.082-7.387-33.858,10.158-42.785,13.543l.923-.923c5.233-7.7,26.163-23.7,22.778-38.783C56.151,84.93,30.911,80.928,22.6,76l1.231.308c9.234-.308,34.474,6.156,44.016-6.156C78,56.919,65.385,34.142,64.154,24.6l.616,1.231c6.156,7.079,16.929,31.4,32.012,31.4,16.314,0,25.856-24.317,32.319-31.4l-.308,1.231Z",transform:"translate(46.964 51.12)",fill:"#ababab"})]})});try{f.displayName="HeroBannerGraphic",f.__docgenInfo={description:"HeroBannerGraphic SVG component - NT Government logo watermark (Desert Rose)",displayName:"HeroBannerGraphic",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},opacity:{defaultValue:{value:"0.2"},description:"",name:"opacity",required:!1,type:{name:"number"}}}}}catch{}const g=({children:a,href:n,className:b=""})=>e.jsx("a",{href:n,className:`ntgds-hero-banner-link ${b}`.trim(),children:a});try{g.displayName="HeroBannerLink",g.__docgenInfo={description:"HeroBannerLink component - Custom link styled for hero banner popular section",displayName:"HeroBannerLink",props:{children:{defaultValue:null,description:"Link text",name:"children",required:!0,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Link destination",name:"href",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const v=({variant:a="primary",breadcrumbs:n,title:b,description:y,ctaLabel:H,ctaHref:C,ctaOnClick:k,popularLinks:L=[],showPopular:_=!0,popularHeading:B="Popular",className:V="",ariaLabel:w="Page header",showGraphic:x=!0,graphicOpacity:P=.2})=>{const r="ntgds-hero-banner",S=t=>{k?(t.preventDefault(),k()):C&&(window.location.href=C)};return e.jsx("section",{className:`${r} ${r}--${a} ${V}`.trim(),"aria-label":w,children:e.jsxs("div",{className:`${r}__container`,children:[n&&n.length>0&&e.jsx("div",{className:`${r}__breadcrumbs`,children:e.jsx(R,{items:n,variant:n.length>3?"collapsed":"default",className:`${r}__breadcrumbs-nav`})}),e.jsxs("div",{className:`${r}__content`,children:[e.jsxs("div",{className:`${r}__main`,children:[e.jsx("h1",{className:`${r}__title`,children:b}),y&&e.jsx("p",{className:`${r}__description`,children:y}),H&&e.jsx(T,{variant:"secondary",size:"large",onClick:S,className:`${r}__cta`,children:H})]}),_&&L.length>0&&e.jsxs("aside",{className:`${r}__popular`,children:[e.jsx("h2",{className:`${r}__popular-heading`,children:B}),e.jsx("div",{className:`${r}__popular-links`,children:L.map((t,N)=>e.jsx(g,{href:t.href,children:t.label},N))})]})]}),x&&e.jsx(f,{className:`${r}__watermark`,opacity:P})]})})};try{v.displayName="HeroBanner",v.__docgenInfo={description:`HeroBanner component displays a prominent page header with breadcrumbs,
title, description, CTA button, and optional popular links section.`,displayName:"HeroBanner",props:{variant:{defaultValue:{value:"primary"},description:"Visual style variant of the hero banner",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},breadcrumbs:{defaultValue:null,description:"Breadcrumb navigation items",name:"breadcrumbs",required:!1,type:{name:"BreadcrumbItem[]"}},title:{defaultValue:null,description:"Main page title",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Optional description text below title",name:"description",required:!1,type:{name:"string"}},ctaLabel:{defaultValue:null,description:"Call-to-action button label",name:"ctaLabel",required:!1,type:{name:"string"}},ctaHref:{defaultValue:null,description:"Call-to-action button destination",name:"ctaHref",required:!1,type:{name:"string"}},ctaOnClick:{defaultValue:null,description:"Call-to-action button click handler",name:"ctaOnClick",required:!1,type:{name:"(() => void)"}},popularLinks:{defaultValue:{value:"[]"},description:"Array of popular page links",name:"popularLinks",required:!1,type:{name:"HeroBannerPopularLink[]"}},showPopular:{defaultValue:{value:"true"},description:"Show/hide popular section",name:"showPopular",required:!1,type:{name:"boolean"}},popularHeading:{defaultValue:{value:"Popular"},description:"Popular section heading",name:"popularHeading",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"Page header"},description:"ARIA label for the banner section",name:"ariaLabel",required:!1,type:{name:"string"}},showGraphic:{defaultValue:{value:"true"},description:"Show/hide background graphic",name:"showGraphic",required:!1,type:{name:"boolean"}},graphicOpacity:{defaultValue:{value:"0.2"},description:"Opacity of background graphic",name:"graphicOpacity",required:!1,type:{name:"number"}}}}}catch{}const E={title:"Components/HeroBanner",component:v,parameters:{layout:"fullscreen",docs:{description:{component:"HeroBanner displays a prominent page header with breadcrumbs, title, description, CTA button, and optional popular links section. Typically used at the top of landing pages."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary"],description:"Visual style variant of the hero banner"},title:{control:"text",description:"Main page title displayed prominently"},description:{control:"text",description:"Optional short description of the page goal"},ctaLabel:{control:"text",description:"Call-to-action button label"},ctaHref:{control:"text",description:"Call-to-action button destination URL"},showPopular:{control:"boolean",description:"Show/hide the popular links section"},popularHeading:{control:"text",description:"Heading for the popular links section"},showGraphic:{control:"boolean",description:"Show/hide the background graphic"},graphicOpacity:{control:{type:"range",min:0,max:1,step:.1},description:"Opacity of the background graphic"}}},l={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Transport",href:"/services/transport"},{label:"Current page"}],title:"Page title",description:"Optional short description of the page goal",ctaLabel:"Call to action",ctaHref:"#",popularLinks:[{label:"Bus timetables and maps",href:"#"},{label:"Check your rego",href:"#"},{label:"Find a Motor Vehicle Registry (MVR)",href:"#"},{label:"Government priorities",href:"#"}],showPopular:!0,popularHeading:"Popular"}},s={args:{variant:"secondary",breadcrumbs:[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Transport",href:"/services/transport"},{label:"Current page"}],title:"Secondary Hero Banner",description:"Light background variant with standard text colors",ctaLabel:"Get started",ctaHref:"#",popularLinks:[{label:"Bus timetables and maps",href:"#"},{label:"Check your rego",href:"#"},{label:"Find a Motor Vehicle Registry (MVR)",href:"#"},{label:"Government priorities",href:"#"}],showPopular:!0,popularHeading:"Popular"}},o={args:{title:"Welcome to NT.GOV.AU",description:"Find government services and information for the Northern Territory",ctaLabel:"Explore services",ctaHref:"#",popularLinks:[{label:"Bus timetables and maps",href:"#"},{label:"Check your rego",href:"#"},{label:"Find a Motor Vehicle Registry (MVR)",href:"#"},{label:"Government priorities",href:"#"}]}},i={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Current page"}],title:"Page title",ctaLabel:"Get started",ctaHref:"#",popularLinks:[{label:"Bus timetables and maps",href:"#"},{label:"Check your rego",href:"#"}]}},c={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Current page"}],title:"Information Page",description:"This page provides important information but doesn't require a call to action",popularLinks:[{label:"Related page 1",href:"#"},{label:"Related page 2",href:"#"},{label:"Related page 3",href:"#"}]}},p={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Current page"}],title:"Simple Hero Banner",description:"A minimal hero banner without popular links",ctaLabel:"Learn more",ctaHref:"#",showPopular:!1}},d={args:{title:"Minimal Example"}},u={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Current page"}],title:"Northern Territory Government Services and Information Portal for Citizens",description:"Access a comprehensive range of government services, forms, and information to support Northern Territory residents and businesses",ctaLabel:"Browse all services",ctaHref:"#",popularLinks:[{label:"Driver's licence renewal",href:"#"},{label:"Business registration",href:"#"},{label:"Public transport information",href:"#"},{label:"Healthcare services",href:"#"},{label:"Education and schools",href:"#"}]}},m={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Current page"}],title:"Services Hub",description:"Quick access to commonly used services",ctaLabel:"View all services",ctaHref:"#",popularLinks:[{label:"Bus timetables",href:"#"},{label:"Check rego",href:"#"},{label:"MVR locations",href:"#"},{label:"Priorities",href:"#"},{label:"Healthcare",href:"#"},{label:"Education",href:"#"},{label:"Business",href:"#"},{label:"Tourism",href:"#"}]}},h={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Transport",href:"/services/transport"},{label:"Vehicles",href:"/services/transport/vehicles"},{label:"Registration",href:"/services/transport/vehicles/registration"},{label:"Current page"}],title:"Vehicle Registration",description:"Register your vehicle or renew your registration online",ctaLabel:"Start registration",ctaHref:"#",popularLinks:[{label:"Check rego status",href:"#"},{label:"Calculate registration fees",href:"#"},{label:"Find a registry",href:"#"}]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Services",
      href: "/services"
    }, {
      label: "Transport",
      href: "/services/transport"
    }, {
      label: "Current page"
    }],
    title: "Page title",
    description: "Optional short description of the page goal",
    ctaLabel: "Call to action",
    ctaHref: "#",
    popularLinks: [{
      label: "Bus timetables and maps",
      href: "#"
    }, {
      label: "Check your rego",
      href: "#"
    }, {
      label: "Find a Motor Vehicle Registry (MVR)",
      href: "#"
    }, {
      label: "Government priorities",
      href: "#"
    }],
    showPopular: true,
    popularHeading: "Popular"
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Services",
      href: "/services"
    }, {
      label: "Transport",
      href: "/services/transport"
    }, {
      label: "Current page"
    }],
    title: "Secondary Hero Banner",
    description: "Light background variant with standard text colors",
    ctaLabel: "Get started",
    ctaHref: "#",
    popularLinks: [{
      label: "Bus timetables and maps",
      href: "#"
    }, {
      label: "Check your rego",
      href: "#"
    }, {
      label: "Find a Motor Vehicle Registry (MVR)",
      href: "#"
    }, {
      label: "Government priorities",
      href: "#"
    }],
    showPopular: true,
    popularHeading: "Popular"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Welcome to NT.GOV.AU",
    description: "Find government services and information for the Northern Territory",
    ctaLabel: "Explore services",
    ctaHref: "#",
    popularLinks: [{
      label: "Bus timetables and maps",
      href: "#"
    }, {
      label: "Check your rego",
      href: "#"
    }, {
      label: "Find a Motor Vehicle Registry (MVR)",
      href: "#"
    }, {
      label: "Government priorities",
      href: "#"
    }]
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Current page"
    }],
    title: "Page title",
    ctaLabel: "Get started",
    ctaHref: "#",
    popularLinks: [{
      label: "Bus timetables and maps",
      href: "#"
    }, {
      label: "Check your rego",
      href: "#"
    }]
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Current page"
    }],
    title: "Information Page",
    description: "This page provides important information but doesn't require a call to action",
    popularLinks: [{
      label: "Related page 1",
      href: "#"
    }, {
      label: "Related page 2",
      href: "#"
    }, {
      label: "Related page 3",
      href: "#"
    }]
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Services",
      href: "/services"
    }, {
      label: "Current page"
    }],
    title: "Simple Hero Banner",
    description: "A minimal hero banner without popular links",
    ctaLabel: "Learn more",
    ctaHref: "#",
    showPopular: false
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Minimal Example"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Current page"
    }],
    title: "Northern Territory Government Services and Information Portal for Citizens",
    description: "Access a comprehensive range of government services, forms, and information to support Northern Territory residents and businesses",
    ctaLabel: "Browse all services",
    ctaHref: "#",
    popularLinks: [{
      label: "Driver's licence renewal",
      href: "#"
    }, {
      label: "Business registration",
      href: "#"
    }, {
      label: "Public transport information",
      href: "#"
    }, {
      label: "Healthcare services",
      href: "#"
    }, {
      label: "Education and schools",
      href: "#"
    }]
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Current page"
    }],
    title: "Services Hub",
    description: "Quick access to commonly used services",
    ctaLabel: "View all services",
    ctaHref: "#",
    popularLinks: [{
      label: "Bus timetables",
      href: "#"
    }, {
      label: "Check rego",
      href: "#"
    }, {
      label: "MVR locations",
      href: "#"
    }, {
      label: "Priorities",
      href: "#"
    }, {
      label: "Healthcare",
      href: "#"
    }, {
      label: "Education",
      href: "#"
    }, {
      label: "Business",
      href: "#"
    }, {
      label: "Tourism",
      href: "#"
    }]
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Services",
      href: "/services"
    }, {
      label: "Transport",
      href: "/services/transport"
    }, {
      label: "Vehicles",
      href: "/services/transport/vehicles"
    }, {
      label: "Registration",
      href: "/services/transport/vehicles/registration"
    }, {
      label: "Current page"
    }],
    title: "Vehicle Registration",
    description: "Register your vehicle or renew your registration online",
    ctaLabel: "Start registration",
    ctaHref: "#",
    popularLinks: [{
      label: "Check rego status",
      href: "#"
    }, {
      label: "Calculate registration fees",
      href: "#"
    }, {
      label: "Find a registry",
      href: "#"
    }]
  }
}`,...h.parameters?.docs?.source}}};const F=["Default","Secondary","WithoutBreadcrumbs","WithoutDescription","WithoutCTA","WithoutPopular","MinimalContent","LongTitle","ManyPopularLinks","CollapsedBreadcrumbs"];export{h as CollapsedBreadcrumbs,l as Default,u as LongTitle,m as ManyPopularLinks,d as MinimalContent,s as Secondary,o as WithoutBreadcrumbs,c as WithoutCTA,i as WithoutDescription,p as WithoutPopular,F as __namedExportsOrder,E as default};
