import React from 'react'
import NavC from './NavC'

const About = () => {
  return (
    <div>
      <div className=' grid grid-cols-4 gap-4'>
        <img className='w-[157px] h-[157px] rounded-[89.50px]  bg-white' src="/nextjs.svg" alt="" />
        <img className='w-[157px] h-[157px] rounded-[89.50px]  bg-white' src="/nextjs.svg" alt="" />
        <img className='w-[157px] h-[157px] rounded-[89.50px]  bg-white' src="/nextjs.svg" alt="" />
        <img className='w-[157px] h-[157px] rounded-[89.50px]  bg-white' src="/nextjs.svg" alt="" />
        <img className='w-[157px] h-[157px] rounded-[89.50px]  bg-white' src="/nextjs.svg" alt="" />
      </div>
      <center>
      <div className="w-[1006px] h-[469px] relative ">
  <div className="w-[456px] left-[550px] top-[103px] absolute text-white text-[21px] font-light font-['Poppins'] leading-7 tracking-tight">I am actively seeking opportunities to apply my acquired skills and knowledge to real-world projects. My educational background has equipped me with a solid foundation in AI and ML algorithms, data analysis, and programming languages such as Python. Additionally, I have gained practical experience through hands-on projects, both independently and collaboratively.
  <ul className='list-disc mt-6 grid grid-cols-2 gap-4'>
    <li className='grow'>Name : Nikhil Kumar Das</li> 
    <li className='grow'>Web Developer</li>
    <li className='grow'>Designer</li>
    <li>Blockchain</li>
    <li>CGPA : Yet to release</li>
  </ul>
    </div>
  <div className="left-[650px] top-[20px] absolute  text-center text-white text-[34px] font-medium font-['Poppins'] leading-normal tracking-tight"> <NavC name='About' /> </div>
  <div className="w-[429.59px] h-[438px] left-[-16px] top-0 absolute">
    <div className="w-[429.59px] h-[438px] left-0 top-0 absolute bg-gradient-to-tl from-gray-800 to-zinc-900 rounded-[29px] shadow border blur-sm" />
    <img className="w-[422.12px] h-[422.12px] left-[3.74px] top-[15.88px] absolute" src="/profile.png" />
  </div>
</div>
      </center>
    </div>
  )
}

export default About