import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            <span className="gradient-text">FINAL WORD</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg">
            <p className="text-gray-300">
              Lyntric is not designed to go viral. <span className="text-white font-semibold">It's designed to be vital.</span>
            </p>
            <p className="text-gray-400">
              This is an operating system for the serious. A secret society of action. 
              A kinetic network of execution where motion replaces noise and building replaces broadcasting.
            </p>
            <p className="text-white font-medium text-xl">
              No distractions. No fluff. Just founders. Just talent. Just build.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border border-gray-700 p-12 text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Welcome to Lyntric
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Don't join a platform. <span className="text-white font-semibold">Join a movement.</span>
          </p>
          <button className="bg-white text-black px-8 py-4 text-lg font-semibold hover-glow transition-all duration-300">
            Apply for The First 500
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 text-center md:text-left"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">LYNTRIC</h3>
            <p className="text-gray-500 text-sm">
              The Future of Entrepreneurial Connection
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Platform</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Precision Profiles</p>
              <p>Real-Time Collaboration</p>
              <p>AI Matching</p>
              <p>Company Pages</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Access</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Application Required</p>
              <p>Manual Review Process</p>
              <p>$5 Lifetime Access</p>
              <p>First 500 Only</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Lyntric. Built for builders, by builders.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <button className="hover:text-white transition-colors">Privacy</button>
              <button className="hover:text-white transition-colors">Terms</button>
              <button className="hover:text-white transition-colors">Contact</button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;