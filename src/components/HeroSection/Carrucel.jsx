import React, { useState, useEffect } from 'react';
import './Carrucel.css';

const Carrucel = ({ imagenes }) => {
  const [indice, setIndice] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-avance cada 5 segundos cuando no está hover
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && imagenes.length > 0) {
        setIndice((prev) => (prev + 1) % imagenes.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, imagenes.length]);

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div 
      className="carrucel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carrucel-slides">
        {imagenes.map((imagen, i) => (
          <div 
            key={i}
            className={`slide ${i === indice ? 'active' : ''}`}
            style={{ backgroundImage: `url(${imagen})` }}
            aria-hidden={i !== indice}
          />
        ))}
      </div>
      
      <button 
        className="carrucel-btn prev"
        onClick={anterior}
        aria-label="Imagen anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
        </svg>
      </button>
      
      <button 
        className="carrucel-btn next"
        onClick={siguiente}
        aria-label="Siguiente imagen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
        </svg>
      </button>
      
      <div className="carrucel-dots">
        {imagenes.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === indice ? 'active' : ''}`}
            onClick={() => setIndice(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrucel;