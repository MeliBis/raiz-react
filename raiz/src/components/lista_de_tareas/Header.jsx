import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="">

    <div className='header'>
        <div className="header__titulo">
          <p>Lista de tareas</p>
        </div>
    <button className='header__boton'>
        No mostrar tareas completadas
        <FontAwesomeIcon icon={faEyeSlash} className='header__icono-boton'/>
    </button>
    </div>
    </div>
    
  )
}

export default Header