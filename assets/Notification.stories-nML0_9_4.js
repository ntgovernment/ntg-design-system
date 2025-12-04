import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as m}from"./Icon-D9ZymXa3.js";const r=({title:i,message:c,variant:o="info",className:l=""})=>{const d={info:"circle-info",success:"circle-check",warning:"triangle-exclamation",danger:"circle-xmark"};return e.jsxs("div",{className:`ntgds-notification ntgds-notification--${o} ${l}`.trim(),children:[e.jsx("div",{className:"ntgds-notification__border"}),e.jsx("div",{className:"ntgds-notification__content",children:e.jsxs("div",{className:"ntgds-notification__header",children:[e.jsx("div",{className:"ntgds-notification__icon",children:e.jsx(m,{name:d[o],size:"lg"})}),e.jsxs("div",{className:"ntgds-notification__text",children:[e.jsx("div",{className:"ntgds-notification__title",children:i}),e.jsx("div",{className:"ntgds-notification__message",children:c})]})]})})]})};try{r.displayName="Notification",r.__docgenInfo={description:"",displayName:"Notification",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const p={title:"Components/Notification",component:r,parameters:{layout:"padded",docs:{description:{component:"A theme-agnostic notification component with variants for info, success, warning, and danger states."}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Notification title"},message:{control:"text",description:"Notification message content"},variant:{control:"select",options:["info","success","warning","danger"],description:"Notification variant type"},className:{control:"text",description:"Additional CSS classes"}}},a={args:{title:"Information alert",message:"Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.",variant:"info"}},t={args:{title:"Success alert",message:"Your action was completed successfully. All changes have been saved.",variant:"success"}},n={args:{title:"Warning alert",message:"Please review the following information before proceeding with this action.",variant:"warning"}},s={args:{title:"Danger alert",message:"An error occurred while processing your request. Please try again later.",variant:"danger"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Information alert",
    message: "Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.",
    variant: "info"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Success alert",
    message: "Your action was completed successfully. All changes have been saved.",
    variant: "success"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Warning alert",
    message: "Please review the following information before proceeding with this action.",
    variant: "warning"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Danger alert",
    message: "An error occurred while processing your request. Please try again later.",
    variant: "danger"
  }
}`,...s.parameters?.docs?.source}}};const f=["Info","Success","Warning","Danger"];export{s as Danger,a as Info,t as Success,n as Warning,f as __namedExportsOrder,p as default};
