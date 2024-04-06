import{c as u}from"./cart-eb69eacf.js";import{f as p}from"./api-05e171a3.js";import{_ as f,a as m,u as h,l as b,o as a,c as l,b as t,F as y,z as v,y as d,p as g,f as x}from"./index-340685d7.js";import{e as S,s as w}from"./sweetAlert-0da67127.js";const I={setup(n){const s=u(),c=m(),e=h(),r=b(),i=async()=>{if(!c.query.transactionId){S("發生錯誤");return}r.showLoading();try{const o=await p({transactionId:c.query.transactionId,amount:s.cartAmount,currency:"TWD"});console.log(o),o.status===200&&(await w("交易成功"),e.push("/eStore/home"),setTimeout(()=>{s.clearCart()},1e3))}catch(o){console.log(o)}finally{r.hideLoading()}};return console.log(),{cart:s,router:e,confirmPay:i}}},_=n=>(g("data-v-cd76b0f2"),n=n(),x(),n),C={class:"container-fluid d-center p-3"},P={class:"card shadow p-3"},k={class:"d-between flex-column h-100"},L={class:"d-column"},A=_(()=>t("h2",{class:"fs-title border-bottom pb-2"},"確認付款",-1)),B={class:"table-responsive"},q={class:"table table-hover"},D=_(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"},"商品名稱"),t("th",{scope:"col",class:"text-end"},"數量"),t("th",{scope:"col",class:"text-end"},"單價")])],-1)),F={class:"text-end"},R={class:"text-end"},T={class:"d-flex mt-2"};function z(n,s,c,e,r,i){return a(),l("div",C,[t("div",P,[t("div",k,[t("div",L,[A,t("div",B,[t("table",q,[D,t("tbody",null,[(a(!0),l(y,null,v(e.cart.cartItems,o=>(a(),l("tr",{key:o.info.id},[t("td",null,d(o.info.title),1),t("td",F,d(o.count),1),t("td",R,d(o.info.price.toLocaleString()),1)]))),128))])])])]),t("div",T,[t("button",{class:"btn btn-light border w-50 me-1",onClick:s[0]||(s[0]=o=>e.router.push("/eStore/cart"))}," 取消 "),t("button",{class:"btn btn-primary w-50 ms-1",onClick:s[1]||(s[1]=(...o)=>e.confirmPay&&e.confirmPay(...o))}," 確認付款 ")])])])])}const $=f(I,[["render",z],["__scopeId","data-v-cd76b0f2"]]);export{$ as default};