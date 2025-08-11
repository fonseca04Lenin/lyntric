import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="pricing" ref={ref} className="py-20 lg:py-32 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
            <span className="gradient-text">THE FIRST 500</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We believe how you start determines how you grow. Lyntric launches with an 
            ultra-curated access model for the founding members who will shape our culture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Founding Member Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-2 border-white p-8 relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-white text-black px-4 py-1 text-sm font-bold">
                FOUNDING MEMBER
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">First 500</h3>
              <div className="mb-4">
                <span className="text-5xl font-black text-white">$5</span>
                <span className="text-gray-400 ml-2">lifetime access</span>
              </div>
              <p className="text-gray-400 text-sm">
                Ultra-curated access for serious builders only
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white" />
                <span className="text-sm text-gray-300">Manual review process</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white" />
                <span className="text-sm text-gray-300">Lifetime platform access</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white" />
                <span className="text-sm text-gray-300">Founding member badge</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white" />
                <span className="text-sm text-gray-300">Shape platform culture</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white" />
                <span className="text-sm text-gray-300">Priority AI matching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white" />
                <span className="text-sm text-gray-300">Exclusive events access</span>
              </div>
            </div>

            <button className="w-full bg-white text-black py-3 font-semibold hover-glow transition-all duration-300">
              Apply Now
            </button>
          </motion.div>

          {/* Future Pricing Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border border-gray-700 p-8 opacity-60"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Pro Tier</h3>
              <div className="mb-4">
                <span className="text-5xl font-black text-white">$10</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-gray-400 text-sm">
                Phase 2: Freemium + Pro model
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-600" />
                <span className="text-sm text-gray-400">Unlimited messaging</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-600" />
                <span className="text-sm text-gray-400">Unlimited rooms</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-600" />
                <span className="text-sm text-gray-400">AI matching boosts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-600" />
                <span className="text-sm text-gray-400">Premium events</span>
              </div>
            </div>

            <button className="w-full border border-gray-600 text-gray-400 py-3 font-semibold cursor-not-allowed">
              Coming Soon
            </button>
          </motion.div>

          {/* Enterprise Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border border-gray-700 p-8 opacity-60"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Enterprise</h3>
              <div className="mb-4">
                <span className="text-5xl font-black text-white">$100+</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-gray-400 text-sm">
                Phase 3: Agencies & Investors
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-600" />
                <span className="text-sm text-gray-400">Advanced filtering</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-600" />
                <span className="text-sm text-gray-400">Dealflow access</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-600" />
                <span className="text-sm text-gray-400">Private introductions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-600" />
                <span className="text-sm text-gray-400">IRL retreats</span>
              </div>
            </div>

            <button className="w-full border border-gray-600 text-gray-400 py-3 font-semibold cursor-not-allowed">
              Coming Soon
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="border border-gray-700 p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Why $5?
            </h3>
            <div className="space-y-6 text-lg">
              <p className="text-gray-300">
                <span className="text-white font-semibold">Because commitment matters more than cash.</span> We don't want just anyone—we want the right ones.
              </p>
              <p className="text-gray-400">
                Applications are required. Every seat is manually reviewed, and users must be building 
                or offering something serious. The $5 gate is symbolic because it ensures the best in 
                the game and filters out mass signups.
              </p>
              <p className="text-white font-medium">
                After the first 500, pricing will increase and access gates will open up more. 
                We just need to ensure quality before quantity.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-white">
            Ready to Join the Movement?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black px-8 py-4 text-lg font-semibold hover-glow transition-all duration-300 w-full sm:w-auto">
              Apply for Access
            </button>
            <p className="text-gray-500 text-sm">
              Applications reviewed within 48 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;