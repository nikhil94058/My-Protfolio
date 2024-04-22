"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Image from "next/image";
import { motion } from "framer-motion"
import { poppins_semibold, roboto_mono } from './font'
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import photo from "@/public/Profile.png"
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main className=" bg-gray-800 rounded-3xl  h-auto flex flex-col justify-center">
     
    <div >
      <Navbar />
      <div className="flex space-between m-9 p-3">
      <div className=" "><Hero /></div>
     
      <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
     <div className= ""><img src="\profile-pic.png" alt="" /></div>
  </motion.div>
      </div>

      
    </div>
     

    </main>
  );
}
