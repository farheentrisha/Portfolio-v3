import{r as i,j as r}from"./three-CT1iOJR_.js";import{p as m}from"./index-CUOHqAEV.js";import"./vendor-DbHEDQBy.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,o)=>o?o.toUpperCase():a.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=e=>{const t=b(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:l="",children:s,iconNode:p,...n},x)=>i.createElement("svg",{ref:x,...g,width:t,height:t,stroke:e,strokeWidth:o?Number(a)*24/Number(t):a,className:d("lucide",l),...!s&&!v(n)&&{"aria-hidden":"true"},...n},[...p.map(([u,h])=>i.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(e,t)=>{const a=i.forwardRef(({className:o,...l},s)=>i.createElement(w,{ref:s,iconNode:t,className:d(`lucide-${f(c(e))}`,`lucide-${e}`,o),...l}));return a.displayName=c(e),a};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],N=j("arrow-up-right",y),E=()=>r.jsxs("section",{id:"papers",className:"c-space section-spacing-compact",children:[r.jsx("h2",{className:"text-heading",children:"Publications"}),r.jsx("div",{className:"mt-12 grid grid-cols-1 gap-8",children:m.map((e,t)=>r.jsxs("article",{className:"group relative rounded-3xl border border-white/10 bg-[#0E0E10] p-8 transition-all duration-500 hover:border-royal/50 hover:shadow-[0_0_30px_rgba(65,105,225,0.15)]",children:[r.jsx("div",{className:"absolute -inset-px rounded-3xl bg-gradient-to-r from-royal to-indigo opacity-0 blur transition duration-500 group-hover:opacity-20"}),r.jsxs("div",{className:"relative flex flex-col md:flex-row md:items-start md:justify-between gap-6",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("span",{className:"inline-block px-3 py-1 mb-4 text-[10px] uppercase tracking-widest font-bold text-royal bg-royal/10 border border-royal/20 rounded-full",children:e.venue.split(",")[0]}),r.jsx("h3",{className:"text-2xl font-bold text-white leading-tight md:text-3xl group-hover:text-royal transition-colors duration-300",children:e.title}),r.jsx("p",{className:"mt-4 text-sm font-medium text-neutral-400 italic",children:e.authors}),r.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-4",children:[r.jsxs("div",{className:"text-xs font-mono text-neutral-500 border-l border-white/20 pl-4",children:["DOI: ",e.doi]}),r.jsx("div",{className:"text-xs font-mono text-neutral-500 border-l border-white/20 pl-4",children:e.venue.split(",").slice(1).join(",")})]})]}),r.jsxs("a",{href:e.href,target:"_blank",rel:"noreferrer",className:"inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm transition-all duration-300 hover:bg-royal hover:text-white active:scale-95 self-start",children:["Read Paper",r.jsx(N,{size:18})]})]})]},t))})]});export{E as default};
