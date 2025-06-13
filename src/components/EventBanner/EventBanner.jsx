import React from 'react';
import './EventBanner.css';

const EventBanner = () => {
  return (
    <div className="event-banner">
      <div className="event-content">
        <div className="event-badge">Evento Destacado</div>
        
        <h3 className="event-title">Maratón Anual de Podcasts Educativos</h3>
        
        <div className="event-description">
          <p>Únete a la competencia donde educadores y estudiantes crean podcasts innovadores</p>
          <p className="highlight">¡Grabación en vivo desde el auditorio ETITC!</p>
        </div>
        
        <div className="event-details">
          <div className="detail-item">
            <span className="detail-icon">📅</span>
            <span>15-17 Noviembre 2023</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">⏰</span>
            <span>9:00 AM - 5:00 PM</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <span>Auditorio Principal ETITC</span>
          </div>
        </div>
        
        <div className="event-actions">
          <button className="register-button">Registrarse</button>
          <button className="learn-more-button">Más Información</button>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;