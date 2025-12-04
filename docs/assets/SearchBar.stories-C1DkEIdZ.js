import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as j}from"./iframe-D0A1nOia.js";import{I as B}from"./Icon-D9ZymXa3.js";import"./preload-helper-PPVm8Dsz.js";const n=({placeholder:r="Search",value:a="",onChange:t,onSubmit:s,variant:c="primary",disabled:o=!1,width:C="296px",className:E="",...V})=>{const l=d.useRef(null),_=P=>{t&&t(P.target.value)},D=P=>{P.preventDefault(),s&&l.current&&s(l.current.value)},F=()=>{s&&l.current&&s(l.current.value)},i="ntgds-search-bar",R=[i,`${i}--${c}`,E].filter(Boolean).join(" ");return c==="primary"?e.jsxs("form",{className:R,onSubmit:D,style:{width:C},...V,children:[e.jsx("div",{className:`${i}__input-wrapper`,children:e.jsx("input",{ref:l,type:"text",className:`${i}__input`,placeholder:r,value:a,onChange:_,disabled:o,"aria-label":"Search"})}),e.jsx("button",{type:"submit",className:`${i}__button`,disabled:o,"aria-label":"Submit search",children:e.jsx(B,{name:"magnifying-glass",color:"inverse",size:"md"})})]}):e.jsx("form",{className:R,onSubmit:D,...V,children:e.jsxs("div",{className:`${i}__input-wrapper`,children:[e.jsx("input",{ref:l,type:"text",className:`${i}__input`,placeholder:r,value:a,onChange:_,disabled:o,"aria-label":"Search"}),e.jsx("button",{type:"button",className:`${i}__icon-button`,onClick:F,disabled:o,"aria-label":"Submit search",children:e.jsx(B,{name:"magnifying-glass",size:"md",style:{color:"var(--ntg-colour-neutrals-600, #949391)"}})})]})})};try{n.displayName="SearchBar",n.__docgenInfo={description:"",displayName:"SearchBar",props:{placeholder:{defaultValue:{value:"Search"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"((value: string) => void)"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"296px"},description:"",name:"width",required:!1,type:{name:"string | number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const $={title:"Components/SearchBar",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the search input"},value:{control:"text",description:"Controlled value of the search input"},variant:{control:"select",options:["primary","secondary"],description:"Search bar variant: primary (button on right) or secondary (inline icon)"},disabled:{control:"boolean",description:"Whether the search bar is disabled"}}},p={args:{placeholder:"Search",variant:"primary"},parameters:{docs:{description:{story:"Primary variant with search button on the right. Default state with placeholder text."}}}},u={args:{placeholder:"Search",value:"React components",variant:"primary"},parameters:{docs:{description:{story:"Primary variant with pre-filled value. Shows text input on left, red button on right."}}}},m={args:{placeholder:"Search",variant:"primary",disabled:!0},parameters:{docs:{description:{story:"Primary variant disabled. Input and button are not interactive with 0.6 opacity."}}}},h={render:()=>{const[r,a]=d.useState(""),[t,s]=d.useState(""),c=o=>{s(`Searched for: "${o}"`)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{placeholder:"Search",value:r,onChange:a,onSubmit:c,variant:"primary"}),t&&e.jsx("p",{style:{color:"#3b3b3a"},children:t})]})},parameters:{docs:{description:{story:"Primary variant with interactive value tracking. Type text and click the button or press Enter to submit."}}}},y={args:{placeholder:"Search",variant:"primary"},render:r=>e.jsx(n,{...r}),parameters:{docs:{description:{story:"Primary variant expands to fill available width. Button remains fixed width while input takes remaining space."}}}},v={args:{placeholder:"Search",variant:"secondary"},parameters:{docs:{description:{story:"Secondary variant with inline search icon. Fixed 246px width with compact appearance."}}}},S={args:{placeholder:"Search",value:"Design tokens",variant:"secondary"},parameters:{docs:{description:{story:"Secondary variant with pre-filled value. Shows text input with inline icon button."}}}},f={args:{placeholder:"Search",variant:"secondary",disabled:!0},parameters:{docs:{description:{story:"Secondary variant disabled. Input and icon button are not interactive with 0.6 opacity."}}}},g={render:()=>{const[r,a]=d.useState(""),[t,s]=d.useState(""),c=o=>{s(`Searched for: "${o}"`)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{placeholder:"Search",value:r,onChange:a,onSubmit:c,variant:"secondary"}),t&&e.jsx("p",{style:{color:"#3b3b3a"},children:t})]})},parameters:{docs:{description:{story:"Secondary variant with interactive value tracking. Type text and click the icon or press Enter to submit."}}}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 0",color:"#3b3b3a"},children:"Primary"}),e.jsx(n,{placeholder:"Search products...",variant:"primary"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 0",color:"#3b3b3a"},children:"Secondary"}),e.jsx(n,{placeholder:"Find components...",variant:"secondary"})]})]}),parameters:{docs:{description:{story:"Both variants with custom placeholder text. Shows flexibility across different use cases."}}}},b={render:()=>{const r=j.useRef(null);return j.useEffect(()=>{const a=r.current?.querySelector("input");a&&a.focus()},[]),e.jsx("div",{ref:r,children:e.jsx(n,{placeholder:"Search",variant:"primary",autoFocus:!0})})},parameters:{docs:{description:{story:"Primary variant in focused state. Shows 4px orange focus ring around entire component wrapper."}}}},w={render:()=>{const r=j.useRef(null);return j.useEffect(()=>{const a=r.current?.querySelector("input");a&&a.focus()},[]),e.jsx("div",{ref:r,children:e.jsx(n,{placeholder:"Search",variant:"secondary",autoFocus:!0})})},parameters:{docs:{description:{story:"Secondary variant in focused state. Shows 4px orange focus ring around entire component wrapper."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    variant: "primary"
  },
  parameters: {
    docs: {
      description: {
        story: "Primary variant with search button on the right. Default state with placeholder text."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    value: "React components",
    variant: "primary"
  },
  parameters: {
    docs: {
      description: {
        story: "Primary variant with pre-filled value. Shows text input on left, red button on right."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    variant: "primary",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Primary variant disabled. Input and button are not interactive with 0.6 opacity."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState<string>("");
    const handleSubmit = (searchValue: string) => {
      setResult(\`Searched for: "\${searchValue}"\`);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>\r
        <SearchBar placeholder="Search" value={value} onChange={setValue} onSubmit={handleSubmit} variant="primary" />\r
        {result && <p style={{
        color: "#3b3b3a"
      }}>{result}</p>}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Primary variant with interactive value tracking. Type text and click the button or press Enter to submit."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    variant: "primary"
  },
  render: args => <SearchBar {...args} />,
  parameters: {
    docs: {
      description: {
        story: "Primary variant expands to fill available width. Button remains fixed width while input takes remaining space."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    variant: "secondary"
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary variant with inline search icon. Fixed 246px width with compact appearance."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    value: "Design tokens",
    variant: "secondary"
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary variant with pre-filled value. Shows text input with inline icon button."
      }
    }
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    variant: "secondary",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary variant disabled. Input and icon button are not interactive with 0.6 opacity."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState<string>("");
    const handleSubmit = (searchValue: string) => {
      setResult(\`Searched for: "\${searchValue}"\`);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>\r
        <SearchBar placeholder="Search" value={value} onChange={setValue} onSubmit={handleSubmit} variant="secondary" />\r
        {result && <p style={{
        color: "#3b3b3a"
      }}>{result}</p>}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary variant with interactive value tracking. Type text and click the icon or press Enter to submit."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>\r
      <div>\r
        <h3 style={{
        margin: "0 0 12px 0",
        color: "#3b3b3a"
      }}>Primary</h3>\r
        <SearchBar placeholder="Search products..." variant="primary" />\r
      </div>\r
      <div>\r
        <h3 style={{
        margin: "0 0 12px 0",
        color: "#3b3b3a"
      }}>Secondary</h3>\r
        <SearchBar placeholder="Find components..." variant="secondary" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Both variants with custom placeholder text. Shows flexibility across different use cases."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
      const input = ref.current?.querySelector("input") as HTMLInputElement;
      if (input) {
        input.focus();
      }
    }, []);
    return <div ref={ref}>\r
        <SearchBar placeholder="Search" variant="primary" autoFocus />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Primary variant in focused state. Shows 4px orange focus ring around entire component wrapper."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
      const input = ref.current?.querySelector("input") as HTMLInputElement;
      if (input) {
        input.focus();
      }
    }, []);
    return <div ref={ref}>\r
        <SearchBar placeholder="Search" variant="secondary" autoFocus />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary variant in focused state. Shows 4px orange focus ring around entire component wrapper."
      }
    }
  }
}`,...w.parameters?.docs?.source}}};const T=["PrimaryDefault","PrimaryWithValue","PrimaryDisabled","PrimaryInteractive","PrimaryFullWidth","SecondaryDefault","SecondaryWithValue","SecondaryDisabled","SecondaryInteractive","CustomPlaceholder","FocusedPrimaryState","FocusedSecondaryState"];export{x as CustomPlaceholder,b as FocusedPrimaryState,w as FocusedSecondaryState,p as PrimaryDefault,m as PrimaryDisabled,y as PrimaryFullWidth,h as PrimaryInteractive,u as PrimaryWithValue,v as SecondaryDefault,f as SecondaryDisabled,g as SecondaryInteractive,S as SecondaryWithValue,T as __namedExportsOrder,$ as default};
