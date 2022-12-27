import React, {useState} from 'react'
import Footer from '../components/Footer'
import Header from '../components/lista_de_tareas/Header'
import NavBar from '../components/Navbar'
import FormularioTareas from '../components/lista_de_tareas/FormularioTareas'

const ListaTareasPage = () => {
  const[tareas, cambiarTareas] = useState(
    [
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
  console.log(tareas);
  return (
    <>
        <NavBar/>
        <div className="contenedor">
          <Header/>
          <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
       
        </div>
        <Footer/>

    </>
  )
}

export default ListaTareasPage