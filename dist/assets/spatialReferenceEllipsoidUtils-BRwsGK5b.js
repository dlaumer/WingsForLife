import{g as a,e8 as k,e9 as r,ea as c,eb as u,ec as d,ed as g}from"./index-PAhymuf7.js";const m=new a(g),s=new a(u),n=new a(d),b=new a(k);function x(t){const w=f.get(t);if(w)return w;let e=m;if(t)if(t===s)e=s;else if(t===n)e=n;else{const o=t.wkid,p=t.latestWkid;if(o!=null||p!=null)r(o)||r(p)?e=s:(c(o)||c(p))&&(e=n);else{const i=t.wkt2??t.wkt;if(i){const l=i.toUpperCase();l===C?e=s:l===U&&(e=n)}}}return f.set(t,e),e}const f=new Map,C=s.wkt.toUpperCase(),U=n.wkt.toUpperCase();export{x as a,b as w};
