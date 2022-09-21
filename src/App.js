
import './App.css';
import freeCodeCampLogo from "../src/imagenes/freeCodeCampLogo.png"
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react'
import { AiOutlineInstagram, AiOutlineGithub , AiOutlineTwitter, AiOutlineFacebook }  from "react-icons/ai"

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
        <span>Fernando Sangopanta</span> 
        <span>Software Engennering Student at EPN </span>
        <div className='iconos'>
          <a href='https://www.facebook.com/fernando.sangopanta.714' target='blank' ><AiOutlineFacebook className='icon'></AiOutlineFacebook></a>
          <a href='https://twitter.com/Fernand95410668' target='blank'><AiOutlineTwitter className='icon'></AiOutlineTwitter></a>
          <a href='https://github.com/Fernando473' target='blank'><AiOutlineGithub className='icon'></AiOutlineGithub></a>
          <a href='https://www.instagram.com/jhonfer1999/' target='blank'><AiOutlineInstagram className='icon'></AiOutlineInstagram></a>
        </div>

      </footer>
    </div>

  );
}

export default App;
