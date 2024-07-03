import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/path-to-cloud-bg.jpg') no-repeat center center;
  background-size: cover;
  height: 100vh;
`;

const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <Layout>
      <ContactContainer>
        <div style={{ flex: 1 }}>
          <Spline scene="https://prod.spline.design/ab15UFzaeRmHeixC/scene.splinecode" />
        </div>
        <AnimatePresence>
          {!formSubmitted && (
            <FormContainer
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>
                <label>
                  Message:
                  <textarea name="message" required></textarea>
                </label>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                >
                  Send
                </motion.button>
              </form>
            </FormContainer>
          )}
        </AnimatePresence>
      </ContactContainer>
    </Layout>
  );
};

export default Contact;
