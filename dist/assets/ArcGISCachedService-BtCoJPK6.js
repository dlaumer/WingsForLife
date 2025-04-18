import{r as t,l as r,bn as m,g as x,dP as h,t as S}from"./index-PAhymuf7.js";import{e as I}from"./TileInfoTilemapCache-C_qH15LB.js";import{T as O}from"./TilemapCache-3a4Cmgc2.js";const C=y=>{let l=class extends y{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){var i,e;(e=(i=this.tilemapCache)==null?void 0:i.destroy)==null||e.call(i)}readMinScale(i,e){return e.minLOD!=null&&e.maxLOD!=null?i:0}readMaxScale(i,e){return e.minLOD!=null&&e.maxLOD!=null?i:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(i,e,f){var u;const v=(u=e.capabilities)==null?void 0:u.includes("Tilemap");let{minLOD:n,maxLOD:o,minScale:p,maxScale:c}=e;if(n==null&&o==null&&(p!==0||c!==0)){const a=s=>Math.round(1e4*s)/1e4;p=a(p||e.tileInfo.lods[0].scale),c=a(c||e.tileInfo.lods[e.tileInfo.lods.length-1].scale);for(const s of e.tileInfo.lods){const d=a(s.scale);n=d>=p?s.level:n,o=d>=c?s.level:o}}if(v)return new O({layer:this,minLOD:n,maxLOD:o});if(e.tileInfo){const a=new h;return a.read(e.tileInfo,f),new I(a,n,o)}return null}};return t([r({json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),t([r()],l.prototype,"minScale",void 0),t([m("service","minScale")],l.prototype,"readMinScale",null),t([r()],l.prototype,"maxScale",void 0),t([m("service","maxScale")],l.prototype,"readMaxScale",null),t([r({type:x})],l.prototype,"spatialReference",void 0),t([r({readOnly:!0})],l.prototype,"supportsBlankTile",null),t([r({type:h})],l.prototype,"tileInfo",void 0),t([r()],l.prototype,"tilemapCache",void 0),t([m("service","tilemapCache",["capabilities","tileInfo"])],l.prototype,"readTilemapCache",null),t([r()],l.prototype,"version",void 0),l=t([S("esri.layers.mixins.ArcGISCachedService")],l),l};export{C as p};
