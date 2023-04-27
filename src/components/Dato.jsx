import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoaderInfo from "./LoaderInfo";
function Dato({ icono, nombre, info, color, cargando }) {
  return (
    <div className="bg-white dark:bg-tema-oscuro-secundario dark:text-white flex mb-10 p-5 flex-1">
      <div
        className={`icono w-12 h-12 mr-3 flex items-center justify-center rounded-full ${color}`}
      >
        <FontAwesomeIcon icon={icono} className="text-white text-xl" />
      </div>
      <div>
        <p className="uppercase text-xs mb-1">{nombre}</p>
        {cargando ? (
          <LoaderInfo />
        ) : (
          <>
            <p className="text-2xl">
              {info ? info.toLocaleString("es-AR") : "0"}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Dato;
