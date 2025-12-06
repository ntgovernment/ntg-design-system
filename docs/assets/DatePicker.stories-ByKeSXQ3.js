import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-orbKJz4h.js";import{I as d}from"./Icon-D9ZymXa3.js";import{B as Q}from"./Button-CklBq9Au.js";import"./preload-helper-PPVm8Dsz.js";const b=({label:u,helperText:Y,successText:D,errorText:g,validationState:o="default",required:v=!1,disabled:c=!1,value:F,onChange:_,placeholder:U="DD/MM/YYYY",name:X,id:Z,className:ee=""})=>{const[ae,E]=l.useState(""),[p,x]=l.useState(!1),[te,q]=l.useState(null),[n,m]=l.useState(new Date),I=l.useRef(null),L=l.useRef(null),O=F!==void 0,y=O?F:ae;l.useEffect(()=>{if(y){const t=z(y);t&&(q(t),m(t))}},[y]),l.useEffect(()=>{const t=s=>{L.current&&!L.current.contains(s.target)&&I.current&&!I.current.contains(s.target)&&x(!1)};if(p)return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[p]);const z=t=>{if(!t)return null;const s=t.split("/");if(s.length===3){const f=parseInt(s[0],10),K=parseInt(s[1],10)-1,P=parseInt(s[2],10),i=new Date(P,K,f);if(!isNaN(i.getTime()))return i}const r=new Date(t);return isNaN(r.getTime())?null:r},R=t=>{const s=t.getDate().toString().padStart(2,"0"),r=(t.getMonth()+1).toString().padStart(2,"0"),f=t.getFullYear();return`${s}/${r}/${f}`},se=t=>{const s=t.target.value;O||E(s),_&&_(s);const r=z(s);r&&(q(r),m(r))},re=()=>{c||x(!p)},ne=()=>{c||x(!p)},le=t=>{q(t);const s=R(t);O||E(s),_&&_(s)},oe=()=>{x(!1)},ce=()=>{x(!1)},ie=()=>{m(new Date(n.getFullYear(),n.getMonth()-1,1))},de=()=>{m(new Date(n.getFullYear(),n.getMonth()+1,1))},ue=()=>{m(new Date(n.getFullYear()-1,n.getMonth(),1))},pe=()=>{m(new Date(n.getFullYear()+1,n.getMonth(),1))},me=t=>{const s=t.getFullYear(),r=t.getMonth(),f=new Date(s,r,1),P=new Date(s,r+1,0).getDate();let i=f.getDay();i=i===0?6:i-1;const W=[];for(let h=0;h<i;h++)W.push(null);for(let h=1;h<=P;h++)W.push(new Date(s,r,h));return W},he=(t,s)=>!t||!s?!1:t.getDate()===s.getDate()&&t.getMonth()===s.getMonth()&&t.getFullYear()===s.getFullYear(),ge=["January","February","March","April","May","June","July","August","September","October","November","December"],xe=["Mo","Tu","We","Th","Fr","Sa","Su"],B=Y&&o==="default",H=D&&o==="success",J=g&&o==="error",a="ntgds-date-picker",fe=`${a} ${c?`${a}--disabled`:""} ${o!=="default"?`${a}--${o}`:""} ${ee}`.trim(),A=Z||`${a}-input`,G=`${a}-label`,M=`${a}-message`,be=me(n);return e.jsxs("div",{className:fe,children:[e.jsxs("label",{id:G,htmlFor:A,className:`${a}__label`,children:[u,v&&e.jsx("span",{className:`${a}__required`,children:" (required)"})]}),B&&e.jsx("p",{id:M,className:`${a}__helper-text`,children:Y}),H&&e.jsxs("div",{id:M,className:`${a}__message ${a}__message--success`,children:[e.jsx("span",{className:`${a}__icon-wrapper`,children:e.jsx(d,{name:"circle-check",size:"sm"})}),e.jsx("p",{className:`${a}__success-text`,children:D})]}),J&&e.jsxs("div",{id:M,className:`${a}__message ${a}__message--error`,children:[e.jsx("span",{className:`${a}__icon-wrapper`,children:e.jsx(d,{name:"circle-exclamation",size:"sm"})}),e.jsx("p",{className:`${a}__error-text`,children:g})]}),e.jsxs("div",{className:`${a}__input-wrapper`,children:[e.jsx("input",{ref:I,id:A,type:"text",name:X,value:y,onChange:se,onClick:re,disabled:c,required:v,placeholder:U,className:`${a}__input`,"aria-labelledby":G,"aria-describedby":B||H||J?M:void 0,"aria-invalid":o==="error","aria-expanded":p,"aria-haspopup":"dialog",readOnly:!0}),e.jsx("button",{type:"button",className:`${a}__icon-button`,onClick:ne,disabled:c,"aria-label":"Open calendar",tabIndex:-1,children:e.jsx(d,{name:"calendar-days",size:"sm"})}),p&&e.jsxs("div",{ref:L,className:`${a}__calendar`,role:"dialog","aria-label":"Choose date",children:[e.jsxs("div",{className:`${a}__calendar-header`,children:[e.jsx("button",{type:"button",className:`${a}__nav-button`,onClick:ue,"aria-label":"Previous year",children:e.jsx(d,{name:"angles-left",size:"sm"})}),e.jsx("button",{type:"button",className:`${a}__nav-button`,onClick:ie,"aria-label":"Previous month",children:e.jsx(d,{name:"chevron-left",size:"sm"})}),e.jsxs("div",{className:`${a}__month-year`,children:[e.jsx("span",{className:`${a}__month-name`,children:ge[n.getMonth()]}),e.jsx("span",{className:`${a}__year-name`,children:n.getFullYear()})]}),e.jsx("button",{type:"button",className:`${a}__nav-button`,onClick:de,"aria-label":"Next month",children:e.jsx(d,{name:"chevron-right",size:"sm"})}),e.jsx("button",{type:"button",className:`${a}__nav-button`,onClick:pe,"aria-label":"Next year",children:e.jsx(d,{name:"angles-right",size:"sm"})})]}),e.jsx("div",{className:`${a}__calendar-weekdays`,children:xe.map(t=>e.jsx("div",{className:`${a}__weekday`,children:t},t))}),e.jsx("div",{className:`${a}__calendar-days`,children:be.map((t,s)=>{const r=he(t,te);return e.jsx("div",{className:`${a}__day-cell`,children:t?e.jsx("button",{type:"button",className:`${a}__day-button ${r?`${a}__day-button--selected`:""}`,onClick:()=>le(t),"aria-label":R(t),"aria-pressed":r,children:t.getDate()}):null},s)})}),e.jsxs("div",{className:`${a}__calendar-footer`,children:[e.jsx(Q,{variant:"secondary",size:"large",onClick:ce,type:"button",children:"Cancel"}),e.jsx(Q,{variant:"primary",size:"large",onClick:oe,type:"button",children:"Confirm"})]})]})]})]})};try{b.displayName="DatePicker",b.__docgenInfo={description:"",displayName:"DatePicker",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},successText:{defaultValue:null,description:"",name:"successText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},validationState:{defaultValue:{value:"default"},description:"",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'}]}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},placeholder:{defaultValue:{value:"DD/MM/YYYY"},description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Me={title:"Components/DatePicker",component:b,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the date picker"},helperText:{control:"text",description:"Helper text displayed below the label"},successText:{control:"text",description:"Success message displayed when validationState is 'success'"},errorText:{control:"text",description:"Error message displayed when validationState is 'error'"},validationState:{control:"select",options:["default","error","success"],description:"The validation state of the date picker"},required:{control:"boolean",description:"Whether the date picker is required"},disabled:{control:"boolean",description:"Whether the date picker is disabled"},placeholder:{control:"text",description:"Placeholder text for the input"}}},S={args:{label:"Label",helperText:"Optional helper text",placeholder:"DD/MM/YYYY"}},$={args:{label:"Label",helperText:"Optional helper text",required:!0,placeholder:"DD/MM/YYYY"}},j={args:{label:"Label",helperText:"Optional helper text",value:"2024-12-04",placeholder:"DD/MM/YYYY"}},N={args:{label:"Label",validationState:"success",successText:"Input validated",value:"2024-12-04",placeholder:"DD/MM/YYYY"}},T={args:{label:"Label",validationState:"error",errorText:"Please select a valid date",placeholder:"DD/MM/YYYY"}},C={args:{label:"Label",helperText:"This field is disabled",disabled:!0,placeholder:"DD/MM/YYYY"}},V={args:{label:"Label",disabled:!0,value:"2024-12-04",placeholder:"DD/MM/YYYY"}},w={render:u=>e.jsx("div",{style:{minHeight:"500px",paddingBottom:"400px"},children:e.jsx(b,{...u})}),args:{label:"Label",helperText:"Click the input or calendar icon to open",placeholder:"DD/MM/YYYY"}},k={render:u=>{const[Y,D]=l.useState(""),[g,o]=l.useState("default"),v=c=>{D(c),o(c?"success":"default")};return e.jsx("div",{style:{minHeight:"500px",paddingBottom:"400px"},children:e.jsx(b,{...u,value:Y,onChange:v,validationState:g,successText:g==="success"?"Date selected":void 0})})},args:{label:"Select a date",helperText:"Choose a date from the calendar",placeholder:"DD/MM/YYYY"}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "DD/MM/YYYY"
  }
}`,...S.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "Optional helper text",
    required: true,
    placeholder: "DD/MM/YYYY"
  }
}`,...$.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "Optional helper text",
    value: "2024-12-04",
    placeholder: "DD/MM/YYYY"
  }
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    validationState: "success",
    successText: "Input validated",
    value: "2024-12-04",
    placeholder: "DD/MM/YYYY"
  }
}`,...N.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    validationState: "error",
    errorText: "Please select a valid date",
    placeholder: "DD/MM/YYYY"
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "This field is disabled",
    disabled: true,
    placeholder: "DD/MM/YYYY"
  }
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    disabled: true,
    value: "2024-12-04",
    placeholder: "DD/MM/YYYY"
  }
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div style={{
      minHeight: "500px",
      paddingBottom: "400px"
    }}>\r
        <DatePicker {...args} />\r
      </div>;
  },
  args: {
    label: "Label",
    helperText: "Click the input or calendar icon to open",
    placeholder: "DD/MM/YYYY"
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    const [validationState, setValidationState] = useState<"default" | "error" | "success">("default");
    const handleChange = (newValue: string) => {
      setValue(newValue);
      if (newValue) {
        setValidationState("success");
      } else {
        setValidationState("default");
      }
    };
    return <div style={{
      minHeight: "500px",
      paddingBottom: "400px"
    }}>\r
        <DatePicker {...args} value={value} onChange={handleChange} validationState={validationState} successText={validationState === "success" ? "Date selected" : undefined} />\r
      </div>;
  },
  args: {
    label: "Select a date",
    helperText: "Choose a date from the calendar",
    placeholder: "DD/MM/YYYY"
  }
}`,...k.parameters?.docs?.source}}};const Se=["Default","Required","WithValue","WithSuccess","WithError","Disabled","DisabledWithValue","WithCalendarOpen","Interactive"];export{S as Default,C as Disabled,V as DisabledWithValue,k as Interactive,$ as Required,w as WithCalendarOpen,T as WithError,N as WithSuccess,j as WithValue,Se as __namedExportsOrder,Me as default};
