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
    description: 'Personal Finance Management platform allowing users to track income/expenses with visual charts. Features secure auth, transaction history, and instant UI updates.',
    tech: ['React', 'Node.js', 'MongoDB', 'Recharts', 'Express.js', 'Tailwind', 'Firebase'],
    live: 'https://finease-project.netlify.app/',
    client: 'https://github.com/RupomPB/Assignment-10-Personal-Finance-Management-App-client',
    server: 'https://github.com/RupomPB/Assignment-10-Personal-Finance-Management-App-server',
    image: 'https://i.ibb.co/TDvZtPwD/image.png'
  },
  {
    id: 3,
    title: 'Auth Shop – Next.js Full Stack E-Commerce Application',
    description: 'A collaborative Auth Shop  with real-time, gadget, updates, drag-and-drop interface, and Tech collaboration features.',
    tech: ['next.js', 'DaisyUi', 'Tailwind', 'JavaScript','Node.js', 'Express.js', 'MongoDB',],
    live: 'https://gadgethub-frontend-w84a.vercel.app/',
    client: 'https://github.com/RupomPB/gadgethub-frontend',
    server: 'https://github.com/RupomPB/gadgethub-server',
    image: 'https://i.ibb.co.com/B24g0kkM/nextjs-ss.png'
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
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-16"
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="flex flex-col md:flex-row glass-card overflow-hidden rounded-3xl shadow-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group"
            >
              {/* Project Image */}
              <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Tech overlay on mobile/image hover */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 md:hidden">
                    {project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs bg-black/50 backdrop-blur-md text-white px-2 py-1 rounded-full border border-white/10">{tech}</span>
                     ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 flex flex-col justify-between md:w-1/2 relative bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed line-clamp-4">{project.description}</p>

                  <div className="hidden md:flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 rounded-full border border-cyan-200 dark:border-cyan-500/30 shadow-sm">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto flex-wrap">
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 py-3 text-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:from-cyan-500 hover:to-blue-500 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:-translate-y-1">
                    <FaExternalLinkAlt /> Live Demo
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
