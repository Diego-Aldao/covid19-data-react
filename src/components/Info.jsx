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
function Info() {
  return (
    <div className="grid md:grid-cols-2 md:justify-between gap-x-5">
      <div className="md:col-span-2 flex px-3 py-8 my-10 items-center w-full">
        <img
          className="w-20 rounded-sm"
          src="https://disease.sh/assets/img/flags/ar.png"
          alt=""
        />
        <p className="uppercase text-xl ml-4">argentina</p>
      </div>
      <div className="bg-white flex mb-10 p-5 w-full max-w-xl">
        <div className="icono w-12 h-12 mr-3 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500  rounded-full">
          <FontAwesomeIcon icon={faUsers} className="text-white text-xl" />
        </div>
        <div className="descripcion">
          <p className="uppercase text-xs mb-1">poblacion</p>
          <p className="text-2xl">45.832.331</p>
        </div>
      </div>
      <div className="bg-white flex mb-10 p-5 w-full max-w-xl">
        <div className="icono w-12 h-12 mr-3 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
          <FontAwesomeIcon icon={faFirstAid} className="text-white text-xl" />
        </div>
        <div className="descripcion">
          <p className="uppercase text-xs mb-1">poblacion</p>
          <p className="text-2xl">45.832.331</p>
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
          <p className="uppercase text-xs mb-1">poblacion</p>
          <p className="text-2xl">45.832.331</p>
        </div>
      </div>
      <div className="bg-white flex mb-10 p-5 w-full max-w-xl">
        <div className="icono w-12 h-12 mr-3 flex items-center justify-center bg-gradient-to-r from-teal-500 to-lime-700 rounded-full">
          <FontAwesomeIcon icon={faChild} className="text-white text-xl" />
        </div>
        <div className="descripcion">
          <p className="uppercase text-xs mb-1">poblacion</p>
          <p className="text-2xl">45.832.331</p>
        </div>
      </div>
      <div className="bg-white flex mb-10 p-5 w-full max-w-xl">
        <div className="icono w-12 h-12 mr-3 flex items-center justify-center bg-gradient-to-r from-slate-400 to-stone-600  rounded-full">
          <FontAwesomeIcon icon={faSkull} className="text-white text-xl" />
        </div>
        <div className="descripcion">
          <p className="uppercase text-xs mb-1">poblacion</p>
          <p className="text-2xl">45.832.331</p>
        </div>
      </div>
      <div className="bg-white flex mb-10 p-5 w-full max-w-xl">
        <div className="icono w-12 h-12 mr-3 flex items-center justify-center bg-gradient-to-r from-red-400 to-rose-900  rounded-full">
          <FontAwesomeIcon icon={faLungsVirus} className="text-white text-xl" />
        </div>
        <div className="descripcion">
          <p className="uppercase text-xs mb-1">poblacion</p>
          <p className="text-2xl">45.832.331</p>
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
          <p className="uppercase text-xs mb-1">poblacion</p>
          <p className="text-2xl">45.832.331</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
