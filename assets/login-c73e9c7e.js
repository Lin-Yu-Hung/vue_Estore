import{_ as p,u as m,a as u,l as _,r as b,o as g,c as v,b as s,w as n,v as c,d as f,s as h,e as w,p as x,f as k}from"./index-f67981c8.js";import{l as y}from"./api-c115c328.js";import{_ as I}from"./e-store-logo-4781a984.js";import"./sweetAlert-aec58944.js";const E="/vue_Estore/assets/google-330b1c43.png",S="/vue_Estore/assets/github-5d21755d.svg";const C={setup(){const t=m(),o=u(),l=_(),e=b({username:"zxcv96197@gmail.com",password:"w0928114237"});return{user:e,login:()=>{l.showLoading(),y(e.value).then(d=>{h("token",d.data.token),o.query.redirect?t.push(o.query.redirect):t.push("/dashboard/productList"),l.hideLoading()}).catch(d=>{console.log(d)})},loading:l}}},a=t=>(x("data-v-a4541b2d"),t=t(),k(),t),V={class:"login-layout"},B=a(()=>s("img",{src:I,alt:"logo"},null,-1)),L={class:"card container-fluid d-center"},q=a(()=>s("h2",{class:"mb-3 fs-4"},"登入你的帳號",-1)),G={class:"mb-3"},M=a(()=>s("label",{for:"exampleInputEmail1",class:"form-label"},"電子郵件",-1)),N={class:"mb-3"},P=a(()=>s("label",{for:"exampleInputPassword1",class:"form-label"},"密碼",-1)),R=a(()=>s("div",{class:"form-check mb-3"},[s("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),s("label",{class:"form-check-label fs-small",for:"exampleCheck1"},"保持登入狀態")],-1)),U=w('<hr data-v-a4541b2d><p class="text-center fs-small" data-v-a4541b2d>或者</p><div class="container-fluid" data-v-a4541b2d><div class="row" data-v-a4541b2d><button class="btn border d-center col-lg mb-2 mb-lg-0 me-lg-1" data-v-a4541b2d><img src="'+E+'" alt="logo" data-v-a4541b2d>Google </button><button class="btn border d-center col-lg ms-lg-1" data-v-a4541b2d><img src="'+S+'" alt="logo" data-v-a4541b2d>Github </button></div></div>',3);function z(t,o,l,e,i,d){return g(),v("div",V,[B,s("div",L,[q,s("form",null,[s("div",G,[M,n(s("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":o[0]||(o[0]=r=>e.user.username=r)},null,512),[[c,e.user.username]])]),s("div",N,[P,n(s("input",{type:"password",class:"form-control",id:"exampleInputPassword1","onUpdate:modelValue":o[1]||(o[1]=r=>e.user.password=r)},null,512),[[c,e.user.password]])]),R,s("button",{type:"submit",class:"btn btn-primary w-100",onClick:o[2]||(o[2]=f(r=>e.login(),["prevent"]))}," 登入 ")]),U])])}const A=p(C,[["render",z],["__scopeId","data-v-a4541b2d"]]);export{A as default};