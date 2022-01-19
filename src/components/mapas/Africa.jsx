import { VectorMap } from "@react-jvectormap/core";
import { africaMill } from "@react-jvectormap/africa";
function Africa({ regionStyle, fetchAlClickear }) {
  return (
    <VectorMap
      map={africaMill}
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

export default Africa;
