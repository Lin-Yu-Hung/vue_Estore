import{u as r,l as e,N as s}from"./index-3fe1363a.js";import{b as a}from"./api-170e4ad7.js";const c=r();e();const p=s("productStore",{state:()=>({product:[],editData:{}}),getters:{productList:t=>t.product},actions:{getAllProductData(){return new Promise(async(t,i)=>{try{const o=await a();console.log(o),this.product=Object.values(o.data.products)}catch(o){c.push("/login"),console.log(o)}finally{t()}})},setProductList(t){this.product=JSON.parse(JSON.stringify(t))},setEditData(t){this.editData={...t}}}});export{p};