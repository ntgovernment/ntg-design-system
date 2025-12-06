import{B as h}from"./Button-Dy4ItXit.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-CqofpB-E.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-D9ZymXa3.js";const a=["none","floppy-disk","download","arrow-right","plus","check","square-check","circle-info","circle-check","triangle-exclamation","circle-xmark"],S={title:"Components/Button",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"The visual style of the button."},size:{control:"select",options:["large","small"],description:"The size of the button."},loading:{control:"boolean",description:"Show a loading indicator."},disabled:{control:"boolean",description:"Disable the button."},iconLeft:{control:{type:"select"},options:a,description:"Icon name (Font Awesome) for the left side. Leave 'none' for no icon.",mapping:a.reduce((e,r)=>(e[r]=r==="none"?void 0:r,e),{})},iconRight:{control:{type:"select"},options:a,description:"Icon name (Font Awesome) for the right side. Leave 'none' for no icon.",mapping:a.reduce((e,r)=>(e[r]=r==="none"?void 0:r,e),{})},iconColor:{control:{type:"select"},options:["default","primary","secondary","tertiary","inverse"],description:"Color variant applied to any rendered icon."},padLeft:{control:"boolean",description:"Remove left padding (tertiary only)"},loadingIcon:{table:{disable:!0},description:"Uses default loading spinner (not customizable in docs)."}}},o={args:{variant:"primary",children:"Label"}},n={args:{variant:"secondary",children:"Label"}},t={args:{variant:"tertiary",children:"Label"}},i={args:{variant:"tertiary",children:"Find out more",iconRight:"arrow-right",padLeft:!1}},s={args:{size:"small",children:"Label"}},c={args:{size:"large",children:"Label"}},l={args:{loading:!0,children:"Loading"},argTypes:{iconLeft:{table:{disable:!0}},iconRight:{table:{disable:!0}},loadingIcon:{table:{disable:!0}}}},d={args:{disabled:!0,children:"Label"}},p={args:{variant:"primary",children:"Label",iconLeft:"floppy-disk",iconColor:"inverse"}},m={args:{variant:"primary",children:"Label",iconRight:"arrow-right",iconColor:"inverse"}},g={args:{variant:"secondary",children:"Label",iconLeft:"download",iconRight:"arrow-right",iconColor:"default"}},u={args:{variant:"primary",size:"small",children:"Label",iconLeft:"download",iconColor:"inverse"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Label"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Label"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "tertiary",
    children: "Label"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "tertiary",
    children: "Find out more",
    iconRight: "arrow-right",
    padLeft: false
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    children: "Label"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: "Label"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: "Loading"
  },
  argTypes: {
    iconLeft: {
      table: {
        disable: true
      }
    },
    iconRight: {
      table: {
        disable: true
      }
    },
    loadingIcon: {
      table: {
        disable: true
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Label"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Label",
    iconLeft: "floppy-disk",
    iconColor: "inverse"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Label",
    iconRight: "arrow-right",
    iconColor: "inverse"
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Label",
    iconLeft: "download",
    iconRight: "arrow-right",
    iconColor: "default"
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "small",
    children: "Label",
    iconLeft: "download",
    iconColor: "inverse"
  }
}`,...u.parameters?.docs?.source}}};const w=["Primary","Secondary","Tertiary","TertiaryNoLeftPad","Small","Large","Loading","Disabled","WithLeftIcon","WithRightIcon","WithBothIcons","SmallWithIcon"];export{d as Disabled,c as Large,l as Loading,o as Primary,n as Secondary,s as Small,u as SmallWithIcon,t as Tertiary,i as TertiaryNoLeftPad,g as WithBothIcons,p as WithLeftIcon,m as WithRightIcon,w as __namedExportsOrder,S as default};
