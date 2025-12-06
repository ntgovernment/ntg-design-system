import{R as c}from"./RadioButton-eDVIlzfl.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-DPy1hrv2.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-D9ZymXa3.js";const g={title:"Components/RadioButton",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label text for the radio button"},helperText:{control:"text",description:"Helper text displayed above the radio button"},successText:{control:"text",description:"Success message displayed when validationState is 'success'"},errorText:{control:"text",description:"Error message displayed when validationState is 'error'"},validationState:{control:"select",options:["default","error","success"],description:"The validation state of the radio button"},required:{control:"boolean",description:"Whether the radio button is required"},disabled:{control:"boolean",description:"Whether the radio button is disabled"},groupLabel:{control:"text",description:"Label of the group this radio button belongs to (hides individual required indicator)"}}},e={args:{label:"Option 1",name:"radio-group"}},r={args:{label:"Option 1",name:"radio-group",checked:!0}},o={args:{label:"Option 1",name:"radio-group",required:!0}},t={args:{label:"Option 1",name:"radio-group",validationState:"error",errorText:"This option cannot be selected"}},a={args:{label:"Option 1",name:"radio-group",checked:!0,validationState:"success",successText:"Great choice!"}},s={args:{label:"Option 1",name:"radio-group",disabled:!0}},n={args:{label:"Option 1",name:"radio-group",disabled:!0,checked:!0}},i={args:{label:"I agree to the terms and conditions",name:"agreement",required:!0},parameters:{docs:{description:{story:"Radio button without a group label shows '(required)' indicator when required."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Option 1",
    name: "radio-group"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Option 1",
    name: "radio-group",
    checked: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Option 1",
    name: "radio-group",
    required: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Option 1",
    name: "radio-group",
    validationState: "error",
    errorText: "This option cannot be selected"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Option 1",
    name: "radio-group",
    checked: true,
    validationState: "success",
    successText: "Great choice!"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Option 1",
    name: "radio-group",
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Option 1",
    name: "radio-group",
    disabled: true,
    checked: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I agree to the terms and conditions",
    name: "agreement",
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button without a group label shows '(required)' indicator when required."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const b=["Unselected","Selected","Required","WithError","WithSuccess","Disabled","DisabledSelected","WithoutGroupLabel"];export{s as Disabled,n as DisabledSelected,o as Required,r as Selected,e as Unselected,t as WithError,a as WithSuccess,i as WithoutGroupLabel,b as __namedExportsOrder,g as default};
