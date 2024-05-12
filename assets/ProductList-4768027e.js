import{h as z,i as H,j as K,k as R}from"./api-adaf9b8d.js";import{_ as $,Q as T,R as G,S as J,l as N,r as C,K as W,b as S,o as m,c as g,d as e,C as x,h as l,i as D,w as O,v as A,A as k,n as u,m as M,F,B as j,e as Q,D as X,t as Y,u as Z,x as B,E as ee,p as te,j as oe}from"./index-5c2d5f69.js";import{a as se}from"./bootstrap-b6efb0bc.js";import{d as ae}from"./sweetAlert-01ac93b2.js";import{V as le}from"./index-d5ad4aa9.js";import{p as ne}from"./product-f1cd1365.js";const ie={components:{Field:T,Form:G,ErrorMessage:J},props:{setStatus:{type:String}},emits:["updateData"],setup(v,s){let h="";const{emit:t}=s,b=N();let _=C("");const r=C([]),n=C({title:"",category:"",origin_price:"",price:"",unit:"",description:"",content:"",is_enabled:1,imageUrl:_.value,imagesUrl:[...r.value]}),d=()=>{console.log(n.value),b.showLoading(),v.setStatus=="add"&&z({data:{title:"[賣]動物園造型衣服5",category:"衣服5",origin_price:100,price:300,unit:"個",description:"Sit down please 名設計師設計",content:"這是內容",is_enabled:1,imageUrl:"主圖網址",imagesUrl:["圖片網址一","圖片網址二","圖片網址三","圖片網址四","圖片網址五"]}}).then(p=>{console.log(p),h.hide(),t("updateData")}).catch(p=>{console.log(p),b.hideLoading()})},a=async o=>{const p=o.target.files.length;if(p!==0){if(b.showLoading(),p==1){const L=new FormData,V=o.target.files[0];L.append("file-to-upload",V);try{const y=await H(L);console.log(y),y.status===200&&(_.value=y.data.imageUrl)}catch(y){console.log(y)}}else{const V=[...o.target.files].map(async E=>{const U=new FormData;U.append("file-to-upload",E);const P=await H(U);return P.status===200?P.data.imageUrl:null}),y=await Promise.all(V);r.value.push(...y)}b.hideLoading()}},c=o=>{r.value=r.value.filter(p=>p!==o),document.getElementById("multipleImg")};return W(()=>{h=se("setProductModal")}),{data:n,imageUrl:_,imageList:r,setProduct:d,uploadImg:a,delImage:c}}},de={class:"modal fade modal-xl",id:"setProductModal",tabindex:"-1","aria-labelledby":"setProductModalLabel","aria-hidden":"true"},ce={class:"modal-dialog"},re={class:"modal-content border-0"},me={class:"modal-header bg-dark text-white"},ue={class:"modal-title",id:"exampleModalLabel"},_e=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),pe={class:"modal-body"},ge={class:"container-fluid"},he={class:"row"},be={class:"col-sm-4"},fe={class:"mb-3"},ve=e("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),ye={class:"mb-3"},we={for:"uploadImg",class:"form-label btn btn-primary"},xe={key:0,class:"position-relative my-2"},ke=["src","alt"],Ve={for:"multipleImg",class:"form-label btn btn-success"},Ce={class:"container-fluid"},Se={class:"row"},Le=["onClick"],Pe=["src","alt"],Ue={class:"col-sm-8"},Ie={class:"mb-3"},De=e("label",{for:"title",class:"form-label"},"標題",-1),Oe={class:"row gx-2"},Me={class:"mb-3 col-md-6"},Ee=e("label",{for:"category",class:"form-label"},"分類",-1),Ae={class:"mb-3 col-md-6"},Fe=e("label",{for:"price",class:"form-label"},"單位",-1),je={class:"row gx-2"},He={class:"mb-3 col-md-6"},Be=e("label",{for:"origin_price",class:"form-label"},"原價",-1),$e={class:"mb-3 col-md-6"},Ne=e("label",{for:"price",class:"form-label"},"售價",-1),We=e("hr",null,null,-1),qe={class:"mb-3"},ze=e("label",{for:"description",class:"form-label"},"產品描述",-1),Ke={class:"mb-3"},Re=e("label",{for:"content",class:"form-label"},"說明內容",-1),Te={class:"mb-3"},Ge={class:"form-check"},Je=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),Qe=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-outline-secondary px-3","data-bs-dismiss":"modal"}," 取消 "),e("button",{type:"submit",class:"btn btn-dark px-3"}," 確認 ")],-1);function Xe(v,s,h,t,b,_){const r=S("font-awesome-icon"),n=S("Field"),d=S("ErrorMessage"),a=S("Form");return m(),g("div",de,[e("div",ce,[e("div",re,[e("div",me,[e("h5",ue,[e("span",null,x(h.setStatus=="add"?"新增":"修改")+"產品",1)]),_e]),e("div",pe,[l(a,{class:"w-100",onSubmit:t.setProduct},{default:D(({errors:c})=>[e("div",ge,[e("div",he,[e("div",be,[e("div",fe,[ve,O(e("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":s[0]||(s[0]=o=>t.imageUrl=o)},null,512),[[A,t.imageUrl]])]),e("div",ye,[e("label",we,[l(r,{icon:"fa-cloud-upload"}),k("上傳商品主圖 ")]),l(n,{name:"圖片",onChange:t.uploadImg,id:"uploadImg",class:u(["form-control d-none",{"is-invalid":c.圖片}]),type:"file",rules:{ext:["jpg","png"]}},null,8,["onChange","class"]),l(d,{class:"invalid-feedback",as:"p",name:"圖片"},{default:D(()=>[k("僅能上傳 jpg、png檔案 ")]),_:1}),t.imageUrl?(m(),g("div",xe,[e("button",{type:"button",class:"btn-close position-absolute top-0","aria-label":"Close",onClick:s[1]||(s[1]=o=>t.imageUrl="")}),e("img",{src:t.imageUrl,alt:t.imageUrl,class:"img-fluid"},null,8,ke)])):M("",!0)]),e("label",Ve,[l(r,{icon:"fa-file-export"}),k("上傳其他圖片")]),l(n,{name:"圖片",onChange:t.uploadImg,multiple:"",id:"multipleImg",class:u(["form-control d-none",{"is-invalid":c.圖片}]),type:"file",rules:{ext:["jpg","png"]}},null,8,["onChange","class"]),l(d,{class:"invalid-feedback",as:"p",name:"圖片"},{default:D(()=>[k("僅能上傳 jpg、png檔案 ")]),_:1}),e("div",Ce,[e("div",Se,[(m(!0),g(F,null,j(t.imageList,o=>(m(),g("div",{class:"col-6 mt-2 position-relative",key:o},[e("button",{type:"button",class:"btn-close position-absolute top-0","aria-label":"Close",onClick:p=>t.delImage(o)},null,8,Le),e("img",{src:o,alt:o,class:"img-fluid"},null,8,Pe)]))),128))])])]),e("div",Ue,[e("div",Ie,[De,l(n,{id:"title",name:"標題",type:"text",rules:"required",class:u(["formInput form-control",{"is-invalid":c.標題}]),placeHolder:"請輸入標題",modelValue:t.data.title,"onUpdate:modelValue":s[2]||(s[2]=o=>t.data.title=o)},null,8,["class","modelValue"]),l(d,{class:"text-danger invalid-feedback",name:"標題"})]),e("div",Oe,[e("div",Me,[Ee,l(n,{id:"title",name:"分類",type:"text",rules:"required",class:u(["formInput form-control",{"is-invalid":c.分類}]),placeHolder:"請輸入分類",modelValue:t.data.category,"onUpdate:modelValue":s[3]||(s[3]=o=>t.data.category=o)},null,8,["class","modelValue"]),l(d,{class:"text-danger invalid-feedback",name:"分類"})]),e("div",Ae,[Fe,l(n,{id:"title",name:"單位",type:"text",rules:"required",class:u(["formInput form-control",{"is-invalid":c.單位}]),placeHolder:"請輸入單位",modelValue:t.data.unit,"onUpdate:modelValue":s[4]||(s[4]=o=>t.data.unit=o)},null,8,["class","modelValue"]),l(d,{class:"text-danger invalid-feedback",name:"單位"})])]),e("div",je,[e("div",He,[Be,l(n,{id:"title",name:"原價",type:"number",rules:"required",class:u(["formInput form-control",{"is-invalid":c.原價}]),placeHolder:"請輸入原價",modelValue:t.data.origin_price,"onUpdate:modelValue":s[5]||(s[5]=o=>t.data.origin_price=o)},null,8,["class","modelValue"]),l(d,{class:"text-danger invalid-feedback",name:"原價"})]),e("div",$e,[Ne,l(n,{id:"title",name:"售價",type:"number",rules:"required",class:u(["formInput form-control",{"is-invalid":c.售價}]),placeHolder:"請輸入售價",modelValue:t.data.price,"onUpdate:modelValue":s[6]||(s[6]=o=>t.data.price=o)},null,8,["class","modelValue"]),l(d,{class:"text-danger invalid-feedback",name:"售價"})])]),We,e("div",qe,[ze,l(n,{as:"textarea",name:"產品描述",type:"text",rules:"required",class:u(["form-control",{"is-invalid":c.產品描述}]),placeHolder:"請輸入產品描述",modelValue:t.data.description,"onUpdate:modelValue":s[7]||(s[7]=o=>t.data.description=o)},null,8,["class","modelValue"]),l(d,{class:"text-danger invalid-feedback",name:"產品描述"})]),e("div",Ke,[Re,O(e("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":s[8]||(s[8]=o=>t.data.content=o)},null,512),[[A,t.data.content]])]),e("div",Te,[e("div",Ge,[O(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":s[9]||(s[9]=o=>t.data.is_enabled=o)},null,512),[[Q,t.data.is_enabled]]),Je])]),Qe])])])]),_:1},8,["onSubmit"])])])])])}const Ye=$(ie,[["render",Xe]]),Ze={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!1},grid:{left:"2%",right:"6%",top:"8%",bottom:"2%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["Brazil","Indonesia","USA","India","China","World"]},series:[{name:"2011",type:"bar",data:[18203,23489,29034,104970,131744,50230]}]},et={tooltip:{trigger:"item"},legend:{bottom:"center",orient:"vertical",right:"10%",selectedMode:!1},series:[{name:"Access From",type:"pie",radius:"60%",center:["35%","50%"],data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};const tt={components:{SetProductModal:Ye,VueEcharts:le},setup(){const v=X("isVisitor"),s=ne(),{productList:h}=Y(s),t={...Ze},b={...et},_=C(null),r=C(""),n=C(1),d=N(),a=Z(),c=()=>{const f=window.innerHeight*.72;return Math.floor(f/60)},o=C(c()),p=B(()=>h.value?Math.ceil(Object.keys(h.value).length/o.value):0),L=B(()=>{if(h.value){const i=h.value.filter(q=>q.title.match(r.value)),f=n.value*o.value-o.value+1,I=n.value*o.value;return i.slice(f-1,I)}else return[]}),V=async()=>{d.showLoading();try{const i=await K();console.log(i),s.setProductList(Object.values(i.data.products))}catch(i){a.push("/login"),console.log(i)}finally{d.hideLoading()}},y=i=>{s.setEditData(i),a.push("/dashboard/editProduct")},E=async i=>{if(await ae(i.title)){d.showLoading();try{(await R(i.id)).data.success&&await V()}catch(I){console.log(I)}finally{d.hideLoading()}}},U=i=>{n.value=i},P=()=>{const i=window.innerWidth;if(!_.value)return;const f=JSON.parse(JSON.stringify(b));i<1550&&i>1370?(f.legend.right="0%",_.value.setOption(f)):i<1370&&i>992||i<576?(f.legend={bottom:"0%",left:"center",orient:"horizontal",selectedMode:!1},f.series[0].center=["50%","45%"],_.value.setOption(f)):_.value.setOption(b)};return V(),W(()=>{P(),window.addEventListener("resize",()=>{o.value=c(),P()})}),{showData:L,pageCount:p,nowPage:n,productKeyWord:r,bestSellerOption:t,proportionOfSalesOption:b,proportionOfSales:_,getProductAll:V,deleteProduct:E,switchpage:U,setEditData:y,isVisitor:v}}},w=v=>(te("data-v-e536b601"),v=v(),oe(),v),ot={class:"container-fluid"},st={class:"row"},at={class:"col-lg-6"},lt={class:"card shadow card-layout"},nt={class:"d-column"},it=w(()=>e("p",{class:"mb-0 pb-2 border-bottom fs-large"},"熱銷商品",-1)),dt={class:"col-lg-6"},ct={class:"card shadow card-layout"},rt={class:"d-column"},mt=w(()=>e("p",{class:"mb-0 pb-2 border-bottom fs-large"},"銷售額占比",-1)),ut={class:"card card-layout"},_t={class:"productList"},pt={class:"d-between"},gt={class:"border px-3 rounded-5 d-center align-items-center w-lg-25"},ht={class:"table table-hover"},bt=w(()=>e("th",{scope:"col"},"狀態",-1)),ft=w(()=>e("th",{scope:"col",class:"mobile-hide"},"商品分類",-1)),vt=w(()=>e("th",{scope:"col"},"商品名稱",-1)),yt=w(()=>e("th",{scope:"col",class:"mobile-hide text-end"},"商品原價",-1)),wt=w(()=>e("th",{scope:"col",class:"text-end"},"商品價格",-1)),xt={scope:"col"},kt={class:"mobile-hide"},Vt=["src","alt","title"],Ct={class:"mobile-hide text-end"},St={class:"text-end"},Lt={key:0,class:"d-flex justify-content-center flex-wrap"},Pt=["onClick"],Ut=["onClick"],It={key:0,class:"d-end me-3"},Dt={"aria-label":"Page navigation example "},Ot={class:"pagination mb-0"},Mt={class:"page-item"},Et=w(()=>e("span",{"aria-hidden":"true"},"«",-1)),At=[Et],Ft=["onClick"],jt={class:"page-item"},Ht=w(()=>e("span",{"aria-hidden":"true"},"»",-1)),Bt=[Ht];function $t(v,s,h,t,b,_){const r=S("VueEcharts"),n=S("font-awesome-icon"),d=S("router-link");return m(),g("div",ot,[e("div",st,[e("div",at,[e("div",lt,[e("div",nt,[it,l(r,{id:"bestSeller",option:t.bestSellerOption,style:{height:"300px",width:"100%"}},null,8,["option"])])])]),e("div",dt,[e("div",ct,[e("div",rt,[mt,l(r,{ref:"proportionOfSales",option:t.proportionOfSalesOption,style:{height:"300px",width:"100%"}},null,8,["option"])])])])]),e("div",ut,[e("div",_t,[e("div",pt,[e("div",gt,[l(n,{icon:"fa-search",role:"button"}),O(e("input",{type:"text",class:"form-control border-0",placeholder:"查詢商品名稱","onUpdate:modelValue":s[0]||(s[0]=a=>t.productKeyWord=a)},null,512),[[A,t.productKeyWord]])]),t.isVisitor?M("",!0):(m(),ee(d,{key:0,to:"setProduct",class:"bg-primary px-3 py-2 text-center rounded text-white"},{default:D(()=>[k("+ 新增")]),_:1}))]),e("table",ht,[e("thead",null,[e("tr",null,[bt,ft,vt,yt,wt,e("th",xt,x(t.isVisitor?"":"操作"),1)])]),e("tbody",null,[(m(!0),g(F,null,j(t.showData,a=>(m(),g("tr",{key:a.id},[e("td",null,[e("p",{class:u(["fixed-width-80 status-text",{"bg-success text-green":a.is_enabled===1,"bg-red text-white":a.is_enabled!==1}])},x(a.is_enabled===1?"啟用":"未啟用"),3)]),e("td",kt,x(a.category),1),e("td",null,[e("img",{class:"image-mini me-2",src:a.imageUrl,alt:a.title,title:a.title},null,8,Vt),k(x(a.title),1)]),e("td",Ct,x(a.origin_price.toLocaleString()),1),e("td",St,x(a.price.toLocaleString()),1),e("td",null,[t.isVisitor?M("",!0):(m(),g("div",Lt,[e("button",{type:"button",class:"edit-btn",onClick:c=>t.setEditData(a)},[l(n,{icon:"fa-edit"}),k("編輯 ")],8,Pt),e("button",{type:"button",class:"danger-btn",onClick:c=>t.deleteProduct(a)},[l(n,{icon:"fa-trash-can"}),k("刪除 ")],8,Ut)]))])]))),128))])])]),t.pageCount!==1?(m(),g("div",It,[e("nav",Dt,[e("ul",Ot,[e("li",Mt,[e("a",{class:u(["page-link",{disabled:t.nowPage==1}]),"aria-label":"Previous",onClick:s[1]||(s[1]=a=>t.nowPage--)},At,2)]),(m(!0),g(F,null,j(t.pageCount,(a,c)=>(m(),g("li",{class:"page-item",key:c},[e("a",{class:u(["page-link",{active:t.nowPage==a}]),onClick:o=>t.switchpage(a)},x(a),11,Ft)]))),128)),e("li",jt,[e("a",{class:u(["page-link",{disabled:t.nowPage==t.pageCount}]),"aria-label":"Next",onClick:s[2]||(s[2]=a=>t.nowPage++)},Bt,2)])])])])):M("",!0)])])}const Tt=$(tt,[["render",$t],["__scopeId","data-v-e536b601"]]);export{Tt as default};
