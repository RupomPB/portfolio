import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
    if (localTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black/20 backdrop-blur-md fixed z-50 shadow-lg border-b border-white/5">
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
        <li className="ml-4 cursor-pointer text-gray-300 hover:text-yellow-400 duration-200" onClick={handleThemeToggle}>
          {theme === 'dark' ? <FaSun size={25} /> : <FaMoon size={25} />}
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden hover:text-cyan-400 duration-200"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-cyan-400 duration-200"
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
          <li className="py-6 cursor-pointer hover:text-yellow-400 duration-200" onClick={handleThemeToggle}>
             {theme === 'dark' ? <FaSun size={30} /> : <FaMoon size={30} />}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
