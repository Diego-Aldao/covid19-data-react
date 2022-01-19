import { VectorMap } from "@react-jvectormap/core";
import { oceaniaMill } from "@react-jvectormap/oceania";
function Oceania({ regionStyle, fetchAlClickear }) {
  return (
    <VectorMap
      map={oceaniaMill}
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

export default Oceania;
