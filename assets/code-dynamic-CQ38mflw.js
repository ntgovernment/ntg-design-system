import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as S}from"./index-DI2gBlDf.js";import{R as w}from"./index-BlmOqGMO.js";import{M as R,S as T}from"./index-BXvRrill.js";import"./index-yBjzXJbu.js";import"./iframe-LAelWfZp.js";import"./index-aCbGg6Ov.js";import"./index-BfFTulA3.js";import"./index-DrFu-skq.js";function k(m){const p={div:"div",style:"style",...S(),...m.components};return e.jsxs(e.Fragment,{children:[e.jsx(R,{title:"Embeds/Code Dynamic Snapshot"}),`
`,(()=>{const t=new URLSearchParams(window.location.search).get("bg")||new URLSearchParams(window.location.hash.replace(/^#\?/,"")).get("bg")||"dark";return e.jsx(p.style,{children:`      .sbdocs, .sbdocs-content { 
        padding: 0 !important; 
        margin: 0 !important; 
        background: ${t==="white"||t==="light"?"#ffffff":"transparent"} !important; 
      }
      body { 
        background: ${t==="white"||t==="light"?"#ffffff !important":"inherit"};
      }
      html { 
        background: ${t==="white"||t==="light"?"#ffffff !important":"inherit"};
      }
      h1, h2, h3, h4 { display: none !important; }
      .code-status { 
        font: 12px/1.4 system-ui, Arial, sans-serif; 
        color: ${t==="white"||t==="light"?"#333":"#666"}; 
        padding: 8px 0; 
      }
      iframe.__code_snap_iframe { position: absolute; left: -99999px; width: 0; height: 0; border: 0; }
   `})})(),`
`,(()=>{function t(o){const l=new URLSearchParams(window.location.search);return l.has(o)?l.get(o):new URLSearchParams(window.location.hash.replace(/^#\?/,"")).get(o)}function $(o){const l=new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]),u=o.replace(/>\s+</g,"><").replace(/</g,`
<`).trim().split(`
`);let h="",d=0;for(const a of u){/^<\/[^>]+>/.test(a)&&(d=Math.max(d-1,0)),h+=" ".repeat(d)+a+`
`;const s=/^<([a-z0-9-]+)(\s|>|\/>)/i.exec(a),i=/^<[^!/][^>]_[^/]?>/.test(a),n=/^<[^>]+>._<\/[^>]+>$/.test(a);i&&s&&!l.has(s[1].toLowerCase())&&!n&&(d+=1)}return h.trim()}function C(o){return o.replace(/ data-[a-z-]+="[^"]_"/g,"").replace(/<!--.*?-->/gs,"").replace(/\sclass=""/g,"")}function _(){const o=t("codeId")||"components-button--primary",l=t("lang")||"html",u=(t("dark")||"1")==="1";t("bg");const[h,d]=w.useState(""),[a,s]=w.useState("Rendering…");return w.useEffect(()=>{let i=!1,n=0;const c=5;function g(){if(i||n>=c)return;n++;const j=`${window.location.origin+window.location.pathname.replace("/iframe.html","").replace("/index.html","")}/iframe.html?id=${encodeURIComponent(o)}&viewMode=story`,r=document.createElement("iframe");r.className="__code_snap_iframe",r.src=j;const b=setTimeout(()=>{i||s(`Timeout loading story (attempt ${n}/${c})`),r.remove(),n<c?setTimeout(g,1e3):s("Unable to load story content after multiple attempts")},5e3);r.onload=()=>{clearTimeout(b),setTimeout(()=>{try{const f=r.contentDocument||r.contentWindow?.document;if(!f)throw new Error("Cannot access iframe document (CORS or security restriction)");const y=f.getElementById("storybook-root");if(!y)throw new Error("Storybook root element not found");const x=y.innerHTML||"";if(!x.trim())throw new Error("Story content is empty");const E=C(x),M=$(E);i||(d(M||"<!-- No markup found -->"),s(""))}catch(f){i||(console.error("Code extraction error:",f),s(`Error (attempt ${n}/${c}): ${f.message||f}`),n<c&&setTimeout(g,2e3))}finally{r.remove()}},500)},r.onerror=()=>{clearTimeout(b),i||s(`Failed to load iframe (attempt ${n}/${c})`),r.remove(),n<c&&setTimeout(g,1e3)},document.body.appendChild(r)}return g(),()=>{i=!0}},[o]),e.jsxs(e.Fragment,{children:[a?e.jsx(p.div,{className:"code-status",children:a}):null,e.jsx(T,{code:h||"<!-- no code available -->",language:l,dark:u})]})}return e.jsx(_,{})})()]})}function X(m={}){const{wrapper:p}={...S(),...m.components};return p?e.jsx(p,{...m,children:e.jsx(k,{...m})}):k(m)}export{X as default};
