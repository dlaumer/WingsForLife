import{u as n,p as e}from"./index-PAhymuf7.js";import{d as p}from"./queryTopFeatures-BYqNl9PO.js";import s from"./TopFeaturesQuery-yUmRto5S.js";import"./query-Yb9Hiaro.js";import"./pbfQueryUtils-D842wqNf.js";import"./pbf-25DHRTyK.js";import"./memoryEstimations-CsRDpl56.js";import"./OptimizedFeature-DL1f172u.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";async function S(a,i,m){const r=n(a),o=await p(r,s.from(i),{...m}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:e.fromJSON(t)}}export{S as executeForTopExtents};
