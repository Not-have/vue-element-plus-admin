var f=(_,d,o)=>new Promise((l,p)=>{var c=t=>{try{s(o.next(t))}catch(m){p(m)}},i=t=>{try{s(o.throw(t))}catch(m){p(m)}},s=t=>t.done?l(t.value):Promise.resolve(t.value).then(c,i);s((o=o.apply(_,d)).next())});import{_ as v}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DLHTy1Cm.js";import{c as b}from"./index-BadVsvKQ.js";import{_ as k}from"./Table.vue_vue_type_script_lang-BBfyXs2d.js";import{b as C}from"./index-D9GmklF-.js";/* empty css                *//* empty css                   */import{u,k as T}from"./element-plus-5SedE8ZF.js";import{l as y,a as x,m as L,S as B,R as n,O as r,q as e,W as g,u as a,V as h}from"./vue-chunks-DV3VEwyd.js";/* empty css                *//* empty css                  *//* empty css                    *//* empty css               *//* empty css                      *//* empty css                 *//* empty css                        */import"./el-radio-button-BrSbK9hf.js";/* empty css                         *//* empty css                  */import"./index-BOzAgwna.js";const D={class:"flex cursor-pointer"},V={class:"pr-16px"},w=["src"],z={class:"mb-12px font-700 font-size-16px"},N={class:"line-clamp-3 font-size-12px"},S={class:"flex justify-center items-center"},E=["onClick"],I=["onClick"],et=y({__name:"CardTable",setup(_){const{t:d}=b(),o=x(!0);let l=x([]);(i=>f(this,null,function*(){const s=yield C(i||{pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{o.value=!1});s&&(l.value=s.data.list)}))();const c=i=>{};return(i,s)=>(L(),B(a(v),{title:a(d)("tableDemo.cardTable")},{default:n(()=>[r(a(k),{columns:[],data:a(l),loading:o.value,"custom-content":"","card-wrap-style":{width:"200px",marginBottom:"20px",marginRight:"20px"}},{content:n(t=>[e("div",D,[e("div",V,[e("img",{src:t.logo,class:"w-48px h-48px rounded-[50%]",alt:""},null,8,w)]),e("div",null,[e("div",z,g(t.name),1),e("div",N,g(t.desc),1)])])]),"content-footer":n(t=>[e("div",S,[e("div",{class:"flex-1 text-center",onClick:()=>c(t)},[r(a(u),{underline:!1},{default:n(()=>[h("操作一")]),_:1})],8,E),r(a(T),{direction:"vertical"}),e("div",{class:"flex-1 text-center",onClick:()=>c(t)},[r(a(u),{underline:!1},{default:n(()=>[h("操作二")]),_:1})],8,I)])]),_:1},8,["data","loading"])]),_:1},8,["title"]))}});export{et as default};
