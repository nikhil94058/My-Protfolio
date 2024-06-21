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
import arrow from '/public/arrow.svg'; // Update the path if necessary

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
      <Header />
      <motion.main
        className='flex-grow'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Intro />
        <center>
          {showArrow && (
            <div className="flex justify-center bottom-2 right-1/2 absolute animate-bounce rounded-full">
              <Image src={arrow} alt="Scroll Down" width={50} height={50} />

            </div>
          )}
        </center>
        <Experience />
        {showArrow && (
          <div className="flex justify-center mt-4">
            <Image src={arrow} alt="Scroll Down" width={50} height={50} />

          </div>
        )}
        <Certificates />
        <Projects />
        <Testimonial comments={comments} />
      </motion.main>
      <Footer />
    </Layout>
  );
};

export default HomePage;
