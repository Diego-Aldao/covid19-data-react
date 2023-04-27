import { useState, useEffect } from "react";
import Info from "./components/Info";
import Mapa from "./components/Mapa";
import Nav from "./components/Nav";
import useTema from "./hooks/useTema";

function App() {
  //custom hook
  const { tema, toggleTema } = useTema();

  //State con los datos del fetch a la api
  const [data, setData] = useState({});
  const [valor, setValor] = useState("");

  const [cargando, setCargando] = useState(true);

  //PRIMER FETCH AL CARGAR LA PAGINA
  useEffect(() => {
    const primerFetch = async () => {
      const url = `https://disease.sh/v3/covid-19/countries/ar?strict=true`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setData(resultado);
      setCargando(!cargando);
    };
    primerFetch();
  }, []);

  return (
    <div className={`${tema}`}>
      <div className="bg-indigo-50 dark:bg-tema-oscuro min-h-screen pb-10">
        <Nav setValor={setValor} toggleTema={toggleTema} tema={tema} />
        <div className="px-5 lg:flex lg:gap-8 max-w-screen-2xl mx-auto">
          <Mapa
            setData={setData}
            valor={valor}
            setValor={setValor}
            setCargando={setCargando}
          />
          <Info data={data} cargando={cargando} />
        </div>
      </div>
    </div>
  );
}

export default App;
