import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Dato({ icono, nombre, info, color }) {
  return (
    <div className="bg-white flex mb-10 p-5 w-full max-w-xl">
      <div
        className={`icono w-12 h-12 mr-3 flex items-center justify-center rounded-full ${color}`}
      >
        <FontAwesomeIcon icon={icono} className="text-white text-xl" />
      </div>
      <div>
        <p className="uppercase text-xs mb-1">{nombre}</p>
        <p className="text-2xl">{info.toLocaleString("es-AR")}</p>
      </div>
    </div>
  );
}

export default Dato;
