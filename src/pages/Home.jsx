import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import TourCard from '../components/TourCard';
import TourModal from '../components/TourModal';
import Testimonials from '../components/Testimonials';
import { FaShieldAlt, FaStar, FaUsers } from 'react-icons/fa';
import './Home.css';

// Using a reliable placeholder image service
const Tour1 = "https://via.placeholder.com/400x300/e0e0e0/666?text=Morocco+Desert+Adventure";

const Home = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
    document.body.style.overflow = 'unset';
  };
  // Sample data for featured tours
  const featuredTours = [
    {
      id: 1,
      title: "Safari Adventure Kenya",
      destination: "Masai Mara, Kenya",
      duration: "5 Days",
      price: "$1,299",
      image: '/assets/Mara.jpg',
      description: "Experience the Great Migration and witness Africa's wildlife up close in the famous Masai Mara."
    },
    {
      id: 2,
      title: "Cape Town Explorer",
      destination: "Cape Town, South Africa",
      duration: "7 Days",
      price: "$1,899",
      image: '/assets/Cape.jpg',
      description: "Discover the beauty of Cape Town with Table Mountain, wine tours, and coastal adventures."
    },
    {
      id: 3,
      title: "Pyramids & Nile Cruise",
      destination: "Egypt",
      duration: "8 Days",
      price: "$2,199",
      image: '/assets/Nile.jpg',
      description: "Journey through ancient Egypt visiting pyramids, temples, and cruising the historic Nile River."
    }
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United States",
      rating: 5,
      text: "Absolutely incredible experience! The safari in Kenya exceeded all our expectations. Our guide was knowledgeable and the accommodations were top-notch.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Canada",
      rating: 5,
      text: "Cape Town was breathtaking! From Table Mountain to the wine regions, every moment was perfectly planned. Highly recommend Explore Africa!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "United Kingdom",
      rating: 5,
      text: "The Egypt tour was a dream come true. Seeing the pyramids and cruising the Nile was magical. The attention to detail was impeccable.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="home">
      <HeroSection />

      {/* Featured Tours Section */}
      <section id="featured-tours" className="featured-tours">
        <div className="container">
          <h2 className="section-title">Featured Tours</h2>
          <p className="section-subtitle">Discover our most popular African adventures</p>
          <div className="tours-grid">
            {featuredTours.map(tour => (
              <TourCard
                key={tour.id}
                tour={tour}
                onViewDetails={openModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Reliable & Trusted</h3>
              <p>With over 10 years of experience, we've built a reputation for delivering exceptional travel experiences across Africa.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaStar />
              </div>
              <h3>Affordable Luxury</h3>
              <p>We offer premium experiences at competitive prices, ensuring you get the best value for your African adventure.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Expert Local Guides</h3>
              <p>Our knowledgeable local guides provide authentic insights and ensure you experience the real Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Explore Africa?</h2>
            <p>Start your unforgettable journey today with our expert-guided tours</p>
            <a href="/tours" className="btn btn-primary">View All Tours</a>
          </div>
        </div>
      </section>

      {/* Tour Modal for Home page featured tours */}
      <TourModal
        tour={selectedTour}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Home;