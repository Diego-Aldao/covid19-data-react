import { buscarFecha } from "../helpers";
import Dato from "./Dato";
import {
  faUsers,
  faFirstAid,
  faHeadSideCough,
  faChild,
  faSkull,
  faLungsVirus,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import LoaderPais from "./LoaderPais";

function Info({ data, cargando }) {
  //Destructuring para obtener los datos que necesito
  const {
    country,
    population,
    active,
    recovered,
    deaths,
    critical,
    updated,
    cases,
  } = data;

  return (
    <div className="transition-transform grid md:grid-cols-2 md:justify-between gap-x-5 lg:flex lg:flex-wrap lg:w-1/2">
      <div className="md:col-span-2 flex px-3 py-8 my-10 items-center w-full dark:text-white">
        {cargando ? (
          <LoaderPais />
        ) : (
          <>
            <img
              className="w-20 h-12 rounded-sm"
              /*Si hago destructuring para obtener la bandera sin que antes este el fetch,
        tira error
          */
              src={data.countryInfo ? data.countryInfo.flag : ""}
              alt="bandera del pais"
            />
            <p className="uppercase text-xl ml-4">{country ? country : ""}</p>
          </>
        )}
      </div>
      <Dato
        icono={faUsers}
        nombre={"poblacion"}
        info={population}
        color={"bg-gradient-to-r from-purple-500 to-pink-500"}
        cargando={cargando}
      />
      <Dato
        icono={faFirstAid}
        nombre={"casos confirmados"}
        info={cases}
        color={"bg-gradient-to-r from-cyan-500 to-blue-500"}
        cargando={cargando}
      />
      <Dato
        icono={faHeadSideCough}
        nombre={"casos activos"}
        info={active}
        color={"bg-gradient-to-r from-violet-500 to-fuchsia-500"}
        cargando={cargando}
      />
      <Dato
        icono={faChild}
        nombre={"recuperados"}
        info={recovered}
        color={"bg-gradient-to-r from-teal-500 to-lime-700"}
        cargando={cargando}
      />
      <Dato
        icono={faSkull}
        nombre={"muertes"}
        info={deaths}
        color={"bg-gradient-to-r from-slate-400 to-stone-600"}
        cargando={cargando}
      />
      <Dato
        icono={faLungsVirus}
        nombre={"estado crítico"}
        info={critical}
        color={"bg-gradient-to-r from-red-400 to-rose-900"}
        cargando={cargando}
      />
      <Dato
        icono={faCalendarAlt}
        nombre={"último update"}
        info={buscarFecha(updated)}
        color={"bg-gradient-to-r from-amber-400 to-yellow-700"}
        cargando={cargando}
      />
    </div>
  );
}

export default Info;
