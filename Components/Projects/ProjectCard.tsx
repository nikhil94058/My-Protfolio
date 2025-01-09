import React from "react";
import { motion, useInView } from "framer-motion";
import { PinContainer } from "../ui/3d-pin";

const ProjectCard = ({
  title,
  description,
  event,
  techStacks,
  imgUrl,
  projectLink,
  ind,
  borderColor,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <PinContainer title={title} href={projectLink}>
      <motion.div
        ref={ref}
        className={`relative flex flex-col md:flex-row justify-center gap-10 p-6 bg-gray-900 rounded-lg md:w-[60rem] shadow-2xl overflow-hidden my-8 mx-auto ${
          ind % 2 === 0 ? "md:flex-row-reverse ml-9" : "mr-9"
        }`}
        style={{ borderColor, borderWidth: "4px" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px rgba(118, 60, 172, 0.7)",
        }}
        initial={{ opacity: 0, x: ind % 2 === 0 ? 50 : -50 }}
        animate={
          isInView ? { opacity: 1, x: 0, transition: { duration: 1 } } : {}
        }
        viewport={{ once: false }}
      >
        {/* Background Gradient */}
        <div
          className="absolute inset-0 z-[-1] rounded-lg"
          style={{
            background:
              "radial-gradient(100% 100% at 50% 50%, rgba(118, 60, 172, 0.8) 0%, rgba(50, 15, 133, 0) 100%)",
            borderRadius: "inherit",
          }}
        ></div>

        {/* Content Area */}
        <div className="flex flex-col justify-between p-6 w-full md:w-1/2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-indigo-300">{title}</h3>
          <p className="text-sm font-medium text-indigo-400">{event}</p>
          <p className="text-base text-indigo-200 mt-2">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {techStacks.map((stack, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-600 bg-opacity-30 text-indigo-200 text-xs font-semibold rounded-md shadow-sm"
              >
                {stack}
              </span>
            ))}
          </div>
          <a
            href={projectLink}
            className="mt-4 text-indigo-300 hover:text-indigo-400 underline"
          >
            View Project
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <motion.img
            src={imgUrl}
            alt={title}
            className="w-48 h-48 object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </PinContainer>
  );
};

export default ProjectCard;
