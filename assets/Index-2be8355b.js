import{_ as A,r as I,o as d,c as u,m as k,h as e,i as r,n as M,q as N,T as F,b as f,a as P,u as V,t as O,l as z,x as R,y as T,z as L,d as t,A as E,F as y,B as p,C as S,D as m,p as J,k as j}from"./index-98dec3a2.js";import{M as q}from"./MenuList-2b34dc47.js";import{t as G}from"./util-c555d8f6.js";import{F as U}from"./Footer-27fb07e9.js";import{a as W}from"./api-e60f54dc.js";import{e as H}from"./sweetAlert-364c7ec7.js";import{c as K}from"./cart-6de921c8.js";import{h as Q}from"./bootstrap-85f3c97e.js";import{t as X}from"./translate-28289832.js";import{_ as B}from"./e-store-logo-4781a984.js";const Y={props:{alignLeft:{type:Boolean,default:!1}},setup(l){const s=l.alignLeft,i=I(!1);return{menuVisible:i,showMenu:()=>{i.value=!0},hideMenu:()=>{i.value=!1},alignLeft:s}}};function Z(l,s,i,o,h,x){return d(),u("div",{class:"menu py-2 py-md-4",onMouseenter:s[0]||(s[0]=(...n)=>o.showMenu&&o.showMenu(...n)),onTouchend:s[1]||(s[1]=(...n)=>o.hideMenu&&o.hideMenu(...n)),onMouseleave:s[2]||(s[2]=(...n)=>o.hideMenu&&o.hideMenu(...n))},[k(l.$slots,"header",{},void 0,!0),e(F,{name:"custom-classes","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"},{default:r(()=>[o.menuVisible?(d(),u("div",{key:0,class:M(["dropdown shadow card",[o.alignLeft?"start-0":"end-0"]])},[k(l.$slots,"menu",{},void 0,!0)],2)):N("",!0)]),_:3})],32)}const $=A(Y,[["render",Z],["__scopeId","data-v-514172b0"]]);const tt={props:{show:{type:Boolean,default:!1},collapseId:{type:String}},setup(l){const s=I(l.show?"fa-chevron-up":"fa-chevron-down");let i=!0;return{iconName:s,toggleIcon:()=>{i&&(i=!1,s.value=s.value==="fa-chevron-up"?"fa-chevron-down":"fa-chevron-up",setTimeout(()=>{i=!0},350))},props:l}}};function ot(l,s,i,o,h,x){const n=f("font-awesome-icon");return d(),u("div",{class:"d-flex",onClick:s[0]||(s[0]=(...c)=>o.toggleIcon&&o.toggleIcon(...c))},[k(l.$slots,"title"),e(n,{"data-bs-toggle":"collapse","data-bs-target":`#${i.collapseId}`,"aria-expanded":"true","aria-controls":`${i.collapseId}`,class:"text-secondary m-0",icon:o.iconName,role:"button"},null,8,["data-bs-target","aria-controls","icon"])])}const et=A(tt,[["render",ot]]);const st={components:{DropDownMenu:$,MenuList:q,Footer:U,ToggleArrowIcon:et},setup(l){const s=P();console.log("🚀  route:",s.fullPath.includes("/eStore/productList"));const i=V();O(()=>s.path,_=>{Q("offcanvasNavbar")}),z();const o=K(),{cartItems:h,cartAmount:x,cartItemCount:n}=R(o),c=I([]),v=I(9);window.addEventListener("resize",_=>{window.innerWidth>992?v.value=9:v.value=6});const C=T(()=>c.value.reduce((_,a)=>(_[a.id]=a,_),{})),g=T(()=>{const _={};return c.value.reduce((a,b)=>(_[b.category]||(_[b.category]=!0,a.push(b.category)),a),[])});return(async()=>{try{const _=await W();console.log(_),c.value=JSON.parse(JSON.stringify(_.data.products))}catch{H("取得資料錯誤","請重新整理網頁或聯絡客服人員")}})(),L("productList",c),L("productListMap",C),L("pageItemCount",v),L("productCategoryList",g),{productList:c,toggleStatus:G,cartItems:h,cartAmount:x,cartItemCount:n,cart:o,route:s,router:i,productCategoryList:g,translate:X}}},w=l=>(J("data-v-81495685"),l=l(),j(),l),at={class:"main-nav container rounded-pill bg-primary py-0 shadow"},nt={class:"container-fluid"},rt={class:"row align-items-center"},ct={class:"col col-lg-2 d-flex align-items-center"},lt={class:"offcanvas offcanvas-start text-bg-dark",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},it=w(()=>t("div",{class:"offcanvas-header"},[t("img",{class:"logo",src:B,alt:"logo"}),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),dt={class:"offcanvas-body"},ut={class:"menuList"},_t={class:"dropdown-list"},pt={class:"pe-none"},mt={class:"collapse multi-collapse",id:"productList"},ft={class:"mt-3 ps-4"},gt={parentId:"productList",class:"collapse-item"},ht={parentId:"productList",class:"collapse-item"},vt=w(()=>t("span",{class:"pe-none"},"商品分類 ",-1)),bt={class:"collapse multi-collapse",id:"productCategory"},yt={class:"mt-3 ps-3"},wt=w(()=>t("img",{class:"logo",src:B,alt:"logo"},null,-1)),xt={class:"col-4 lg-down-hide"},Lt={class:"nav"},It={class:"product-menu p-4"},Ct={class:"d-column flex-grow-1"},St={class:"accordion",id:"category",style:{width:"max-content"}},kt={class:"accordion-item border-0"},Mt=w(()=>t("h2",{class:"accordion-header fs-6 pb-2 pe-2","data-bs-toggle":"collapse","data-bs-target":"#productCategory","aria-expanded":"true","aria-controls":"category",style:{"user-select":"none"}}," 商品分類 ",-1)),Nt={id:"productCategory",class:"accordion-collapse collapse p-0 show","data-bs-parent":"#category"},At={class:"accordion-body p-0 border-top"},Dt={class:"container-fluid mt-2"},Tt={class:"row row-cols-2"},Bt=w(()=>t("div",{class:"col mobile-hide"},null,-1)),Ft={class:"col col-md-3 d-end align-items-center pe-md-5"},Pt={class:"profile py-2"},Vt={class:"position-relative pe-2"},Ot={key:0,class:"position-absolute start-100 translate-middle badge rounded-pill bg-danger"},zt={class:"cartList pb-0"},Rt={class:"d-flex align-items-center"},Et=["src","alt"],Jt={class:"card-body d-column p-0 pb-2"},jt={class:"d-between mb-2"},qt={class:"card-title fs-small fs-lg-base mb-0"},Gt={class:"description text-secondary fs-small mb-2"},Ut={class:"text-end mb-0"},Wt={class:"d-column align-items-end p-2"},Ht={class:"mb-2"},Kt={class:"fs-5"},Qt={key:1,class:"m-4 text-nowrap mb-0 pb-4 fs-5"},Xt={key:0,class:"main-bg"},Yt={class:"container content"};function Zt(l,s,i,o,h,x){const n=f("font-awesome-icon"),c=f("router-link"),v=f("MenuList"),C=f("ToggleArrowIcon"),g=f("DropDownMenu"),D=f("router-view"),_=f("Footer");return d(),u(y,null,[t("div",at,[t("div",nt,[t("div",rt,[t("div",ct,[e(n,{class:"fs-5 text-white me-3 lg-up-hide",icon:"fa-bars",role:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar","aria-label":"Toggle navigation"}),t("div",lt,[it,t("div",dt,[e(v,null,{menu:r(()=>[t("ul",ut,[t("li",null,[e(c,{class:"menu-link",to:"/eStore/home"},{default:r(()=>[e(n,{icon:"fa-home",role:"button"}),p("首頁")]),_:1})]),t("li",_t,[t("div",{class:"dropdown-title",onClick:s[0]||(s[0]=(...a)=>o.toggleStatus&&o.toggleStatus(...a)),"data-bs-toggle":"collapse","data-bs-target":"#productList","aria-expanded":"false","aria-controls":"productList"},[t("span",pt,[e(n,{icon:"fa-list",role:"button"}),p("商品列表 ")]),e(n,{class:"dropdown-arrow pe-none",icon:"fa-chevron-right"})]),t("div",mt,[t("ul",ft,[t("li",gt,[e(c,{class:"menu-link",to:"/eStore/productList"},{default:r(()=>[p("所有商品")]),_:1})]),t("li",ht,[t("div",{class:M(["dropdown-title d-inline-flex align-items-center justify-content-between w-90",{"router-link-active":o.route.fullPath.includes("/eStore/productList/")}]),onClick:s[1]||(s[1]=(...a)=>o.toggleStatus&&o.toggleStatus(...a)),"data-bs-toggle":"collapse","data-bs-target":"#productCategory","aria-expanded":"false","aria-controls":"productCategory"},[vt,e(n,{class:"dropdown-arrow pe-none",icon:"fa-chevron-right"})],2),t("div",bt,[t("ul",yt,[(d(!0),u(y,null,S(o.productCategoryList,a=>(d(),u("li",{class:"collapse-item",parentId:"productCategory",key:a},[e(c,{class:"menu-link text-underline-hover",to:`/eStore/productList/${o.translate(a)}`},{default:r(()=>[p(m(a),1)]),_:2},1032,["to"])]))),128))])])])])])])])]),_:1})])]),wt]),t("div",xt,[t("ul",Lt,[t("li",null,[e(c,{class:"menu-link",to:"/eStore/home"},{default:r(()=>[p("首頁")]),_:1})]),t("li",null,[e(g,{alignLeft:!0},E({header:r(()=>[t("span",{class:M(["menu-link",{"text-white":o.route.fullPath.includes("/eStore/productList")}])},[p("商品列表"),e(n,{class:"ms-2",icon:"fa-chevron-down",role:"button"})],2)]),_:2},[o.productCategoryList.length>0?{name:"menu",fn:r(()=>[t("div",It,[t("div",Ct,[e(c,{to:"/eStore/productList",class:"text-secondary fs-6 pb-2 mb-2 text-underline-hover"},{default:r(()=>[e(n,{icon:"fa-list",class:"me-1"}),p(" 所有商品")]),_:1}),t("div",St,[t("div",kt,[e(C,{show:!0,collapseId:"productCategory"},{title:r(()=>[Mt]),_:1}),t("div",Nt,[t("div",At,[t("div",Dt,[t("div",Tt,[(d(!0),u(y,null,S(o.productCategoryList,a=>(d(),u("div",{class:"col ps-0 py-1",key:a},[e(c,{class:"text-underline-hover text-secondary text-nowrap",to:`/eStore/productList/${o.translate(a)}`},{default:r(()=>[p(m(a),1)]),_:2},1032,["to"])]))),128))])])])])])])])])]),key:"0"}:void 0]),1024)])])]),Bt,t("div",Ft,[e(g,null,{header:r(()=>[e(n,{class:"fs-5 ms-3 ms-md-4 text-white",icon:"fa-user",role:"button"})]),menu:r(()=>[t("div",Pt,[e(c,{to:"/dashboard/home",class:"border-bottom px-2 py-1 text-end text-primary"},{default:r(()=>[p("後臺管理")]),_:1}),e(c,{to:"/eStore/userOrder",class:"border-bottom px-2 py-1 text-end text-primary"},{default:r(()=>[p("訂單列表")]),_:1})])]),_:1}),e(g,null,{header:r(()=>[t("div",Vt,[e(n,{class:"fs-5 ms-3 ms-md-4 text-white",icon:"fa-cart-shopping",role:"button"}),o.cartItems.length>0?(d(),u("span",Ot,m(o.cartItemCount),1)):N("",!0)])]),menu:r(()=>[o.cartItems.length>0?(d(),u(y,{key:0},[t("div",zt,[(d(!0),u(y,null,S(o.cartItems,(a,b)=>(d(),u("div",{class:"card mb-2 border-0 border-bottom rounded-0",key:a.info.id},[t("div",Rt,[t("img",{src:a.info.imageUrl,alt:a.info.title},null,8,Et),t("div",Jt,[t("div",jt,[t("h5",qt,m(a.info.title),1),e(n,{onClick:$t=>o.cart.delItem(b),icon:"fa-xmark",class:"del-btn m-0 text-secondary"},null,8,["onClick"])]),t("p",Gt,m(a.info.description),1),t("p",Ut," $ "+m(a.info.price.toLocaleString())+" * "+m(a.count),1)])])]))),128))]),t("div",Wt,[t("p",Ht,[p(" 總金額: "),t("span",Kt,"$ "+m(o.cartAmount.toLocaleString()),1)]),t("button",{type:"button",class:"btn btn-primary w-100",onClick:s[2]||(s[2]=a=>o.router.push("/eStore/cart"))}," 查看購物車 ")])],64)):(d(),u("p",Qt,[p(" 目前還未將商品加入購物車 "),e(n,{class:"ms-1",icon:"fa-face-frown"})]))]),_:1})])])])]),o.route.name==="home"?(d(),u("div",Xt)):N("",!0),t("div",Yt,[e(D)]),e(_)],64)}const uo=A(st,[["render",Zt],["__scopeId","data-v-81495685"]]);export{uo as default};