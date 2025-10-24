import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-text">Explore</span>
                <span className="logo-highlight">Africa</span>
              </div>
              <p className="footer-description">
                Discover the beauty, wildlife, and culture of Africa through our expertly crafted tours and adventures.
                Your journey to the heart of Africa starts here.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" className="social-link" title="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" className="social-link" title="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" className="social-link" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://youtube.com" className="social-link" title="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/tours">Tours</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Popular Tours</h3>
              <ul className="footer-links">
                <li><a href="/tours">Safari Adventure Kenya</a></li>
                <li><a href="/tours">Cape Town Explorer</a></li>
                <li><a href="/tours">Pyramids & Nile Cruise</a></li>
                <li><a href="/tours">Victoria Falls Safari</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Info</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+254 700 123 456</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>info@exploreafrica.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2025 Explore Africa. All rights reserved. | Designed with ❤️ for travelers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;