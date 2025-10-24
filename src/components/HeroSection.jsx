import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToTours = () => {
    const element = document.getElementById('featured-tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Discover the World with Us</h1>
        <p className="hero-subtitle">
          Embark on unforgettable journeys across Africa with expert guides, authentic experiences, and memories that last a lifetime
        </p>
        <div className="hero-buttons">
          <a href="/tours" className="btn btn-primary">Explore Tours</a>
          <button onClick={scrollToTours} className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;