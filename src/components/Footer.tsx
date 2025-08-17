import React from 'react';
import { motion } from 'framer-motion';
import logo from '../logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 text-center md:text-left"
        >
          <div>
            <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
              <img 
                src={logo} 
                alt="Lyntric Logo" 
                className="w-10 h-10 rounded object-contain"
              />
              <h3 className="text-2xl font-bold text-white">LYNTRIC</h3>
            </div>
            <p className="text-white text-sm">
              The Future of Entrepreneurial Connection
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Platform</h4>
            <div className="space-y-2 text-sm text-white">
              <p>Precision Profiles</p>
              <p>Real-Time Collaboration</p>
              <p>AI Matching</p>
              <p>Company Pages</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Access</h4>
            <div className="space-y-2 text-sm text-white">
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
            <p className="text-white text-sm">
              © 2024 Lyntric. Built for builders, by builders.
            </p>
            <div className="flex space-x-6 text-sm text-white">
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