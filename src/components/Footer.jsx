import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-black text-gray-500 dark:text-gray-400 py-12 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4">
        
        <div className="flex gap-8 mb-8">
            <a href="https://github.com/RupomPB" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white dark:bg-white/5 hover:bg-cyan-50 dark:hover:bg-cyan-500/20 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-md">
                <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-500/20 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-md">
                <FaLinkedin size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-500/20 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-md">
                <FaFacebook size={24} />
            </a>
        </div>

        <p className="text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} <span className="text-cyan-600 dark:text-cyan-400 font-bold">Rupom Prosad Badhan</span>. All rights reserved.
        </p>
        <p className="text-xs mt-2 opacity-70">
            Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </div>
  );
};

export default Footer;
