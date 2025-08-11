import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="gradient-text">LYNTRIC</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-gray-300">
            THE FUTURE OF ENTREPRENEURIAL CONNECTION
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl font-medium text-white mb-8 max-w-2xl mx-auto">
            "If you're into tech, then you're into Lyntric."
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A precision-built, invite-only operating system for high-performing entrepreneurs 
            and world-class creative talent. This is not just another platform—it's a digital 
            command center for the ambitious.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('pricing')}
            className="bg-white text-black px-8 py-4 text-lg font-semibold hover-glow transition-all duration-300 w-full sm:w-auto"
          >
            Join The First 500
          </button>
          <button
            onClick={() => scrollToSection('vision')}
            className="border border-gray-600 text-white px-8 py-4 text-lg font-semibold hover:border-white transition-all duration-300 w-full sm:w-auto"
          >
            Learn More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <p className="text-sm text-gray-500 mb-4">THE ANTIDOTE TO NOISE</p>
          <div className="flex justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-gray-600 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;