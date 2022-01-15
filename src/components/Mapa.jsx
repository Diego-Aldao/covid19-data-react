import { VectorMap } from "@react-jvectormap/core";
import { southAmericaMill } from "@react-jvectormap/southamerica";
import { worldMill } from "@react-jvectormap/world";
import { europeMill } from "@react-jvectormap/europe";
import { africaMill } from "@react-jvectormap/africa";
import { northAmericaMill } from "@react-jvectormap/northamerica";
function Mapa() {
  const regionStyle = {
    transition: "all 1s ease",
    initial: {
      fill: "#e4e4e4",
      stroke: "#fff",
      "stroke-width": 1,
      "stroke-opacity": 0.3,
      cursor: "pointer",
      selectedRegions: "AR",
      overflow: "visible",
    },
    hover: {
      fill: "#6366f1",
      "fill-opacity": 0.8,
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    selected: {
      fill: "#590000",
      stroke: "#212121",
      "stroke-width": 1,
    },
    selectedHover: {
      "fill-opacity": 0.8,
    },
  };
  return (
    <div className="map bg-white mt-10 border-gray-200 rounded-sm border-2 lg:w-2/3 max-h-screen">
      <div className="header-mapa px-3 py-5 capitalize text-xl border-b-gray-200 border-b-2 ">
        sudamerica
      </div>
      <div className="contenedor-mapa p-5">
        <VectorMap
          map={northAmericaMill}
          style={{
            height: "630px",
          }}
          backgroundColor={"#fff"}
          regionsSelectable={true}
          regionsSelectableOne={true}
          regionStyle={regionStyle}
          zoomOnScroll={false}
          onRegionClick={(elements, code, region) => {
            console.log(code);
          }}
        />
      </div>
    </div>
  );
}

export default Mapa;
