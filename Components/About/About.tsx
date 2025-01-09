import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import Spline1 from "./Spline";
import Image from "next/image";
import TabButton from "./TabButtton";
import { FlipWords } from "@/Components/ui/flip-words";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C/C++</li>
        <li>Java</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>SQL</li>
        <li>AWS (EC2)</li>
        <li>MongoDB</li>
        <li>Kubernetes</li>
        <li>Docker</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Solidity</li>
        <li>Ethereum</li>
        <li>Machine Learning</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Tech in Computer Science and Engineering</li>
        <li>NIT Patna (Aug 2022 - Jun 2026)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>ICPC</li>
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer (if applicable)</li>
      </ul>
    ),
  },
];

const About = () => {
  return (
    <section className="m-0">
      <LampDemo />
      <div className="">
        <Cute />
      </div>
    </section>
  );
};

export default About;

const Cute = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/about.webp" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            My name is{" "}
            <Highlight className="text-black dark:text-white">
              Nikhil Kumar Das
            </Highlight>
            , and I am currently pursuing a B.Tech in
            <Highlight className="text-black dark:text-white">
              {" "}
              Computer Science and Engineering
            </Highlight>{" "}
            at
            <Highlight className="text-black dark:text-white">
              {" "}
              NIT Patna
            </Highlight>
            , where I have maintained{" "}
            <Highlight className="text-black dark:text-white">
              a CGPA of 9.45/10.
            </Highlight>{" "}
            I possess a solid foundation in{" "}
            <Highlight className="text-black dark:text-white">
              software development, machine learning, and blockchain
              technologies
            </Highlight>
            . I am particularly skilled in developing applications using{" "}
            <Highlight className="text-black dark:text-white">
              React.js
            </Highlight>{" "}
            and{" "}
            <Highlight className="text-black dark:text-white">
              Node.js
            </Highlight>
            , as well as implementing decentralized solutions with{" "}
            <Highlight className="text-black dark:text-white">
              Solidity
            </Highlight>{" "}
            and{" "}
            <Highlight className="text-black dark:text-white">
              Ethereum
            </Highlight>
            . My academic projects include the development of a{" "}
            <Highlight className="text-black dark:text-white">
              real-time gender and age detection system
            </Highlight>{" "}
            using deep learning techniques, as well as a
            <Highlight className="text-black dark:text-white">
              {" "}
              decentralized application for land management
            </Highlight>{" "}
            on the Ethereum blockchain, which leverages smart contracts for
            secure and efficient transactions. In addition to my technical
            capabilities, I actively engage in competitive programming,
            achieving a ranking in the{" "}
            <Highlight className="text-black dark:text-white">
              top 4.06%
            </Highlight>{" "}
            on{" "}
            <Highlight className="text-black dark:text-white">
              LeetCode
            </Highlight>
            , which has further sharpened my analytical and problem-solving
            skills. I am eager to contribute my expertise in
            <Highlight className="text-black dark:text-white">
              {" "}
              machine learning and blockchain technology
            </Highlight>{" "}
            to innovative projects within your team.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/*<TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
  </TabButton>*/}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export function LampDemo() {
  const words = [
    "<Code />",
    "<div>Eat</div>",
    "prinf(Sleep);",
    "<Creative />",
    "/*******/",
  ];

  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
        animate={{ opacity: 1, y: 0 }} // Animate to: visible and at the final position
        transition={{ duration: 0.5 }} // Transition duration
        className="text-5xl text-white font-bold text-center rounded-lg shadow-md" // Styling with contrasting colors and shadow
      >
        Let's Dive in to My Journey
      </motion.div>
      <span className="text-center text-2xl  md:text-3xl font-mono font-extrabold text-black my-4">
        <FlipWords words={words} />
      </span>
    </LampContainer>
  );
}
