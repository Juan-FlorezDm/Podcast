import React from 'react';
import './Footer.css';

const Footer = () => {
  const developers = [
    { name: "Juan Diego Florez", role: "Desarrollador" },
    { name: "Paula Andrea Pulido", role: "Diseñadora UX/UI" },
    { name: "Daniel Santiago Cano ", role: "Desarrollador" },
    { name: "Juan Andres Antolinez ", role: "Desarrollador" }
  ];

  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com/etitc", icon: "/instagram-icon.png" },
    { name: "Facebook", url: "https://facebook.com/etitc", icon: "/facebook-icon.png" },
    { name: "YouTube", url: "https://youtube.com/etitc", icon: "/youtube-icon.png" }
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Sección Información */}
        <div className="footer-section">
          <h3>Podcast ETITC</h3>
          <p>
            Exploración del uso de podcasts en contextos educativos para fortalecer
            la comunicación y el aprendizaje.
          </p>
          <div className="footer-logo">
            <img src="/etitc-logo.png" alt="Logo ETITC" />
          </div>
        </div>

        {/* Sección Desarrolladores */}
        <div className="footer-section">
          <h3>Desarrollado por</h3>
          <ul className="team-list">
            {developers.map((dev, index) => (
              <li key={index}>
                <strong>{dev.name}</strong>
                <span>{dev.role}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sección Contacto */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul className="contact-list">
            <li>
              <i className="icon">📧</i>
              <a href="mailto:podcast@etitc.edu.co">podcast@etitc.edu.co</a>
            </li>
            <li>
              <i className="icon">📱</i>
              <a href="tel:+6011234567">(601) 123 4567</a>
            </li>
            <li>
              <i className="icon">🏛️</i>
              <span>Escuela Tecnológica Instituto Técnico Central</span>
            </li>
            <li>
              <i className="icon">📍</i>
              <span>Bogotá, Colombia</span>
            </li>
          </ul>
        </div>

        {/* Sección Redes Sociales */}
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>© {new Date().getFullYear()} Podcast ETITC. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;