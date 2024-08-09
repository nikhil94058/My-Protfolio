import React from 'react';

const Card1 = ({ comment, name, role, location }) => {
  return (
    <div className="dark:bg-gray-800 bg-white rounded-lg overflow-hidden shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex items-center gap-4">
        <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/50x50" alt="Avatar" />
        <div className="flex flex-col">
          <div className="text-white text-xl font-semibold leading-7">{name}</div>
          <div className="text-zinc-500 text-sm font-normal leading-[18px]">{role}</div>
          <div className="text-zinc-500 text-sm font-normal leading-[18px]">{location}</div>
        </div>
      </div>
      <div className="text-zinc-500 text-lg font-normal leading-7 mt-4">{comment}</div>
    </div>
  );
};

export default Card1;
