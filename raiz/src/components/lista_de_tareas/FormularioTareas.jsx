import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fa-square-plus} from '@fortawesome/free-solid-svg-icons'


const FormularioTareas = () => {
  return (
    <>
    <form action="" className='formulario-tareas'>
      <input 
      type="text" 
      className='formulario-tareas__input' 
      placeholder='escribe una tarea'
       />
       <button 
       type='submit'
       className='formulario-tareas__btn'>
          <FontAwesomeIcon icon={faSquarePlus} 
          className='formulario-tareas__icono-btn/>
       </button>
    </form>
        
    </>
  )
}

export default FormularioTareas