import React, { useEffect, useRef } from 'react';
import { useParallax } from 'react-scroll-parallax';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  const titleParallax = useParallax({
    translateY: [-10, 10],
    opacity: [1, 0.95],
  });

  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (circleRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 30;
        const y = (clientY / innerHeight - 0.5) * 30;
        
        circleRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-circle" ref={circleRef}></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="hero-content" ref={titleParallax.ref}>
        <h1 className="hero-title">
          <span className="gradient-text">Extraordinary</span>
          <span className="block-text">technology.</span>
          <span className="block-text">Engineered to excel.</span>
        </h1>
        <p className="hero-subtitle">
          Precision-crafted kernel drivers, SDKs, and enterprise solutions 
          that redefine what's possible in software development.
        </p>
        <div className="hero-cta">
          <Link 
            to="kernel-section" 
            smooth={true} 
            duration={500} 
            offset={-60}
            className="primary-button"
          >
            Explore Services
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-60}
            className="secondary-button"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <Link 
        to="kernel-section" 
        smooth={true} 
        duration={500} 
        offset={-60}
        className="scroll-indicator"
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>
    </section>
  );
};

export default Hero; 