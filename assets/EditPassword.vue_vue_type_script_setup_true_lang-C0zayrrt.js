var i=(_,t,o)=>new Promise((p,l)=>{var d=s=>{try{r(o.next(s))}catch(n){l(n)}},m=s=>{try{r(o.throw(s))}catch(n){l(n)}},r=s=>s.done?p(s.value):Promise.resolve(s.value).then(d,m);r((o=o.apply(_,t)).next())});import{F as g}from"./Form-DD8qx9q4.js";import{u as y}from"./useForm-Cz7tPeuF.js";import{u as v}from"./useValidator-j0N6diDq.js";import"./index-TMlqmkkJ.js";/* empty css                   */import{k as B,i as E,b as x}from"./element-plus-5SedE8ZF.js";import{l as V,J as h,a as F,ah as C,m as D,p as R,O as w,u as P,R as I,V as M,P as T}from"./vue-chunks-DV3VEwyd.js";const j=V({__name:"EditPassword",setup(_){const{required:t}=v(),o=h([{field:"password",label:"旧密码",component:"InputPassword",colProps:{span:24}},{field:"newPassword",label:"新密码",component:"InputPassword",colProps:{span:24},componentProps:{strength:!0}},{field:"newPassword2",label:"确认新密码",component:"InputPassword",colProps:{span:24},componentProps:{strength:!0}}]),p=h({password:[t()],newPassword:[t(),{asyncValidator:(a,c,e)=>i(this,null,function*(){const u=yield m(),{newPassword2:f}=u;c!==f?e(new Error("新密码与确认新密码不一致")):e()})}],newPassword2:[t(),{asyncValidator:(a,c,e)=>i(this,null,function*(){const u=yield m(),{newPassword:f}=u;c!==f?e(new Error("确认新密码与新密码不一致")):e()})}]}),{formRegister:l,formMethods:d}=y(),{getFormData:m,getElFormExpose:r}=d,s=F(!1),n=()=>i(this,null,function*(){const a=yield r();(yield a==null?void 0:a.validate().catch(e=>{}))&&E.confirm("是否确认修改?","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>i(this,null,function*(){try{s.value=!0,x.success("修改成功")}catch(e){}finally{s.value=!1}})).catch(()=>{})});return(a,c)=>{const e=C("BaseButton");return D(),R(T,null,[w(P(g),{rules:p,onRegister:P(l),schema:o},null,8,["rules","onRegister","schema"]),w(P(B)),w(e,{type:"primary",onClick:n},{default:I(()=>[M("确认修改")]),_:1})],64)}}});export{j as _};
