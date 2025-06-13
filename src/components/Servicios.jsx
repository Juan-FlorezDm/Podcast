import Carrucel from "./Carrcuel"
import './styles/Servicios.css'
import Tarjeta from "./Tarjeta"


export default function Servicios (){

     const productos = [
          '/per_1.avif',
          '/per_2.avif',
          '/per_3.jpg',
          '/per_4.jpeg',
      ]

    return(
        <>
            <section>
                <div className='Agendamiento'>
                    <h2>Podcast</h2>
                    <div className='Citas'>
                       <Tarjeta 
                            img={'../../public/pd_1.jpg'}
                            Descripcion={'Podcast 1'}
                            link={'https://www.youtube.com/'}
                       />
                       <Tarjeta 
                            img={'../../public/pd_2.webp'}
                            Descripcion={'Podcast 2'}
                            link={'https://www.youtube.com/'}
                       />
                       <Tarjeta 
                            img={'../../public/pd_3.webp'}
                            Descripcion={'Podcast 3'}
                            link={'https://www.youtube.com/'}
                       />
                       <Tarjeta 
                            img={'../../public/pd_4.png'}
                            Descripcion={'Podcast 4'}
                            link={'https://www.youtube.com/'}
                       />
                       <Tarjeta 
                            img={'../../public/pd_5.jpg'}
                            Descripcion={'Podcast 5'}
                            link={'https://www.youtube.com/'}
                       />
                       <Tarjeta 
                            img={'../../public/pd_6.jpg'}
                            Descripcion={'Podcast 6'}
                            link={'https://www.youtube.com/'}
                       />
                       <Tarjeta 
                            img={'../../public/pd_7.jpg'}
                            Descripcion={'Podcast 7'}
                            link={'https://www.youtube.com/'}
                       />
                       <Tarjeta 
                            img={'../../public/pd_8.png'}
                            Descripcion={'Podcast 8'}
                            link={'https://www.youtube.com/'}
                       />
                    </div>
                </div>
                <h2 className="PR">Representantes</h2>
                <div className="CarruselContainer">
                     <Carrucel imagenes={productos}/>
                </div>
            </section>
        </>
    )
}