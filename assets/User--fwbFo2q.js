var ie=Object.defineProperty,se=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var X=(i,a,r)=>a in i?ie(i,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[a]=r,E=(i,a)=>{for(var r in a||(a={}))de.call(a,r)&&X(i,r,a[r]);if(W)for(var r of W(a))me.call(a,r)&&X(i,r,a[r]);return i},G=(i,a)=>se(i,ne(a));var u=(i,a,r)=>new Promise((D,b)=>{var V=d=>{try{g(r.next(d))}catch(m){b(m)}},A=d=>{try{g(r.throw(d))}catch(m){b(m)}},g=d=>d.done?D(d.value):Promise.resolve(d.value).then(V,A);g((r=r.apply(i,a)).next())});import{_ as H}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DLHTy1Cm.js";import{i as p,c as ce}from"./index-BadVsvKQ.js";import{_ as ue}from"./Table.vue_vue_type_script_lang-BBfyXs2d.js";/* empty css                *//* empty css                    *//* empty css                   */import{g as Q,b as pe,c as fe,e as ve}from"./index-B7ZJolQ3.js";import{u as he}from"./useTable-CnaL8u6O.js";import{_ as ge}from"./Search.vue_vue_type_script_setup_true_lang-Bpltsq2I.js";import{_ as _e}from"./Write.vue_vue_type_script_setup_true_lang-3GbSVw1z.js";import{_ as ye}from"./Detail.vue_vue_type_script_setup_true_lang-Bl206FkU.js";import{_ as De}from"./Dialog.vue_vue_type_style_index_0_lang-Aq_tONIN.js";import{g as be}from"./index-BIf7L-Bs.js";import{u as xe}from"./useCrudSchemas-D7ntUVpJ.js";import{B as we,k as ke,ac as Se}from"./element-plus-5SedE8ZF.js";import{l as Ce,J as Ne,O as s,P as Ve,a as n,b as Ae,u as e,m as S,p as Re,R as c,q as C,W as h,V as N,B as Y,S as I,X as z,y as Te,n as $e}from"./vue-chunks-DV3VEwyd.js";/* empty css                *//* empty css                  *//* empty css               *//* empty css                      *//* empty css                 *//* empty css                        */import"./el-radio-button-BrSbK9hf.js";/* empty css                         *//* empty css                  */import"./index-BOzAgwna.js";import"./Form-7hFAKp7Y.js";/* empty css               *//* empty css                        *//* empty css                    */import"./InputPassword-BtqSrXch.js";import"./style.css_vue_type_style_index_0_src_true_lang-CeYvku7t.js";import"./wang-editor-BlivYGIb.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-CNwnSzvZ.js";import"./IconPicker-DVYmpXdH.js";import"./IAgree.vue_vue_type_script_setup_true_lang-Cd8QjAwF.js";import"./Highlight.vue_vue_type_script_lang-B2wscg-x.js";import"./useForm-DKyB2GRe.js";import"./useIcon-C2U0-4J8.js";import"./useValidator-qAZS6H-D.js";import"./Descriptions-BwPluuV7.js";import"./tree-Dgaev6Pi.js";const Be={class:"flex w-100% h-100%"},Le={class:"flex justify-center items-center"},Pe={class:"flex-1"},Ue=["title"],Ee={class:"mb-10px"};function j(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!Te(i)}const Vt=Ce({__name:"User",setup(i){const{t:a}=ce(),{tableRegister:r,tableState:D,tableMethods:b}=he({fetchDataApi:()=>u(this,null,function*(){const{pageSize:o,currentPage:t}=D,l=yield pe(E({id:e(_),pageIndex:e(t),pageSize:e(o)},e(K)));return{list:l.data.list||[],total:l.data.total||0}}),fetchDelApi:()=>u(this,null,function*(){return!!(yield fe(e(L)))})}),{total:V,loading:A,dataList:g,pageSize:d,currentPage:m}=D,{getList:R,getElTableExpose:Z,delList:ee}=b,te=Ne([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:a("userDemo.index"),form:{hidden:!0},search:{hidden:!0},detail:{hidden:!0},table:{type:"index"}},{field:"username",label:a("userDemo.username")},{field:"account",label:a("userDemo.account")},{field:"department.id",label:a("userDemo.department"),detail:{hidden:!0},search:{hidden:!0},form:{component:"TreeSelect",componentProps:{nodeKey:"id",props:{label:"departmentName"}},optionApi:()=>u(this,null,function*(){return(yield Q()).data.list})},table:{hidden:!0}},{field:"role",label:a("userDemo.role"),search:{hidden:!0},form:{component:"Select",value:[],componentProps:{multiple:!0,collapseTags:!0,maxCollapseTags:1},optionApi:()=>u(this,null,function*(){var t,l;return(l=(t=(yield be()).data)==null?void 0:t.list)==null?void 0:l.map(v=>({label:v.roleName,value:v.id}))})}},{field:"email",label:a("userDemo.email"),form:{component:"Input"},search:{hidden:!0}},{field:"createTime",label:a("userDemo.createTime"),form:{component:"Input"},search:{hidden:!0}},{field:"action",label:a("userDemo.action"),form:{hidden:!0},detail:{hidden:!0},search:{hidden:!0},table:{width:240,slots:{default:o=>{let t,l,v;const U=o.row;return s(Ve,null,[s(p,{type:"primary",onClick:()=>J(U,"edit")},j(t=a("exampleDemo.edit"))?t:{default:()=>[t]}),s(p,{type:"success",onClick:()=>J(U,"detail")},j(l=a("exampleDemo.detail"))?l:{default:()=>[l]}),s(p,{type:"danger",onClick:()=>F(U)},j(v=a("exampleDemo.del"))?v:{default:()=>[v]})])}}}}]),{allSchemas:x}=xe(te),K=n({}),O=o=>{m.value=1,K.value=o,R()},w=n(),_=n(""),q=n([]);u(this,null,function*(){var t,l;const o=yield Q();q.value=o.data.list,_.value=o.data.list[0]&&((t=o.data.list[0])==null?void 0:t.children)&&o.data.list[0].children[0].id||"",yield $e(),(l=e(w))==null||l.setCurrentKey(_.value)});const T=n("");Ae(()=>T.value,o=>{e(w).filter(o)});const ae=o=>{_.value=o.id,m.value=1,R()},le=(o,t)=>o?t.departmentName.includes(o):!0,f=n(!1),$=n(""),k=n(),y=n(""),oe=()=>{$.value=a("exampleDemo.add"),k.value=void 0,f.value=!0,y.value=""},B=n(!1),L=n([]),F=o=>u(this,null,function*(){const t=yield Z();L.value=o?[o.id]:(t==null?void 0:t.getSelectionRows().map(l=>l.id))||[],B.value=!0,yield ee(e(L).length).finally(()=>{B.value=!1})}),J=(o,t)=>{var l;$.value=a(t==="edit"?"exampleDemo.edit":"exampleDemo.detail"),y.value=t,k.value=G(E({},o),{department:((l=e(w))==null?void 0:l.getCurrentNode())||{}}),f.value=!0},M=n(),P=n(!1),re=()=>u(this,null,function*(){const o=e(M),t=yield o==null?void 0:o.submit();if(t){P.value=!0;try{(yield ve(t))&&(m.value=1,R())}catch(l){}finally{P.value=!1,f.value=!1}}});return(o,t)=>(S(),Re("div",Be,[s(e(H),{class:"w-250px"},{default:c(()=>[C("div",Le,[C("div",Pe,h(e(a)("userDemo.departmentList")),1),s(e(we),{modelValue:T.value,"onUpdate:modelValue":t[0]||(t[0]=l=>T.value=l),class:"flex-[2]",placeholder:e(a)("userDemo.searchDepartment"),clearable:""},null,8,["modelValue","placeholder"])]),s(e(ke)),s(e(Se),{ref_key:"treeEl",ref:w,data:q.value,"default-expand-all":"","expand-on-click-node":!1,"node-key":"id","current-node-key":_.value,props:{label:"departmentName"},"filter-node-method":le,onCurrentChange:ae},{default:c(({data:l})=>[C("div",{title:l.departmentName,class:"whitespace-nowrap overflow-ellipsis overflow-hidden"},h(l.departmentName),9,Ue)]),_:1},8,["data","current-node-key"])]),_:1}),s(e(H),{class:"flex-[3] ml-20px"},{default:c(()=>[s(e(ge),{schema:e(x).searchSchema,onReset:O,onSearch:O},null,8,["schema"]),C("div",Ee,[s(e(p),{type:"primary",onClick:oe},{default:c(()=>[N(h(e(a)("exampleDemo.add")),1)]),_:1}),s(e(p),{loading:B.value,type:"danger",onClick:t[1]||(t[1]=l=>F())},{default:c(()=>[N(h(e(a)("exampleDemo.del")),1)]),_:1},8,["loading"])]),s(e(ue),{"current-page":e(m),"onUpdate:currentPage":t[2]||(t[2]=l=>Y(m)?m.value=l:null),"page-size":e(d),"onUpdate:pageSize":t[3]||(t[3]=l=>Y(d)?d.value=l:null),columns:e(x).tableColumns,data:e(g),loading:e(A),onRegister:e(r),pagination:{total:e(V)}},null,8,["current-page","page-size","columns","data","loading","onRegister","pagination"])]),_:1}),s(e(De),{modelValue:f.value,"onUpdate:modelValue":t[5]||(t[5]=l=>f.value=l),title:$.value},{footer:c(()=>[y.value!=="detail"?(S(),I(e(p),{key:0,type:"primary",loading:P.value,onClick:re},{default:c(()=>[N(h(e(a)("exampleDemo.save")),1)]),_:1},8,["loading"])):z("",!0),s(e(p),{onClick:t[4]||(t[4]=l=>f.value=!1)},{default:c(()=>[N(h(e(a)("dialogDemo.close")),1)]),_:1})]),default:c(()=>[y.value!=="detail"?(S(),I(_e,{key:0,ref_key:"writeRef",ref:M,"form-schema":e(x).formSchema,"current-row":k.value},null,8,["form-schema","current-row"])):z("",!0),y.value==="detail"?(S(),I(ye,{key:1,"detail-schema":e(x).detailSchema,"current-row":k.value},null,8,["detail-schema","current-row"])):z("",!0)]),_:1},8,["modelValue","title"])]))}});export{Vt as default};
