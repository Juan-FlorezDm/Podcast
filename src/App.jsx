  import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import PodcastsSection from './components/PodcastsSection/PodcastsSection';
import TeamSection from './components/TeamSection/TeamSection';
import EventBanner from './components/EventBanner/EventBanner';
import Footer from './components/Footer/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('podcasts');

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <HeroSection />
        
        <div className="content-tabs">
          <button 
            className={`tab-button ${activeTab === 'podcasts' ? 'active' : ''}`}
            onClick={() => setActiveTab('podcasts')}
          >
            Podcasts
          </button>
          <button 
            className={`tab-button ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => setActiveTab('team')}
          >
            Nuestro Equipo
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'podcasts' ? <PodcastsSection /> : <TeamSection />}
          <EventBanner />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;