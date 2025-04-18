import{z as w,A as y,B as I,D as T,F as H,G as V,H as g,J as v,a as C,K as n,M as f,N as q,O as U,r as c,l as d,t as S}from"./index-PAhymuf7.js";import"./colorUtils-BopbNhpe.js";import"./floatRGBA-C0EmisXz.js";import"./UpdateTracking2D-BS25WV3Y.js";import"./GeometryUtils-CuW9bgOs.js";import"./OverrideHelper-DzGsjn-D.js";import"./Container-_57wgcmQ.js";import"./WGLContainer-PaIHHyP7.js";import"./Utils-DtRohgPC.js";import"./StyleDefinition-CsMx6hLz.js";import"./enums-BRzLM11V.js";import"./GridShader-CPnQn3sZ.js";import"./pbf-25DHRTyK.js";import"./TechniqueType-uMFRS8dR.js";import"./FramebufferObject-CYuJ3rTt.js";import"./FeatureCommandQueue-C4iDzwLi.js";import"./PieChartMeshWriter-CWVqumg5.js";import"./renderState-CsLtUR7R.js";import"./glsl-BH37Aalp.js";import"./testSVGPremultipliedAlpha-Q-3pTURc.js";import{A as b}from"./GraphicsView2D-CI7u0jns.js";import"./earcut-D9gy186-.js";import"./vec3f32-nZdmKIgz.js";import{r as G,o as p,n as _}from"./imageUtils-KU7RjLE6.js";import{S as Q,y as $}from"./LayerView-CedF8oPM.js";import{h as P}from"./HighlightGraphicContainer-BtDUGqRs.js";import{i as L}from"./RefreshableLayerView-DCWLIxCn.js";import{P as F,S as k}from"./MapServiceLayerViewHelper-CxjmUoqp.js";import{r as z}from"./drapedUtils--kuSDohN.js";import"./BidiEngine-QXap_35O.js";import"./OptimizedFeature-DL1f172u.js";import"./memoryEstimations-CsRDpl56.js";import"./rasterizingUtils-FxQLLY1x.js";import"./Rect-CUzevAry.js";import"./quantizationUtils-BGKUE1Kx.js";import"./ProgramTemplate-LJYnLUf1.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./VertexArrayObject-BHI5OGAl.js";import"./config-BOD8--da.js";import"./featureConversionUtils-Vb99EY1i.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./GraphShaderModule-D7-m9YCf.js";import"./ShaderBuilder-DRbVcowp.js";import"./BindType-BBwFZqyN.js";import"./CircularArray-CujHzHWW.js";import"./AttributeStore-DWwffkGQ.js";import"./queryUtils-ENA1BF09.js";import"./json-Wa8cmqdu.js";import"./timeSupport-CtKNpu9m.js";import"./TimeOnly-aF9Tn6fb.js";import"./streamLayerUtils-CKwt2uXH.js";import"./QueueProcessor-B6mF9TCR.js";import"./TurboLine-CHySo9WB.js";import"./utils-BEfU09lB.js";import"./basicInterfaces-CZwQPxTp.js";import"./mat3f64-q3fE-ZOt.js";import"./normalizeUtilsSync-BCl9gXoV.js";import"./dehydratedFeatures-fylz02Nc.js";import"./BitmapTechnique-BgSryPxQ.js";import"./TileContainer-B9BvOzaj.js";import"./layerViewUtils-D3aZgJT5.js";import"./AGraphicContainer-CBLsw2-9.js";import"./TechniqueInstance-CehT1Tl2.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-BcHYaT5t.js";import"./popupUtils-DfEHGcWP.js";const A=[0,0];let l=class extends L(G(Q($))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var i;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(i=this._highlightView)==null||i.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,i=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,i==null?void 0:i.effectiveMinLOD,i==null?void 0:i.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(e,h)=>this.fetchTile(e,h),scheduler:this.scheduler,priority:T.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new H({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),F(this,this.layer)){const e=this._highlightView=new b({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new P(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new k({createFetchPopupFeaturesQueryGeometry:(h,s)=>z(h,s,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(h,s)=>{e.graphicUpdateHandler({graphic:h,property:s})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t,i;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),(i=this._highlightView)==null||i.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(t,i){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,i):[]}highlight(t,i){const e=V(t);if(e.length===0)return g();const h=(i==null?void 0:i.name)??v;return this._addHighlightGraphics(e,h),g(()=>!this.destroyed&&this._removeHighlightGraphics(e,h))}_processHighlight(){var i;const t=this._getHighlights();(i=this._highlightView)==null||i.setHighlight(t)}_addHighlightGraphics(t,i){this._highlightGraphics.addMany(t),this._addHighlights(t.map(e=>e.uid),i)}_removeHighlightGraphics(t,i){this._highlightGraphics.removeMany(t),this._removeHighlights(t.map(e=>e.uid),i)}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var i;return C((i=this.layer.tileInfo)==null?void 0:i.spatialReference,t)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const i=this._bitmapView.createTile(t),e=i.bitmap;return[e.x,e.y]=this._tileInfoView.getTileCoords(A,i.key),e.resolution=this._tileInfoView.getTileResolution(i.key),[e.width,e.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(i)),this._bitmapView.addChild(i),this.requestUpdate(),i}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,i={}){return this.tilemapCache?this._fetchTileWithTilemapCache(t,i):this._fetchTileWithoutTilemapCache(t,i)}async _fetchTileWithoutTilemapCache(t,i={}){const{signal:e,resamplingLevel:h=0}=i;try{return await this._fetchImage(t,e)}catch(s){if(n(s))throw s;if(!this.resampling)return p(this._tileInfoView.tileInfo.size);if(h<3){const r=this._tileInfoView.getTileParentId(t.id);if(r){const a=new f(r),o=await this._fetchTileWithoutTilemapCache(a,{...i,resamplingLevel:h+1});return _(this._tileInfoView,o,a,t)}}return p(this._tileInfoView.tileInfo.size)}}async _fetchTileWithTilemapCache(t,i={}){const e=this.tilemapCache,{signal:h,resamplingLevel:s=0}=i,r=new f(0,0,0,0);let a,o=null;try{if(o=await e.fetchAvailabilityUpsample(t.level,t.row,t.col,r,{signal:h}),!this.resampling&&r.level!==t.level)return await q(i),p(this._tileInfoView.tileInfo.size);a=await this._fetchImage(r,h)}catch(m){if(n(m))throw m;if(this.resampling&&o==="unknown"&&s<3){const u=this._tileInfoView.getTileParentId(t.id);if(u){r.set(u);try{a=await this._fetchTileWithTilemapCache(r,{...i,resamplingLevel:s+1})}catch{}}}}return a?this.resampling?_(this._tileInfoView,a,r,t):a:p(this._tileInfoView.tileInfo.size)}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const i=await this._fetchQueue.push(t.key);t.bitmap.source=i,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(i){n(i)||U.getLogger(this).error(i)}this.requestUpdate()}}async _fetchImage(t,i){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:i})}};c([d()],l.prototype,"resampling",null),c([d()],l.prototype,"tilemapCache",null),l=c([S("esri.views.2d.layers.TileLayerView2D")],l);const Xt=l;export{Xt as default};
