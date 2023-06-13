import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { operaciones } from "../redux/calcs";

function CalculadoraTecla ({valor}) {
  const dispatch = useDispatch()

  function accionesCalculadora(valor) {
    console.log(valor);
  };

  let [error, setError] =  useState(false);

  return (  
    <button 
      className={`tecla ${error ? "error" : ""} `}
      onClick={() => dispatch(operaciones(valor))}>
      { valor }
    </button>
  );
}


 
export default CalculadoraTecla;