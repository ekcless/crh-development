import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Kernel Driver Development',
      description: 'Custom kernel drivers for enhanced hardware performance and system integration.',
      icon: '🔧'
    },
    {
      title: 'Custom SDKs',
      description: 'Tailored software development kits that streamline your development process.',
      icon: '⚡'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Scalable, secure, and efficient solutions for complex business needs.',
      icon: '🏢'
    }
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card animate-section">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 