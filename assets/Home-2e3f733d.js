import{V as C}from"./index-bdd53d26.js";import{_ as A,b as g,o as _,c as m,d as t,G as E,B as T,D as p,n as P,r as V,L as D,h as u,F as k,C as N,p as L,k as I}from"./index-c2253ecb.js";const O={props:{type:{type:String},value:{type:String},format:{type:String,default:"%"}}},M={class:"text"};function B(n,s,i,l,e,a){const r=g("font-awesome-icon");return _(),m("div",{class:P(["fixed-width-80 status-text text-center test",[i.type==="up"?"bg-success text-green":"bg-danger-light text-danger"]])},[t("p",M,[i.type==="up"?(_(),E(r,{key:0,icon:"fa-arrow-up",role:"button"})):(_(),E(r,{key:1,icon:"fa-arrow-down",role:"button"})),T(" "+p(i.value)+p(i.format),1)])],2)}const G=A(O,[["render",B],["__scopeId","data-v-79e5c8c6"]]),R={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"15%",bottom:"8%",left:"12%",right:"15%"},legend:{top:"3%"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:[{type:"value",axisLabel:{formatter:"{value} %"}},{type:"value",axisLabel:{formatter:"{value} 萬元"}}],series:[{tooltip:{valueFormatter:function(n){return n.toLocaleString()+" 萬元"}},name:"營業額",data:[130,202,624,118,935,447,360],type:"bar",yAxisIndex:1},{tooltip:{valueFormatter:function(n){return n+"%"}},name:"會員數量",data:[15,23,22,21,13,14,26],type:"line"},{tooltip:{valueFormatter:function(n){return n+"%"}},name:"本季成長",data:[17,28,29,29,19,19,29],type:"line"}]};var v=function(){return v=Object.assign||function(n){for(var s,i=1,l=arguments.length;i<l;i++)for(var e in s=arguments[i])Object.prototype.hasOwnProperty.call(s,e)&&(n[e]=s[e]);return n},v.apply(this,arguments)},j=function(){function n(s,i,l){var e=this;this.endVal=i,this.options=l,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(a){e.startTime||(e.startTime=a);var r=a-e.startTime;e.remaining=e.duration-r,e.useEasing?e.countDown?e.frameVal=e.startVal-e.easingFn(r,0,e.startVal-e.endVal,e.duration):e.frameVal=e.easingFn(r,e.startVal,e.endVal-e.startVal,e.duration):e.frameVal=e.startVal+(e.endVal-e.startVal)*(r/e.duration);var c=e.countDown?e.frameVal<e.endVal:e.frameVal>e.endVal;e.frameVal=c?e.endVal:e.frameVal,e.frameVal=Number(e.frameVal.toFixed(e.options.decimalPlaces)),e.printValue(e.frameVal),r<e.duration?e.rAF=requestAnimationFrame(e.count):e.finalEndVal!==null?e.update(e.finalEndVal):e.options.onCompleteCallback&&e.options.onCompleteCallback()},this.formatNumber=function(a){var r,c,d,h,y=a<0?"-":"";r=Math.abs(a).toFixed(e.options.decimalPlaces);var b=(r+="").split(".");if(c=b[0],d=b.length>1?e.options.decimal+b[1]:"",e.options.useGrouping){h="";for(var S=3,w=0,f=0,F=c.length;f<F;++f)e.options.useIndianSeparators&&f===4&&(S=2,w=1),f!==0&&w%S==0&&(h=e.options.separator+h),w++,h=c[F-f-1]+h;c=h}return e.options.numerals&&e.options.numerals.length&&(c=c.replace(/[0-9]/g,function(x){return e.options.numerals[+x]}),d=d.replace(/[0-9]/g,function(x){return e.options.numerals[+x]})),y+e.options.prefix+c+d+e.options.suffix},this.easeOutExpo=function(a,r,c,d){return c*(1-Math.pow(2,-10*a/d))*1024/1023+r},this.options=v(v({},this.defaults),l),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof s=="string"?document.getElementById(s):s,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,s):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return e.handleScroll(e)}),window.onscroll=function(){window.onScrollFns.forEach(function(a){return a()})},this.handleScroll(this)))}return n.prototype.handleScroll=function(s){if(s&&window&&!s.once){var i=window.innerHeight+window.scrollY,l=s.el.getBoundingClientRect(),e=l.top+window.pageYOffset,a=l.top+l.height+window.pageYOffset;a<i&&a>window.scrollY&&s.paused?(s.paused=!1,setTimeout(function(){return s.start()},s.options.scrollSpyDelay),s.options.scrollSpyOnce&&(s.once=!0)):(window.scrollY>a||e>i)&&!s.paused&&s.reset()}},n.prototype.determineDirectionAndSmartEasing=function(){var s=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>s;var i=s-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=s;var l=this.countDown?1:-1;this.endVal=s+l*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=s,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},n.prototype.start=function(s){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),s&&(this.options.onCompleteCallback=s),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},n.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},n.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},n.prototype.update=function(s){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(s),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},n.prototype.printValue=function(s){var i;if(this.el){var l=this.formattingFn(s);!((i=this.options.plugin)===null||i===void 0)&&i.render?this.options.plugin.render(this.el,l):this.el.tagName==="INPUT"?this.el.value=l:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=l:this.el.innerHTML=l}},n.prototype.ensureNumber=function(s){return typeof s=="number"&&!isNaN(s)},n.prototype.validateValue=function(s){var i=Number(s);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(s),null)},n.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},n}();const U={components:{VueEcharts:C,ValueTrend:G},setup(n){const s=V([]),i=V(),l=a=>{s.value.push(a)},e=V({tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["Evaporation","Precipitation","Temperature"]},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"Precipitation",min:0,max:250,interval:50,axisLabel:{formatter:"{value} ml"}},{type:"value",name:"Temperature",min:0,max:25,interval:5,axisLabel:{formatter:"{value} °C"}}],series:[{name:"Evaporation",type:"bar",tooltip:{valueFormatter:function(a){return a+" ml"}},data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},{name:"Precipitation",type:"bar",tooltip:{valueFormatter:function(a){return a+" ml"}},data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]},{name:"Temperature",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(a){return a+" °C"}},data:[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2]}]});return D(()=>{const a={duration:"3",enableScrollSpy:!0},r={seasonGrow:3680,orderCount:5890,memberCount:3600,revenue:78e4};s.value.forEach(c=>{const d=new j(c,r[c.id],a);d.error?console.error(d.error):d.start()}),setTimeout(()=>{i.value.setOption({...R})},10)}),{option:e,revenueChart:i,setRef:l}}},o=n=>(L("data-v-84156fd8"),n=n(),I(),n),Y={class:"container-fluid mt-2"},$={class:"row"},q={class:"col-xl-5 d-xl-flex"},H={class:"row row-cols-1 row-cols-md-2 g-3"},W={class:"col"},z={class:"card card-layout m-0 h-100 card-border-gold"},J={class:"d-column justify-content-between h-100"},K={class:"d-between align-items-center"},Q=o(()=>t("div",{class:"d-column"},[t("h5",{class:"fw-semibold text-gray-light mb-1"},"營業額"),t("span",{class:"text-gray-light fs-mini"},"更新於8小時前")],-1)),X={class:"d-between"},Z={class:"d-flex"},tt=o(()=>t("h5",{class:"fw-bold me-1"},"$",-1)),et={class:"col"},st={class:"card card-layout m-0 h-100 card-border-blue"},ot={class:"d-column justify-content-between h-100"},nt={class:"d-between align-items-center"},it=o(()=>t("div",{class:"d-column"},[t("h5",{class:"fw-semibold text-gray-light mb-1"},"會員數量"),t("span",{class:"text-gray-light fs-mini"},"更新於8小時前")],-1)),at={class:"d-between mt-3"},lt={class:"d-flex"},rt=o(()=>t("h5",{class:"fw-bold ms-1"},"筆",-1)),ct={class:"col"},dt={class:"card card-layout m-0 h-100 card-border-red"},ht={class:"d-column justify-content-between h-100"},ut={class:"d-between align-items-center"},pt=o(()=>t("div",{class:"d-column"},[t("h5",{class:"fw-semibold text-gray-light mb-1"},"訂單數量"),t("span",{class:"text-gray-light fs-mini"},"更新於8小時前")],-1)),_t={class:"d-between mt-3"},mt={class:"d-flex"},ft=o(()=>t("h5",{class:"fw-bold ms-1"},"筆",-1)),gt={class:"col"},vt={class:"card card-layout m-0 h-100 card-border-green-light"},yt={class:"d-column justify-content-between h-100"},bt={class:"d-between align-items-center"},wt=o(()=>t("div",{class:"d-column"},[t("h5",{class:"fw-semibold text-gray-light mb-1"},"本季成長"),t("span",{class:"text-gray-light fs-mini"},"更新於8小時前")],-1)),xt={class:"d-between mt-3"},Vt={class:"d-flex"},St=o(()=>t("h5",{class:"fw-bold me-1"},"$",-1)),Ft={class:"col-xl-7 mt-2 mt-xl-0"},Et={class:"card"},At=o(()=>t("div",{class:"px-3 py-2 border-bottom"},[t("h5",{class:"fw-semibold text-gray-light m-0"},"本月銷售排行")],-1)),Ct={class:"table table-striped"},Tt=o(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"},"排名"),t("th",{scope:"col"},"類別"),t("th",{scope:"col"},"商品名稱"),t("th",{scope:"col",class:"text-end"},"銷售額"),t("th",{scope:"col"})])],-1)),Pt=o(()=>t("th",{scope:"row"},"1",-1)),Dt=o(()=>t("td",null,"手機",-1)),kt=o(()=>t("td",null,"IPhone 15 Pro",-1)),Nt={class:"text-end"},Lt=o(()=>t("td",null,null,-1)),It=o(()=>t("th",{scope:"row"},"2",-1)),Ot=o(()=>t("td",null,"3C配件",-1)),Mt=o(()=>t("td",null,"Game Console Controller",-1)),Bt={class:"text-end"},Gt=o(()=>t("td",null,null,-1)),Rt=o(()=>t("th",{scope:"row"},"3",-1)),jt=o(()=>t("td",null,"筆記型電腦",-1)),Ut=o(()=>t("td",null,"MacBook Pro",-1)),Yt={class:"text-end"},$t=o(()=>t("td",null,null,-1)),qt=o(()=>t("th",{scope:"row"},"4",-1)),Ht=o(()=>t("td",null,"平板",-1)),Wt=o(()=>t("td",null,"iPad Pro",-1)),zt={class:"text-end"},Jt=o(()=>t("td",null,null,-1)),Kt=o(()=>t("th",{scope:"row"},"5",-1)),Qt=o(()=>t("td",null,"智慧型手表",-1)),Xt=o(()=>t("td",null,"Apple Watch",-1)),Zt={class:"text-end"},te=o(()=>t("td",null,null,-1)),ee={class:"row my-3"},se={class:"col-xl-8"},oe={class:"card"},ne=o(()=>t("div",{class:"px-3 py-2 border-bottom"},[t("h5",{class:"fw-semibold text-gray-light m-0"},"本周成長比")],-1)),ie={class:"col-xl-4"},ae=o(()=>t("div",{class:"py-2 border-bottom"},[t("h5",{class:"fw-semibold text-gray-light m-0"},"最新訂單")],-1)),le={class:"latest-order"},re={class:"table table-hover"},ce=o(()=>t("thead",null,[t("tr",null,[t("th",null,"訂單編號"),t("th",null,"金額"),t("th",null,"狀態")])],-1)),de={key:0,class:"status-text bg-success fixed-width-80 text-green"},he={key:1,class:"status-text bg-danger-light fixed-width-80 text-danger"},ue={key:2,class:"status-text bg-secondary-light fixed-width-80"};function pe(n,s,i,l,e,a){const r=g("font-awesome-icon"),c=g("ValueTrend"),d=g("VueEcharts");return _(),m("div",Y,[t("div",$,[t("div",q,[t("div",H,[t("div",W,[t("div",z,[t("div",J,[t("div",K,[Q,u(r,{class:"fs-3 m-0 text-gold",icon:"fa-coins",role:"button"})]),t("div",X,[t("div",Z,[tt,t("h5",{class:"fw-bold mb-0",ref:l.setRef,id:"revenue"},null,512)]),u(c,{type:"up",value:"20.50"})])])])]),t("div",et,[t("div",st,[t("div",ot,[t("div",nt,[it,u(r,{class:"fs-3 m-0 text-blue",icon:"fa-people-group",role:"button"})]),t("div",at,[t("div",lt,[t("h5",{class:"fw-bold mb-0",ref:l.setRef,id:"memberCount"},null,512),rt]),u(c,{type:"up",value:"10.54"})])])])]),t("div",ct,[t("div",dt,[t("div",ht,[t("div",ut,[pt,u(r,{class:"fs-3 m-0 text-red",icon:"fa-file-lines",role:"button"})]),t("div",_t,[t("div",mt,[t("h5",{class:"fw-bold mb-0",ref:l.setRef,id:"orderCount"},null,512),ft]),u(c,{type:"down",value:"15.63"})])])])]),t("div",gt,[t("div",vt,[t("div",yt,[t("div",bt,[wt,u(r,{class:"fs-3 m-0 text-green-light",icon:"fa-arrow-trend-up",role:"button"})]),t("div",xt,[t("div",Vt,[St,t("h5",{class:"fw-bold mb-0",ref:l.setRef,id:"seasonGrow"},null,512)]),u(c,{type:"up",value:"13.50"})])])])])])]),t("div",Ft,[t("div",Et,[At,t("table",Ct,[Tt,t("tbody",null,[t("tr",null,[Pt,Dt,kt,t("td",Nt,p(2e5 .toLocaleString()),1),Lt]),t("tr",null,[It,Ot,Mt,t("td",Bt,p(16e4 .toLocaleString()),1),Gt]),t("tr",null,[Rt,jt,Ut,t("td",Yt,p(14e4 .toLocaleString()),1),$t]),t("tr",null,[qt,Ht,Wt,t("td",zt,p(1e5 .toLocaleString()),1),Jt]),t("tr",null,[Kt,Qt,Xt,t("td",Zt,p(8e4 .toLocaleString()),1),te])])])])])]),t("div",ee,[t("div",se,[t("div",oe,[ne,u(d,{ref:"revenueChart",option:{xAxis:{},yAxis:{}},style:{width:"100%",height:"50vh"}},null,512)])]),t("div",ie,[ae,t("div",le,[t("table",re,[ce,t("tbody",null,[(_(),m(k,null,N(20,(h,y)=>t("tr",{key:y},[t("td",null,[t("a",null,"G0000000"+p(h),1)]),t("td",null,p((5e3*h).toLocaleString()),1),t("td",null,[h%2===0?(_(),m("p",de," 完成 ")):h%3===0?(_(),m("p",he," 取消 ")):(_(),m("p",ue," 配送中 "))])])),64))])])])])])])}const fe=A(U,[["render",pe],["__scopeId","data-v-84156fd8"]]);export{fe as default};