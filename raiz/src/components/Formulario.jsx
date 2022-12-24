import React, {useState} from 'react'

const Formulario = () => {
  const [cuenta, cambiarCuenta] = useState(0)
    
    const incrementarCuenta = (cantidad) => {
        cambiarCuenta(cuenta + cantidad);
    }
    const decrementarCuenta = (cantidad) => {
        cambiarCuenta(cuenta - cantidad);
    }

    return (
    <>
        <div>
            <h1>Contador: </h1>
            <button onClick={() => incrementarCuenta(5)}>incrementar</button>
            <button onClick={() => decrementarCuenta(3)}>disminuir</button>
        </div>
   


    </>
  )
}

export default Formulario;