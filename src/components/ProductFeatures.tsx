import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ProductFeatures: React.FC = () => {
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

  const features = [
    {
      title: "Precision Founder Profiles",
      description: "In-depth, transparent view into each user's current projects and collaboration preferences. Showcase what you're building, who you want to connect with, and your availability.",
      highlights: [
        "Clear project descriptions and collaboration goals",
        "Availability and preferred commitment level",
        "Transparent compensation expectations",
        "Verified skills and execution badges"
      ]
    },
    {
      title: "Real-Time Collaboration Channels",
      description: "Replace fragmented tools like Slack and Notion with integrated communication and task management in one seamless environment.",
      highlights: [
        "Integrated audio/video and screen sharing",
        "Interactive whiteboards for brainstorming",
        "Embedded task boards with assignments and deadlines",
        "AI-generated meeting summaries and action items"
      ]
    },
    {
      title: "AI-Powered Matching Engine",
      description: "Connect users based on multidimensional analysis of skills, goals, timelines, and collaboration styles. Beyond simple keyword matching.",
      highlights: [
        "Analysis of skills, goals, timelines, and behaviors",
        "Dynamic updates based on changing user data",
        "Identification of complementary collaborators and advisors",
        "Prioritization of matches with highest predicted success"
      ]
    },
    {
      title: "Company Pages",
      description: "Centralized hubs for startups to present their vision, team, traction, and opportunities to the community.",
      highlights: [
        "Detailed company overview and team profiles",
        "Integration with collaboration rooms and project boards",
        "Open role listings and investor pitch materials",
        "Customizable privacy and access controls"
      ]
    },
    {
      title: "Founder-Centric Scheduling",
      description: "Streamline coordination with scheduling and meeting tools designed specifically for busy founders across different time zones.",
      highlights: [
        "Calendar syncing with timezone awareness",
        "Quick meeting proposals embedded in chats and profiles",
        "AI-assisted meeting prep with participant context",
        "Automated post-meeting summaries with clear next steps"
      ]
    }
  ];

  return (
    <section id="features" ref={ref} className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
            <span className="gradient-text">PRODUCT OVERVIEW</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every feature is precision-built for execution. No unnecessary complexity, 
            just the tools you need to build faster and better—together.
          </p>
        </motion.div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-3">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white mt-2 flex-shrink-0" />
                      <p className="text-gray-400 text-sm">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="border border-gray-800 p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 text-sm">Feature Preview</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20 pt-16 border-t border-gray-800"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Built for Motion, Not Stagnation
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Every tool, every interaction, every feature is designed with one goal: 
            to accelerate execution and eliminate friction in the building process.
          </p>
          <button className="bg-white text-black px-8 py-4 text-lg font-semibold hover-glow transition-all duration-300">
            Experience Lyntric
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductFeatures;