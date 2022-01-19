import { VectorMap } from "@react-jvectormap/core";
import { europeMill } from "@react-jvectormap/europe";
function Europa({ regionStyle, fetchAlClickear }) {
  return (
    <VectorMap
      map={europeMill}
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

export default Europa;
