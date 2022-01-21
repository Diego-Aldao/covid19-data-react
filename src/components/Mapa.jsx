import { VectorMap } from "@react-jvectormap/core";
import { southAmericaMill } from "@react-jvectormap/southamerica";
import Sudamerica from "./mapas/Sudamerica";
import Asia from "./mapas/Asia";
import Africa from "./mapas/Africa";
import Norteamerica from "./mapas/Norteamerica";
import Europa from "./mapas/Europa";
import Mundo from "./mapas/Mundo";
import Oceania from "./mapas/Oceania";

function Mapa({ setData, valor, setCargando }) {
  //Traer la data del pais clickeado
  const fetchAlClickear = async (code) => {
    setCargando(true);
    const url = `https://disease.sh/v3/covid-19/countries/${code}?strict=true`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    //Enviar la data al state de app
    setData(resultado);
    setTimeout(() => {
      setCargando(false);
    }, 500);
  };
  //Estilo de los paises

  const regionStyle = {
    initial: {
      fill: "#e4e4e4",
      stroke: "transparent",
      "stroke-width": 2,
      "stroke-opacity": 1,
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
    <div className="map max-h-[750px] bg-white dark:bg-tema-oscuro-secundario dark:text-white mt-10 rounded-sm lg:w-2/3 ">
      <div className="header-mapa px-3 py-5 capitalize text-xl border-b-2 dark:border-tema-oscuro ">
        {valor ? valor : "sudamerica"}
      </div>
      <div className="contenedor-mapa p-5">
        {/* como jvectormap no deja re-renderizar el mapa al pasarle nuevas props,
           la unica solucion es crear un componente para cada mapa con el prop map fijo
           y cambiar el componente segun el state*/}
        {valor == "sudamerica" ? (
          <Sudamerica
            className={"contenedor-mapa"}
            regionStyle={regionStyle}
            fetchAlClickear={fetchAlClickear}
          />
        ) : valor == "norteamerica" ? (
          <Norteamerica
            regionStyle={regionStyle}
            fetchAlClickear={fetchAlClickear}
          />
        ) : valor == "asia" ? (
          <Asia regionStyle={regionStyle} fetchAlClickear={fetchAlClickear} />
        ) : valor == "africa" ? (
          <Africa regionStyle={regionStyle} fetchAlClickear={fetchAlClickear} />
        ) : valor == "europa" ? (
          <Europa regionStyle={regionStyle} fetchAlClickear={fetchAlClickear} />
        ) : valor == "mundo" ? (
          <Mundo regionStyle={regionStyle} fetchAlClickear={fetchAlClickear} />
        ) : valor == "oceania" ? (
          <Oceania
            regionStyle={regionStyle}
            fetchAlClickear={fetchAlClickear}
          />
        ) : (
          <VectorMap
            map={southAmericaMill}
            style={{
              height: "630px",
            }}
            backgroundColor={"white dark:bg-tema-oscuro"}
            regionsSelectable={true}
            regionsSelectableOne={true}
            regionStyle={regionStyle}
            zoomOnScroll={false}
            selectedRegions={"AR"}
            onRegionClick={(elements, code, region) => {
              fetchAlClickear(code);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Mapa;
