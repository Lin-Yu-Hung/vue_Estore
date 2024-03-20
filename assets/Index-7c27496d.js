import{_ as L,r as S,o as r,c as d,g as I,h as e,i as c,j as g,T as D,a as A,k as F,l as V,m as T,n as O,q as M,t as p,b as t,F as k,x as h,y as m,z as B,p as P,f as z}from"./index-7c3c473e.js";import{M as E,F as J}from"./Footer-9a12005b.js";import{t as R}from"./util-03711dca.js";import{a as $}from"./api-62544564.js";import{e as j}from"./sweetAlert-015869b7.js";import{c as q}from"./cart-a2780df5.js";import{h as G}from"./bootstrap-96859d1e.js";import{_ as C}from"./e-store-logo-4781a984.js";const U={setup(){const n=S(!1);return{menuVisible:n,showMenu:()=>{n.value=!0},hideMenu:()=>{n.value=!1}}}},W={key:0,class:"dropdown shadow card"};function H(n,a,f,o,w,y){return r(),d("div",{class:"menu py-2 py-md-4",onMouseenter:a[0]||(a[0]=(...s)=>o.showMenu&&o.showMenu(...s)),onMouseleave:a[1]||(a[1]=(...s)=>o.hideMenu&&o.hideMenu(...s))},[I(n.$slots,"header",{},void 0,!0),e(D,{name:"custom-classes","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"},{default:c(()=>[o.menuVisible?(r(),d("div",W,[I(n.$slots,"menu",{},void 0,!0)])):g("",!0)]),_:3})],32)}const K=L(U,[["render",H],["__scopeId","data-v-ea112c64"]]);const Q={components:{DropDownMenu:K,MenuList:E,Footer:J},setup(n){const a=A();F(()=>a.path,l=>{G("offcanvasNavbar")}),V();const f=q(),{cartItems:o,cartAmount:w,cartItemCount:y}=T(f),s=S([]),_=S(9);window.addEventListener("resize",l=>{window.innerWidth>992?_.value=9:_.value=6});const x=O(()=>s.value.reduce((l,v)=>(l[v.id]=v,l),{}));return(async()=>{try{const l=await $();s.value=JSON.parse(JSON.stringify(l.data.products))}catch{j("取得資料錯誤","請重新整理網頁或聯絡客服人員")}finally{}})(),M("productList",s),M("productListMap",x),M("pageItemCount",_),{productList:s,toggleStatus:R,cartItems:o,cartAmount:w,cartItemCount:y,cart:f,route:a}}},u=n=>(P("data-v-47789417"),n=n(),z(),n),X={class:"main-nav container rounded-pill bg-primary py-0 shadow"},Y={class:"container-fluid"},Z={class:"row align-items-center"},tt={class:"col col-lg-2 d-flex align-items-center"},et={class:"offcanvas offcanvas-start text-bg-dark",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},ot=u(()=>t("div",{class:"offcanvas-header"},[t("img",{class:"logo",src:C,alt:"logo"}),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),st={class:"offcanvas-body"},nt={class:"menuList"},at={class:"dropdown-list"},ct={class:"pe-none"},lt=u(()=>t("div",{class:"collapse multi-collapse",id:"productSetting"},null,-1)),it=u(()=>t("img",{class:"logo",src:C,alt:"logo"},null,-1)),rt={class:"col-4 lg-down-hide"},dt={class:"nav"},_t=u(()=>t("ul",{class:"text-black ps-0 py-2 mb-0"},[t("li",{class:"border-bottom px-2 py-1 text-end"},"個人資料"),t("li",{class:"border-bottom px-2 py-1 text-end"},"登出")],-1)),ut={class:"col mobile-hide"},pt={class:"input-group d-center align-items-center rounded-pill border bg-white"},mt=u(()=>t("input",{type:"text",class:"form-control rounded-pill border-0 ps-3",placeholder:"輸入商品關鍵字"},null,-1)),ft={class:"col col-md-3 d-end align-items-center pe-md-5"},ht=u(()=>t("ul",{class:"profile ps-0 py-2 mb-0"},[t("li",{class:"border-bottom px-2 py-1 text-end"},"個人資料"),t("li",{class:"border-bottom px-2 py-1 text-end"},"登出")],-1)),bt={class:"position-relative pe-2"},vt={key:0,class:"position-absolute start-100 translate-middle badge rounded-pill bg-danger"},gt={class:"cartList pb-0"},wt={class:"d-flex align-items-center"},yt=["src","alt"],xt={class:"card-body d-column p-0 pb-2"},Mt={class:"d-between mb-2"},kt={class:"card-title fs-small fs-lg-base mb-0"},St={class:"description text-secondary fs-small mb-2"},It={class:"text-end mb-0"},Lt={class:"d-column align-items-end p-2"},Ct={class:"mb-2"},Nt={class:"fs-5"},Dt=u(()=>t("button",{type:"button",class:"btn btn-primary w-100"}," 立即結帳 ",-1)),At={key:0,class:"main-bg"},Ft={class:"container content"};function Vt(n,a,f,o,w,y){const s=p("font-awesome-icon"),_=p("router-link"),x=p("MenuList"),b=p("DropDownMenu"),l=p("router-view"),v=p("Footer");return r(),d(k,null,[t("div",X,[t("div",Y,[t("div",Z,[t("div",tt,[e(s,{class:"fs-5 text-white me-3 lg-up-hide",icon:"fa-bars",role:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar","aria-label":"Toggle navigation"}),t("div",et,[ot,t("div",st,[e(x,null,{menu:c(()=>[t("ul",nt,[t("li",null,[e(_,{class:"menu-link",to:"/eStore/home"},{default:c(()=>[e(s,{icon:"fa-home",role:"button"}),h("首頁")]),_:1})]),t("li",at,[t("div",{class:"dropdown-title",onClick:a[0]||(a[0]=(...i)=>o.toggleStatus&&o.toggleStatus(...i)),"data-bs-toggle":"collapse","data-bs-target":"#productSetting","aria-expanded":"false","aria-controls":"productSetting"},[t("span",ct,[e(s,{class:"",icon:"fa-list",role:"button"}),h("商品列表 ")]),e(s,{class:"dropdown-arrow pe-none",icon:"fa-chevron-right"})]),lt])])]),_:1})])]),it]),t("div",rt,[t("ul",dt,[t("li",null,[e(_,{class:"menu-link",to:"/eStore/home"},{default:c(()=>[h("首頁")]),_:1})]),t("li",null,[e(b,null,{header:c(()=>[e(_,{class:"menu-link",to:"productList"},{default:c(()=>[h("商品列表")]),_:1})]),menu:c(()=>[_t]),_:1})])])]),t("div",ut,[t("div",pt,[mt,e(s,{class:"px-3",icon:"fa-search",role:"button"})])]),t("div",ft,[e(b,null,{header:c(()=>[e(s,{class:"fs-5 ms-3 ms-md-4 text-white",icon:"fa-user",role:"button"})]),menu:c(()=>[ht]),_:1}),e(b,null,{header:c(()=>[t("div",bt,[e(s,{class:"fs-5 ms-3 ms-md-4 text-white",icon:"fa-cart-shopping",role:"button"}),o.cartItems.length>0?(r(),d("span",vt,m(o.cartItemCount),1)):g("",!0)])]),menu:c(()=>[o.cartItems.length>0?(r(),d(k,{key:0},[t("div",gt,[(r(!0),d(k,null,B(o.cartItems,(i,N)=>(r(),d("div",{class:"card mb-2 border-0 border-bottom rounded-0",key:i.info.id},[t("div",wt,[t("img",{src:i.info.imageUrl,alt:i.info.title},null,8,yt),t("div",xt,[t("div",Mt,[t("h5",kt,m(i.info.title),1),e(s,{onClick:Tt=>o.cart.delItem(N),icon:"fa-xmark",class:"del-btn m-0 text-secondary"},null,8,["onClick"])]),t("p",St,m(i.info.description),1),t("p",It," $ "+m(i.info.price.toLocaleString())+" * "+m(i.count),1)])])]))),128))]),t("div",Lt,[t("p",Ct,[h(" 總金額: "),t("span",Nt,"$ "+m(o.cartAmount.toLocaleString()),1)]),Dt])],64)):g("",!0)]),_:1})])])])]),o.route.name==="home"?(r(),d("div",At)):g("",!0),t("div",Ft,[e(l)]),e(v)],64)}const jt=L(Q,[["render",Vt],["__scopeId","data-v-47789417"]]);export{jt as default};
