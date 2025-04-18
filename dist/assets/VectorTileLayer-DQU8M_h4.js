import{s as I,O as Z,i8 as ee,ne as te,I as x,gg as re,P as w,bh as Q,M as F,$ as se,K as ie,cp as S,g0 as le,jK as j,aN as oe,as as g,fT as K,bj as T,dP as R,p as U,iS as W,iR as G,nf as z,f1 as ae,ng as J,gy as D,ei as E,nh as L,bp as ne,gf as ue,cG as pe,cH as ce,fu as he,fG as ye,fv as de,fw as fe,fH as me,fI as ge,fx as Ae,cN as $,dV as Se,ni as we,nj as xe,nk as M,en as ve,cI as _e,r as h,l as y,g as be,q as Ie,bn as N,t as Ue}from"./index-PAhymuf7.js";import{p as Re}from"./ArcGISCachedService-BtCoJPK6.js";import{T as Y}from"./TilemapCache-3a4Cmgc2.js";import{l as $e}from"./StyleRepository-BBYhgOdZ.js";import"./TileInfoTilemapCache-C_qH15LB.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./memoryEstimations-CsRDpl56.js";import"./StyleDefinition-CsMx6hLz.js";import"./enums-BRzLM11V.js";import"./GeometryUtils-CuW9bgOs.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./colorUtils-BopbNhpe.js";let _=null;function Te(e){if(_)return _;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return _=new Promise(r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+t[e]}),_}const B=1.15;class C{constructor(t,r){this._spriteSource=t,this._maxTextureSize=r,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",t.type==="url"&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(t){this._isRetina=this.devicePixelRatio>B;const{width:r,height:s,data:i,json:o}=await this._getSpriteData(this._spriteSource,t),l=Object.keys(o);if(!l||l.length===0||!i)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=o,this.width=r,this.height=s;const n=Math.max(this._maxTextureSize,4096);if(r>n||s>n){const u=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${n} pixels}`;throw Z.getLogger("esri.layers.support.SpriteSource").error(u),new I("SpriteSource",u)}let a;for(let u=0;u<i.length;u+=4)a=i[u+3]/255,i[u]=i[u]*a,i[u+1]=i[u+1]*a,i[u+2]=i[u+2]*a;this.image=i}async _getSpriteData(t,r){if(t.type==="image"){let p,d;if(this.devicePixelRatio<B){if(!t.spriteSource1x)throw new I("SpriteSource","no image data provided for low resolution sprites!");p=t.spriteSource1x.image,d=t.spriteSource1x.json}else{if(!t.spriteSource2x)throw new I("SpriteSource","no image data provided for high resolution sprites!");p=t.spriteSource2x.image,d=t.spriteSource2x.json}return"width"in p&&"height"in p&&"data"in p&&(ee(p.data)||te(p.data))?{width:p.width,height:p.height,data:new Uint8Array(p.data),json:d}:{...k(p),json:d}}const s=x(this.baseURL),i=s.query?"?"+re(s.query):"",o=this._isRetina?"@2x":"",l=`${s.path}${o}.${this._spriteImageFormat}${i}`,n=`${s.path}${o}.json${i}`,[a,u]=await Promise.all([w(n,r),w(l,{responseType:"image",...r})]);return{...k(u.data),json:a.data}}}function k(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:new Uint8Array(s.data)}}let Pe=class{constructor(t){this.url=t}destroy(){this._tileIndexPromise=null}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=w(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const s=await this.fetchTileIndex();return Q(r),this._getIndexedDataKey(s,t)}_getIndexedDataKey(t,r){const s=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let i=r;for(;i.level!==0;)i=new F(i.level-1,i.row>>1,i.col>>1,i.world),s.push(i);let o,l,n=t,a=s.pop();if(n===1)return a;for(;s.length;)if(o=s.pop(),l=(1&o.col)+((1&o.row)<<1),n){if(n[l]===0){a=null;break}if(n[l]===1){a=o;break}a=o,n=n[l]}return a}},Oe=class{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}destroy(){this._tilemap=se(this._tilemap),this._tileIndexPromise=null}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=w(this._tileIndexUrl,{query:{...t==null?void 0:t.query}}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:s,row:i,col:o}=t,l=new F(t);return this._tilemap.fetchAvailabilityUpsample(s,i,o,l,r).then(()=>(l.world=t.world,l)).catch(n=>{if(ie(n))throw n;return null})}};class je{constructor(t){this._tileUrl=t,this._promise=null,this._abortController=null,this._abortOptions=[]}getData(t){var s;(this._promise==null||j((s=this._abortController)==null?void 0:s.signal))&&(this._promise=this._makeRequest(this._tileUrl));const r=this._abortOptions;return r.push(t),oe(t,()=>{r.every(i=>j(i))&&this._abortController.abort()}),this._promise.then(i=>g(i))}async _makeRequest(t){this._abortController=new AbortController;const{data:r}=await w(t,{responseType:"array-buffer",signal:this._abortController.signal});return r}}const q=new Map;function De(e,t,r,s,i){const o=x(e),l=o.query;if(l)for(const[a,u]of Object.entries(l))switch(u){case"{x}":l[a]=s.toString();break;case"{y}":l[a]=r.toString();break;case"{z}":l[a]=t.toString()}const n=o.path;return Ee(S(n.replaceAll(/\{z\}/gi,t.toString()).replaceAll(/\{y\}/gi,r.toString()).replaceAll(/\{x\}/gi,s.toString()),{...o.query}),i)}function Ee(e,t){return le(q,e,()=>new je(e)).getData(t).finally(()=>q.delete(e))}class Le{constructor(t,r,s){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.initialExtent=null,this.name=t,this.sourceUrl=r;const i=x(this.sourceUrl),o=g(s),l=o.tiles;if(i)for(let f=0;f<l.length;f++){const m=x(l[f]);m&&(K(m.path)||(m.path=T(i.path,m.path)),l[f]=S(m.path,{...i.query,...m.query}))}this.tileServers=l;const n=s.capabilities&&s.capabilities.split(",").map(f=>f.toLowerCase().trim()),a=(s==null?void 0:s.exportTilesAllowed)===!0,u=(n==null?void 0:n.includes("tilemap"))===!0,p=a&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:a,supportsTileMap:u},exportTiles:a?{maxExportTilesCount:+p}:null},this.tileInfo=R.fromJSON(o.tileInfo);const d=s.tileMap?S(T(i.path,s.tileMap),i.query??{}):null;u?(this.type="vector-tile",this.tilemap=new Oe(new Y({layer:{parsedUrl:i,tileInfo:this.tileInfo},minLOD:o.minLOD??this.tileInfo.lods[0].level,maxLOD:o.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}),d)):d&&(this.tilemap=new Pe(d)),this.fullExtent=U.fromJSON(s.fullExtent),this.initialExtent=U.fromJSON(s.initialExtent)}destroy(){var t;(t=this.tilemap)==null||t.destroy()}async getRefKey(t,r){return this.tilemap?this.tilemap.dataKey(t,r):t}requestTile(t,r,s,i){const o=this.tileServers[r%this.tileServers.length];return De(o,t,r,s,i)}isCompatibleWith(t){const r=this.tileInfo,s=t.tileInfo;if(!r.spatialReference.equals(s.spatialReference)||!r.origin.equals(s.origin)||Math.round(r.dpi)!==Math.round(s.dpi))return!1;const i=r.lods,o=s.lods,l=Math.min(i.length,o.length);for(let n=0;n<l;n++){const a=i[n],u=o[n];if(a.level!==u.level||Math.round(a.scale)!==Math.round(u.scale))return!1}return!0}}async function Me(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,i]=typeof e=="string"?[e,null]:[null,e.jsonUrl];return await A(r,"esri",e,i,t),{layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&v(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&v(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName}}function v(...e){let t;for(const r of e)r!=null&&(G(r)?t&&(t=t.split("://")[0]+":"+r.trim()):t=K(r)?r:T(t,r));return t?z(t):void 0}async function A(e,t,r,s,i){let o,l,n;if(Q(i),typeof r=="string"){const u=W(r);n=await w(u,{...i,responseType:"json",query:{f:"json",...i==null?void 0:i.query}}),n.ssl&&(o&&(o=o.replace(/^http:/i,"https:")),l&&(l=l.replace(/^http:/i,"https:"))),o=u,l=u}else r!=null&&(n={data:r},o=r.jsonUrl||null,l=s);const a=n==null?void 0:n.data;if(X(a))return e.styleUrl=o||null,Be(e,a,l,i);if(Ne(a))return e.sourceUrl?V(e,a,l,!1,t,i):(e.sourceUrl=o||null,V(e,a,l,!0,t,i));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function H(e){return typeof e=="object"&&!!e&&"tilejson"in e&&e.tilejson!=null}function X(e){return!!e&&"sources"in e&&!!e.sources}function Ne(e){return!X(e)}async function Be(e,t,r,s){const i=r?ae(r):J();e.styleBase=i,e.style=t,t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const o=[];if(t.sources&&t.sources.esri){const l=t.sources.esri;l.url?await A(e,"esri",v(i,l.url),void 0,s):o.push(A(e,"esri",l,i,s))}for(const l of Object.keys(t.sources))l!=="esri"&&t.sources[l].type==="vector"&&(t.sources[l].url?o.push(A(e,l,v(i,t.sources[l].url),void 0,s)):t.sources[l].tiles&&o.push(A(e,l,t.sources[l],i,s)));await Promise.all(o)}async function V(e,t,r,s,i,o){const l=r?z(r)+"/":J(),n=Ce(t),a=new Le(i,S(l,(o==null?void 0:o.query)??{}),n);if(!s&&e.primarySourceName in e.sourceNameToSource){const u=e.sourceNameToSource[e.primarySourceName];if(!u.isCompatibleWith(a))return;a.fullExtent!=null&&(u.fullExtent!=null?u.fullExtent.union(a.fullExtent):u.fullExtent=a.fullExtent.clone()),u.tileInfo&&a.tileInfo&&u.tileInfo.lods.length<a.tileInfo.lods.length&&(u.tileInfo=a.tileInfo)}if(s&&(e.sourceBase=l,e.source=t,e.validatedSource=n,e.primarySourceName=i),e.sourceNameToSource[i]=a,!H(e)&&"defaultStyles"in t&&!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?A(e,"",v(l,t.defaultStyles,"root.json"),void 0,o):A(e,"",t.defaultStyles,v(l,"root.json"),o)}}function Ce(e){if(ke(e)){const p=e==null?void 0:e.tileInfo;return p!=null&&(p.rows==null&&(p.rows=512),p.cols==null&&(p.cols=512)),e}const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100,latestWkid:3857}};let s=null;if(H(e)){const{bounds:p}=e;if(p){const d=D({x:p[0],y:p[1],spatialReference:g(E)}),f=D({x:p[2],y:p[3],spatialReference:g(E)});s={xmin:d.x,ymin:d.y,xmax:f.x,ymax:f.y,spatialReference:g(L)}}}s===null&&(s=r);let i=78271.51696400007,o=2958287637957775e-7;const l=[],n=e.hasOwnProperty("maxzoom")&&e.maxzoom!=null?+e.maxzoom:22,a=0,u=0;for(let p=0;p<=n;p++)l.push({level:p,scale:o,resolution:i}),i/=2,o/=2;return{capabilities:"TilesOnly",initialExtent:s,fullExtent:r,minScale:a,maxScale:u,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:l,spatialReference:g(L)}}}function ke(e){return e.hasOwnProperty("tileInfo")}const b=1e-6;function qe(e,t){if(e===t)return!0;if(e==null&&t!=null||e!=null&&t==null||e==null||t==null||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=b||Math.abs(r.y-s.y)>=b)return!1;let i,o;e.lods[0].scale>t.lods[0].scale?(i=e,o=t):(o=e,i=t);for(let l=i.lods[0].scale;l>=o.lods[o.lods.length-1].scale-b;l/=2)if(Math.abs(l-o.lods[0].scale)<b)return!0;return!1}function Ve(e,t){if(e===t)return e;if(e==null&&t!=null)return t;if(e!=null&&t==null)return e;if(e==null||t==null)return null;const r=e.size[0],s=e.format,i=e.dpi,o=new ne({x:e.origin.x,y:e.origin.y}),l=e.spatialReference,n=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],a=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=n.scale,p=n.resolution,d=a.scale,f=[];let m=u,P=p,O=0;for(;m>=d;)f.push(new ue({level:O,resolution:P,scale:m})),O++,m/=2,P/=2;return new R({size:[r,r],dpi:i,format:s||"pbf",origin:o,lods:f,spatialReference:l})}let c=class extends pe(ce(he(Re(ye(de(fe(me(ge(Ae(_e)))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.path=null,this.refreshInterval=0,this.style=null,this.tilemapCache=null,this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){var e;if(this.sourceNameToSource)for(const t of Object.values(this.sourceNameToSource))t==null||t.destroy();(e=this.primarySource)==null||e.destroy(),this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch($).then(async()=>{var s;if(!((s=this.portalItem)!=null&&s.id))return;const r=`${this.portalItem.itemCdnUrl}/resources/styles/root.json`;(await w(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey},authMode:this.portalItem.portal.authMode})).data&&this.read({url:r},Se(this.portalItem,"portal-item"))}).catch($).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=(e==null?void 0:e.serviceUrl)&&x(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?S(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return((e=this.primarySource)==null?void 0:e.fullExtent)||null}get initialExtent(){var e;return((e=this.primarySource)==null?void 0:e.initialExtent)||null}get parsedUrl(){return this.serviceUrl?x(this.serviceUrl):null}get serviceUrl(){var e;return((e=this.currentStyleInfo)==null?void 0:e.serviceUrl)||null}get spatialReference(){var e;return((e=this.tileInfo)==null?void 0:e.spatialReference)??null}get styleUrl(){var e;return((e=this.currentStyleInfo)==null?void 0:e.styleUrl)||null}writeStyleUrl(e,t){e&&G(e)&&(e=`https:${e}`);const r=we(e);t.styleUrl=xe(e,r)}get tileInfo(){var r;const e=[];for(const s in this.sourceNameToSource)e.push(this.sourceNameToSource[s]);let t=((r=this.primarySource)==null?void 0:r.tileInfo)||new R;if(e.length>1)for(let s=0;s<e.length;s++)qe(t,e[s].tileInfo)&&(t=Ve(t,e[s].tileInfo));return t}readTilemapCache(e,t){var s;return((s=t.capabilities)==null?void 0:s.includes("Tilemap"))?new Y({layer:this}):null}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){var r,s;if(!this._spriteSourceMap.has(e)){const i=M().maxTextureSize,o=(r=this.currentStyleInfo)!=null&&r.spriteUrl?S(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,l=new C({type:"url",spriteUrl:o,pixelRatio:e,spriteFormat:(s=this.currentStyleInfo)==null?void 0:s.spriteFormat},i);await l.load(t),this._spriteSourceMap.set(e,l)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=M().maxTextureSize,s=e.spriteUrl,i=s?S(s,{...this.customParameters,token:this.apiKey}):null;if(!i&&e.type==="url")return null;const o=new C(e,r);try{await o.load(t);const l=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(l,o),i&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=i),this.emit("spriteSource-change",{spriteSource:o}),o}catch(l){$(l)}return null}async loadStyle(e,t){var s;const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||((s=this._loadingTask)==null||s.abort(),this._loadingTask=ve(i=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:i})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){var t;return g((t=this.styleRepository)==null?void 0:t.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return g(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return g(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t!=null&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new I("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await Me(e,{...t,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await Te("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new $e(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^/]+)?\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/vectortileserver/i),r=["OpenBasemap_v2","OpenBasemap_GCS_v2","OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2","World_Hillshade_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const i=t[1]||"";for(const o of r)if(o.toLowerCase().includes(s))return W(`//static.arcgis.com/attribution/Vector${i}/${o}`)}async _loadStyle(e){var t;return((t=this._loadingTask)==null?void 0:t.promise)??this.loadStyle(null,e)}};h([y({readOnly:!0})],c.prototype,"attributionDataUrl",null),h([y({type:["show","hide"]})],c.prototype,"listMode",void 0),h([y({json:{read:!0,write:!0}})],c.prototype,"blendMode",void 0),h([y({readOnly:!0,json:{read:!1}})],c.prototype,"capabilities",null),h([y({readOnly:!0})],c.prototype,"currentStyleInfo",void 0),h([y({json:{read:!1},readOnly:!0,type:U})],c.prototype,"fullExtent",null),h([y({json:{read:!1},readOnly:!0,type:U})],c.prototype,"initialExtent",null),h([y({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0),h([y({type:["VectorTileLayer"]})],c.prototype,"operationalLayerType",void 0),h([y({readOnly:!0})],c.prototype,"parsedUrl",null),h([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],c.prototype,"path",void 0),h([y({type:Number,json:{write:!1,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],c.prototype,"refreshInterval",void 0),h([y()],c.prototype,"style",void 0),h([y({readOnly:!0})],c.prototype,"serviceUrl",null),h([y({type:be,readOnly:!0})],c.prototype,"spatialReference",null),h([y({readOnly:!0})],c.prototype,"styleRepository",void 0),h([y({readOnly:!0})],c.prototype,"sourceNameToSource",void 0),h([y({readOnly:!0})],c.prototype,"primarySource",void 0),h([y({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],c.prototype,"styleUrl",null),h([Ie(["portal-item","web-document"],"styleUrl")],c.prototype,"writeStyleUrl",null),h([y({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:R})],c.prototype,"tileInfo",null),h([y()],c.prototype,"tilemapCache",void 0),h([N("service","tilemapCache",["capabilities","tileInfo"])],c.prototype,"readTilemapCache",null),h([y({json:{read:!1},readOnly:!0,value:"vector-tile"})],c.prototype,"type",void 0),h([y({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],c.prototype,"url",void 0),h([y({readOnly:!0})],c.prototype,"version",void 0),h([N("version",["version","currentVersion"])],c.prototype,"readVersion",null),c=h([Ue("esri.layers.VectorTileLayer")],c);const st=c;export{st as default};
