import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-DB-45t0D.js";import{B as Z}from"./Button-xOsOojf0.js";import{I as d}from"./Icon-BrQ12ZgB.js";import"./preload-helper-PPVm8Dsz.js";const F=({label:c,helperText:t,successText:p,errorText:u,validationState:o="default",required:g=!1,disabled:l=!1,multiple:f=!0,acceptedFormats:i,maxFileSize:n,dragAndDropText:k="Drag and drop files or select files to upload",selectFilesButtonText:C="Select files",onFilesSelected:z,onFileRemove:M,onValidate:q,files:D=[],className:A=""})=>{const[H,N]=m.useState(!1),V=m.useRef(null),a="ntgds-file-upload",L=`${a} ${l?`${a}--disabled`:""} ${o!=="default"?`${a}--${o}`:""} ${A}`.trim(),B=t&&o==="default",E=p&&o==="success",I=u&&o==="error",R=`${a}-label`,h=`${a}-message`;m.useCallback(e=>{if(q)return q(e);if(i&&i.length>0){const r=e.name.split(".").pop()?.toLowerCase();if(!r||!i.includes(r))return{valid:!1,errorMessage:`File format not supported. Accepted formats: ${i.join(", ")}`}}return n&&e.size>n?{valid:!1,errorMessage:`File must be less than ${(n/1048576).toFixed(0)}MB`}:{valid:!0}},[i,n,q]);const W=m.useCallback(e=>{if(!e||e.length===0||l)return;const r=Array.from(e);z&&z(r)},[l,z]),G=()=>{l||V.current?.click()},J=e=>{W(e.target.files),e.target.value=""},K=e=>{e.preventDefault(),l||N(!0)},P=e=>{e.preventDefault(),N(!1)},Q=e=>{e.preventDefault(),N(!1),l||W(e.dataTransfer.files)},X=e=>{M&&M(e)},Y=()=>{if(!(!i||i.length===0))return i.map(e=>`.${e}`).join(",")},O=(()=>{const e=[];if(i&&i.length>0&&e.push(`Supported file formats: ${i.join(", ")}`),n){const r=(n/1048576).toFixed(0);e.push(`Max file size is ${r}MB`)}return e})();return s.jsxs("div",{className:L,children:[s.jsxs("label",{id:R,className:`${a}__label`,children:[c,g&&s.jsx("span",{className:`${a}__required`,children:" (required)"})]}),B&&s.jsx("p",{id:h,className:`${a}__helper-text`,children:t}),E&&s.jsxs("div",{id:h,className:`${a}__message ${a}__message--success`,children:[s.jsx("span",{className:`${a}__icon-wrapper`,children:s.jsx(d,{name:"circle-check",size:"sm"})}),s.jsx("p",{className:`${a}__success-text`,children:p})]}),I&&s.jsxs("div",{id:h,className:`${a}__message ${a}__message--error`,children:[s.jsx("span",{className:`${a}__icon-wrapper`,children:s.jsx(d,{name:"circle-exclamation",size:"sm"})}),s.jsx("p",{className:`${a}__error-text`,children:u})]}),s.jsxs("div",{className:`${a}__drop-zone ${H?`${a}__drop-zone--dragging`:""}`,onDragOver:K,onDragLeave:P,onDrop:Q,"aria-labelledby":R,"aria-describedby":B||E||I?h:void 0,children:[s.jsx(d,{name:"upload",size:"md"}),s.jsxs("div",{className:`${a}__description`,children:[s.jsx("p",{className:`${a}__drag-text`,children:k}),O.length>0&&s.jsx("div",{className:`${a}__info`,children:O.map((e,r)=>s.jsx("p",{className:`${a}__info-text`,children:e},r))})]}),s.jsx(Z,{variant:"secondary",size:"small",onClick:G,disabled:l,type:"button",children:C}),s.jsx("input",{ref:V,type:"file",className:`${a}__input`,onChange:J,multiple:f,accept:Y(),disabled:l,"aria-hidden":"true",tabIndex:-1})]}),D.length>0&&s.jsx("div",{className:`${a}__file-list`,children:D.map(e=>{const r=e.status==="error";return s.jsxs("div",{className:`${a}__file-item ${r?`${a}__file-item--error`:""}`,children:[s.jsxs("div",{className:`${a}__file-content`,children:[s.jsxs("div",{className:`${a}__file-info`,children:[e.status==="success"&&s.jsx(d,{name:"circle-check",size:"sm"}),e.status==="uploading"&&s.jsx("span",{className:`${a}__spinner`,children:s.jsx(d,{name:"spinner",size:"sm"})}),e.status==="error"&&s.jsx(d,{name:"circle-exclamation",size:"sm"}),s.jsx("span",{className:`${a}__file-name`,children:e.file.name})]}),s.jsx("button",{type:"button",className:`${a}__remove-btn`,onClick:()=>X(e.id),"aria-label":`Remove ${e.file.name}`,children:s.jsx(d,{name:"xmark",size:"sm"})})]}),r&&e.errorMessage&&s.jsx("div",{className:`${a}__file-error`,children:s.jsx("p",{className:`${a}__file-error-text`,children:e.errorMessage})})]},e.id)})})]})};try{F.displayName="FileUpload",F.__docgenInfo={description:"",displayName:"FileUpload",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},successText:{defaultValue:null,description:"",name:"successText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},validationState:{defaultValue:{value:"default"},description:"",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'}]}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},multiple:{defaultValue:{value:"true"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},acceptedFormats:{defaultValue:null,description:"",name:"acceptedFormats",required:!1,type:{name:"string[]"}},maxFileSize:{defaultValue:null,description:"",name:"maxFileSize",required:!1,type:{name:"number"}},dragAndDropText:{defaultValue:{value:"Drag and drop files or select files to upload"},description:"",name:"dragAndDropText",required:!1,type:{name:"string"}},selectFilesButtonText:{defaultValue:{value:"Select files"},description:"",name:"selectFilesButtonText",required:!1,type:{name:"string"}},onFilesSelected:{defaultValue:null,description:"",name:"onFilesSelected",required:!1,type:{name:"((files: File[]) => void)"}},onFileRemove:{defaultValue:null,description:"",name:"onFileRemove",required:!1,type:{name:"((fileId: string) => void)"}},onValidate:{defaultValue:null,description:"",name:"onValidate",required:!1,type:{name:"((file: File) => { valid: boolean; errorMessage?: string; })"}},files:{defaultValue:{value:"[]"},description:"",name:"files",required:!1,type:{name:"UploadedFile[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ne={title:"Components/FileUpload",component:F,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the file upload"},helperText:{control:"text",description:"Helper text displayed below the label"},successText:{control:"text",description:"Success message displayed when validationState is 'success'"},errorText:{control:"text",description:"Error message displayed when validationState is 'error'"},validationState:{control:"select",options:["default","error","success"],description:"The validation state of the file upload"},required:{control:"boolean",description:"Whether the file upload is required"},disabled:{control:"boolean",description:"Whether the file upload is disabled"},multiple:{control:"boolean",description:"Allow multiple file selection"}}},x={args:{label:"Upload file",helperText:"Optional helper text",acceptedFormats:["jpg","png","pdf"],maxFileSize:10*1024*1024}},_={args:{label:"Upload file",helperText:"This field is required",required:!0,acceptedFormats:["jpg","png","pdf"],maxFileSize:10*1024*1024}},b={args:{label:"Upload file",validationState:"error",errorText:"Error message goes here",acceptedFormats:["jpg","png","pdf"],maxFileSize:10*1024*1024}},v={args:{label:"Upload file",validationState:"success",successText:"Files uploaded successfully",acceptedFormats:["jpg","png","pdf"],maxFileSize:10*1024*1024}},S={args:{label:"Upload file",helperText:"File upload is currently disabled",disabled:!0,acceptedFormats:["jpg","png","pdf"],maxFileSize:10*1024*1024}},j={args:{label:"Upload file",helperText:"Select a single file",multiple:!1,acceptedFormats:["pdf"],maxFileSize:5*1024*1024}},y={render:c=>{const[t,p]=m.useState([{id:"1",file:new File([""],"Filename.pdf",{type:"application/pdf"}),status:"success"},{id:"2",file:new File([""],"Filename.pdf",{type:"application/pdf"}),status:"success"}]);return s.jsx(F,{...c,files:t,onFileRemove:u=>{p(t.filter(o=>o.id!==u))}})},args:{label:"Upload file",helperText:"Optional helper text",acceptedFormats:["jpg","png","pdf"],maxFileSize:10*1024*1024}},$={args:{label:"Upload file",helperText:"Optional helper text",files:[{id:"1",file:new File([""],"Filename.pdf",{type:"application/pdf"}),status:"uploading"}],acceptedFormats:["jpg","png","pdf"],maxFileSize:10*1024*1024}},T={args:{label:"Upload file",helperText:"Optional helper text",files:[{id:"1",file:new File([""],"Filename.pdf",{type:"application/pdf"}),status:"error",errorMessage:"File must be less than 10MB"}],acceptedFormats:["jpg","png","pdf"],maxFileSize:10*1024*1024}},U={args:{label:"Upload file",helperText:"Optional helper text",files:[{id:"1",file:new File([""],"Filename.pdf",{type:"application/pdf"}),status:"success"},{id:"2",file:new File([""],"Filename.pdf",{type:"application/pdf"}),status:"success"},{id:"3",file:new File([""],"Filename.pdf",{type:"application/pdf"}),status:"uploading"},{id:"4",file:new File([""],"Filename.pdf",{type:"application/pdf"}),status:"error",errorMessage:"File must be less than 10MB"}],acceptedFormats:["jpg","png","pdf"],maxFileSize:10*1024*1024}},w={render:c=>{const[t,p]=m.useState([]),u=g=>{const l=g.map(f=>({id:`${Date.now()}-${f.name}`,file:f,status:"uploading"}));p([...t,...l]),l.forEach(f=>{setTimeout(()=>{p(i=>i.map(n=>n.id===f.id?{...n,status:"success"}:n))},2e3)})},o=g=>{p(t.filter(l=>l.id!==g))};return s.jsx(F,{...c,files:t,onFilesSelected:u,onFileRemove:o})},args:{label:"Upload file",helperText:"Try dragging and dropping files or clicking to select",acceptedFormats:["jpg","png","pdf"],maxFileSize:10*1024*1024}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    helperText: "Optional helper text",
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024 // 10MB
  }
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    helperText: "This field is required",
    required: true,
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024
  }
}`,..._.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    validationState: "error",
    errorText: "Error message goes here",
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    validationState: "success",
    successText: "Files uploaded successfully",
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    helperText: "File upload is currently disabled",
    disabled: true,
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    helperText: "Select a single file",
    multiple: false,
    acceptedFormats: ["pdf"],
    maxFileSize: 5 * 1024 * 1024 // 5MB
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [files, setFiles] = useState<UploadedFile[]>([{
      id: "1",
      file: new File([""], "Filename.pdf", {
        type: "application/pdf"
      }),
      status: "success"
    }, {
      id: "2",
      file: new File([""], "Filename.pdf", {
        type: "application/pdf"
      }),
      status: "success"
    }]);
    return <FileUpload {...args} files={files} onFileRemove={id => {
      setFiles(files.filter(f => f.id !== id));
    }} />;
  },
  args: {
    label: "Upload file",
    helperText: "Optional helper text",
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024
  }
}`,...y.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    helperText: "Optional helper text",
    files: [{
      id: "1",
      file: new File([""], "Filename.pdf", {
        type: "application/pdf"
      }),
      status: "uploading"
    }],
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024
  }
}`,...$.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    helperText: "Optional helper text",
    files: [{
      id: "1",
      file: new File([""], "Filename.pdf", {
        type: "application/pdf"
      }),
      status: "error",
      errorMessage: "File must be less than 10MB"
    }],
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024
  }
}`,...T.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    helperText: "Optional helper text",
    files: [{
      id: "1",
      file: new File([""], "Filename.pdf", {
        type: "application/pdf"
      }),
      status: "success"
    }, {
      id: "2",
      file: new File([""], "Filename.pdf", {
        type: "application/pdf"
      }),
      status: "success"
    }, {
      id: "3",
      file: new File([""], "Filename.pdf", {
        type: "application/pdf"
      }),
      status: "uploading"
    }, {
      id: "4",
      file: new File([""], "Filename.pdf", {
        type: "application/pdf"
      }),
      status: "error",
      errorMessage: "File must be less than 10MB"
    }],
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024
  }
}`,...U.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const handleFilesSelected = (selectedFiles: File[]) => {
      const newFiles: UploadedFile[] = selectedFiles.map(file => ({
        id: \`\${Date.now()}-\${file.name}\`,
        file,
        status: "uploading" as const
      }));
      setFiles([...files, ...newFiles]);

      // Simulate upload
      newFiles.forEach(newFile => {
        setTimeout(() => {
          setFiles(prev => prev.map(f => f.id === newFile.id ? {
            ...f,
            status: "success" as const
          } : f));
        }, 2000);
      });
    };
    const handleFileRemove = (id: string) => {
      setFiles(files.filter(f => f.id !== id));
    };
    return <FileUpload {...args} files={files} onFilesSelected={handleFilesSelected} onFileRemove={handleFileRemove} />;
  },
  args: {
    label: "Upload file",
    helperText: "Try dragging and dropping files or clicking to select",
    acceptedFormats: ["jpg", "png", "pdf"],
    maxFileSize: 10 * 1024 * 1024
  }
}`,...w.parameters?.docs?.source}}};const te=["Default","Required","WithError","WithSuccess","Disabled","SingleFile","WithUploadedFiles","WithUploadingFile","WithErrorFile","WithMultipleFileStates","Interactive"];export{x as Default,S as Disabled,w as Interactive,_ as Required,j as SingleFile,b as WithError,T as WithErrorFile,U as WithMultipleFileStates,v as WithSuccess,y as WithUploadedFiles,$ as WithUploadingFile,te as __namedExportsOrder,ne as default};
