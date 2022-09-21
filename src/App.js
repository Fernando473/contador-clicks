
import './App.css';
import freeCodeCampLogo from "../src/imagenes/freeCodeCampLogo.png"
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react'
import { FaBeer  } from "react-icons/fa"

function App() {

  const [numeroClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numeroClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'> 
        <img className='freecodecamp-logo' src={freeCodeCampLogo}  alt="Logo de freecodecamp" />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numeroClicks={numeroClicks} >
        </Contador>
        <Boton
          texto="Click" 
          esBotonDeClick={true}
          manejarClick={manejarClick} >
        </Boton>
        <Boton
          texto="Reiniciar" 
          esBotonDeClick={false}
          manejarClick={reiniciarContador} >
        </Boton>
      </div>
      <footer> 
        <FaBeer ></FaBeer >
        <span>Fernando Sangopanta</span> 
        <span>Software Engennering Student </span>
        <FaBeer ></FaBeer >
      </footer>
    </div>

  );
}

export default App;
