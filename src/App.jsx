import CalculadoraHeader from "./components/CalculadoraHeader";
import CalculadoraPantalla from "./components/CalculadoraPantalla";
import CalculadoraTeclado from "./components/CalculadoraTeclado";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="calculadora">
          <CalculadoraHeader/>
          <CalculadoraPantalla/>
          <CalculadoraTeclado/>
        </div>
      </div>
    </div>
  );
}

export default App;
