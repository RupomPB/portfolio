import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'MERN Stack Developer',
      company: 'Freelance / Self-Employed',
      date: '2023 - Present',
      description: 'Developing full-stack web applications using MongoDB, Express, React, and Node.js. Building responsive UIs with Tailwind CSS and implementing secure authentication and payment gateways.'
    },
    {
      id: 2,
      role: 'Frontend Developer Intern',
      company: 'Tech Startup (Placeholder)',
      date: '2022 - 2023',
      description: 'Collaborated with senior developers to build and maintain user-facing features. Optimized application performance and ensured cross-browser compatibility.'
    },
    {
      id: 3,
      role: 'Computer Science Student',
      company: 'University Name (Placeholder)',
      date: '2019 - 2023',
      description: 'Gained a strong foundation in algorithms, data structures, and software engineering principles. Completed various academic projects involving web technologies.'
    }
  ];

  return (
    <div name="experience" className="w-full min-h-screen bg-gradient-to-b from-white to-gray-200 dark:from-black dark:to-gray-800 text-gray-900 dark:text-white py-32 relative transition-colors duration-300">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
        <div className="pb-12 text-center md:text-left">
          <h2 className="section-title">
            Experience
          </h2>
          <p className="section-subtitle">
            My professional journey and educational background.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-4 sm:px-0">
          {experiences.map(({ id, role, company, date, description }) => (
            <div key={id} className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-800 hover:border-cyan-500 transition-colors duration-500 group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-800 group-hover:bg-cyan-500 transition-colors duration-500 shadow-lg group-hover:shadow-cyan-500/50 ring-4 ring-white dark:ring-black"></div>
              <div className="glass-card p-8 hover:scale-[1.02] duration-500 h-full flex flex-col justify-between relative overflow-hidden group-hover:shadow-cyan-500/10">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 duration-300 mb-2 tracking-tight">{role}</h3>
                    <p className="text-lg font-bold text-cyan-600 dark:text-cyan-500 mb-1">{company}</p>
                    <p className="text-sm text-gray-500 mb-6 font-mono tracking-wider">{date}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed tracking-wide">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
