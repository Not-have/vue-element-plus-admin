var x=(t,o,i)=>new Promise((E,h)=>{var S=p=>{try{w(i.next(p))}catch(k){h(k)}},v=p=>{try{w(i.throw(p))}catch(k){h(k)}},w=p=>p.done?E(p.value):Promise.resolve(p.value).then(S,v);w((i=i.apply(t,o)).next())});import{_ as R}from"./avatar-BmumZgeG.js";import{e as W,f as z,r as C,h as G,c as F}from"./index-BadVsvKQ.js";import{e as J,u as e,l as H,a as K,J as $,ah as Q,m as u,p as g,q as l,O as a,R as s,W as n,V as j,P as b,a7 as O,S as P}from"./vue-chunks-DV3VEwyd.js";/* empty css               *//* empty css                         *//* empty css                *//* empty css                   *//* empty css                */import{_ as N}from"./CountTo.vue_vue_type_script_setup_true_lang-d_F-eG6s.js";import{r as U,_ as X}from"./Echart.vue_vue_type_script_setup_true_lang-DWqGf9gr.js";import{_ as Y}from"./Highlight.vue_vue_type_script_lang-B2wscg-x.js";import{r as y,s as A,p as _,k as I,q as f,u as D,t as B}from"./element-plus-5SedE8ZF.js";import"./echarts-a8DZR-D9.js";const Z={"zh-CN":{justNow:"刚刚",invalid:"无效时间",past:t=>t.match(/\d/)?`${t}前`:t,future:t=>t.match(/\d/)?`${t}后`:t,month:(t,o)=>t===1?o?"上个月":"下个月":`${t} 个月`,year:(t,o)=>t===1?o?"去年":"明年":`${t} 年`,day:(t,o)=>t===1?o?"昨天":"明天":`${t} 天`,week:(t,o)=>t===1?o?"上周":"下周":`${t} 周`,hour:t=>`${t} 小时`,minute:t=>`${t} 分钟`,second:t=>`${t} 秒`},en:{justNow:"刚刚",invalid:"Invalid Date",past:t=>t.match(/\d/)?`${t} ago`:t,future:t=>t.match(/\d/)?`in ${t}`:t,month:(t,o)=>t===1?o?"last month":"next month":`${t} month${t>1?"s":""}`,year:(t,o)=>t===1?o?"last year":"next year":`${t} year${t>1?"s":""}`,day:(t,o)=>t===1?o?"yesterday":"tomorrow":`${t} day${t>1?"s":""}`,week:(t,o)=>t===1?o?"last week":"next week":`${t} week${t>1?"s":""}`,hour:t=>`${t} hour${t>1?"s":""}`,minute:t=>`${t} minute${t>1?"s":""}`,second:t=>`${t} second${t>1?"s":""}`}},ee=t=>{const o=W(),i=J(()=>o.getCurrentLocale);return z(t,{messages:Z[e(i).lang]})},te=()=>C.get({url:"/mock/workplace/total"}),ae=()=>C.get({url:"/mock/workplace/project"}),se=()=>C.get({url:"/mock/workplace/dynamic"}),le=()=>C.get({url:"/mock/workplace/team"}),oe=()=>C.get({url:"/mock/workplace/radar"}),ne={class:"flex items-center"},re=l("img",{src:R,alt:"",class:"w-70px h-70px rounded-[50%] mr-20px"},null,-1),ce={class:"text-20px"},de={class:"mt-10px text-14px text-gray-500"},ie={class:"flex h-70px items-center justify-end lt-sm:mt-20px"},pe={class:"px-8px text-right"},ue={class:"text-14px text-gray-400 mb-20px"},me={class:"px-8px text-right"},xe={class:"text-14px text-gray-400 mb-20px"},_e={class:"px-8px text-right"},fe={class:"text-14px text-gray-400 mb-20px"},he={class:"flex justify-between"},ge={class:"flex items-center"},ye={class:"text-16px"},ve={class:"mt-15px text-14px text-gray-400"},we={class:"mt-20px text-12px text-gray-400 flex justify-between"},ke={class:"flex justify-between"},$e={class:"flex items-center"},je=l("img",{src:R,alt:"",class:"w-35px h-35px rounded-[50%] mr-20px"},null,-1),be={class:"text-14px"},Ae={class:"mt-15px text-12px text-gray-400"},Ce={class:"flex items-center"},ze=H({__name:"Workplace",setup(t){const o=K(!0);let i=$({project:0,access:0,todo:0});const E=()=>x(this,null,function*(){const c=yield te().catch(()=>{});c&&(i=Object.assign(i,c.data))});let h=$([]);const S=()=>x(this,null,function*(){const c=yield ae().catch(()=>{});c&&(h=Object.assign(h,c.data))});let v=$([]);const w=()=>x(this,null,function*(){const c=yield se().catch(()=>{});c&&(v=Object.assign(v,c.data))});let p=$([]);const k=()=>x(this,null,function*(){const c=yield le().catch(()=>{});c&&(p=Object.assign(p,c.data))});let T=$(U);const V=()=>x(this,null,function*(){const c=yield oe().catch(()=>{});c&&(B(T,"radar.indicator",c.data.map(m=>({name:r(m.name),max:m.max}))),B(T,"series",[{name:`xxx${r("workplace.index")}`,type:"radar",data:[{value:c.data.map(m=>m.personal),name:r("workplace.personal")},{value:c.data.map(m=>m.team),name:r("workplace.team")}]}]))});x(this,null,function*(){yield Promise.all([E(),S(),w(),k(),V()]),o.value=!1});const{t:r}=F();return(c,m)=>{const L=Q("Icon");return u(),g(b,null,[l("div",null,[a(e(f),{shadow:"never"},{default:s(()=>[a(e(y),{loading:o.value,animated:""},{default:s(()=>[a(e(A),{gutter:20,justify:"space-between"},{default:s(()=>[a(e(_),{xl:12,lg:12,md:12,sm:24,xs:24},{default:s(()=>[l("div",ne,[re,l("div",null,[l("div",ce,n(e(r)("workplace.goodMorning"))+"，Archer，"+n(e(r)("workplace.happyDay")),1),l("div",de,n(e(r)("workplace.toady"))+"，20℃ - 32℃！ ",1)])])]),_:1}),a(e(_),{xl:12,lg:12,md:12,sm:24,xs:24},{default:s(()=>[l("div",ie,[l("div",pe,[l("div",ue,n(e(r)("workplace.project")),1),a(e(N),{class:"text-20px","start-val":0,"end-val":e(i).project,duration:2600},null,8,["end-val"])]),a(e(I),{direction:"vertical"}),l("div",me,[l("div",xe,n(e(r)("workplace.toDo")),1),a(e(N),{class:"text-20px","start-val":0,"end-val":e(i).todo,duration:2600},null,8,["end-val"])]),a(e(I),{direction:"vertical","border-style":"dashed"}),l("div",_e,[l("div",fe,n(e(r)("workplace.access")),1),a(e(N),{class:"text-20px","start-val":0,"end-val":e(i).access,duration:2600},null,8,["end-val"])])])]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1})]),a(e(A),{class:"mt-20px",gutter:20,justify:"space-between"},{default:s(()=>[a(e(_),{xl:16,lg:16,md:24,sm:24,xs:24,class:"mb-20px"},{default:s(()=>[a(e(f),{shadow:"never"},{header:s(()=>[l("div",he,[l("span",null,n(e(r)("workplace.project")),1),a(e(D),{type:"primary",underline:!1},{default:s(()=>[j(n(e(r)("workplace.more")),1)]),_:1})])]),default:s(()=>[a(e(y),{loading:o.value,animated:""},{default:s(()=>[a(e(A),null,{default:s(()=>[(u(!0),g(b,null,O(e(h),(d,M)=>(u(),P(e(_),{key:`card-${M}`,xl:8,lg:8,md:12,sm:24,xs:24},{default:s(()=>[a(e(f),{shadow:"hover"},{default:s(()=>[l("div",ge,[a(L,{icon:d.icon,size:25,class:"mr-10px"},null,8,["icon"]),l("span",ye,n(d.name),1)]),l("div",ve,n(e(r)(d.message)),1),l("div",we,[l("span",null,n(d.personal),1),l("span",null,n(e(G)(d.time,"yyyy-MM-dd")),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["loading"])]),_:1}),a(e(f),{shadow:"never",class:"mt-20px"},{header:s(()=>[l("div",ke,[l("span",null,n(e(r)("workplace.dynamic")),1),a(e(D),{type:"primary",underline:!1},{default:s(()=>[j(n(e(r)("workplace.more")),1)]),_:1})])]),default:s(()=>[a(e(y),{loading:o.value,animated:""},{default:s(()=>[(u(!0),g(b,null,O(e(v),(d,M)=>(u(),g("div",{key:`dynamics-${M}`},[l("div",$e,[je,l("div",null,[l("div",be,[a(e(Y),{keys:d.keys.map(q=>e(r)(q))},{default:s(()=>[j(n(e(r)("workplace.pushCode")),1)]),_:2},1032,["keys"])]),l("div",Ae,n(e(ee)(d.time)),1)])]),a(e(I))]))),128))]),_:1},8,["loading"])]),_:1})]),_:1}),a(e(_),{xl:8,lg:8,md:24,sm:24,xs:24,class:"mb-20px"},{default:s(()=>[a(e(f),{shadow:"never"},{header:s(()=>[l("span",null,n(e(r)("workplace.shortcutOperation")),1)]),default:s(()=>[a(e(y),{loading:o.value,animated:""},{default:s(()=>[a(e(A),null,{default:s(()=>[(u(),g(b,null,O(9,d=>a(e(_),{key:`card-${d}`,xl:12,lg:12,md:12,sm:24,xs:24,class:"mb-10px"},{default:s(()=>[a(e(D),{type:"default",underline:!1},{default:s(()=>[j(n(e(r)("workplace.operation"))+n(d),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1},8,["loading"])]),_:1}),a(e(f),{shadow:"never",class:"mt-20px"},{header:s(()=>[l("span",null,"xx"+n(e(r)("workplace.index")),1)]),default:s(()=>[a(e(y),{loading:o.value,animated:""},{default:s(()=>[a(e(X),{options:e(T),height:400},null,8,["options"])]),_:1},8,["loading"])]),_:1}),a(e(f),{shadow:"never",class:"mt-20px"},{header:s(()=>[l("span",null,n(e(r)("workplace.team")),1)]),default:s(()=>[a(e(y),{loading:o.value,animated:""},{default:s(()=>[a(e(A),null,{default:s(()=>[(u(!0),g(b,null,O(e(p),d=>(u(),P(e(_),{key:`team-${d.name}`,span:12,class:"mb-20px"},{default:s(()=>[l("div",Ce,[a(L,{icon:d.icon,class:"mr-10px"},null,8,["icon"]),a(e(D),{type:"default",underline:!1},{default:s(()=>[j(n(d.name),1)]),_:2},1024)])]),_:2},1024))),128))]),_:1})]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})],64)}}});export{ze as default};
