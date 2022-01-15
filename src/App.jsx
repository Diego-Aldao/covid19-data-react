import Info from "./components/Info";
import Mapa from "./components/Mapa";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-indigo-50">
      <Nav />
      <div className="px-5 lg:flex lg:gap-8">
        <Mapa />
        <Info />
      </div>
    </div>
  );
}

export default App;
