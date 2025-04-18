// MapView.jsx
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
    // 1. Read URL param
    const params = new URLSearchParams(window.location.pathname);
    const viewAll = params.get("viewAll") == "true";
    console.log(window.location.search)
    // 2. Define the list of OBJECTIDs to show when viewAll !== true
    const objectIdsToShow = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      /* replace with your actual OBJECTIDs, e.g. 1, 5, 12, 27 */
    ];

    // 3. Build the FeatureLayer options, including a definitionExpression only if needed
    const layerOptions = {
      portalItem: { id: "782d7f7e5e0e4d2bbceaa98ceda28216" },
      outFields: ["trk_nm", "RealLen_m"],
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-line",
          color: "#e1003b",
          width: 3
        }
      }
    };

    if (!viewAll) {
      layerOptions.definitionExpression =
        `FID IN (${objectIdsToShow.join(",")})`;
    }

    const tracks = new FeatureLayer(layerOptions);
    layerRef.current = tracks;  // so you can still toggle visibility later

    // 4. Create the map and view
    const map = new Map({
      basemap: "dark-gray-3d",
      ground: "world-elevation"
    });
    map.add(tracks);  // add filtered or unfiltered layer

    const view = new SceneView({
      container: mapRef.current,
      map: map,
      camera: {
        position: [7.09449554, 30.85925410, 15307343.66328],
        heading: 0,
        tilt: 0.15
      },
      popupEnabled: false,
      popup: {
        autoOpenEnabled: false,
        highlightEnabled: false
      }
    });

    // basemap gallery
    const basemaps = new Expand({
      view,
      content: new BasemapGallery({ view })
    });
    view.ui.add(basemaps, "top-right");

    view.when(() => { window.view = view; });

    // click → zoom + tilt + header update
    const clickHandler = view.on("click", (event) => {
      view.hitTest(event).then((response) => {
        const result = response.results.find(
          (r) => r.graphic && r.graphic.layer === tracks
        );
        if (result) {
          const g = result.graphic;
          view.goTo({ target: g.geometry, tilt: 45 }, { duration: 400 });
          mapStore.setSelectedName(g.attributes.trk_nm);
          mapStore.setSelectedLength(g.attributes.RealLen_m);
        }
      });
    });

    return () => {
      clickHandler.remove();
      view.destroy();
    };
  }, []);

  // allow toggling layer visibility via your store
  useEffect(() => {
    if (layerRef.current) {
      layerRef.current.visible = mapStore.layerVisible;
    }
  }, [mapStore.layerVisible]);

  return <MapContainer ref={mapRef} />;
});

export default ArcGISMap;
