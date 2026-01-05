import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaStripe } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFirebase, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { id: 1, src: <FaHtml5 size={50} className="text-orange-500 group-hover:text-orange-400 duration-300" />, title: 'HTML', style: 'shadow-orange-500/50' },
    { id: 2, src: <FaCss3Alt size={50} className="text-blue-500 group-hover:text-blue-400 duration-300" />, title: 'CSS', style: 'shadow-blue-500/50' },
    { id: 3, src: <FaJs size={50} className="text-yellow-500 group-hover:text-yellow-400 duration-300" />, title: 'JavaScript', style: 'shadow-yellow-500/50' },
    { id: 4, src: <FaReact size={50} className="text-cyan-400 group-hover:text-cyan-300 duration-300 animate-spin-slow" />, title: 'React', style: 'shadow-cyan-400/50' },
    { id: 5, src: <SiTailwindcss size={50} className="text-teal-400 group-hover:text-teal-300 duration-300" />, title: 'Tailwind', style: 'shadow-teal-400/50' },
    { id: 6, src: <FaNodeJs size={50} className="text-green-500 group-hover:text-green-400 duration-300" />, title: 'Node.js', style: 'shadow-green-500/50' },
    { id: 7, src: <SiExpress size={50} className="text-gray-400 group-hover:text-white duration-300" />, title: 'Express', style: 'shadow-gray-500/50' },
    { id: 8, src: <SiMongodb size={50} className="text-green-400 group-hover:text-green-300 duration-300" />, title: 'MongoDB', style: 'shadow-green-400/50' },
    { id: 9, src: <FaGitAlt size={50} className="text-red-500 group-hover:text-red-400 duration-300" />, title: 'Git', style: 'shadow-red-500/50' },
    { id: 10, src: <FaGithub size={50} className="text-gray-400 group-hover:text-white duration-300" />, title: 'GitHub', style: 'shadow-gray-400/50' },
    { id: 11, src: <SiFirebase size={50} className="text-yellow-400 group-hover:text-yellow-300 duration-300" />, title: 'Firebase', style: 'shadow-yellow-400/50' },
    { id: 12, src: <FaStripe size={50} className="text-purple-500 group-hover:text-purple-400 duration-300" />, title: 'Stripe', style: 'shadow-purple-500/50' },
  ];

  return (
    <div name="skills" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">
            Skills
          </p>
          <p className="py-6 text-gray-300">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`group glass-card py-4 hover:scale-105 duration-500 ${style} hover:shadow-2xl`}
            >
              <div className="w-20 mx-auto">{src}</div>
              <p className="mt-4 group-hover:text-cyan-400 duration-300 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
