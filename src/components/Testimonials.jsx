import React from 'react';
import './Testimonials.css';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Travelers Say</h2>
        <p className="section-subtitle">Real experiences from our valued customers</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-location">{testimonial.location}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;