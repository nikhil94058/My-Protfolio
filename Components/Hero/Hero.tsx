import React from "react";
import { Typewriter } from "nextjs-simple-typewriter";
import { Button } from "../ui/moving-border";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Spline from "@splinetool/react-spline";

// Main Hero Component
const Hero = () => {
  return (
    <div className="flex-grow m-8 bg-opacity-0 p-10 rounded-lg shadow-lg backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-1">
          <Introduction />
          <JobTitles />
          <Description />
          <ActionButtons />
        </div>
        <ProfileSection />
      </div>
    </div>
  );
};

// Introduction Component
const Introduction = () => (
  <div className="text-green-400 h-10 text-[2.5rem]  md:m-auto lg:mt-5 md:text-[3rem] font-bold leading-tight md:leading-snug mb-4 md:mb-0">
    <Typewriter
      words={["Hello! I am Nikhil"]}
      loop={1}
      cursor
      cursorStyle=" ^_^"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </div>
);

// JobTitles Component
const JobTitles = () => (
  <div className="text-white h-20 mt-16 lg:mt-12 text-[2rem] md:text-[3rem] md:m-auto font-bold leading-tight md:leading-snug  md:mt-0">
    <Typewriter
      words={["Full Stack Web Developer", "Designer", "Software Engineer"]}
      loop={0}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </div>
);

// Description Component
const Description = () => (
  <div className="text-zinc-400 text-base md:text-lg font-normal leading-7 md:leading-8 mt-6 md:mt-4 md:w-2/3">
    Hi, I'm Nikhil, a coding enthusiast with a{" "}
    <a href="https://codeforces.com/profile/NikhilKumar_11">Codeforces</a>{" "}
    rating of 1495. Pursuing CSE at NIT Patna, I specialize in web development
    with the MERN stack. I'm active on{" "}
    <div className="flex flex-row space-x-4">
      <a href="https://www.codechef.com/users/kumarnikhil94048">
        <img className="h-10" src="/codechef.svg" alt="CodeChef" />
      </a>
      ,
      <a
        href="https://codeforces.com/profile/NikhilKumar_11"
        className="text-cyan-500"
      >
        <img className="h-10" src="/codeforces.png" alt="CodeForces" />
      </a>
      , and{" "}
      <a href="https://leetcode.com/u/kumarnikhil94058/">
        <img className="h-10" src="/leetcode.png" alt="LeetCode" />
      </a>
    </div>
    , honing my skills in competitive programming.
  </div>
);

// ActionButtons Component
const ActionButtons = () => (
  <div className="flex flex-col md:flex-row mt-10 gap-4">
    <button
      className="w-1/2 h-16 lg:w-1/6 lg:h-16 bg-green-700 hover:bg-green-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg"
      onClick={() => {
        window.location.href = "mailto:nikhild.ug22.cs@nitp.ac.in";
      }}
    >
      Email Me
    </button>
    <Button
      borderRadius="1rem"
      className="bg-white dark:bg-slate-900 text-zinc-500 text-zinc-500  transition duration-300 ease-in-out hover:shadow-lg hover:text-white font-bold dark:text-white border-neutral-200 dark:border-slate-800"
    >
      Resume
    </Button>
  </div>
);

// ProfileSection Component
const ProfileSection = () => (
  <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-8 flex flex-col items-center">
    <div className="relative w-[15rem] h-[15rem]">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 p-2 rounded-full shadow-lg hover:shadow-xl"
      >
        <Spline
          scene="https://prod.spline.design/ARBmuzkFK0a5jx9S/scene.splinecode"
          className="rounded-full z-20 absolute"
        />
      </motion.div>
      <img
        src="/profile.png"
        alt="Profile"
        className="absolute z-30 top-1/2 left-1/2 w-[10rem] h-[10rem] md:w-48 md:h-48 rounded-full object-cover border-8 border-gray-900"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
    <SocialLinks />
  </div>
);

// SocialLinks Component
const SocialLinks = () => (
  <div className="flex space-x-4 mt-4">
    <a
      href="https://www.linkedin.com/in/nikhil-kumar-das-826582250/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin className="text-white text-3xl dark:hover:text-blue-600" />
    </a>
    <a
      href="https://github.com/nikhil94058"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub className="text-white text-3xl dark:hover:text-gray-600" />
    </a>
    <a
      href="https://twitter.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter className="text-white text-3xl dark:hover:text-blue-400" />
    </a>
  </div>
);

export default Hero;
