import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p,R as a}from"./iframe-orbKJz4h.js";import{B as C}from"./Button-CklBq9Au.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-D9ZymXa3.js";const v=p.createContext(null),T=()=>{const t=p.useContext(v);if(!t)throw new Error("Accordion compound components must be used within an Accordion");return t},s=({children:t,mode:l="multiple",defaultOpenIndices:o=[],showToggleAll:f=!1,className:I=""})=>{const[m,d]=p.useState(()=>new Set(o.map(String))),h=p.useCallback(r=>{d(c=>{const i=new Set(c);return i.has(r)?i.delete(r):(l==="single"&&i.clear(),i.add(r)),i})},[l]),g=p.useCallback(()=>{const c=a.Children.toArray(t).map((i,w)=>String(w));d(i=>i.size===c.length?new Set:new Set(c))},[t]),b=a.Children.toArray(t),S=m.size===b.length&&b.length>0;return e.jsx(v.Provider,{value:{openItems:m,toggleItem:h,mode:l},children:e.jsxs("div",{className:`ntgds-accordion ${I}`.trim(),children:[f&&b.length>0&&e.jsx("div",{className:"ntgds-accordion__header",children:e.jsx(C,{variant:"tertiary",onClick:g,children:S?"Close all":"Open all"})}),e.jsx("div",{className:"ntgds-accordion__items",children:a.Children.map(t,(r,c)=>a.isValidElement(r)&&r.type===n?a.cloneElement(r,{index:String(c)}):r)})]})})},n=({title:t,children:l,index:o="0",className:f=""})=>{const{openItems:I,toggleItem:m}=T(),d=I.has(o),h=`accordion-panel-${o}`,g=`accordion-trigger-${o}`;return e.jsxs("div",{className:`ntgds-accordion-item ${f}`.trim(),children:[e.jsxs("button",{id:g,className:"ntgds-accordion-item__trigger","aria-expanded":d,"aria-controls":h,onClick:()=>m(o),type:"button",children:[e.jsx("span",{className:"ntgds-accordion-item__title",children:t}),e.jsx("span",{className:"ntgds-accordion-item__icon","aria-hidden":"true",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7 10L12 15L17 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsx("div",{id:h,className:"ntgds-accordion-item__panel",role:"region","aria-labelledby":g,hidden:!d,children:e.jsx("div",{className:"ntgds-accordion-item__content",children:l})})]})};try{s.displayName="Accordion",s.__docgenInfo={description:"",displayName:"Accordion",props:{mode:{defaultValue:{value:"multiple"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"multiple"'},{value:'"single"'}]}},defaultOpenIndices:{defaultValue:{value:"[]"},description:"",name:"defaultOpenIndices",required:!1,type:{name:"number[]"}},showToggleAll:{defaultValue:{value:"false"},description:"",name:"showToggleAll",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{n.displayName="AccordionItem",n.__docgenInfo={description:"",displayName:"AccordionItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},index:{defaultValue:{value:"0"},description:"",name:"index",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const D={title:"Components/Accordion",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{mode:{control:"radio",options:["single","multiple"],description:"Controls whether one or multiple items can be open at once"},showToggleAll:{control:"boolean",description:'Shows "Open all" / "Close all" button when true'},defaultOpenIndices:{control:"object",description:"Array of indices that should be open by default"}}},u={render:()=>e.jsxs(s,{children:[e.jsx(n,{title:"What is the NTG Design System?",children:e.jsx("p",{children:"The NTG Design System is a comprehensive collection of reusable components, design tokens, and guidelines that help teams build consistent and accessible user interfaces."})}),e.jsx(n,{title:"How do I get started?",children:e.jsx("p",{children:"To get started, install the design system package using npm or yarn, then import the components you need into your React application."})}),e.jsx(n,{title:"Is it accessible?",children:e.jsx("p",{children:"Yes! All components are built with accessibility in mind, following WCAG 2.1 AA guidelines. This includes proper ARIA attributes, keyboard navigation, and focus management."})})]})},x={args:{mode:"single"},render:t=>e.jsxs(s,{...t,children:[e.jsx(n,{title:"First Item",children:e.jsx("p",{children:'When mode is set to "single", only one accordion item can be open at a time. Opening a new item will automatically close the previously open item.'})}),e.jsx(n,{title:"Second Item",children:e.jsx("p",{children:"This is the content of the second item. Try opening this to see the first item close."})}),e.jsx(n,{title:"Third Item",children:e.jsx("p",{children:"And this is the third item's content."})})]})},y={args:{showToggleAll:!0,mode:"multiple"},render:t=>e.jsxs(s,{...t,children:[e.jsx(n,{title:"Design Principles",children:e.jsx("p",{children:"Our design principles emphasize clarity, consistency, and accessibility. Every decision we make is guided by these core values."})}),e.jsx(n,{title:"Component Library",children:e.jsx("p",{children:"The component library includes buttons, forms, navigation elements, and more. All components are fully customizable through design tokens."})}),e.jsx(n,{title:"Design Tokens",children:e.jsx("p",{children:"Design tokens are the design decisions that define the visual characteristics of your design system, such as colors, spacing, and typography."})}),e.jsx(n,{title:"Documentation",children:e.jsx("p",{children:"Comprehensive documentation is available for each component, including usage examples, API references, and accessibility guidelines."})})]})},A={args:{defaultOpenIndices:[0,2]},render:t=>e.jsxs(s,{...t,children:[e.jsx(n,{title:"Installation",children:e.jsxs("p",{children:["Install the design system using npm:",e.jsx("br",{}),e.jsx("code",{children:"npm install @ntg/design-system"})]})}),e.jsx(n,{title:"Configuration",children:e.jsx("p",{children:"Import the CSS and components in your application entry point."})}),e.jsx(n,{title:"Usage",children:e.jsxs("p",{children:["Start using components by importing them from the package:",e.jsx("br",{}),e.jsxs("code",{children:["import ","{ Button }"," from '@ntg/design-system'"]})]})})]})},j={render:()=>e.jsxs(s,{showToggleAll:!0,children:[e.jsxs(n,{title:"Product Features",children:[e.jsx("h4",{style:{marginTop:0},children:"Key Features:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Responsive design out of the box"}),e.jsx("li",{children:"Themeable with design tokens"}),e.jsx("li",{children:"TypeScript support included"}),e.jsx("li",{children:"Comprehensive documentation"})]})]}),e.jsx(n,{title:"Technical Specifications",children:e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Framework:"})," React 19+"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Styling:"})," CSS Custom Properties"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Build:"})," Vite + PostCSS"]})]})}),e.jsx(n,{title:"Browser Support",children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"1px solid #e6e5e3"},children:[e.jsx("th",{style:{textAlign:"left",padding:"8px"},children:"Browser"}),e.jsx("th",{style:{textAlign:"left",padding:"8px"},children:"Minimum Version"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Chrome"}),e.jsx("td",{style:{padding:"8px"},children:"90+"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Firefox"}),e.jsx("td",{style:{padding:"8px"},children:"88+"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Safari"}),e.jsx("td",{style:{padding:"8px"},children:"14+"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px"},children:"Edge"}),e.jsx("td",{style:{padding:"8px"},children:"90+"})]})]})]})})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion>\r
      <AccordionItem title="What is the NTG Design System?">\r
        <p>\r
          The NTG Design System is a comprehensive collection of reusable\r
          components, design tokens, and guidelines that help teams build\r
          consistent and accessible user interfaces.\r
        </p>\r
      </AccordionItem>\r
      <AccordionItem title="How do I get started?">\r
        <p>\r
          To get started, install the design system package using npm or yarn,\r
          then import the components you need into your React application.\r
        </p>\r
      </AccordionItem>\r
      <AccordionItem title="Is it accessible?">\r
        <p>\r
          Yes! All components are built with accessibility in mind, following\r
          WCAG 2.1 AA guidelines. This includes proper ARIA attributes, keyboard\r
          navigation, and focus management.\r
        </p>\r
      </AccordionItem>\r
    </Accordion>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "single"
  },
  render: args => <Accordion {...args}>\r
      <AccordionItem title="First Item">\r
        <p>\r
          When mode is set to "single", only one accordion item can be open at a\r
          time. Opening a new item will automatically close the previously open\r
          item.\r
        </p>\r
      </AccordionItem>\r
      <AccordionItem title="Second Item">\r
        <p>\r
          This is the content of the second item. Try opening this to see the\r
          first item close.\r
        </p>\r
      </AccordionItem>\r
      <AccordionItem title="Third Item">\r
        <p>And this is the third item's content.</p>\r
      </AccordionItem>\r
    </Accordion>
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    showToggleAll: true,
    mode: "multiple"
  },
  render: args => <Accordion {...args}>\r
      <AccordionItem title="Design Principles">\r
        <p>\r
          Our design principles emphasize clarity, consistency, and\r
          accessibility. Every decision we make is guided by these core values.\r
        </p>\r
      </AccordionItem>\r
      <AccordionItem title="Component Library">\r
        <p>\r
          The component library includes buttons, forms, navigation elements,\r
          and more. All components are fully customizable through design tokens.\r
        </p>\r
      </AccordionItem>\r
      <AccordionItem title="Design Tokens">\r
        <p>\r
          Design tokens are the design decisions that define the visual\r
          characteristics of your design system, such as colors, spacing, and\r
          typography.\r
        </p>\r
      </AccordionItem>\r
      <AccordionItem title="Documentation">\r
        <p>\r
          Comprehensive documentation is available for each component, including\r
          usage examples, API references, and accessibility guidelines.\r
        </p>\r
      </AccordionItem>\r
    </Accordion>
}`,...y.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpenIndices: [0, 2]
  },
  render: args => <Accordion {...args}>\r
      <AccordionItem title="Installation">\r
        <p>\r
          Install the design system using npm:\r
          <br />\r
          <code>npm install @ntg/design-system</code>\r
        </p>\r
      </AccordionItem>\r
      <AccordionItem title="Configuration">\r
        <p>Import the CSS and components in your application entry point.</p>\r
      </AccordionItem>\r
      <AccordionItem title="Usage">\r
        <p>\r
          Start using components by importing them from the package:\r
          <br />\r
          <code>import {"{ Button }"} from '@ntg/design-system'</code>\r
        </p>\r
      </AccordionItem>\r
    </Accordion>
}`,...A.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion showToggleAll>\r
      <AccordionItem title="Product Features">\r
        <h4 style={{
        marginTop: 0
      }}>Key Features:</h4>\r
        <ul>\r
          <li>Responsive design out of the box</li>\r
          <li>Themeable with design tokens</li>\r
          <li>TypeScript support included</li>\r
          <li>Comprehensive documentation</li>\r
        </ul>\r
      </AccordionItem>\r
      <AccordionItem title="Technical Specifications">\r
        <div>\r
          <p>\r
            <strong>Framework:</strong> React 19+\r
          </p>\r
          <p>\r
            <strong>Styling:</strong> CSS Custom Properties\r
          </p>\r
          <p>\r
            <strong>Build:</strong> Vite + PostCSS\r
          </p>\r
        </div>\r
      </AccordionItem>\r
      <AccordionItem title="Browser Support">\r
        <table style={{
        width: "100%",
        borderCollapse: "collapse"
      }}>\r
          <thead>\r
            <tr style={{
            borderBottom: "1px solid #e6e5e3"
          }}>\r
              <th style={{
              textAlign: "left",
              padding: "8px"
            }}>Browser</th>\r
              <th style={{
              textAlign: "left",
              padding: "8px"
            }}>\r
                Minimum Version\r
              </th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr>\r
              <td style={{
              padding: "8px"
            }}>Chrome</td>\r
              <td style={{
              padding: "8px"
            }}>90+</td>\r
            </tr>\r
            <tr>\r
              <td style={{
              padding: "8px"
            }}>Firefox</td>\r
              <td style={{
              padding: "8px"
            }}>88+</td>\r
            </tr>\r
            <tr>\r
              <td style={{
              padding: "8px"
            }}>Safari</td>\r
              <td style={{
              padding: "8px"
            }}>14+</td>\r
            </tr>\r
            <tr>\r
              <td style={{
              padding: "8px"
            }}>Edge</td>\r
              <td style={{
              padding: "8px"
            }}>90+</td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </AccordionItem>\r
    </Accordion>
}`,...j.parameters?.docs?.source}}};const R=["Basic","SingleMode","WithToggleAll","DefaultOpen","RichContent"];export{u as Basic,A as DefaultOpen,j as RichContent,x as SingleMode,y as WithToggleAll,R as __namedExportsOrder,D as default};
