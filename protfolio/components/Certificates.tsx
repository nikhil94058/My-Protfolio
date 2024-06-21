import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Certificate 1',
    image: '/cer1.png',
  },
  {
    title: 'Certificate 2',
    image: '/cer2.png',
  },
  // Add more certificates here
];

const Certificates = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + certificates.length) % certificates.length);
  };

  const { title, image } = certificates[currentPage];

  return (
    <div className="flex items-center justify-center p-4">
      
      <div className="relative flex items-center justify-between w-full max-w-sm md:max-w-lg gap-14">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 text-white text-2xl pointer-events-auto"
          aria-label="Previous"
        >
          &larr;
        </motion.button>
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="relative w-full"
        >
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
            className="rounded shadow-md"
          />
          <h3 className="mt-4 text-center text-xl font-semibold">{title}</h3>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 text-white text-2xl pointer-events-auto"
          aria-label="Next"
        >
          &rarr;
        </motion.button>
      </div>
    </div>
  );
};

export default Certificates;
