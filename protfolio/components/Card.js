import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ role, des, borderColor }) => {
  return (
    <motion.div
      className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-800 p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out"
      style={{ borderColor, borderWidth: '2px', borderStyle: 'solid' }}
    >
      <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-75"></div>
        <motion.img
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          src="https://via.placeholder.com/400x250"
          alt="Card Background"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-white text-2xl font-bold leading-tight">{role}</div>
        <div className="text-gray-400 text-base leading-normal">{des}</div>
        <a href=""><div className="m-1 text-green-700 text-xl font-medium font-['Inter']">See Projects</div></a>
      </div>
    </motion.div>
  );
};

export default Card;
