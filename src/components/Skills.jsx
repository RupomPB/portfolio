import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaStripe } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFirebase, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { id: 1, src: <FaHtml5 size={40} />, title: 'HTML', color: 'text-orange-500', shadow: 'shadow-orange-500/20' },
        { id: 2, src: <FaCss3Alt size={40} />, title: 'CSS', color: 'text-blue-500', shadow: 'shadow-blue-500/20' },
        { id: 3, src: <FaJs size={40} />, title: 'JavaScript', color: 'text-yellow-500 dark:text-yellow-400', shadow: 'shadow-yellow-400/20' },
        { id: 4, src: <FaReact size={40} />, title: 'React', color: 'text-cyan-500 dark:text-cyan-400', shadow: 'shadow-cyan-400/20' },
        { id: 5, src: <SiTailwindcss size={40} />, title: 'Tailwind', color: 'text-teal-500 dark:text-teal-400', shadow: 'shadow-teal-400/20' },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { id: 6, src: <FaNodeJs size={40} />, title: 'Node.js', color: 'text-green-600 dark:text-green-500', shadow: 'shadow-green-500/20' },
        { id: 7, src: <SiExpress size={40} />, title: 'Express', color: 'text-gray-600 dark:text-gray-400', shadow: 'shadow-gray-500/20' },
        { id: 8, src: <SiMongodb size={40} />, title: 'MongoDB', color: 'text-green-500 dark:text-green-400', shadow: 'shadow-green-400/20' },
        { id: 11, src: <SiFirebase size={40} />, title: 'Firebase', color: 'text-yellow-500', shadow: 'shadow-yellow-500/20' },
        { id: 12, src: <FaStripe size={40} />, title: 'Stripe', color: 'text-purple-600 dark:text-purple-500', shadow: 'shadow-purple-500/20' },
      ]
    },
    {
      title: "Tools & Version Control",
      skills: [
        { id: 9, src: <FaGitAlt size={40} />, title: 'Git', color: 'text-red-500', shadow: 'shadow-red-500/20' },
        { id: 10, src: <FaGithub size={40} />, title: 'GitHub', color: 'text-gray-800 dark:text-white', shadow: 'shadow-gray-400/20' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div name="skills" className="w-full min-h-screen bg-gradient-to-b from-white to-gray-200 dark:from-black dark:to-gray-800 text-gray-900 dark:text-white py-32 relative overflow-hidden transition-colors duration-300">
      {/* Ambient Moving Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <motion.div 
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[120px]"
         />
         <motion.div 
            animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-cyan-400/10 dark:bg-cyan-600/5 rounded-full blur-[100px]"
         />
      </div>

      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-16 text-center"
        >
          <h2 className="section-title border-b-0 inline-block relative after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-1/2 after:h-1 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600 after:-translate-x-1/2 after:rounded-full">
            Technical Skills
          </h2>
          <p className="section-subtitle mx-auto">
            A curated list of technologies I use to build performant and scalable applications.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="flex flex-col gap-8"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-500 pl-4"
              >
                {category.title}
              </motion.h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                    className={`group glass-card p-6 flex flex-col items-center justify-center gap-4 cursor-pointer relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${skill.shadow}`}
                  >
                    {/* Floating Animation Wrapper */}
                    <motion.div
                       variants={floatingVariants}
                       animate="animate"
                       // Add random delay to prevent synchronized floating
                       transition={{ delay: skillIndex * 0.1 }} 
                       className="flex flex-col items-center gap-4 w-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className={`relative z-10 ${skill.color} transition-transform duration-300 group-hover:scale-110 drop-shadow-lg`}>
                        {skill.src}
                        </div>
                        
                        <p className="relative z-10 font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 tracking-wide">
                        {skill.title}
                        </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
