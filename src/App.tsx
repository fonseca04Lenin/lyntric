import React from 'react';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Mission from './components/Mission';
import ProductFeatures from './components/ProductFeatures';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Vision />
      <Mission />
      <ProductFeatures />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;