import React from 'react'
import '../../styles.css/boton.css'

const button = ({texto, esBotonDeClick, manejarClick}) => {
  return (
    <div>
        <button className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
        onClick={manejarClick}
        >
            {texto}
        </button>
    </div>
  )
}

export default button