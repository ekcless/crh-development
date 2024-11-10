import React from 'react';
import './Services.css';

const CustomSDK = () => {
  return (
    <section className="service-section sdk-section">
      <div className="service-content reversed">
        <div className="service-visual">
          <div className="code-window">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-content">
              <pre>
                <code>
                  {`// Initialize CRH SDK
const sdk = await CRH.init({
  mode: 'production',
  optimization: {
    performance: true,
    security: true
  }
});

// Connect to hardware
const device = await sdk.connect({
  protocol: 'advanced',
  monitoring: true
});

// Process data stream
const stream = device.createStream({
  format: 'binary',
  compression: true
});

// Handle events
stream.on('data', async (data) => {
  const result = await sdk.process(data);
  console.log('Processed:', result);
});`}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div className="service-text">
          <div className="service-header">
            <span className="service-tag">Development Tools</span>
            <h2>Custom SDKs</h2>
          </div>
          <p className="service-description">
            Empower your development team with our custom-built Software Development Kits. 
            We create intuitive, powerful, and thoroughly documented SDKs that streamline 
            integration and accelerate development cycles.
          </p>
          <div className="service-features">
            <div className="feature-group">
              <h3>Technical Capabilities</h3>
              <ul className="feature-list">
                <li>Cross-platform compatibility</li>
                <li>Real-time data processing</li>
                <li>Hardware abstraction layer</li>
                <li>Automated error handling</li>
              </ul>
            </div>
            <div className="feature-group">
              <h3>Developer Experience</h3>
              <ul className="feature-list">
                <li>Comprehensive documentation</li>
                <li>Code samples & tutorials</li>
                <li>Integration support</li>
                <li>Version control & updates</li>
              </ul>
            </div>
          </div>
          <div className="sdk-metrics">
            <div className="metric">
              <div className="metric-circle">
                <svg viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="var(--brand-blue)"
                    strokeWidth="2"
                    strokeDasharray="95, 100"
                  />
                </svg>
                <span>95%</span>
              </div>
              <span>Integration Success Rate</span>
            </div>
            <div className="metric">
              <div className="metric-circle">
                <svg viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="var(--brand-blue)"
                    strokeWidth="2"
                    strokeDasharray="90, 100"
                  />
                </svg>
                <span>90%</span>
              </div>
              <span>Development Time Saved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSDK; 