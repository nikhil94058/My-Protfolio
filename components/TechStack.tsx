import React from 'react';
import { motion } from 'framer-motion';

const techStacksData = [
  { name: 'React', experience: '3 years', image: 'https://raw.githubusercontent.com/github/explore/main/topics/react/react.png' },
  { name: 'Node.js', experience: '4 years', image: 'https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png' },
  { name: 'TypeScript', experience: '2 years', image: 'https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png' },
  { name: 'Python', experience: '5 years', image: 'https://raw.githubusercontent.com/github/explore/main/topics/python/python.png' },
  { name: 'Docker', experience: '3 years', image: 'https://raw.githubusercontent.com/github/explore/main/topics/docker/docker.png' },
  { name: 'JavaScript', experience: '4 years', image: 'https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png' },
  { name: 'C++', experience: '3 years', image: 'https://raw.githubusercontent.com/github/explore/main/topics/cpp/cpp.png' },
  { name: 'Java', experience: '4 years', image: 'https://raw.githubusercontent.com/github/explore/main/topics/java/java.png' },
  { name: 'Go', experience: '2 years', image: 'https://raw.githubusercontent.com/github/explore/main/topics/go/go.png' },
  { name: 'MongoDB', experience: '3 years', image: 'https://raw.githubusercontent.com/github/explore/main/topics/mongodb/mongodb.png' },
];

const ProjectCard = ({ title, description, event, techStacks, imgUrl, projectLink }) => {
  return (
    <motion.div
      className="w-screen max-w-md md:max-w-lg lg:max-w-2xl bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
    >
      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
          <motion.img
            className="absolute inset-0 w-full h-full object-cover"
            src={imgUrl}
            alt={title}
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          />
        </div>
      </a>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <div className="flex items-center gap-1">
            {techStacks.map((tech, index) => (
              <span
                key={index}
                className="flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-4 h-4 mr-1"
                />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{event}</p>

        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
