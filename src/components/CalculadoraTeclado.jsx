import CalculadoraTecla from "./CalculadoraTecla";

function CalculadoraTeclado() {

  const teclas = [7,8,9,"DEL",4,5,6,"+",1,2,3,"-",".",0,"/","x","RESET","="]

  return (  
    <div className="calculadora__teclado">
      {teclas.map((tecla, index) => (
        <CalculadoraTecla valor={tecla} key={index}/>
      ))}
    </div>
  );
}
 
export default CalculadoraTeclado;