import{j as e}from"./jsx-runtime-u17CrQMm.js";import{L as P}from"./Link-D4JxBBaD.js";import{I as F}from"./Icon-BrQ12ZgB.js";import"./iframe-BMHqEkGZ.js";import"./preload-helper-PPVm8Dsz.js";const _={DOCX:"file-word",PDF:"file-pdf",XLSX:"file-excel",PPTX:"file-powerpoint"},p=({title:c,href:u,fileFormat:r="DOCX",fileSize:m,description:d,external:f=!1,ariaLabel:h,className:g="",...x})=>{const t="ntgds-document",D=[t,g].filter(Boolean).join(" "),v=m?`${r} | ${m}`:r,X=_[r];return e.jsxs("div",{className:D,...x,children:[e.jsxs("div",{className:`${t}__header`,children:[e.jsx("div",{className:`${t}__icon`,children:e.jsx(F,{name:X,faStyle:"regular",size:"lg",ariaLabel:r})}),e.jsxs("div",{className:`${t}__content`,children:[e.jsx(P,{href:u,className:`${t}__title`,ariaLabel:h||c,...f?{target:"_blank",rel:"noopener noreferrer"}:{},children:c}),e.jsx("div",{className:`${t}__meta`,children:v})]})]}),d&&e.jsx("div",{className:`${t}__description`,children:d})]})};try{p.displayName="Document",p.__docgenInfo={description:"",displayName:"Document",props:{title:{defaultValue:null,description:"Document title text shown as a link",name:"title",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"Destination URL",name:"href",required:!0,type:{name:"string"}},fileFormat:{defaultValue:{value:"DOCX"},description:"File format to drive icon and meta prefix",name:"fileFormat",required:!1,type:{name:"enum",value:[{value:'"DOCX"'},{value:'"PDF"'},{value:'"XLSX"'},{value:'"PPTX"'}]}},fileSize:{defaultValue:null,description:'Optional file size string, e.g. "182 KB"',name:"fileSize",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Optional helper/description line under the title/meta block",name:"description",required:!1,type:{name:"string"}},external:{defaultValue:{value:"false"},description:"Whether the link opens in a new tab",name:"external",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"Accessible label for the title link",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS classes on the root",name:"className",required:!1,type:{name:"string"}}}}}catch{}const N={title:"Components/Document",component:p,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{fileFormat:{control:"select",options:["DOCX","PDF","XLSX","PPTX"]},external:{control:"boolean"},description:{control:"text"}}},a={args:{title:"This is the document title",href:"https://nt.gov.au/documents/sample.docx",fileFormat:"DOCX",fileSize:"182 KB",description:"Optional description of the document."}},s={args:{...a.args,fileFormat:"PDF",href:"https://nt.gov.au/documents/sample.pdf"}},n={args:{...a.args,fileFormat:"XLSX",href:"https://nt.gov.au/documents/sample.xlsx"}},o={args:{...a.args,fileFormat:"PPTX",href:"https://nt.gov.au/documents/sample.pptx"}},i={args:{title:"Document without description",href:"https://nt.gov.au/documents/one-pager.pdf",fileFormat:"PDF",fileSize:"320 KB",description:""}},l={args:{title:"External document link",href:"https://example.com/documents/overview.pdf",fileFormat:"PDF",fileSize:"540 KB",description:"Opens in a new tab.",external:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "This is the document title",
    href: "https://nt.gov.au/documents/sample.docx",
    fileFormat: "DOCX",
    fileSize: "182 KB",
    description: "Optional description of the document."
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fileFormat: "PDF",
    href: "https://nt.gov.au/documents/sample.pdf"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fileFormat: "XLSX",
    href: "https://nt.gov.au/documents/sample.xlsx"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fileFormat: "PPTX",
    href: "https://nt.gov.au/documents/sample.pptx"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Document without description",
    href: "https://nt.gov.au/documents/one-pager.pdf",
    fileFormat: "PDF",
    fileSize: "320 KB",
    description: ""
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "External document link",
    href: "https://example.com/documents/overview.pdf",
    fileFormat: "PDF",
    fileSize: "540 KB",
    description: "Opens in a new tab.",
    external: true
  }
}`,...l.parameters?.docs?.source}}};const j=["Default","PDF","XLSX","PPTX","WithoutDescription","External"];export{a as Default,l as External,s as PDF,o as PPTX,i as WithoutDescription,n as XLSX,j as __namedExportsOrder,N as default};
