import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as S}from"./iframe-BUz-dUh1.js";import{I as V}from"./Icon-D9ZymXa3.js";import"./preload-helper-PPVm8Dsz.js";const f=({id:t,name:r,label:b,placeholder:N,value:y,defaultValue:v,onChange:p,helperText:m,status:h="default",errorText:a,successText:x,required:g,disabled:w,maxWidth:E=480,maxLength:s,showCharCount:j=!1,className:R="",textareaProps:L,...W})=>{const[k,D]=S.useState((y?.toString()||v?.toString()||"").length),A=S.useCallback(_=>{D(_.target.value.length),p&&p(_)},[p]),z=["ntgds-textarea",h==="error"&&"ntgds-textarea--error",h==="success"&&"ntgds-textarea--success",w&&"ntgds-textarea--disabled",g&&"ntgds-textarea--required",R].filter(Boolean).join(" "),C=m?`${t||r}-helper`:void 0,q=a?`${t||r}-error`:void 0,T=x?`${t||r}-success`:void 0,F=[C,q,T].filter(Boolean).join(" ")||void 0;return e.jsxs("div",{className:z,style:{maxWidth:E},children:[b&&e.jsxs("label",{htmlFor:t,className:"ntgds-textarea__label",children:[b,g&&e.jsx("span",{className:"ntgds-textarea__required",children:" (Required)"})]}),m&&e.jsx("div",{id:C,className:"ntgds-textarea__helper",children:m}),e.jsx("textarea",{id:t,name:r,className:"ntgds-textarea__control",placeholder:N,value:y,defaultValue:v,onChange:A,"aria-describedby":F,"aria-invalid":h==="error"||a?!0:void 0,required:g,disabled:w,maxLength:s,...L,...W}),(j||s)&&e.jsxs("div",{className:"ntgds-textarea__char-count",children:[k,s&&`/${s}`]}),a&&e.jsxs("div",{id:q,className:"ntgds-textarea__message ntgds-textarea__message--error",children:[e.jsx("span",{className:"ntgds-textarea__message-icon",children:e.jsx(V,{name:"circle-exclamation",size:"sm",color:"primary"})}),e.jsx("span",{children:a})]}),x&&e.jsxs("div",{id:T,className:"ntgds-textarea__message ntgds-textarea__message--success",children:[e.jsx("span",{className:"ntgds-textarea__message-icon",children:e.jsx(V,{name:"circle-check",size:"sm",color:"primary"})}),e.jsx("span",{children:x})]})]})};try{f.displayName="TextArea",f.__docgenInfo={description:"",displayName:"TextArea",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'}]}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},successText:{defaultValue:null,description:"",name:"successText",required:!1,type:{name:"ReactNode"}},maxWidth:{defaultValue:{value:"480"},description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},showCharCount:{defaultValue:{value:"false"},description:"",name:"showCharCount",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},textareaProps:{defaultValue:null,description:"",name:"textareaProps",required:!1,type:{name:"TextareaHTMLAttributes<HTMLTextAreaElement>"}}}}}catch{}const U={title:"Components/TextArea",component:f,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{id:{control:"text",description:"TextArea id associated with label"},name:{control:"text",description:"Form field name"},label:{control:"text",description:"Visible label text"},placeholder:{control:"text",description:"Placeholder hint text"},value:{control:"text",description:"Controlled value"},defaultValue:{control:"text",description:"Uncontrolled initial value"},helperText:{control:"text",description:"Optional helper message"},status:{control:{type:"inline-radio"},options:["default","error","success"],description:"Validation state styling"},errorText:{control:"text",description:"Error message (sets aria-invalid)"},successText:{control:"text",description:"Success message"},required:{control:"boolean",description:"Required field"},disabled:{control:"boolean",description:"Disabled field"},maxWidth:{control:"text",description:"Max width (default 480)"},maxLength:{control:"number",description:"Maximum character length"},showCharCount:{control:"boolean",description:"Show character counter"},className:{control:"text",description:"Additional CSS classes"}}},o={args:{id:"ta-default",label:"Label",helperText:"Optional helper text",placeholder:"Placeholder text",maxWidth:480},parameters:{docs:{description:{story:"Default state with label, helper text (positioned between label and textarea), and placeholder. Min-height 120px with vertical resize."}}}},n={args:{id:"ta-charcount",label:"Description",placeholder:"Enter your description",maxLength:100,showCharCount:!0,helperText:"Keep it concise."},parameters:{docs:{description:{story:"Character counter (left-aligned) shows current length and max length (0/100 format). Updates dynamically as user types."}}}},l={args:{id:"ta-required",label:"Comments",required:!0,placeholder:"Enter your comments",helperText:"This field is required.",maxLength:500,showCharCount:!0},parameters:{docs:{description:{story:"Required field showing '(Required)' indicator beside the label in normal weight."}}}},i={args:{id:"ta-error",label:"Feedback",status:"error",errorText:"Feedback must be at least 10 characters.",placeholder:"Enter your feedback",defaultValue:"Too short"},parameters:{docs:{description:{story:"Error state with red border and error message below the textarea. Red circle-exclamation icon (vertically centered) appears 8px to the left of the error text."}}}},c={args:{id:"ta-success",label:"Review",status:"success",successText:"Thank you for your review!",placeholder:"Write your review",defaultValue:"This product is amazing! Highly recommend.",maxLength:500,showCharCount:!0},parameters:{docs:{description:{story:"Success state with green border and success message below the textarea. Green circle-check icon (vertically centered) appears 8px to the left of the success text."}}}},d={args:{id:"ta-disabled",label:"Notes",disabled:!0,placeholder:"Enter notes",defaultValue:"These notes are read-only"}},u={args:{id:"ta-long",label:"Article Body",placeholder:"Write your article...",defaultValue:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,helperText:"Write a compelling article.",maxLength:5e3,showCharCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ta-default",
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "Placeholder text",
    maxWidth: 480
  },
  parameters: {
    docs: {
      description: {
        story: "Default state with label, helper text (positioned between label and textarea), and placeholder. Min-height 120px with vertical resize."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ta-charcount",
    label: "Description",
    placeholder: "Enter your description",
    maxLength: 100,
    showCharCount: true,
    helperText: "Keep it concise."
  },
  parameters: {
    docs: {
      description: {
        story: "Character counter (left-aligned) shows current length and max length (0/100 format). Updates dynamically as user types."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ta-required",
    label: "Comments",
    required: true,
    placeholder: "Enter your comments",
    helperText: "This field is required.",
    maxLength: 500,
    showCharCount: true
  },
  parameters: {
    docs: {
      description: {
        story: "Required field showing '(Required)' indicator beside the label in normal weight."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ta-error",
    label: "Feedback",
    status: "error",
    errorText: "Feedback must be at least 10 characters.",
    placeholder: "Enter your feedback",
    defaultValue: "Too short"
  },
  parameters: {
    docs: {
      description: {
        story: "Error state with red border and error message below the textarea. Red circle-exclamation icon (vertically centered) appears 8px to the left of the error text."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ta-success",
    label: "Review",
    status: "success",
    successText: "Thank you for your review!",
    placeholder: "Write your review",
    defaultValue: "This product is amazing! Highly recommend.",
    maxLength: 500,
    showCharCount: true
  },
  parameters: {
    docs: {
      description: {
        story: "Success state with green border and success message below the textarea. Green circle-check icon (vertically centered) appears 8px to the left of the success text."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ta-disabled",
    label: "Notes",
    disabled: true,
    placeholder: "Enter notes",
    defaultValue: "These notes are read-only"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "ta-long",
    label: "Article Body",
    placeholder: "Write your article...",
    defaultValue: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\`,
    helperText: "Write a compelling article.",
    maxLength: 5000,
    showCharCount: true
  }
}`,...u.parameters?.docs?.source}}};const H=["DefaultEmpty","WithCharCount","Required","ErrorState","SuccessState","Disabled","LongContent"];export{o as DefaultEmpty,d as Disabled,i as ErrorState,u as LongContent,l as Required,c as SuccessState,n as WithCharCount,H as __namedExportsOrder,U as default};
