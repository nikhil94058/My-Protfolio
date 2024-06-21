import React from 'react';
import {useState} from 'react';
import Typist from 'react-typist';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons
import { motion } from 'framer-motion';

const Intro = () => {
  const roles = ["Software Engineer", "Designer"];
  const profileImage = '/profile.png';
  const [now, setNow] = useState(new Date());
  const onTypingDone = () => setNow(new Date());
  return (
    <div className='flex-grow m-8 p-10 bg-gray-900 rounded-lg shadow-lg'>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-1">
          <div className="text-green-400 text-[2.5rem] md:text-[3rem] font-bold font-['Inter'] leading-tight md:leading-snug mb-4 md:mb-0">
            <Typist cursor={{ show: false }}>Hello, I'm Nikhil</Typist>
          </div>
          <div className="text-white text-[2rem] md:text-[4rem] font-bold font-['Inter'] leading-tight md:leading-snug mt-2 md:mt-0">
            <Typist loop={true} cursor={{ show: false }} delay={20}
            onTypingDone={onTypingDone}
            key={now}>
              {roles.map((role, index) => (
                <div key={index}>
                  <Typist.Delay ms={500} />
                  <span>{role}</span>
                  <Typist.Backspace count={role.length} delay={2000} />
                </div>
              ))}
            </Typist>
          </div>
          <div className="text-zinc-400 text-base md:text-lg font-normal font-['Inter'] leading-7 md:leading-8 mt-6 md:mt-4 md:w-2/3">
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
          <div className="flex items-center justify-center w-[20rem] h-[20rem]">
            <motion.div
              animate={{
                scale: [1, 1.1, 1.1, 1],
                rotate: [0, 360, 360, 0],
                borderRadius: ["20%", "50%", "50%", "20%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="p-2 bg-gradient-to-r from-green-400 via-green-500 to-green-700 rounded-full shadow-lg hover:shadow-xl"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-[20rem] h-[20rem] md:w-48 md:h-48 rounded-full object-cover border-4 border-green-700"
              />
            </motion.div>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-3xl hover:text-blue-600" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-3xl hover:text-gray-600" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-3xl hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
