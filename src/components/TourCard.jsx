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
        <div className="image-overlay"></div>
        <div className="featured-label">Featured</div>
        <div className="icons-overlay">
          <div className="icon-item">⭐{tour.rating}</div>
          <div className="icon-item">⏱ {tour.duration}</div>
          <div className="icon-item"> {tour.destination}</div>
        </div>
        <div className="bottom-overlay">
          <h3 className="overlay-title">{tour.title}</h3>
          <p className="overlay-price">From {tour.price}</p>
          <button className="offer-button" onClick={() => onViewDetails && onViewDetails(tour)}>To The Offer →</button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;