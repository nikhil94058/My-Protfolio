import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Preahvihear } from '@next/font/google'; // Import Preahvihear font

const preahvihear = Preahvihear({
  weight: '400', // Specify the weight
  style: 'normal', // Specify the style
  subsets: ['latin'], // Specify the subsets
});

const Intro = () => {
  const roles = ["Software Engineer", "Designer"];
  const profileImage = '/profile.png';

  return (
    <div className='flex-grow m-8 border border-gray-300 bg-opacity-50 bg-gray-500 p-10 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-60'>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-1">
          <div className={`text-green-400 text-[2.5rem] md:text-[3rem] font-bold leading-tight md:leading-snug mb-4 md:mb-0 ${preahvihear.className}`}>
            <ReactTypingEffect
              text={["Hello, I'm Nikhil"]}
              speed={100}
              eraseSpeed={100}
              typingDelay={100}
              eraseDelay={1000}
              cursorRenderer={cursor => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1>
                    {text.split('').map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span key={key}>{char}</span>
                      );
                    })}
                  </h1>
                );
              }}
            />
          </div>
          <div className={`${preahvihear.className} text-white text-[2rem] md:text-[4rem] font-bold leading-tight md:leading-snug mt-2 md:mt-0`}>
            <ReactTypingEffect
              text={roles}
              speed={100}
              eraseSpeed={100}
              typingDelay={100}
              eraseDelay={2000}
              cursorRenderer={cursor => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1>
                    {text.split('').map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span key={key}>{char}</span>
                      );
                    })}
                  </h1>
                );
              }}
            />
          </div>
          <div className={`text-zinc-400 text-base md:text-lg font-normal leading-7 md:leading-8 mt-6 md:mt-4 md:w-2/3 ${preahvihear.className}`}>
            I’m from Singapore and I have been working as a Product Designer for more than 7 years. I’ve worked for a Hanziree company Pabloo as a Product Designer and Front-end Developer for 3 years.
          </div>
          <div className="flex flex-col md:flex-row mt-10 gap-4">
            <button className="px-7 py-4 bg-green-700 hover:bg-green-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg">
              Email Me
            </button>
            <button className="px-7 py-4 bg-transparent border-2 border-zinc-500 hover:bg-zinc-700 text-zinc-500 hover:text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg">
              Download CV
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-8 flex flex-col items-center">
          <div className="relative w-[15rem] h-[15rem]">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-2 rounded-full shadow-lg hover:shadow-xl"
            >
              <Spline scene="https://prod.spline.design/ARBmuzkFK0a5jx9S/scene.splinecode" className="rounded-full z-20 absolute" />
            </motion.div>
            <img
              src={profileImage}
              alt="Profile"
              className="absolute z-30 top-1/2 left-1/2 w-[10rem] h-[10rem] md:w-48 md:h-48 rounded-full object-cover border-8 border-gray-900"
              style={{ transform: 'translate(-50%, -50%)' }}
            />
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-3xl dark:hover:text-blue-600" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-3xl dark:hover:text-gray-600" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-3xl dark:hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
