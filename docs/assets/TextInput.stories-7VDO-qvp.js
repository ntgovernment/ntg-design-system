import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as _}from"./Icon-D9ZymXa3.js";import"./iframe-D0A1nOia.js";import"./preload-helper-PPVm8Dsz.js";const b=({id:t,name:r,type:q="text",label:g,placeholder:T,value:P,defaultValue:S,onChange:N,helperText:u,status:m="default",errorText:a,successText:h,required:x,disabled:f,maxWidth:E=480,className:V="",inputProps:j,...R})=>{const L=["ntgds-text-input",m==="error"&&"ntgds-text-input--error",m==="success"&&"ntgds-text-input--success",f&&"ntgds-text-input--disabled",x&&"ntgds-text-input--required",V].filter(Boolean).join(" "),y=u?`${t||r}-helper`:void 0,v=a?`${t||r}-error`:void 0,w=h?`${t||r}-success`:void 0,I=[y,v,w].filter(Boolean).join(" ")||void 0;return e.jsxs("div",{className:L,style:{maxWidth:E},children:[g&&e.jsxs("label",{htmlFor:t,className:"ntgds-text-input__label",children:[g,x&&e.jsx("span",{className:"ntgds-text-input__required",children:" (Required)"})]}),u&&e.jsx("div",{id:y,className:"ntgds-text-input__helper",children:u}),e.jsx("input",{id:t,name:r,type:q,className:"ntgds-text-input__control",placeholder:T,value:P,defaultValue:S,onChange:N,"aria-describedby":I,"aria-invalid":m==="error"||a?!0:void 0,required:x,disabled:f,...j,...R}),a&&e.jsxs("div",{id:v,className:"ntgds-text-input__message ntgds-text-input__message--error",children:[e.jsx("span",{className:"ntgds-text-input__message-icon",children:e.jsx(_,{name:"circle-exclamation",size:"sm",color:"primary"})}),e.jsx("span",{children:a})]}),h&&e.jsxs("div",{id:w,className:"ntgds-text-input__message ntgds-text-input__message--success",children:[e.jsx("span",{className:"ntgds-text-input__message-icon",children:e.jsx(_,{name:"circle-check",size:"sm",color:"primary"})}),e.jsx("span",{children:h})]})]})};try{b.displayName="TextInput",b.__docgenInfo={description:"",displayName:"TextInput",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"password"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"error"'}]}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},successText:{defaultValue:null,description:"",name:"successText",required:!1,type:{name:"ReactNode"}},maxWidth:{defaultValue:{value:"480"},description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}}}}}catch{}const O={title:"Components/TextInput",component:b,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{id:{control:"text",description:"Input id associated with label"},name:{control:"text",description:"Form field name"},type:{control:{type:"select"},options:["text","email","password","search","tel","url"],description:"Input type"},label:{control:"text",description:"Visible label text"},placeholder:{control:"text",description:"Placeholder hint text"},value:{control:"text",description:"Controlled value"},defaultValue:{control:"text",description:"Uncontrolled initial value"},helperText:{control:"text",description:"Optional helper message"},status:{control:{type:"inline-radio"},options:["default","error","success"],description:"Validation state styling"},errorText:{control:"text",description:"Error message (sets aria-invalid)"},successText:{control:"text",description:"Success message"},required:{control:"boolean",description:"Required field"},disabled:{control:"boolean",description:"Disabled field"},maxWidth:{control:"text",description:"Max width (default 480)"},className:{control:"text",description:"Additional CSS classes"}}},s={args:{id:"ti-default",label:"Label",helperText:"Optional helper text",placeholder:"Placeholder text",maxWidth:480},parameters:{docs:{description:{story:"Default state with label, helper text (positioned between label and input), and placeholder. Hover to see border strengthen from subtle to strong stroke token."}}}},l={name:"Hovered Empty",args:{id:"ti-hover",label:"Label",helperText:"Optional helper text",placeholder:"Placeholder text",maxWidth:480},parameters:{docs:{description:{story:"Hover the input to see the border color strengthen to the strong stroke token, matching RN hover state."}}}},o={args:{id:"ti-required",label:"Label",required:!0,placeholder:"Placeholder text",helperText:"This field is required."},parameters:{docs:{description:{story:"Required field showing '(Required)' indicator beside the label in normal weight. Helper text appears between label and input."}}}},n={args:{id:"ti-error",label:"Label",status:"error",errorText:"Please enter a valid value.",placeholder:"Placeholder text"},parameters:{docs:{description:{story:"Error state with red border and error message below the input. Red circle-exclamation icon appears 8px to the left of the error text. Sets aria-invalid='true'."}}}},i={args:{id:"ti-success",label:"Label",status:"success",successText:"Looks good!",placeholder:"Placeholder text"},parameters:{docs:{description:{story:"Success state with green border and success message below the input. Green circle-check icon appears 8px to the left of the success text."}}}},d={args:{id:"ti-disabled",label:"Label",disabled:!0,placeholder:"Placeholder text"}},c={args:{id:"ti-value",label:"Email Address",type:"email",defaultValue:"user@example.com",helperText:"We'll never share your email."}},p={args:{id:"ti-password",label:"Password",type:"password",placeholder:"Enter your password",required:!0,helperText:"Must be at least 8 characters."}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ti-default",
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "Placeholder text",
    maxWidth: 480
  },
  parameters: {
    docs: {
      description: {
        story: "Default state with label, helper text (positioned between label and input), and placeholder. Hover to see border strengthen from subtle to strong stroke token."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Hovered Empty",
  args: {
    id: "ti-hover",
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "Placeholder text",
    maxWidth: 480
  },
  parameters: {
    docs: {
      description: {
        story: "Hover the input to see the border color strengthen to the strong stroke token, matching RN hover state."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ti-required",
    label: "Label",
    required: true,
    placeholder: "Placeholder text",
    helperText: "This field is required."
  },
  parameters: {
    docs: {
      description: {
        story: "Required field showing '(Required)' indicator beside the label in normal weight. Helper text appears between label and input."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ti-error",
    label: "Label",
    status: "error",
    errorText: "Please enter a valid value.",
    placeholder: "Placeholder text"
  },
  parameters: {
    docs: {
      description: {
        story: "Error state with red border and error message below the input. Red circle-exclamation icon appears 8px to the left of the error text. Sets aria-invalid='true'."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ti-success",
    label: "Label",
    status: "success",
    successText: "Looks good!",
    placeholder: "Placeholder text"
  },
  parameters: {
    docs: {
      description: {
        story: "Success state with green border and success message below the input. Green circle-check icon appears 8px to the left of the success text."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ti-disabled",
    label: "Label",
    disabled: true,
    placeholder: "Placeholder text"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ti-value",
    label: "Email Address",
    type: "email",
    defaultValue: "user@example.com",
    helperText: "We'll never share your email."
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ti-password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    helperText: "Must be at least 8 characters."
  }
}`,...p.parameters?.docs?.source}}};const M=["DefaultEmpty","HoveredEmpty","Required","ErrorState","SuccessState","Disabled","WithValue","Password"];export{s as DefaultEmpty,d as Disabled,n as ErrorState,l as HoveredEmpty,p as Password,o as Required,i as SuccessState,c as WithValue,M as __namedExportsOrder,O as default};
