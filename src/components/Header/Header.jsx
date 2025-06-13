import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <div className="logo-container">
                <img src="/etitc-logo.png" alt="ETITC Podcast" />
                <h1>Podcast ETITC</h1>
            </div>
            <nav className="main-nav">
                <a href="#inicio">Inicio</a>
                <a href="#podcasts">Podcasts</a>
                <a href="#eventos">Eventos</a>
            </nav>
        </header>
    );
};

export default Header;
