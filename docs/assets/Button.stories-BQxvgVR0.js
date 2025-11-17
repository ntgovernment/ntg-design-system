import{j as n}from"./jsx-runtime-u17CrQMm.js";import"./iframe-_tXtZ0Yf.js";import"./preload-helper-PPVm8Dsz.js";const I=({variant:a="primary",size:o="large",loading:L=!1,disabled:v=!1,children:S,className:_,iconLeft:f,iconRight:y,loadingIcon:O,...N})=>{const e="ntgds-btn",j=[e,`${e}--${a}`,o==="small"&&`${e}--small`,L&&`${e}--loading`,(f||y)&&`${e}--with-icon`,_].filter(Boolean).join(" "),w=n.jsx("span",{className:`${e}__loading-spinner`,"aria-hidden":"true"}),R=()=>L?O||w:n.jsxs(n.Fragment,{children:[f&&n.jsx("span",{className:`${e}__icon ${e}__icon--left`,children:f}),S,y&&n.jsx("span",{className:`${e}__icon ${e}__icon--right`,children:y})]});return n.jsx("button",{className:j,disabled:v,...N,children:R()})};try{I.displayName="Button",I.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"Visual style variant of the button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},size:{defaultValue:{value:"large"},description:"Size of the button",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'}]}},disabled:{defaultValue:{value:"false"},description:"Whether the button is disabled",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Show loading state",name:"loading",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Button content",name:"children",required:!0,type:{name:"ReactNode"}},iconLeft:{defaultValue:null,description:"Icon to display on the left",name:"iconLeft",required:!1,type:{name:"ReactNode"}},iconRight:{defaultValue:null,description:"Icon to display on the right",name:"iconRight",required:!1,type:{name:"ReactNode"}},loadingIcon:{defaultValue:null,description:"Custom loading icon (optional)",name:"loadingIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const t=a=>{if(a)return n.jsx("i",{className:a})},r={none:"","square-check":"fa-regular fa-square-check",save:"fas fa-save",download:"fas fa-download","arrow-right":"fas fa-arrow-right",plus:"fas fa-plus",check:"fas fa-check"},q={title:"Components/Button",component:I,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"The visual style of the button."},size:{control:"select",options:["large","small"],description:"The size of the button."},loading:{control:"boolean",description:"Show a loading indicator."},disabled:{control:"boolean",description:"Disable the button."},iconLeft:{control:{type:"select"},options:Object.keys(r),description:"Icon to display on the left side of the button text.",mapping:Object.fromEntries(Object.entries(r).map(([a,o])=>[a,t(o)]))},iconRight:{control:{type:"select"},options:Object.keys(r),description:"Icon to display on the right side of the button text.",mapping:Object.fromEntries(Object.entries(r).map(([a,o])=>[a,t(o)]))},loadingIcon:{table:{disable:!0},description:"Uses default loading spinner (not customizable in docs)."}}},s={args:{variant:"primary",children:"Label"}},i={args:{variant:"secondary",children:"Label"}},c={args:{variant:"tertiary",children:"Label"}},l={args:{size:"small",children:"Label"}},d={args:{size:"large",children:"Label"}},p={args:{loading:!0,children:"Loading"},argTypes:{iconLeft:{table:{disable:!0}},iconRight:{table:{disable:!0}},loadingIcon:{table:{disable:!0}}}},u={args:{disabled:!0,children:"Label"}},m={args:{variant:"primary",children:"Label",iconLeft:t(r.save)}},g={args:{variant:"primary",children:"Label",iconRight:t(r["arrow-right"])}},h={args:{variant:"secondary",children:"Label",iconLeft:t(r.download),iconRight:t(r["arrow-right"])}},b={args:{variant:"primary",size:"small",children:"Label",iconLeft:t(r.download)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Label"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Label"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "tertiary",
    children: "Label"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    children: "Label"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: "Label"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Label"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Label",
    iconLeft: createIcon(ICON_OPTIONS.save)
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Label",
    iconRight: createIcon(ICON_OPTIONS["arrow-right"])
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Label",
    iconLeft: createIcon(ICON_OPTIONS.download),
    iconRight: createIcon(ICON_OPTIONS["arrow-right"])
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "small",
    children: "Label",
    iconLeft: createIcon(ICON_OPTIONS.download)
  }
}`,...b.parameters?.docs?.source}}};const $=["Primary","Secondary","Tertiary","Small","Large","Loading","Disabled","WithLeftIcon","WithRightIcon","WithBothIcons","SmallWithIcon"];export{u as Disabled,d as Large,p as Loading,s as Primary,i as Secondary,l as Small,b as SmallWithIcon,c as Tertiary,h as WithBothIcons,m as WithLeftIcon,g as WithRightIcon,$ as __namedExportsOrder,q as default};
