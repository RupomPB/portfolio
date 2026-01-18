import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // Default to dark mode if no preference is saved
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

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'experience' },
    { id: 6, link: 'contact' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-gray-900 dark:text-white bg-white/80 dark:bg-black/20 backdrop-blur-md fixed z-50 shadow-sm dark:shadow-lg border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div>
        <h1 className="text-4xl font-bold ml-2 cursor-pointer font-signature gradient-text hover:scale-105 duration-200">Rupom</h1>
      </div>

      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 nav-link"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li className="ml-4 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 duration-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10" onClick={handleThemeToggle}>
          {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
        </li>
      </ul>

      <div className="flex items-center gap-4 md:hidden">
         <div className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 duration-200" onClick={handleThemeToggle}>
          {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
        </div>
        <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 duration-200"
        >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900 text-gray-900 dark:text-gray-300 transition-colors duration-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-cyan-500 dark:hover:text-cyan-400 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
