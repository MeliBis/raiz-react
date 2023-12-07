import React from 'react'
import '../../styles.css/Clear.css'

const Clear = (props) => {
  return (
    <div 
      className='boton-clear' 
      onClick={props.manejarClick}>
      {props.children}
    </div>
  )
}

export default Clear