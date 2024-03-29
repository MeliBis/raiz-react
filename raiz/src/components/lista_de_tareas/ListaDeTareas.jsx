import React, { useState } from 'react'
import FormularioTareas from './FormularioTareas'
import '../../styles.css/ListaDeTareas.css'
import Tarea from './Tarea'


const ListaDeTareas = () => {
    const [tareas, setTareas] = useState([])

    const agregarTarea =( tarea )=>{
      if( tarea.texto.trim()){
        tarea.texto = tarea.texto.trim()

        const tareasActualizadas = [tarea, ...tareas]
        setTareas(tareasActualizadas)
      }
    }

const eliminarTarea =  id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
}
const completarTarea = id =>{
    const tareasActualizadas = tareas.map(tarea => {
        if (tarea.id === id){
            tarea.completado = !tarea.completado
        }
        return tarea
    })
    setTareas(tareasActualizadas)
}
  return (
    <>
        <FormularioTareas onSubmit={agregarTarea}/>
        <div className='tareas-lista-contenedor'>
            {
                tareas.map((tarea)=>
                <Tarea 
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.texto}
                    completado={tarea.completado}
                    completarTarea={completarTarea}
                    eliminarTarea={eliminarTarea}
                />
                )
            }
        </div>
    </>
  )
}

export default ListaDeTareas