import React from 'react';
import './PodcastsSection.css';  // Importación actualizada
import PodcastCard from './PodcastCard';
import TeamSection from '../TeamSection/TeamSection';

const PodcastsSection = () => {
  const podcasts = [
      {
        id: 1,
        img: '/pd_1.jpg',
        title: 'El Futuro de los Podcasts Educativos',
        description: 'Explorando cómo los podcasts están revolucionando la enseñanza',
        link: 'https://www.youtube.com/'
      },
      {
        id: 2,
        img: '/pd_2.webp',
        title: 'Guía para Crear tu Primer Podcast',
        description: 'Pasos esenciales desde la idea hasta la publicación',
        link: 'https://www.youtube.com/'
      },
      {
        id: 3,
        img: '/pd_3.webp',
        title: 'Los Mejores Micrófonos para Podcasters',
        description: 'Comparativa de equipos para cada presupuesto',
        link: 'https://www.youtube.com/'
      },
      {
        id: 4,
        img: '/pd_4.png',
        title: 'Cómo Monetizar tu Podcast Educativo',
        description: 'Estrategias para generar ingresos con tu contenido',
        link: 'https://www.youtube.com/'
      },
      {
        id: 5,
        img: '/pd_5.jpg',
        title: 'Edición de Audio para Principiantes',
        description: 'Herramientas y técnicas básicas para sonido profesional',
        link: 'https://www.youtube.com/'
      },
      {
        id: 6,
        img: '/pd_6.jpg',
        title: 'Plataformas para Publicar tu Podcast',
        description: 'Spotify, Apple Podcasts y más: ¿cuál elegir?',
        link: 'https://www.youtube.com/'
      },
      {
        id: 7,
        img: '/pd_7.jpg',
        title: 'Historias de Éxito en Podcasting Educativo',
        description: 'Casos inspiradores que marcaron la diferencia',
        link: 'https://www.youtube.com/'
      },
      {
        id: 8,
        img: '/pd_8.png',
        title: 'El Poder del Storytelling en Podcasts',
        description: 'Cómo cautivar a tu audiencia con narrativas efectivas',
        link: 'https://www.youtube.com/'
      }
  ];

  return (
    <section className="podcasts-section">
      <div className="section-header">
        <h2>Nuestros Podcasts</h2>
        <p>Descubre nuestro contenido educativo</p>
      </div>
      
      <div className="podcasts-grid">
        {podcasts.map(podcast => (
          <PodcastCard 
            key={podcast.id}
            img={podcast.img}
            title={podcast.title}
            description={podcast.description}
            link={podcast.link}
          />
        ))}
      </div>
    </section>
  );
};

export default PodcastsSection;