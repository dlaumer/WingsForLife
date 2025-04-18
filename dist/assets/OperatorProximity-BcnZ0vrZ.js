import{f as C,a as f,P as y,e as d,z as b}from"./Transformation2D-D0MqPw7t.js";import{g as V,ax as p,ay as R}from"./ProjectionTransformation-CqVHxcbq.js";function T(){return N(new d,-1,Number.NaN)}function N(r,e,n){return{m_coordinate:r.clone(),m_vertexIndex:e,m_geometryIndex:0,m_distance:n,m_bRightSide:!1,isEmpty:G}}function G(){return Number.isNaN(this.m_distance)}function P(r,e,n=-1,o=-1){if(r.isEmpty())return 3;const t=r.getGeometryType();if(C(t))return D(r,e,n,o);if(t===f.enumPolygon)return q(r,e,n,o);if(t===f.enumPolyline)return A(r,e,n,o);if(t===f.enumEnvelope){const s=new V;return r.queryEnvelope(s),s.contains(e)?s.containsExclusive(e)?1:2:0}return 3}function D(r,e,n,o){if(n>=0||o>=0)return y("");if(r.isDegenerate(0))return r.getStartXY().equals(e)?2:3;if(!r.isCurve()){const c=d.orientationRobust(e,r.getStartXY(),r.getEndXY());return c<0?1:c>0?0:2}const t=r.getClosestCoordinate(e,!1),s=r.getTangent(t),u=r.getCoord2D(t),a=d.orientationRobust(e,u,u.add(s));return a<0?1:a>0?0:2}function q(r,e,n,o){(n>=0||o>=0)&&y("");const t=new V;r.queryEnvelope(t);const s=p(r,e,0);return s===0?0:s===1?1:2}function A(r,e,n,o){(n<0&&o>=0||n>=0&&o<0)&&y("");const t=r.querySegmentIterator();if(n<0){let u=Number.MAX_VALUE,a=0;for(;t.nextPath();)for(;t.hasNextSegment();){const c=t.nextSegment(),i=c.getClosestCoordinate(e,!1),g=c.getCoord2D(i),x=d.sqrDistance(g,e);x<u?(a=1,n=t.getStartPointIndex(),o=t.getPathIndex(),u=x):x===u&&a++}if(a===0)return 3;if(a===1)return t.resetToVertex(n,o),P(t.nextSegment(),e)}const s=w(e,t,n,o);if(s.i1!==-1&&s.i2===-1)return s.bRight1?1:0;if(s.i1!==-1&&s.i2!==-1){if(s.bRight1===s.bRight2)return s.bRight1?1:0;{t.resetToVertex(s.i1,-1);const u=t.nextSegment().getTangent(1);t.resetToVertex(s.i2,-1);const a=t.nextSegment().getTangent(0);return u.crossProduct(a)>=0?1:0}}return t.resetToVertex(n,o),P(t.nextSegment(),e)}function E(r,e,n){for(r.resetToVertex(e,n);r.hasNextSegment();)if(!r.nextSegment().isDegenerate(0))return r.getStartPointIndex();for(r.resetToVertex(e,n);r.hasPreviousSegment();)if(!r.previousSegment().isDegenerate(0))return r.getStartPointIndex();return-1}function X(r,e){for(r.resetToVertex(e,-1),r.nextSegment();r.hasNextSegment();)if(!r.nextSegment().isDegenerate(0))return r.getStartPointIndex();return-1}function _(r,e){for(r.resetToVertex(e,-1);r.hasPreviousSegment();)if(!r.previousSegment().isDegenerate(0))return r.getStartPointIndex();return-1}function w(r,e,n,o){const t={i1:-1,i2:-1,bRight1:!1,bRight2:!1};if(t.i1=E(e,n,o),t.i1!==-1){e.resetToVertex(t.i1,-1);const s=e.nextSegment(),u=s.getClosestCoordinate(r,!1),a=s.getCoord2D(u),c=d.sqrDistance(a,r);{const i=a.clone();i.subThis(s.getStartXY());const g=r.clone();g.subThis(s.getStartXY()),t.bRight1=i.crossProduct(g)<0}if(t.i2=X(e,t.i1),t.i2!==-1){e.resetToVertex(t.i2,-1);const i=e.nextSegment(),g=i.getClosestCoordinate(r,!1),x=i.getCoord2D(g);if(d.sqrDistance(x,r)>c)t.i2=-1;else{const m=x.clone();m.subThis(i.getStartXY());const l=r.clone();l.subThis(i.getStartXY()),t.bRight2=m.crossProduct(l)<0}}if(t.i2===-1&&(t.i2=_(e,t.i1),t.i2!==-1)){e.resetToVertex(t.i2,-1);const i=e.nextSegment(),g=i.getClosestCoordinate(r,!1),x=i.getCoord2D(g);if(d.sqrDistance(x,r)>c)t.i2=-1;else{const m=x.clone();m.subThis(i.getStartXY());const l=r.clone();l.subThis(i.getStartXY()),t.bRight2=m.crossProduct(l)<0;const h=t.i1;t.i1=t.i2,t.i2=h;const S=t.bRight1;t.bRight1=t.bRight2,t.bRight2=S}}}return t}class Y{getOperatorType(){return 10500}accelerateGeometry(e,n,o){return!1}canAccelerateGeometry(e){return!1}supportsCurves(){return!0}getNearestCoordinate(e,n,o,t){if(n.isNAN()&&y("NAN xy coordinates are not allowed"),e.isEmpty())return T();switch(e.getGeometryType()){case f.enumPoint:return this.pointGetNearestVertex(e,n);case f.enumMultiPoint:return this.multiVertexGetNearestVertex(e,n);case f.enumPolyline:case f.enumPolygon:return this.multiPathGetNearestCoordinate(e,n,o,t);default:b("")}}getNearestVertex(e,n){if(n.isNAN()&&y("NAN xy coordinates are not allowed"),e.isEmpty())return T();switch(e.getGeometryType()){case f.enumPoint:return this.pointGetNearestVertex(e,n);case f.enumMultiPoint:case f.enumPolyline:case f.enumPolygon:return this.multiVertexGetNearestVertex(e,n);default:b("")}}getNearestVertices(e,n,o,t){if(t===0&&y(""),n.isNAN()&&y("NAN xy coordinates are not allowed"),e.isEmpty())return[];switch(e.getGeometryType()){case f.enumPoint:return this.pointGetNearestVertices(e,n,o,t);case f.enumMultiPoint:case f.enumPolyline:case f.enumPolygon:return this.multiVertexGetNearestVertices(e,n,o,t);default:b("")}}multiPathGetNearestCoordinate(e,n,o,t){if(e.getGeometryType()===f.enumPolygon&&o){const m=new V;e.queryEnvelope(m);const l=R(null,m,!1);let h;if(h=p(e,n,t?0:l),h!==0){const S=N(n,-1,0);return t&&(S.m_bRightSide=!0),S}}const s=e.querySegmentIterator(),u=new d;let a=-1,c=-1,i=Number.MAX_VALUE,g=0;for(;s.nextPath();)for(;s.hasNextSegment();){const m=s.nextSegment(),l=m.getClosestCoordinate(n,!1),h=m.getCoord2D(l),S=d.sqrDistance(h,n);S<i?(g=1,u.assign(h),a=s.getStartPointIndex(),c=s.getPathIndex(),i=S):S===i&&g++}a===-1&&y("");const x=N(u,a,Math.sqrt(i));if(t)if(e.getGeometryType()!==f.enumPolygon){let m=!1;if(g>1){const l=P(e,n,a,c);m=l!==0&&l!==3}else{s.resetToVertex(a,c);const l=s.nextSegment();m=P(l,n)!==0}x.m_bRightSide=m}else o||p(e,n,0)!==0&&(x.m_bRightSide=!0);return x}pointGetNearestVertex(e,n){const o=e.getXY(),t=d.distance(o,n);return N(o,0,t)}multiVertexGetNearestVertex(e,n){const o=e.getAttributeStreamRef(0),t=e.getPointCount();let s=-1;const u=new d;let a=Number.MAX_VALUE;const c=new d;for(let i=0;i<t;i++){o.queryPoint2D(2*i,c);const g=d.sqrDistance(c,n);g<a&&(u.assign(c),s=i,a=g)}return N(u,s,Math.sqrt(a))}pointGetNearestVertices(e,n,o,t){const s=[];if(t!==0){const u=o*o,a=e.getXY(),c=d.sqrDistance(a,n);c<=u&&s.push(N(a,0,Math.sqrt(c)))}return s}multiVertexGetNearestVertices(e,n,o,t){const s=[];if(t!==0){const u=e.getAttributeStreamRef(0),a=e.getPointCount();s.length=t+1;const c=o*o;for(let i=0;i<a;i++){const g=u.read(2*i),x=u.read(2*i+1),m=n.x-g,l=n.y-x,h=m*m+l*l;h<=c&&s.push(N(d.construct(g,x),i,Math.sqrt(h)))}s.sort((i,g)=>i.m_distance-g.m_distance)}return s.slice(0,t)}}export{Y as m};
