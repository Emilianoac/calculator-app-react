import { useState } from "react";
import { useSelector} from 'react-redux';

function CalculadoraPantalla() {
  const operacion = useSelector((state) => state.calcs.operacion);
  const valorParcial = useSelector((state) => state.calcs.valorParcial);  
  const resultado = useSelector((state) => state.calcs.resultado); 
  const error = useSelector((state) => state.calcs.error); 
  
  return (  
    <div className="calculadora__pantalla">
      <div className={`operacion ${ resultado ? "operacion_finalizada" : "" }`}>
        { operacion && <span>{ operacion }</span>} 
        {!resultado && <span className="valor-parcial">{ valorParcial }</span>}
      </div>

      {resultado ?<div className={`resultado ${error ? "error" : ""}`}>{ resultado }</div> : null}
    </div>
  );
}
 
export default CalculadoraPantalla;