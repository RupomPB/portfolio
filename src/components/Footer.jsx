import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-black text-white border-t border-gray-800">
      <div className="grid grid-flow-col gap-6">
        <a href="#about" className="link link-hover text-gray-400 hover:text-cyan-400 transition-colors duration-300">About</a>
        <a href="#projects" className="link link-hover text-gray-400 hover:text-cyan-400 transition-colors duration-300">Projects</a>
        <a href="#contact" className="link link-hover text-gray-400 hover:text-cyan-400 transition-colors duration-300">Contact</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-sky-400 hover:scale-110 transition-all duration-300">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
      <div>
        <p className="text-gray-500">Copyright © {new Date().getFullYear()} - All right reserved by <span className="text-cyan-500 font-bold">Rupom Prosad Badhan</span></p>
      </div>
    </footer>
  );
};

export default Footer;
