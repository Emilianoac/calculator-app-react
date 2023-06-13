import { createSlice } from "@reduxjs/toolkit";

export const calcsSlice = createSlice({
  name: "calculo",
  initialState: {
    valorParcial: "0",
    operacion: [],
    resultado: "",
    error: false,
  },
  reducers: {
    operaciones: (state, action) => {
      const tecla = action.payload
      const operadores = ["x", "-", "+", "/"]
      
      // Accion tecla 0
      if(tecla === 0) {
        if (!state.valorParcial.startsWith("0") ) {
          state.valorParcial += tecla
        } else if (state.valorParcial.length >= 2) {
          state.valorParcial += tecla
        }
      }

      // Accion teclas numericas
      if( !isNaN(tecla) && tecla != 0 ) {
        if (!state.valorParcial.startsWith("0")) {
          state.valorParcial += tecla
        } else if (state.valorParcial.includes("0.")) {
          state.valorParcial += tecla
        } else {
          state.valorParcial = tecla.toString()
        }
        
        if ( state.resultado ) {
          limpiarDatos()
          state.valorParcial += tecla
        }
      }

      // Accion tecla punto
      if(tecla === "." &&  !state.valorParcial.includes('.')) {
        state.valorParcial += tecla
      }

      // Accion tecla RESET
      if (tecla === "RESET") {
        limpiarDatos()
      }

      //Accion tecla DEL
      if(tecla === "DEL") {
        const lastIndex = state.operacion.length - 1
        const ultimoValorOperacion = state.operacion[lastIndex]

        if(state.operacion.length && !state.valorParcial) {
          let ultimoValorArray = ultimoValorOperacion.split("")
          ultimoValorArray.pop()
          state.operacion[lastIndex] = ultimoValorArray.join("")
          if (ultimoValorOperacion === "") state.operacion.pop()
        } else {
          let valorParcialArray = state.valorParcial.split("")
          
          if(valorParcialArray.length == 1) {
            state.valorParcial = "0"
          } else {
            valorParcialArray.pop()
            state.valorParcial = valorParcialArray.join("") 
          }
        }

        if(state.resultado) {
          limpiarDatos()
        }
      }

      // Acciones teclas operadores
      if(operadores.includes(tecla) ) {
        const ultimaPosicion = state.operacion[state.operacion.length - 1]
        
        if(operadores.includes(ultimaPosicion) && state.valorParcial) {
          state.operacion.push(state.valorParcial, tecla)
          state.valorParcial = ""
        } else if( state.valorParcial.length && isNaN(ultimaPosicion) )  {
          state.operacion.push(state.valorParcial, tecla)
          state.valorParcial = ""
        }
      }
    
      // Accion tecla igual
      if(tecla === '=' && state.valorParcial !== "." && state.valorParcial.length ){
        state.operacion.push(state.valorParcial)
        try {
          const letras = /[a-zA-Z&&[^xX]]+/

          if (letras.test(state.operacion)) {
            throw new Error
          }
          else  {
            state.resultado = eval(
              state.operacion.map(operador => {
                if (operador === "x") {
                  operador = "*"
                }
                return operador
              }).join(" ")
            )
          }

          if ( isNaN(state.resultado) ) {
            throw new Error
          }
          else if (state.resultado === 0) {
            state.resultado = '0'
          }

        } catch (error) {
          state.resultado = "Error"
          state.error = true
        }
      }
        
      function limpiarDatos() {
        state.valorParcial = "0"
        state.operacion = []
        state.resultado = ""
        state.errorCalculo = false
      }
    }
  }
})

export const {operaciones} = calcsSlice.actions

export default calcsSlice.reducer