var g=(u,y,c)=>new Promise((I,n)=>{var a=r=>{try{p(c.next(r))}catch(d){n(d)}},s=r=>{try{p(c.throw(r))}catch(d){n(d)}},p=r=>r.done?I(r.value):Promise.resolve(r.value).then(a,s);p((c=c.apply(u,y)).next())});import{F as O}from"./Form-7hFAKp7Y.js";import{u as U,l as J,d as T,i as A,I as h,m as $,n as G,o as H,c as K}from"./index-BadVsvKQ.js";/* empty css                    *//* empty css                */import{u as Q}from"./useForm-DKyB2GRe.js";import{l as W,aB as X,J as Y,O as t,P as k,a as x,d as Z,b as ee,u as w,m as oe,S as te,y as se}from"./vue-chunks-DV3VEwyd.js";import{u as re}from"./useValidator-qAZS6H-D.js";import{z as ae,u as ne}from"./element-plus-5SedE8ZF.js";function C(u){return typeof u=="function"||Object.prototype.toString.call(u)==="[object Object]"&&!se(u)}const R=30,v="#999",b="var(--el-color-primary)",he=W({__name:"LoginForm",emits:["to-register"],setup(u,{emit:y}){const{required:c}=re(),I=y,n=U(),a=J(),s=T(),{currentRoute:p,addRoute:r,push:d}=X(),{t:l}=K(),z={username:[c()],password:[c()]},E=Y([{field:"title",colProps:{span:24},formItemProps:{slots:{default:()=>t("h2",{class:"text-2xl font-bold text-center w-[100%]"},[l("login.login")])}}},{field:"username",label:l("login.username"),component:"Input",colProps:{span:24},componentProps:{placeholder:"admin or test"}},{field:"password",label:l("login.password"),component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:"admin or test"}},{field:"tool",colProps:{span:24},formItemProps:{slots:{default:()=>{let e;return t(k,null,[t("div",{class:"flex justify-between items-center w-[100%]"},[t(ae,{modelValue:f.value,"onUpdate:modelValue":o=>f.value=o,label:l("login.remember"),size:"small"},null),t(ne,{type:"primary",underline:!1},C(e=l("login.forgetPassword"))?e:{default:()=>[e]})])])}}}},{field:"login",colProps:{span:24},formItemProps:{slots:{default:()=>{let e,o;return t(k,null,[t("div",{class:"w-[100%]"},[t(A,{loading:P.value,type:"primary",class:"w-[100%]",onClick:q},C(e=l("login.login"))?e:{default:()=>[e]})]),t("div",{class:"w-[100%] mt-15px"},[t(A,{class:"w-[100%]",onClick:N},C(o=l("login.register"))?o:{default:()=>[o]})])])}}}},{field:"other",component:"Divider",label:l("login.otherLogin"),componentProps:{contentPosition:"center"}},{field:"otherIcon",colProps:{span:24},formItemProps:{slots:{default:()=>t(k,null,[t("div",{class:"flex justify-between w-[100%]"},[t(h,{icon:"ant-design:github-filled",size:R,class:"cursor-pointer ant-icon",color:v,hoverColor:b},null),t(h,{icon:"ant-design:wechat-filled",size:R,class:"cursor-pointer ant-icon",color:v,hoverColor:b},null),t(h,{icon:"ant-design:alipay-circle-filled",size:R,color:v,hoverColor:b,class:"cursor-pointer ant-icon"},null),t(h,{icon:"ant-design:weibo-circle-filled",size:R,color:v,hoverColor:b,class:"cursor-pointer ant-icon"},null)])])}}}]),f=x(a.getRememberMe),F=()=>{const e=a.getLoginInfo;if(e){const{username:o,password:i}=e;M({username:o,password:i})}};Z(()=>{F()});const{formRegister:L,formMethods:V}=Q(),{getFormData:D,getElFormExpose:j,setValues:M}=V,P=x(!1),_=x("");ee(()=>p.value,e=>{var o;_.value=(o=e==null?void 0:e.query)==null?void 0:o.redirect},{immediate:!0});const q=()=>g(this,null,function*(){const e=yield j();yield e==null?void 0:e.validate(o=>g(this,null,function*(){if(o){P.value=!0;const i=yield D();try{const m=yield $(i);m&&(w(f)?a.setLoginInfo({username:i.username,password:i.password}):a.setLoginInfo(void 0),a.setRememberMe(w(f)),a.setUserInfo(m.data),n.getDynamicRouter?B():(yield s.generateRoutes("static").catch(()=>{}),s.getAddRouters.forEach(S=>{r(S)}),s.setIsAddRouters(!0),d({path:_.value||s.addRouters[0].path})))}finally{P.value=!1}}}))}),B=()=>g(this,null,function*(){const o={roleName:(yield D()).username},i=n.getDynamicRouter&&n.getServerDynamicRouter?yield G(o):yield H(o);if(i){const m=i.data||[];a.setRoleRouters(m),n.getDynamicRouter&&n.getServerDynamicRouter?yield s.generateRoutes("server",m).catch(()=>{}):yield s.generateRoutes("frontEnd",m).catch(()=>{}),s.getAddRouters.forEach(S=>{r(S)}),s.setIsAddRouters(!0),d({path:_.value||s.addRouters[0].path})}}),N=()=>{I("to-register")};return(e,o)=>(oe(),te(w(O),{schema:E,rules:z,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:w(L)},null,8,["schema","onRegister"]))}});export{he as _};
