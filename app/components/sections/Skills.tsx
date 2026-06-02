'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Django'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Design',
      skills: ['UI/UX Design', 'Figma', 'Web Design', 'Branding', 'Motion Design', 'Illustration'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Business',
      skills: ['Marketing', 'Sales', 'Management', 'Analytics', 'Strategy', 'Finance'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Creative',
      skills: ['Photography', 'Videography', 'Music Production', 'Writing', 'Animation', 'Editing'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="skills" className="section relative">
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
            Popular
            <span className="text-gradient"> Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore thousands of skills available in our community.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-dark p-8 rounded-xl"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4`}>
                <span className="text-white font-bold text-xl">{'ABCD'[index]}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
