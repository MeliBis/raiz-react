import React from 'react'
import '../../styles.css/Tarea.css'
import { IoMdCloseCircleOutline } from "react-icons/io";

const Tarea = ({id, texto, completado, completarTarea, eliminarTarea}) => {
  return (
    <div className={completado ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        <div 
        className="tarea-texto"
        onClick={() => completarTarea(id)}
        >
            {texto}
        </div>
        <div 
        className="tarea-contenedor-icono"
        onClick={()=> eliminarTarea(id)}
        >
            <IoMdCloseCircleOutline  className='tarea-icono'/>
        </div>
    </div>
  )
}

export default Tarea