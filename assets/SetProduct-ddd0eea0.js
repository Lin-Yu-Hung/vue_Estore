import{s as N,f as V,a as K,d as Z,e as $,g as ee,c as te}from"./api-7a0ee18d.js";import{_ as oe,t as ae,x as le,E as se,r as h,a as ie,l as ne,m as de,f as re,D as ce,g as I,o as r,c,b as t,y as A,h as n,w as L,v as R,F as q,B as H,A as T,i as z,z as b,H as O,j as W,p as me,k as ue}from"./index-f5656a25.js";import{p as _e}from"./product-51535d8b.js";const pe={components:{Field:ae,Form:le,ErrorMessage:se},setup(k,a){let w=h("");const e=h([]),u=h({title:"",category:"",origin_price:0,price:0,unit:"",description:"",content:"",is_enabled:1}),P=ie(),d=ne();de(()=>P.path,i=>{p.value=P.fullPath==="/dashboard/editProduct",F()});const m=h(""),_=h(""),E=h({}),l=_e(),{productList:o}=re(l),p=h(P.fullPath==="/dashboard/editProduct"),S=h(),D=()=>{o.value.forEach(i=>{E.value[i.id]=i})},G=ce(()=>o.value.length>0?(D(),o.value.filter(i=>i.title.match(_.value))):[]),j=i=>{u.value={...i},w.value=i.imageUrl,i.imagesUrl?e.value=[...i.imagesUrl]:e.value.splice(0),m.value=i.id};p&&(o.value.length===0?l.getAllProductData().then(()=>{D()}):D(),Object.keys(l.editData).length>0&&(j(l.editData),l.setEditData({})));const J=async()=>{u.value.imageUrl=w.value,u.value.imagesUrl=[...e.value],d.showLoading();const i={data:{...u.value}},f=p?ee:te,y=p?"編輯":"建立";try{const g=await f(i);console.log(g),g.data.success?(await l.getAllProductData(),N(`${y}成功!`),F()):V(`${y}失敗!`)}catch(g){V(`${y}失敗!`),console.log(g)}finally{d.hideLoading()}},Q=async(i,f="main")=>{const y=[...i.target.files],g=i.target.files.length;if(g===0)return;if(f!=="main"&&(g>5||g+e.value.length>5)){V("最多上傳5筆檔案");return}if(y.some(v=>!v.type||v.type!=="image/jpeg"&&v.type!=="image/png")){d.hideLoading(),V("檔案格式錯誤","僅能上傳jpg、png類型檔案");return}if(d.showLoading(),f=="main"){const v=new FormData,U=y[0];v.append("file-to-upload",U);try{const x=await K(v);console.log(x),x.status===200&&(w.value=x.data.imageUrl)}catch(x){console.log(x)}}else{const v=y.map(async C=>{const B=new FormData;B.append("file-to-upload",C);try{const M=await K(B);return M.status===200?M.data.imageUrl:null}catch{return null}}),U=await Promise.all(v);U.some(C=>C===null)?V("上傳失敗","請稍後在試或使用其他檔案"):e.value.push(...U)}d.hideLoading()},X=i=>{e.value.splice(i,1)},Y=async()=>{if(await Z(u.value.title)){d.showLoading();try{const f=await $(u.value.id);console.log(f),f.data.success&&(await l.getAllProductData(),N("刪除成功!"),F())}catch(f){console.log(f)}finally{d.hideLoading()}}},F=async()=>{u.value={title:"",category:"",origin_price:0,price:0,unit:"",description:"",content:"",is_enabled:1},w.value="",e.value.splice(0),m.value="",setTimeout(()=>{S.value.resetForm()},0)};return{data:u,imageUrl:w,imageList:e,isEditStatus:p,filterProductList:G,selectEditProduct:m,productKeyword:_,editDataMap:E,form:S,setProduct:J,uploadImg:Q,delImage:X,setEditData:j,deleteProduct:Y}}},s=k=>(me("data-v-a26c35b2"),k=k(),ue(),k),fe={class:"card pt-2"},be={class:"px-2 mb-2 d-between"},ge={class:"mb-0"},ve={key:0,class:"input-group w-25 border rounded d-flex align-items-center"},he=["value"],ye={class:"dropdown-menu w-100 border-top-0"},we={class:"px-2 pt-1"},xe={class:"product-list ps-0 mt-2 mb-0"},ke=["onClick","value"],Ve={class:"row border-top"},Pe={class:"col-md border-end pt-2"},Ee=s(()=>t("label",{for:"name",class:"form-label"},"是否啟用",-1)),Ue={class:"form-check form-check-inline ms-3 mb-3"},Ie=s(()=>t("label",{class:"form-check-label",for:"is_enableTrue",role:"button"},"是",-1)),Le={class:"form-check form-check-inline"},Se=s(()=>t("label",{class:"form-check-label",for:"is_enableFalse",role:"button"},"否",-1)),De={class:"mb-3"},Fe=s(()=>t("label",{for:"name",class:"form-label"},"商品名稱",-1)),Ce={class:"row mb-3"},Me={class:"col-md mb-3 mb-md-0"},Ae=s(()=>t("label",{for:"category",class:"form-label"},"分類",-1)),qe=s(()=>t("option",{selected:"",value:"",disabled:""},"請選擇分類",-1)),He=s(()=>t("option",{value:"衣服"},"衣服",-1)),Te=s(()=>t("option",{value:"鞋子"},"鞋子",-1)),je=s(()=>t("option",{value:"褲子"},"褲子",-1)),Be=s(()=>t("option",{value:"其他"},"其他",-1)),Ne={class:"col-md"},Ke=s(()=>t("label",{for:"unit",class:"form-label"},"單位",-1)),Re={class:"row mb-3"},ze={class:"col-md mb-3 mb-md-0"},Oe=s(()=>t("label",{for:"origin_price",class:"form-label"},"原價",-1)),We={class:"col-md"},Ge=s(()=>t("label",{for:"price",class:"form-label"},"售價",-1)),Je={class:"mb-3"},Qe=s(()=>t("label",{for:"name",class:"form-label"},"產品描述",-1)),Xe={class:"mb-3"},Ye=s(()=>t("label",{for:"name",class:"form-label"},"說明內容",-1)),Ze={class:"col-md-5 col-lg-4 col-xxxl-3 d-column justify-content-between"},$e={class:"pt-2"},et=s(()=>t("h5",{class:"my-2"},"商品主圖",-1)),tt=s(()=>t("hr",{class:"mt-0 mb-2"},null,-1)),ot={key:0,class:"uploadImg template-image mb-3",for:"uploadImg",role:"button"},at={class:"d-column"},lt=s(()=>t("p",{class:"text-secondary mb-0"},"商品主圖",-1)),st={key:1,class:"position-relative my-2"},it=["src","alt"],nt=s(()=>t("h5",{class:"my-2"},"商品附圖",-1)),dt=s(()=>t("hr",{class:"mt-0 mb-2"},null,-1)),rt={class:"d-flex flex-wrap"},ct=["onClick"],mt=["src","alt"],ut={class:"d-column"},_t=s(()=>t("p",{class:"text-secondary mb-0"},"商品附圖",-1)),pt={class:"d-flex mt-3 mb-2"},ft=["disabled"];function bt(k,a,w,e,u,P){const d=I("font-awesome-icon"),m=I("Field"),_=I("ErrorMessage"),E=I("Form");return r(),c("div",fe,[t("div",be,[t("h2",ge,A(e.isEditStatus?"修改":"建立")+"商品",1),e.isEditStatus?(r(),c("div",ve,[t("input",{type:"text",class:"form-control border-0 rounded",readonly:"",role:"button",placeholder:"請選擇編輯商品","data-bs-toggle":"dropdown","data-bs-auto-close":"true","aria-expanded":"false",value:e.selectEditProduct?e.editDataMap[e.selectEditProduct].title:""},null,8,he),n(d,{"data-bs-toggle":"dropdown","data-bs-auto-close":"true",role:"button","aria-expanded":"false",class:"me-3",icon:"fa-chevron-down"}),t("div",ye,[t("div",we,[L(t("input",{type:"text",placeholder:"查詢商品名稱",class:"form-control-sm border rounded w-100","onUpdate:modelValue":a[0]||(a[0]=l=>e.productKeyword=l)},null,512),[[R,e.productKeyword]]),t("ul",xe,[(r(!0),c(q,null,H(e.filterProductList,l=>(r(),c("li",{class:b(["py-1",{active:e.selectEditProduct===l.id}]),onClick:o=>(e.selectEditProduct=l.id,e.setEditData(e.editDataMap[l.id])),key:l.id,value:l.id},A(l.title),11,ke))),128))])])])])):T("",!0)]),n(E,{class:b([{cover:!e.selectEditProduct&&e.isEditStatus},"container-fluid"]),ref:"form",onSubmit:e.setProduct},{default:z(({errors:l})=>[t("div",Ve,[t("div",Pe,[Ee,t("div",Ue,[L(t("input",{class:"form-check-input",type:"radio",name:"is_enable",id:"is_enableTrue",value:1,"onUpdate:modelValue":a[1]||(a[1]=o=>e.data.is_enabled=o),checked:""},null,512),[[O,e.data.is_enabled]]),Ie]),t("div",Le,[L(t("input",{class:"form-check-input",type:"radio",name:"is_enable",id:"is_enableFalse","onUpdate:modelValue":a[2]||(a[2]=o=>e.data.is_enabled=o),value:2},null,512),[[O,e.data.is_enabled]]),Se]),t("div",De,[Fe,n(m,{id:"title",name:"商品名稱",type:"text",rules:"required",class:b(["formInput form-control",{"is-invalid":l.商品名稱}]),placeHolder:"請輸入商品名稱",modelValue:e.data.title,"onUpdate:modelValue":a[3]||(a[3]=o=>e.data.title=o)},null,8,["class","modelValue"]),n(_,{class:"text-danger invalid-feedback",name:"商品名稱"})]),t("div",Ce,[t("div",Me,[Ae,n(m,{as:"select",id:"category",name:"分類",rules:"required",class:b(["form-select",{"is-invalid":l.分類}]),modelValue:e.data.category,"onUpdate:modelValue":a[4]||(a[4]=o=>e.data.category=o)},{default:z(()=>[qe,He,Te,je,Be]),_:2},1032,["class","modelValue"]),n(_,{class:"text-danger invalid-feedback",name:"分類"})]),t("div",Ne,[Ke,n(m,{id:"unit",name:"單位",type:"text",rules:"required",class:b(["formInput form-control",{"is-invalid":l.單位}]),placeHolder:"請輸入單位",modelValue:e.data.unit,"onUpdate:modelValue":a[5]||(a[5]=o=>e.data.unit=o)},null,8,["class","modelValue"]),n(_,{class:"text-danger invalid-feedback",name:"單位"})])]),t("div",Re,[t("div",ze,[Oe,n(m,{id:"origin_price",name:"原價",type:"number",rules:"required",class:b(["formInput form-control",{"is-invalid":l.原價}]),placeHolder:"請輸入原價",modelValue:e.data.origin_price,"onUpdate:modelValue":a[6]||(a[6]=o=>e.data.origin_price=o),modelModifiers:{number:!0}},null,8,["class","modelValue"]),n(_,{class:"text-danger invalid-feedback",name:"原價"})]),t("div",We,[Ge,n(m,{id:"price",name:"售價",type:"number",rules:"required",class:b(["formInput form-control",{"is-invalid":l.售價}]),placeHolder:"請輸入售價",modelValue:e.data.price,"onUpdate:modelValue":a[7]||(a[7]=o=>e.data.price=o),modelModifiers:{number:!0}},null,8,["class","modelValue"]),n(_,{class:"text-danger invalid-feedback",name:"售價"})])]),t("div",Je,[Qe,n(m,{as:"textarea",name:"產品描述",type:"text",rules:"required",rows:"4",class:b(["form-control",{"is-invalid":l.產品描述}]),placeHolder:"請輸入產品描述",modelValue:e.data.description,"onUpdate:modelValue":a[8]||(a[8]=o=>e.data.description=o)},null,8,["class","modelValue"]),n(_,{class:"text-danger invalid-feedback",name:"產品描述"})]),t("div",Xe,[Ye,L(t("textarea",{rows:"4",class:"form-control",placeholder:"請輸入產品說明內容","onUpdate:modelValue":a[9]||(a[9]=o=>e.data.content=o)},null,512),[[R,e.data.content]])])]),t("div",Ze,[t("div",$e,[et,tt,e.imageUrl?(r(),c("div",st,[t("button",{type:"button",class:"btn-close position-absolute top-0","aria-label":"Close",onClick:a[10]||(a[10]=o=>e.imageUrl="")}),t("img",{class:"uploadImg mb-3",src:e.imageUrl,alt:e.imageUrl},null,8,it)])):(r(),c("label",ot,[t("div",at,[n(d,{class:"fs-2 mb-2 me-0 text-secondary",icon:"fa-image"}),lt])])),t("input",{onChange:a[11]||(a[11]=(...o)=>e.uploadImg&&e.uploadImg(...o)),id:"uploadImg",class:"form-control d-none",type:"file"},null,32),nt,dt,t("div",rt,[e.imageList.length>0?(r(!0),c(q,{key:0},H(e.imageList,(o,p)=>(r(),c("div",{class:"position-relative",key:o},[t("button",{type:"button",class:"btn-close position-absolute top-0","aria-label":"Close",onClick:S=>e.delImage(p)},null,8,ct),t("img",{class:"uploadImgs mb-3",src:o,alt:o},null,8,mt)]))),128)):T("",!0),(r(!0),c(q,null,H(5-e.imageList.length,(o,p)=>(r(),c("label",{key:p,class:"uploadImgs template-image",for:"uploadImgs",role:"button"},[t("div",ut,[n(d,{class:"fs-4 mb-2 me-0 text-secondary",icon:"fa-image"}),_t])]))),128)),t("input",{onChange:a[12]||(a[12]=o=>e.uploadImg(o,"multiple")),type:"file",class:"form-control d-none",id:"uploadImgs",multiple:""},null,32)])]),t("div",pt,[e.isEditStatus?(r(),c("button",{key:0,type:"button",class:"btn btn-danger text-white w-50 me-2",onClick:a[13]||(a[13]=(...o)=>e.deleteProduct&&e.deleteProduct(...o)),disabled:!e.selectEditProduct},[n(d,{icon:"fa-trash-can",class:"me-1"}),W("刪除商品 ")],8,ft)):T("",!0),t("button",{type:"submit",class:b(["btn btn-primary flex-grow-1",{"ms-2":e.isEditStatus}])},[n(d,{icon:"fa-edit",class:"me-1"}),W(A(e.isEditStatus?"修改":"建立")+"商品 ",1)],2)])])])]),_:1},8,["class","onSubmit"])])}const wt=oe(pe,[["render",bt],["__scopeId","data-v-a26c35b2"]]);export{wt as default};
