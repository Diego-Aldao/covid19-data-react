import Mapa from "./components/Mapa";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-indigo-50">
      <Nav />
      <div className="contenedor px-5">
        <Mapa />
      </div>
    </div>
  );
}

export default App;
