import React from 'react';
import './Services.css';

const EnterpriseSolutions = () => {
  return (
    <section className="service-section enterprise-section">
      <div className="service-content">
        <div className="service-text">
          <div className="service-header">
            <span className="service-tag">Enterprise Grade</span>
            <h2>Enterprise Solutions</h2>
          </div>
          <p className="service-description">
            Transform your organization with scalable, secure, and efficient enterprise solutions. 
            Our comprehensive approach ensures seamless integration and optimal performance across your entire infrastructure.
          </p>
          <div className="service-features">
            <div className="feature-group">
              <h3>Infrastructure</h3>
              <ul className="feature-list">
                <li>Cloud Architecture Design</li>
                <li>Scalable System Integration</li>
                <li>Performance Optimization</li>
                <li>Security Implementation</li>
              </ul>
            </div>
            <div className="feature-group">
              <h3>Business Solutions</h3>
              <ul className="feature-list">
                <li>Custom Application Development</li>
                <li>Workflow Automation</li>
                <li>Data Analytics Integration</li>
                <li>Legacy System Modernization</li>
              </ul>
            </div>
          </div>
          <div className="service-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Enterprise Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime Guarantee</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Coverage</span>
            </div>
          </div>
        </div>
        <div className="service-visual">
          <div className="cube-container">
            <div className="cube">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face right"></div>
              <div className="cube-face left"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </div>
            <div className="cube-shadow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutions; 