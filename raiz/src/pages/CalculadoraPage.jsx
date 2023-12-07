import meliscriptLogo from '../assets/contador/meliscript.png'
import Botones from '../components/claculadora/Botones'
import Clear from '../components/claculadora/Clear'
import Pantalle from '../components/claculadora/Pantalle'
import { useState } from 'react'
import { evaluate } from 'mathjs'

import '../styles.css/Calculadora.css'


const CalculadoraPage = () => {

    const [input, setInput]= useState('')

    const agregarInput= val =>{
        setInput(input + val)
    }
    const calcularResultado=()=>{
        if(input){
            setInput(evaluate(input))
        }else{
            alert('por favor ingresa valores para realizar los calculos')
        }

    }
  return (
    <div className='App2'>
        <div className="meliscript-logo-contenedor2">
    |         <img 
                src={meliscriptLogo} 
                alt="meliscript-logo2"
                className='meliscript-logo2' 
                title='meliscript logo' />
                <h2 className='titulo-logo'>meliscript</h2>
        </div>
        <div className="contenedor-calculadora">
        <Pantalle input={input}/>
        <div className='fila'>
                <Botones manejarClick={agregarInput}>1</Botones>
                <Botones manejarClick={agregarInput}>2</Botones>
                <Botones manejarClick={agregarInput}>3</Botones>
                <Botones manejarClick={agregarInput}>+</Botones>
            </div>
            <div className='fila'>
                <Botones manejarClick={agregarInput}>4</Botones>
                <Botones manejarClick={agregarInput}>5</Botones>
                <Botones manejarClick={agregarInput}>6</Botones>
                <Botones manejarClick={agregarInput}>-</Botones>

            </div>
            <div className='fila'>
                <Botones manejarClick={agregarInput}>7</Botones>
                <Botones manejarClick={agregarInput}>8</Botones>
                <Botones manejarClick={agregarInput}>9</Botones>
                <Botones manejarClick={agregarInput}>*</Botones>

            </div>
            <div className='fila'>
                <Botones manejarClick={calcularResultado}>=</Botones>
                <Botones manejarClick={agregarInput}>0</Botones>
                <Botones manejarClick={agregarInput}>.</Botones>
                <Botones manejarClick={agregarInput}>/</Botones>
            </div>
            <div className='fila'>
                <Clear manejarClick={()=> setInput('')}>
                    Clear
                    </Clear>
            </div>
           
        </div>
    </div>
  )
}

export default CalculadoraPage