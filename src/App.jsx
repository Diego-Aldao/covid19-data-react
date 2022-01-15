import { useState } from "react";
import Info from "./components/Info";
import Mapa from "./components/Mapa";
import Nav from "./components/Nav";

function App() {
  const [data, setData] = useState({});
  return (
    <div className="bg-indigo-50">
      <Nav />
      <div className="px-5 lg:flex lg:gap-8">
        <Mapa setData={setData} />
        <Info data={data} />
      </div>
    </div>
  );
}

export default App;
