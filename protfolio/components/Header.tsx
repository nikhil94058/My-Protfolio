import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className='bg-gray-800 text-white p-4 dark:bg-gray-900'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-3xl text-green-500 shadow-green-500 shadow-sm shadow-left font-bold'>Welcome</h1>
        <div className='hidden md:flex items-center'>
          <nav className='flex space-x-4'>
            <a href="#about" className='hover:text-gray-400'>About</a>
            <a href="#projects" className='hover:text-gray-400'>Projects</a>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='ml-4 p-2 rounded bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none'
          >
            {darkMode ? <FaSun className='text-yellow-500' /> : <FaMoon className='text-gray-300' />}
          </button>
        </div>
        <div className='md:hidden flex items-center'>
          <button onClick={() => setMenuOpen(!menuOpen)} className='p-2 focus:outline-none'>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className='md:hidden bg-gray-800 p-4'>
          <a href="#about" className='block py-2 px-3 hover:text-gray-400'>About</a>
          <a href="#projects" className='block py-2 px-3 hover:text-gray-400'>Projects</a>
          <a href="#contact" className='block py-2 px-3 hover:text-gray-400'>Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='mt-4 p-2 rounded bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none w-full flex justify-center'
          >
            {darkMode ? <FaSun className='text-yellow-500' /> : <FaMoon className='text-gray-300' />}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
