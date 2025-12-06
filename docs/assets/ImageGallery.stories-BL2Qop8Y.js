import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as o,R as L}from"./iframe-CqofpB-E.js";import{I as M}from"./Image-BcBNelRs.js";import"./preload-helper-PPVm8Dsz.js";const k=({images:s,imagesPerRow:i=4,gap:l=16,imageWidth:u=320,imageHeight:h=240,className:P=""})=>{const[T,W]=o.useState(!1),[$,b]=o.useState(0),[d,N]=o.useState(0),g=L.useRef(null);o.useEffect(()=>{const e=()=>{g.current&&N(g.current.offsetWidth)};e();const r=new ResizeObserver(e);return g.current&&r.observe(g.current),()=>r.disconnect()},[]);const A=o.useCallback(e=>{b(e),W(!0)},[]),F=o.useCallback(()=>{W(!1)},[]),E=o.useCallback(()=>{b(e=>e===0?s.length-1:e-1)},[s.length]),O=o.useCallback(()=>{b(e=>e===s.length-1?0:e+1)},[s.length]),c="ntgds-image-gallery",q=[c,P].filter(Boolean).join(" "),p=(()=>{if(d===0)return i;const e=320,r=(i-1)*l,t=e*i+r;if(d<t){const z=d;let n=i;for(;n>1;){const y=(n-1)*l;if((z-y)/n>=e)break;n--}return n}return i})(),G=[];for(let e=0;e<s.length;e+=p)G.push(s.slice(e,e+p));const D=(()=>{if(d===0)return u;const e=(p-1)*l,t=(d-e)/p;return Math.max(t,u)})(),B=h/u,V=D*B;return a.jsxs(a.Fragment,{children:[a.jsx("div",{ref:g,className:q,style:{display:"flex",flexDirection:"column",gap:`${l}px`,width:"100%"},children:G.map((e,r)=>a.jsx("div",{style:{display:"flex",flexDirection:"row",gap:`${l}px`,alignItems:"flex-end",flexWrap:"wrap"},children:e.map((t,z)=>{const n=r*p+z,y=t.width||D,C=t.height||V;return a.jsxs("button",{className:`${c}__button`,onClick:()=>A(n),"aria-label":`Open image ${n+1}: ${t.alt}`,style:{width:`${y}px`,height:`${C}px`,padding:0,border:"none",background:"none",cursor:"pointer",overflow:"hidden",position:"relative"},children:[a.jsx(M,{src:t.src,srcWebp:t.srcWebp,alt:t.alt,srcSet:t.srcSet,srcSetWebp:t.srcSetWebp,loading:"lazy",width:y,height:C,className:`${c}__thumb`}),(t.title||t.description)&&a.jsxs("div",{className:`${c}__overlay`,children:[t.title&&a.jsx("div",{className:`${c}__overlay-title`,children:t.title}),t.description&&a.jsx("div",{className:`${c}__overlay-description`,children:t.description})]})]},n)})},r))}),T&&a.jsx(ImageGalleryLightbox,{images:s,selectedIndex:$,onClose:F,onPrev:E,onNext:O,onSelectIndex:b})]})};try{k.displayName="ImageGallery",k.__docgenInfo={description:"",displayName:"ImageGallery",props:{images:{defaultValue:null,description:"Array of images to display in gallery and lightbox",name:"images",required:!0,type:{name:"GalleryImage[]"}},imagesPerRow:{defaultValue:{value:"4"},description:"Number of images per row (responsive, default: 4). Images won't shrink below 320px except on small breakpoints.",name:"imagesPerRow",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"16"},description:"Gap between grid items in pixels",name:"gap",required:!1,type:{name:"number"}},imageWidth:{defaultValue:{value:"320"},description:"Default width for gallery images in pixels (default: 320)",name:"imageWidth",required:!1,type:{name:"number"}},imageHeight:{defaultValue:{value:"240"},description:"Default height for gallery images in pixels (default: 240)",name:"imageHeight",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const m=[{src:"/demo-images/gallery-1.webp",alt:"Scenic landscape with gradient sky and green fields",title:"Mountain Serenity",description:"Peaceful landscape with vibrant color gradient",width:320,height:240},{src:"/demo-images/gallery-2.webp",alt:"Urban scene with gray tones and industrial elements",title:"Urban Exploration",description:"Modern urban landscape in cool tones",width:320,height:240},{src:"/demo-images/gallery-3.webp",alt:"Natural scenery with green and earth tones",title:"Nature's Colors",description:"Beautiful nature scene with earthy palette",width:320,height:240},{src:"/demo-images/gallery-4.webp",alt:"Ocean-inspired gradient with blue tones",title:"Ocean Waves",description:"Serene ocean landscape in deep blues",width:320,height:240},{src:"/demo-images/gallery-5.webp",alt:"Sunset gradient with warm orange and red tones",title:"Desert Dunes",description:"Warm sunset palette in orange and gold",width:320,height:240},{src:"/demo-images/gallery-6.webp",alt:"Forest-inspired gradient with green and brown tones",title:"Forest Light",description:"Natural forest colors in green and brown",width:320,height:240}],_=Array.from({length:12},(s,i)=>{const l=i%6+1,h=[{src:"/demo-images/gallery-1.webp",alt:"Landscape"},{src:"/demo-images/gallery-2.webp",alt:"Urban scene"},{src:"/demo-images/gallery-3.webp",alt:"Nature"},{src:"/demo-images/gallery-4.webp",alt:"Ocean"},{src:"/demo-images/gallery-5.webp",alt:"Sunset"},{src:"/demo-images/gallery-6.webp",alt:"Forest"}][l-1];return{src:h.src,alt:`${h.alt} - Gallery demonstration image ${i+1}`,title:`Image ${i+1}`,description:`Demonstration image number ${i+1} showing responsive gallery and lazy-loading`,width:320,height:240}}),X={title:"Components/ImageGallery",component:k,parameters:{layout:"centered",docs:{description:{component:"A responsive image gallery component with interactive lightbox viewer, zoom, keyboard navigation, touch gestures, and lazy-loading support."}}},tags:["autodocs"],argTypes:{images:{control:"object",description:"Array of image objects with src, alt, and optional metadata"},imagesPerRow:{control:{type:"number",min:1,max:6,step:1},description:"Number of images per row (responsive, default: 4). Images maintain 320px minimum width except on small screens."},gap:{control:{type:"number",min:0,max:32,step:4},description:"Gap between grid items in pixels"},imageWidth:{control:{type:"number",min:100,max:500,step:10},description:"Default width for gallery images in pixels (default: 320)"},imageHeight:{control:{type:"number",min:75,max:400,step:10},description:"Default height for gallery images in pixels (default: 240)"}}},x={args:{images:m,imagesPerRow:4,gap:16,imageWidth:320,imageHeight:240}},w={args:{images:_,imagesPerRow:4,gap:12},parameters:{docs:{description:{story:"Gallery with 12 images demonstrating lazy-loading and responsive column reduction on smaller screens."}}}},f={args:{images:m,imagesPerRow:2,gap:16}},v={args:{images:m,imagesPerRow:4,gap:12}},I={args:{images:m.map(s=>({...s,title:`Title: ${s.alt}`,description:`Detailed description for ${s.alt}`})),imagesPerRow:4,gap:16},parameters:{docs:{description:{story:"Gallery images with titles and descriptions that appear in the lightbox viewer. Use aria-describedby for accessibility."}}}},R={args:{images:m,imagesPerRow:4,gap:16},parameters:{docs:{description:{story:"Gallery grid automatically adapts columns based on container width, maintaining 320px minimum image width. Resize browser to see responsive behavior."}},viewport:{defaultViewport:"responsive"}}},S={args:{images:_.slice(0,6),imagesPerRow:4,gap:16},parameters:{docs:{description:{story:`
## Interaction Guide

**Desktop:**
- Click image to open lightbox
- Arrow keys (Left/Right) navigate images
- Escape closes lightbox
- Zoom buttons cycle: 1x → 1.5x → 2x → 3x → 1x
- Click and drag to pan zoomed images
- Fullscreen button expands to viewport

**Touch (Mobile/Tablet):**
- Tap image to open lightbox
- Swipe left/right (30px+) to navigate
- Two-finger pinch-zoom or spread to zoom in/out
- Drag to pan zoomed images
- Tap thumbnail to jump to image

**Accessibility:**
- All images require descriptive alt text
- Keyboard fully supported
- ARIA labels on all controls
- Focus indicators visible on all interactive elements
        `}}}},j={args:{images:m,imagesPerRow:4,gap:16},render:s=>a.jsxs("div",{style:{padding:"20px"},children:[a.jsx("p",{style:{color:"#666",marginBottom:"16px",fontSize:"14px"},children:a.jsx("strong",{children:"Try these interactions:"})}),a.jsxs("ul",{style:{color:"#666",fontSize:"14px",marginBottom:"16px"},children:[a.jsx("li",{children:"Click any image to open the lightbox"}),a.jsx("li",{children:"Use arrow keys to navigate (keyboard)"}),a.jsx("li",{children:"Press Escape to close"}),a.jsx("li",{children:"Click zoom buttons to cycle zoom levels (1x → 1.5x → 2x → 3x)"}),a.jsx("li",{children:"Drag zoomed images to pan"}),a.jsx("li",{children:"Click thumbnails to jump to images"}),a.jsx("li",{children:"Fullscreen button for immersive viewing"})]}),a.jsx(k,{...s})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    images: basicImages,
    imagesPerRow: 4,
    gap: 16,
    imageWidth: 320,
    imageHeight: 240
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    images: manyImages,
    imagesPerRow: 4,
    gap: 12
  },
  parameters: {
    docs: {
      description: {
        story: "Gallery with 12 images demonstrating lazy-loading and responsive column reduction on smaller screens."
      }
    }
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    images: basicImages,
    imagesPerRow: 2,
    gap: 16
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    images: basicImages,
    imagesPerRow: 4,
    gap: 12
  }
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    images: basicImages.map(img => ({
      ...img,
      title: \`Title: \${img.alt}\`,
      description: \`Detailed description for \${img.alt}\`
    })),
    imagesPerRow: 4,
    gap: 16
  },
  parameters: {
    docs: {
      description: {
        story: "Gallery images with titles and descriptions that appear in the lightbox viewer. Use aria-describedby for accessibility."
      }
    }
  }
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    images: basicImages,
    imagesPerRow: 4,
    gap: 16
  },
  parameters: {
    docs: {
      description: {
        story: "Gallery grid automatically adapts columns based on container width, maintaining 320px minimum image width. Resize browser to see responsive behavior."
      }
    },
    viewport: {
      defaultViewport: "responsive"
    }
  }
}`,...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    images: manyImages.slice(0, 6),
    imagesPerRow: 4,
    gap: 16
  },
  parameters: {
    docs: {
      description: {
        story: \`
## Interaction Guide

**Desktop:**
- Click image to open lightbox
- Arrow keys (Left/Right) navigate images
- Escape closes lightbox
- Zoom buttons cycle: 1x → 1.5x → 2x → 3x → 1x
- Click and drag to pan zoomed images
- Fullscreen button expands to viewport

**Touch (Mobile/Tablet):**
- Tap image to open lightbox
- Swipe left/right (30px+) to navigate
- Two-finger pinch-zoom or spread to zoom in/out
- Drag to pan zoomed images
- Tap thumbnail to jump to image

**Accessibility:**
- All images require descriptive alt text
- Keyboard fully supported
- ARIA labels on all controls
- Focus indicators visible on all interactive elements
        \`
      }
    }
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    images: basicImages,
    imagesPerRow: 4,
    gap: 16
  },
  render: args => <div style={{
    padding: "20px"
  }}>\r
      <p style={{
      color: "#666",
      marginBottom: "16px",
      fontSize: "14px"
    }}>\r
        <strong>Try these interactions:</strong>\r
      </p>\r
      <ul style={{
      color: "#666",
      fontSize: "14px",
      marginBottom: "16px"
    }}>\r
        <li>Click any image to open the lightbox</li>\r
        <li>Use arrow keys to navigate (keyboard)</li>\r
        <li>Press Escape to close</li>\r
        <li>Click zoom buttons to cycle zoom levels (1x → 1.5x → 2x → 3x)</li>\r
        <li>Drag zoomed images to pan</li>\r
        <li>Click thumbnails to jump to images</li>\r
        <li>Fullscreen button for immersive viewing</li>\r
      </ul>\r
      <ImageGallery {...args} />\r
    </div>
}`,...j.parameters?.docs?.source}}};const Y=["Basic","ManyImages","TwoColumns","FourColumns","WithTitlesAndDescriptions","ResponsiveGrid","GestureDemo","Interactive"];export{x as Basic,v as FourColumns,S as GestureDemo,j as Interactive,w as ManyImages,R as ResponsiveGrid,f as TwoColumns,I as WithTitlesAndDescriptions,Y as __namedExportsOrder,X as default};
