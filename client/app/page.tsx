import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Image from "next/image";
import { poppins_semibold, roboto_mono } from './font'
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import photo from "@/public/Profile.png"
import Contacts from "@/components/Contacts";
export default function Home() {
  return (
    <main className=" bg-gray-800 rounded-3xl shadow-inner" >
      <Navbar />
      <center>
      <div className="mx-auto justify-center">
        <img className="w-[474px] h-[400px] relative " src="/Profile-pic.png"/>
      </div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
      </center>
     
    
      <Footer />
    </main>
  );
}
