import{_ as p,u,a as m,l as _,r as b,o as g,c as v,b as s,w as n,v as i,d as f,s as h,e as w,p as x,f as k}from"./index-297003e7.js";import{l as y}from"./api-b9dbadc7.js";import{_ as I}from"./e-store-logo-4781a984.js";const E="/vue_Estore/assets/google-330b1c43.png",S="/vue_Estore/assets/github-5d21755d.svg";const C={setup(){const t=u(),e=m(),l=_(),o=b({username:"zxcv96197@gmail.com",password:"w0928114237"});return{user:o,login:()=>{l.showLoading(),y(o.value).then(c=>{h("token",c.data.token),e.query.redirect?t.push(e.query.redirect):t.push("/dashboard/productList"),l.hideLoading()}).catch(c=>{console.log(c)})},loading:l}}},a=t=>(x("data-v-03a4399c"),t=t(),k(),t),V={class:"login-layout"},B=a(()=>s("img",{src:I,alt:"logo"},null,-1)),L={class:"card container-fluid d-center"},q=a(()=>s("h2",{class:"mb-3 fs-4"},"登入你的帳號",-1)),G={class:"mb-3"},M=a(()=>s("label",{for:"exampleInputEmail1",class:"form-label"},"電子郵件",-1)),N={class:"mb-3"},P=a(()=>s("label",{for:"exampleInputPassword1",class:"form-label"},"密碼",-1)),R=a(()=>s("div",{class:"form-check mb-3"},[s("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),s("label",{class:"form-check-label fs-small",for:"exampleCheck1"},"保持登入狀態")],-1)),U=w('<hr data-v-03a4399c><p class="text-center fs-small" data-v-03a4399c>或者</p><div class="container-fluid" data-v-03a4399c><div class="row" data-v-03a4399c><button class="btn border d-center col-lg mb-2 mb-lg-0 me-lg-1" data-v-03a4399c><img src="'+E+'" alt="logo" data-v-03a4399c>Google </button><button class="btn border d-center col-lg ms-lg-1" data-v-03a4399c><img src="'+S+'" alt="logo" data-v-03a4399c>Github </button></div></div>',3);function z(t,e,l,o,d,c){return g(),v("div",V,[B,s("div",L,[q,s("form",null,[s("div",G,[M,n(s("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":e[0]||(e[0]=r=>o.user.username=r)},null,512),[[i,o.user.username]])]),s("div",N,[P,n(s("input",{type:"password",class:"form-control",id:"exampleInputPassword1","onUpdate:modelValue":e[1]||(e[1]=r=>o.user.password=r)},null,512),[[i,o.user.password]])]),R,s("button",{type:"submit",class:"btn btn-primary w-100",onClick:e[2]||(e[2]=f(r=>o.login(),["prevent"]))}," 登入 ")]),U])])}const j=p(C,[["render",z],["__scopeId","data-v-03a4399c"]]);export{j as default};