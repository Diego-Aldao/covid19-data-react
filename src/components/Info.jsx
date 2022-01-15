import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFirstAid,
  faHeadSideCough,
  faChild,
  faSkull,
  faLungsVirus,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

function Info({ data }) {
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
    <div className="grid md:grid-cols-2 md:justify-between gap-x-5 lg:flex lg:flex-wrap lg:w-1/2">
      <div className="md:col-span-2 flex px-3 py-8 my-10 items-center w-full">
        <img
          className="w-20 rounded-sm"
          /*Si hago destructuring para obtener la bandera sin que antes este el fetch,
        tira error
          */
          src={data.countryInfo ? data.countryInfo.flag : ""}
          alt=""
        />
        <p className="uppercase text-xl ml-4">{country && "argentina"}</p>
      </div>
      <div className="bg-white flex mb-10 p-5 w-full max-w-xl">
        <div className="icono w-12 h-12 mr-3 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500  rounded-full">
          <FontAwesomeIcon icon={faUsers} className="text-white text-xl" />
        </div>
        <div className="descripcion">
          <p className="uppercase text-xs mb-1">poblacion</p>
          <p className="text-2xl">{population}</p>
        </div>
      </div>
      <div className="bg-white flex mb-10 p-5 w-full max-w-xl">
        <div className="icono w-12 h-12 mr-3 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
          <FontAwesomeIcon icon={faFirstAid} className="text-white text-xl" />
        </div>
        <div className="descripcion">
          <p className="uppercase text-xs mb-1">casos confirmados</p>
          <p className="text-2xl">{cases}</p>
        </div>
      </div>
      <div className="bg-white flex mb-10 p-5 w-full max-w-xl">
        <div className="icono w-12 h-12 mr-3 flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full">
          <FontAwesomeIcon
            icon={faHeadSideCough}
            className="text-white text-xl"
          />
        </div>
        <div className="descripcion">
          <p className="uppercase text-xs mb-1">casos activos</p>
          <p className="text-2xl">{active}</p>
        </div>
      </div>
      <div className="bg-white flex mb-10 p-5 w-full max-w-xl">
        <div className="icono w-12 h-12 mr-3 flex items-center justify-center bg-gradient-to-r from-teal-500 to-lime-700 rounded-full">
          <FontAwesomeIcon icon={faChild} className="text-white text-xl" />
        </div>
        <div className="descripcion">
          <p className="uppercase text-xs mb-1">recuperados</p>
          <p className="text-2xl">{recovered}</p>
        </div>
      </div>
      <div className="bg-white flex mb-10 p-5 w-full max-w-xl">
        <div className="icono w-12 h-12 mr-3 flex items-center justify-center bg-gradient-to-r from-slate-400 to-stone-600  rounded-full">
          <FontAwesomeIcon icon={faSkull} className="text-white text-xl" />
        </div>
        <div className="descripcion">
          <p className="uppercase text-xs mb-1">muertes</p>
          <p className="text-2xl">{deaths}</p>
        </div>
      </div>
      <div className="bg-white flex mb-10 p-5 w-full max-w-xl">
        <div className="icono w-12 h-12 mr-3 flex items-center justify-center bg-gradient-to-r from-red-400 to-rose-900  rounded-full">
          <FontAwesomeIcon icon={faLungsVirus} className="text-white text-xl" />
        </div>
        <div className="descripcion">
          <p className="uppercase text-xs mb-1">estado critico</p>
          <p className="text-2xl">{critical}</p>
        </div>
      </div>
      <div className="bg-white flex mb-10 p-5 w-full max-w-xl">
        <div className="icono w-12 h-12 mr-3 flex items-center justify-center bg-gradient-to-r from-amber-400 to-yellow-700 rounded-full">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="text-white text-xl"
          />
        </div>
        <div className="descripcion">
          <p className="uppercase text-xs mb-1">ultimo update</p>
          <p className="text-2xl">{updated}</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
