import{a as f,_ as v,b as d,t as l,e as _,f as g,h,i as r,j as y}from"./entry.ddafbbe5.js";import{q as w,h as p,e as C,j as $,u as j}from"./query.4b4b6a8f.js";import"./app.config.6be71e57.js";import{w as m,s as N,u as P,a as T}from"./utils.d510b650.js";/* empty css                      */const b=async n=>{const{content:t}=f().public;typeof(n==null?void 0:n.params)!="function"&&(n=w(n));const a=n.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${C(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(N())return(await v(()=>import("./client-db.bf219dcb.js"),["./client-db.bf219dcb.js","./entry.ddafbbe5.js","./entry.ff0adcb3.css","./utils.d510b650.js","./app.config.6be71e57.js","./query.4b4b6a8f.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:P("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const Q=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=l(n),a=_(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&g("dd-navigation").value){const{navigation:e}=T();return{navigation:e}}const{data:s}=await j(`content-navigation-${p(a.value)}`,()=>b(a.value));return{navigation:s}},render(n){const t=h(),{navigation:a}=n,s=o=>r(y,{to:o._path},()=>o.title),e=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),e(i.children,u+1)]):r("li",null,s(i)))),c=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}});export{Q as default};
