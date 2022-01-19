import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
function Mundo({ regionStyle, fetchAlClickear }) {
  return (
    <VectorMap
      map={worldMill}
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

export default Mundo;
