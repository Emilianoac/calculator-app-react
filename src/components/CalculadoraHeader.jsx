const CalculadoraHeader = () => {

  function cambiarTema(e) {
    const temas = ["tema-claro", "tema-oscuro", "tema-neon"]
    const $body = document.querySelector("body")
    for (const tema of temas) {
      e.target.id == tema ? $body.classList.add(tema) : $body.classList.remove(tema) 
    }
  } 

  return (  
    <div className="calculadora__header">
      <h1 className="titulo">Calc</h1>
      <div className="switch-temas">
        <span>THEME</span>
        <div className="switch-temas__opciones">
            <div className="labels">
              <label htmlFor="tema-claro">1</label>
              <label htmlFor="tema-oscuro">2</label>
              <label htmlFor="tema-neon">3</label>
            </div>
            <div className="inputs">
              <input onClick={cambiarTema} type="radio" name="tema-color" id="tema-claro" defaultChecked/>
              <input onClick={cambiarTema} type="radio" name="tema-color" id="tema-oscuro"/>
              <input onClick={cambiarTema} type="radio" name="tema-color" id="tema-neon"/>
            </div>
        </div>
      </div>
    </div>
  );
}
 
export default CalculadoraHeader;