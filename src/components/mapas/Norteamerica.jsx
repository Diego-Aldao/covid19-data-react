import { VectorMap } from "@react-jvectormap/core";
import { northAmericaMill } from "@react-jvectormap/northamerica";
function Norteamerica({ regionStyle, fetchAlClickear }) {
  return (
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
      //elements y region necesitan ser pasados como parametros
      onRegionClick={(elements, code, region) => {
        fetchAlClickear(code);
      }}
    />
  );
}

export default Norteamerica;
