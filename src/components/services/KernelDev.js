import React from 'react';
import './Services.css';

const KernelDev = () => {
  return (
    <section className="service-section kernel-section" id="kernel-section">
      <div className="service-content">
        <div className="service-text">
          <div className="service-header">
            <span className="service-tag">Core Technology</span>
            <h2>Kernel Driver Development</h2>
          </div>
          <p className="service-description">
            Specialized in developing high-performance kernel drivers that bridge the gap between hardware and software. 
            Our expertise enables direct hardware access, optimized performance, and seamless system integration.
          </p>
          <div className="service-features">
            <div className="feature-group">
              <h3>Hardware Integration</h3>
              <ul className="feature-list">
                <li>Custom device driver development</li>
                <li>Low-level hardware optimization</li>
                <li>Real-time processing capabilities</li>
                <li>Interrupt handling & DMA management</li>
              </ul>
            </div>
            <div className="feature-group">
              <h3>Performance Optimization</h3>
              <ul className="feature-list">
                <li>Memory management optimization</li>
                <li>System call optimization</li>
                <li>Latency reduction techniques</li>
                <li>Resource utilization monitoring</li>
              </ul>
            </div>
          </div>
          <div className="service-stats">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Drivers Developed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">System Stability</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5ms</span>
              <span className="stat-label">Average Latency</span>
            </div>
          </div>
        </div>
        <div className="service-visual">
          <div className="tech-diagram">
            <div className="circle-orbit-container">
              <div className="circle-orbit">
                <div className="circle-core"></div>
                <div className="circle-satellite"></div>
                <div className="circle-satellite"></div>
                <div className="circle-satellite"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KernelDev; 