// NavC.js
import React from 'react';
import { poppins_semibold } from '@/app/font';

const NavC = ({ name }) => {
  return (
    <div className="w-[148px] h-[60px] relative">
      <div className="w-[148px] h-[60px] relative  bg-zinc-800 rounded-3xl shadow hover:bg-violet-600 transition duration-300">
        <div className="flex cursor-grabbing justify-center items-center h-full text-white" style={{ ...poppins_semibold, fontSize: '1.375rem', lineHeight: '1.5' }}>
          {name}
        </div>
      </div>
    </div>
  );
}

export default NavC;
