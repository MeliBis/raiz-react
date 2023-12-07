import React from 'react'
import '../../styles.css/boton-calculadora.css'

const Botones = (props) => {

const esOperador = valor =>{
    return isNaN(valor) && (valor != '.' && (valor != '='))
}


  return (
    <div 
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
    onClick={()=> props.manejarClick(props.children)}
    >
        {props.children}
    </div>
  )
}

export default Botones