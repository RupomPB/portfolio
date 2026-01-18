import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'StyleDecor',
    description: 'A comprehensive service booking platform with user authentication, role-based dashboards, Stripe payments, and booking management system.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Firebase'],
    live: 'https://benevolent-churros-058ead.netlify.app/',
    client: 'https://github.com/RupomPB/style-decor-project-client',
    server: 'https://github.com/RupomPB/style-decor-project-server',
    image: 'https://i.ibb.co/hJXSjtP5/image.png'
  },
  {
    id: 2,
    title: 'Finease Project',
    description: ' Personal Finance Management Key Features FinEase is a personal finance management web application users can manage their income and expenses The platform allows users to record transactions, and view financial summaries with insightful charts and reports. Smart Transaction Management (Full CRUD) 📊 Interactive Reports & Data Visualization 🔐 Secure Authentication System ⚙️ Protected Routes with Conditional Navigation 🧠 Instant UI Updates without Page Reloads Techonology Uses react react-router react-icons lucide-react recharts sweetalert2 react-toastify react-spinners axios firebase',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
    live: 'https://finease-project.netlify.app/',
    client: 'https://github.com/RupomPB/Assignment-10-Personal-Finance-Management-App-client',
    server: 'https://github.com/RupomPB/Assignment-10-Personal-Finance-Management-App-server',
    image: 'https://i.ibb.co/TDvZtPwD/image.png'
  },
  {
    id: 3,
    title: 'Game Project App',
    description: 'A collaborative Game Project with real-time updates, drag-and-drop interface, and team collaboration features.',
    tech: ['React', 'DaisyUi', 'Tailwind', 'JavaScript'],
    live: 'https://game-project-09.netlify.app/',
    client: 'https://github.com/RupomPB/game-project-assignment-9',
    server: 'https://github.com/RupomPB/game-project-assignment-9',
    image: 'https://i.ibb.co.com/WvFw6NtZ/image.png'
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Projects = () => {
  return (
    <div name="projects" className="w-full bg-gradient-to-b from-gray-200 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-blue-600/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[25%] h-[25%] bg-cyan-600/5 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left pb-12"
        >
          <h2 className="section-title border-b-0 inline-block relative after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-1/2 after:h-1 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600 after:-translate-x-1/2 after:rounded-full">
            Projects
          </h2>
          <p className="section-subtitle mx-auto md:mx-0">
            Some of my recent work and personal projects, built with modern technologies.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-16"
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col md:flex-row glass-card overflow-hidden rounded-3xl shadow-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent dark:from-black/70 opacity-70"></div>
              </div>

              {/* Project Info */}
              <div className="p-8 flex flex-col justify-between md:w-1/2 relative">
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/20 rounded-full border border-cyan-200 dark:border-cyan-500/20 backdrop-blur-sm">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto flex-wrap">
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 py-3 text-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:from-cyan-500 hover:to-blue-500 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:-translate-y-1">
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a href={project.client} target="_blank" rel="noreferrer" className="flex-1 py-3 text-center rounded-xl border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-white/5 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/30 hover:text-black dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:-translate-y-1">
                    <FaGithub /> Client
                  </a>
                  <a href={project.server} target="_blank" rel="noreferrer" className="flex-1 py-3 text-center rounded-xl border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-white/5 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/30 hover:text-black dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:-translate-y-1">
                    <FaGithub /> Server
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
