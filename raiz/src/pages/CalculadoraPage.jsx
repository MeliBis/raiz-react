import meliscriptLogo from '../assets/contador/meliscript.png'
import Botones from '../components/claculadora/Botones'
import Clear from '../components/claculadora/Clear'
import Pantalle from '../components/claculadora/Pantalle'

import '../styles.css/Calculadora.css'


const CalculadoraPage = () => {
  return (
    <div className='App2'>
        <div className="meliscript-logo-contenedor2">
            <img 
                src={meliscriptLogo} 
                alt="meliscript-logo2"
                className='meliscript-logo2' 
                title='meliscript logo' />
                <h2 className='titulo-logo'>meliscript</h2>
        </div>
        <div className="contenedor-calculadora">
        <Pantalle/>
        <div className='fila'>
                <Botones>1</Botones>
                <Botones>2</Botones>
                <Botones>3</Botones>
                <Botones>+</Botones>
            </div>
            <div className='fila'>
                <Botones>4</Botones>
                <Botones>5</Botones>
                <Botones>6</Botones>
                <Botones>-</Botones>

            </div>
            <div className='fila'>
                <Botones>7</Botones>
                <Botones>8</Botones>
                <Botones>9</Botones>
                <Botones>*</Botones>

            </div>
            <div className='fila'>
                <Botones>=</Botones>
                <Botones>0</Botones>
                <Botones>.</Botones>
                <Botones>/</Botones>
            </div>
            <div className='fila'>
                <Clear>Clear</Clear>
            </div>
           
        </div>
    </div>
  )
}

export default CalculadoraPage