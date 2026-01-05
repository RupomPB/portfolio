import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 relative z-10">
        
        {/* Left Side: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-0 md:mr-12 flex-shrink-0"
        >
          <img 
            src="https://i.ibb.co.com/8D0bT1bQ/Rupom.jpg" 
            alt="Rupom Prosad Badhan" 
            className="rounded-full w-56 h-56 md:w-80 md:h-80 object-cover shadow-lg shadow-cyan-500/20 border-4 border-gray-800"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-7xl font-bold text-white"
          >
            Hi, I'm <span className="gradient-text">Rupom Prosad Badhan</span>
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
             className="text-2xl sm:text-4xl font-bold text-gray-300 mt-4"
          >
            MERN Stack Developer
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 py-4 max-w-md mx-auto md:mx-0 text-lg leading-relaxed"
          >
            I specialize in building clean, scalable, and high-performance web applications using the MERN stack. Let's build something amazing together.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.9 }}
             className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-full btn-gradient cursor-pointer"
            >
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={20} className="ml-2" />
              </span>
            </Link>
             <Link
              to="contact"
              smooth
              duration={500}
              className="w-fit px-6 py-3 flex items-center rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-white duration-300 cursor-pointer backdrop-blur-sm"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              download={true}
              className="w-fit px-6 py-3 flex items-center rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white duration-300 cursor-pointer backdrop-blur-sm"
            >
              Download Resume
              <FaDownload size={20} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
