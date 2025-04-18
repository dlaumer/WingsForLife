import{a2 as O,a3 as C,a4 as A,a5 as _,a6 as T,a7 as h,a8 as E,a9 as d,aa as r}from"./index-PAhymuf7.js";function U(a,t,e="nearest",i=!1){const n=!(i&&t.pixelType==="u8"),o=n?A.FLOAT:A.UNSIGNED_BYTE,u=t.pixels==null||t.pixels.length===0?null:n?t.getAsRGBAFloat():t.getAsRGBA(),f=a.capabilities.textureFloatLinear,s=new O;return s.width=t.width,s.height=t.height,s.internalFormat=n?C.RGBA32F:d.RGBA,s.samplingMode=!f||e!=="bilinear"&&e!=="cubic"?_.NEAREST:_.LINEAR,s.dataType=o,s.wrapMode=T.CLAMP_TO_EDGE,new h(a,s,u)}function b(a,t){const{spacing:e,offsets:i,coefficients:n,size:[o,u]}=t,f=e[0]>1,s=new O;s.width=f?4*o:o,s.height=u,s.internalFormat=C.RGBA32F,s.dataType=A.FLOAT,s.samplingMode=_.NEAREST,s.wrapMode=T.CLAMP_TO_EDGE;const m=new Float32Array(f?o*u*16:2*i.length);if(f&&n!=null)for(let c=0,l=0;c<n.length;c++)m[l++]=n[c],c%3==2&&(m[l++]=1);else for(let c=0;c<u;c++)for(let l=0;l<o;l++){const g=4*(c*o+l),p=2*(l*u+c);m[g]=i[p],m[g+1]=i[p+1],m[g+3]=i[p]===-1?0:1}return new h(a,s,m)}function F(a,t){const e=new O;return e.internalFormat=d.RGBA,e.width=t.length/4,e.height=1,e.samplingMode=_.NEAREST,e.wrapMode=T.CLAMP_TO_EDGE,new h(a,e,t)}function x(a,t,e,i=1,n=!0){return{u_flipY:n,u_applyTransform:!!a,u_opacity:i,u_transformSpacing:a?a.spacing:E,u_transformGridSize:a?a.size:E,u_targetImageSize:t,u_srcImageSize:e}}function M(a,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:a?a.length/4-1:0}}function G(a,t){return{u_scale:a,u_offset:t}}function V(a){return{u_bandCount:a.bandCount,u_minOutput:a.minOutput,u_maxOutput:a.maxOutput,u_minCutOff:a.minCutOff,u_maxCutOff:a.maxCutOff,u_factor:a.factor,u_useGamma:a.useGamma,u_gamma:a.gamma,u_gammaCorrection:a.gammaCorrection}}function k(a){return{u_hillshadeType:a.hillshadeType,u_sinZcosAs:a.sinZcosAs,u_sinZsinAs:a.sinZsinAs,u_cosZs:a.cosZs,u_weights:a.weights,u_factor:a.factor,u_minValue:a.minValue,u_maxValue:a.maxValue}}function N(a,t){const e=a.gl,i=t.glName,n=new Map;if(i==null)return n;const o=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);let u;for(let f=0;f<o;f++)u=e.getActiveUniform(i,f),u&&n.set(u.name,{location:e.getUniformLocation(i,u.name),info:u});return n}function v(a,t,e){Object.keys(e).forEach(i=>{const n=t.get(i)||t.get(i+"[0]");n&&w(a,i,e[i],n)})}function B(a,t,e,i){e.length===i.length&&(i.some(n=>n==null)||e.some(n=>n==null)||e.forEach((n,o)=>{t.setUniform1i(n,o),a.bindTexture(i[o],o)}))}function w(a,t,e,i){if(i===null||e==null)return!1;const{info:n}=i;switch(n.type){case r.FLOAT:n.size>1?a.setUniform1fv(t,e):a.setUniform1f(t,e);break;case r.FLOAT_VEC2:a.setUniform2fv(t,e);break;case r.FLOAT_VEC3:a.setUniform3fv(t,e);break;case r.FLOAT_VEC4:a.setUniform4fv(t,e);break;case r.FLOAT_MAT3:a.setUniformMatrix3fv(t,e);break;case r.FLOAT_MAT4:a.setUniformMatrix4fv(t,e);break;case r.INT:n.size>1?a.setUniform1iv(t,e):a.setUniform1i(t,e);break;case r.BOOL:a.setUniform1i(t,e?1:0);break;case r.INT_VEC2:case r.BOOL_VEC2:a.setUniform2iv(t,e);break;case r.INT_VEC3:case r.BOOL_VEC3:a.setUniform3iv(t,e);break;case r.INT_VEC4:case r.BOOL_VEC4:a.setUniform4iv(t,e);break;default:return!1}return!0}export{k as A,v as O,N as T,M as _,F as c,U as f,G as g,B as h,x as l,b as m,V as p};
