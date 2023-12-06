import React from 'react'
import meliscript from '../assets/contador/meliscript.png'
import '../styles.css/contador.css'
import Button from '../components/contador/Button'
import Contador from '../components/contador/Contador'
import { useState } from 'react'

const ContadorPages = () => {
const [numClics, setNumClics]= useState(0)

const manejarClick =()=>{
    setNumClics(numClics +1);
}
const reiniciar=()=>{
    setNumClics(0);
}

  return (
    <div className='App'>
        <div className="meliscript-logo-contenedor">
            <img src={meliscript} alt="logo meliscript" title='logo meliscript' className='meliscript-logo'/>   
            <h2 className='titulo-logo'>meliscript</h2>
        </div>
     
        <div className="contenedor-principal">
{/*             <h2 className="titulo-pagina">Contadores</h2>
 */}            
            <Contador numClics={numClics}/>
            <Button
            texto='Click'
            esBotonDeClick={true}
            manejarClick={manejarClick}/>
            <Button
            texto='Reiniciar'
            esBotonDeClick={false}
            manejarClick={reiniciar}
            />
        </div>
    </div>
  )
}

export default ContadorPages