import React from "react";
import { AiOutlineInstagram, AiOutlineGithub , AiOutlineTwitter, AiOutlineFacebook }  from "react-icons/ai"
import "../estilos/Footer.css"

const Footer = () =>    {
    return(
        <footer> 
            <span>Fernando Sangopanta</span> 
            <span>Software Engennering Student at EPN </span>
            <div className='iconos'>
            <div className="container-icon">
                <a href='https://www.facebook.com/fernando.sangopanta.714' target='blank' ><AiOutlineFacebook className='icon'></AiOutlineFacebook></a>
                <a href='https://twitter.com/Fernand95410668' target='blank'><AiOutlineTwitter className='icon'></AiOutlineTwitter></a>
                <a href='https://github.com/Fernando473' target='blank'><AiOutlineGithub className='icon'></AiOutlineGithub></a>
                <a href='https://www.instagram.com/jhonfer1999/' target='blank'><AiOutlineInstagram className='icon'></AiOutlineInstagram></a>
            </div>

            </div>
      </footer>
    )
}

export default Footer;