import{_ as U,r as g,a as F,C as T,t as P,k as y,o,c as s,b as t,h,i as D,B as n,j as I,F as r,A as _,n as x,w as G,v as L,z as S,e as M,D as B,p as O,f as R}from"./index-e715d583.js";import{P as z,S as W,a as H,f as q,N as J,A as X,_ as K}from"./gameConsoleAd-c6a9611b.js";import{c as Q}from"./cart-4de4a640.js";import{e as Y}from"./sweetAlert-56e02934.js";const Z=[{name:"Tom",comment:"Good!",date:"2024/02/17",star:"3"},{name:"Alice",comment:"Nice product!",date:"2024/03/05",star:"4"},{name:"John",comment:"Could be better.",date:"2024/02/21",star:"2"},{name:"Emily",comment:"Excellent!",date:"2024/02/28",star:"5"},{name:"David",comment:"Average.",date:"2024/03/10",star:"3"},{name:"Sophia",comment:"Not bad.",date:"2024/03/12",star:"3"},{name:"Michael",comment:"Great experience!",date:"2024/02/19",star:"5"},{name:"Emma",comment:"Satisfactory.",date:"2024/03/08",star:"3"},{name:"James",comment:"Poor quality.",date:"2024/02/25",star:"1"},{name:"Olivia",comment:"Amazing!",date:"2024/03/15",star:"5"},{name:"Daniel",comment:"Not what I expected.",date:"2024/02/23",star:"2"},{name:"Ava",comment:"Decent.",date:"2024/03/02",star:"3"},{name:"Matthew",comment:"Fair price.",date:"2024/02/20",star:"4"},{name:"Isabella",comment:"Could improve.",date:"2024/02/27",star:"2"},{name:"William",comment:"Outstanding!",date:"2024/03/18",star:"5"},{name:"Mia",comment:"Not satisfied.",date:"2024/02/22",star:"1"},{name:"Alexander",comment:"Excellent customer service.",date:"2024/03/14",star:"5"},{name:"Ethan",comment:"Average performance.",date:"2024/02/24",star:"3"},{name:"Charlotte",comment:"Fair enough.",date:"2024/03/07",star:"3"},{name:"Benjamin",comment:"Worth the money.",date:"2024/03/16",star:"4"}],N={comment:Z},$="/vue_Estore/assets/overview_hero_title_2x-1536x518-1bf17106.webp",tt="/vue_Estore/assets/overview_hero_2x-e1459776153284-1536x645-a4b55b87.webp",et="/vue_Estore/assets/hero_large_2x-ce92fcce.webp";const at={components:{Pagination:z,Swiper:W,SwiperSlide:H},setup(b){window.scrollTo({top:0,left:0,behavior:"smooth"});const d=g("introduce"),l=g(1),e=F(),A=T("productList"),k=T("productListMap"),v=g(e.params.id),i=g(""),u=P(()=>Object.keys(k.value).length>0?(i.value=k.value[v.value].imageUrl,k.value[v.value]):null),C=P(()=>A.value.filter(c=>c.category===u.value.category&&c.id!==u.value.id)),p=g(1),a=P(()=>N.comment.slice(p.value*8-8,8*p.value)),f=c=>{p.value=c},w=c=>{v.value=c.id,window.scrollTo({top:0,left:0,behavior:"smooth"})},V=(c="reduce")=>{c==="reduce"&&l.value===1||c==="add"&&l.value>99||(c==="reduce"?l.value--:l.value++)},j=c=>{i.value=c},E=Q();return{count:l,showData:u,showDesciption:d,setCount:V,showProductImg:i,setProductImg:j,changeShowComment:f,showComment:a,tempData:N,addToCart:c=>{if(console.log(l.value),l.value<1||l.value>99){Y("請勿輸入購買數量小於1或大於99");return}E.addItem(c,l.value)},relatedProducts:C,changeShowData:w,modules:[q,J,X]}}},m=b=>(O("data-v-8df4f3bc"),b=b(),R(),b),ot={class:"container-fluid mt-4"},st={class:"row"},dt=m(()=>t("div",{class:"col-1 xl-down-hide"},null,-1)),ct={class:"col-xl-4 border-xl-end"},nt={class:"d-column"},rt={key:0,"aria-label":"breadcrumb"},lt={class:"breadcrumb"},it={class:"breadcrumb-item"},mt={class:"breadcrumb-item"},ft={class:"breadcrumb-item active","aria-current":"page"},ht={class:"d-center placeholder-glow"},vt={key:0,class:"product-img w-100 mb-2 placeholder"},_t=["src","alt","title"],bt={class:"d-flex product-imgs justify-content-md-center justify-content-lg-start placeholder-glow"},ut=["src"],pt=["onClick","src"],wt={class:"col-xl"},gt={class:"d-column justify-content-between h-100 mt-2 mt-xl-0"},yt={class:"d-column placeholder-glow"},xt={class:"fs-small text-secondary"},kt=m(()=>t("hr",null,null,-1)),Dt={class:"d-flex mb-1"},Ct=M('<p class="placeholder col-3 mb-5" data-v-8df4f3bc></p><p class="mb-4 placeholder col-4" data-v-8df4f3bc></p><p class="mb-4 placeholder col-8" data-v-8df4f3bc></p><p class="mb-4 placeholder col-4" data-v-8df4f3bc></p><p class="mb-4 placeholder col-6" data-v-8df4f3bc></p><p class="mb-4 placeholder col-8" data-v-8df4f3bc></p>',6),Pt={class:""},It={class:"d-flex align-items-center placeholder-glow mb-3"},St=m(()=>t("span",{class:"placeholder col-4"},null,-1)),Mt=m(()=>t("span",{class:"placeholder col-4 ms-2"},null,-1)),At={class:"text-secondary fs-base text-decoration-line-through ms-3"},Tt={class:"input-group mb-3 w-30"},Bt={class:"d-end"},Nt=m(()=>t("div",{class:"col-1 xl-down-hide"},null,-1)),Vt={class:"product-desciption"},jt={class:"row mb-3"},Et={class:"col-lg-8 col-xl-9"},Ut={class:"card mb-3 p-3"},Ft=M('<img src="'+$+'" alt="" data-v-8df4f3bc><img src="'+tt+'" alt="" data-v-8df4f3bc><p class="text-secondary fs-small mt-5" data-v-8df4f3bc> A groundbreaking Retina display. Powerful dual-core and quad-core Intel processors. Fast flash storage. High-performance graphics. Great built-in apps. And now in the 13-inch model, a revolutionary new Force Touch trackpad and even longer battery life.1 Whatever you can imagine, MacBook Pro with Retina display gives you the power to create. </p><p class="text-secondary fs-small mb-5" data-v-8df4f3bc> The design of MacBook Pro packs a lot of power into not a lot of space. Because we believe that high performance shouldn’t come at the expense of portability. And despite being so compact, the new 13-inch and 15-inch MacBook Pro with Retina display models now deliver up to 10 hours and nine hours of battery life, respectively — an hour more than the previous models. </p><img src="'+et+'" alt="" data-v-8df4f3bc><p class="text-secondary fs-small mt-5" data-v-8df4f3bc> With Multi-Touch in OS X, you can use realistic gestures like swiping or pinching to switch between apps, navigate your content and get the most out of your desktop space. The new Force Touch trackpad takes all the capabilities of Multi-Touch and adds force sensors that detect subtle differences in the amount of downward pressure you apply. This lets you have a deeper connection to your content, bringing more functionality to your fingertip. It also introduces haptic feedback to MacBook Pro — allowing you to not just see what’s happening on the screen, but to feel it. </p>',6),Gt={key:1,class:"table-responsive"},Lt=M('<table class="table" data-v-8df4f3bc><tbody data-v-8df4f3bc><tr data-v-8df4f3bc><td data-v-8df4f3bc>品牌</td><td data-v-8df4f3bc>Apple</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>高度</td><td data-v-8df4f3bc>18 毫米</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>寬度</td><td data-v-8df4f3bc>31.4 厘米</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>螢幕尺寸</td><td data-v-8df4f3bc>13 吋</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>重量</td><td data-v-8df4f3bc>1.6 公斤</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>產品尺寸</td><td data-v-8df4f3bc>21.9 x 31.4 x 1.8 厘米</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>型號</td><td data-v-8df4f3bc>MF841HN/A</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>處理器品牌</td><td data-v-8df4f3bc>Intel</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>處理器類型</td><td data-v-8df4f3bc>Core i5</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>處理器速度</td><td data-v-8df4f3bc>2.9 GHz</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>RAM 容量</td><td data-v-8df4f3bc>8 GB</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>硬碟容量</td><td data-v-8df4f3bc>512 GB</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>硬碟技術</td><td data-v-8df4f3bc>Solid State Drive</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>顯示核心處理器</td><td data-v-8df4f3bc>Intel Integrated Graphics</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>顯示卡描述</td><td data-v-8df4f3bc>Integrated Graphics Card</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>硬體平台</td><td data-v-8df4f3bc>Mac</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>作業系統</td><td data-v-8df4f3bc>Mac OS</td></tr><tr data-v-8df4f3bc><td data-v-8df4f3bc>平均電池續航時間</td><td data-v-8df4f3bc>9 小時</td></tr></tbody></table>',1),Ot=[Lt],Rt={class:"row row-cols-1 row-cols-md-2 g-3 mb-2"},zt={class:"card ps-2 card-hover-shadow"},Wt={class:"row g-0"},Ht={class:"col-4 d-column justify-content-center"},qt={class:"d-center"},Jt={class:"fs-base text-center mb-0 text-nowrap"},Xt={class:"col-8"},Kt={class:"card-body py-2"},Qt={class:"mb-1"},Yt={class:"d-flex mb-1"},Zt={class:"text-secondary fs-mini mb-0"},$t={class:"d-end"},te=m(()=>t("div",{class:"col lg-down-hide"},[t("img",{class:"product-ad",src:K,alt:""})],-1)),ee=m(()=>t("h2",{class:"fs-4"},"相關商品",-1)),ae={class:"card h-100 card-hover-shadow"},oe={class:"card-body d-column"},se=["src","alt","title","onClick"],de=["onClick"],ce=m(()=>t("hr",{class:"my-2"},null,-1)),ne={class:"card-text flex-grow-1 fs-small line-clamp-3"},re={class:"d-end align-items-center"},le={class:"fs-large"};function ie(b,d,l,e,A,k){const v=y("router-link"),i=y("font-awesome-icon"),u=y("Pagination"),C=y("swiper-slide"),p=y("swiper");return o(),s("div",ot,[t("div",st,[dt,t("div",ct,[t("div",nt,[e.showData?(o(),s("nav",rt,[t("ol",lt,[t("li",it,[h(v,{to:"/eStore/home"},{default:D(()=>[S("首頁")]),_:1})]),t("li",mt,[h(v,{to:"/eStore/home"},{default:D(()=>[S(n(e.showData.category),1)]),_:1})]),t("li",ft,n(e.showData.title),1)])])):I("",!0),t("div",ht,[e.showProductImg?(o(),s("img",{key:1,class:"product-img",src:e.showProductImg,alt:e.showData.title,title:e.showData.title},null,8,_t)):(o(),s("div",vt))]),t("div",bt,[e.showData?e.showData.imagesUrl&&e.showData.imagesUrl.length>0?(o(),s(r,{key:1},[t("img",{class:x(["img-box",{active:e.showProductImg===e.showData.imageUrl}]),src:e.showData.imageUrl,onClick:d[0]||(d[0]=a=>e.setProductImg(e.showData.imageUrl))},null,10,ut),(o(!0),s(r,null,_(e.showData.imagesUrl,a=>(o(),s("img",{class:x(["img-box",{active:e.showProductImg===a}]),onClick:f=>e.setProductImg(a),key:a,src:a},null,10,pt))),128))],64)):I("",!0):(o(),s(r,{key:0},_(4,a=>t("div",{class:"img-box bg-secondary placeholder",key:a})),64))])])]),t("div",wt,[t("div",gt,[t("div",yt,[e.showData?(o(),s(r,{key:0},[t("span",xt,n(e.showData.category),1),t("h2",null,n(e.showData.title),1),kt,t("p",null,n(e.showData.description),1),t("div",Dt,[(o(),s(r,null,_(4,(a,f)=>h(i,{key:f,class:"fs-large m-0 text-warning",icon:"fa-star",role:"button"})),64))])],64)):(o(),s(r,{key:1},[Ct],64))]),t("div",Pt,[t("div",It,[e.showData?(o(),s(r,{key:1},[t("h2",null,"$ "+n(e.showData.price.toLocaleString()),1),t("span",At,"$ "+n(e.showData.origin_price.toLocaleString()),1)],64)):(o(),s(r,{key:0},[St,Mt],64))]),t("div",Tt,[t("span",{class:"input-group-text",role:"button",onClick:d[1]||(d[1]=a=>e.setCount("reduce"))},"-"),G(t("input",{type:"number",class:"form-control text-center",placeholder:"請輸入數量","onUpdate:modelValue":d[2]||(d[2]=a=>e.count=a),min:"1",max:"99"},null,512),[[L,e.count]]),t("span",{class:"input-group-text",role:"button",onClick:d[3]||(d[3]=a=>e.setCount("add"))},"+")]),t("div",Bt,[t("button",{class:"btn btn-primary w-100 fs-large",onClick:d[4]||(d[4]=a=>e.addToCart(e.showData))},[h(i,{class:"fs-6 me-2",icon:"fa-cart-arrow-down",role:"button"}),S("加入購物車 ")])])])])]),Nt]),t("ul",Vt,[t("li",{onClick:d[5]||(d[5]=a=>e.showDesciption="introduce"),class:x({active:e.showDesciption==="introduce"})}," 商品介紹 ",2),t("li",{onClick:d[6]||(d[6]=a=>e.showDesciption="info"),class:x({active:e.showDesciption==="info"})}," 商品資訊 ",2),t("li",{onClick:d[7]||(d[7]=a=>e.showDesciption="appraise"),class:x({active:e.showDesciption==="appraise"})}," 評價 ",2)]),t("div",jt,[t("div",Et,[t("div",Ut,[e.showDesciption==="introduce"?(o(),s(r,{key:0},[Ft],64)):e.showDesciption==="info"?(o(),s("div",Gt,Ot)):e.showDesciption==="appraise"?(o(),s(r,{key:2},[t("div",Rt,[(o(!0),s(r,null,_(e.showComment,a=>(o(),s("div",{class:"col",key:a},[t("div",zt,[t("div",Wt,[t("div",Ht,[t("div",qt,[h(i,{class:"fs-5 mb-2 border rounded-circle p-2",icon:"fa-user",role:"button"})]),t("h5",Jt,n(a.name),1)]),t("div",Xt,[t("div",Kt,[t("p",Qt,n(a.comment),1),t("div",Yt,[(o(!0),s(r,null,_(parseInt(a.star),(f,w)=>(o(),B(i,{key:w,class:"fs-mini m-0 text-warning",icon:"fa-star",role:"button"}))),128))]),t("p",Zt,n(a.date),1)])])])])]))),128))]),t("div",$t,[h(u,{data:e.tempData.comment,showItemCount:8,onChangePage:e.changeShowComment},null,8,["data","onChangePage"])])],64)):I("",!0)])]),te]),ee,h(p,{class:"mb-3",slidesPerView:2,spaceBetween:20,freeMode:!0,navigation:!0,autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{576:{slidesPerView:3},768:{slidesPerView:4},1200:{slidesPerView:5}},modules:e.modules},{default:D(()=>[(o(!0),s(r,null,_(e.relatedProducts,(a,f)=>(o(),B(C,{class:"h-auto",key:f},{default:D(()=>[t("div",ae,[t("div",oe,[t("img",{role:"button",src:a.imageUrl,class:"card-img-top mb-2",alt:a.title,title:a.title,onClick:w=>e.changeShowData(a)},null,8,se),t("h5",{class:"card-title text-truncate text-underline-hover mb-0",role:"button",onClick:w=>e.changeShowData(a)},n(a.title),9,de),ce,t("p",ne,n(a.description),1),t("div",re,[t("span",le," $ "+n(a.price.toLocaleString()),1)])])])]),_:2},1024))),128))]),_:1},8,["modules"])])}const be=U(at,[["render",ie],["__scopeId","data-v-8df4f3bc"]]);export{be as default};
