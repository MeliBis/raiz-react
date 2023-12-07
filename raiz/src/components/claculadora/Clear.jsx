import React from 'react'
import '../../styles.css/Clear.css'
const Clear = (props) => {
  return (
    <div className='boton-clear' >
        {props.children}
    </div>
  )
}

export default Clear