import React from 'react'

const Testimonios = () => {
  return (
    <>
        <div className=" contenedor-testimonio">
            <div>
              <img 
                src={require("../assets/testimonio-imgs/photo_2022-10-31_13-08-11.jpg")} 
                alt="testimonio Melissa" 
                className='imagen-testimonio' />
            </div>
           <div className="contenedor-texto-testimonio">
            <p className='nombre-testimonio'>Melissa Barrios en México</p>
            <p className='cargo-testimonio'>Administradora en Kamtali - Programadora Full Stack - Community Manager</p>
            <p className="contenedor-texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut eligendi debitis consequuntur. Modi voluptate molestias non inventore accusamus? Minima in illum porro dolore error.</p>
          </div>
        </div>
    </>
  )
}

export default Testimonios