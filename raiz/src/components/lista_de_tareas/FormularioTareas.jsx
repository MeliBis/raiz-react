import React, {useState} from 'react'
import '../../styles.css/TareaFormulario.css'
import { v4 as uuidv4} from 'uuid'

const FormularioTareas = (props) => {

  const [input, setInput] = useState('')

  const manejarCambio= e =>{
    setInput(e.target.value)
    
  }

  const manejarEnvio = e =>{
    e.preventDefault()
    
    const tareaNueva= {
      id: uuidv4(),
      texto: input,
      completado:false
    }
    props.onSubmit(tareaNueva)
  }

  return (
    <form 
          className='tarea-formulario'
          onSubmit={manejarEnvio}
          >
      <input type="text" 
        className='tarea-input'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={manejarCambio}
      
      />
      <button className='tarea-boton'>
        Agregar Tarea
        </button>
    </form>
  )
}

export default FormularioTareas