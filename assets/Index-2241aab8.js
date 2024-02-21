import{N as L,_ as w,a as $,n as N,B as k,s as B,C as r,o as h,c as S,b as t,h as e,H as M,i,E as l,j as y,F as D,p as E,f as W,q as F}from"./index-e25effd4.js";import{M as x,F as P}from"./Footer-7245c163.js";import{a as V}from"./bootstrap-c79e1512.js";import{t as C}from"./util-03711dca.js";import{_ as v}from"./e-store-logo-4781a984.js";const I=L("menuStore",{state:()=>({menu:!0}),getters:{menuStatus:a=>a.menu},actions:{showMenu(){this.menu=!0},hideMenu(){this.menu=!1},toggleMenu(){this.menu=!this.menu}}});const T={components:{MenuList:x,Footer:P},emits:["changeMenuStatus"],setup(a,c){const u=$();N(()=>u.path,n=>{if(window.innerWidth<992){V("offcanvasDarkNavbar").hide();const _=document.getElementById("offcanvasDarkNavbar"),m=document.querySelector(".offcanvas-backdrop");_&&m&&(m.remove(),_.classList.remove("show"),document.body.removeAttribute("data-bs-overflow"),document.body.removeAttribute("data-bs-padding-right"),document.body.style="")}});const o=I(),{emit:p}=c,{menuStatus:d}=k(o);return window.innerWidth<992?o.hideMenu():o.showMenu(),{setCookie:B,setMenuStatus:()=>{p("changeMenuStatus")},menuStatus:d,toggleStatus:C}}},f=a=>(E("data-v-5d3e5583"),a=a(),W(),a),j={class:"navbar navbar-expand-lg navbar-dark bg-dark px-2 pt-1"},q={class:"container-fluid"},A={class:"navbar-brand p-0"},R=f(()=>t("img",{src:v,class:"menu-logo-mobile lg-up-hide",alt:"logo"},null,-1)),z=f(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasDarkNavbar","aria-controls":"offcanvasDarkNavbar"},[t("span",{class:"navbar-toggler-icon"})],-1)),H={class:"offcanvas offcanvas-end text-bg-dark",tabindex:"-1",id:"offcanvasDarkNavbar","aria-labelledby":"offcanvasDarkNavbarLabel"},O=f(()=>t("div",{class:"lg-up-hide d-end p-2"},[t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),G=f(()=>t("div",{class:"offcanvas-header justify-content-center"},[t("img",{src:v,class:"menu-logo-medium",alt:"logo"})],-1)),J={class:"offcanvas-body d-column align-items-center align-items-lg-end"},K={class:"navbar-nav flex-grow-1 lg-up-hide w-100"},Q={class:"menuList"},U={class:"dropdown-list"},X={class:"pe-none"},Y={class:"collapse multi-collapse",id:"productSetting"},Z={class:"collapse-item",parentId:"productSetting"},tt={class:"collapse-item",parentId:"productSetting"},et={class:"collapse-item",parentId:"productSetting"},ot={class:"d-center"},st={class:"dashboard-content"};function nt(a,c,u,o,p,d){const s=r("font-awesome-icon"),n=r("router-link"),_=r("MenuList"),m=r("router-view"),g=r("Footer");return h(),S(D,null,[t("nav",j,[t("div",q,[t("div",A,[e(s,{class:"lg-down-hide",icon:o.menuStatus?"fa-arrow-left":"fa-arrow-right",role:"button",onClick:o.setMenuStatus},null,8,["icon","onClick"]),R]),z,t("div",H,[O,G,t("div",J,[t("div",K,[o.menuStatus?y("",!0):(h(),M(_,{key:0},{menu:i(()=>[t("ul",Q,[t("li",null,[e(n,{class:"menu-link",to:"home"},{default:i(()=>[e(s,{class:"",icon:"fa-home",role:"button"}),l("首頁")]),_:1})]),t("li",U,[t("div",{class:"dropdown-title",onClick:c[0]||(c[0]=(...b)=>o.toggleStatus&&o.toggleStatus(...b)),"data-bs-toggle":"collapse","data-bs-target":"#productSetting","aria-expanded":"false","aria-controls":"productSetting"},[t("span",X,[e(s,{class:"",icon:"fa-list",role:"button"}),l("產品設定 ")]),e(s,{class:"dropdown-arrow pe-none",icon:"fa-chevron-right"})]),t("div",Y,[t("ul",null,[t("li",Z,[e(n,{class:"menu-link",to:"setProduct"},{default:i(()=>[l("建立商品")]),_:1})]),t("li",tt,[e(n,{class:"menu-link",to:"editProduct"},{default:i(()=>[l("修改商品")]),_:1})]),t("li",et,[e(n,{class:"menu-link",to:"productList"},{default:i(()=>[l("商品列表")]),_:1})])])])]),t("li",null,[e(n,{class:"menu-link",to:"orderManage"},{default:i(()=>[e(s,{class:"",icon:"fa-cart-shopping",role:"button"}),l("購物車")]),_:1})])])]),_:1}))]),t("div",ot,[e(n,{class:"menu-link",to:"/login",onClick:c[1]||(c[1]=b=>o.setCookie("token",""))},{default:i(()=>[l("登出"),e(s,{icon:"fa-sign-out-alt",class:"ms-2"})]),_:1})])])])])]),t("div",st,[e(m),e(g)])],64)}const at=w(T,[["render",nt],["__scopeId","data-v-5d3e5583"]]),ct={components:{DashboardContent:at,MenuList:x},setup(){const a=I(),{menuStatus:c}=k(a);window.innerWidth<992?a.hideMenu():a.showMenu();const u=d=>{const s=document.getElementById("dashboard-content-layout");if(d==="show"){const n=window.outerWidth;if(s.style.marginLeft="250px",s.style.width=`${n-250}px`,!c.value){const _=document.getElementById("dashboard-menu");_.style.width="250px",a.showMenu()}}else{const n=document.getElementById("dashboard-menu");n.style.width=0,s.style.marginLeft=0,s.style.width="100%",a.hideMenu()}},o=()=>{let d=window.innerWidth;d>window.screen.width&&(d=window.screen.width),d<992&&c.value?u("hide"):d>992&&u("show")},p=()=>c.value?u("hide"):u("show");return F(()=>{window.addEventListener("resize",()=>{setTimeout(()=>{o()},200)})}),{changeMenuStatus:p,menuStatus:c,toggleStatus:C}}},it={class:"d-flex"},lt={class:"dashboard-menu",id:"dashboard-menu"},dt=t("div",{class:"px-2 d-center"},[t("img",{src:v,class:"menu-logo",alt:""})],-1),rt={class:"menuList"},ut={class:"dropdown-list"},_t={class:"pe-none"},mt={class:"collapse multi-collapse",id:"productSetting"},pt={class:"collapse-item",parentId:"productSetting"},ht={class:"collapse-item",parentId:"productSetting"},ft={class:"collapse-item",parentId:"productSetting"},gt={class:"dashboard-content-layout",id:"dashboard-content-layout"};function vt(a,c,u,o,p,d){const s=r("font-awesome-icon"),n=r("router-link"),_=r("MenuList"),m=r("DashboardContent");return h(),S("div",it,[t("div",lt,[dt,o.menuStatus?(h(),M(_,{key:0},{menu:i(()=>[t("ul",rt,[t("li",null,[e(n,{class:"menu-link",to:"home"},{default:i(()=>[e(s,{class:"",icon:"fa-home",role:"button"}),l("首頁")]),_:1})]),t("li",ut,[t("div",{class:"dropdown-title",onClick:c[0]||(c[0]=(...g)=>o.toggleStatus&&o.toggleStatus(...g)),"data-bs-toggle":"collapse","data-bs-target":"#productSetting","aria-expanded":"false","aria-controls":"productSetting"},[t("span",_t,[e(s,{class:"",icon:"fa-list",role:"button"}),l("產品設定 ")]),e(s,{class:"dropdown-arrow pe-none",icon:"fa-chevron-right"})]),t("div",mt,[t("ul",null,[t("li",pt,[e(n,{class:"menu-link",to:"setProduct"},{default:i(()=>[l("建立商品")]),_:1})]),t("li",ht,[e(n,{class:"menu-link",to:"editProduct"},{default:i(()=>[l("修改商品")]),_:1})]),t("li",ft,[e(n,{class:"menu-link",to:"productList"},{default:i(()=>[l("商品列表")]),_:1})])])])]),t("li",null,[e(n,{class:"menu-link",to:"orderManage"},{default:i(()=>[e(s,{class:"",icon:"fa-cart-shopping",role:"button"}),l("購物車")]),_:1})])])]),_:1})):y("",!0)]),t("div",gt,[e(m,{onChangeMenuStatus:o.changeMenuStatus},null,8,["onChangeMenuStatus"])])])}const yt=w(ct,[["render",vt]]);export{yt as default};
