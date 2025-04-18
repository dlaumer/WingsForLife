// MapView.jsx
import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import mapStore from "../store/MapStore";
import styled from "styled-components";
import SceneView from "@arcgis/core/views/SceneView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
import Home from "@arcgis/core/widgets/Home";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";

import WebScene from "@arcgis/core/WebScene";

import bluePinSymbol from "../assets/blue-pin-symbol.svg";
import redPinSymbol from "../assets/red-pin-symbol.svg";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ArcGISMap = observer(() => {
  const viewRef = useRef(null);
  const mapRef = useRef(null);
  const layerRef = useRef(null);

  let tracks = null;
  let endpoints = null;
  let buildingsLayer = null;
  let treesLayer = null;

  useEffect(() => {

    // Replace with your WebScene portal ID
    const webscene = new WebScene({
      portalItem: {
        id: "4ff212f26a92401e8666bfa497fce8f4"
      }
    });

    const view = new SceneView({
      container: mapRef.current,
      map: webscene,
      popupEnabled: false,
      camera: {
        position: [
          14.56157909,
          43.62521184,
          15305838.15197
        ],
        heading: 360.00,
        tilt: 0.15
      }
    });

    view.when(() => {
      window.view = view;
      viewRef.current = view;
      // Example: Find layers by title
      tracks = webscene.layers.find(layer => layer.title === "Tracks");
      endpoints = webscene.layers.find(layer => layer.title === "Endpoints");
      buildingsLayer = webscene.layers.find(layer => layer.title === "OSM Buildings");
      treesLayer = webscene.layers.find(layer => layer.title === "OSM Trees");


      const endpointRenderer = new UniqueValueRenderer({
        field: "point_type",
        uniqueValueInfos: [
          {
            value: "start",
            symbol: {
              type: "point-3d",
              symbolLayers: [
                {
                  type: "icon",
                  resource: {
                    href: redPinSymbol
                  },
                  size: 45,
                  anchor: "relative",
                  anchorPosition: { x: 0, y: 0.25 }
                }
              ],
              verticalOffset: {
                screenLength: 20,
                maxWorldLength: 50,
                minWorldLength: 15
              },
              callout: {
                type: "line",
                color: "white",
                size: 1
              }
            },
            label: "Start Point"
          },
        ]
      });

      endpoints.renderer = endpointRenderer;

      if (tracks && endpoints) {
        Promise.all([endpoints.load(), tracks.load()]).then(() => {
          // Ensure we can access fields
          endpoints.outFields = ["*"];
          tracks.outFields = ["*"];

          view.on("click", (event) => {
            view.hitTest(event).then((response) => {
              const endpointResult = response.results.find(
                r => r.graphic?.layer === endpoints
              );
              const result = response.results.find(
                (r) => r.graphic && r.graphic.layer === tracks
              );


              if (endpointResult) {
                const trkName = endpointResult.graphic.attributes.trk_nm;

                // Query the tracks layer for the matching name
                tracks.queryFeatures({
                  where: `trk_nm = '${trkName.replace(/'/g, "''")}'`, // escape single quotes
                  returnGeometry: true,
                  outFields: ["*"]
                }).then((result) => {
                  if (result.features.length > 0) {
                    const trackFeature = result.features[0];
                    mapStore.setSelectedName(trackFeature.attributes.trk_nm);
                    mapStore.setSelectedLength(trackFeature.attributes.RealLen_m);
                    view.goTo({ target: trackFeature.geometry, tilt: 60 }, { duration: 400 })
                    .then(() => { rotate() })
                  }
                });
              }
              else if (result) {
                const g = result.graphic;
                mapStore.setSelectedName(g.attributes.trk_nm);
                mapStore.setSelectedLength(g.attributes.RealLen_m);
                view.goTo({ target: g.geometry, tilt: 60 }, { duration: 400 })
                  .then(() => { rotate() })
              }
            });
          });
        });
      }



    });


    // basemap gallery
    const home = new Home({
      view,
    });
    view.ui.add(home, "top-left");


    // basemap gallery
    const basemaps = new Expand({
      view,
      content: new BasemapGallery({ view })
    });
    view.ui.add(basemaps, "top-left");


    return () => {
      view.destroy();
    };
  }, []);

  function rotate() {
    if (!viewRef.current.interacting) {
      viewRef.current.goTo({
        heading: viewRef.current.camera.heading + 0.2,
        center: viewRef.current.center
      }, { animate: false });
      requestAnimationFrame(rotate);
    }
  }
  // allow toggling layer visibility via your store
  useEffect(() => {
    if (layerRef.current) {
      layerRef.current.visible = mapStore.layerVisible;
    }
  }, [mapStore.layerVisible]);

  return <MapContainer ref={mapRef} />;
});

export default ArcGISMap;
