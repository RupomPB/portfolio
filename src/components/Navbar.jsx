import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { id: 1, link: 'home' },
  { id: 2, link: 'about' },
  { id: 3, link: 'skills' },
  { id: 4, link: 'projects' },
  { id: 5, link: 'experience' },
  { id: 6, link: 'contact' },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle scroll effect
  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 50) {
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex justify-between items-center w-full h-20 px-4 fixed z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-md' : 'bg-transparent'}`}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold ml-2 cursor-pointer font-signature gradient-text hover:scale-105 duration-200">Rupom</h1>
      </motion.div>

      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            className="px-4 nav-link text-lg"
          >
            <Link to={link} smooth duration={500} offset={-80}>
              {link}
            </Link>
          </motion.li>
        ))}
        <motion.li 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="ml-4 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 duration-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" 
            role="button"
            tabIndex={0}
            aria-label="Toggle dark/light theme"
            onClick={handleThemeToggle}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleThemeToggle(); }}
        >
          {theme === 'dark' ? <FaSun size={22} className="animate-spin-slow" /> : <FaMoon size={22} />}
        </motion.li>
      </ul>

      <div className="flex items-center gap-4 md:hidden">
         <div 
           className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 duration-200 p-1" 
           role="button"
           tabIndex={0}
           aria-label="Toggle theme"
           onClick={handleThemeToggle}
           onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleThemeToggle(); }}
         >
          {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
        </div>
        <div
            onClick={() => setNav(!nav)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setNav(!nav); }}
            role="button"
            tabIndex={0}
            aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
            className="cursor-pointer pr-4 z-50 text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 duration-200 focus:outline-none"
        >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      <AnimatePresence>
        {nav && (
            <motion.ul 
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.3, type: 'tween' }}
                className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white/95 dark:bg-black/95 backdrop-blur-xl text-gray-900 dark:text-gray-300 z-40"
            >
            {links.map(({ id, link }) => (
                <motion.li
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (id * 0.1) }}
                    className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-cyan-500 dark:hover:text-cyan-400 duration-200 font-light tracking-wider"
                >
                <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    smooth
                    duration={500}
                    offset={-80}
                >
                    {link}
                </Link>
                </motion.li>
            ))}
            </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
