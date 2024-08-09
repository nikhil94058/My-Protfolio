import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Experience from '../components/Experience';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Certificates from '../components/Certificates';
import TechStack from '../components/TechStack';
import Spline from '@splinetool/react-spline';
import arrow from '/public/arrow.svg'; // Update the path if necessary
import { FaArrowDown, FaReact, FaLinkedin, FaFacebook, FaNodeJs, FaNextJs } from 'react-icons/fa'; // Example icons, adjust as needed
const comments = [
  {
    comment: 'This is a fantastic product. I love it!',
    name: 'John Doe',
    roles: 'Frontend Developer',
    location: 'New York',
  },
  {
    comment: 'Great service! Will definitely recommend to others.',
    name: 'Jane Smith',
    roles: 'Product Manager',
    location: 'San Francisco',
  },
  {
    comment: 'Impressive quality and timely delivery.',
    name: 'Bob Johnson',
    roles: 'UI/UX Designer',
    location: 'Chicago',
  },
  // Add more comments here
];

const HomePage = () => {
  const [showArrow, setShowArrow] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>My Portfolio</title>

      </Head>

      <motion.main
        className='flex-grow dark:bg-neutral-900 z-2'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Spline scene="https://prod.spline.design/6ZRTkJrPgBgkFhJQ/scene.splinecode" className="absolute inset-0 z-0 w-full" />
        <Intro />
        <center>
          {showArrow && (
            <div className="flex bg-white dark:bg-blue-800 justify-center bottom-2 right-1/2 absolute animate-bounce rounded-full">
              {/* Light Mode Image */}
              <img src='/alight.png' alt="Light Mode" className="block dark:hidden w-20 h-20" />
              {/* Dark Mode Image */}
              <img src='/arrow.svg' alt="Dark Mode" className="hidden dark:block w-20 h-20" />
            </div>
          )}
        </center>
        <br />
        <br />
        <br />
        <Experience />
        <Certificates />
        <Projects />
        <Testimonial comments={comments} />
      </motion.main>

    </Layout>
  );
};

export default HomePage;
