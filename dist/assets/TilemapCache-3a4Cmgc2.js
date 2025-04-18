import{e7 as T,as as z,P as D,s as u,cx as q,dS as S,Q as L,R as P,K as _,H as x,jJ as M,jK as C,ig as I,aN as U,aQ as j,gg as k,cB as E,r as d,l as y,t as H}from"./index-PAhymuf7.js";import{E as R}from"./ByteSizeUnit-BsxeN7wM.js";import{i as K}from"./memoryEstimations-CsRDpl56.js";function N(e,i=!1){return e<=T?i?new Array(e).fill(0):new Array(e):new Uint32Array(e)}class w{constructor(i){J(i);const{location:a,data:t}=i;this.location=Object.freeze(z(a));const l=this.location.width,n=this.location.height;let o=!0,r=!0;const c=Math.ceil(l*n/32),s=N(c);let h=0;for(let f=0;f<t.length;f++){const p=f%32;t[f]?(r=!1,s[h]|=1<<p):o=!1,p===31&&++h}r?(this._availability="unavailable",this.byteSize=40):o?(this._availability="available",this.byteSize=40):(this._availability=s,this.byteSize=40+K(s))}getAvailability(i,a){if(this._availability==="unavailable"||this._availability==="available")return this._availability;const t=(i-this.location.top)*this.location.width+(a-this.location.left),l=t%32,n=t>>5,o=this._availability;return n<0||n>o.length?"unknown":o[n]&1<<l?"available":"unavailable"}static fromDefinition(i,a){const t=i.service.request||D,{row:l,col:n,width:o,height:r}=i,c={query:{f:"json"}};return a=a?{...c,...a}:c,t(F(i),a).then(s=>s.data).catch(s=>{var h;if(((h=s==null?void 0:s.details)==null?void 0:h.httpStatus)===422)return{location:{top:l,left:n,width:o,height:r},valid:!0,data:new Array(o*r).fill(0)};throw s}).then(s=>{if(s.location&&(s.location.top!==l||s.location.left!==n||s.location.width!==o||s.location.height!==r))throw new u("tilemap:location-mismatch","Tilemap response for different location than requested",{response:s,definition:{top:l,left:n,width:o,height:r}});return w.fromJSON(s)})}static fromJSON(i){return Object.freeze(new w(i))}}function $(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}function F(e){var t;let i;if((t=e.service.tileServers)!=null&&t.length){const l=e.service.tileServers;i=`${l&&l.length?l[e.row%l.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else i=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const a=e.service.query;return a&&(i=`${i}?${a}`),i}function J(e){if(!(e!=null&&e.location))throw new u("tilemap:missing-location","Location missing from tilemap response");if(e.valid===!1)throw new u("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new u("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new u("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new u("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}var v;function A(e,i,a){return new u("tile-map:tile-unavailable","Tile is not available",{level:e,row:i,col:a})}let m=v=class extends q{constructor(e){super(e),this._pendingTilemapRequests={},this.request=D,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new S(2*R.MEGABYTES),this.addHandles(L(()=>{const{layer:e}=this;return[e==null?void 0:e.parsedUrl,e==null?void 0:e.tileServers,e==null?void 0:e.apiKey,e==null?void 0:e.customParameters]},()=>this._initializeTilemapDefinition(),P))}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}getAvailability(e,i,a){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const t=this._tilemapFromCache(e,i,a,this._tmpTilemapDefinition);return t?t.getAvailability(i,a):"unknown"}fetchAvailability(e,i,a,t){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(A(e,i,a)):this._fetchTilemap(e,i,a,t).catch(l=>l).then(l=>{if(l instanceof w){const n=l.getAvailability(i,a);if(n==="unavailable")throw A(e,i,a);return n}if(_(l))throw l;return"unknown"})}fetchAvailabilityUpsample(e,i,a,t,l){t.level=e,t.row=i,t.col=a;const n=this.layer.tileInfo;n.updateTileInfo(t);const o=this.fetchAvailability(e,i,a,l).catch(r=>{if(_(r))throw r;if(n.upsampleTile(t))return this.fetchAvailabilityUpsample(t.level,t.row,t.col,t,l);throw r});return this._fetchAvailabilityUpsamplePrefetch(t.id,e,i,a,l,o),o}async _fetchAvailabilityUpsamplePrefetch(e,i,a,t,l,n){if(!this._prefetchingEnabled||e==null)return;const o=`prefetch-${e}`;if(this.hasHandles(o))return;const r=new AbortController;n.then(()=>r.abort(),()=>r.abort());let c=!1;const s=x(()=>{c||(c=!0,r.abort())});if(this.addHandles(s,o),await M(10,r.signal).catch(()=>{}),c||(c=!0,this.removeHandles(o)),C(r))return;const h=new I(e,i,a,t),f={...l,signal:r.signal},p=this.layer.tileInfo;for(let O=0;v._prefetches.length<v._maxPrefetch&&p.upsampleTile(h);++O){const b=this.fetchAvailability(h.level,h.row,h.col,f);v._prefetches.push(b);const g=()=>{v._prefetches.removeUnordered(b)};b.then(g,g)}}_fetchTilemap(e,i,a,t){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new u("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,n=this._tilemapFromCache(e,i,a,l);if(n)return Promise.resolve(n);const o=t==null?void 0:t.signal;return t={...t,signal:null},new Promise((r,c)=>{U(o,()=>c(j()));const s=$(l);let h=this._pendingTilemapRequests[s];if(!h){h=w.fromDefinition(l,t).then(p=>(this._tilemapCache.put(s,p,p.byteSize),p));const f=()=>{delete this._pendingTilemapRequests[s]};this._pendingTilemapRequests[s]=h,h.then(f,f)}h.then(r,c)})}_initializeTilemapDefinition(){var t;if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:i,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:k({...e.query,...a,token:i??((t=e.query)==null?void 0:t.token)}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,i,a,t){t.level=e,t.row=i-i%this.size,t.col=a-a%this.size;const l=$(t);return this._tilemapCache.get(l)}get test(){}};m._maxPrefetch=4,m._prefetches=new E({initialSize:v._maxPrefetch}),d([y({constructOnly:!0})],m.prototype,"layer",void 0),d([y({constructOnly:!0})],m.prototype,"minLOD",void 0),d([y({constructOnly:!0})],m.prototype,"maxLOD",void 0),d([y({constructOnly:!0})],m.prototype,"request",void 0),d([y({constructOnly:!0})],m.prototype,"size",void 0),m=v=d([H("esri.layers.support.TilemapCache")],m);export{m as T};
