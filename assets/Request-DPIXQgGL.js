var o=(k,y,e)=>new Promise((d,q)=>{var p=u=>{try{n(e.next(u))}catch(i){q(i)}},f=u=>{try{n(e.throw(u))}catch(i){q(i)}},n=u=>u.done?d(u.value):Promise.resolve(u.value).then(p,f);n((e=e.apply(k,y)).next())});import{_ as B}from"./ContentWrap.vue_vue_type_script_setup_true_lang-B4WxKjpq.js";import{r,c as A}from"./index-TMlqmkkJ.js";/* empty css                   */import{k as V}from"./element-plus-5SedE8ZF.js";import{l as E,a as N,ah as S,m as D,S as T,R as a,q as I,W as O,O as l,V as c,u as v}from"./vue-chunks-DV3VEwyd.js";/* empty css                *//* empty css                  */const W=()=>r.get({url:"/mock/request/1"}),$=()=>r.get({url:"/mock/request/2"}),b=()=>r.get({url:"/mock/request/3"}),j=()=>r.get({url:"/mock/request/4"}),z=()=>r.get({url:"/mock/request/5"}),F=()=>r.get({url:"/mock/request/expired"}),U=E({__name:"Request",setup(k){const{t:y}=A(),e=N(new Set),d=()=>o(this,null,function*(){if(!e.value.has("/request/1"))try{e.value.add("/request/1");const t=yield W()}catch(t){}finally{e.value.delete("/request/1")}}),q=()=>o(this,null,function*(){if(!e.value.has("/request/2"))try{e.value.add("/request/2");const t=yield $()}catch(t){}finally{e.value.delete("/request/2")}}),p=()=>o(this,null,function*(){if(!e.value.has("/request/3"))try{e.value.add("/request/3");const t=yield b()}catch(t){}finally{e.value.delete("/request/3")}}),f=()=>o(this,null,function*(){if(!e.value.has("/request/4"))try{e.value.add("/request/4");const t=yield j()}catch(t){}finally{e.value.delete("/request/4")}}),n=()=>o(this,null,function*(){if(!e.value.has("/request/5"))try{e.value.add("/request/5");const t=yield z()}catch(t){}finally{e.value.delete("/request/5")}}),u=()=>{d(),q(),p(),f(),n()},i=()=>{r.cancelAllRequest(),e.value.clear()},_=t=>{const m=[];return t.forEach(s=>{m.push(s)}),m},h=()=>{if(e.value.has("/request/1")){r.cancelRequest("/request/1"),e.value.delete("/request/1");return}d()},g=()=>{if(e.value.has("/request/2")){r.cancelRequest("/request/2"),e.value.delete("/request/2");return}q()},R=()=>{if(e.value.has("/request/3")){r.cancelRequest("/request/3"),e.value.delete("/request/3");return}p()},C=()=>{if(e.value.has("/request/4")){r.cancelRequest("/request/4"),e.value.delete("/request/4");return}f()},w=()=>{if(e.value.has("/request/5")){r.cancelRequest("/request/5"),e.value.delete("/request/5");return}n()},x=()=>{F()};return(t,m)=>{const s=S("BaseButton");return D(),T(v(B),{title:v(y)("router.request")},{default:a(()=>[I("p",null,"正在请求的接口："+O(_(e.value)),1),l(s,{type:"primary",onClick:h},{default:a(()=>[c("请求/取消request1")]),_:1}),l(s,{type:"primary",onClick:g},{default:a(()=>[c("请求/取消request2")]),_:1}),l(s,{type:"primary",onClick:R},{default:a(()=>[c("请求/取消request3")]),_:1}),l(s,{type:"primary",onClick:C},{default:a(()=>[c("请求/取消request4")]),_:1}),l(s,{type:"primary",onClick:w},{default:a(()=>[c("请求/取消request5")]),_:1}),l(s,{type:"primary",onClick:u},{default:a(()=>[c("发送五个请求")]),_:1}),l(s,{type:"primary",onClick:i},{default:a(()=>[c("关闭所有请求")]),_:1}),l(v(V)),l(s,{type:"primary",onClick:x},{default:a(()=>[c("token过期")]),_:1})]),_:1},8,["title"])}}});export{U as default};
