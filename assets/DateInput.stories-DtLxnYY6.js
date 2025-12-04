import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-5hMHJX0T.js";import{I as R}from"./Icon-D9ZymXa3.js";import"./preload-helper-PPVm8Dsz.js";const j=({id:r,name:a,label:M,helperText:V,status:i="default",errorText:s,successText:q,required:p,disabled:m,maxWidth:C,className:$="",dayValue:h,monthValue:g,yearValue:y,onDayChange:S,onMonthChange:I,onYearChange:Y,onChange:n,dayProps:L,monthProps:P,yearProps:W})=>{const[k,A]=l.useState(""),[F,H]=l.useState(""),[B,O]=l.useState(""),d=h!==void 0?h:k,o=g!==void 0?g:F,c=y!==void 0?y:B,z=l.useCallback(u=>{const t=u.target.value.replace(/\D/g,"").slice(0,2);h===void 0&&A(t),S?.(t),n?.(t,o,c)},[h,S,n,o,c]),G=l.useCallback(u=>{const t=u.target.value.replace(/\D/g,"").slice(0,2);g===void 0&&H(t),I?.(t),n?.(d,t,c)},[g,I,n,d,c]),J=l.useCallback(u=>{const t=u.target.value.replace(/\D/g,"").slice(0,4);y===void 0&&O(t),Y?.(t),n?.(d,o,t)},[y,Y,n,d,o]),K=["ntgds-date-input",i==="error"&&"ntgds-date-input--error",i==="success"&&"ntgds-date-input--success",m&&"ntgds-date-input--disabled",$].filter(Boolean).join(" "),w=V?`${r||a}-helper`:void 0,T=s?`${r||a}-error`:void 0,E=q?`${r||a}-success`:void 0,N=[w,T,E].filter(Boolean).join(" ")||void 0;return e.jsxs("div",{className:K,style:{maxWidth:C},children:[M&&e.jsxs("div",{className:"ntgds-date-input__label-container",children:[e.jsxs("label",{className:"ntgds-date-input__label",children:[M,p&&e.jsx("span",{className:"ntgds-date-input__required",children:" (Required)"})]}),V&&e.jsx("div",{id:w,className:"ntgds-date-input__helper",children:V})]}),e.jsxs("div",{className:"ntgds-date-input__fields",children:[e.jsxs("div",{className:"ntgds-date-input__field ntgds-date-input__field--day",children:[e.jsx("label",{htmlFor:`${r||a}-day`,className:"ntgds-date-input__field-label",children:"Day"}),e.jsx("input",{id:`${r||a}-day`,name:`${a}-day`,type:"text",inputMode:"numeric",className:"ntgds-date-input__control",placeholder:"DD",value:d,onChange:z,"aria-describedby":N,"aria-invalid":i==="error"||s?!0:void 0,required:p,disabled:m,maxLength:2,...L})]}),e.jsxs("div",{className:"ntgds-date-input__field ntgds-date-input__field--month",children:[e.jsx("label",{htmlFor:`${r||a}-month`,className:"ntgds-date-input__field-label",children:"Month"}),e.jsx("input",{id:`${r||a}-month`,name:`${a}-month`,type:"text",inputMode:"numeric",className:"ntgds-date-input__control",placeholder:"MM",value:o,onChange:G,"aria-describedby":N,"aria-invalid":i==="error"||s?!0:void 0,required:p,disabled:m,maxLength:2,...P})]}),e.jsxs("div",{className:"ntgds-date-input__field ntgds-date-input__field--year",children:[e.jsx("label",{htmlFor:`${r||a}-year`,className:"ntgds-date-input__field-label",children:"Year"}),e.jsx("input",{id:`${r||a}-year`,name:`${a}-year`,type:"text",inputMode:"numeric",className:"ntgds-date-input__control",placeholder:"YYYY",value:c,onChange:J,"aria-describedby":N,"aria-invalid":i==="error"||s?!0:void 0,required:p,disabled:m,maxLength:4,...W})]})]}),s&&e.jsxs("div",{id:T,className:"ntgds-date-input__message ntgds-date-input__message--error",children:[e.jsx("span",{className:"ntgds-date-input__message-icon",children:e.jsx(R,{name:"circle-exclamation",size:"sm",color:"primary"})}),e.jsx("span",{children:s})]}),q&&e.jsxs("div",{id:E,className:"ntgds-date-input__message ntgds-date-input__message--success",children:[e.jsx("span",{className:"ntgds-date-input__message-icon",children:e.jsx(R,{name:"circle-check",size:"sm",color:"primary"})}),e.jsx("span",{children:q})]})]})};try{j.displayName="DateInput",j.__docgenInfo={description:"",displayName:"DateInput",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"error"'}]}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"ReactNode"}},successText:{defaultValue:null,description:"",name:"successText",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},dayValue:{defaultValue:null,description:"",name:"dayValue",required:!1,type:{name:"string"}},monthValue:{defaultValue:null,description:"",name:"monthValue",required:!1,type:{name:"string"}},yearValue:{defaultValue:null,description:"",name:"yearValue",required:!1,type:{name:"string"}},onDayChange:{defaultValue:null,description:"",name:"onDayChange",required:!1,type:{name:"((value: string) => void)"}},onMonthChange:{defaultValue:null,description:"",name:"onMonthChange",required:!1,type:{name:"((value: string) => void)"}},onYearChange:{defaultValue:null,description:"",name:"onYearChange",required:!1,type:{name:"((value: string) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((day: string, month: string, year: string) => void)"}},dayProps:{defaultValue:null,description:"",name:"dayProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},monthProps:{defaultValue:null,description:"",name:"monthProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},yearProps:{defaultValue:null,description:"",name:"yearProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}}}}}catch{}const ee={title:"Components/DateInput",component:j,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{id:{control:"text",description:"DateInput id base for field ids"},name:{control:"text",description:"Form field name base"},label:{control:"text",description:"Visible label text"},helperText:{control:"text",description:"Optional helper message"},status:{control:{type:"inline-radio"},options:["default","error","success"],description:"Validation state styling"},errorText:{control:"text",description:"Error message (sets aria-invalid)"},successText:{control:"text",description:"Success message"},required:{control:"boolean",description:"Required field"},disabled:{control:"boolean",description:"Disabled field"},maxWidth:{control:"text",description:"Max width constraint"},className:{control:"text",description:"Additional CSS classes"}}},f={args:{id:"date-default",name:"date",label:"Label",helperText:"Optional helper text"},parameters:{docs:{description:{story:"Default state with label and helper text. Three separate inputs: Day (63px), Month (63px), Year (78px). Placeholders: DD, MM, YYYY."}}}},x={args:{id:"date-required",name:"birthdate",label:"Date of Birth",required:!0,helperText:"Enter your date of birth"},parameters:{docs:{description:{story:"Required field showing '(Required)' indicator beside the label in normal weight."}}}},b={args:{id:"date-error",name:"date",label:"Start Date",status:"error",errorText:"Please enter a valid date."},parameters:{docs:{description:{story:"Error state with red borders on all three inputs and error message below. Red circle-exclamation icon (vertically centered) appears 8px to the left of the error text."}}}},v={args:{id:"date-success",name:"date",label:"Appointment Date",status:"success",successText:"Date confirmed!",dayValue:"15",monthValue:"06",yearValue:"2025"},parameters:{docs:{description:{story:"Success state with green borders on all three inputs and success message below. Green circle-check icon (vertically centered) appears 8px to the left of the success text."}}}},_={args:{id:"date-disabled",name:"date",label:"Event Date",disabled:!0,dayValue:"25",monthValue:"12",yearValue:"2024"},parameters:{docs:{description:{story:"Disabled state with reduced opacity. Fields are read-only."}}}},D={args:{id:"date-value",name:"date",label:"Registration Date",helperText:"When did you register?",dayValue:"03",monthValue:"12",yearValue:"2025"},parameters:{docs:{description:{story:"Date input with pre-filled values in controlled mode."}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "date-default",
    name: "date",
    label: "Label",
    helperText: "Optional helper text"
  },
  parameters: {
    docs: {
      description: {
        story: "Default state with label and helper text. Three separate inputs: Day (63px), Month (63px), Year (78px). Placeholders: DD, MM, YYYY."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: "date-required",
    name: "birthdate",
    label: "Date of Birth",
    required: true,
    helperText: "Enter your date of birth"
  },
  parameters: {
    docs: {
      description: {
        story: "Required field showing '(Required)' indicator beside the label in normal weight."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: "date-error",
    name: "date",
    label: "Start Date",
    status: "error",
    errorText: "Please enter a valid date."
  },
  parameters: {
    docs: {
      description: {
        story: "Error state with red borders on all three inputs and error message below. Red circle-exclamation icon (vertically centered) appears 8px to the left of the error text."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: "date-success",
    name: "date",
    label: "Appointment Date",
    status: "success",
    successText: "Date confirmed!",
    dayValue: "15",
    monthValue: "06",
    yearValue: "2025"
  },
  parameters: {
    docs: {
      description: {
        story: "Success state with green borders on all three inputs and success message below. Green circle-check icon (vertically centered) appears 8px to the left of the success text."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: "date-disabled",
    name: "date",
    label: "Event Date",
    disabled: true,
    dayValue: "25",
    monthValue: "12",
    yearValue: "2024"
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state with reduced opacity. Fields are read-only."
      }
    }
  }
}`,..._.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: "date-value",
    name: "date",
    label: "Registration Date",
    helperText: "When did you register?",
    dayValue: "03",
    monthValue: "12",
    yearValue: "2025"
  },
  parameters: {
    docs: {
      description: {
        story: "Date input with pre-filled values in controlled mode."
      }
    }
  }
}`,...D.parameters?.docs?.source}}};const ae=["DefaultEmpty","Required","ErrorState","SuccessState","Disabled","WithValue"];export{f as DefaultEmpty,_ as Disabled,b as ErrorState,x as Required,v as SuccessState,D as WithValue,ae as __namedExportsOrder,ee as default};
