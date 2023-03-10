import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquarePlus} from '@fortawesome/free-solid-svg-icons'


const FormularioTareas = ({tareas, cambiarTareas}) => {
  
  const [inputTarea, cambiarInputTarea] = useState('')

  const handleInput = (e) => {
    cambiarInputTarea(e.target.value)
  }

 const handleSubmit = (e) => {
  e.preventDefault();
  cambiarTareas(
    [
      ...tareas,
      {
        id:3,
        texto: 'Nueva tarea',
        completada: false
      }
    ]
  );
 }
  return (
    
    <form action="" className='formulario-tareas'>
      <input 
      type="text" 
      className='formulario-tareas__input' 
      placeholder='escribe una tarea'
      value={inputTarea}
      onChange={(e) => handleInput(e)}
       />
       <button 
       type='submit'
       className='formulario-tareas__btn'
       >
          <FontAwesomeIcon 
          icon={faSquarePlus} 
          className='formulario-tareas__icono-btn'/>
          
       </button>
    </form>
      
    
  )
}


export default FormularioTareas