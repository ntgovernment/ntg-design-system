import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-orbKJz4h.js";import"./preload-helper-PPVm8Dsz.js";const o=({children:n})=>e.jsx("div",{style:{padding:20,maxWidth:480},children:n}),x={title:"Components/Scrollbar",component:o,parameters:{layout:"padded"},tags:["autodocs"]},a={render:()=>e.jsxs(o,{children:[e.jsx("label",{htmlFor:"scrollableTextarea",style:{display:"block",marginBottom:8},children:"Scrollable Textarea"}),e.jsx("textarea",{id:"scrollableTextarea",className:"ntgds-scrollable",style:{width:"100%",height:140,padding:12,boxSizing:"border-box"},defaultValue:Array.from({length:30},(n,r)=>`Line ${r+1}`).join(`
`)})]})},t={render:()=>e.jsxs(o,{children:[e.jsx("div",{style:{marginBottom:8},children:"Scrollable List (max-height: 200px)"}),e.jsx("div",{className:"ntgds-scrollable",style:{maxHeight:200,border:"1px solid var(--clr-stroke-subtle, #d4d4d2)",padding:8},children:e.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:Array.from({length:50}).map((n,r)=>e.jsxs("li",{style:{padding:"8px 6px",borderBottom:"1px solid rgba(0,0,0,0.04)"},children:["Item ",r+1]},r))})})]})},l={render:()=>{const n=()=>{const[r,i]=p.useState(!0);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>i(s=>!s),style:{marginBottom:8},children:"Toggle Panel"}),r&&e.jsx("div",{style:{position:"relative",width:280},children:e.jsx("div",{className:"ntgds-scrollable",style:{maxHeight:160,border:"1px solid var(--clr-stroke-subtle, #d4d4d2)",background:"var(--clr-surface-default, #fff)",padding:6,boxSizing:"border-box"},children:e.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:Array.from({length:30}).map((s,d)=>e.jsxs("li",{style:{padding:"8px 6px"},children:["Option ",d+1]},d))})})})]})};return e.jsx(o,{children:e.jsx(n,{})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper>\r
      <label htmlFor="scrollableTextarea" style={{
      display: "block",
      marginBottom: 8
    }}>\r
        Scrollable Textarea\r
      </label>\r
      <textarea id="scrollableTextarea" className="ntgds-scrollable" style={{
      width: "100%",
      height: 140,
      padding: 12,
      boxSizing: "border-box"
    }} defaultValue={Array.from({
      length: 30
    }, (_, i) => \`Line \${i + 1}\`).join("\\n")} />\r
    </Wrapper>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper>\r
      <div style={{
      marginBottom: 8
    }}>Scrollable List (max-height: 200px)</div>\r
      <div className="ntgds-scrollable" style={{
      maxHeight: 200,
      border: "1px solid var(--clr-stroke-subtle, #d4d4d2)",
      padding: 8
    }}>\r
        <ul style={{
        margin: 0,
        padding: 0,
        listStyle: "none"
      }}>\r
          {Array.from({
          length: 50
        }).map((_, i) => <li key={i} style={{
          padding: "8px 6px",
          borderBottom: "1px solid rgba(0,0,0,0.04)"
        }}>\r
              Item {i + 1}\r
            </li>)}\r
        </ul>\r
      </div>\r
    </Wrapper>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const DropdownPanelDemo: React.FC = () => {
      const [open, setOpen] = useState(true);
      return <div>\r
          <button onClick={() => setOpen(o => !o)} style={{
          marginBottom: 8
        }}>\r
            Toggle Panel\r
          </button>\r
          {open && <div style={{
          position: "relative",
          width: 280
        }}>\r
              <div className="ntgds-scrollable" style={{
            maxHeight: 160,
            border: "1px solid var(--clr-stroke-subtle, #d4d4d2)",
            background: "var(--clr-surface-default, #fff)",
            padding: 6,
            boxSizing: "border-box"
          }}>\r
                <ul style={{
              margin: 0,
              padding: 0,
              listStyle: "none"
            }}>\r
                  {Array.from({
                length: 30
              }).map((_, i) => <li key={i} style={{
                padding: "8px 6px"
              }}>\r
                      Option {i + 1}\r
                    </li>)}\r
                </ul>\r
              </div>\r
            </div>}\r
        </div>;
    };
    return <Wrapper>\r
        <DropdownPanelDemo />\r
      </Wrapper>;
  }
}`,...l.parameters?.docs?.source}}};const b=["Textarea","LongList","DropdownPanel"];export{l as DropdownPanel,t as LongList,a as Textarea,b as __namedExportsOrder,x as default};
