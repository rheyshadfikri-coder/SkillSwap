'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Sign up and create a profile showcasing your skills and expertise.',
    },
    {
      number: '02',
      title: 'Browse & Connect',
      description: 'Explore skills offered by other users and connect with potential mentors.',
    },
    {
      number: '03',
      title: 'Schedule Sessions',
      description: 'Arrange learning sessions that work best for both of you.',
    },
    {
      number: '04',
      title: 'Learn & Grow',
      description: 'Exchange knowledge, gain new skills, and build lasting connections.',
    },
  ];

  return (
    <section id="how" className="section relative">
      <div className="container-max container-fluid">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            How It
            <span className="text-gradient"> Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get started in just a few simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Card */}
              <motion.div
                className="glass-dark p-6 rounded-xl h-full"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="text-blue-400" size={24} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
