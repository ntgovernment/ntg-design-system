import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as g}from"./iframe-BMHqEkGZ.js";import{I as b}from"./Icon-BrQ12ZgB.js";import"./preload-helper-PPVm8Dsz.js";const t=g.forwardRef(({onClick:s,ariaLabel:i="Back to top",className:p="",...d},u)=>{const c="ntgds-back-to-top",m=l=>{l.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),s&&s(l)},h=[c,p].filter(Boolean).join(" ");return e.jsxs("button",{ref:u,className:h,onClick:m,"aria-label":i,type:"button",...d,children:[e.jsx("span",{className:`${c}__text`,children:"Back to top"}),e.jsx(b,{name:"arrow-up",size:"sm",color:"default",className:`${c}__icon`})]})});t.displayName="BackToTopButton";try{t.displayName="BackToTopButton",t.__docgenInfo={description:`BackToTopButton component for scrolling back to the top of a page.
Styled as a secondary button with custom hover color using --clr-bg-dark token.
Fixed position at bottom-right of page.`,displayName:"BackToTopButton",props:{onClick:{defaultValue:null,description:"Click handler - typically scrolls to top smoothly",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},ariaLabel:{defaultValue:{value:"Back to top"},description:"Aria label for accessibility",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const f={title:"Components/BackToTopButton",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{ariaLabel:{control:"text",description:"Aria label for accessibility"},disabled:{control:"boolean",description:"Disable the button"}}},o=()=>e.jsxs("div",{style:{minHeight:"150vh",padding:"20px"},children:[e.jsx("h2",{children:"Scroll down to see the button"}),e.jsx("p",{children:"The BackToTopButton appears in the lower right corner and scrolls the page to the top when clicked."}),e.jsx(t,{ariaLabel:"Back to top"})]}),a=()=>e.jsx(t,{disabled:!0,ariaLabel:"Back to top"}),r=()=>e.jsx(t,{ariaLabel:"Return to page top"}),n=()=>e.jsxs("div",{style:{minHeight:"200vh",padding:"20px"},children:[e.jsx("h1",{children:"Long Page Content"}),e.jsx("p",{children:"Scroll down to see the button in the lower right corner."}),Array.from({length:30}).map((s,i)=>e.jsxs("p",{children:["Paragraph ",i+1,": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},i)),e.jsx("p",{children:"Click the button in the lower right to scroll back to top."}),e.jsx(t,{ariaLabel:"Back to top"})]});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <div style={{
    minHeight: "150vh",
    padding: "20px"
  }}>\r
      <h2>Scroll down to see the button</h2>\r
      <p>\r
        The BackToTopButton appears in the lower right corner and scrolls the page to the top when clicked.\r
      </p>\r
      <BackToTopButton ariaLabel="Back to top" />\r
    </div>;
}`,...o.parameters?.docs?.source},description:{story:"Default BackToTopButton shown in fixed bottom-right position.",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <BackToTopButton disabled ariaLabel="Back to top" />;
}`,...a.parameters?.docs?.source},description:{story:"Button in disabled state.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <BackToTopButton ariaLabel="Return to page top" />;
}`,...r.parameters?.docs?.source},description:{story:"Button with custom aria label.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <div style={{
    minHeight: "200vh",
    padding: "20px"
  }}>\r
      <h1>Long Page Content</h1>\r
      <p>Scroll down to see the button in the lower right corner.</p>\r
      {Array.from({
      length: 30
    }).map((_, i) => <p key={i}>\r
          Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r
        </p>)}\r
      <p>Click the button in the lower right to scroll back to top.</p>\r
      <BackToTopButton ariaLabel="Back to top" />\r
    </div>;
}`,...n.parameters?.docs?.source},description:{story:"Interactive demo with long content showing the button in action.",...n.parameters?.docs?.description}}};const x=["Default","Disabled","CustomLabel","Interactive"];export{r as CustomLabel,o as Default,a as Disabled,n as Interactive,x as __namedExportsOrder,f as default};
