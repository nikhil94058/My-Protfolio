import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ comment, imgUrl, role, des }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)' }}
      className="w-full max-w-2xl h-auto bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 rounded-[1rem] shadow-lg flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4 transition-all duration-300"
    >
      <div className="flex-shrink-0">
        <img className="w-24 h-24 rounded-full" src={imgUrl} alt="Placeholder" />
      </div>
      <div className="flex flex-col justify-between space-y-2">
        <div className="text-black dark:text-white text-xl font-semibold leading-tight font-['Poppins']">{role}</div>
        <div className="text-black dark:text-white text-xs font-medium leading-snug font-['Poppins']">{des}</div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-28 h-8 bg-[#2C1250] dark:bg-[#2C1250] rounded-lg border border-[#693B93] text-white text-xs font-medium font-['Poppins'] leading-tight text-center transition-all duration-300"
        >
          LEARN MORE
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;
