import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logo.png';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="hidden md:block mb-6">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="text-7xl lg:text-8xl font-black leading-tight text-center"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                className="text-white"
              >
                LYNTRIC
              </motion.span>
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-white"
          >
            THE FUTURE OF ENTREPRENEURIAL CONNECTION
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-lg md:text-xl font-medium text-white mb-8 max-w-2xl mx-auto"
          >
            "If you're into tech, then you're into Lyntric."
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-base md:text-lg text-white max-w-4xl mx-auto leading-relaxed"
          >
            A precision-built, invite-only operating system for high-performing entrepreneurs 
            and world-class creative talent. This is not just another platform—it's a digital 
            command center for the ambitious.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('pricing')}
            className="bg-white text-black px-8 py-4 text-lg font-semibold hover-glow transition-all duration-300 w-full sm:w-auto rounded-xl"
          >
            Request Invitation
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, borderColor: "#ffffff", boxShadow: "0 5px 15px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('vision')}
            className="border border-gray-600 text-white px-8 py-4 text-lg font-semibold hover:border-white transition-all duration-300 w-full sm:w-auto rounded-xl"
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="mt-16"
        >
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.1em" }}
            transition={{ duration: 1, delay: 2.6 }}
            className="text-sm text-white mb-4"
          >
            THE ANTIDOTE TO NOISE
          </motion.p>
          <div className="flex justify-center">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "4rem" }}
              transition={{ duration: 0.8, delay: 2.8 }}
              className="w-px bg-gradient-to-b from-gray-600 to-transparent" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;