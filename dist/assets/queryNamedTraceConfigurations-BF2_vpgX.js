import{j as l,r as o,l as d,hM as m,t as p,u as y,x as h,v as N,P as C}from"./index-PAhymuf7.js";let a=class extends l{constructor(r){super(r),this.namedTraceConfigurations=[]}};o([d({type:[m],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],a.prototype,"namedTraceConfigurations",void 0),a=o([p("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],a);const S=a;async function O(r,s,i){const e=y(r),t=s.toJSON();s.globalIds&&s.globalIds.length>0&&(t.globalIds=JSON.stringify(s.globalIds)),s.creators&&s.creators.length>0&&(t.creators=JSON.stringify(s.creators)),s.tags&&s.tags.length>0&&(t.tags=JSON.stringify(s.tags)),s.names&&s.names.length>0&&(t.names=JSON.stringify(s.names));const n={...t,f:"json"},g=h({...e.query,...n}),c=N(g,{...i,method:"post"}),u=`${e.path}/traceConfigurations/query`,{data:f}=await C(u,c);return S.fromJSON(f)}export{O as queryNamedTraceConfigurations};
