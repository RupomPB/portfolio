import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }, // Cubic bezier for cinematic feel
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <div name="home" className="min-h-screen w-full bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white overflow-hidden relative flex items-center transition-colors duration-300">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.5, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center w-full px-4 relative z-10">
        
        {/* Left Side: Profile Image */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="mb-10 md:mb-0 md:mr-16 flex-shrink-0 relative group"
        >
           {/* Background Halo Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-full blur-[60px] opacity-60 animate-pulse-slow"></div>

           {/* Glowing Gradient Ring */}
           <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-1000 group-hover:duration-500"></div>
           
           {/* Floating Animation Wrapper */}
           <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
           >
              <img 
                src="https://i.ibb.co.com/8D0bT1bQ/Rupom.jpg" 
                alt="Rupom Prosad Badhan" 
                loading="lazy"
                className="relative rounded-full w-64 h-64 md:w-[400px] md:h-[400px] object-cover object-top shadow-2xl shadow-gray-400/50 dark:shadow-black/50 border-[3px] border-white/50 dark:border-white/10 z-10"
              />
           </motion.div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center text-center md:text-left max-w-2xl"
        >
          <motion.h2 variants={itemVariants} className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Hi, I'm <span className="gradient-text">Rupom</span>
          </motion.h2>
          
          <motion.h3 variants={itemVariants} className="text-2xl sm:text-4xl font-semibold text-gray-600 dark:text-gray-300 mt-4 tracking-wide">
            MERN Stack Developer
          </motion.h3>
          
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 py-6 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            I specialize in building clean, scalable, and high-performance web applications using the MERN stack. Let's build something amazing together.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-5 justify-center md:justify-start mt-2">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View Projects 
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
             <Link
              to="contact"
              smooth
              duration={500}
              className="px-8 py-3.5 rounded-full border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-white/5 text-cyan-600 dark:text-cyan-400 font-medium hover:bg-white/80 dark:hover:bg-white/10 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-md shadow-lg shadow-gray-200/50 dark:shadow-black/20"
            >
              Contact Me
            </Link>
            
            <a
              href="/resume.pdf"
              download={true}
              className="px-8 py-3.5 rounded-full border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-white/5 text-purple-600 dark:text-purple-400 font-medium hover:bg-white/80 dark:hover:bg-white/10 hover:border-purple-500/50 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-md shadow-lg shadow-gray-200/50 dark:shadow-black/20 flex items-center"
            >
              Resume
              <FaDownload className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
