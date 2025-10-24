import React from 'react';
import './TourCard.css';

const TourCard = ({ tour, onViewDetails }) => {
  // Debug logging
  console.log('TourCard received tour:', tour);

  return (
    <div className="tour-card">
      <div className="tour-image">
        <img
          src={tour.image}
          alt={tour.title}
          onError={(e) => {
            console.error('Image failed to load:', tour.image);
            e.target.style.backgroundColor = '#e0e0e0';
            e.target.style.color = '#666';
            e.target.innerHTML = tour.title;
          }}
          onLoad={() => console.log('Image loaded successfully:', tour.title)}
        />
        <div className="tour-overlay">
          <span className="tour-price">{tour.price}</span>
        </div>
      </div>
      <div className="tour-content">
        <div className="tour-meta">
          <span className="tour-destination">{tour.destination}</span>
          <span className="tour-duration">{tour.duration}</span>
        </div>
        <h3 className="tour-title">{tour.title}</h3>
        <p className="tour-description">{tour.description}</p>
        <div className="tour-actions">
          <button
            onClick={() => onViewDetails && onViewDetails(tour)}
            className="btn btn-primary"
          >
            View Details
          </button>
          <a href={`/tours`} className="btn btn-secondary">Book Now</a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;