import './styles/Carrucel.css'
import { useState } from 'react';

const Carrucel = ({imagenes}) => {

   
    const [indice , setIndice] = useState(0)

    const siguiente = () =>{
        setIndice((pre) => (pre+1) % imagenes.length)
    }

    const anterior = () => {
        setIndice((pre) => (pre - 1 +imagenes.length) % imagenes.length)
    }

    
    return(
        <>
             <div className='muestras'>
                    <button className='btn_carrusel' onClick={anterior}>
                        <img 
                            src="/public/anterior.png" 
                        />
                    </button>
                        <img src={imagenes[indice]} alt="imagenes" />
                    
                    <button className='btn_carrusel' onClick={siguiente}>
                        <img 
                            src="/public/proximo.png" 
                        />
                    </button>
                </div>
        </>
    )
}

export default Carrucel