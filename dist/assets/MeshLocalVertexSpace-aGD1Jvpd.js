import{c3 as n,j as l,r,c6 as i,l as a,t as p,cY as c}from"./index-PAhymuf7.js";var s;let e=s=class extends n.ClonableMixin(l){constructor(o){super(o),this.type="georeferenced",this.origin=null}};e.absolute=new s,r([i({georeferenced:"georeferenced"},{readOnly:!0})],e.prototype,"type",void 0),r([a({type:[Number],nonNullable:!1,json:{write:!0}})],e.prototype,"origin",void 0),e=s=r([p("esri.geometry.support.MeshGeoreferencedVertexSpace")],e);const y=e;let t=class extends n.ClonableMixin(l){constructor(o){super(o),this.type="local",this.origin=c()}};r([i({local:"local"},{readOnly:!0})],t.prototype,"type",void 0),r([a({type:[Number],nonNullable:!0,json:{write:!0}})],t.prototype,"origin",void 0),t=r([p("esri.geometry.support.MeshLocalVertexSpace")],t);const d=t;export{d as a,y as n};
