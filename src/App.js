import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import KernelDev from './components/services/KernelDev';
import CustomSDK from './components/services/CustomSDK';
import EnterpriseSolutions from './components/services/EnterpriseSolutions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ParallaxProvider>
      <div className="app">
        <Navigation />
        <Hero />
        <KernelDev />
        <CustomSDK />
        <EnterpriseSolutions />
        <Contact />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App; 