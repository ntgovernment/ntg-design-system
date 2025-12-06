import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as M}from"./iframe-CqofpB-E.js";import{I as C}from"./Icon-D9ZymXa3.js";import{C as W}from"./Checkbox-BfoLUugg.js";import"./preload-helper-PPVm8Dsz.js";const w=({id:r,name:a,label:_,helperText:b,options:G,orientation:N="vertical",status:g="default",errorText:x,successText:f,required:j,disabled:q,className:z="",value:v,defaultValue:R,onChange:O})=>{const[L,D]=M.useState(R||[]),y=v!==void 0?v:L,E=(s,n)=>{const t=n?[...y,s]:y.filter(k=>k!==s);v===void 0&&D(t),O?.(t)},I=["ntgds-checkbox-group",`ntgds-checkbox-group--${N}`,g==="error"&&"ntgds-checkbox-group--error",g==="success"&&"ntgds-checkbox-group--success",q&&"ntgds-checkbox-group--disabled",z].filter(Boolean).join(" "),V=b?`${r||a}-helper`:void 0,S=x?`${r||a}-error`:void 0,T=f?`${r||a}-success`:void 0,P=[V,S,T].filter(Boolean).join(" ")||void 0;return e.jsxs("div",{className:I,children:[_&&e.jsxs("div",{className:"ntgds-checkbox-group__label-container",children:[e.jsxs("div",{className:"ntgds-checkbox-group__label",children:[_,j&&e.jsx("span",{className:"ntgds-checkbox-group__required",children:" (Required)"})]}),b&&e.jsx("div",{id:V,className:"ntgds-checkbox-group__helper",children:b})]}),e.jsx("div",{className:"ntgds-checkbox-group__options",role:"group","aria-describedby":P,children:G.map((s,n)=>{const{value:t,...k}=s,H=y.includes(t);return e.jsx(W,{...k,id:`${r||a}-${t||n}`,name:`${a}[]`,checked:H,onChange:$=>E(t,$.target.checked),disabled:q||s.disabled,status:g},t||n)})}),x&&e.jsxs("div",{id:S,className:"ntgds-checkbox-group__message ntgds-checkbox-group__message--error",children:[e.jsx("span",{className:"ntgds-checkbox-group__message-icon",children:e.jsx(C,{name:"circle-exclamation",size:"sm",color:"primary"})}),e.jsx("span",{children:x})]}),f&&e.jsxs("div",{id:T,className:"ntgds-checkbox-group__message ntgds-checkbox-group__message--success",children:[e.jsx("span",{className:"ntgds-checkbox-group__message-icon",children:e.jsx(C,{name:"circle-check",size:"sm",color:"primary"})}),e.jsx("span",{children:f})]})]})};try{w.displayName="CheckboxGroup",w.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"CheckboxGroupOption[]"}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'}]}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},successText:{defaultValue:null,description:"",name:"successText",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((selectedValues: string[]) => void)"}}}}}catch{}const K={title:"Components/CheckboxGroup",component:w,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{id:{control:"text",description:"CheckboxGroup id base"},name:{control:"text",description:"Form field name base"},label:{control:"text",description:"Group label text"},helperText:{control:"text",description:"Optional helper message"},orientation:{control:{type:"inline-radio"},options:["vertical","horizontal"],description:"Layout orientation"},status:{control:{type:"inline-radio"},options:["default","error","success"],description:"Validation state styling"},errorText:{control:"text",description:"Error message (sets aria-invalid)"},successText:{control:"text",description:"Success message"},required:{control:"boolean",description:"Required field group"},disabled:{control:"boolean",description:"Disabled all checkboxes"},className:{control:"text",description:"Additional CSS classes"}}},o=[{value:"option1",label:"Checkbox label"},{value:"option2",label:"Checkbox label"},{value:"option3",label:"Checkbox label"}],l={args:{id:"checkbox-group-vertical",name:"preferences",label:"Group Label",helperText:"Optional helper text",options:o,orientation:"vertical"},parameters:{docs:{description:{story:"Default vertical layout with group label, helper text, and multiple checkboxes stacked vertically with 8px gap."}}}},i={args:{id:"checkbox-group-horizontal",name:"preferences",label:"Group Label",helperText:"Optional helper text",options:o,orientation:"horizontal"},parameters:{docs:{description:{story:"Horizontal layout with checkboxes arranged side-by-side with 8px gap. Wraps to next line if needed."}}}},c={args:{id:"checkbox-group-required",name:"terms",label:"Group Label",helperText:"You must select at least one option",options:o,required:!0,orientation:"vertical"},parameters:{docs:{description:{story:"Required group showing '(Required)' indicator beside the group label in normal weight."}}}},p={args:{id:"checkbox-group-error",name:"consent",label:"Group Label",helperText:"Select your preferences",options:o,status:"error",errorText:"You must select at least one option.",orientation:"vertical"},parameters:{docs:{description:{story:"Error state with error message below the checkbox group. Red circle-exclamation icon (vertically centered) appears 8px to the left of the error text."}}}},u={args:{id:"checkbox-group-success",name:"preferences",label:"Group Label",options:o,status:"success",successText:"Preferences saved successfully!",defaultValue:["option1","option2"],orientation:"vertical"},parameters:{docs:{description:{story:"Success state with success message below. Green circle-check icon (vertically centered) appears 8px to the left of the success text."}}}},d={args:{id:"checkbox-group-disabled",name:"disabled",label:"Group Label",helperText:"These options are not available",options:o,disabled:!0,orientation:"vertical"},parameters:{docs:{description:{story:"Disabled state with reduced opacity. All checkboxes are disabled."}}}},m={args:{id:"checkbox-group-preselected",name:"notifications",label:"Notification Preferences",helperText:"Choose which notifications you want to receive",options:[{value:"email",label:"Email notifications"},{value:"sms",label:"SMS notifications"},{value:"push",label:"Push notifications"}],defaultValue:["email","push"],orientation:"vertical"},parameters:{docs:{description:{story:"Checkbox group with some options pre-selected using defaultValue."}}}},h={args:{id:"checkbox-group-many",name:"interests",label:"Select Your Interests",options:[{value:"tech",label:"Technology"},{value:"sports",label:"Sports"},{value:"music",label:"Music"},{value:"art",label:"Art"},{value:"travel",label:"Travel"},{value:"food",label:"Food"}],orientation:"horizontal"},parameters:{docs:{description:{story:"Horizontal layout with multiple options that wrap to multiple lines."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-group-vertical",
    name: "preferences",
    label: "Group Label",
    helperText: "Optional helper text",
    options: defaultOptions,
    orientation: "vertical"
  },
  parameters: {
    docs: {
      description: {
        story: "Default vertical layout with group label, helper text, and multiple checkboxes stacked vertically with 8px gap."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-group-horizontal",
    name: "preferences",
    label: "Group Label",
    helperText: "Optional helper text",
    options: defaultOptions,
    orientation: "horizontal"
  },
  parameters: {
    docs: {
      description: {
        story: "Horizontal layout with checkboxes arranged side-by-side with 8px gap. Wraps to next line if needed."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-group-required",
    name: "terms",
    label: "Group Label",
    helperText: "You must select at least one option",
    options: defaultOptions,
    required: true,
    orientation: "vertical"
  },
  parameters: {
    docs: {
      description: {
        story: "Required group showing '(Required)' indicator beside the group label in normal weight."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-group-error",
    name: "consent",
    label: "Group Label",
    helperText: "Select your preferences",
    options: defaultOptions,
    status: "error",
    errorText: "You must select at least one option.",
    orientation: "vertical"
  },
  parameters: {
    docs: {
      description: {
        story: "Error state with error message below the checkbox group. Red circle-exclamation icon (vertically centered) appears 8px to the left of the error text."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-group-success",
    name: "preferences",
    label: "Group Label",
    options: defaultOptions,
    status: "success",
    successText: "Preferences saved successfully!",
    defaultValue: ["option1", "option2"],
    orientation: "vertical"
  },
  parameters: {
    docs: {
      description: {
        story: "Success state with success message below. Green circle-check icon (vertically centered) appears 8px to the left of the success text."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-group-disabled",
    name: "disabled",
    label: "Group Label",
    helperText: "These options are not available",
    options: defaultOptions,
    disabled: true,
    orientation: "vertical"
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state with reduced opacity. All checkboxes are disabled."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-group-preselected",
    name: "notifications",
    label: "Notification Preferences",
    helperText: "Choose which notifications you want to receive",
    options: [{
      value: "email",
      label: "Email notifications"
    }, {
      value: "sms",
      label: "SMS notifications"
    }, {
      value: "push",
      label: "Push notifications"
    }],
    defaultValue: ["email", "push"],
    orientation: "vertical"
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox group with some options pre-selected using defaultValue."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-group-many",
    name: "interests",
    label: "Select Your Interests",
    options: [{
      value: "tech",
      label: "Technology"
    }, {
      value: "sports",
      label: "Sports"
    }, {
      value: "music",
      label: "Music"
    }, {
      value: "art",
      label: "Art"
    }, {
      value: "travel",
      label: "Travel"
    }, {
      value: "food",
      label: "Food"
    }],
    orientation: "horizontal"
  },
  parameters: {
    docs: {
      description: {
        story: "Horizontal layout with multiple options that wrap to multiple lines."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const Q=["VerticalDefault","HorizontalDefault","Required","ErrorState","SuccessState","Disabled","WithPreselected","HorizontalWithManyOptions"];export{d as Disabled,p as ErrorState,i as HorizontalDefault,h as HorizontalWithManyOptions,c as Required,u as SuccessState,l as VerticalDefault,m as WithPreselected,Q as __namedExportsOrder,K as default};
