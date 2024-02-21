import{G as D,_ as v,a as k,r as A,n as y,q as M,g as B,A as S,H as C,s as N,B as f,o as g,c as x,b as t,h as n,I as L,i as _,E as m,j as $,F as T,p as q,f as W}from"./index-831c0040.js";import{b as P,a as V}from"./bootstrap-b7bd2b15.js";import{_ as b}from"./e-store-logo-4781a984.js";const I=D("menuStore",{state:()=>({menu:!0}),getters:{menuStatus:c=>c.menu},actions:{showMenu(){this.menu=!0},hideMenu(){this.menu=!1},toggleMenu(){this.menu=!this.menu}}});const j={setup(){const c=k(),a={},u=A(null);y(()=>c.path,d=>{p()});const l=(d,s=null)=>{if(s)for(const e in a)e!==s&&a[e][d]();else for(const e in a)a[e][d]()},p=async()=>{await S();const s=document.querySelector(".router-link-active").parentElement,e=o=>{o.forEach(r=>{r.classList.remove("show"),r.classList.remove("active")})};if(s.classList.contains("collapse-item")){const o=s.getAttribute("parentId");if(u.value!==o){u.value=o;const r=document.querySelectorAll(".dropdown-title:not(.show)");e(r);const i=document.querySelector(`[aria-controls=${o}]`);l("hide",o),await S(),setTimeout(()=>{i.classList.add("active"),i.classList.add("show"),a[o].show()},100)}}else{const o=document.querySelectorAll(".dropdown-title");e(o),l("hide"),u.value=null}};M(()=>{document.querySelectorAll(".collapse").forEach(s=>{a[s.id]=P(s.id)}),p()})}};function F(c,a,u,l,p,d){return B(c.$slots,"menu",{},void 0,!0)}const E=v(j,[["render",F],["__scopeId","data-v-b90e3ba3"]]);const H={components:{MenuList:E},emits:["changeMenuStatus"],setup(c,a){const u=k();y(()=>u.path,r=>{if(window.innerWidth<992){V("offcanvasDarkNavbar").hide();const i=document.getElementById("offcanvasDarkNavbar"),w=document.querySelector(".offcanvas-backdrop");i&&w&&(w.remove(),i.classList.remove("show"),document.body.removeAttribute("data-bs-overflow"),document.body.removeAttribute("data-bs-padding-right"),document.body.style="")}});const l=I(),{emit:p}=a,{menuStatus:d}=C(l);window.innerWidth<992?l.hideMenu():l.showMenu();const s=()=>{p("changeMenuStatus")},e={};return{setCookie:N,setMenuStatus:s,menuStatus:d,toggleStatus:r=>{const i=r.target.getAttribute("aria-controls");e[i]===void 0&&(e[i]=!0),e[i]&&r.target.classList.toggle("show"),e[i]=!1,setTimeout(()=>{e[i]=!0},350)}}}},h=c=>(q("data-v-fd5126d6"),c=c(),W(),c),O={class:"navbar navbar-expand-lg navbar-dark bg-dark px-2 pt-1"},R={class:"container-fluid"},z={class:"navbar-brand p-0"},G=h(()=>t("img",{src:b,class:"menu-logo-mobile lg-up-hide",alt:"logo"},null,-1)),Y=h(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasDarkNavbar","aria-controls":"offcanvasDarkNavbar"},[t("span",{class:"navbar-toggler-icon"})],-1)),J={class:"offcanvas offcanvas-end text-bg-dark",tabindex:"-1",id:"offcanvasDarkNavbar","aria-labelledby":"offcanvasDarkNavbarLabel"},K=h(()=>t("div",{class:"lg-up-hide d-end p-2"},[t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),Q=h(()=>t("div",{class:"offcanvas-header justify-content-center"},[t("img",{src:b,class:"menu-logo-medium",alt:"logo"})],-1)),U={class:"offcanvas-body d-column align-items-center align-items-lg-end"},X={class:"navbar-nav flex-grow-1 lg-up-hide w-100"},Z={class:"menuList"},tt={class:"dropdown-list"},et={class:"pe-none"},ot={class:"collapse multi-collapse",id:"productSetting"},st={class:"collapse-item",parentId:"productSetting"},nt={class:"collapse-item",parentId:"productSetting"},at={class:"collapse-item",parentId:"productSetting"},lt={class:"d-center"},ct={class:"dashboard-content"},it=h(()=>t("footer",null,[t("div",{class:"d-between w-100 flex-wrap"},[t("span",null,"Copyright © 2023 YuHung Lin"),t("span",null,"本作品僅作為個人作品使用，不含任何商業行為")])],-1));function dt(c,a,u,l,p,d){const s=f("font-awesome-icon"),e=f("router-link"),o=f("MenuList"),r=f("router-view");return g(),x(T,null,[t("nav",O,[t("div",R,[t("div",z,[n(s,{class:"lg-down-hide",icon:l.menuStatus?"fa-arrow-left":"fa-arrow-right",role:"button",onClick:l.setMenuStatus},null,8,["icon","onClick"]),G]),Y,t("div",J,[K,Q,t("div",U,[t("div",X,[l.menuStatus?$("",!0):(g(),L(o,{key:0},{menu:_(()=>[t("ul",Z,[t("li",null,[n(e,{class:"menu-link",to:"home"},{default:_(()=>[n(s,{class:"",icon:"fa-home",role:"button"}),m("首頁")]),_:1})]),t("li",tt,[t("div",{class:"dropdown-title",onClick:a[0]||(a[0]=(...i)=>l.toggleStatus&&l.toggleStatus(...i)),"data-bs-toggle":"collapse","data-bs-target":"#productSetting","aria-expanded":"false","aria-controls":"productSetting"},[t("span",et,[n(s,{class:"",icon:"fa-list",role:"button"}),m("產品設定 ")]),n(s,{class:"dropdown-arrow pe-none",icon:"fa-chevron-right"})]),t("div",ot,[t("ul",null,[t("li",st,[n(e,{class:"menu-link",to:"setProduct"},{default:_(()=>[m("建立商品")]),_:1})]),t("li",nt,[n(e,{class:"menu-link",to:"editProduct"},{default:_(()=>[m("修改商品")]),_:1})]),t("li",at,[n(e,{class:"menu-link",to:"productList"},{default:_(()=>[m("商品列表")]),_:1})])])])]),t("li",null,[n(e,{class:"menu-link",to:"orderManage"},{default:_(()=>[n(s,{class:"",icon:"fa-cart-shopping",role:"button"}),m("購物車")]),_:1})])])]),_:1}))]),t("div",lt,[n(e,{class:"menu-link",to:"/login",onClick:a[1]||(a[1]=i=>l.setCookie("token",""))},{default:_(()=>[m("登出"),n(s,{icon:"fa-sign-out-alt",class:"ms-2"})]),_:1})])])])])]),t("div",ct,[n(r),it])],64)}const rt=v(H,[["render",dt],["__scopeId","data-v-fd5126d6"]]),ut={components:{DashboardContent:rt,MenuList:E},setup(){const c=I(),{menuStatus:a}=C(c);window.innerWidth<992?c.hideMenu():c.showMenu();const u=e=>{const o=document.getElementById("dashboard-content-layout");if(e==="show"){const r=window.outerWidth;if(o.style.marginLeft="250px",o.style.width=`${r-250}px`,!a.value){const i=document.getElementById("dashboard-menu");i.style.width="250px",c.showMenu()}}else{const r=document.getElementById("dashboard-menu");r.style.width=0,o.style.marginLeft=0,o.style.width="100%",c.hideMenu()}},l=()=>{let e=window.innerWidth;e>window.screen.width&&(e=window.screen.width),e<992&&a.value?u("hide"):e>992&&u("show")},p=()=>a.value?u("hide"):u("show"),d={},s=e=>{const o=e.target.getAttribute("aria-controls");d[o]===void 0&&(d[o]=!0),d[o]&&e.target.classList.toggle("show"),d[o]=!1,setTimeout(()=>{d[o]=!0},350)};return M(()=>{window.addEventListener("resize",()=>{setTimeout(()=>{l()},200)})}),{changeMenuStatus:p,menuStatus:a,toggleStatus:s}}},_t={class:"d-flex"},mt={class:"dashboard-menu",id:"dashboard-menu"},pt=t("div",{class:"px-2 d-center"},[t("img",{src:b,class:"menu-logo",alt:""})],-1),ft={class:"menuList"},ht={class:"dropdown-list"},gt={class:"pe-none"},vt={class:"collapse multi-collapse",id:"productSetting"},bt={class:"collapse-item",parentId:"productSetting"},wt={class:"collapse-item",parentId:"productSetting"},St={class:"collapse-item",parentId:"productSetting"},kt={class:"dashboard-content-layout",id:"dashboard-content-layout"};function yt(c,a,u,l,p,d){const s=f("font-awesome-icon"),e=f("router-link"),o=f("MenuList"),r=f("DashboardContent");return g(),x("div",_t,[t("div",mt,[pt,l.menuStatus?(g(),L(o,{key:0},{menu:_(()=>[t("ul",ft,[t("li",null,[n(e,{class:"menu-link",to:"home"},{default:_(()=>[n(s,{class:"",icon:"fa-home",role:"button"}),m("首頁")]),_:1})]),t("li",ht,[t("div",{class:"dropdown-title",onClick:a[0]||(a[0]=(...i)=>l.toggleStatus&&l.toggleStatus(...i)),"data-bs-toggle":"collapse","data-bs-target":"#productSetting","aria-expanded":"false","aria-controls":"productSetting"},[t("span",gt,[n(s,{class:"",icon:"fa-list",role:"button"}),m("產品設定 ")]),n(s,{class:"dropdown-arrow pe-none",icon:"fa-chevron-right"})]),t("div",vt,[t("ul",null,[t("li",bt,[n(e,{class:"menu-link",to:"setProduct"},{default:_(()=>[m("建立商品")]),_:1})]),t("li",wt,[n(e,{class:"menu-link",to:"editProduct"},{default:_(()=>[m("修改商品")]),_:1})]),t("li",St,[n(e,{class:"menu-link",to:"productList"},{default:_(()=>[m("商品列表")]),_:1})])])])]),t("li",null,[n(e,{class:"menu-link",to:"orderManage"},{default:_(()=>[n(s,{class:"",icon:"fa-cart-shopping",role:"button"}),m("購物車")]),_:1})])])]),_:1})):$("",!0)]),t("div",kt,[n(r,{onChangeMenuStatus:l.changeMenuStatus},null,8,["onChangeMenuStatus"])])])}const Lt=v(ut,[["render",yt]]);export{Lt as default};
