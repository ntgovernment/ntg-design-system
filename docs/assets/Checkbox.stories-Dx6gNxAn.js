import{C as i}from"./Checkbox-BzcvFdcL.js";import"./jsx-runtime-u17CrQMm.js";import"./Icon-D9ZymXa3.js";import"./iframe-orbKJz4h.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Components/Checkbox",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{id:{control:"text",description:"Checkbox input id"},name:{control:"text",description:"Form field name"},label:{control:"text",description:"Checkbox label text"},groupLabel:{control:"text",description:"Optional group label above checkbox"},helperText:{control:"text",description:"Optional helper message"},status:{control:{type:"inline-radio"},options:["default","error","success"],description:"Validation state styling"},errorText:{control:"text",description:"Error message (sets aria-invalid)"},successText:{control:"text",description:"Success message"},checked:{control:"boolean",description:"Controlled checked state"},defaultChecked:{control:"boolean",description:"Uncontrolled initial checked state"},disabled:{control:"boolean",description:"Disabled checkbox"},className:{control:"text",description:"Additional CSS classes"}}},e={args:{id:"checkbox-default",name:"default",label:"Checkbox label",groupLabel:"Label",helperText:"Optional helper text"},parameters:{docs:{description:{story:"Default unchecked state with group label, helper text, and checkbox label. 32x32px checkbox box with border."}}}},r={args:{id:"checkbox-checked",name:"checked",label:"Checkbox label",groupLabel:"Label",helperText:"Optional helper text",defaultChecked:!0},parameters:{docs:{description:{story:"Default checked state showing white check icon on dark background. Background changes to primary color when checked."}}}},o={args:{id:"checkbox-required",name:"terms",label:"I agree to the terms and conditions",groupLabel:"Label",helperText:"You must agree to continue",required:!0},parameters:{docs:{description:{story:"Required checkbox. Note: HTML5 required attribute is applied but visual '(Required)' indicator is typically shown on group label in CheckboxGroup."}}}},t={args:{id:"checkbox-error",name:"consent",label:"I consent to data processing",groupLabel:"Label",status:"error",errorText:"You must consent to continue."},parameters:{docs:{description:{story:"Error state with red border on checkbox box and error message below. Red circle-exclamation icon (vertically centered) appears 8px to the left of the error text."}}}},a={args:{id:"checkbox-success",name:"verified",label:"Email verified",groupLabel:"Label",status:"success",successText:"Verification complete!",defaultChecked:!0},parameters:{docs:{description:{story:"Success state with green border on checkbox box and success message below. Green circle-check icon (vertically centered) appears 8px to the left of the success text."}}}},c={args:{id:"checkbox-disabled",name:"disabled",label:"Disabled option",groupLabel:"Label",disabled:!0},parameters:{docs:{description:{story:"Disabled state with reduced opacity and not-allowed cursor."}}}},s={args:{id:"checkbox-disabled-checked",name:"disabled-checked",label:"Disabled checked option",groupLabel:"Label",disabled:!0,defaultChecked:!0},parameters:{docs:{description:{story:"Disabled state while checked, showing check icon with reduced opacity."}}}},n={args:{id:"checkbox-simple",name:"simple",label:"Subscribe to newsletter"},parameters:{docs:{description:{story:"Simple checkbox without group label or helper text. Suitable for single checkboxes or when used in a CheckboxGroup."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-default",
    name: "default",
    label: "Checkbox label",
    groupLabel: "Label",
    helperText: "Optional helper text"
  },
  parameters: {
    docs: {
      description: {
        story: "Default unchecked state with group label, helper text, and checkbox label. 32x32px checkbox box with border."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-checked",
    name: "checked",
    label: "Checkbox label",
    groupLabel: "Label",
    helperText: "Optional helper text",
    defaultChecked: true
  },
  parameters: {
    docs: {
      description: {
        story: "Default checked state showing white check icon on dark background. Background changes to primary color when checked."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-required",
    name: "terms",
    label: "I agree to the terms and conditions",
    groupLabel: "Label",
    helperText: "You must agree to continue",
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: "Required checkbox. Note: HTML5 required attribute is applied but visual '(Required)' indicator is typically shown on group label in CheckboxGroup."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-error",
    name: "consent",
    label: "I consent to data processing",
    groupLabel: "Label",
    status: "error",
    errorText: "You must consent to continue."
  },
  parameters: {
    docs: {
      description: {
        story: "Error state with red border on checkbox box and error message below. Red circle-exclamation icon (vertically centered) appears 8px to the left of the error text."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-success",
    name: "verified",
    label: "Email verified",
    groupLabel: "Label",
    status: "success",
    successText: "Verification complete!",
    defaultChecked: true
  },
  parameters: {
    docs: {
      description: {
        story: "Success state with green border on checkbox box and success message below. Green circle-check icon (vertically centered) appears 8px to the left of the success text."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-disabled",
    name: "disabled",
    label: "Disabled option",
    groupLabel: "Label",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state with reduced opacity and not-allowed cursor."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-disabled-checked",
    name: "disabled-checked",
    label: "Disabled checked option",
    groupLabel: "Label",
    disabled: true,
    defaultChecked: true
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state while checked, showing check icon with reduced opacity."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: "checkbox-simple",
    name: "simple",
    label: "Subscribe to newsletter"
  },
  parameters: {
    docs: {
      description: {
        story: "Simple checkbox without group label or helper text. Suitable for single checkboxes or when used in a CheckboxGroup."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const m=["DefaultUnchecked","DefaultChecked","Required","ErrorState","SuccessState","Disabled","DisabledChecked","WithoutGroupLabel"];export{r as DefaultChecked,e as DefaultUnchecked,c as Disabled,s as DisabledChecked,t as ErrorState,o as Required,a as SuccessState,n as WithoutGroupLabel,m as __namedExportsOrder,h as default};
