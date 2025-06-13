
import './styles/Plano_uno.css'
import Carrucel from './Carrcuel';

export default function Plano_uno(){

    const img = [
        '/1.jpg',
        '/2.jpg',
        '/3.jpg',
        '/4.jpg'
    ]

    return(
        <div className='Pre'>
            <section className='presentacion'>
                <div className='informacion'>
                    <h1>Podcast</h1>
                    <div className='cen'>
                        <p className='desc'>
                            Esta es una pagina dedicada a Exploración del uso de podcasts en contextos educativos para fortalecer
                            la comunicación y el aprendizaje
                        </p>
                        <div className='pin'>
                            <p className='ETITC'>ETITC</p>
                        </div>
                    </div>
                    <div className='cen'>
                        <p className='num'>
                            
                        </p>
                        <a target='_blank' href="https://www.instagram.com/etitc/"><img src="../../../public/instagram.png" alt="Instagram" className='insta'/></a>
                    </div>
                    
                </div>
                <div className='muestras_fotos'> 
                    <Carrucel imagenes={img}/>
                </div>
            </section>
        </div>
    );
}