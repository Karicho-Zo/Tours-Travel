import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaMap } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={40} color="#2E8B57" />,
      title: "Address",
      details: ["123 Safari Street", "Nairobi, Kenya", "P.O. Box 12345-00100"]
    },
    {
      icon: <FaPhone size={40} color="#2E8B57" />,
      title: "Phone",
      details: ["+254 700 123 456", "+254 733 123 456", "24/7 Support Line"]
    },
    {
      icon: <FaEnvelope size={40} color="#2E8B57" />,
      title: "Email",
      details: ["info@exploreafrica.com", "bookings@exploreafrica.com", "support@exploreafrica.com"]
    },
    {
      icon: <FaClock size={40} color="#2E8B57" />,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Emergency Only"]
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our travel experts to plan your perfect African adventure</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <p>Have questions about our tours or need help planning your trip? We're here to help!</p>

            {submitMessage && (
              <div className="success-message">
                <p>{submitMessage}</p>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your travel plans, questions, or how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Here's how you can reach us.</p>

            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-info-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="map-section">
              <h3>Find Us</h3>
              <div className="map-placeholder">
                <div className="map-content">
                  <div className="map-icon"><FaMap size={64} color="#2E8B57" /></div>
                  <h4>Interactive Map</h4>
                  <p>Our office is located in the heart of Nairobi, Kenya. Visit us to discuss your travel plans in person!</p>
                  <p className="map-note">Google Maps integration would go here in production</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
              <h3>Quick Answers</h3>
              <div className="faq-list">
                <div className="faq-item">
                  <h4>How far in advance should I book?</h4>
                  <p>We recommend booking 3-6 months in advance, especially for popular safari seasons (June-October and December-February).</p>
                </div>
                <div className="faq-item">
                  <h4>Do you offer custom itineraries?</h4>
                  <p>Yes! We specialize in creating personalized tours tailored to your interests, budget, and schedule.</p>
                </div>
                <div className="faq-item">
                  <h4>What payment methods do you accept?</h4>
                  <p>We accept major credit cards, bank transfers, and PayPal. Payment plans are available for tours over $2,000.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;