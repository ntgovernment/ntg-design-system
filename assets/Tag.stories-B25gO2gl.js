import{T as i}from"./Tag-Byd2L-YF.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-orbKJz4h.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Components/Tag",component:i,parameters:{layout:"centered",docs:{description:{component:"A compact, theme-agnostic label component for categorization and region indication. Colors and styles are controlled by design tokens and adapt to NTG themes."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","subtle","darwin","darwin-ac","top-end","top-end-ac","east-arnhem","big-rivers","barkly","barkly-ac","central-australia","central-australia-ac"],description:"Tag variant (region or style). Variants with -ac suffix use accessible colors for improved WCAG contrast."},children:{control:"text",description:"Tag label text."},disabled:{control:"boolean",description:"Whether the tag is disabled."},className:{control:"text",description:"Additional CSS classes."}}},r={args:{variant:"default",children:"TAG LABEL"}},a={args:{variant:"subtle",children:"TAG LABEL"}},e={args:{variant:"darwin-ac",children:"DARWIN"},parameters:{docs:{description:{story:"Darwin region tag with accessible color variant (WCAG AA/AAA compliant). Uses #398600 for improved text contrast."}}}},t={args:{variant:"top-end-ac",children:"TOP END"},parameters:{docs:{description:{story:"Top End region tag with accessible color variant (WCAG AA/AAA compliant). Uses #00819e for improved text contrast."}}}},s={args:{variant:"east-arnhem",children:"EAST ARNHEM"}},n={args:{variant:"big-rivers",children:"BIG RIVERS"}},o={args:{variant:"barkly-ac",children:"BARKLY"},parameters:{docs:{description:{story:"Barkly region tag with accessible color variant (WCAG AA/AAA compliant). Uses #d2430f for improved text contrast."}}}},c={args:{variant:"central-australia-ac",children:"CENTRAL AUSTRALIA"},parameters:{docs:{description:{story:"Central Australia region tag with accessible color variant (WCAG AA/AAA compliant). Uses #e8114b for improved text contrast."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    children: "TAG LABEL"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "subtle",
    children: "TAG LABEL"
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "darwin-ac",
    children: "DARWIN"
  },
  parameters: {
    docs: {
      description: {
        story: "Darwin region tag with accessible color variant (WCAG AA/AAA compliant). Uses #398600 for improved text contrast."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "top-end-ac",
    children: "TOP END"
  },
  parameters: {
    docs: {
      description: {
        story: "Top End region tag with accessible color variant (WCAG AA/AAA compliant). Uses #00819e for improved text contrast."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "east-arnhem",
    children: "EAST ARNHEM"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "big-rivers",
    children: "BIG RIVERS"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "barkly-ac",
    children: "BARKLY"
  },
  parameters: {
    docs: {
      description: {
        story: "Barkly region tag with accessible color variant (WCAG AA/AAA compliant). Uses #d2430f for improved text contrast."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "central-australia-ac",
    children: "CENTRAL AUSTRALIA"
  },
  parameters: {
    docs: {
      description: {
        story: "Central Australia region tag with accessible color variant (WCAG AA/AAA compliant). Uses #e8114b for improved text contrast."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const g=["Default","Subtle","Darwin","TopEnd","EastArnhem","BigRivers","Barkly","CentralAustralia"];export{o as Barkly,n as BigRivers,c as CentralAustralia,e as Darwin,r as Default,s as EastArnhem,a as Subtle,t as TopEnd,g as __namedExportsOrder,m as default};
