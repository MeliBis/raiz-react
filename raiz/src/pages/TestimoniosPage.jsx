import React from 'react'
import Testimonios from '../components/Testimonios'

const TestimoniosPage = () => {
  return (
    <>
        <Testimonios 
        nombre='Melissa Barrios'
        pais='Mexico'
        imagen='meli'
        cargo='ful Stack developer'
        empresa= 'kamtali'
        testimonio= 'le gusta aprender nuevos temas en meliscript'
        />
        <Testimonios 
        nombre='Meli Barrios'
        pais='Mexico'
        imagen='meliverde'
        cargo='ful Stack developer'
        empresa= 'kamtali'
        testimonio= 'le gusta aprender nuevos temas en meliscript'
        />
     
   
    </>
  )
}

export default TestimoniosPage