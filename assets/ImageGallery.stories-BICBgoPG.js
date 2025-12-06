import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as De}from"./iframe-orbKJz4h.js";import{I as Re}from"./Image-BcBNelRs.js";import{B as D}from"./Button-CklBq9Au.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-D9ZymXa3.js";const Z=({images:o,selectedIndex:l,onClose:c,onPrev:x,onNext:f,onSelectIndex:F})=>{const[d,w]=a.useState(1),[T,I]=a.useState(!1),[m,u]=a.useState(0),[p,h]=a.useState(0),[H,B]=a.useState(!1),[W,v]=a.useState(0),[K,J]=a.useState(0),[b,k]=a.useState(0),U=a.useRef(null),N=a.useRef(null),C=a.useRef([]),S=a.useRef(null),n=o[l];a.useEffect(()=>{const e=s=>{s.key==="ArrowRight"?(s.preventDefault(),f(),u(0),h(0)):s.key==="ArrowLeft"?(s.preventDefault(),x(),u(0),h(0)):s.key==="Escape"&&(s.preventDefault(),c())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[f,x,c]);const g=a.useCallback(()=>{w(e=>{const s=[1,1.5,2,3],r=s.indexOf(e);return r<s.length-1?(u(0),h(0),s[r+1]):e})},[]),i=a.useCallback(()=>{w(e=>{const s=[1,1.5,2,3],r=s.indexOf(e);return r>0?(u(0),h(0),s[r-1]):e})},[]);a.useCallback(()=>{w(e=>{const s=[1,1.5,2,3],$=(s.indexOf(e)+1)%s.length;return u(0),h(0),s[$]})},[]);const z=a.useCallback(e=>{e.target===U.current&&c()},[c]),y=a.useCallback(e=>{if(e.touches.length===1)v(e.touches[0].clientX),J(e.touches[0].clientY);else if(e.touches.length===2){const s=e.touches[0].clientX-e.touches[1].clientX,r=e.touches[0].clientY-e.touches[1].clientY;k(Math.sqrt(s*s+r*r))}},[]),j=a.useCallback(e=>{if(e.changedTouches.length===1){const s=e.changedTouches[0].clientX-W;Math.abs(s)>30&&(s>0?x():f(),u(0),h(0))}else e.changedTouches.length===0&&b>0&&k(0)},[W,b,x,f]);a.useCallback(e=>{if(e.touches.length===2&&b>0){const s=e.touches[0].clientX-e.touches[1].clientX,r=e.touches[0].clientY-e.touches[1].clientY,$=Math.sqrt(s*s+r*r),me=$-b;Math.abs(me)>10&&(me>0?g():i(),k($))}},[b,g,i]);const[_,Q]=a.useState(!1),[ee,pe]=a.useState(0),[te,he]=a.useState(0),[ae,be]=a.useState(0),[se,ye]=a.useState(0),xe=a.useCallback(e=>{d>1&&N.current&&(Q(!0),pe(e.clientX),he(e.clientY),be(m),ye(p))},[d,m,p]),P=a.useCallback(e=>{if(_){const s=e.clientX-ee,r=e.clientY-te;u(ae+s),h(se+r)}},[_,ee,te,ae,se]),G=a.useCallback(()=>{Q(!1)},[]),[ne,re]=a.useState(!1),[ie,fe]=a.useState(0),[oe,ve]=a.useState(0),[le,we]=a.useState(0),[ce,Se]=a.useState(0),_e=a.useCallback(e=>{d>1&&e.touches.length===1&&(re(!0),fe(e.touches[0].clientX),ve(e.touches[0].clientY),we(m),Se(p))},[d,m,p]),Ie=a.useCallback(e=>{if(ne&&e.touches.length===1){const s=e.touches[0].clientX-ie,r=e.touches[0].clientY-oe;u(le+s),h(ce+r)}},[ne,ie,oe,le,ce]),ke=a.useCallback(()=>{re(!1)},[]);a.useEffect(()=>(S.current||(S.current=new IntersectionObserver(e=>{e.forEach(s=>{if(s.isIntersecting){const r=s.target.querySelector("img");r&&r.dataset.src&&!r.src&&(r.src=r.dataset.src,r.dataset.srcset&&(r.srcset=r.dataset.srcset)),S.current?.unobserve(s.target)}})},{threshold:.1})),C.current.forEach(e=>{e&&S.current?.observe(e)}),()=>{S.current?.disconnect()}),[o.length]),a.useEffect(()=>{C.current[l]&&C.current[l]?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[l]),a.useEffect(()=>(document.addEventListener("mousemove",P),document.addEventListener("mouseup",G),()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",G)}),[P,G]);const Ce=d===3,je=d===1,de=`image-desc-${l}`,ge=`image-title-${l}`;return t.jsx("div",{className:`ntgds-image-gallery-lightbox ${T?"ntgds-image-gallery-lightbox--fullscreen":""}`,ref:U,onClick:z,onMouseDown:xe,onMouseMove:P,onMouseUp:G,onTouchStart:e=>{y(e),_e(e)},onTouchEnd:e=>{j(e),ke()},onTouchMove:e=>{Ie(e)},role:"region","aria-label":"Image gallery lightbox viewer","aria-modal":"true",children:t.jsxs("div",{className:"ntgds-image-gallery-lightbox__container",style:{cursor:d>1?_?"grabbing":"grab":"default"},onClick:e=>e.stopPropagation(),children:[t.jsxs("div",{className:"ntgds-image-gallery-lightbox__header",children:[t.jsxs("div",{className:"ntgds-image-gallery-lightbox__counter",children:[l+1," / ",o.length]}),t.jsxs("div",{className:"ntgds-image-gallery-lightbox__controls",children:[t.jsx(D,{variant:"tertiary",size:"small",iconLeft:"magnifying-glass-minus",iconColor:"inverse",onClick:i,disabled:je,"aria-label":"Zoom out",children:" "}),t.jsx(D,{variant:"tertiary",size:"small",iconLeft:"magnifying-glass-plus",iconColor:"inverse",onClick:g,disabled:Ce,"aria-label":"Zoom in",children:" "}),t.jsx(D,{variant:"tertiary",size:"small",iconLeft:"expand",iconColor:"inverse",onClick:()=>I(!T),"aria-label":T?"Exit fullscreen":"Enter fullscreen",children:" "})]})]}),t.jsxs("div",{className:"ntgds-image-gallery-lightbox__main",children:[t.jsx(D,{variant:"tertiary",size:"large",iconLeft:"chevron-left",iconColor:"inverse",onClick:x,className:"ntgds-image-gallery-lightbox__nav-prev","aria-label":"Previous image",children:" "}),t.jsxs("div",{className:"ntgds-image-gallery-lightbox__viewer",ref:N,children:[t.jsx("div",{className:"ntgds-image-gallery-lightbox__image-container",style:{transform:`scale(${d}) translate(${m/d}px, ${p/d}px)`},children:t.jsxs("picture",{children:[n.srcWebp&&t.jsx("source",{srcSet:n.srcSetWebp||n.srcWebp,type:"image/webp"}),t.jsx("img",{src:n.src,alt:n.alt,onLoad:()=>B(!0),className:"ntgds-image-gallery-lightbox__image","aria-describedby":n.description?de:n.title?ge:void 0})]})}),(n.title||n.description)&&t.jsxs("div",{className:"ntgds-image-gallery-lightbox__caption",children:[n.title&&t.jsx("h2",{id:ge,className:"ntgds-image-gallery-lightbox__title",children:n.title}),n.description&&t.jsx("p",{id:de,className:"ntgds-image-gallery-lightbox__description",children:n.description})]})]}),t.jsx(D,{variant:"tertiary",size:"large",iconLeft:"chevron-right",iconColor:"inverse",onClick:f,className:"ntgds-image-gallery-lightbox__nav-next","aria-label":"Next image",children:" "})]}),t.jsx("div",{className:"ntgds-image-gallery-lightbox__thumbnails ntgds-scrollable",children:o.map((e,s)=>t.jsx("div",{ref:r=>{C.current[s]=r},className:`ntgds-image-gallery-lightbox__thumbnail ${s===l?"ntgds-image-gallery-lightbox__thumbnail--selected":""}`,children:t.jsx("button",{onClick:()=>{F(s),u(0),h(0),w(1)},"aria-label":`Select image ${s+1}: ${e.alt}`,className:"ntgds-image-gallery-lightbox__thumbnail-button",children:t.jsxs("picture",{children:[e.srcWebp&&t.jsx("source",{srcSet:e.srcWebp,type:"image/webp"}),t.jsx("img",{"data-src":e.src,alt:e.alt,className:"ntgds-image-gallery-lightbox__thumbnail-image"})]})})},s))}),t.jsx(D,{variant:"tertiary",size:"small",iconLeft:"xmark",iconColor:"inverse",onClick:c,className:"ntgds-image-gallery-lightbox__close","aria-label":"Close lightbox",children:" "})]})})};try{Z.displayName="ImageGalleryLightbox",Z.__docgenInfo={description:"",displayName:"ImageGalleryLightbox",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"GalleryImage[]"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onPrev:{defaultValue:null,description:"",name:"onPrev",required:!0,type:{name:"() => void"}},onNext:{defaultValue:null,description:"",name:"onNext",required:!0,type:{name:"() => void"}},onSelectIndex:{defaultValue:null,description:"",name:"onSelectIndex",required:!0,type:{name:"(index: number) => void"}}}}}catch{}const V=({images:o,imagesPerRow:l=4,gap:c=16,imageWidth:x=320,imageHeight:f=240,className:F=""})=>{const[d,w]=a.useState(!1),[T,I]=a.useState(0),[m,u]=a.useState(0),p=De.useRef(null);a.useEffect(()=>{const n=()=>{p.current&&u(p.current.offsetWidth)};n();const g=new ResizeObserver(n);return p.current&&g.observe(p.current),()=>g.disconnect()},[]);const h=a.useCallback(n=>{I(n),w(!0)},[]),H=a.useCallback(()=>{w(!1)},[]),B=a.useCallback(()=>{I(n=>n===0?o.length-1:n-1)},[o.length]),W=a.useCallback(()=>{I(n=>n===o.length-1?0:n+1)},[o.length]),v="ntgds-image-gallery",K=[v,F].filter(Boolean).join(" "),b=(()=>{if(m===0)return l;const n=320,g=(l-1)*c,i=n*l+g;if(m<i){const z=m;let y=l;for(;y>1;){const j=(y-1)*c;if((z-j)/y>=n)break;y--}return y}return l})(),k=[];for(let n=0;n<o.length;n+=b)k.push(o.slice(n,n+b));const N=(()=>{if(m===0)return x;const n=(b-1)*c,i=(m-n)/b;return Math.max(i,x)})(),C=f/x,S=N*C;return t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:p,className:K,style:{display:"flex",flexDirection:"column",gap:`${c}px`,width:"100%"},children:k.map((n,g)=>t.jsx("div",{style:{display:"flex",flexDirection:"row",gap:`${c}px`,alignItems:"flex-end",flexWrap:"wrap"},children:n.map((i,z)=>{const y=g*b+z,j=i.width||N,_=i.height||S;return t.jsxs("button",{className:`${v}__button`,onClick:()=>h(y),"aria-label":`Open image ${y+1}: ${i.alt}`,style:{width:`${j}px`,height:`${_}px`,padding:0,border:"none",background:"none",cursor:"pointer",overflow:"hidden",position:"relative"},children:[t.jsx(Re,{src:i.src,srcWebp:i.srcWebp,alt:i.alt,srcSet:i.srcSet,srcSetWebp:i.srcSetWebp,loading:"lazy",width:j,height:_,className:`${v}__thumb`}),(i.title||i.description)&&t.jsxs("div",{className:`${v}__overlay`,children:[i.title&&t.jsx("div",{className:`${v}__overlay-title`,children:i.title}),i.description&&t.jsx("div",{className:`${v}__overlay-description`,children:i.description})]})]},y)})},g))}),d&&t.jsx(Z,{images:o,selectedIndex:T,onClose:H,onPrev:B,onNext:W,onSelectIndex:I})]})};try{V.displayName="ImageGallery",V.__docgenInfo={description:"",displayName:"ImageGallery",props:{images:{defaultValue:null,description:"Array of images to display in gallery and lightbox",name:"images",required:!0,type:{name:"GalleryImage[]"}},imagesPerRow:{defaultValue:{value:"4"},description:"Number of images per row (responsive, default: 4). Images won't shrink below 320px except on small breakpoints.",name:"imagesPerRow",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"16"},description:"Gap between grid items in pixels",name:"gap",required:!1,type:{name:"number"}},imageWidth:{defaultValue:{value:"320"},description:"Default width for gallery images in pixels (default: 320)",name:"imageWidth",required:!1,type:{name:"number"}},imageHeight:{defaultValue:{value:"240"},description:"Default height for gallery images in pixels (default: 240)",name:"imageHeight",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const R=[{src:"/demo-images/gallery-1.webp",alt:"Scenic landscape with gradient sky and green fields",title:"Mountain Serenity",description:"Peaceful landscape with vibrant color gradient",width:320,height:240},{src:"/demo-images/gallery-2.webp",alt:"Urban scene with gray tones and industrial elements",title:"Urban Exploration",description:"Modern urban landscape in cool tones",width:320,height:240},{src:"/demo-images/gallery-3.webp",alt:"Natural scenery with green and earth tones",title:"Nature's Colors",description:"Beautiful nature scene with earthy palette",width:320,height:240},{src:"/demo-images/gallery-4.webp",alt:"Ocean-inspired gradient with blue tones",title:"Ocean Waves",description:"Serene ocean landscape in deep blues",width:320,height:240},{src:"/demo-images/gallery-5.webp",alt:"Sunset gradient with warm orange and red tones",title:"Desert Dunes",description:"Warm sunset palette in orange and gold",width:320,height:240},{src:"/demo-images/gallery-6.webp",alt:"Forest-inspired gradient with green and brown tones",title:"Forest Light",description:"Natural forest colors in green and brown",width:320,height:240}],ue=Array.from({length:12},(o,l)=>{const c=l%6+1,f=[{src:"/demo-images/gallery-1.webp",alt:"Landscape"},{src:"/demo-images/gallery-2.webp",alt:"Urban scene"},{src:"/demo-images/gallery-3.webp",alt:"Nature"},{src:"/demo-images/gallery-4.webp",alt:"Ocean"},{src:"/demo-images/gallery-5.webp",alt:"Sunset"},{src:"/demo-images/gallery-6.webp",alt:"Forest"}][c-1];return{src:f.src,alt:`${f.alt} - Gallery demonstration image ${l+1}`,title:`Image ${l+1}`,description:`Demonstration image number ${l+1} showing responsive gallery and lazy-loading`,width:320,height:240}}),$e={title:"Components/ImageGallery",component:V,parameters:{layout:"centered",docs:{description:{component:"A responsive image gallery component with interactive lightbox viewer, zoom, keyboard navigation, touch gestures, and lazy-loading support."}}},tags:["autodocs"],argTypes:{images:{control:"object",description:"Array of image objects with src, alt, and optional metadata"},imagesPerRow:{control:{type:"number",min:1,max:6,step:1},description:"Number of images per row (responsive, default: 4). Images maintain 320px minimum width except on small screens."},gap:{control:{type:"number",min:0,max:32,step:4},description:"Gap between grid items in pixels"},imageWidth:{control:{type:"number",min:100,max:500,step:10},description:"Default width for gallery images in pixels (default: 320)"},imageHeight:{control:{type:"number",min:75,max:400,step:10},description:"Default height for gallery images in pixels (default: 240)"}}},E={args:{images:R,imagesPerRow:4,gap:16,imageWidth:320,imageHeight:240}},L={args:{images:ue,imagesPerRow:4,gap:12},parameters:{docs:{description:{story:"Gallery with 12 images demonstrating lazy-loading and responsive column reduction on smaller screens."}}}},X={args:{images:R,imagesPerRow:2,gap:16}},Y={args:{images:R,imagesPerRow:4,gap:12}},M={args:{images:R.map(o=>({...o,title:`Title: ${o.alt}`,description:`Detailed description for ${o.alt}`})),imagesPerRow:4,gap:16},parameters:{docs:{description:{story:"Gallery images with titles and descriptions that appear in the lightbox viewer. Use aria-describedby for accessibility."}}}},A={args:{images:R,imagesPerRow:4,gap:16},parameters:{docs:{description:{story:"Gallery grid automatically adapts columns based on container width, maintaining 320px minimum image width. Resize browser to see responsive behavior."}},viewport:{defaultViewport:"responsive"}}},q={args:{images:ue.slice(0,6),imagesPerRow:4,gap:16},parameters:{docs:{description:{story:`
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
        `}}}},O={args:{images:R,imagesPerRow:4,gap:16},render:o=>t.jsxs("div",{style:{padding:"20px"},children:[t.jsx("p",{style:{color:"#666",marginBottom:"16px",fontSize:"14px"},children:t.jsx("strong",{children:"Try these interactions:"})}),t.jsxs("ul",{style:{color:"#666",fontSize:"14px",marginBottom:"16px"},children:[t.jsx("li",{children:"Click any image to open the lightbox"}),t.jsx("li",{children:"Use arrow keys to navigate (keyboard)"}),t.jsx("li",{children:"Press Escape to close"}),t.jsx("li",{children:"Click zoom buttons to cycle zoom levels (1x → 1.5x → 2x → 3x)"}),t.jsx("li",{children:"Drag zoomed images to pan"}),t.jsx("li",{children:"Click thumbnails to jump to images"}),t.jsx("li",{children:"Fullscreen button for immersive viewing"})]}),t.jsx(V,{...o})]})};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    images: basicImages,
    imagesPerRow: 4,
    gap: 16,
    imageWidth: 320,
    imageHeight: 240
  }
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    images: basicImages,
    imagesPerRow: 2,
    gap: 16
  }
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    images: basicImages,
    imagesPerRow: 4,
    gap: 12
  }
}`,...Y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const Ee=["Basic","ManyImages","TwoColumns","FourColumns","WithTitlesAndDescriptions","ResponsiveGrid","GestureDemo","Interactive"];export{E as Basic,Y as FourColumns,q as GestureDemo,O as Interactive,L as ManyImages,A as ResponsiveGrid,X as TwoColumns,M as WithTitlesAndDescriptions,Ee as __namedExportsOrder,$e as default};
