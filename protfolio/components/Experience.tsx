import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Card from './Card';

const Experience = () => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const y = useTransform(scrollY, [0, 300], [50, 0]);

  const [borderColor, setBorderColor] = useState('#FF0000');
  const [visibleExperiences, setVisibleExperiences] = useState(3);
  
  useEffect(() => {
    const updateBorderColor = () => {
      const scrollPos = scrollY.get();
      if (scrollPos < 300) setBorderColor('#FF0000');
      else if (scrollPos < 600) setBorderColor('#FF7F00');
      else if (scrollPos < 900) setBorderColor('#FFFF00');
      else if (scrollPos < 1200) setBorderColor('#00FF00');
      else if (scrollPos < 1500) setBorderColor('#0000FF');
      else setBorderColor('#8B00FF');
    };
    
    const unsubscribeScrollY = scrollY.onChange(updateBorderColor);
    return () => unsubscribeScrollY();
  }, [scrollY]);

  const experiences = [
    { role: 'Frontend Developer', des: 'Developed user interfaces for web applications.' },
    { role: 'UI/UX Designer', des: 'Created intuitive and responsive designs.' },
    { role: 'Product Manager', des: 'Led the development and launch of new products.' },
    { role: 'Backend Developer', des: 'Built and maintained server-side logic and databases.' },
    { role: 'DevOps Engineer', des: 'Implemented CI/CD pipelines and automated processes.' },
  ];

  const handleViewMore = () => {
    setVisibleExperiences(prev => prev + 3);
  };

  return (
    <motion.div
      className="bg-black m-9 p-10 overflow-hidden"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-grow">
        <motion.div
          className="text-white text-4xl md:text-6xl font-bold font-inter leading-10 md:leading-12"
          style={{ y }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        >
          My Experiences
        </motion.div>
        <div className="mt-8">
          <div className="grid grid-col-1 md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible">
            {experiences.slice(0, visibleExperiences).map((experience, index) => (
              <motion.div
                key={index}
                className="min-w-full md:min-w-0"
                style={{ y }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6, ease: 'easeOut' }}
              >
                <Card role={experience.role} des={experience.des} borderColor={borderColor} />
              </motion.div>
            ))}
          </div>
        </div>
        {visibleExperiences < experiences.length && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={handleViewMore} 
              className="px-4 py-2 bg-green-700 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out"
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
