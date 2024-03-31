import{_ as L,r as k,o as d,c as u,g as I,h as o,i as c,j as g,T as D,a as A,u as F,k as V,l as T,m as O,n as B,q as x,t as _,b as t,F as M,x as b,y as p,z as P,p as R,f as z}from"./index-8cd1bf87.js";import{M as E,F as J}from"./Footer-06a9400e.js";import{t as $}from"./util-03711dca.js";import{a as j}from"./api-69bd1b4b.js";import{e as q}from"./sweetAlert-a00dbc03.js";import{c as G}from"./cart-4c9c16a7.js";import{h as U}from"./bootstrap-b93dcb79.js";import{_ as C}from"./e-store-logo-4781a984.js";const W={setup(){const l=k(!1);return{menuVisible:l,showMenu:()=>{l.value=!0},hideMenu:()=>{l.value=!1}}}},H={key:0,class:"dropdown shadow card"};function K(l,n,v,e,w,y){return d(),u("div",{class:"menu py-2 py-md-4",onMouseenter:n[0]||(n[0]=(...s)=>e.showMenu&&e.showMenu(...s)),onMouseleave:n[1]||(n[1]=(...s)=>e.hideMenu&&e.hideMenu(...s))},[I(l.$slots,"header",{},void 0,!0),o(D,{name:"custom-classes","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"},{default:c(()=>[e.menuVisible?(d(),u("div",H,[I(l.$slots,"menu",{},void 0,!0)])):g("",!0)]),_:3})],32)}const Q=L(W,[["render",K],["__scopeId","data-v-ea112c64"]]);const X={components:{DropDownMenu:Q,MenuList:E,Footer:J},setup(l){const n=A(),v=F();V(()=>n.path,r=>{U("offcanvasNavbar")}),T();const e=G(),{cartItems:w,cartAmount:y,cartItemCount:s}=O(e),i=k([]),f=k(9);window.addEventListener("resize",r=>{window.innerWidth>992?f.value=9:f.value=6});const h=B(()=>i.value.reduce((r,a)=>(r[a.id]=a,r),{}));return(async()=>{try{const r=await j();i.value=JSON.parse(JSON.stringify(r.data.products))}catch{q("取得資料錯誤","請重新整理網頁或聯絡客服人員")}finally{}})(),x("productList",i),x("productListMap",h),x("pageItemCount",f),{productList:i,toggleStatus:$,cartItems:w,cartAmount:y,cartItemCount:s,cart:e,route:n,router:v}}},m=l=>(R("data-v-17d3b0e1"),l=l(),z(),l),Y={class:"main-nav container rounded-pill bg-primary py-0 shadow"},Z={class:"container-fluid"},tt={class:"row align-items-center"},et={class:"col col-lg-2 d-flex align-items-center"},ot={class:"offcanvas offcanvas-start text-bg-dark",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},st=m(()=>t("div",{class:"offcanvas-header"},[t("img",{class:"logo",src:C,alt:"logo"}),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),nt={class:"offcanvas-body"},at={class:"menuList"},lt={class:"dropdown-list"},ct={class:"pe-none"},rt=m(()=>t("div",{class:"collapse multi-collapse",id:"productSetting"},null,-1)),it=m(()=>t("img",{class:"logo",src:C,alt:"logo"},null,-1)),dt={class:"col-4 lg-down-hide"},ut={class:"nav"},_t=m(()=>t("ul",{class:"text-black ps-0 py-2 mb-0"},[t("li",{class:"border-bottom px-2 py-1 text-end"},"個人資料"),t("li",{class:"border-bottom px-2 py-1 text-end"},"登出")],-1)),pt={class:"col mobile-hide"},mt={class:"input-group d-center align-items-center rounded-pill border bg-white"},ft=m(()=>t("input",{type:"text",class:"form-control rounded-pill border-0 ps-3",placeholder:"輸入商品關鍵字"},null,-1)),ht={class:"col col-md-3 d-end align-items-center pe-md-5"},bt=m(()=>t("ul",{class:"profile ps-0 py-2 mb-0"},[t("li",{class:"border-bottom px-2 py-1 text-end"},"個人資料"),t("li",{class:"border-bottom px-2 py-1 text-end"},"登出")],-1)),vt={class:"position-relative pe-2"},gt={key:0,class:"position-absolute start-100 translate-middle badge rounded-pill bg-danger"},wt={class:"cartList pb-0"},yt={class:"d-flex align-items-center"},xt=["src","alt"],Mt={class:"card-body d-column p-0 pb-2"},kt={class:"d-between mb-2"},St={class:"card-title fs-small fs-lg-base mb-0"},It={class:"description text-secondary fs-small mb-2"},Lt={class:"text-end mb-0"},Ct={class:"d-column align-items-end p-2"},Nt={class:"mb-2"},Dt={class:"fs-5"},At={key:0,class:"main-bg"},Ft={class:"container content"};function Vt(l,n,v,e,w,y){const s=_("font-awesome-icon"),i=_("router-link"),f=_("MenuList"),h=_("DropDownMenu"),S=_("router-view"),r=_("Footer");return d(),u(M,null,[t("div",Y,[t("div",Z,[t("div",tt,[t("div",et,[o(s,{class:"fs-5 text-white me-3 lg-up-hide",icon:"fa-bars",role:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar","aria-label":"Toggle navigation"}),t("div",ot,[st,t("div",nt,[o(f,null,{menu:c(()=>[t("ul",at,[t("li",null,[o(i,{class:"menu-link",to:"/eStore/home"},{default:c(()=>[o(s,{icon:"fa-home",role:"button"}),b("首頁")]),_:1})]),t("li",lt,[t("div",{class:"dropdown-title",onClick:n[0]||(n[0]=(...a)=>e.toggleStatus&&e.toggleStatus(...a)),"data-bs-toggle":"collapse","data-bs-target":"#productSetting","aria-expanded":"false","aria-controls":"productSetting"},[t("span",ct,[o(s,{class:"",icon:"fa-list",role:"button"}),b("商品列表 ")]),o(s,{class:"dropdown-arrow pe-none",icon:"fa-chevron-right"})]),rt])])]),_:1})])]),it]),t("div",dt,[t("ul",ut,[t("li",null,[o(i,{class:"menu-link",to:"/eStore/home"},{default:c(()=>[b("首頁")]),_:1})]),t("li",null,[o(h,null,{header:c(()=>[o(i,{class:"menu-link",to:"productList"},{default:c(()=>[b("商品列表")]),_:1})]),menu:c(()=>[_t]),_:1})])])]),t("div",pt,[t("div",mt,[ft,o(s,{class:"px-3",icon:"fa-search",role:"button"})])]),t("div",ht,[o(h,null,{header:c(()=>[o(s,{class:"fs-5 ms-3 ms-md-4 text-white",icon:"fa-user",role:"button"})]),menu:c(()=>[bt]),_:1}),o(h,null,{header:c(()=>[t("div",vt,[o(s,{class:"fs-5 ms-3 ms-md-4 text-white",icon:"fa-cart-shopping",role:"button"}),e.cartItems.length>0?(d(),u("span",gt,p(e.cartItemCount),1)):g("",!0)])]),menu:c(()=>[e.cartItems.length>0?(d(),u(M,{key:0},[t("div",wt,[(d(!0),u(M,null,P(e.cartItems,(a,N)=>(d(),u("div",{class:"card mb-2 border-0 border-bottom rounded-0",key:a.info.id},[t("div",yt,[t("img",{src:a.info.imageUrl,alt:a.info.title},null,8,xt),t("div",Mt,[t("div",kt,[t("h5",St,p(a.info.title),1),o(s,{onClick:Tt=>e.cart.delItem(N),icon:"fa-xmark",class:"del-btn m-0 text-secondary"},null,8,["onClick"])]),t("p",It,p(a.info.description),1),t("p",Lt," $ "+p(a.info.price.toLocaleString())+" * "+p(a.count),1)])])]))),128))]),t("div",Ct,[t("p",Nt,[b(" 總金額: "),t("span",Dt,"$ "+p(e.cartAmount.toLocaleString()),1)]),t("button",{type:"button",class:"btn btn-primary w-100",onClick:n[1]||(n[1]=a=>e.router.push("/eStore/cart"))}," 查看購物車 ")])],64)):g("",!0)]),_:1})])])])]),e.route.name==="home"?(d(),u("div",At)):g("",!0),t("div",Ft,[o(S)]),o(r)],64)}const jt=L(X,[["render",Vt],["__scopeId","data-v-17d3b0e1"]]);export{jt as default};
