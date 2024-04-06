import{c as V}from"./cart-eb69eacf.js";import{_ as E,l as U,n as I,r as k,o as d,c as i,b as o,F as v,z as A,w as q,O as X,y as r,H as x,j as F,p as M,f as B,t as L,v as R,x as C,h as b}from"./index-340685d7.js";import{c as D,t as T}from"./date-be9d2c3c.js";import{a as z}from"./util-44d34907.js";import{s as Z}from"./api-05e171a3.js";import{e as K}from"./sweetAlert-0da67127.js";const O={setup(p,s){const _=D(),t=U(),h=I(()=>_.pagination.current_page),g=I(()=>_.pagination.total_pages),e=k(null),{emit:u}=s;return{selectedCoupon:e,applyCoupon:()=>{u("applyCoupon",e.value)},coupon:_,timestampToYMD:T,currentPage:h,totalPages:g,getCoupons:async(a=1)=>{t.showLoading(),await _.getCoupons(a),t.hideLoading()}}}},Y=p=>(M("data-v-4a9d10cd"),p=p(),B(),p),Q={class:"modal fade",id:"couponModal",tabindex:"-1","aria-labelledby":"couponModalLabel","aria-hidden":"true"},H={class:"modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"},G={class:"modal-content"},$=Y(()=>o("div",{class:"modal-header"},[o("h1",{class:"modal-title fs-5",id:"couponModalLabel"},"可使用優惠券"),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),oo={class:"modal-body"},to=["for"],eo={class:"container-fluid"},so={class:"row"},no={class:"col-2 border-end"},ao={class:"d-center align-items-center h-100"},co=["id","value"],lo={class:"col-8 col-md-6"},io={class:"d-column py-2"},ro={class:"text-secondary fs-small mb-2"},po={class:"text-secondary fs-small mb-2"},_o={class:"text-secondary fs-small mb-0"},mo={class:"col-2 col-md border-start"},uo={class:"d-center align-items-center h-100"},ho={key:0,class:"d-end mt-3 pe-3"},go={"aria-label":"Page navigation example"},fo={class:"pagination"},bo=["onClick"],vo={class:"page-link"},yo={class:"modal-footer d-center"};function Co(p,s,_,t,h,g){return d(),i("div",Q,[o("div",H,[o("div",G,[$,o("div",oo,[(d(!0),i(v,null,A(t.coupon.coupons,(e,u)=>(d(),i("label",{key:u,class:"card card-hover-shadow mb-3",for:e.code,role:"button"},[o("div",eo,[o("div",so,[o("div",no,[o("div",ao,[q(o("input",{class:"form-check-input",type:"radio",name:"coupon",id:e.code,value:{code:e.code,percent:e.percent},"onUpdate:modelValue":s[0]||(s[0]=n=>t.selectedCoupon=n)},null,8,co),[[X,t.selectedCoupon]])])]),o("div",lo,[o("div",io,[o("p",ro," 套用活動："+r(e.title),1),o("p",po," 優惠代碼："+r(e.code),1),o("p",_o," 有效期限："+r(t.timestampToYMD(e.due_date)),1)])]),o("div",mo,[o("div",uo,r(e.percent/10)+"折 ",1)])])])],8,to))),128))]),t.totalPages>1?(d(),i("div",ho,[o("nav",go,[o("ul",fo,[o("li",{class:x(["page-item",{invisible:t.currentPage===1}])},[o("a",{class:"page-link",onClick:s[1]||(s[1]=e=>t.getCoupons(t.currentPage-1))},"上一頁")],2),(d(!0),i(v,null,A(t.totalPages,(e,u)=>(d(),i("li",{class:x(["page-item",{active:t.currentPage===e}]),key:u,onClick:n=>t.getCoupons(e)},[o("a",vo,r(e),1)],10,bo))),128)),o("li",{class:x(["page-item",{invisible:t.currentPage===t.totalPages}])},[o("a",{class:"page-link",onClick:s[2]||(s[2]=e=>t.getCoupons(t.currentPage+1))},"下一頁")],2)])])])):F("",!0),o("div",yo,[o("button",{type:"button",class:"btn btn-primary w-50","data-bs-dismiss":"modal","aria-label":"Close",onClick:s[3]||(s[3]=(...e)=>t.applyCoupon&&t.applyCoupon(...e))}," 套用 ")])])])])}const Ao=E(O,[["render",Co],["__scopeId","data-v-4a9d10cd"]]),wo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAWCAYAAABnnAr9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAttJREFUeNrsWDFoE1EY/isZggqecIJDIRk6VBAp6FqJU10q6tClFnSpS4d2cKrQBHTqkIqd6tBCMzlorYudoumqmEpBB4dEOhSa4QSRDoL+3/Xe+fead3lpcucJ+eAn79696919/b7v/UkfJRjp8rjFH8tc1j9+lHcpSjamuW4m4DlyJ6gHI/SI6hHVXSCjfntjh+tsSFYUvfEK1z2ulyI/1JxE8O/muMohzxJ2fx+XTmdofuDOobn6foMWd97Qpx/1SIlSCNtZ5Llsk7m7XK+41lpcS4b30OKGfZmuWheOzE+cH6ax7SK9bnxIvPWWBYmxAAqqOJ/94/mBiVgU1SlUz3PNYO1bw3WhePC15BIFK071X6dM2natWd/fo4fZ2+6csiZIPZM6SaXdTVpvvKfnF2fcczhe3a24Y1wz7Kl1pPo4MqLIyyHk2YIBqTkNgW0jkz4n8mqPng3ep1G26N/ztlvAJhP7/ddPdwwL41oQBRJBLD5XmbyoFFUTtisavPCQJtj72rnpxtDsoWOoy0qd8kmCiqA6EDLLapGAkg6Isn3CQNLBuUpkGTXj7VoyryjuvJr8suQrBxjbXnDJe1R7cWRHhIqUsqCkqf4R36Yy97qtKEe0DEoxrdZXm8y1BVjkG1sNL6ZeThKFMawIpUh7SrJAkrQp2oyow3zNy6Zpg7XVboQ5LBL872+xcqAUkIPABhmj9hXfVhKLOxt+4EvyTIjKN1mz0sazF7wmtFWbkNXcK98peSAJubQ0OOkHtA51T42qL4NClR1bETXX4U4E+9zi+mhA1NxxiFoXDeWWphOHKkCC2sWw0zlMgMXjoALRoCqiSho1RdEeKFsVNER0JbRNvqrI3AoDOvqwEJdEFQxevNZEYU/wg5ZYE1SG4/VLToDAMDXGCjSnqLAQP1bfEjfS5fF8VMpUjapS1FMmSpdPUVnvvwFyDD1W7/eohP56EAWqSXmOPwIMAC4oGDA1oHZWAAAAAElFTkSuQmCC";const xo={components:{CouponModal:Ao},setup(p){const s=D(),_=U();_.showLoading(),z().then(async()=>{await s.getCoupons(),_.hideLoading()});const t=V(),h=k(""),g=k(!1);return{cart:t,changeCount:(a,w)=>t.changeItemCount(w,a.target.value),setCoupon:a=>{h.value={...a},g.value=!0},selectedCoupon:h,availableCoupon:g,removeCoupon:()=>{g.value=!1,h.value=""},linePay:async()=>{const a=new Date,w=`${a.getFullYear()}${(a.getMonth()+1).toString().padStart(2,"0")}${a.getDay().toString().padStart(2,"0")}${a.getTime()}`,W=()=>{const m=t.cartItems.reduce((c,l)=>(c[l.info.category]||(c[l.info.category]=[]),c[l.info.category].push(l),c),{}),N=c=>c.reduce((l,J)=>(l+=J.info.price,l),0),j=c=>c.map(l=>({id:l.info.id,name:l.info.title,imageUrl:l.info.imageUrl,quantity:l.count,price:l.info.price})),P=[];for(const c in m)P.push({id:`package${c}`,amount:N(m[c]),name:c,products:j(m[c])});return P},S={amount:t.cartAmount,currency:"TWD",orderId:w,packages:W(),redirectUrls:{confirmUrl:"https://lin-yu-hung.github.io/vue_Estore/#/eStore/confirmPay",cancelUrl:"https://lin-yu-hung.github.io/vue_Estore/#/eStore/confirmPay"}};console.log("🚀  params:",S);try{_.showLoading();const m=await Z(S);m.status===200&&(window.innerWidth>576?window.location.href=m.data.info.paymentUrl.web:window.location.href=m.data.info.paymentUrl.app)}catch(m){console.log(m),K("發生錯誤!")}finally{_.hideLoading()}}}}},f=p=>(M("data-v-38546376"),p=p(),B(),p),ko={key:0,class:"container-fluid pt-2"},So={class:"row"},Po={class:"col-lg-7 col-xl-7"},Io={class:"table-responsive"},Lo={class:"table table-hover"},Eo=f(()=>o("thead",null,[o("tr",null,[o("th",{scope:"col",class:"text-center mobile-hide"},"商品圖片"),o("th",{scope:"col"},"商品名稱"),o("th",{scope:"col"},"數量"),o("th",{scope:"col"},"單價"),o("th",{scope:"col",class:"text-center"},"操作")])],-1)),Uo={scope:"row",class:"mobile-hide"},qo={class:"d-center"},Fo=["src","alt","title"],Mo={class:"mb-0 line-clamp-2"},Bo={class:"d-end"},Do=["onChange"],Wo=["selected"],No={class:"text-center"},jo={class:"col"},Jo={class:"card p-3 shadow"},Vo=f(()=>o("h2",{class:"fs-5 mb-3 border-bottom pb-2"},"訂單金額",-1)),Xo={class:"d-flex align-items-center mb-3"},Ro=f(()=>o("label",{for:"coupon",class:"form-label me-2 mb-0 text-nowrap"},"優惠券",-1)),To=["disabled"],zo={class:"d-flex flex-column flex-sm-row justify-content-between"},Zo={class:"mb-2 fs-6 text-decoration-underline",role:"button","data-bs-toggle":"modal","data-bs-target":"#couponModal"},Ko={key:0,class:"text-end text-green mb-0",role:"button"},Oo={class:"d-column align-items-end mt-2"},Yo={class:"d-between w-40 text-nowrap"},Qo=f(()=>o("span",{class:"fs-6 mb-1 text-secondary"}," 小記 ",-1)),Ho={class:"fs-6 mb-1 text-secondary"},Go={class:"d-between w-40 text-nowrap"},$o=f(()=>o("span",{class:"fs-6 mb-1 text-secondary"}," 折扣 ",-1)),ot={class:"fs-6 mb-1 text-secondary"},tt={class:"d-end text-nowrap border-top pt-2 mt-2"},et=f(()=>o("span",{class:"fs-4 mb-1 me-2"}," 總金額 ",-1)),st={class:"fs-4 mb-1"},nt={class:"d-flex flex-wrap mt-2"},at=f(()=>o("img",{src:wo,alt:"LINE-Pay"},null,-1)),ct=[at],lt={class:"btn btn-primary flex-grow-1 ms-md-1"},dt={key:1,class:"empty-text"};function it(p,s,_,t,h,g){const e=L("font-awesome-icon"),u=L("CouponModal");return d(),i(v,null,[t.cart.cartItems.length>0?(d(),i("div",ko,[o("div",So,[o("div",Po,[o("div",Io,[o("table",Lo,[Eo,o("tbody",null,[(d(!0),i(v,null,A(t.cart.cartItems,(n,y)=>(d(),i("tr",{key:n},[o("th",Uo,[o("div",qo,[o("img",{src:n.info.imageUrl,alt:n.info.title,title:n.info.title},null,8,Fo)])]),o("td",null,[o("p",Mo,r(n.info.title),1)]),o("td",null,[o("div",Bo,[o("select",{class:"form-select",onChange:a=>t.changeCount(a,y)},[(d(),i(v,null,A(30,a=>o("option",{selected:a==n.count,key:a},r(a),9,Wo)),64))],40,Do)])]),o("td",null,r(n.info.price.toLocaleString()),1),o("td",No,[b(e,{role:"button",icon:"fa-trash-can",class:"text-secondary",onClick:a=>t.cart.delItem(y)},null,8,["onClick"])])]))),128))])])])]),o("div",jo,[o("div",Jo,[Vo,o("div",Xo,[Ro,q(o("input",{type:"text",class:"form-control form-control-sm",id:"coupon",placeholder:"請輸入優惠代碼","onUpdate:modelValue":s[0]||(s[0]=n=>t.selectedCoupon.code=n),disabled:t.availableCoupon},null,8,To),[[R,t.selectedCoupon.code]])]),o("div",zo,[o("p",Zo,[C(" 選用優惠券"),b(e,{class:"ms-1",icon:"fa-solid fa-arrow-right"})]),t.availableCoupon?(d(),i("p",Ko,[C(r(t.selectedCoupon.code)+" 優惠券 ",1),o("button",{type:"button",class:"btn-close pe-0",onClick:s[1]||(s[1]=(...n)=>t.removeCoupon&&t.removeCoupon(...n))})])):F("",!0)]),o("div",Oo,[o("div",Yo,[Qo,o("span",Ho," $ "+r(t.cart.cartAmount.toLocaleString()),1)]),o("div",Go,[$o,o("span",ot," $ "+r(t.availableCoupon?(t.cart.cartAmount-t.cart.cartAmount*(t.selectedCoupon.percent/100)).toLocaleString():0),1)])]),o("div",tt,[et,o("span",st," $ "+r(t.availableCoupon?(t.cart.cartAmount*(t.selectedCoupon.percent/100)).toLocaleString():t.cart.cartAmount),1)]),o("div",nt,[o("button",{type:"button",class:"btn border flex-grow-1 me-1 btn-hover",onClick:s[2]||(s[2]=(...n)=>t.linePay&&t.linePay(...n))},ct),o("button",lt,[b(e,{icon:"fa-coins"}),C("現金支付 ")])])])])])])):(d(),i("h2",dt,[C(" 目前還未將商品加入購物車 "),b(e,{class:"ms-2",icon:"fa-face-frown"})])),b(u,{onApplyCoupon:t.setCoupon},null,8,["onApplyCoupon"])],64)}const gt=E(xo,[["render",it],["__scopeId","data-v-38546376"]]);export{gt as default};
