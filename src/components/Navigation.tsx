import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../logo.png';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand - Always visible */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={logo}
              alt="Lyntric Logo" 
              className="w-12 h-12 md:w-16 md:h-16 rounded object-contain"
            />
            <h1 className="text-xl md:text-2xl font-bold gradient-text -ml-2 md:-ml-4">LYNTRIC</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('vision')}
                className="text-white hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Vision
              </button>
              <button
                onClick={() => scrollToSection('mission')}
                className="text-white hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Mission
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-white hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-white hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Access
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-white text-black px-6 py-2 text-sm font-semibold hover-glow transition-all duration-300 rounded-lg"
            >
              Request Invitation
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('vision')}
                className="text-white hover:bg-gray-800 block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors"
              >
                Vision
              </button>
              <button
                onClick={() => scrollToSection('mission')}
                className="text-white hover:bg-gray-800 block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors"
              >
                Mission
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-white hover:bg-gray-800 block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-white hover:bg-gray-800 block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors"
              >
                Access
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="bg-white text-black hover:bg-gray-200 block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors mt-4"
              >
                Request Invitation
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;