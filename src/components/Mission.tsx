import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Mission: React.FC = () => {
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

  const principles = [
    {
      title: "UTILITY IS THE NEW STATUS",
      description: "Lyntric is not about likes, follows, or flexes—it's about action. Value flows from what you do, not how you're perceived."
    },
    {
      title: "TRUST BY DESIGN",
      description: "We design for trust because you can't build with strangers. Every user is vetted, every connection intentional."
    },
    {
      title: "SPEED WINS",
      description: "Founders move fast, and Lyntric moves faster. Real-time rooms, instant matching, and a clutter-free interface built for motion."
    },
    {
      title: "EXCLUSIVITY AS A FEATURE",
      description: "We don't scale users, we scale outcomes. Growth is intentional and scarcity is the soil of quality."
    },
    {
      title: "BUILDERS NEED BUILDERS",
      description: "From indie hackers to cinematic filmmakers, greatness doesn't build in isolation. Where complementary genius meets."
    }
  ];

  return (
    <section id="mission" ref={ref} className="py-20 lg:py-32 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
            <span className="gradient-text">THE MISSION</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Our mission is audacious yet clear: <span className="text-white font-semibold">unify the fragmented world of execution.</span>
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              We aim to create a digital environment so pure, so focused, and so empowering 
              that founders and creatives can't help but build better and faster—together. 
              There are no unnecessary features, no artificial engagement loops, just a raw 
              execution space built for results.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            OUR PRINCIPLES
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="border border-gray-800 p-6 hover:border-gray-600 transition-colors duration-300"
              >
                <h4 className="text-lg font-bold mb-4 text-white">
                  {principle.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="border border-gray-700 p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              WHO WE SERVE
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">The Founder</h4>
                <p className="text-gray-400 text-sm mb-4">
                  A visionary, resourceful, and signal-obsessed individual who is tired of talking and ready to build.
                </p>
                
                <h4 className="text-lg font-semibold mb-3 text-white">The Creative Operator</h4>
                <p className="text-gray-400 text-sm">
                  The storyteller, visual thinker, and brand architect. The overlooked builders behind world-changing startups.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">The Technical Genius</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Someone who sees code as poetry and time as currency. Deeply skilled and selectively social.
                </p>
                
                <h4 className="text-lg font-semibold mb-3 text-white">The Early-Stage Investor</h4>
                <p className="text-gray-400 text-sm">
                  Not interested in endless pitch decks but craves proximity to bold action, elite talent, and raw dealflow.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;