import Hero from "@/Components/Hero/Hero";
import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import { motion } from "framer-motion";
import Project from "@/Components/Projects/Project";
export default function HomePage() {
  return (
    <>
      <motion.main
        className="flex-grow  z-2 min-h-screen flex flex-col dark:bg-neutral-900 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Spline
          scene="https://prod.spline.design/6ZRTkJrPgBgkFhJQ/scene.splinecode"
          className="absolute inset-0 z-0 w-full"
        />

        <Hero />
        <ShowArrow />
        <br />
        <br />
        <br />
        <About />
        <Project />
      </motion.main>
    </>
  );
}

const ShowArrow = () => {
  const [showArrow, setShowArrow] = useState(true);

  const handleScroll = () => {
    setShowArrow(window.scrollY <= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <center>
      {showArrow && (
        <div className="flex bg-white dark:bg-blue-800 justify-center z-20 bottom-10 right-1/2  absolute animate-bounce rounded-full p-3">
          {/* Light Mode Image */}
          <img
            src="/arrow.png"
            alt="Light Mode"
            className="block dark:hidden w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:h-20 lg:w-20" // Adjusts only the arrow size
          />
          {/* Dark Mode Image */}
          <img
            src="/arrow.png"
            alt="Dark Mode"
            className="hidden dark:block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:h-20 lg:w-20" // Adjusts only the arrow size
          />
        </div>
      )}
    </center>
  );
};
