import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as n}from"./SearchBar-BycYZ1nz.js";import{r as S,R as f}from"./iframe-DPy1hrv2.js";import"./Icon-D9ZymXa3.js";import"./preload-helper-PPVm8Dsz.js";const E={title:"Components/SearchBar",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the search input"},value:{control:"text",description:"Controlled value of the search input"},variant:{control:"select",options:["primary","secondary"],description:"Search bar variant: primary (button on right) or secondary (inline icon)"},disabled:{control:"boolean",description:"Whether the search bar is disabled"}}},s={args:{placeholder:"Search",variant:"primary"},parameters:{docs:{description:{story:"Primary variant with search button on the right. Default state with placeholder text."}}}},o={args:{placeholder:"Search",value:"React components",variant:"primary"},parameters:{docs:{description:{story:"Primary variant with pre-filled value. Shows text input on left, red button on right."}}}},i={args:{placeholder:"Search",variant:"primary",disabled:!0},parameters:{docs:{description:{story:"Primary variant disabled. Input and button are not interactive with 0.6 opacity."}}}},c={render:()=>{const[r,a]=S.useState(""),[t,x]=S.useState(""),g=b=>{x(`Searched for: "${b}"`)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{placeholder:"Search",value:r,onChange:a,onSubmit:g,variant:"primary"}),t&&e.jsx("p",{style:{color:"#3b3b3a"},children:t})]})},parameters:{docs:{description:{story:"Primary variant with interactive value tracking. Type text and click the button or press Enter to submit."}}}},d={args:{placeholder:"Search",variant:"primary"},render:r=>e.jsx(n,{...r}),parameters:{docs:{description:{story:"Primary variant expands to fill available width. Button remains fixed width while input takes remaining space."}}}},l={args:{placeholder:"Search",variant:"secondary"},parameters:{docs:{description:{story:"Secondary variant with inline search icon. Fixed 246px width with compact appearance."}}}},p={args:{placeholder:"Search",value:"Design tokens",variant:"secondary"},parameters:{docs:{description:{story:"Secondary variant with pre-filled value. Shows text input with inline icon button."}}}},u={args:{placeholder:"Search",variant:"secondary",disabled:!0},parameters:{docs:{description:{story:"Secondary variant disabled. Input and icon button are not interactive with 0.6 opacity."}}}},h={render:()=>{const[r,a]=S.useState(""),[t,x]=S.useState(""),g=b=>{x(`Searched for: "${b}"`)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{placeholder:"Search",value:r,onChange:a,onSubmit:g,variant:"secondary"}),t&&e.jsx("p",{style:{color:"#3b3b3a"},children:t})]})},parameters:{docs:{description:{story:"Secondary variant with interactive value tracking. Type text and click the icon or press Enter to submit."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 0",color:"#3b3b3a"},children:"Primary"}),e.jsx(n,{placeholder:"Search products...",variant:"primary"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 0",color:"#3b3b3a"},children:"Secondary"}),e.jsx(n,{placeholder:"Find components...",variant:"secondary"})]})]}),parameters:{docs:{description:{story:"Both variants with custom placeholder text. Shows flexibility across different use cases."}}}},y={render:()=>{const r=f.useRef(null);return f.useEffect(()=>{const a=r.current?.querySelector("input");a&&a.focus()},[]),e.jsx("div",{ref:r,children:e.jsx(n,{placeholder:"Search",variant:"primary",autoFocus:!0})})},parameters:{docs:{description:{story:"Primary variant in focused state. Shows 4px orange focus ring around entire component wrapper."}}}},v={render:()=>{const r=f.useRef(null);return f.useEffect(()=>{const a=r.current?.querySelector("input");a&&a.focus()},[]),e.jsx("div",{ref:r,children:e.jsx(n,{placeholder:"Search",variant:"secondary",autoFocus:!0})})},parameters:{docs:{description:{story:"Secondary variant in focused state. Shows 4px orange focus ring around entire component wrapper."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const F=["PrimaryDefault","PrimaryWithValue","PrimaryDisabled","PrimaryInteractive","PrimaryFullWidth","SecondaryDefault","SecondaryWithValue","SecondaryDisabled","SecondaryInteractive","CustomPlaceholder","FocusedPrimaryState","FocusedSecondaryState"];export{m as CustomPlaceholder,y as FocusedPrimaryState,v as FocusedSecondaryState,s as PrimaryDefault,i as PrimaryDisabled,d as PrimaryFullWidth,c as PrimaryInteractive,o as PrimaryWithValue,l as SecondaryDefault,u as SecondaryDisabled,h as SecondaryInteractive,p as SecondaryWithValue,F as __namedExportsOrder,E as default};
