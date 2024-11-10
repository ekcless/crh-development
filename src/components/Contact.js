import React, { useState } from 'react';
import { useParallax } from 'react-scroll-parallax';
import './Contact.css';

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);
  const formParallax = useParallax({
    translateY: [-10, 10],
    opacity: [0.95, 1],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Hide notification after 3 seconds
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Let's Build Something Great</h2>
          <p className="contact-subtitle">
            Ready to transform your ideas into reality? Our team of experts is here to help.
          </p>
        </div>
        
        <div className="contact-content" ref={formParallax.ref}>
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>United States</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>contact@crhdevelopment.com</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <select defaultValue="">
                <option value="" disabled>Select Service</option>
                <option value="kernel">Kernel Development</option>
                <option value="sdk">Custom SDKs</option>
                <option value="enterprise">Enterprise Solutions</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Tell us about your project" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
              <span className="button-arrow">→</span>
            </button>
          </form>
        </div>
      </div>

      {showNotification && (
        <div className="notification">
          Message sent successfully!
        </div>
      )}
    </section>
  );
};

export default Contact; 