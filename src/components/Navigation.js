import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-container">
            <span className="logo-text">CRH</span>
            <div className="logo-accent">
              <span className="logo-dot"></span>
              <span className="logo-line"></span>
            </div>
            <span className="logo-subtext">Development</span>
          </div>
        </div>
        
        <button 
          className="mobile-menu-button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="nav-links">
          <Link 
            to="kernel-section" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            spy={true}
            offset={-60}
          >
            Services
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            onClick={closeMenu}
            spy={true}
            offset={-60}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 