import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'StyleDecor',
      description: 'A comprehensive service booking platform featuring user authentication, role-based dashboards (Admin/User), Stripe payment integration, and booking management system.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Firebase'],
      Live_link: 'https://benevolent-churros-058ead.netlify.app/',
      Clint: 'https://github.com/RupomPB/style-decor-project-client',
      Server: 'https://github.com/RupomPB/style-decor-project-server',
      image: 'https://i.ibb.co.com/hJXSjtP5/image.png'
    },
    {
      id: 2,
      title: 'finease-project',
      description: 'A full-featured online store with product catalog, shopping cart, user reviews, and secure checkout process.',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
      Live_link: 'https://finease-project.netlify.app/',
      Clint: 'https://github.com/RupomPB/Assignment-10-Personal-Finance-Management-App-client',
      Server: 'https://github.com/RupomPB/Assignment-10-Personal-Finance-Management-App-server',
      image: 'https://i.ibb.co.com/TDvZtPwD/image.png'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task manager with real-time updates, drag-and-drop interface, and team collaboration features.',
      tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
      demo: '#',
      code: '#',
      image: 'https://placehold.co/600x400?text=Task+Manager'
    }
  ];

  return (
    <div name="projects" className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Projects
          </p>
          <p className="py-6 text-gray-300">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, description, tech, demo, code, image }) => (
            <div key={id} className="group relative rounded-xl overflow-hidden glass-card hover:scale-105 duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <img
                src={image}
                alt={title}
                className="rounded-t-xl duration-200 group-hover:scale-110 object-cover h-48 w-full"
              />
              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 duration-300">{title}</h3>
                <p className="text-sm text-gray-400 mb-4 flex-grow leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tech.map((item, index) => (
                    <span key={index} className="px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-500/30">{item}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto gap-4">
                  <a href={demo} target="_blank" rel="noreferrer" className="flex-1 py-2 text-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2">
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a href={code} target="_blank" rel="noreferrer" className="flex-1 py-2 text-center rounded-lg border border-gray-600 text-gray-300 font-medium hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
