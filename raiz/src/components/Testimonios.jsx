import React from 'react'
import '../styles.css/testimonio.css'

const Testimonios = (props) => {
  return (
    <>
        <h1>Lo que programadores piensan de nosotros</h1>
        <div className=" contenedor-testimonio">
            <div>
              <img 
                src={require(`../assets/testimonio-imgs/testimonio-${props.imagen}.png`)} 
                alt="testimonio Melissa" 
                className='imagen-testimonio' title={props.nombre} />
            </div>
           <div className="contenedor-texto-testimonio">
            <p className='nombre-testimonio'>
              <strong>{props.nombre}</strong> en {props.pais}</p>
            <p className='cargo-testimonio'>
              {props.cargo} en <strong>{props.empresa} </strong></p>
            <p className=" contenedor-texto-testimonio">"{props.testimonio}"</p>
          </div>
        </div>
    </>
  )
}

export default Testimonios