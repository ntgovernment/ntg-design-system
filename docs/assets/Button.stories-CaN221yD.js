import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css               */import"./index-yBjzXJbu.js";const I=({variant:r="primary",size:s="large",loading:L=!1,disabled:v=!1,children:N,className:O,iconLeft:f,iconRight:y,loadingIcon:R,...S})=>{const e="ntgds-btn",T=[e,`${e}--${r}`,s==="small"&&`${e}--small`,L&&`${e}--loading`,(f||y)&&`${e}--with-icon`,O].filter(Boolean).join(" "),w=n.jsx("span",{className:`${e}__loading-spinner`,"aria-hidden":"true"}),_=()=>L?R||w:n.jsxs(n.Fragment,{children:[f&&n.jsx("span",{className:`${e}__icon ${e}__icon--left`,children:f}),N,y&&n.jsx("span",{className:`${e}__icon ${e}__icon--right`,children:y})]});return n.jsx("button",{className:T,disabled:v,...S,children:_()})};I.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"large" | "small"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'}]},description:"",defaultValue:{value:'"large"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconLeft:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},loadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const t=r=>{if(r)return n.jsx("i",{className:r})},a={none:"","square-check":"fa-regular fa-square-check",save:"fas fa-save",download:"fas fa-download","arrow-right":"fas fa-arrow-right",plus:"fas fa-plus",check:"fas fa-check"},q={title:"Components/Button",component:I,parameters:{layout:"centered"},args:{children:"Button",variant:"primary",size:"large"},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"The visual style of the button."},size:{control:"select",options:["large","small"],description:"The size of the button."},loading:{control:"boolean",description:"Show a loading indicator."},disabled:{control:"boolean",description:"Disable the button."},iconLeft:{control:{type:"select"},options:Object.keys(a),description:"Icon to display on the left side of the button text.",mapping:Object.fromEntries(Object.entries(a).map(([r,s])=>[r,t(s)]))},iconRight:{control:{type:"select"},options:Object.keys(a),description:"Icon to display on the right side of the button text.",mapping:Object.fromEntries(Object.entries(a).map(([r,s])=>[r,t(s)]))},loadingIcon:{table:{disable:!0},description:"Uses default loading spinner (not customizable in docs)."}},tags:["autodocs"]},o={args:{variant:"primary",children:"Label"}},i={args:{variant:"secondary",children:"Label"}},c={args:{variant:"tertiary",children:"Label"}},l={args:{size:"small",children:"Label"}},d={args:{size:"large",children:"Label"}},p={args:{loading:!0,children:"Loading"},argTypes:{iconLeft:{table:{disable:!0}},iconRight:{table:{disable:!0}},loadingIcon:{table:{disable:!0}}}},m={args:{disabled:!0,children:"Label"}},u={args:{variant:"primary",children:"Label",iconLeft:t(a.save)}},g={args:{variant:"primary",children:"Label",iconRight:t(a["arrow-right"])}},h={args:{variant:"secondary",children:"Label",iconLeft:t(a.download),iconRight:t(a["arrow-right"])}},b={args:{variant:"primary",size:"small",children:"Label",iconLeft:t(a.download)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Label"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Label"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Label",
    iconLeft: createIcon(ICON_OPTIONS.save)
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const $=["Primary","Secondary","Tertiary","Small","Large","Loading","Disabled","WithLeftIcon","WithRightIcon","WithBothIcons","SmallWithIcon"];export{m as Disabled,d as Large,p as Loading,o as Primary,i as Secondary,l as Small,b as SmallWithIcon,c as Tertiary,h as WithBothIcons,u as WithLeftIcon,g as WithRightIcon,$ as __namedExportsOrder,q as default};
