import React, { useState } from 'react';
import './TourModal.css';

const TourModal = ({ tour, isOpen, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    departureDate: ''
  });

  if (!isOpen || !tour) return null;

  // Extended tour data with additional details
  const extendedTourData = {
    ...tour,
    gallery: [
      tour.image,
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome",
        description: "Arrive at your destination and enjoy a welcome dinner with traditional cuisine. Meet your fellow travelers and guide."
      },
      {
        day: 2,
        title: "Cultural Immersion",
        description: "Explore local markets, visit historical sites, and experience authentic cultural activities with local communities."
      },
      {
        day: 3,
        title: "Adventure Activities",
        description: "Embark on thrilling adventures including wildlife safaris, nature walks, or water activities depending on your tour."
      },
      {
        day: 4,
        title: "Scenic Exploration",
        description: "Discover breathtaking landscapes, natural wonders, and hidden gems that make your destination unique."
      },
      {
        day: 5,
        title: "Leisure & Reflection",
        description: "Relax and reflect on your journey. Optional activities or free time to explore at your own pace."
      }
    ],
    included: [
      "Professional English-speaking guide",
      "All accommodation as per itinerary",
      "All meals (breakfast, lunch, dinner)",
      "All entrance fees and activities",
      "Transportation in air-conditioned vehicles",
      "Bottled water and snacks",
      "Travel insurance",
      "Airport transfers"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Optional activities",
      "Gratuities for guides and drivers",
      "Alcoholic beverages"
    ],
    reviews: [
      {
        id: 1,
        name: "Jennifer Martinez",
        location: "California, USA",
        rating: 5,
        date: "March 2024",
        comment: "Absolutely incredible experience! The safari exceeded all expectations. Our guide was knowledgeable and the accommodations were top-notch. Highly recommend!",
        helpful: 12
      },
      {
        id: 2,
        name: "Robert Thompson",
        location: "London, UK",
        rating: 5,
        date: "February 2024",
        comment: "Perfect organization and amazing wildlife sightings. The attention to detail was impeccable. Will definitely book another tour with Explore Africa.",
        helpful: 8
      },
      {
        id: 3,
        name: "Maria Santos",
        location: "Toronto, Canada",
        rating: 4,
        date: "January 2024",
        comment: "Wonderful cultural experience and beautiful landscapes. The local community interactions were particularly meaningful. Great value for money!",
        helpful: 15
      }
    ],
    availability: {
      nextDeparture: "2024-04-15",
      spotsLeft: 4,
      totalSpots: 12,
      popular: true
    }
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % extendedTourData.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + extendedTourData.gallery.length) % extendedTourData.gallery.length);
  };

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Booking submitted for ${extendedTourData.title}!\n\nDetails:\nName: ${bookingData.name}\nEmail: ${bookingData.email}\nPhone: ${bookingData.phone}\nTravelers: ${bookingData.travelers}\nDeparture Date: ${bookingData.departureDate}\n\nWe will contact you soon.`);
    setShowBookingForm(false);
    setBookingData({ name: '', email: '', phone: '', travelers: 1, departureDate: '' });
  };

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  return (
    <div className="tour-modal-overlay" onClick={onClose}>
      <div className="tour-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        <div className="modal-content">
          {/* Image Gallery */}
          <div className="modal-gallery">
            <div className="gallery-container">
              <img
                src={extendedTourData.gallery[activeImageIndex]}
                alt={extendedTourData.title}
                className="gallery-image"
              />
              {extendedTourData.gallery.length > 1 && (
                <>
                  <button className="gallery-nav gallery-prev" onClick={prevImage}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                  </button>
                  <button className="gallery-nav gallery-next" onClick={nextImage}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </button>
                  <div className="gallery-dots">
                    {extendedTourData.gallery.map((_, index) => (
                      <button
                        key={index}
                        className={`gallery-dot ${index === activeImageIndex ? 'active' : ''}`}
                        onClick={() => setActiveImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Tour Details */}
          <div className="modal-details">
            {/* Header */}
            <div className="tour-header">
              <div className="tour-meta">
                <span className="tour-destination">{extendedTourData.destination}</span>
                <span className="tour-duration">{extendedTourData.duration}</span>
              </div>
              <h2 className="tour-title">{extendedTourData.title}</h2>
              <div className="tour-rating">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < Math.floor(extendedTourData.rating) ? 'filled' : ''}`}>
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="rating-score">{extendedTourData.rating}</span>
                <span className="review-count">({extendedTourData.reviews.length} reviews)</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="modal-tabs">
              <button
                className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                className={`tab-button ${activeTab === 'itinerary' ? 'active' : ''}`}
                onClick={() => setActiveTab('itinerary')}
              >
                Itinerary
              </button>
              <button
                className={`tab-button ${activeTab === 'details' ? 'active' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
              <button
                className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === 'overview' && (
                <div className="overview-tab">
                  <p className="tour-description">{extendedTourData.description}</p>
                  <div className="tour-highlights">
                    <h3>Highlights</h3>
                    <ul>
                      <li>Expert local guides with extensive knowledge</li>
                      <li>Small group sizes for personalized experience</li>
                      <li>Authentic cultural interactions</li>
                      <li>Sustainable tourism practices</li>
                      <li>High-quality accommodations</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'itinerary' && (
                <div className="itinerary-tab">
                  <div className="itinerary-list">
                    {extendedTourData.itinerary.map((item) => (
                      <div key={item.day} className="itinerary-item">
                        <div className="itinerary-header">
                          <span className="day-number">Day {item.day}</span>
                          <h4>{item.title}</h4>
                        </div>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'details' && (
                <div className="details-tab">
                  <div className="details-grid">
                    <div className="details-section">
                      <h3>What's Included</h3>
                      <ul className="included-list">
                        {extendedTourData.included.map((item, index) => (
                          <li key={index}>✓ {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="details-section">
                      <h3>What's Excluded</h3>
                      <ul className="excluded-list">
                        {extendedTourData.excluded.map((item, index) => (
                          <li key={index}>✗ {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="availability-section">
                    <h3>Availability</h3>
                    <div className="availability-info">
                      <p><strong>Next Departure:</strong> {new Date(extendedTourData.availability.nextDeparture).toLocaleDateString()}</p>
                      <p><strong>Spots Available:</strong> {extendedTourData.availability.spotsLeft} of {extendedTourData.availability.totalSpots}</p>
                      {extendedTourData.availability.popular && (
                        <span className="popular-badge">🔥 Popular Choice</span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="reviews-tab">
                  <div className="reviews-summary">
                    <div className="overall-rating">
                      <span className="rating-number">{extendedTourData.rating}</span>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`star ${i < Math.floor(extendedTourData.rating) ? 'filled' : ''}`}>
                            ⭐
                          </span>
                        ))}
                      </div>
                      <span className="review-count">Based on {extendedTourData.reviews.length} reviews</span>
                    </div>
                  </div>
                  <div className="reviews-list">
                    {extendedTourData.reviews.map((review) => (
                      <div key={review.id} className="review-item">
                        <div className="review-header">
                          <div className="reviewer-info">
                            <div className="reviewer-avatar">
                              <img src={`https://images.unsplash.com/photo-${review.id === 1 ? '1494790108755' : review.id === 2 ? '1507003211169' : '1438761681033'}-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`} alt={review.name} />
                            </div>
                            <div className="reviewer-details">
                              <h4>{review.name}</h4>
                              <p>{review.location}</p>
                            </div>
                          </div>
                          <div className="review-rating">
                            <div className="rating-stars">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={`star ${i < review.rating ? 'filled' : ''}`}>
                                  ⭐
                                </span>
                              ))}
                            </div>
                            <span className="review-date">{review.date}</span>
                          </div>
                        </div>
                        <p className="review-comment">"{review.comment}"</p>
                        <div className="review-actions">
                          <button className="helpful-btn">👍 Helpful ({review.helpful})</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Booking Section */}
            <div className="booking-section">
              {!showBookingForm ? (
                <>
                  <div className="price-section">
                    <span className="price-label">From</span>
                    <span className="price-value">{extendedTourData.price}</span>
                    <span className="price-per-person">per person</span>
                  </div>
                  <div className="booking-actions">
                    <button className="btn btn-primary" onClick={handleBookNow}>Book Now</button>
                    <button className="btn btn-secondary">Add to Wishlist</button>
                  </div>
                </>
              ) : (
                <form className="booking-form" onSubmit={handleBookingSubmit}>
                  <h3>Book Your Tour</h3>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" value={bookingData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={bookingData.email} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" value={bookingData.phone} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="travelers">Number of Travelers</label>
                    <input type="number" id="travelers" name="travelers" value={bookingData.travelers} onChange={handleInputChange} min="1" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="departureDate">Preferred Departure Date</label>
                    <input type="date" id="departureDate" name="departureDate" value={bookingData.departureDate} onChange={handleInputChange} required />
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">Submit Booking</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setShowBookingForm(false)}>Cancel</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourModal;