import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
const Project = () => {
  const projects = [
    {
      title: "LandSol",
      description: "Created a transparent solution for land related dispustes.",
      event: "HackoFest' 23",
      techStacks: ["React", "Node", "mongodb, Solidity"],
      imgUrl: "/landsol.png",
      projectLink:
        "https://client-qg2g8nmxj-nikhils-projects-e64f0fae.vercel.app/login",
    },
    {
      title: "Medicare Health++",
      description:
        "Stores Patient History which will aids the doctor for treatment.",
      event: "GDSC Solution Challenge",
      techStacks: ["React", "Firebase"],
      imgUrl: "/medicust.png",
      projectLink: "#",
    },
    // Add more projects here
  ];

  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const y = useTransform(scrollY, [0, 300], [50, 0]);

  const [borderColor, setBorderColor] = useState("#FF0000");

  useEffect(() => {
    const updateBorderColor = () => {
      const scrollPos = scrollY.get();
      if (scrollPos < 300) setBorderColor("#FF0000");
      else if (scrollPos < 600) setBorderColor("#FF7F00");
      else if (scrollPos < 900) setBorderColor("#FFFF00");
      else if (scrollPos < 1200) setBorderColor("#00FF00");
      else if (scrollPos < 1500) setBorderColor("#0000FF");
      else setBorderColor("#8B00FF");
    };

    const unsubscribeScrollY = scrollY.onChange(updateBorderColor);
    return () => unsubscribeScrollY();
  }, [scrollY]);
  return (
    <motion.section
      id="projects"
      className="relative dark:bg-zinc-800 bg-gray-300 py-8"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <div
          className="backdrop-blur-[20px]" // Adjust the blur intensity as needed
          style={{
            width: 642,
            height: 720,
            background:
              "radial-gradient(100% 100% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)",
            borderRadius: "50%",
            opacity: 0.5,
          }}
        />
      </div>
      <div className="max-w-7xl z-10 mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-[2px] dark:bg-green-700 bg-gray-800"></div>
              <div className="dark:text-green-700 text-gray-800 text-xl font-bold">
                Recent Work
              </div>
            </div>
            <h2 className="text-white text-4xl font-bold leading-tight">
              Some of my favorite projects.
            </h2>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 px-4 py-2.5 border bg-gray-600 dark:border-green-700 flex items-center gap-2.5"
          >
            <div className="dark:text-white text-gray-800 text-sm font-bold">
              View All Projects
            </div>
          </a>
        </div>
        <div className="flex flex-col justify-center gap-12 m-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              event={project.event}
              techStacks={project.techStacks}
              imgUrl={project.imgUrl}
              projectLink={project.projectLink}
              ind={index}
              borderColor={borderColor}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
