import{_ as f,a as v,r as w,m as h,I as y,g as _,M as d}from"./index-8643c75a.js";import{b as A}from"./bootstrap-71d4a5a1.js";const C={setup(){const a=v(),s={},l=w(null);h(()=>a.path,t=>{i()});const c=(t,o=null)=>{if(o)for(const n in s)n!==o&&s[n][t]();else for(const n in s)s[n][t]()},i=async()=>{await d();const t=document.querySelector(".router-link-active");if(!t)return;const o=t.parentElement,n=e=>{e.forEach(r=>{r.classList.remove("show"),r.classList.remove("active")})};if(o.classList.contains("collapse-item")){const e=o.getAttribute("parentId");if(l.value!==e){l.value=e;const r=document.querySelectorAll(".dropdown-title"),p=Array.from(r).filter(m=>m.getAttribute("aria-controls")!==e);n(p);const u=document.querySelector(`[aria-controls=${e}]`);c("hide",e),await d(),setTimeout(()=>{u.classList.add("active"),u.classList.add("show"),s[e].show()},100)}}else{const e=document.querySelectorAll(".dropdown-title");n(e),c("hide"),l.value=null}};y(()=>{document.querySelectorAll(".collapse").forEach(o=>{s[o.id]=A(o.id)}),i()})}};function S(a,s,l,c,i,t){return _(a.$slots,"menu")}const q=f(C,[["render",S]]);export{q as M};
