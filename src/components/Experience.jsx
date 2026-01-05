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
    <div name="experience" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-gray-300">My professional journey</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {experiences.map(({ id, role, company, date, description }) => (
            <div key={id} className="relative pl-8 border-l-4 border-gray-700 hover:border-cyan-500 transition-colors duration-300 group">
              <div className="absolute -left-[10px] top-0 w-4 h-4 rounded-full bg-gray-700 group-hover:bg-cyan-500 transition-colors duration-300"></div>
              <div className="glass-card p-6 hover:scale-105 duration-300">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 duration-300">{role}</h3>
                <p className="text-lg font-semibold text-cyan-500">{company}</p>
                <p className="text-sm text-gray-400 mb-4">{date}</p>
                <p className="text-gray-300 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
