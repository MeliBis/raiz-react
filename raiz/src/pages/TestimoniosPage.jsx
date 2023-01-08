import React from 'react'
import NavBar from '../components/Navbar'
import Testimonios from '../components/Testimonios'
import '../styles.css/testimonio.css'

const TestimoniosPage = () => {
  return (
    <>
    <NavBar/>
    <div className="app">
      <div className='contenedor-principal'>
        <h1>Esto es lo que programadores dicen de nosotros</h1>
        <Testimonios/>
      </div>
    </div>
   
    </>
  )
}

export default TestimoniosPage