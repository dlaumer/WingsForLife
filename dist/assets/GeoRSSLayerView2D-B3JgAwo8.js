import{Q as l,R as h,U as g,V as w,W as f,X as d,Y as n,r as u,t as V}from"./index-PAhymuf7.js";import{S as b,y as S}from"./LayerView-CedF8oPM.js";import{t as _}from"./GraphicContainer-DJf2hCaL.js";import{A as T}from"./GraphicsView2D-CI7u0jns.js";import"./Container-_57wgcmQ.js";import"./layerViewUtils-D3aZgJT5.js";import"./AGraphicContainer-CBLsw2-9.js";import"./TechniqueInstance-CehT1Tl2.js";import"./UpdateTracking2D-BS25WV3Y.js";import"./BidiEngine-QXap_35O.js";import"./OptimizedFeature-DL1f172u.js";import"./memoryEstimations-CsRDpl56.js";import"./GeometryUtils-CuW9bgOs.js";import"./rasterizingUtils-FxQLLY1x.js";import"./floatRGBA-C0EmisXz.js";import"./Rect-CUzevAry.js";import"./Utils-DtRohgPC.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./FramebufferObject-CYuJ3rTt.js";import"./VertexArrayObject-BHI5OGAl.js";import"./TileContainer-B9BvOzaj.js";import"./WGLContainer-PaIHHyP7.js";import"./ProgramTemplate-LJYnLUf1.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-CsMx6hLz.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-Vb99EY1i.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-C4iDzwLi.js";import"./TechniqueType-uMFRS8dR.js";import"./GraphShaderModule-D7-m9YCf.js";import"./ShaderBuilder-DRbVcowp.js";import"./BindType-BBwFZqyN.js";import"./streamLayerUtils-CKwt2uXH.js";import"./QueueProcessor-B6mF9TCR.js";import"./OverrideHelper-DzGsjn-D.js";import"./colorUtils-BopbNhpe.js";import"./quantizationUtils-BGKUE1Kx.js";import"./AttributeStore-DWwffkGQ.js";import"./queryUtils-ENA1BF09.js";import"./json-Wa8cmqdu.js";import"./timeSupport-CtKNpu9m.js";import"./TimeOnly-aF9Tn6fb.js";import"./mat3f64-q3fE-ZOt.js";import"./normalizeUtilsSync-BCl9gXoV.js";import"./dehydratedFeatures-fylz02Nc.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(e=>{const i=this._popupTemplates.get(e),s=e.hitTest(t);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=i;return s}).map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:t}))}update(t){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(t)}attach(){this.addAttachHandles([l(()=>{var t;return(t=this.layer)==null?void 0:t.featureCollections},t=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of t){const i=g.fromJSON(o),s=new w(i.features),p=e.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.polygonSymbol},t=>{this._graphicsViewMap.polygon.renderer=new n({symbol:t})},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.lineSymbol},t=>{this._graphicsViewMap.polyline.renderer=new n({symbol:t})},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.pointSymbol},t=>{this._graphicsViewMap.point.renderer=new n({symbol:t})},h)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}_clear(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const dt=y;export{dt as default};
