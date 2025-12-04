import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-DB-45t0D.js";import{B as w}from"./Button-xOsOojf0.js";import{I as N}from"./Icon-BrQ12ZgB.js";import"./preload-helper-PPVm8Dsz.js";const s=({currentPage:e,totalPages:a,onPageChange:f,showPrevNext:_=!0,maxVisiblePages:j=7,className:V="",ariaLabel:$="Pagination"})=>{const k=n.useMemo(()=>{const r=[];if(a<=j)return Array.from({length:a},(g,i)=>i+1);r.push(1),e-1>2&&r.push("...");const b=Math.max(2,e-1),y=Math.min(a-1,e+1);for(let g=b;g<=y;g++)r.push(g);return e+1<a-1&&r.push("..."),r.push(a),r},[e,a,j]),S=r=>{r!==e&&r>0&&r<=a&&f(r)},o="ntgds-pagination",E=[o,V].filter(Boolean).join(" ");return t.jsxs("nav",{className:E,"aria-label":$,role:"navigation",children:[_&&e>1&&t.jsxs(w,{variant:"tertiary",onClick:()=>S(e-1),className:`${o}__nav ${o}__nav--prev`,"aria-label":"Previous page",children:[t.jsx(N,{name:"chevron-left",size:"sm"}),"Previous"]}),t.jsx("div",{className:`${o}__pages`,children:k.map((r,b)=>{const y=typeof r=="string",g=r===e;if(y)return t.jsx("span",{className:`${o}__ellipsis`,"aria-hidden":"true",children:"..."},`ellipsis-${b}`);const i=r;return g?t.jsx("span",{"aria-current":"page","aria-label":`Current page, page ${i}`,className:`${o}__page ${o}__page--active`,children:i},`page-${i}`):t.jsx(w,{variant:"tertiary",onClick:()=>S(i),"aria-label":`Go to page ${i}`,className:`${o}__page`,children:i},`page-${i}`)})}),_&&e<a&&t.jsxs(w,{variant:"tertiary",onClick:()=>S(e+1),className:`${o}__nav ${o}__nav--next`,"aria-label":"Next page",children:["Next",t.jsx(N,{name:"chevron-right",size:"sm"})]})]})};try{s.displayName="Pagination",s.__docgenInfo={description:`Pagination component for navigating through pages of content.

