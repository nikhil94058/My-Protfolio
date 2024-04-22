
import React from 'react'
import NavC from './NavC'
import Typewriter from 'typewriter-effect'; 
import mongo from '@/public/mongo.svg'
import Footer from './Footer';
const Hero = () => {
  return (
    <div>
      <div>
      <center>
      <div className="text-center text-white text-[38px] font-normal font-'Poppins' leading-normal tracking-tight">Hey</div>
      <div className="text-center text-white text-[62px] font-bold font-['Poppins'] leading-normal tracking-tight">I’m Nikhil Kumar Das</div>
      
      <div className="w-[537px] max-h-fit justify-center items-start gap-[5px] inline-flex">
    <div className="text-white text-[38px] font-medium font-'Poppins' leading-[52px] tracking-tight">
    <Typewriter 
        onInit={(typewriter) => { 
          typewriter.typeString('Software Developer') 
            .pauseFor(2500) 
            .deleteAll()  
            typewriter.typeString('Full Stack Blockchain Developer')
            .pauseFor(2500) 
            .deleteAll()  
            typewriter.typeString('Designer')
            .pauseFor(2500) 
            .deleteAll() 
            .start(); 
        }} 
      />
    </div>
  <div className="w-[5px] h-[52px] bg-red-600" />
  
</div>
<br />
<br />
<br />
<br />

<div className="w-[695px] text-center text-white text-[21px] font-light font-['Poppins'] leading-7 tracking-tight">A highly motivated student studying Artificial Intelligence and Machine Learning. Actively seeking opportunities to apply my skills and knowledge to real-world projects and contribute to the advancement of the industry.</div>

<br />
<br />
<div className="w-[988px] h-[1176px] relative">
 <div className='flex space-x-[70px] justify-center'>
 <button><NavC name = "Learn more" /></button>
  <button><NavC name = "Contact me" /></button>
 </div>
{/*Place For Footer*/ }
</div>

      </center>
      
      </div>
      
<div>
  
</div>

    </div>  
  )
}

export default Hero