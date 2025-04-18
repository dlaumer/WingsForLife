import{Z as m,$ as c,a0 as g,V as n,a1 as l,H as h,J as d,r as o,l as w,t as u}from"./index-PAhymuf7.js";import{S as y,y as V}from"./LayerView-CedF8oPM.js";import{t as v}from"./GraphicContainer-DJf2hCaL.js";import{A as f}from"./GraphicsView2D-CI7u0jns.js";import"./Container-_57wgcmQ.js";import"./layerViewUtils-D3aZgJT5.js";import"./AGraphicContainer-CBLsw2-9.js";import"./TechniqueInstance-CehT1Tl2.js";import"./UpdateTracking2D-BS25WV3Y.js";import"./BidiEngine-QXap_35O.js";import"./OptimizedFeature-DL1f172u.js";import"./memoryEstimations-CsRDpl56.js";import"./GeometryUtils-CuW9bgOs.js";import"./rasterizingUtils-FxQLLY1x.js";import"./floatRGBA-C0EmisXz.js";import"./Rect-CUzevAry.js";import"./Utils-DtRohgPC.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./FramebufferObject-CYuJ3rTt.js";import"./VertexArrayObject-BHI5OGAl.js";import"./TileContainer-B9BvOzaj.js";import"./WGLContainer-PaIHHyP7.js";import"./ProgramTemplate-LJYnLUf1.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-CsMx6hLz.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-Vb99EY1i.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-C4iDzwLi.js";import"./TechniqueType-uMFRS8dR.js";import"./GraphShaderModule-D7-m9YCf.js";import"./ShaderBuilder-DRbVcowp.js";import"./BindType-BBwFZqyN.js";import"./streamLayerUtils-CKwt2uXH.js";import"./QueueProcessor-B6mF9TCR.js";import"./OverrideHelper-DzGsjn-D.js";import"./colorUtils-BopbNhpe.js";import"./quantizationUtils-BGKUE1Kx.js";import"./AttributeStore-DWwffkGQ.js";import"./queryUtils-ENA1BF09.js";import"./json-Wa8cmqdu.js";import"./timeSupport-CtKNpu9m.js";import"./TimeOnly-aF9Tn6fb.js";import"./mat3f64-q3fE-ZOt.js";import"./normalizeUtilsSync-BCl9gXoV.js";import"./dehydratedFeatures-fylz02Nc.js";let p=class extends y(V){attach(){this.graphicsView=new f({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new v(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),m(()=>{var i;return(i=this.layer)==null?void 0:i.visible},()=>{this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate()})]),this._processHighlight()}detach(){this.container.removeAllChildren(),this.graphicsView=c(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t){let r;typeof i=="number"?r=[i]:i instanceof g?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):n.isCollection(i)&&i.length>0&&(r=i.map(s=>s&&s.uid).toArray());const e=r==null?void 0:r.filter(l);if(!(e!=null&&e.length))return h();const a=(t==null?void 0:t.name)??d;return this._addHighlights(e,a),h(()=>!this.destroyed&&this._removeHighlights(e,a))}_processHighlight(){var t;const i=this._getHighlights();(t=this.graphicsView)==null||t.setHighlight(i)}};o([w()],p.prototype,"graphicsView",void 0),p=o([u("esri.views.2d.layers.GraphicsLayerView2D")],p);const di=p;export{di as default};
