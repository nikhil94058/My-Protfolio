import React from 'react';
import { motion, useInView } from 'framer-motion';

const ProjectCard = ({ title, description, event, techStacks, imgUrl, projectLink, ind, borderColor }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col md:flex-row justify-center gap-10 p-4 bg-gray-800 rounded-lg md:w-[60rem] shadow-lg overflow-hidden my-8 mx-auto ${ind % 2 === 0 ? 'md:flex-row-reverse ml-9' : 'mr-9'}`}
      style={{ borderColor, borderWidth: '5px' }}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, x: ind % 2 === 0 ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0, transition: { duration: 1 } } : {}}
      viewport={{ once: false }}
    >
      <div className="absolute inset-0 z-[-1] rounded-lg" style={{
        background: 'radial-gradient(100% 100% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)',
        borderRadius: 'inherit'
      }}></div>

      <div className="flex flex-col justify-between p-4 w-full md:w-1/2 bg-white bg-opacity-10 backdrop-blur-md rounded-lg">
        <h3 className="text-2xl font-semibold text-indigo-200">{title}</h3>
        <p className="text-base text-indigo-400">{event}</p>
        <p className="text-lg text-indigo-200">{description}</p>
        <div className="flex gap-2 mt-4">
          {techStacks.map((stack, index) => (
            <div key={index} className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center">
              <img
                src={`https://raw.githubusercontent.com/github/explore/main/topics/${stack.toLowerCase()}/${stack.toLowerCase()}.png`}
                alt={stack}
                className="w-6 h-6"
              />
            </div>
          ))}
        </div>
        <a href={projectLink} className="mt-4 text-indigo-400 underline">
          View Project
        </a>
      </div>
      <div className="flex-shrink-0">
        <motion.img
          src={imgUrl}
          alt={title}
          className="w-48 h-48 object-cover rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
