import React, {useState} from 'react'
import Header from '../components/lista_de_tareas/Header'
import FormularioTareas from '../components/lista_de_tareas/FormularioTareas'
import meliscriptLogo from '../assets/contador/meliscript.png'
import '../styles.css/App.css'
import ListaDeTareas from '../components/lista_de_tareas/ListaDeTareas'

const ListaTareasPage = () => {
  const[tareas, cambiarTareas] = useState(
   /*  [
      {
        id:1,
        texto: 'Lavar la ropa',
        completada:false
      },
      {
        id:2,
        texto: 'Comer',
        completada:false
      },
    ]
    );
  console.log(tareas); */)
  return (
    <>
        
        <div className="contenedor">
          <div className="logo">
            <img 
                src={meliscriptLogo} alt=""  
                className='meliscript-logo'/>
            <h2 className='logo-titulo'>meliscript</h2>
          </div>
          <div className="tareas-lista-principal">
            <h1>Mis tareas</h1> 
            <ListaDeTareas/>
          </div>
        </div>
    </>
  )
}

export default ListaTareasPage