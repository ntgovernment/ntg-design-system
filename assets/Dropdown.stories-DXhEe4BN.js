import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as _}from"./iframe-BMHqEkGZ.js";import{I as $}from"./Icon-BrQ12ZgB.js";import"./preload-helper-PPVm8Dsz.js";const p=({options:t,value:r,onChange:l,label:u,helperText:n,status:C="default",errorText:i,successText:d,required:c=!1,disabled:V=!1,name:b="dropdown",className:L=""})=>{const D=`${b}-select`,j=n?`${b}-helper`:"",T=i?`${b}-error`:"",N=d?`${b}-success`:"",I=[j,T,N].filter(Boolean).join(" "),a="ntgds-dropdown",R=[a,`${a}--${C}`,V?`${a}--disabled`:"",L].filter(Boolean).join(" ");return e.jsxs("div",{className:R,children:[u&&e.jsxs("label",{className:`${a}__label`,htmlFor:D,children:[u,c&&e.jsx("span",{className:`${a}__required`,children:" (Required)"})]}),n&&e.jsx("div",{className:`${a}__helper`,id:j,children:n}),e.jsxs("select",{id:D,className:`${a}__select`,value:r||"",onChange:o=>l?.(o.target.value),disabled:V,required:c,"aria-describedby":I||void 0,children:[e.jsx("option",{value:"",children:"Select..."}),t.map(o=>e.jsx("option",{value:o.value,disabled:o.disabled,children:o.label},o.value))]}),i&&e.jsxs("div",{className:`${a}__message ${a}__message--error`,id:T,children:[e.jsx("span",{className:`${a}__message-icon`,children:e.jsx($,{name:"circle-exclamation",size:"sm",color:"primary"})}),e.jsx("span",{children:i})]}),d&&e.jsxs("div",{className:`${a}__message ${a}__message--success`,id:N,children:[e.jsx("span",{className:`${a}__message-icon`,children:e.jsx($,{name:"circle-check",size:"sm",color:"primary"})}),e.jsx("span",{children:d})]})]})};try{p.displayName="Dropdown",p.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"Array of options to display",name:"options",required:!0,type:{name:"DropdownOption[]"}},value:{defaultValue:null,description:"Currently selected value",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback when selection changes",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},label:{defaultValue:null,description:"Label for the dropdown",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text below the label",name:"helperText",required:!1,type:{name:"string"}},status:{defaultValue:{value:"default"},description:"Validation status: 'default' | 'error' | 'success'",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'}]}},errorText:{defaultValue:null,description:"Error message to display",name:"errorText",required:!1,type:{name:"string"}},successText:{defaultValue:null,description:"Success message to display",name:"successText",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"Whether the field is required",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether the dropdown is disabled",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"dropdown"},description:"Field name for ID generation",name:"name",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const B={title:"Components/Dropdown",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["default","error","success"],description:"Validation status"},disabled:{control:"boolean",description:"Whether the dropdown is disabled"},required:{control:"boolean",description:"Whether the field is required"}}},s=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}],A=[{value:"opt1",label:"First Option"},{value:"opt2",label:"Second Option"},{value:"opt3",label:"Third Option"},{value:"opt4",label:"Fourth Option"},{value:"opt5",label:"Fifth Option"},{value:"opt6",label:"Sixth Option"},{value:"opt7",label:"Seventh Option"},{value:"opt8",label:"Eighth Option"},{value:"opt9",label:"Ninth Option"},{value:"opt10",label:"Tenth Option"},{value:"opt11",label:"Eleventh Option"},{value:"opt12",label:"Twelfth Option"}],m={args:{options:s,label:"Select an option"}},g={render:t=>{const[r,l]=_.useState("option2");return e.jsx(p,{...t,value:r,onChange:l})},args:{options:s,label:"Controlled Dropdown",helperText:"Selected value updates dynamically"}},v={args:{options:s,label:"Disabled Dropdown",disabled:!0,value:"option1"}},h={args:{options:A,label:"Large List with Scrollbar",helperText:"12+ options trigger scrollable behavior"}},f={args:{options:s,label:"Choose a category",helperText:"Select from the available categories below",required:!0}},S={args:{options:s,label:"Selection Required",status:"error",errorText:"Please select a valid option",required:!0}},x={args:{options:s,label:"Status Confirmed",value:"option3",status:"success",successText:"Selection confirmed successfully"}},y={render:t=>{const[r,l]=_.useState(""),[u,n]=_.useState("default"),[C,i]=_.useState(""),d=c=>{l(c),n("success"),i(`Selected: ${c}`)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(p,{...t,value:r,onChange:d,status:u,successText:C||void 0}),e.jsxs("div",{style:{padding:"12px",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"14px"},children:["Current value: ",e.jsx("strong",{children:r||"None"})]})]})},args:{options:s,label:"Interactive Dropdown"}},O={args:{options:s,label:"Keyboard Navigation",helperText:"Native select supports arrow keys, enter, space, and tab"}},q={args:{options:s,label:"Required Field",required:!0,helperText:"This field is required (indicated by *)"}},w={args:{options:[{value:"opt1",label:"Available Option 1"},{value:"opt2",label:"Unavailable Option",disabled:!0},{value:"opt3",label:"Available Option 2"},{value:"opt4",label:"Unavailable Option",disabled:!0},{value:"opt5",label:"Available Option 3"}],label:"Dropdown with Disabled Options",helperText:"Some options are disabled and cannot be selected"}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    label: "Select an option"
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>("option2");
    return <Dropdown {...args} value={selectedValue} onChange={setSelectedValue} />;
  },
  args: {
    options: basicOptions,
    label: "Controlled Dropdown",
    helperText: "Selected value updates dynamically"
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    label: "Disabled Dropdown",
    disabled: true,
    value: "option1"
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    options: largeOptionsList,
    label: "Large List with Scrollbar",
    helperText: "12+ options trigger scrollable behavior"
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    label: "Choose a category",
    helperText: "Select from the available categories below",
    required: true
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    label: "Selection Required",
    status: "error",
    errorText: "Please select a valid option",
    required: true
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    label: "Status Confirmed",
    value: "option3",
    status: "success",
    successText: "Selection confirmed successfully"
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [status, setStatus] = useState<"default" | "error" | "success">("default");
    const [message, setMessage] = useState<string>("");
    const handleChange = (value: string) => {
      setSelectedValue(value);
      setStatus("success");
      setMessage(\`Selected: \${value}\`);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>\r
        <Dropdown {...args} value={selectedValue} onChange={handleChange} status={status} successText={message || undefined} />\r
        <div style={{
        padding: "12px",
        backgroundColor: "#f5f5f5",
        borderRadius: "4px",
        fontSize: "14px"
      }}>\r
          Current value: <strong>{selectedValue || "None"}</strong>\r
        </div>\r
      </div>;
  },
  args: {
    options: basicOptions,
    label: "Interactive Dropdown"
  }
}`,...y.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    label: "Keyboard Navigation",
    helperText: "Native select supports arrow keys, enter, space, and tab"
  }
}`,...O.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    label: "Required Field",
    required: true,
    helperText: "This field is required (indicated by *)"
  }
}`,...q.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "opt1",
      label: "Available Option 1"
    }, {
      value: "opt2",
      label: "Unavailable Option",
      disabled: true
    }, {
      value: "opt3",
      label: "Available Option 2"
    }, {
      value: "opt4",
      label: "Unavailable Option",
      disabled: true
    }, {
      value: "opt5",
      label: "Available Option 3"
    }],
    label: "Dropdown with Disabled Options",
    helperText: "Some options are disabled and cannot be selected"
  }
}`,...w.parameters?.docs?.source}}};const z=["Basic","Controlled","Disabled","LargeList","CustomLabel","ErrorState","SuccessState","Interactive","KeyboardNavigation","Required","WithDisabledOptions"];export{m as Basic,g as Controlled,f as CustomLabel,v as Disabled,S as ErrorState,y as Interactive,O as KeyboardNavigation,h as LargeList,q as Required,x as SuccessState,w as WithDisabledOptions,z as __namedExportsOrder,B as default};