Features:
- Shows all pages when total <= maxVisiblePages (default 7)
- Uses ellipsis (...) to replace skipped pages when total > maxVisiblePages
- Sliding window pattern: [1, ..., current±1, ..., last]
- Previous/Next buttons only visible when not at boundaries
- Current page styled as primary button (not clickable, not focusable)
- Previous/Next shown as tertiary buttons with chevron icons
- Responsive: reduces visible pages on smaller screens`,displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"Current active page (1-indexed)",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"Total number of pages",name:"totalPages",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"Callback when page changes",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},showPrevNext:{defaultValue:{value:"true"},description:"Show/hide Previous and Next navigation buttons",name:"showPrevNext",required:!1,type:{name:"boolean"}},maxVisiblePages:{defaultValue:{value:"7"},description:"Maximum number of pages to show before using ellipsis (default: 7)",name:"maxVisiblePages",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Additional CSS class",name:"className",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"Pagination"},description:"ARIA label for the pagination nav",name:"ariaLabel",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Components/Pagination",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{currentPage:{control:"number",description:"Current active page (1-indexed)"},totalPages:{control:"number",description:"Total number of pages"},showPrevNext:{control:"boolean",description:"Show/hide Previous and Next navigation links"},maxVisiblePages:{control:"number",description:"Maximum pages to show before using ellipsis (default: 7)"}}},c=()=>{const[e,a]=n.useState(1);return t.jsx(s,{currentPage:e,totalPages:5,onPageChange:a})},u=()=>{const[e,a]=n.useState(5);return t.jsx(s,{currentPage:e,totalPages:10,onPageChange:a})},l=()=>{const[e,a]=n.useState(10);return t.jsx(s,{currentPage:e,totalPages:21,onPageChange:a})},p=()=>{const[e,a]=n.useState(1);return t.jsx(s,{currentPage:e,totalPages:10,onPageChange:a})},P=()=>{const[e,a]=n.useState(10);return t.jsx(s,{currentPage:e,totalPages:10,onPageChange:a})},d=()=>{const[e,a]=n.useState(5);return t.jsx(s,{currentPage:e,totalPages:10,onPageChange:a,showPrevNext:!1})},m=()=>{const[e,a]=n.useState(5);return t.jsx(s,{currentPage:e,totalPages:10,onPageChange:a,maxVisiblePages:5})},h=()=>{const[e,a]=n.useState(50);return t.jsx(s,{currentPage:e,totalPages:100,onPageChange:a})},C=()=>{const[e,a]=n.useState(4);return t.jsx(s,{currentPage:e,totalPages:7,onPageChange:a})},x=()=>{const[e,a]=n.useState(4);return t.jsx(s,{currentPage:e,totalPages:8,onPageChange:a})},v=()=>{const[e,a]=n.useState(1),f=25;return t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx(s,{currentPage:e,totalPages:f,onPageChange:a}),t.jsxs("p",{style:{marginTop:"20px",fontSize:"14px",color:"#666"},children:["Viewing page ",e," of ",f]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(1);
  return <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />;
}`,...c.parameters?.docs?.source},description:{story:`Basic pagination example with few pages (no ellipsis).\r
Shows all 5 pages without using ellipsis since total <= 7.`,...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(5);
  return <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />;
}`,...u.parameters?.docs?.source},description:{story:`Standard pagination example with 10 pages.\r
Demonstrates ellipsis logic: [1, ..., current±1, ..., 10]`,...u.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(10);
  return <Pagination currentPage={currentPage} totalPages={21} onPageChange={setCurrentPage} />;
}`,...l.parameters?.docs?.source},description:{story:`Many pages example (21 pages) showing ellipsis pattern.\r
Start at page 10 to demonstrate: [1, ..., 9, 10, 11, ..., 21]`,...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(1);
  return <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />;
}`,...p.parameters?.docs?.source},description:{story:`First page state - Previous link is hidden.\r
Useful for showing initial pagination state.`,...p.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(10);
  return <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />;
}`,...P.parameters?.docs?.source},description:{story:`Last page state - Next link is hidden.\r
Demonstrates end-of-pagination behavior.`,...P.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(5);
  return <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} showPrevNext={false} />;
}`,...d.parameters?.docs?.source},description:{story:`Without Previous/Next links.\r
Only page numbers are shown, no navigation buttons.`,...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(5);
  return <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} maxVisiblePages={5} />;
}`,...m.parameters?.docs?.source},description:{story:`Custom max visible pages set to 5.\r
Ellipsis appears earlier with: [1, ..., current±1, ..., last]`,...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(50);
  return <Pagination currentPage={currentPage} totalPages={100} onPageChange={setCurrentPage} />;
}`,...h.parameters?.docs?.source},description:{story:`Very long pagination (100 pages).\r
Demonstrates sliding window pattern at various positions.\r
Start at page 50 to show: [1, ..., 49, 50, 51, ..., 100]`,...h.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(4);
  return <Pagination currentPage={currentPage} totalPages={7} onPageChange={setCurrentPage} />;
}`,...C.parameters?.docs?.source},description:{story:`Edge case: exactly 7 pages (threshold).\r
Shows all pages without ellipsis: [1, 2, 3, 4, 5, 6, 7]`,...C.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(4);
  return <Pagination currentPage={currentPage} totalPages={8} onPageChange={setCurrentPage} />;
}`,...x.parameters?.docs?.source},description:{story:`Edge case: 8 pages (just above threshold).\r
Shows ellipsis: [1, ..., current±1, ..., 8]`,...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 25;
  return <div style={{
    textAlign: "center"
  }}>\r
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />\r
      <p style={{
      marginTop: "20px",
      fontSize: "14px",
      color: "#666"
    }}>\r
        Viewing page {currentPage} of {totalPages}\r
      </p>\r
    </div>;
}`,...v.parameters?.docs?.source},description:{story:`Interactive demo with detailed state.\r
Shows current page, total pages, and allows jumping to specific pages.`,...v.parameters?.docs?.description}}};const F=["FewPages","Default","ManyPages","FirstPage","LastPage","WithoutPrevNext","CustomMaxVisible","VeryLongPagination","ExactThreshold","JustAboveThreshold","Interactive"];export{m as CustomMaxVisible,u as Default,C as ExactThreshold,c as FewPages,p as FirstPage,v as Interactive,x as JustAboveThreshold,P as LastPage,l as ManyPages,h as VeryLongPagination,d as WithoutPrevNext,F as __namedExportsOrder,L as default};
