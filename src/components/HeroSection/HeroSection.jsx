import React from 'react';
import './HeroSection.css';
import Carrucel from './Carrucel';

export default function HeroSection() {
  const carouselImages = [
        '/1.jpg',
        '/2.jpg',
        '/3.jpg',
        '/4.jpg'
  ];

  return(
    <div className='hero-section'>
      <div className='hero-content'>
        <div className='hero-text'>
          <h1>Podcast Educativo</h1>
          <div className='description-container'>
            <p className='description'>
              Exploración del uso de podcasts en contextos educativos para fortalecer
              la comunicación y el aprendizaje
            </p>
            <div className='institution-badge'>
              <span className='institution-name'>ETITC</span>
            </div>
          </div>
          <div className='social-link'>
            <a 
              target='_blank' 
              href="https://www.instagram.com/etitc/" 
              rel="noopener noreferrer"
              aria-label="Visita nuestro Instagram"
            >
              <img 
                src="/instagram.png" 
                alt="Instagram ETITC" 
                className='social-icon'
              />
            </a>
          </div>
        </div>
        
        <div className='hero-carousel'> 
          <Carrucel imagenes={carouselImages} />
        </div>
      </div>
    </div>
  );
}