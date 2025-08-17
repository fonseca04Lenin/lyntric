import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Vision: React.FC = () => {
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
    <section id="vision" ref={ref} className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">THE VISION THAT</span>
            <br />
            <span className="text-white">CHANGES EVERYTHING</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-white">
                The noise is deafening. Endless feeds, empty engagement, and performative 
                success have drained the energy out of modern digital platforms.
              </p>
              <p className="text-white font-medium">
                Founders are tired, builders are buried, and creatives are lost in algorithmic clutter.
              </p>
              <p className="text-white">
                Lyntric exists to restore the signal in this chaos. It is not just another 
                platform—it is a precision-built, invite-only operating system for high-performing 
                entrepreneurs and world-class creative talent.
              </p>
              <p className="text-white font-semibold text-xl">
                A digital command center for the ambitious.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="border border-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">PURPOSE-DRIVEN</h3>
              <p className="text-white">
                Every feature, user, and interaction has a purpose. This is a new standard 
                where connections are intentional.
              </p>
            </div>

            <div className="border border-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">COLLABORATION FOCUSED</h3>
              <p className="text-white">
                Collaboration is instantaneous, and ventures are born, not browsed.
              </p>
            </div>

            <div className="border border-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">VELOCITY ENABLED</h3>
              <p className="text-white">
                The antidote to noise, the return of utility, and the reawakening of velocity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
      <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
    </section>
  );
};

export default Vision;