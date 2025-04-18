import{ia as l,eW as _,eD as h,cY as p,bh as v,c$ as u,r as y,t as L}from"./index-PAhymuf7.js";import{v as $,b as x,j}from"./lineSegment-BPkfw3cc.js";import{E as P,U as f,i as C}from"./sphere-B6kQjYN0.js";import{b}from"./Octree-BK6u9q7v.js";import{m as S}from"./edgeProcessing-RkMl9iEa.js";import"./plane-6MWJhUeE.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./InterleavedLayout-DWQ6OWlR.js";import"./BufferView-awvNx3mQ.js";import"./types-D0PSWh4d.js";import"./deduplicate-DCvw-vao.js";import"./Indices-C1swA4S1.js";import"./VertexAttribute-Cq4MnHjR.js";import"./glUtil-DYJMkRt0.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./Normals-Cu8v_usF.js";const I=1e3;function V(t,o,n){const e=P(),i=f(e);return l(i,i,t,.5),l(i,i,o,.5),e[3]=_(i,t),h(i,i,n),e}let g=class{constructor(){this._idToComponent=new Map,this._components=new b(t=>t.bounds),this._edges=new b(t=>t.bounds),this._tmpLineSegment=$(),this._tmpP1=p(),this._tmpP2=p(),this._tmpP3=p(),this.remoteClient=null}async fetchCandidates(t,o){await Promise.resolve(),v(o),await this._ensureEdgeLocations(t,o);const n=[];return this._edges.forEachNeighbor(e=>(this._addCandidates(t,e,n),n.length<I),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,o){const n=[];if(this._components.forEachNeighbor(s=>{if(s.info==null){const{id:c,uid:r}=s;n.push({id:c,uid:r})}return!0},t.bounds),!n.length)return;const e={components:n},i=await this.remoteClient.invoke("fetchAllEdgeLocations",e,o??{});for(const s of i.components)this._setFetchEdgeLocations(s)}async add(t){const o=new m(t.id,t.bounds);return this._idToComponent.set(o.id,o),this._components.add([o]),{result:{}}}async remove(t){const o=this._idToComponent.get(t.id);if(o){const n=[];this._edges.forEachNeighbor(e=>(e.component===o&&n.push(e),!0),o.bounds),this._edges.remove(n),this._components.remove([o]),this._idToComponent.delete(o.id)}return{result:{}}}_setFetchEdgeLocations(t){const o=this._idToComponent.get(t.id);if(o==null||t.uid!==o.uid)return;const n=S.createView(t.locations),e=new Array(n.count),i=p(),s=p();for(let d=0;d<n.count;d++){n.position0.getVec(d,i),n.position1.getVec(d,s);const a=V(i,s,t.origin),E=new T(o,d,a);e[d]=E}this._edges.add(e);const{objectIds:c,origin:r}=t;o.info={locations:n,objectIds:c,origin:r}}_addCandidates(t,o,n){const{info:e}=o.component,{origin:i,objectIds:s}=e,c=e.locations,r=c.position0.getVec(o.index,this._tmpP1),d=c.position1.getVec(o.index,this._tmpP2);h(r,r,i),h(d,d,i);const a=s[c.componentIndex.get(o.index)];this._addEdgeCandidate(t,a,r,d,n),w(t,a,r,n),w(t,a,d,n)}_addEdgeCandidate(t,o,n,e,i){if(!t.returnEdge)return;const s=f(t.bounds),c=x(n,e,this._tmpLineSegment),r=j(c,s,this._tmpP3);C(t.bounds,r)&&i.push({type:"edge",objectId:o,target:u(r),distance:_(s,r),start:u(n),end:u(e)})}};g=y([L("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],g);const R=g;function w(t,o,n,e){if(!t.returnVertex||!C(t.bounds,n))return;const i=f(t.bounds);e.push({type:"vertex",objectId:o,target:u(n),distance:_(i,n)})}class m{constructor(o,n){this.id=o,this.bounds=n,this.info=null,this.uid=++m.uid}}m.uid=0;class T{constructor(o,n,e){this.component=o,this.index=n,this.bounds=e}}export{R as default};
