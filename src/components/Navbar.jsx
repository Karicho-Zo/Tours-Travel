import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  const handleNavClick = (e, targetId) => {
    closeMenu();
    if (targetId && location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-text">Explore</span>
          <span className="logo-highlight">Africa</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link
            to="/"
            className={isActive('/')}
            onClick={(e) => handleNavClick(e, 'featured-tours')}
          >
            Home
          </Link>
          <Link
            to="/tours"
            className={isActive('/tours')}
            onClick={closeMenu}
          >
            Tours
          </Link>
          <Link
            to="/about"
            className={isActive('/about')}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={isActive('/contact')}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;