import React from 'react'
import NavC from './NavC'

const Navbar = () => {
  return (
   <div className="w-[1024px] h-[60px] justify-start items-start gap-[71px] inline-flex ml-[300px] mt-[50px]">
    <NavC name = "Contact" />
    <NavC name = "Resume" />
    <NavC name= "About" />
    <NavC name="Certificate" />
    <NavC name="Projects" />
   </div>
  )
}

export default Navbar