import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as D}from"./iframe-5hMHJX0T.js";import{R as H}from"./RadioButton-DTmN43hM.js";import{I as j}from"./Icon-D9ZymXa3.js";import"./preload-helper-PPVm8Dsz.js";const v=({label:h,options:N,name:b,value:x,onChange:f,helperText:T,successText:_,errorText:y,validationState:o="default",required:g=!1,orientation:V="vertical",className:R=""})=>{const[z,E]=D.useState(""),q=x!==void 0,W=q?x:z,w=r=>{q||E(r),f&&f(r)},C=T&&o==="default",$=_&&o==="success",O=y&&o==="error",e="ntgds-radio-group",G=`${e} ${o!=="default"?`${e}--${o}`:""} ${R}`.trim(),S=`${e}-label-${b}`,t=`${e}-message-${b}`;return a.jsxs("div",{className:G,children:[a.jsxs("label",{id:S,className:`${e}__label`,children:[h,g&&a.jsx("span",{className:`${e}__required`,children:" (required)"})]}),C&&a.jsx("p",{id:t,className:`${e}__helper-text`,children:T}),$&&a.jsxs("div",{id:t,className:`${e}__message ${e}__message--success`,children:[a.jsx("span",{className:`${e}__icon-wrapper`,children:a.jsx(j,{name:"circle-check",size:"sm"})}),a.jsx("p",{className:`${e}__success-text`,children:_})]}),O&&a.jsxs("div",{id:t,className:`${e}__message ${e}__message--error`,children:[a.jsx("span",{className:`${e}__icon-wrapper`,children:a.jsx(j,{name:"circle-exclamation",size:"sm"})}),a.jsx("p",{className:`${e}__error-text`,children:y})]}),a.jsx("div",{className:`${e}__options ${e}__options--${V}`,role:"radiogroup","aria-labelledby":S,"aria-describedby":C||$||O?t:void 0,"aria-invalid":o==="error","aria-required":g,children:N.map(r=>a.jsx(H,{label:r.label,name:b,value:r.value,checked:W===r.value,onChange:()=>w(r.value),helperText:r.helperText,disabled:r.disabled,groupLabel:h,required:g},r.value))})]})};try{v.displayName="RadioGroup",v.__docgenInfo={description:"",displayName:"RadioGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"RadioGroupOption[]"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},successText:{defaultValue:null,description:"",name:"successText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},validationState:{defaultValue:{value:"default"},description:"",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"error"'}]}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Components/RadioGroup",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the radio group"},name:{control:"text",description:"The name attribute for all radio buttons in the group"},helperText:{control:"text",description:"Helper text displayed below the label"},successText:{control:"text",description:"Success message displayed when validationState is 'success'"},errorText:{control:"text",description:"Error message displayed when validationState is 'error'"},validationState:{control:"select",options:["default","error","success"],description:"The validation state of the radio group"},required:{control:"boolean",description:"Whether the radio group is required"},orientation:{control:"radio",options:["vertical","horizontal"],description:"The layout orientation of the radio buttons"}}},s=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],n={args:{label:"Choose an option",name:"basic-radio-group",options:s}},i={args:{label:"Choose your preference",name:"vertical-radio-group",options:s,orientation:"vertical",helperText:"Select one option from the list"}},l={args:{label:"Choose your preference",name:"horizontal-radio-group",options:s,orientation:"horizontal",helperText:"Select one option from the list"}},p={args:{label:"Choose an option",name:"required-radio-group",options:s,required:!0,helperText:"This field is required"}},c={args:{label:"Choose an option",name:"error-radio-group",options:s,validationState:"error",errorText:"Please select an option"}},u={args:{label:"Choose an option",name:"success-radio-group",options:s,value:"option1",validationState:"success",successText:"Great choice!"}},d={args:{label:"Choose an option",name:"disabled-options-radio-group",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2 (Disabled)",disabled:!0},{value:"option3",label:"Option 3"}]}},m={args:{label:"Choose your plan",name:"plan-radio-group",options:[{value:"basic",label:"Basic",helperText:"Free forever"},{value:"pro",label:"Pro",helperText:"$9.99/month"},{value:"enterprise",label:"Enterprise",helperText:"Contact sales"}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Choose an option",
    name: "basic-radio-group",
    options: basicOptions
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Choose your preference",
    name: "vertical-radio-group",
    options: basicOptions,
    orientation: "vertical",
    helperText: "Select one option from the list"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Choose your preference",
    name: "horizontal-radio-group",
    options: basicOptions,
    orientation: "horizontal",
    helperText: "Select one option from the list"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Choose an option",
    name: "required-radio-group",
    options: basicOptions,
    required: true,
    helperText: "This field is required"
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Choose an option",
    name: "error-radio-group",
    options: basicOptions,
    validationState: "error",
    errorText: "Please select an option"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Choose an option",
    name: "success-radio-group",
    options: basicOptions,
    value: "option1",
    validationState: "success",
    successText: "Great choice!"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Choose an option",
    name: "disabled-options-radio-group",
    options: [{
      value: "option1",
      label: "Option 1"
    }, {
      value: "option2",
      label: "Option 2 (Disabled)",
      disabled: true
    }, {
      value: "option3",
      label: "Option 3"
    }]
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Choose your plan",
    name: "plan-radio-group",
    options: [{
      value: "basic",
      label: "Basic",
      helperText: "Free forever"
    }, {
      value: "pro",
      label: "Pro",
      helperText: "$9.99/month"
    }, {
      value: "enterprise",
      label: "Enterprise",
      helperText: "Contact sales"
    }]
  }
}`,...m.parameters?.docs?.source}}};const A=["Default","Vertical","Horizontal","Required","WithError","WithSuccess","WithDisabledOptions","WithHelperTextPerOption"];export{n as Default,l as Horizontal,p as Required,i as Vertical,d as WithDisabledOptions,c as WithError,m as WithHelperTextPerOption,u as WithSuccess,A as __namedExportsOrder,L as default};
