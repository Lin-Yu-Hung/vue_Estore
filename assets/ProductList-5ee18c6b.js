import{h as z,i as F,j as $,k as J}from"./api-422668ba.js";import{_ as j,P as K,Q as R,R as T,l as q,r as C,J as B,k as V,o as h,c as b,b as e,B as k,h as l,i as I,w as D,v as M,z as y,n as u,j as N,F as E,A,H as G,q as Q,u as X,t as H,p as Y,f as Z}from"./index-f45ec150.js";import{a as ee}from"./bootstrap-28393965.js";import{d as te}from"./sweetAlert-6fd564e2.js";import{V as oe}from"./index-5cca53c0.js";import{p as ae}from"./product-e1e549bf.js";const se={components:{Field:K,Form:R,ErrorMessage:T},props:{setStatus:{type:String}},emits:["updateData"],setup(_,o){let w="";const{emit:t}=o,m=q();let v=C("");const c=C([]),i=C({title:"",category:"",origin_price:"",price:"",unit:"",description:"",content:"",is_enabled:1,imageUrl:v.value,imagesUrl:[...c.value]}),r=()=>{console.log(i.value),m.showLoading(),_.setStatus=="add"&&z({data:{title:"[賣]動物園造型衣服5",category:"衣服5",origin_price:100,price:300,unit:"個",description:"Sit down please 名設計師設計",content:"這是內容",is_enabled:1,imageUrl:"主圖網址",imagesUrl:["圖片網址一","圖片網址二","圖片網址三","圖片網址四","圖片網址五"]}}).then(p=>{console.log(p),w.hide(),t("updateData")}).catch(p=>{console.log(p),m.hideLoading()})},s=async a=>{const p=a.target.files.length;if(p!==0){if(m.showLoading(),p==1){const x=new FormData,S=a.target.files[0];x.append("file-to-upload",S);try{const f=await F(x);console.log(f),f.status===200&&(v.value=f.data.imageUrl)}catch(f){console.log(f)}}else{const S=[...a.target.files].map(async O=>{const P=new FormData;P.append("file-to-upload",O);const n=await F(P);return n.status===200?n.data.imageUrl:null}),f=await Promise.all(S);c.value.push(...f)}m.hideLoading()}},d=a=>{c.value=c.value.filter(p=>p!==a),document.getElementById("multipleImg")};return B(()=>{w=ee("setProductModal")}),{data:i,imageUrl:v,imageList:c,setProduct:r,uploadImg:s,delImage:d}}},le={class:"modal fade modal-xl",id:"setProductModal",tabindex:"-1","aria-labelledby":"setProductModalLabel","aria-hidden":"true"},ne={class:"modal-dialog"},ie={class:"modal-content border-0"},de={class:"modal-header bg-dark text-white"},ce={class:"modal-title",id:"exampleModalLabel"},re=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),me={class:"modal-body"},ue={class:"container-fluid"},_e={class:"row"},pe={class:"col-sm-4"},ge={class:"mb-3"},he=e("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),be={class:"mb-3"},fe={for:"uploadImg",class:"form-label btn btn-primary"},ve={key:0,class:"position-relative my-2"},ye=["src","alt"],we={for:"multipleImg",class:"form-label btn btn-success"},xe={class:"container-fluid"},ke={class:"row"},Ce=["onClick"],Ve=["src","alt"],Se={class:"col-sm-8"},Pe={class:"mb-3"},Le=e("label",{for:"title",class:"form-label"},"標題",-1),Ue={class:"row gx-2"},Ie={class:"mb-3 col-md-6"},De=e("label",{for:"category",class:"form-label"},"分類",-1),Oe={class:"mb-3 col-md-6"},Me=e("label",{for:"price",class:"form-label"},"單位",-1),Ee={class:"row gx-2"},Ae={class:"mb-3 col-md-6"},Fe=e("label",{for:"origin_price",class:"form-label"},"原價",-1),He={class:"mb-3 col-md-6"},je=e("label",{for:"price",class:"form-label"},"售價",-1),qe=e("hr",null,null,-1),Be={class:"mb-3"},Ne=e("label",{for:"description",class:"form-label"},"產品描述",-1),We={class:"mb-3"},ze=e("label",{for:"content",class:"form-label"},"說明內容",-1),$e={class:"mb-3"},Je={class:"form-check"},Ke=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Re=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-outline-secondary px-3","data-bs-dismiss":"modal"}," 取消 "),e("button",{type:"submit",class:"btn btn-dark px-3"}," 確認 ")],-1);function Te(_,o,w,t,m,v){const c=V("font-awesome-icon"),i=V("Field"),r=V("ErrorMessage"),s=V("Form");return h(),b("div",le,[e("div",ne,[e("div",ie,[e("div",de,[e("h5",ce,[e("span",null,k(w.setStatus=="add"?"新增":"修改")+"產品",1)]),re]),e("div",me,[l(s,{class:"w-100",onSubmit:t.setProduct},{default:I(({errors:d})=>[e("div",ue,[e("div",_e,[e("div",pe,[e("div",ge,[he,D(e("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[0]||(o[0]=a=>t.imageUrl=a)},null,512),[[M,t.imageUrl]])]),e("div",be,[e("label",fe,[l(c,{icon:"fa-cloud-upload"}),y("上傳商品主圖 ")]),l(i,{name:"圖片",onChange:t.uploadImg,id:"uploadImg",class:u(["form-control d-none",{"is-invalid":d.圖片}]),type:"file",rules:{ext:["jpg","png"]}},null,8,["onChange","class"]),l(r,{class:"invalid-feedback",as:"p",name:"圖片"},{default:I(()=>[y("僅能上傳 jpg、png檔案 ")]),_:1}),t.imageUrl?(h(),b("div",ve,[e("button",{type:"button",class:"btn-close position-absolute top-0","aria-label":"Close",onClick:o[1]||(o[1]=a=>t.imageUrl="")}),e("img",{src:t.imageUrl,alt:t.imageUrl,class:"img-fluid"},null,8,ye)])):N("",!0)]),e("label",we,[l(c,{icon:"fa-file-export"}),y("上傳其他圖片")]),l(i,{name:"圖片",onChange:t.uploadImg,multiple:"",id:"multipleImg",class:u(["form-control d-none",{"is-invalid":d.圖片}]),type:"file",rules:{ext:["jpg","png"]}},null,8,["onChange","class"]),l(r,{class:"invalid-feedback",as:"p",name:"圖片"},{default:I(()=>[y("僅能上傳 jpg、png檔案 ")]),_:1}),e("div",xe,[e("div",ke,[(h(!0),b(E,null,A(t.imageList,a=>(h(),b("div",{class:"col-6 mt-2 position-relative",key:a},[e("button",{type:"button",class:"btn-close position-absolute top-0","aria-label":"Close",onClick:p=>t.delImage(a)},null,8,Ce),e("img",{src:a,alt:a,class:"img-fluid"},null,8,Ve)]))),128))])])]),e("div",Se,[e("div",Pe,[Le,l(i,{id:"title",name:"標題",type:"text",rules:"required",class:u(["formInput form-control",{"is-invalid":d.標題}]),placeHolder:"請輸入標題",modelValue:t.data.title,"onUpdate:modelValue":o[2]||(o[2]=a=>t.data.title=a)},null,8,["class","modelValue"]),l(r,{class:"text-danger invalid-feedback",name:"標題"})]),e("div",Ue,[e("div",Ie,[De,l(i,{id:"title",name:"分類",type:"text",rules:"required",class:u(["formInput form-control",{"is-invalid":d.分類}]),placeHolder:"請輸入分類",modelValue:t.data.category,"onUpdate:modelValue":o[3]||(o[3]=a=>t.data.category=a)},null,8,["class","modelValue"]),l(r,{class:"text-danger invalid-feedback",name:"分類"})]),e("div",Oe,[Me,l(i,{id:"title",name:"單位",type:"text",rules:"required",class:u(["formInput form-control",{"is-invalid":d.單位}]),placeHolder:"請輸入單位",modelValue:t.data.unit,"onUpdate:modelValue":o[4]||(o[4]=a=>t.data.unit=a)},null,8,["class","modelValue"]),l(r,{class:"text-danger invalid-feedback",name:"單位"})])]),e("div",Ee,[e("div",Ae,[Fe,l(i,{id:"title",name:"原價",type:"number",rules:"required",class:u(["formInput form-control",{"is-invalid":d.原價}]),placeHolder:"請輸入原價",modelValue:t.data.origin_price,"onUpdate:modelValue":o[5]||(o[5]=a=>t.data.origin_price=a)},null,8,["class","modelValue"]),l(r,{class:"text-danger invalid-feedback",name:"原價"})]),e("div",He,[je,l(i,{id:"title",name:"售價",type:"number",rules:"required",class:u(["formInput form-control",{"is-invalid":d.售價}]),placeHolder:"請輸入售價",modelValue:t.data.price,"onUpdate:modelValue":o[6]||(o[6]=a=>t.data.price=a)},null,8,["class","modelValue"]),l(r,{class:"text-danger invalid-feedback",name:"售價"})])]),qe,e("div",Be,[Ne,l(i,{as:"textarea",name:"產品描述",type:"text",rules:"required",class:u(["form-control",{"is-invalid":d.產品描述}]),placeHolder:"請輸入產品描述",modelValue:t.data.description,"onUpdate:modelValue":o[7]||(o[7]=a=>t.data.description=a)},null,8,["class","modelValue"]),l(r,{class:"text-danger invalid-feedback",name:"產品描述"})]),e("div",We,[ze,D(e("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":o[8]||(o[8]=a=>t.data.content=a)},null,512),[[M,t.data.content]])]),e("div",$e,[e("div",Je,[D(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":o[9]||(o[9]=a=>t.data.is_enabled=a)},null,512),[[G,t.data.is_enabled]]),Ke])]),Re])])])]),_:1},8,["onSubmit"])])])])])}const Ge=j(se,[["render",Te]]),Qe={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1},grid:{left:"2%",right:"6%",top:"8%",bottom:"2%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["Brazil","Indonesia","USA","India","China","World"]},series:[{name:"2011",type:"bar",data:[18203,23489,29034,104970,131744,50230]}]},Xe={tooltip:{trigger:"item"},legend:{bottom:"center",orient:"vertical",right:"10%",selectedMode:!1},series:[{name:"Access From",type:"pie",radius:"60%",center:["35%","50%"],data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};const Ye={components:{SetProductModal:Ge,VueEcharts:oe},setup(){const _=ae(),{productList:o}=Q(_),w={...Qe},t={...Xe},m=C(null),v=C(""),c=C(1),i=q(),r=X(),s=()=>{const g=window.innerHeight*.72;return Math.floor(g/60)},d=C(s()),a=H(()=>o.value?Math.ceil(Object.keys(o.value).length/d.value):0),p=H(()=>{if(o.value){const n=o.value.filter(W=>W.title.match(v.value)),g=c.value*d.value-d.value+1,U=c.value*d.value;return n.slice(g-1,U)}else return[]}),x=async()=>{i.showLoading();try{const n=await $();console.log(n),_.setProductList(Object.values(n.data.products))}catch(n){r.push("/login"),console.log(n)}finally{i.hideLoading()}},S=n=>{_.setEditData(n),r.push("/dashboard/editProduct")},f=async n=>{if(await te(n.title)){i.showLoading();try{(await J(n.id)).data.success&&await x()}catch(U){console.log(U)}finally{i.hideLoading()}}},O=n=>{c.value=n},P=()=>{const n=window.innerWidth;if(!m.value)return;const g=JSON.parse(JSON.stringify(t));n<1550&&n>1370?(g.legend.right="0%",m.value.setOption(g)):n<1370&&n>992||n<576?(g.legend={bottom:"0%",left:"center",orient:"horizontal",selectedMode:!1},g.series[0].center=["50%","45%"],m.value.setOption(g)):m.value.setOption(t)};return x(),B(()=>{P(),window.addEventListener("resize",()=>{d.value=s(),P()})}),{showData:p,pageCount:a,nowPage:c,productKeyWord:v,bestSellerOption:w,proportionOfSalesOption:t,proportionOfSales:m,getProductAll:x,deleteProduct:f,switchpage:O,setEditData:S}}},L=_=>(Y("data-v-66f03c77"),_=_(),Z(),_),Ze={class:"container-fluid"},et={class:"row"},tt={class:"col-lg-6"},ot={class:"card shadow card-layout"},at={class:"d-column"},st=L(()=>e("p",{class:"mb-0 pb-2 border-bottom fs-large"},"熱銷商品",-1)),lt={class:"col-lg-6"},nt={class:"card shadow card-layout"},it={class:"d-column"},dt=L(()=>e("p",{class:"mb-0 pb-2 border-bottom fs-large"},"銷售額占比",-1)),ct={class:"card card-layout"},rt={class:"productList"},mt={class:"d-between"},ut={class:"border px-3 rounded-5 d-center align-items-center w-lg-25"},_t={class:"table table-hover"},pt=L(()=>e("thead",null,[e("tr",null,[e("th",{scope:"col"},"狀態"),e("th",{scope:"col",class:"mobile-hide"},"商品分類"),e("th",{scope:"col"},"商品名稱"),e("th",{scope:"col",class:"mobile-hide"},"商品原價"),e("th",{scope:"col"},"商品價格"),e("th",{scope:"col"},"操作")])],-1)),gt={class:"mobile-hide"},ht=["src","alt","title"],bt={class:"mobile-hide"},ft={class:"d-flex justify-content-center flex-wrap"},vt=["onClick"],yt=["onClick"],wt={key:0,class:"d-end me-3"},xt={"aria-label":"Page navigation example "},kt={class:"pagination mb-0"},Ct={class:"page-item"},Vt=L(()=>e("span",{"aria-hidden":"true"},"«",-1)),St=[Vt],Pt=["onClick"],Lt={class:"page-item"},Ut=L(()=>e("span",{"aria-hidden":"true"},"»",-1)),It=[Ut];function Dt(_,o,w,t,m,v){const c=V("VueEcharts"),i=V("font-awesome-icon"),r=V("router-link");return h(),b("div",Ze,[e("div",et,[e("div",tt,[e("div",ot,[e("div",at,[st,l(c,{id:"bestSeller",option:t.bestSellerOption,style:{height:"300px",width:"100%"}},null,8,["option"])])])]),e("div",lt,[e("div",nt,[e("div",it,[dt,l(c,{ref:"proportionOfSales",option:t.proportionOfSalesOption,style:{height:"300px",width:"100%"}},null,8,["option"])])])])]),e("div",ct,[e("div",rt,[e("div",mt,[e("div",ut,[l(i,{icon:"fa-search",role:"button"}),D(e("input",{type:"text",class:"form-control border-0",placeholder:"查詢商品名稱","onUpdate:modelValue":o[0]||(o[0]=s=>t.productKeyWord=s)},null,512),[[M,t.productKeyWord]])]),l(r,{to:"setProduct",class:"bg-primary px-3 py-2 text-center rounded text-white"},{default:I(()=>[y("+ 新增")]),_:1})]),e("table",_t,[pt,e("tbody",null,[(h(!0),b(E,null,A(t.showData,s=>(h(),b("tr",{key:s.id},[e("td",null,[e("p",{class:u(["fixed-width-80 status-text",{"bg-success text-green":s.is_enabled===1,"bg-red text-white":s.is_enabled!==1}])},k(s.is_enabled===1?"啟用":"未啟用"),3)]),e("td",gt,k(s.category),1),e("td",null,[e("img",{class:"image-mini me-2",src:s.imageUrl,alt:s.title,title:s.title},null,8,ht),y(k(s.title),1)]),e("td",bt,k(s.origin_price.toLocaleString()),1),e("td",null,k(s.price.toLocaleString()),1),e("td",null,[e("div",ft,[e("button",{type:"button",class:"edit-btn",onClick:d=>t.setEditData(s)},[l(i,{icon:"fa-edit"}),y("編輯 ")],8,vt),e("button",{type:"button",class:"danger-btn",onClick:d=>t.deleteProduct(s)},[l(i,{icon:"fa-trash-can"}),y("刪除 ")],8,yt)])])]))),128))])])]),t.pageCount!==1?(h(),b("div",wt,[e("nav",xt,[e("ul",kt,[e("li",Ct,[e("a",{class:u(["page-link",{disabled:t.nowPage==1}]),"aria-label":"Previous",onClick:o[1]||(o[1]=s=>t.nowPage--)},St,2)]),(h(!0),b(E,null,A(t.pageCount,(s,d)=>(h(),b("li",{class:"page-item",key:d},[e("a",{class:u(["page-link",{active:t.nowPage==s}]),onClick:a=>t.switchpage(s)},k(s),11,Pt)]))),128)),e("li",Lt,[e("a",{class:u(["page-link",{disabled:t.nowPage==t.pageCount}]),"aria-label":"Next",onClick:o[2]||(o[2]=s=>t.nowPage++)},It,2)])])])])):N("",!0)])])}const jt=j(Ye,[["render",Dt],["__scopeId","data-v-66f03c77"]]);export{jt as default};
