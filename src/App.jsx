import { useState, useEffect } from "react";
import Info from "./components/Info";
import Mapa from "./components/Mapa";
import Nav from "./components/Nav";

function App() {
  //State con los datos del fetch a la api
  const [data, setData] = useState({});

  //PRIMER FETCH AL CARGAR LA PAGINA
  useEffect(() => {
    const primerFetch = async () => {
      const url = `https://disease.sh/v3/covid-19/countries/ar?strict=true`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setData(resultado);
    };
    primerFetch();
  }, []);

  return (
    <div className="bg-indigo-50 min-h-screen">
      <Nav />
      <div className="px-5 lg:flex lg:gap-8 max-w-screen-2xl mx-auto">
        <Mapa setData={setData} />
        <Info data={data} />
      </div>
    </div>
  );
}

export default App;
