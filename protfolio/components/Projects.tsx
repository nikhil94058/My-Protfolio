import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Card from './Card'; // Import the Card component

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
  },
  {
    title: 'Project 3',
    description: 'Description for project 3',
  },
  {
    title: 'Project 4',
    description: 'Description for project 4',
  },
  // Add more projects here
];

const Projects = () => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const y = useTransform(scrollY, [0, 300], [50, 0]);

  const [borderColor, setBorderColor] = useState('#FF0000');

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

  return (
    <motion.section
      id="projects"
      className='bg-zinc-800 py-8'
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-[2px] bg-green-700"></div>
              <div className="text-green-700 text-xl font-bold font-inter">Recent Work</div>
            </div>
            <div className="text-white text-4xl font-bold font-inter leading-12">Some of my favorite projects.</div>
          </div>
          <a href="#" className="px-4 py-2.5 border border-green-700 flex items-center gap-2.5">
            <div className="text-white text-sm font-bold font-inter leading-6">View All Projects</div>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} role={project.title} des={project.description} borderColor={borderColor} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
