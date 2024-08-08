import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import Spline from '@splinetool/react-spline';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait...");

    emailjs
      .send(
        'service_fevyldp',
        'template_ugqoa2q',
        params,
        'K6gH2NreYRndhhNxR'
      )
      .then(
        () => {
          toast.success("I have received your message, I will get back to you soon!", {
            id: toastId,
          });
        },
        (error) => {
          toast.error("There was an error sending your message, please try again later!", {
            id: toastId,
          });
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "CodeBucks",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
    setFormSubmitted(true);
  };

  return (
    <Layout>
      <div className="relative w-full h-screen bg-gray-900 text-white">
        <div className="absolute w-full h-full z-0">
          <Spline scene="https://prod.spline.design/ab15UFzaeRmHeixC/scene.splinecode" />
        </div>
        <AnimatePresence>
          {!formSubmitted && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="relative z-2 max-w-md w-full mx-auto mt-[20rem] p-6 bg-water bg-opacity-0 backdrop-blur-lg rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-4 bg-slate-500 bg-opacity-0 "
              >
                <motion.label variants={itemVariants} className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                      required: "This field is required!",
                      minLength: {
                        value: 3,
                        message: "Name should be at least 3 characters long.",
                      },
                    })}
                    className="w-full p-2 mt-1 border rounded-md shadow-sm bg-transparent text-white placeholder-transparent peer focus:outline-none"
                  />
                  <span className="absolute left-2 top-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-gray-200 transition-all text-sm">
                    Name
                  </span>
                  {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </motion.label>
                <motion.label variants={itemVariants} className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: "This field is required!" })}
                    className="w-full p-2 mt-1 border rounded-md shadow-sm bg-transparent text-white placeholder-transparent peer focus:outline-none"
                  />
                  <span className="absolute left-2 top-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-gray-200 transition-all text-sm">
                    Email
                  </span>
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </motion.label>
                <motion.label variants={itemVariants} className="relative">
                  <textarea
                    placeholder="Message"
                    {...register("message", {
                      required: "This field is required!",
                      maxLength: {
                        value: 500,
                        message: "Message should be less than 500 characters",
                      },
                      minLength: {
                        value: 50,
                        message: "Message should be more than 50 characters",
                      },
                    })}
                    className="w-full p-2 mt-1 border rounded-md shadow-sm bg-transparent text-white placeholder-transparent peer focus:outline-none"
                  />
                  <span className="absolute left-2 top-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-gray-200 transition-all text-sm">
                    Message
                  </span>
                  {errors.message && (
                    <span className="text-red-500">{errors.message.message}</span>
                  )}
                </motion.label>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md"
                >
                  Send
                </motion.button>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>
        <Toaster />
      </div>
    </Layout>
  );
};

export default Contact;
