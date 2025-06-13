import React from 'react';
import './PodcastCard.css';

const PodcastCard = ({ img, title, description, link }) => {
  return (
    <div className="podcast-card">
      <div className="card-image">
        <img src={img} alt={title} loading="lazy" />
        <div className="card-overlay"></div>
      </div>
      
      <div className="card-content">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="play-button"
        >
          Reproducir
        </a>
      </div>
    </div>
  );
};

export default PodcastCard;