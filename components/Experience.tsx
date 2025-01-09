import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Card from './Card';
import experiences from '../data/experience.json';

const Experience = () => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const y = useTransform(scrollY, [0, 300], [50, 0]);

  const [visibleExperiences, setVisibleExperiences] = useState(3);

  const handleViewMore = () => {
    setVisibleExperiences((prev) => prev + 3);
  };

  return (
    <motion.div
      className="dark:bg-neutral-900 bg-gray-200 m-9 p-10 overflow-hidden"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-grow">
        <motion.h2
          className="text-black dark:text-white text-4xl md:text-6xl font-bold font-inter leading-10 md:leading-12 mb-8"
          style={{ y }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        >
          My Experiences
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible">
          {experiences.slice(0, visibleExperiences).map((experience, index) => (
            <motion.div
              key={index}
              className="min-w-full md:min-w-0"
              style={{ y }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6, ease: 'easeOut' }}
            >
              <Card
                role={experience.role}
                des={experience.des}
                imgUrl={experience.image}
              />
            </motion.div>
          ))}
        </div>
        {visibleExperiences < experiences.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleViewMore}
              className="px-4 py-2 bg-green-700 dark:bg-green-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-green-800 dark:hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Experience;
