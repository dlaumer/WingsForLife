import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import mapStore from "../store/MapStore";
import styled from "styled-components";
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ArcGISMap = observer(() => {
  const mapRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {

    const tracks = new FeatureLayer({
      portalItem: {
        id: "782d7f7e5e0e4d2bbceaa98ceda28216" // Replace with your own portal item ID
      },
      outFields: ["trk_nm", "RealLen_m"],
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-line",  // autocasts as new SimpleLineSymbol()
          color: "#e1003b",
          width: 3
        }
      }
    })
    const map = new Map({                // Create a Map object
      basemap: "dark-gray-3d",
      ground: "world-elevation"
    });

    map.add(tracks); // Add the layer to the map

    const view = new SceneView({
      container: mapRef.current,
      map: map,
      camera: {
        position: [
          7.09449554,
          30.85925410,
          15307343.66328
        ],
        heading: 0.00,
        tilt: 0.15
      },
      popupEnabled: false,
      popup: {
        autoOpenEnabled: false,
        highlightEnabled: false
      }
    });

    const basemaps = new Expand({
      view: view,
      content: new BasemapGallery({
        view: view,
      }),
    })

    view.ui.add(basemaps, "top-right");

    view.when(() => {
      window.view = view;
    });

    const clickHandler = view.on("click", (event) => {
      view.hitTest(event).then((response) => {
        const result = response.results.find(
          (r) => r.graphic && r.graphic.layer === tracks
        );
        if (result) {
          const graphic = result.graphic;
          // Zoom to feature
          view.goTo({ target: graphic.geometry, tilt: 45 }, { duration: 400 });

          // Extract attributes
          const nameAttr = graphic.attributes.trk_nm;
          const lengthAttr = graphic.attributes.RealLen_m;
          mapStore.setSelectedName(nameAttr);
          mapStore.setSelectedLength(lengthAttr);
        }
      });
    });

    return () => {
      clickHandler.remove();
      view.destroy();
    };

    return () => view.destroy();
  }, []);

  // React to layer visibility changes
  useEffect(() => {
    if (layerRef.current) {
      layerRef.current.visible = mapStore.layerVisible;
    }
  }, [mapStore.layerVisible]);

  return <MapContainer ref={mapRef} />;
});

export default ArcGISMap;
