"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

import { Toaster, toast } from "sonner";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#ffeb3b",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <header className="bg-transparent relative z-10 text-white p-4 dark:bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl dark:zz shadow-lg font-bold">Welcome</h1>
        <div className="hidden md:flex items-center">
          <nav className="flex space-x-4">
            <motion.a
              href="#about"
              className="hover:text-gray-400 transform transition duration-300"
              variants={linkVariants}
              whileHover="hover"
              onClick={playSound}
            >
              About
            </motion.a>
            <motion.a
              href="#projects"
              className="hover:text-gray-400 transform transition duration-300"
              variants={linkVariants}
              whileHover="hover"
              onClick={playSound}
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="hover:text-gray-400 transform transition duration-300"
              variants={linkVariants}
              whileHover="hover"
              onClick={playSound}
            >
              Contact
            </motion.a>
          </nav>
          <motion.button
            onClick={() => {
              setDarkMode(!darkMode);
              playSound();
              toast(!darkMode ? "DarkMode" : "LightMode");
            }}
            className="ml-4 p-2 rounded bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none"
            variants={buttonVariants}
            whileHover="hover"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-gray-300" />
            )}
          </motion.button>
          <Toaster />
        </div>
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => {
              setMenuOpen(!menuOpen);
              playSound();
            }}
            className="p-2 focus:outline-none shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 p-4">
          <motion.a
            href="#about"
            className="block py-2 px-3 hover:text-gray-400 transform transition duration-300"
            variants={linkVariants}
            whileHover="hover"
          >
            About
          </motion.a>
          <motion.a
            href="#projects"
            className="block py-2 px-3 hover:text-gray-400 transform transition duration-300"
            variants={linkVariants}
            whileHover="hover"
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="block py-2 px-3 hover:text-gray-400 transform transition duration-300"
            variants={linkVariants}
            whileHover="hover"
          >
            Contact
          </motion.a>
          <motion.button
            onClick={() => {
              setDarkMode(!darkMode);
              playSound();
            }}
            className="mt-4 p-2 rounded bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none w-full flex justify-center"
            variants={buttonVariants}
            whileHover="hover"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-gray-300" />
            )}
          </motion.button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
