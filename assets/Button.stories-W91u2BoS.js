import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css               */import"./index-yBjzXJbu.js";const d=({variant:m="primary",size:p="large",loading:i=!1,disabled:u=!1,children:g,className:y,...b})=>{const e="ntgds-btn",h=[e,`${e}--${m}`,p==="small"&&`${e}--small`,i&&`${e}--loading`,y].filter(Boolean).join(" ");return c.jsx("button",{className:h,disabled:u||i,...b,children:i?c.jsx("span",{className:`${e}__loading-indicator`}):g})};d.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"large" | "small"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'}]},description:"",defaultValue:{value:'"large"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S={title:"Components/Button",component:d,parameters:{layout:"centered"},args:{children:"Button",variant:"primary",size:"large"},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"The visual style of the button."},size:{control:"select",options:["large","small"],description:"The size of the button."},loading:{control:"boolean",description:"Show a loading indicator."},disabled:{control:"boolean",description:"Disable the button."}},tags:["autodocs"]},a={args:{variant:"primary",children:"Label"}},r={args:{variant:"secondary",children:"Label"}},s={args:{variant:"tertiary",children:"Label"}},n={args:{size:"small",children:"Label"}},t={args:{size:"large",children:"Label"}},o={args:{loading:!0,children:"..."}},l={args:{disabled:!0,children:"Label"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Label"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Label"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "tertiary",
    children: "Label"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    children: "Label"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: "Label"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: "..."
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Label"
  }
}`,...l.parameters?.docs?.source}}};const T=["Primary","Secondary","Tertiary","Small","Large","Loading","Disabled"];export{l as Disabled,t as Large,o as Loading,a as Primary,r as Secondary,n as Small,s as Tertiary,T as __namedExportsOrder,S as default};
