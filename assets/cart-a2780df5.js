import{O as R,P as X,h as c,Q as b,R as T,N as lt,S as ct,U as Tt,n as m,G as ut,V as dt,F as It,r as M,L as z,W as j,X as _t,Y as ht}from"./index-7c3c473e.js";const H={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},w={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},f={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},At={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},pt={dangerouslyHTMLString:!1,multiple:!0,position:H.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},Nt={rtl:!1,newestOnTop:!1,toastClassName:""},mt={...pt,...Nt};({...pt,type:f.DEFAULT});var s=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(s||{}),$=(t=>(t.ENTRANCE_ANIMATION_END="d",t))($||{});const Ot={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},Lt={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},bt={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},Pt={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},st="Toastify--animate Toastify__none-enter";function ft(t,e=!1){var n;let o=Ot;if(!t||typeof t=="string")switch(t){case"flip":o=Pt;break;case"zoom":o=bt;break;case"slide":o=Lt;break}else o=t;if(e)o.enter=st;else if(o.enter===st){const a=(n=o.exit.split("__")[1])==null?void 0:n.split("-")[0];o.enter="Toastify--animate Toastify__".concat(a,"-enter")}return o}function qt(t){return t.containerId||String(t.position)}const Y="will-unmount";function Mt(t=H.TOP_RIGHT){return!!document.querySelector(".".concat(s.CSS_NAMESPACE,"__toast-container--").concat(t))}function Bt(t=H.TOP_RIGHT){return"".concat(s.CSS_NAMESPACE,"__toast-container--").concat(t)}function wt(t,e,n=!1){const o=["".concat(s.CSS_NAMESPACE,"__toast-container"),"".concat(s.CSS_NAMESPACE,"__toast-container--").concat(t),n?"".concat(s.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return B(e)?e({position:t,rtl:n,defaultClassName:o}):"".concat(o," ").concat(e||"")}function Ft(t){var e;const{position:n,containerClassName:o,rtl:a=!1,style:i={}}=t,d=s.CSS_NAMESPACE,g=Bt(n),l=document.querySelector(".".concat(d)),S=document.querySelector(".".concat(g)),y=!!S&&!((e=S.className)!=null&&e.includes(Y)),_=l||document.createElement("div"),p=document.createElement("div");p.className=wt(n,o,a),p.dataset.testid="".concat(s.CSS_NAMESPACE,"__toast-container--").concat(n),p.id=qt(t);for(const C in i)if(Object.prototype.hasOwnProperty.call(i,C)){const h=i[C];p.style[C]=h}return l||(_.className=s.CSS_NAMESPACE,document.body.appendChild(_)),y||_.appendChild(p),p}function tt(t){var e,n,o;const a=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(a);i&&i.removeEventListener("animationend",tt,!1);try{x[a].unmount(),(o=document.getElementById(a))==null||o.remove(),delete x[a],delete u[a]}catch{}}const x=R({});function Rt(t,e){const n=document.getElementById(String(e));n&&(x[n.id]=t)}function et(t,e=!0){const n=String(t);if(!x[n])return;const o=document.getElementById(n);o&&o.classList.add(Y),e?(Dt(t),o&&o.addEventListener("animationend",tt,!1)):tt(n),I.items=I.items.filter(a=>a.containerId!==t)}function Ut(t){for(const e in x)et(e,t);I.items=[]}function vt(t,e){const n=document.getElementById(t.toastId);if(n){let o=t;o={...o,...ft(o.transition)};const a=o.appendPosition?"".concat(o.exit,"--").concat(o.position):o.exit;n.className+=" ".concat(a),e&&e(n)}}function Dt(t){for(const e in u)if(e===t)for(const n of u[e]||[])vt(n)}function kt(t){const e=F().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function it(t){return document.getElementById(t)}function xt(t){const e=it(t.containerId);return e&&e.classList.contains(Y)}function rt(t){var e;const n=ct(t.content)?T(t.content.props):null;return n??T((e=t.data)!=null?e:{})}function Ht(t){return t?I.items.filter(e=>e.containerId===t).length>0:I.items.length>0}function zt(){if(I.items.length>0){const t=I.items.shift();G(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const u=R({}),I=R({items:[]});function F(){const t=T(u);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function jt(t){return F().find(e=>e.toastId===t)}function G(t,e={}){if(xt(e)){const n=it(e.containerId);n&&n.addEventListener("animationend",nt.bind(null,t,e),!1)}else nt(t,e)}function nt(t,e={}){const n=it(e.containerId);n&&n.removeEventListener("animationend",nt.bind(null,t,e),!1);const o=u[e.containerId]||[],a=o.length>0;if(!a&&!Mt(e.position)){const i=Ft(e),d=Tt(le,e);d.mount(i),Rt(d,i.id)}a&&!e.updateId&&(e.position=o[0].position),lt(()=>{e.updateId?v.update(e):v.add(t,e)})}const v={add(t,e){const{containerId:n=""}=e;n&&(u[n]=u[n]||[],u[n].find(o=>o.toastId===e.toastId)||setTimeout(()=>{var o,a;e.newestOnTop?(o=u[n])==null||o.unshift(e):(a=u[n])==null||a.push(e),e.onOpen&&e.onOpen(rt(e))},e.delay||0))},remove(t){if(t){const e=kt(t);if(e){const n=u[e];let o=n.find(a=>a.toastId===t);u[e]=n.filter(a=>a.toastId!==t),!u[e].length&&!Ht(e)&&et(e,!1),zt(),lt(()=>{o!=null&&o.onClose&&(o.onClose(rt(o)),o=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){u[e]=u[e]||[];const n=u[e].find(i=>i.toastId===t.toastId),o=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,a={...t,disabledEnterTransition:!o,updateId:void 0};v.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{r(a.content,a)},t.delay||0)}},clear(t,e=!0){t?et(t,e):Ut(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,o=document.getElementById(n);o&&(o.removeEventListener("animationend",v.dismissCallback,!1),setTimeout(()=>{v.remove(n)}))},dismiss(t){if(t){const e=F();for(const n of e)if(n.toastId===t){vt(n,o=>{o.addEventListener("animationend",v.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=F();for(const n of e)if(n.toastId===t){const o=document.getElementById(t);o&&(o.remove(),o.removeEventListener("animationend",v.dismissCallback,!1),v.remove(t));break}}}},yt=R({}),K=R({});function Et(){return Math.random().toString(36).substring(2,9)}function Gt(t){return typeof t=="number"&&!isNaN(t)}function ot(t){return typeof t=="string"}function B(t){return typeof t=="function"}function Q(...t){return b(...t)}function V(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function Vt(t={}){yt["".concat(s.CSS_NAMESPACE,"-default-options")]=t}function Wt(){return yt["".concat(s.CSS_NAMESPACE,"-default-options")]||mt}function Kt(){return document.documentElement.classList.contains("dark")?"dark":"light"}var W=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(W||{});const gt={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:H.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:w.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:f.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},Xt={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:f.DEFAULT},theme:{type:String,required:!1,default:w.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},Yt=X({name:"ProgressBar",props:Xt,setup(t,{attrs:e}){const n=M(),o=m(()=>t.hide?"true":"false"),a=m(()=>({...e.style||{},animationDuration:"".concat(t.autoClose===!0?5e3:t.autoClose,"ms"),animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?"scaleX(".concat(t.progress,")"):"none"})),i=m(()=>["".concat(s.CSS_NAMESPACE,"__progress-bar"),t.controlledProgress?"".concat(s.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(s.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(s.CSS_NAMESPACE,"__progress-bar-theme--").concat(t.theme),"".concat(s.CSS_NAMESPACE,"__progress-bar--").concat(t.type),t.rtl?"".concat(s.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" ")),d=m(()=>"".concat(i.value," ").concat((e==null?void 0:e.class)||"")),g=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},l=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),g())},S=m(()=>t.controlledProgress?null:l),y=m(()=>t.controlledProgress?l:null);return j(()=>{n.value&&(g(),n.value.onanimationend=S.value,n.value.ontransitionend=y.value)}),()=>c("div",{ref:n,role:"progressbar","aria-hidden":o.value,"aria-label":"notification timer",class:d.value,style:a.value},null)}}),Qt=X({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:w.AUTO},type:{type:String,required:!1,default:w.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>c("button",{class:"".concat(s.CSS_NAMESPACE,"__close-button ").concat(s.CSS_NAMESPACE,"__close-button--").concat(t.theme),type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[c("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[c("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Z=({theme:t,type:e,path:n,...o})=>c("svg",b({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-".concat(e,")")},o),[c("path",{d:n},null)]);function Zt(t){return c(Z,b(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function Jt(t){return c(Z,b(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function $t(t){return c(Z,b(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function te(t){return c(Z,b(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function ee(){return c("div",{class:"".concat(s.CSS_NAMESPACE,"__spinner")},null)}const at={info:Jt,warning:Zt,success:$t,error:te,spinner:ee},ne=t=>t in at;function oe({theme:t,type:e,isLoading:n,icon:o}){let a;const i={theme:t,type:e};return n?a=at.spinner():o===!1?a=void 0:V(o)?a=T(o):B(o)?a=o(i):ct(o)?a=_t(o,i):ot(o)||Gt(o)?a=o:ne(e)&&(a=at[e](i)),a}const ae=()=>{};function ie(t,e,n=s.COLLAPSE_DURATION){const{scrollHeight:o,style:a}=t,i=n;requestAnimationFrame(()=>{a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(i,"ms"),requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(e,i)})})}function se(t){const e=M(!1),n=M(!1),o=M(!1),a=M(W.Enter),i=R({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||s.COLLAPSE_DURATION}),d=i.done||ae,g=m(()=>i.appendPosition?"".concat(i.enter,"--").concat(i.position):i.enter),l=m(()=>i.appendPosition?"".concat(i.exit,"--").concat(i.position):i.exit),S=m(()=>t.pauseOnHover?{onMouseenter:N,onMouseleave:A}:{});function y(){const E=g.value.split(" ");p().addEventListener($.ENTRANCE_ANIMATION_END,A,{once:!0});const O=q=>{const D=p();q.target===D&&(D.dispatchEvent(new Event($.ENTRANCE_ANIMATION_END)),D.removeEventListener("animationend",O),D.removeEventListener("animationcancel",O),a.value===W.Enter&&q.type!=="animationcancel"&&D.classList.remove(...E))},L=()=>{const q=p();q.classList.add(...E),q.addEventListener("animationend",O),q.addEventListener("animationcancel",O)};t.pauseOnFocusLoss&&C(),L()}function _(){if(!p())return;const E=()=>{const L=p();L.removeEventListener("animationend",E),i.collapse?ie(L,d,i.collapseDuration):d()},O=()=>{const L=p();a.value=W.Exit,L&&(L.className+=" ".concat(l.value),L.addEventListener("animationend",E))};n.value||(o.value?E():setTimeout(O))}function p(){return t.toastRef.value}function C(){document.hasFocus()||N(),window.addEventListener("focus",A),window.addEventListener("blur",N)}function h(){window.removeEventListener("focus",A),window.removeEventListener("blur",N)}function A(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function N(){e.value=!1}function U(E){E&&(E.stopPropagation(),E.preventDefault()),n.value=!1}return j(_),j(()=>{const E=F();n.value=E.findIndex(O=>O.toastId===i.toastId)>-1}),j(()=>{t.isLoading!==void 0&&(t.loading.value?N():A())}),ut(y),dt(()=>{t.pauseOnFocusLoss&&h()}),{isIn:n,isRunning:e,hideToast:U,eventHandlers:S}}const re=X({name:"ToastItem",inheritAttrs:!1,props:gt,setup(t){const e=M(),n=m(()=>!!t.isLoading),o=m(()=>t.progress!==void 0&&t.progress!==null),a=m(()=>oe(t)),i=m(()=>["".concat(s.CSS_NAMESPACE,"__toast"),"".concat(s.CSS_NAMESPACE,"__toast-theme--").concat(t.theme),"".concat(s.CSS_NAMESPACE,"__toast--").concat(t.type),t.rtl?"".concat(s.CSS_NAMESPACE,"__toast--rtl"):void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:d,isIn:g,hideToast:l,eventHandlers:S}=se({toastRef:e,loading:n,done:()=>{v.remove(t.toastId)},...ft(t.transition,t.disabledEnterTransition),...t});return()=>c("div",b({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":"toast-item-".concat(t.toastId),onClick:y=>{t.closeOnClick&&l(),t.onClick&&t.onClick(y)}},S.value),[c("div",{role:t.role,"data-testid":"toast-body",class:"".concat(s.CSS_NAMESPACE,"__toast-body ").concat(t.bodyClassName||"")},[a.value!=null&&c("div",{"data-testid":"toast-icon-".concat(t.type),class:["".concat(s.CSS_NAMESPACE,"__toast-icon"),t.isLoading?"":"".concat(s.CSS_NAMESPACE,"--animate-icon ").concat(s.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[V(a.value)?z(T(a.value),{theme:t.theme,type:t.type}):B(a.value)?a.value({theme:t.theme,type:t.type}):a.value]),c("div",{"data-testid":"toast-content"},[V(t.content)?z(T(t.content),{toastProps:T(t),closeToast:l,data:t.data}):B(t.content)?t.content({toastProps:T(t),closeToast:l,data:t.data}):t.dangerouslyHTMLString?z("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&c(Qt,{theme:t.theme,closeToast:y=>{y.stopPropagation(),y.preventDefault(),l()}},null),V(t.closeButton)?z(T(t.closeButton),{closeToast:l,type:t.type,theme:t.theme}):B(t.closeButton)?t.closeButton({closeToast:l,type:t.type,theme:t.theme}):null,c(Yt,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:g.value,type:t.type,hide:t.hideProgressBar,isRunning:d.value,autoClose:t.autoClose,controlledProgress:o.value,progress:t.progress,closeToast:t.isLoading?void 0:l},null)])}});let k=0;function St(){typeof window>"u"||(k&&window.cancelAnimationFrame(k),k=window.requestAnimationFrame(St),K.lastUrl!==window.location.href&&(K.lastUrl=window.location.href,v.clear()))}const le=X({name:"ToastifyContainer",inheritAttrs:!1,props:gt,setup(t){const e=m(()=>t.containerId),n=m(()=>u[e.value]||[]),o=m(()=>n.value.filter(a=>a.position===t.position));return ut(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(St)}),dt(()=>{typeof window<"u"&&k&&(window.cancelAnimationFrame(k),K.lastUrl="")}),()=>c(It,null,[o.value.map(a=>{const{toastId:i=""}=a;return c(re,b({key:i},a),null)})])}});let J=!1;function Ct(){const t=[];return F().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(Y)&&t.push(e)}),t}function ce(t){const e=Ct().length,n=t??0;return n>0&&e+I.items.length>=n}function ue(t){ce(t.limit)&&!t.updateId&&I.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function P(t,e,n={}){if(J)return;n=Q(Wt(),{type:e},T(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=Et()),n={...n,content:t,containerId:n.containerId||String(n.position)};const o=Number(n==null?void 0:n.progress);return o<0&&(n.progress=0),o>1&&(n.progress=1),n.theme==="auto"&&(n.theme=Kt()),ue(n),K.lastUrl=window.location.href,n.multiple?I.items.length?n.updateId&&G(t,n):G(t,n):(J=!0,r.clearAll(void 0,!1),setTimeout(()=>{G(t,n)},0),setTimeout(()=>{J=!1},390)),n.toastId}const r=(t,e)=>P(t,f.DEFAULT,e);r.info=(t,e)=>P(t,f.DEFAULT,{...e,type:f.INFO});r.error=(t,e)=>P(t,f.DEFAULT,{...e,type:f.ERROR});r.warning=(t,e)=>P(t,f.DEFAULT,{...e,type:f.WARNING});r.warn=r.warning;r.success=(t,e)=>P(t,f.DEFAULT,{...e,type:f.SUCCESS});r.loading=(t,e)=>P(t,f.DEFAULT,Q(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));r.dark=(t,e)=>P(t,f.DEFAULT,Q(e,{theme:w.DARK}));r.remove=t=>{t?v.dismiss(t):v.clear()};r.clearAll=(t,e)=>{v.clear(t,e)};r.isActive=t=>{let e=!1;return e=Ct().findIndex(n=>n.toastId===t)>-1,e};r.update=(t,e={})=>{setTimeout(()=>{const n=jt(t);if(n){const o=T(n),{content:a}=o,i={...o,...e,toastId:e.toastId||t,updateId:Et()},d=i.render||a;delete i.render,P(d,i.type,i)}},0)};r.done=t=>{r.update(t,{isLoading:!1,progress:1})};r.promise=de;function de(t,{pending:e,error:n,success:o},a){var i,d,g;let l;const S={...a||{},autoClose:!1};e&&(l=ot(e)?r.loading(e,S):r.loading(e.render,{...S,...e}));const y={autoClose:(i=a==null?void 0:a.autoClose)!=null?i:!0,closeOnClick:(d=a==null?void 0:a.closeOnClick)!=null?d:!0,closeButton:(g=a==null?void 0:a.autoClose)!=null?g:null,isLoading:void 0,draggable:null,delay:100},_=(C,h,A)=>{if(h==null){r.remove(l);return}const N={type:C,...y,...a,data:A},U=ot(h)?{render:h}:h;return l?r.update(l,{...N,...U,isLoading:!1}):r(U.render,{...N,...U,isLoading:!1}),A},p=B(t)?t():t;return p.then(C=>{_("success",o,C)}).catch(C=>{_("error",n,C)}),p}r.POSITION=H;r.THEME=w;r.TYPE=f;r.TRANSITIONS=At;const pe={install(t,e={}){me(e)}};typeof window<"u"&&(window.Vue3Toastify=pe);function me(t={}){const e=Q(mt,t);Vt(e)}const fe=t=>{r.success(t,{transition:r.TRANSITIONS.BOUNCE,limit:5,autoClose:1e3,...window.innerWidth>768&&{position:r.POSITION.BOTTOM_RIGHT}})},ye=ht("cartStore",{state:()=>({cartItems:[]}),getters:{cartAmount:t=>t.cartItems.length>0?t.cartItems.reduce((e,n)=>(e+=n.info.price*n.count,e),0):null,cartItemCount:t=>t.cartItems.reduce((e,n)=>(e+=n.count,e),0),cartIndexMap:t=>t.cartItems.reduce((e,n,o)=>(e[n.info.id]=o,e),{})},actions:{addItem(t,e=1){this.cartIndexMap[t.id]!==void 0?this.cartItems[this.cartIndexMap[t.id]].count+=e:this.cartItems.unshift({info:t,count:e}),fe("🚚 已加入購物車")},delItem(t){this.cartItems.splice(t,1)}},persist:!0});export{ye as c};
