import{ee as H,cY as L,hN as q,hO as cn,dj as fn,hP as V,hQ as I,hR as J,hS as pn,hT as An,hU as mn,d1 as S,dw as Tn,hV as gn,d2 as yn,O as Rn,hW as hn,hX as K,hY as En,hZ as nn,h_ as U,eB as dn,eT as Nn,hB as On,aU as Fn,h$ as $n}from"./index-PAhymuf7.js";import{e as tn}from"./mat3f64-q3fE-ZOt.js";import{e as x,o as rn}from"./mat4f64-Dk4dwAN8.js";import{a as en,w as _n}from"./spatialReferenceEllipsoidUtils-BRwsGK5b.js";import{m as F}from"./computeTranslationToOriginAndRotation-BVJ7Zor1.js";import{c as X}from"./projectPointToVector-DqO91lag.js";import{t as wn,p as Pn}from"./meshVertexSpaceUtils-CokAnjc7.js";import{n as B,d as on,a as w,r as b}from"./vec3-Ce6alyLL.js";import{i as N,T as O}from"./BufferView-awvNx3mQ.js";import{o as Mn}from"./vec4-Bwx8dFS_.js";const at="Projection may be possible after calling projection.load().";function h(n,t,r,o){n.error(`Failed to project from (wkid:${t.wkid}) to (wkid:${r.wkid}).${o?" ":""}${o}`)}function Cn(n,t,r,o,e,l){return v(d.TO_PCPF,N.fromTypedArray(n),m.NORMAL,O.fromTypedArray(t),r,O.fromTypedArray(o),e,N.fromTypedArray(l))?l:null}function Sn(n,t,r,o,e,l){return v(d.FROM_PCPF,N.fromTypedArray(n),m.NORMAL,O.fromTypedArray(t),r,O.fromTypedArray(o),e,N.fromTypedArray(l))?l:null}function xn(n,t,r,o){return H(n,t,0,r,o,0)?r:null}function vn(n,t,r,o){return H(n,t,0,r,o,0)?r:null}function an(n,t,r){return V(p,r),B(t,n,p),I(p)&&on(t,t),t}function ln(n,t,r){return J(p,r),Mn(t,n,p),I(p)&&on(t,t,4),t}function lt(n,t,r,o){const e=t===m.NORMAL;return sn(n,t,r,(l,a)=>{const i=Math.cos(Tn(l));a[0]=e?i:1/i,a[1]=1},o)}function it(n,t,r,o){const e=t===m.NORMAL;return sn(n,t,r,(l,a)=>{const i=Math.cosh(-l/gn.radius);a[0]=1,a[1]=e?i:1/i},o)}function sn(n,t,r,o,e){const l=t===m.NORMAL?3:4,a=[0,0];for(let i=0,c=1;i<n.length;i+=l,c+=3){o(r[c],a);const s=n[i]*a[0],f=n[i+1]*a[1],u=n[i+2],g=1/Math.sqrt(s*s+f*f+u*u);e[i]=s*g,e[i+1]=f*g,e[i+2]=u*g,l===4&&(e[i+3]=n[i+3])}return e}function Gn(n,t,r,o,e,l){if(!v(d.TO_PCPF,N.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),m.TANGENT,O.fromTypedArray(t),r,O.fromTypedArray(o),e,N.fromTypedArray(l,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}function Un(n,t,r,o,e,l){if(!v(d.FROM_PCPF,N.fromTypedArray(n,16),m.TANGENT,O.fromTypedArray(t),r,O.fromTypedArray(o),e,N.fromTypedArray(l,16)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}var m,d;function Q(n,t,r,o,e){switch(F(o,r,$,o),n===d.FROM_PCPF&&S($,$),t){case m.NORMAL:return V(e,$);case m.TANGENT:return J(e,$)}}function v(n,t,r,o,e,l,a,i){if(!t)return;const c=o.count;if(Ln(e))for(let s=0;s<c;s++)l.getVec(s,C),t.getVec(s,R),q(R,R,Q(n,r,C,a,p)),i.setVec(s,R);else for(let s=0;s<c;s++){l.getVec(s,C),t.getVec(s,R);const f=cn(o.get(s,1));let u=Math.cos(f);r===m.TANGENT!=(n===d.TO_PCPF)&&(u=1/u),Q(n,r,C,a,p),n===d.TO_PCPF?(p[0]*=u,p[1]*=u,p[2]*=u,p[3]*=u,p[4]*=u,p[5]*=u):(p[0]*=u,p[3]*=u,p[6]*=u,p[1]*=u,p[4]*=u,p[7]*=u),q(R,R,p),fn(R,R),i.setVec(s,R)}return i}function Ln(n){return n.isWGS84||pn(n)||An(n)||mn(n)}(function(n){n[n.NORMAL=0]="NORMAL",n[n.TANGENT=1]="TANGENT"})(m||(m={})),function(n){n[n.TO_PCPF=0]="TO_PCPF",n[n.FROM_PCPF=1]="FROM_PCPF"}(d||(d={}));const C=L(),R=L(),$=x(),p=tn(),T=()=>Rn.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function st(n,t,{vertexSpace:r,spatialReference:o}){if(r.type==="georeferenced"){const s=n;if(!X(t,s,o))return!1;const{origin:f}=r;return dn(n,s,f),!0}const e=en(o),l=n;if(!X(t,l,e))return!1;const{origin:a}=r,i=z;if(!F(o,a,i,e))return!1;const c=S(z,i);return c!=null&&(Nn(n,l,c),!0)}function ut(n,t,r){const{vertexSpace:o,transform:e,vertexAttributes:l}=n,a=wn(o)?e:null,i=G(n.spatialReference,r,E.SOURCE_AND_TARGET);if(Pn(o,t)&&(!a||yn(a.localMatrix,rn))&&P(i)){const{position:c,normal:s,tangent:f}=l,u=r==null?void 0:r.allowBufferReuse;return{position:u?c:c.slice(),normal:u?s:s==null?void 0:s.slice(),tangent:u?f:f==null?void 0:f.slice()}}switch(n.vertexSpace.type){case"local":return t.type==="local"?kn(n,n.vertexSpace,t.origin,r):Bn(n,n.vertexSpace,t.origin,r);case"georeferenced":return t.type==="local"?bn(n,n.vertexSpace,t.origin,r):Vn(n,n.vertexSpace,t.origin,r)}}function Vn({vertexAttributes:n,transform:t,spatialReference:r},{origin:o},e,l){const a=G(r,l,E.SOURCE_AND_TARGET),i=o||!P(a)?En(A,(t==null?void 0:t.localMatrix)??rn):null;i&&Y(i,r,l,E.SOURCE_AND_TARGET);const{position:c,normal:s,tangent:f}=i?k(n,i):n,u=l==null?void 0:l.allowBufferReuse,g=u?c:new Float64Array(c.length);let y=c;if(o&&(y=w(g,y,o)),e){const M=nn(un,e);y=w(g,y,M)}return{position:y!==n.position||u?y:y.slice(),normal:s!==n.normal||u?s:s==null?void 0:s.slice(),tangent:f!==n.tangent||u?f:f==null?void 0:f.slice()}}function D(n,t){return t!=null&&t.useEllipsoid&&$n(n)?_n:en(n)}function Bn({spatialReference:n,vertexAttributes:t,transform:r},{origin:o},e,l){const a=D(n,l);if(!F(n,o,A,a))return h(T(),n,a),null;r&&U(A,A,r.localMatrix),Y(A,n,l,E.SOURCE);const i=new Float64Array(t.position.length),c=Yn(t.position,A,n,i,a);if(!c)return null;const s=jn(c,n,i,a,t.normal,A);if(t.normal&&!s)return null;const f=Wn(c,n,i,a,t.tangent,A);if(t.tangent&&!f)return null;if(e){const u=nn(un,e);w(c,c,u)}return{position:c,normal:s,tangent:f}}function bn({vertexAttributes:n,spatialReference:t,transform:r},{origin:o},e,l){const a=D(t,l);if(!F(t,e,A,a))return h(T(),t,a),null;const i=1/G(t,l,E.TARGET);K(A,A,[i,i,i]);const c=S(_,A),{position:s,normal:f,tangent:u}=Dn(n,o,r),g=new Float64Array(s.length),y=qn(s,t,c,g,a);if(!y)return null;const M=V(Zn,c),j=Xn(f,s,t,g,a,M,f!==n.normal?f:void 0);if(!j&&f)return null;const W=Qn(u,s,t,g,a,M,u!==n.tangent?u:void 0);return!W&&u?null:{position:y,normal:j,tangent:W}}function Dn(n,t,r){if(!t)return n;if(!r){const{position:e,normal:l,tangent:a}=n;return{position:w(new Float64Array(e.length),e,t),tangent:a,normal:l}}const o=k(n,r.localMatrix);return w(o.position,o.position,t),o}function kn({vertexAttributes:n,spatialReference:t,transform:r},{origin:o},e,l){const a=D(t,l);if(!F(t,o,A,a))return h(T(),t,a),null;if(r&&U(A,A,r.localMatrix),!F(t,e,_,a))return h(T(),a,t),null;S(_,_);const i=U(A,_,A);return Y(i,t,l,E.SOURCE_AND_TARGET),k(n,i)}function k(n,t){const r=new Float64Array(n.position.length);b(r,n.position,t);const o=n.normal?new Float32Array(n.normal.length):null,e=n.tangent?new Float32Array(n.tangent.length):null;return o&&n.normal&&an(n.normal,o,t),e&&n.tangent&&ln(n.tangent,e,t),{position:r,normal:o,tangent:e}}function Yn(n,t,r,o,e){b(o,n,t);const l=new Float64Array(n.length);return vn(o,e,l,r)?l:(h(T(),e,r),null)}function jn(n,t,r,o,e,l){if(e==null)return null;const a=new Float32Array(e.length);return an(e,a,l),Sn(a,n,t,r,o,a)?a:(h(T(),o,t),null)}function Wn(n,t,r,o,e,l){if(e==null)return null;const a=new Float32Array(e.length);return ln(e,a,l),Un(a,n,t,r,o,a)?a:(h(T(),o,t),null)}function Y(n,t,r,o){const e=G(t,r,o);P(e)||K(n,n,[e,e,e])}function G(n,t,r){const o=!!(r&E.SOURCE),e=!!(r&E.TARGET),l=t==null?void 0:t.sourceUnit,a=t==null?void 0:t.targetUnit;if(!l&&!a)return 1;let i=Z(l,n);o||!l||P(i)||(T().warn("source unit conversion not supported"),i=1);let c=1/Z(a,n);return e||!a||P(c)||(T().warn("target unit conversion not supported"),c=1),i*c}function P(n){return hn(n,1)}function qn(n,t,r,o,e){const l=xn(n,t,o,e);if(!l)return h(T(),t,e),null;const a=new Float64Array(l.length);return b(a,l,r),a}function Xn(n,t,r,o,e,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Cn(n,t,r,o,e,i)?(B(i,i,l),i):(h(T(),r,e),null)}function Qn(n,t,r,o,e,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Gn(n,t,r,o,e,i)?(B(i,i,l,4),i):(h(T(),r,e),null)}function Z(n,t){if(n==null)return 1;const r=On(t);return 1/Fn(r,"meters",n)}const A=x(),_=x(),Zn=tn(),un=L(),z=x();var E;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET",n[n.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"})(E||(E={}));export{ut as B,ln as C,Cn as E,h as F,Un as G,it as L,at as O,Sn as R,m as V,an as _,lt as b,xn as g,vn as h,st as k,Z as n,Gn as w};
