import React from "react";
import "../estilos/Contador.css"


const Contador = ({ numeroClicks }) => {
    return (
        <div className="contador">
            {numeroClicks}
        </div>
    )
}

export default Contador;