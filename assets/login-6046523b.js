import{_ as v,u as g,a as x,l as k,r as p,g as _,b as w,o as y,c as C,d as e,w as d,v as f,e as I,f as b,h as S,i as D,s as u,j as A,p as N,k as V}from"./index-98dec3a2.js";import{l as B}from"./api-e60f54dc.js";import{e as E}from"./sweetAlert-364c7ec7.js";import{_ as L}from"./e-store-logo-4781a984.js";const M={setup(){const l=g(),s=x(),r=k(),o=p(!1),c=_("userData")?_("userData"):void 0,n=p({username:"",password:""});return c!==void 0&&(n.value=JSON.parse(c)),{user:n,login:(t=!1)=>{u("isVisitor",t);const h={username:"zxcv96197@gmail.com",password:"w0928114237"};r.showLoading(),B(t?h:n.value).then(i=>{i.data.success?(o.value&&!t?u("userData",JSON.stringify(n.value)):o.value||A("userData"),u("token",i.data.token),s.query.redirect?l.push(s.query.redirect):l.push("/dashboard/productList")):E("登入失敗","請檢查帳號或密碼是否正確"),r.hideLoading()}).catch(i=>{console.log(i)})},loading:r,rememberAccount:o}}},a=l=>(N("data-v-61230e60"),l=l(),V(),l),U={class:"login-layout"},q=a(()=>e("img",{src:L,alt:"logo"},null,-1)),J={class:"card container-fluid d-center"},O=a(()=>e("h2",{class:"mb-3 fs-4"},"登入你的帳號",-1)),P={class:"mb-3"},R=a(()=>e("label",{for:"exampleInputEmail1",class:"form-label"},"電子郵件",-1)),j={class:"mb-3"},z=a(()=>e("label",{for:"exampleInputPassword1",class:"form-label"},"密碼",-1)),H={class:"form-check mb-3"},T=a(()=>e("label",{class:"form-check-label fs-small",for:"exampleCheck1"},"記住帳號密碼",-1)),F=a(()=>e("hr",null,null,-1)),G=a(()=>e("p",{class:"text-center fs-small"},"或者",-1)),K={class:"d-flex"},Q=a(()=>e("button",{type:"submit",class:"btn btn-light border w-100"}," 回首頁 ",-1));function W(l,s,r,o,c,n){const m=w("router-link");return y(),C("div",U,[q,e("div",J,[O,e("form",null,[e("div",P,[R,d(e("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":s[0]||(s[0]=t=>o.user.username=t)},null,512),[[f,o.user.username]])]),e("div",j,[z,d(e("input",{type:"password",class:"form-control",id:"exampleInputPassword1","onUpdate:modelValue":s[1]||(s[1]=t=>o.user.password=t)},null,512),[[f,o.user.password]])]),e("div",H,[d(e("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1","onUpdate:modelValue":s[2]||(s[2]=t=>o.rememberAccount=t)},null,512),[[I,o.rememberAccount]]),T]),e("button",{type:"submit",class:"btn btn-primary w-100",onClick:s[3]||(s[3]=b(t=>o.login(),["prevent"]))}," 登入 ")]),F,G,e("div",K,[e("button",{type:"submit",class:"btn btn-light border me-1 flex-grow-1",onClick:s[4]||(s[4]=b(t=>o.login(!0),["prevent"]))}," 訪客登入 (無需帳號密碼) "),S(m,{to:"/eStore/home",class:"text-center text-black flex-grow-1 ms-1"},{default:D(()=>[Q]),_:1})])])])}const ee=v(M,[["render",W],["__scopeId","data-v-61230e60"]]);export{ee as default};