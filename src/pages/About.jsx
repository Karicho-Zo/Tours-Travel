import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Mwikali",
      role: "Founder & CEO",
      bio: "With over 15 years in African tourism, Sarah founded Explore Africa to share her passion for the continent's incredible diversity and beauty.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      experience: "15+ years"
    },
    {
      id: 2,
      name: "Michael Okafor",
      role: "Head of Operations",
      bio: "Michael ensures every tour runs smoothly with his expertise in logistics and his deep knowledge of African destinations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      experience: "12+ years"
    },
    {
      id: 3,
      name: "Amara Diop",
      role: "Tour Director",
      bio: "Amara designs our tour itineraries, drawing from her extensive experience across Africa and her commitment to sustainable tourism.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      experience: "10+ years"
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Wildlife Specialist",
      bio: "James is our wildlife expert, ensuring our safari experiences are both educational and respectful to Africa's precious wildlife.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      experience: "8+ years"
    }
  ];

  const values = [
    {
      icon: "🌍",
      title: "Sustainable Tourism",
      description: "We are committed to responsible travel that preserves Africa's natural beauty and supports local communities."
    },
    {
      icon: "🤝",
      title: "Authentic Experiences",
      description: "We believe in connecting travelers with genuine African cultures and creating meaningful interactions."
    },
    {
      icon: "⭐",
      title: "Excellence",
      description: "Every detail of our tours is carefully crafted to ensure exceptional quality and unforgettable memories."
    },
    {
      icon: "🛡️",
      title: "Safety First",
      description: "The safety and well-being of our travelers is our top priority throughout every journey."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <h1>About Explore Africa</h1>
          <p>Discover our story and meet the passionate team behind your African adventure</p>
        </div>
      </div>

      {/* Company Story Section */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="African landscape" />
            </div>
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Explore Africa began as a dream to showcase the incredible diversity and beauty of the African continent. Our founder, Dr. Sarah Mwikali, grew up in Kenya and witnessed firsthand how tourism could transform communities while preserving cultural heritage.
              </p>
              <p>
                What started as small group safaris has grown into a comprehensive tour company offering authentic experiences across Africa. We work closely with local communities, conservation organizations, and cultural experts to create tours that are not only memorable but also sustainable and responsible.
              </p>
              <p>
                Today, we operate tours in over 10 African countries, from the pyramids of Egypt to the wildlife of the Serengeti, from the markets of Marrakech to the beaches of Cape Town. Every journey with us is an opportunity to discover, learn, and contribute to the preservation of Africa's natural and cultural treasures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To create transformative travel experiences that connect people with Africa's rich cultures, breathtaking landscapes, and incredible wildlife, while promoting sustainable tourism practices that benefit local communities and preserve natural heritage for future generations.
              </p>
            </div>
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>
                To be the leading provider of authentic African travel experiences, setting the standard for responsible tourism and cultural exchange while inspiring travelers to become advocates for Africa's conservation and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="team-intro">
            Our passionate team of travel experts, local guides, and conservation specialists work together to create unforgettable African experiences.
          </p>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-avatar">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-experience">{member.experience} Experience</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Happy Travelers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Countries Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Tour Options</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;