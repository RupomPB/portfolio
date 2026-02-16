import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'MERN Stack Developer (Professional Training)',
      company: 'Programming Hero',
      date: 'July 2025 - Dec 2025',
      description: [
        'Completed an intensive 6-month full-stack web development program mastering MongoDB, Express.js, React, and Node.js.',
        'Built and deployed scalable web applications with secure authentication (JWT/Firebase) and RESTful APIs.',
        'Developed responsive, mobile-first user interfaces using Tailwind CSS and modern React patterns.',
        'Implemented complex CRUD operations and state management in real-world projects.',
        'Gained hands-on experience with version control (Git/GitHub), debugging, and deployment workflows.'
      ]
    }
  ];

  return (
    <div name="experience" className="w-full min-h-screen bg-gradient-to-b from-white to-gray-200 dark:from-black dark:to-gray-800 text-gray-900 dark:text-white py-32 relative transition-colors duration-300">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pb-12 text-center md:text-left"
        >
          <h2 className="section-title">
            Experience
          </h2>
          <p className="section-subtitle">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-4 sm:px-0">
          {experiences.map(({ id, role, company, date, description }, index) => (
            <motion.div 
                key={id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-8 border-l-4 border-gray-300 dark:border-gray-800 hover:border-cyan-500 transition-colors duration-500 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-800 group-hover:bg-cyan-500 transition-colors duration-500 shadow-lg group-hover:shadow-cyan-500/50 ring-4 ring-white dark:ring-black"></div>
              
              <div className="glass-card p-8 hover:scale-[1.02] duration-500 h-full flex flex-col justify-between relative overflow-hidden group-hover:shadow-cyan-500/10 border-l-0 rounded-l-none rounded-r-3xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 duration-300 mb-2 tracking-tight">{role}</h3>
                    <p className="text-lg font-bold text-cyan-600 dark:text-cyan-500 mb-1">{company}</p>
                    <p className="text-sm text-gray-500 mb-6 font-mono tracking-wider bg-gray-100 dark:bg-white/5 inline-block px-3 py-1 rounded-full">{date}</p>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed tracking-wide text-sm sm:text-base">
                    {description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
