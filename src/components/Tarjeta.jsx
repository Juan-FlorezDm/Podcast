import './styles/Tarjeta.css'

const Tarjeta =({img, Descripcion, link}) =>{
    return (
        <>
            <div className='contenedor'>
                <div className='capa-blur'></div>
                <div className='contenido'>
                        <img src={img} alt={Descripcion}/>
                        <button><a target='_blank' href={link}>Reproducir</a></button>     
                </div>
            </div>
            
        </>
    )
}

export default Tarjeta