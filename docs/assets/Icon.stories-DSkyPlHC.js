import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as s}from"./Icon-D9ZymXa3.js";const d={title:"Components/Icon",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`Icon component wrapping Font Awesome. Ensure Font Awesome CSS is included separately (CDN or package).

Usage: <Icon name="xmark" size="sm" color="primary" />`}}},argTypes:{name:{control:"text"},size:{control:{type:"select"},options:["sm","md","lg"]},color:{control:{type:"select"},options:["default","primary","secondary","tertiary","inverse"]},faStyle:{control:{type:"select"},options:["solid","regular","brands"]},ariaLabel:{control:"text"}},args:{name:"xmark",size:"md",color:"default",faStyle:"solid"}},a={},o={render:r=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(s,{...r,size:"sm"}),e.jsx(s,{...r,size:"md"}),e.jsx(s,{...r,size:"lg"})]})},n={render:r=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(s,{...r,color:"default"}),e.jsx(s,{...r,color:"primary"}),e.jsx(s,{...r,color:"secondary"}),e.jsx(s,{...r,color:"tertiary"}),e.jsx(s,{...r,color:"inverse",style:{background:"#333",padding:"4px"},ariaLabel:"inverse icon"})]})},t={render:r=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(s,{...r,faStyle:"solid",name:"xmark"}),e.jsx(s,{...r,faStyle:"regular",name:"circle-check"}),e.jsx(s,{...r,faStyle:"brands",name:"github"})]})},c={args:{name:void 0},render:()=>e.jsx(s,{ariaLabel:"custom square glyph",color:"primary"})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <Icon {...args} size="sm" />\r
      <Icon {...args} size="md" />\r
      <Icon {...args} size="lg" />\r
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <Icon {...args} color="default" />\r
      <Icon {...args} color="primary" />\r
      <Icon {...args} color="secondary" />\r
      <Icon {...args} color="tertiary" />\r
      <Icon {...args} color="inverse" style={{
      background: "#333",
      padding: "4px"
    }} ariaLabel="inverse icon" />\r
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <Icon {...args} faStyle="solid" name="xmark" />\r
      <Icon {...args} faStyle="regular" name="circle-check" />\r
      <Icon {...args} faStyle="brands" name="github" />\r
    </div>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: undefined
  },
  render: () => <Icon ariaLabel="custom square glyph" color="primary">\r
      {/* Fallback simple square */}\r
    </Icon>
}`,...c.parameters?.docs?.source}}};const p=["Default","Sizes","Colors","Styles","CustomGlyph"];export{n as Colors,c as CustomGlyph,a as Default,o as Sizes,t as Styles,p as __namedExportsOrder,d as default};
