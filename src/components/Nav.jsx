import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import {
  faVirus,
  faMoon,
  faGlobeAmericas,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? "#6366f1" : "white",
    "&:hover": {
      backgroundColor: "#e0e7ff",
    },
  }),
  control: (base) => ({
    ...base,
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #6366f1",
      boxShadow: "0px 0px 3px #6366f1",
    },
  }),
};
const options = [
  { value: "sudamerica", label: "Sudamerica" },
  { value: "norteamerica", label: "Norteamerica" },
  { value: "europa", label: "Europa" },
  { value: "asia", label: "Asia" },
  { value: "oceania", label: "Oceania" },
  { value: "africa", label: "Africa" },
  { value: "mundial", label: "Mundial" },
];
function Nav() {
  return (
    <nav className="p-4 bg-white sm:flex">
      <div className="flex justify-between sm:w-1/2 sm:justify-start">
        <div className="flex sm:mr-12">
          <FontAwesomeIcon
            icon={faVirus}
            className="text-4xl text-indigo-500 mr-3"
          />
          <p className="capitalize text-3xl font-medium">cov-data</p>
        </div>
        <span className="flex justify-center items-center">
          <FontAwesomeIcon icon={faMoon} />
        </span>
      </div>
      <div className="sm:w-1/2">
        <Select
          styles={styles}
          placeholder={<div>Seleccionar Continente</div>}
          options={options}
          className="mt-8 sm:mt-0 max-w-md mx-auto sm:ml-auto sm:mr-0"
        />
      </div>
    </nav>
  );
}

export default Nav;
