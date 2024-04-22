import React from 'react';
import NavC from './NavC';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center md: space-x-10 md: m-4">
      <a href="/"><NavC name="Contact"  /></a>
      <a href="/resume.pdf" download="resume.pdf" target='_blank'><NavC name="Resume" /></a>
      <a href="/"><NavC name="About" /></a>
      <a href="/"><NavC name="Certificate" /></a>
      <a href="/"><NavC name="Projects" /></a>
    </div>
  );
};

export default Navbar;
