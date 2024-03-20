import{P as D,_ as V,S as N,a as B,f as j,N as E,A as G}from"./gameConsoleAd-f5f66e6b.js";import{_ as k,u as S,A as y,r as A,n as F,t as p,o as c,c as _,b as e,F as u,z as b,y as a,h as r,p as L,f as P,B as x,i as v,x as H}from"./index-7c3c473e.js";import{c as M}from"./cart-a2780df5.js";const T={components:{Pagination:D},setup(l){const n=S(),m=y("productList"),t=A(1),d=y("pageItemCount"),w=F(()=>m.value.slice(t.value*d.value-d.value,d.value*t.value));return{nowPage:t,productList:m,showData:w,changeShowData:o=>{t.value=o},pageItemCount:d,showDetail:o=>{n.push(`productInfo/${o}`)}}}},$=l=>(L("data-v-7f83243d"),l=l(),P(),l),U=$(()=>e("h2",{class:"fs-4 mt-5"},"新品上市",-1)),z={class:"container-fluid"},O={class:"row"},R={class:"col-lg ps-0 d-column justify-content-between"},q={class:"row row-cols-2 row-cols-md-3 align-items-center g-4"},J={class:"card card-hover-shadow"},K={class:"row g-0"},Q={class:"col-lg-5 d-center"},W=["src","alt","title","onClick"],X={class:"col-lg-7"},Y={class:"card-body py-0 d-column justify-content-center h-100"},Z=["onClick"],ee={class:"d-flex"},te={class:"card-text mt-1"},se={class:"d-flex justify-content-end justify-content-md-between align-items-center mt-3 mt-xl-0"},oe={class:"fs-small text-secondary mb-0 mobile-hide"},ne=$(()=>e("div",{class:"col-3"},[e("img",{class:"w-100 h-100 lg-down-hide",src:V,alt:""})],-1));function ae(l,n,m,t,d,w){const h=p("font-awesome-icon"),g=p("Pagination");return c(),_(u,null,[U,e("div",z,[e("div",O,[e("div",R,[e("div",q,[(c(!0),_(u,null,b(t.showData,o=>(c(),_("div",{class:"col",key:o.id},[e("div",J,[e("div",K,[e("div",Q,[e("img",{role:"button",src:o.imageUrl,class:"img-fluid rounded-start",alt:o.title,title:o.title,onClick:f=>t.showDetail(o.id)},null,8,W)]),e("div",X,[e("div",Y,[e("a",{class:"text-link text-underline-hover line-clamp-2 line-clamp-md-1 line-clamp-lg-2 mb-1 fs-small fs-lg-base",role:"button",onClick:f=>t.showDetail(o.id)},a(o.title),9,Z),e("div",ee,[(c(),_(u,null,b(4,(f,s)=>r(h,{key:s,class:"fs-mini m-0 text-warning",icon:"fa-star",role:"button"})),64))]),e("p",te," $ "+a(o.price.toLocaleString()),1)])])])])]))),128))]),e("div",se,[e("p",oe," 顯示 "+a(t.productList.length)+" 筆結果中的 "+a(t.nowPage*t.pageItemCount-t.pageItemCount+1)+" ~ "+a(t.nowPage*t.pageItemCount)+" 筆 ",1),r(g,{data:t.productList,onChangePage:t.changeShowData},null,8,["data","onChangePage"])])]),ne])])],64)}const le=k(T,[["render",ae],["__scopeId","data-v-7f83243d"]]),ce="/vue_Estore/assets/fire-13c1c3f5.png",ie="/vue_Estore/assets/GoldPhone-1-300x300-82e529a7.webp",de="/vue_Estore/assets/consal-822b9cd9.webp";const re={components:{Swiper:N,SwiperSlide:B,NewProduct:le},setup(l){const n=M(),m=S(),t=w=>{m.push(`productInfo/${w}`)};return{productList:y("productList"),cart:n,showDetail:t,modules:[j,E,G]}}},i=l=>(L("data-v-1501e544"),l=l(),P(),l),_e=i(()=>e("div",{class:"main-bg"},null,-1)),me={class:"main-content"},he={class:"main-ad"},pe=i(()=>e("div",{class:"d-column align-items-center align-items-lg-start my-3 animate__animated animate__lightSpeedInLeft"},[e("p",{class:"fs-2 fw-bold text-center text-lg-start"},"限時優惠！"),e("p",{class:"fs-5 fs-sm-4"},"3C產品低至6折，最高立減4000元！"),e("button",{class:"btn btn-primary rounded-pill w-50 py-2 border-white fw-bold"}," 立即查看 ")],-1)),ue={class:"today-promotion animate__animated animate__backInDown"},we=i(()=>e("h2",{class:"mb-3 fs-3 d-flex align-items-center fw-bold"},[e("img",{class:"icon me-1",src:ce,alt:"fire"}),H(" 今日促銷 ")],-1)),ge={class:"card"},fe={class:"product-info border-end pe-3"},ve=i(()=>e("img",{src:ie,alt:"Smartphone"},null,-1)),be={class:"d-between align-items-center"},xe={class:"d-column"},ye={class:"fs-small text-decoration-line-through text-secondary"},Ce={class:"fs-5 text-danger"},ke={class:"product-info ps-3"},Se=i(()=>e("img",{src:de,alt:"Game Console Controller"},null,-1)),Le={class:"d-between align-items-center"},Pe={class:"d-column"},$e={class:"fs-small text-decoration-line-through text-secondary"},Ie={class:"fs-5 text-danger"},De={class:"border p-3 rounded bg-white shadow mb-5"},Ve=i(()=>e("h2",{class:"fs-4"},"熱賣商品",-1)),Ne=i(()=>e("div",{class:"card","aria-hidden":"true"},[e("div",{class:"bg-secondary card-img-top"}),e("div",{class:"card-body"},[e("h5",{class:"card-title placeholder-glow"},[e("span",{class:"placeholder col-6"})]),e("p",{class:"card-text placeholder-glow"},[e("span",{class:"placeholder col-7"}),e("span",{class:"placeholder col-4"}),e("span",{class:"placeholder col-4"}),e("span",{class:"placeholder col-6"}),e("span",{class:"placeholder col-8"})])])],-1)),Be={class:"card h-100 card-hover-shadow"},je={class:"card-body d-column"},Ee=["src","alt","title","onClick"],Ge=["onClick"],Ae=i(()=>e("hr",{class:"my-2"},null,-1)),Fe={class:"card-text flex-grow-1 fs-small"},He={class:"d-between align-items-center"},Me={class:"product-price"};function Te(l,n,m,t,d,w){const h=p("font-awesome-icon"),g=p("swiper-slide"),o=p("swiper"),f=p("NewProduct");return c(),_(u,null,[_e,e("div",me,[e("div",he,[pe,e("div",ue,[we,e("div",ge,[e("div",fe,[e("p",{role:"button",class:"text-underline-hover",onClick:n[0]||(n[0]=s=>t.showDetail(t.productList[2].id))}," Smartphone 6S 32GB LTE "),ve,e("div",be,[e("div",xe,[e("span",ye,"$ "+a(45e3 .toLocaleString()),1),e("span",Ce,"$ "+a(32e3 .toLocaleString()),1)]),r(h,{class:"text-white border rounded-pill p-2 fs-6 btn btn-outline-secondary",icon:"fa-cart-arrow-down",role:"button",onClick:n[1]||(n[1]=s=>t.cart.addItem(t.productList[2]))})])]),e("div",ke,[e("p",{role:"button",class:"text-underline-hover",onClick:n[2]||(n[2]=s=>t.showDetail(t.productList[1].id))}," Game Console Controller "),Se,e("div",Le,[e("div",Pe,[e("span",$e,"$ "+a(4500 .toLocaleString()),1),e("span",Ie,"$ "+a(2500 .toLocaleString()),1)]),r(h,{class:"text-white border rounded-pill p-2 fs-6 btn btn-outline-secondary",icon:"fa-cart-arrow-down",role:"button",onClick:n[3]||(n[3]=s=>t.cart.addItem(t.productList[1]))})])])])])]),e("div",De,[Ve,t.productList.length===0?(c(),x(o,{key:0,slidesPerView:2,spaceBetween:20,breakpoints:{576:{slidesPerView:3},768:{slidesPerView:4},1200:{slidesPerView:5}}},{default:v(()=>[(c(),_(u,null,b(5,s=>r(g,{key:s},{default:v(()=>[Ne]),_:2},1024)),64))]),_:1})):(c(),x(o,{key:1,slidesPerView:2,spaceBetween:20,freeMode:!0,navigation:!0,autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{576:{slidesPerView:3},768:{slidesPerView:4},1200:{slidesPerView:5}},modules:t.modules},{default:v(()=>[(c(!0),_(u,null,b(t.productList,(s,I)=>(c(),x(g,{class:"h-auto",key:I},{default:v(()=>[e("div",Be,[e("div",je,[e("img",{role:"button",src:s.imageUrl,class:"card-img-top mb-2",alt:s.title,title:s.title,onClick:C=>t.showDetail(s.id)},null,8,Ee),e("h5",{class:"card-title text-truncate text-underline-hover mb-0",role:"button",onClick:C=>t.showDetail(s.id)},a(s.title),9,Ge),Ae,e("p",Fe,a(s.description),1),e("div",He,[e("span",Me," $ "+a(s.price.toLocaleString()),1),r(h,{class:"border rounded-pill p-2 fs-6 me-0 btn btn-outline-secondary",icon:"fa-cart-arrow-down",role:"button",onClick:C=>t.cart.addItem(s)},null,8,["onClick"])])])])]),_:2},1024))),128))]),_:1},8,["modules"])),r(f)])])],64)}const Re=k(re,[["render",Te],["__scopeId","data-v-1501e544"]]);export{Re as default};
