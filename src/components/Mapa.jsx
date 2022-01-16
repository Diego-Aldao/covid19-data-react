import { VectorMap } from "@react-jvectormap/core";
import { southAmericaMill } from "@react-jvectormap/southamerica";
import { worldMill } from "@react-jvectormap/world";
import { europeMill } from "@react-jvectormap/europe";
import { africaMill } from "@react-jvectormap/africa";
import { northAmericaMill } from "@react-jvectormap/northamerica";

function Mapa({ setData, valor }) {
  console.log(valor);
  //Traer la data del pais clickeado
  const fetchAlClickear = async (code) => {
    const url = `https://disease.sh/v3/covid-19/countries/${code}?strict=true`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    //Enviar la data al state de app
    setData(resultado);
  };

  const regionStyle = {
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
    <div className="map bg-white mt-10 border-gray-200 rounded-sm border-2 lg:w-2/3 ">
      <div className="header-mapa px-3 py-5 capitalize text-xl border-b-gray-200 border-b-2 ">
        sudamerica
      </div>
      <div className="contenedor-mapa p-5 max-h-screen">
        <VectorMap
          map={valor !== "" ? valor : southAmericaMill}
          style={{
            height: "630px",
          }}
          backgroundColor={"#fff"}
          regionsSelectable={true}
          regionsSelectableOne={true}
          regionStyle={regionStyle}
          zoomOnScroll={false}
          selectedRegions={"AR"}
          onRegionClick={(elements, code, region) => {
            fetchAlClickear(code);
          }}
        />
      </div>
    </div>
  );
}

export default Mapa;
