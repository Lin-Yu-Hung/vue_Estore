import{_ as z,r as v,E as O,t as W,a as Q,y as A,b as V,o as t,c,d as e,h as r,i as f,F as i,B as w,C as x,w as _,v as P,n as g,H as E,G as q,I as H,D as b,q as B,J as F,e as K,p as X,k as Y}from"./index-c2253ecb.js";import{t as R}from"./translate-28289832.js";import{S as Z,a as $,A as ee}from"./autoplay-252b4991.js";import{_ as se}from"./filip-baotic-DV0mB2uJM34-unsplash-c9a2a6ed.js";const le="/vue_Estore/assets/nik-ads33nL7V4k-unsplash-bfc257bc.jpg";const oe={components:{Swiper:Z,SwiperSlide:$},setup(S){const o=v("cell"),U=v(""),l=v(""),J=(n,p)=>(p&&(n=n.sort((m,I)=>p==="desc"?I.price-m.price:p==="asc"?m.price-I.price:m.title-I.title)),n),N=O("productList"),y=O("productCategoryList"),h=v([]),T=v(1);W(N,n=>h.value=JSON.parse(JSON.stringify(n)),{immediate:!0});const d=v([]),s=Q();W([s,y],([n,p])=>{const m=n.params.category;!m||!R(m)?d.value=JSON.parse(JSON.stringify(p)):d.value=[R(m)]},{immediate:!0});const u=v(""),k=v(""),M=()=>{const n=parseInt(u.value),p=parseInt(k.value);if(isNaN(n)&&isNaN(p)){h.value=JSON.parse(JSON.stringify(N.value));return}h.value=N.value.filter(m=>!isNaN(n)&&!isNaN(p)?m.price>=n&&m.price<=p:isNaN(n)?m.price<=p:m.price>=n)},L=v([]),j=A(()=>{L.value=h.value.filter(p=>p.title.match(U.value)&&d.value.includes(p.category));const n=J(L.value,l.value);return L.value.length<C.value?n:n.slice(T.value*C.value-C.value,T.value*C.value)}),G=A(()=>Math.ceil(L.value.length/C.value)),D=()=>window.innerWidth>=1600?16:window.innerWidth>=768?12:8,C=v(D());return window.addEventListener("resize",n=>{C.value=D()}),{productList:N,productCategoryList:y,sortType:l,showType:o,productKeyWord:U,showData:j,filterCategory:d,minPrice:u,maxPrice:k,filterPrice:M,filterProductList:h,pageCount:G,nowPage:T,modules:[ee]}}},a=S=>(X("data-v-62e8ec4b"),S=S(),Y(),S),ae={"aria-label":"breadcrumb",class:"mt-3 border-bottom"},te={class:"breadcrumb"},ce={class:"breadcrumb-item"},ne=a(()=>e("li",{class:"breadcrumb-item active","aria-current":"page"},"商品列表",-1)),re={class:"container-fluid mb-3"},de={class:"row"},ie={class:"col-12 px-xl-0"},pe=a(()=>e("img",{src:"https://www.jollybuy.com/act/Apple/images/kv-pc.webp",alt:"product",class:"h-100 w-100"},null,-1)),me=a(()=>e("img",{src:"https://dlcdnwebimgs.asus.com/gain/3EF9B6B3-0408-42CE-9AA2-50B46B5B35C9/fwebp",alt:"product",class:"h-100 w-100"},null,-1)),be=a(()=>e("img",{src:"https://p2.bahamut.com.tw/B/2KU/22/96c1baf2e92dc1371779452e2119o8a5.JPG",alt:"product",class:"h-100 w-100"},null,-1)),ve={class:"col-xl-3 pt-3 px-0 xl-down-hide"},_e={class:"card shadow p-3"},he=a(()=>e("h2",{class:"fs-5 border-bottom pb-2"},"分類",-1)),ue={class:"container-fluid"},fe={class:"row row-cols-3 row-cols-lg-1 row-cols-xl-2 row-cols-xxxl-3 g-2 my-2"},we={class:"form-check"},xe=["value","id"],ge=["for"],ye=a(()=>e("label",{for:"customRange1",class:"form-label fs-5 border-bottom pb-2 mt-3"},"價格",-1)),ke={class:"mb-3 d-center flex-column"},Ce=a(()=>e("div",{class:"d-flex"},[e("label",{for:"minPrice",class:"form-label mb-1 fs-small flex-grow-1 me-4"},"最低價格"),e("label",{for:"maxPrice",class:"form-label mb-1 fs-small flex-grow-1"},"最高價格")],-1)),Pe={class:"d-flex"},Se=a(()=>e("span",{class:"mx-1"},"~",-1)),Ne=F('<div class="placeholder-glow" data-v-62e8ec4b><span class="placeholder mb-2 col-8" data-v-62e8ec4b></span><span class="placeholder mb-2 col-6" data-v-62e8ec4b></span></div><div class="placeholder-glow" data-v-62e8ec4b><span class="placeholder mb-2 col-5" data-v-62e8ec4b></span></div><div class="placeholder-glow" data-v-62e8ec4b><span class="placeholder mb-2 col-7" data-v-62e8ec4b></span><span class="placeholder mb-2 col-7" data-v-62e8ec4b></span><span class="placeholder mb-2 col-6" data-v-62e8ec4b></span><span class="placeholder mb-2 col-8" data-v-62e8ec4b></span><span class="placeholder mb-2 col-8" data-v-62e8ec4b></span><span class="placeholder mb-2 col-10" data-v-62e8ec4b></span></div><h2 class="fs-5 border-bottom pb-2 mt-3" data-v-62e8ec4b>價格</h2><div class="placeholder-glow" data-v-62e8ec4b><div class="d-between align-items-center" data-v-62e8ec4b><span class="placeholder col p-3 rounded" data-v-62e8ec4b></span><span class="col-1 d-center" data-v-62e8ec4b>~</span><span class="placeholder col p-3 rounded" data-v-62e8ec4b></span></div><span class="placeholder col-12 p-2 rounded mt-3" data-v-62e8ec4b>篩選</span></div>',5),Te=a(()=>e("img",{class:"w-100 mt-3 rounded border",src:se,alt:"product"},null,-1)),Le=a(()=>e("img",{class:"w-100 mt-3 rounded border",src:le,alt:"product"},null,-1)),Ve={class:"container-fluid product-list"},Ue=a(()=>e("h2",{class:"fs-3 mb-3"},"所有商品",-1)),Ie={class:"d-flex mb-3 border rounded align-items-center bg-light flex-column flex-lg-row"},Be={class:"offcanvas offcanvas-start",tabindex:"-1",id:"offcanvasFilter","aria-labelledby":"offcanvasFilterLabel"},Fe={class:"offcanvas-header d-column pb-0"},Je=a(()=>e("div",{class:"d-between w-100"},[e("h5",{class:"offcanvas-title",id:"offcanvasFilterLabel"}," 篩選商品 "),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),De={class:"input-group d-center align-items-center rounded-pill border bg-white w-100 my-2"},Oe={class:"offcanvas-body pt-0"},We=a(()=>e("h2",{class:"fs-5 border-bottom pb-1 pt-2"},"分類",-1)),Ae={class:"container-fluid"},Ee={class:"row row-cols-3 row-cols-lg-1 row-cols-xl-2 row-cols-xxxl-3 g-2 my-2"},Ke={class:"form-check"},Re=["value","id"],Me=["for"],je=a(()=>e("label",{class:"form-check-label fs-5 border-bottom pb-2 w-100",for:"sortType"}," 排序方式 ",-1)),Ge=a(()=>e("option",{selected:"",disabled:"",value:""},"排序方式",-1)),ze=a(()=>e("option",{value:"title"},"文字排序",-1)),Qe=a(()=>e("option",{value:"asc"},"價格由低至高",-1)),qe=a(()=>e("option",{value:"desc"},"價格由高到低",-1)),He=[Ge,ze,Qe,qe],Xe=a(()=>e("label",{for:"customRange1",class:"form-label fs-5 mt-3"},"價格",-1)),Ye={class:"mb-3 d-center flex-column border-top pt-3"},Ze=a(()=>e("div",{class:"d-flex"},[e("label",{for:"minPrice",class:"form-label mb-1 fs-small flex-grow-1 me-4"},"最低價格"),e("label",{for:"maxPrice",class:"form-label mb-1 fs-small flex-grow-1"},"最高價格")],-1)),$e={class:"d-flex"},es=a(()=>e("span",{class:"mx-1"},"~",-1)),ss=F('<div class="placeholder-glow" data-v-62e8ec4b><span class="placeholder mb-2 col-8" data-v-62e8ec4b></span><span class="placeholder mb-2 col-6" data-v-62e8ec4b></span></div><div class="placeholder-glow" data-v-62e8ec4b><span class="placeholder mb-2 col-5" data-v-62e8ec4b></span></div><div class="placeholder-glow" data-v-62e8ec4b><span class="placeholder mb-2 col-7" data-v-62e8ec4b></span><span class="placeholder mb-2 col-7" data-v-62e8ec4b></span><span class="placeholder mb-2 col-6" data-v-62e8ec4b></span><span class="placeholder mb-2 col-8" data-v-62e8ec4b></span><span class="placeholder mb-2 col-8" data-v-62e8ec4b></span><span class="placeholder mb-2 col-10" data-v-62e8ec4b></span></div><h2 class="fs-5 border-bottom pb-2 mt-3" data-v-62e8ec4b>價格</h2><div class="placeholder-glow" data-v-62e8ec4b><div class="d-between align-items-center" data-v-62e8ec4b><span class="placeholder col p-3 rounded" data-v-62e8ec4b></span><span class="col-1 d-center" data-v-62e8ec4b>~</span><span class="placeholder col p-3 rounded" data-v-62e8ec4b></span></div><span class="placeholder col-12 p-2 rounded mt-3" data-v-62e8ec4b>篩選</span></div>',5),ls={class:"xl-down-w-100 w-25 p-2 text-nowrap d-between px-3 px-xl-2"},os={class:"text-secondary xl-up-hide","data-bs-toggle":"offcanvas",href:"#offcanvasFilter",role:"button","aria-controls":"offcanvasFilter"},as={class:"text-secondary"},ts={class:"flex-grow-1 d-between p-2 xl-down-hide"},cs={class:"d-flex align-items-center w-40 mb-0"},ns=a(()=>e("label",{class:"form-check-label text-nowrap me-3",for:"sortType"}," 排序方式 ",-1)),rs=a(()=>e("option",{selected:"",disabled:"",value:""},"排序方式",-1)),ds=a(()=>e("option",{value:"title"},"文字排序",-1)),is=a(()=>e("option",{value:"asc"},"價格由低至高",-1)),ps=a(()=>e("option",{value:"desc"},"價格由高到低",-1)),ms=[rs,ds,is,ps],bs={class:"input-group d-center align-items-center rounded-pill border bg-white w-50"},vs={class:"card"},_s={class:"d-center"},hs=["src","alt","title"],us={class:"card-body p-2 p-sm-3"},fs={class:"d-flex mb-3"},ws={class:"card-text card-text-cell fs-small text-secondary line-clamp-3 mb-1"},xs={key:0,class:"text-end mb-2 fs-5"},gs=a(()=>e("button",{class:"btn btn-primary-median w-100"}," 加入購物車 ",-1)),ys={class:"row g-0"},ks={class:"col-5 col-md-4 col-lg-3 col-xxxl-2 d-center p-md-3 p-xxxl-0 align-items-center border-end"},Cs=["src","alt","title"],Ps={class:"col-7 col-md"},Ss={class:"card-body h-100 px-1 px-md-2"},Ns={class:"container-fluid h-100"},Ts={class:"row h-100"},Ls={class:"col"},Vs={class:"d-column"},Us={class:"d-flex mb-2 mb-md-3"},Is={class:"card-text card-text-row fs-small text-secondary line-clamp-2 line-clamp-md-5 mb-2 w-50 xl-down-w-100 mobile-w-100"},Bs={class:"col-md-4 col-xxxl-3"},Fs={class:"d-end flex-column h-100"},Js={key:0,class:"text-end fs-4 mb-2"},Ds=a(()=>e("button",{class:"btn btn-primary-median w-100"}," 加入購物車 ",-1)),Os={key:1,class:"text-center mt-5 pt-5"},Ws={key:1,class:"row row-cols-2 row-cols-md-3 row-cols-xxxl-4 g-3"},As=F('<div class="card" aria-hidden="true" data-v-62e8ec4b><div class="card-img-top bg-secondary" style="height:180px;" data-v-62e8ec4b></div><div class="card-body" data-v-62e8ec4b><h5 class="card-title placeholder-glow" data-v-62e8ec4b><span class="placeholder col-6" data-v-62e8ec4b></span></h5><p class="card-text placeholder-glow" data-v-62e8ec4b><span class="placeholder col-7" data-v-62e8ec4b></span><span class="placeholder col-4" data-v-62e8ec4b></span><span class="placeholder col-4" data-v-62e8ec4b></span><span class="placeholder col-6" data-v-62e8ec4b></span><span class="placeholder col-8" data-v-62e8ec4b></span></p><a class="btn btn-primary disabled placeholder col-6" aria-disabled="true" data-v-62e8ec4b></a></div></div>',1),Es=[As],Ks={key:2,"aria-label":"Page navigation example",class:"my-3 d-end"},Rs={class:"pagination"},Ms=["onClick"];function js(S,o,U,l,J,N){const y=V("router-link"),h=V("swiper-slide"),T=V("swiper"),d=V("font-awesome-icon");return t(),c(i,null,[e("nav",ae,[e("ol",te,[e("li",ce,[r(y,{to:"/eStore/home",class:"text-underline-hover"},{default:f(()=>[w("首頁")]),_:1})]),ne])]),e("div",re,[e("div",de,[e("div",ie,[r(T,{autoplay:{delay:5e3,disableOnInteraction:!1},modules:l.modules,class:"mainAd rounded border mt-3"},{default:f(()=>[r(h,null,{default:f(()=>[pe]),_:1}),r(h,null,{default:f(()=>[me]),_:1}),r(h,null,{default:f(()=>[be]),_:1})]),_:1},8,["modules"])]),e("div",ve,[e("div",_e,[he,l.productCategoryList.length>0?(t(),c(i,{key:0},[e("div",ue,[e("p",{class:"text-secondary mt-2 mb-0 text-underline-hover",role:"button",onClick:o[0]||(o[0]=s=>l.filterCategory.splice(0))},[r(d,{icon:"fa-xmark"}),w("清除篩選條件 ")]),e("div",fe,[(t(!0),c(i,null,x(l.productCategoryList,s=>(t(),c("div",{class:"col",key:s},[e("div",we,[_(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=u=>l.filterCategory=u),value:s,id:s,name:"category",role:"button"},null,8,xe),[[K,l.filterCategory]]),e("label",{class:"form-check-label text-nowrap",role:"button",for:s},b(s),9,ge)])]))),128))])]),ye,e("div",ke,[Ce,e("div",Pe,[_(e("input",{type:"number",class:"form-control form-control-sm",id:"minPrice","onUpdate:modelValue":o[2]||(o[2]=s=>l.minPrice=s),placeholder:"請輸入最低價格"},null,512),[[P,l.minPrice]]),Se,_(e("input",{type:"number",class:"form-control form-control-sm",id:"maxPrice","onUpdate:modelValue":o[3]||(o[3]=s=>l.maxPrice=s),placeholder:"請輸入最高價格"},null,512),[[P,l.maxPrice]])]),e("button",{class:"btn btn-primary-median mt-3",onClick:o[4]||(o[4]=(...s)=>l.filterPrice&&l.filterPrice(...s))}," 篩選 ")])],64)):(t(),c(i,{key:1},[Ne],64))]),Te,Le]),e("div",{class:g(["col-lg pt-3 mobile-px-0",{"mb-4":l.pageCount<=1}])},[e("div",Ve,[Ue,e("div",Ie,[e("div",Be,[e("div",Fe,[Je,e("div",De,[_(e("input",{type:"text",class:"form-control rounded-pill border-0 ps-3",placeholder:"輸入商品關鍵字","onUpdate:modelValue":o[5]||(o[5]=s=>l.productKeyWord=s)},null,512),[[P,l.productKeyWord]]),r(d,{class:"px-3",icon:"fa-search",role:"button"})])]),e("div",Oe,[We,l.productCategoryList.length>0?(t(),c(i,{key:0},[e("div",Ae,[e("p",{class:"text-secondary mt-3 mb-0 text-underline-hover",role:"button",onClick:o[6]||(o[6]=s=>l.filterCategory.splice(0))},[r(d,{icon:"fa-xmark"}),w("清除篩選條件 ")]),e("div",Ee,[(t(!0),c(i,null,x(l.productCategoryList,s=>(t(),c("div",{class:"col",key:s},[e("div",Ke,[_(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[7]||(o[7]=u=>l.filterCategory=u),value:s,id:s,name:"category",role:"button"},null,8,Re),[[K,l.filterCategory]]),e("label",{class:"form-check-label text-nowrap",role:"button",for:s},b(s),9,Me)])]))),128))])]),je,_(e("select",{id:"sortType",class:"form-select mt-2","onUpdate:modelValue":o[8]||(o[8]=s=>l.sortType=s)},He,512),[[E,l.sortType]]),Xe,e("div",Ye,[Ze,e("div",$e,[_(e("input",{type:"number",class:"form-control form-control-sm",id:"minPrice","onUpdate:modelValue":o[9]||(o[9]=s=>l.minPrice=s),placeholder:"請輸入最低價格"},null,512),[[P,l.minPrice]]),es,_(e("input",{type:"number",class:"form-control form-control-sm",id:"maxPrice","onUpdate:modelValue":o[10]||(o[10]=s=>l.maxPrice=s),placeholder:"請輸入最高價格"},null,512),[[P,l.maxPrice]])]),e("button",{class:"btn btn-primary-median mt-3","data-bs-dismiss":"offcanvas","aria-label":"Close",onClick:o[11]||(o[11]=(...s)=>l.filterPrice&&l.filterPrice(...s))}," 篩選 ")])],64)):(t(),c(i,{key:1},[ss],64))])]),e("div",ls,[e("a",os,[r(d,{icon:"fa-gear",class:"me-2"}),w("篩選 ")]),e("span",as,[w(" 顯示方式 "),r(d,{role:"button",icon:"fa-border-all",class:g(["mx-2 showTypeIcon",{"text-primary":l.showType==="cell"}]),onClick:o[12]||(o[12]=s=>l.showType="cell")},null,8,["class"]),r(d,{role:"button",icon:"fa-list",class:g(["showTypeIcon ms-1",{"text-primary":l.showType==="row"}]),onClick:o[13]||(o[13]=s=>l.showType="row")},null,8,["class"])])]),e("div",ts,[e("div",cs,[ns,_(e("select",{id:"sortType",class:"form-select","onUpdate:modelValue":o[14]||(o[14]=s=>l.sortType=s)},ms,512),[[E,l.sortType]])]),e("div",bs,[_(e("input",{type:"text",class:"form-control rounded-pill border-0 ps-3",placeholder:"輸入商品關鍵字","onUpdate:modelValue":o[15]||(o[15]=s=>l.productKeyWord=s)},null,512),[[P,l.productKeyWord]]),r(d,{class:"px-3",icon:"fa-search",role:"button"})])])]),l.productList.length>0?(t(),c(i,{key:0},[l.showData.length>0?(t(),q(H,{key:0,name:"list",tag:"div",class:g({"row row-cols-2 row-cols-md-3 row-cols-xxxl-4 g-3":l.showType==="cell"})},{default:f(()=>[l.showType==="cell"?(t(!0),c(i,{key:0},x(l.showData,s=>(t(),c("div",{class:"col",key:s.id},[e("div",vs,[e("div",_s,[e("img",{src:s.imageUrl,class:"card-img-top product-img",alt:s.title,title:s.title},null,8,hs)]),e("div",us,[r(y,{class:"card-title line-clamp-2 fs-6 fs-md-large text-underline-hover",to:`/eStore/productInfo/${s.id}`},{default:f(()=>[w(b(s.title),1)]),_:2},1032,["to"]),e("div",fs,[(t(),c(i,null,x(4,(u,k)=>r(d,{key:k,class:"fs-large m-0 text-warning",icon:"fa-star",role:"button"})),64))]),e("p",ws,b(s.description),1),s.price?(t(),c("p",xs," $ "+b(s.price.toLocaleString()),1)):B("",!0),gs])])]))),128)):(t(!0),c(i,{key:1},x(l.showData,s=>(t(),c("div",{class:"card mb-3",key:s.id},[e("div",ys,[e("div",ks,[e("img",{src:s.imageUrl,alt:s.title,title:s.title,class:"card-img-top"},null,8,Cs)]),e("div",Ps,[e("div",Ss,[e("div",Ns,[e("div",Ts,[e("div",Ls,[e("div",Vs,[r(y,{class:"mb-2 line-clamp-2 fs-6 fs-md-large text-underline-hover",to:`/eStore/productInfo/${s.id}`},{default:f(()=>[w(b(s.title),1)]),_:2},1032,["to"]),e("div",Us,[(t(),c(i,null,x(4,(u,k)=>r(d,{key:k,class:"fs-large m-0 text-warning",icon:"fa-star",role:"button"})),64))]),e("p",Is,b(s.description),1)])]),e("div",Bs,[e("div",Fs,[s.price?(t(),c("p",Js," $ "+b(s.price.toLocaleString()),1)):B("",!0),Ds])])])])])])])]))),128))]),_:1},8,["class"])):(t(),c("h2",Os,[w(" 查無條件無結果 "),r(d,{class:"ms-2",icon:"fa-face-frown"})]))],64)):(t(),c("div",Ws,[(t(),c(i,null,x(8,s=>e("div",{class:"col",key:s},Es)),64))])),l.pageCount>1?(t(),c("nav",Ks,[e("ul",Rs,[e("li",{class:g(["page-item",{"d-none":l.nowPage===1}])},[e("a",{class:"page-link rounded-circle",onClick:o[16]||(o[16]=s=>--l.nowPage)},b("<<"))],2),(t(!0),c(i,null,x(l.pageCount,s=>(t(),c("li",{class:"page-item",key:s},[e("a",{class:g(["page-link rounded-circle",{active:l.nowPage===s}]),onClick:u=>l.nowPage=s},b(s),11,Ms)]))),128)),e("li",{class:g(["page-item",{"d-none":l.nowPage===l.pageCount}])},[e("a",{class:"page-link rounded-circle",onClick:o[17]||(o[17]=s=>++l.nowPage)},b(">>"))],2)])])):B("",!0)])],2)])])],64)}const Hs=z(oe,[["render",js],["__scopeId","data-v-62e8ec4b"]]);export{Hs as default};
