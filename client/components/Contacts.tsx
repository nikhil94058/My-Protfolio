import React from 'react'
import Line from './Line'
import NavC from './NavC'

const Contacts = () => {
  return (
    <div >
      <div className="text-left text-white text-[34px] font-medium font-['Poppins'] leading-normal tracking-tight">Contact Me</div>
      <Line />
      <div className='flex space-x-9 justify-center'>
      <div className="w-[349.17px] h-[356px] bg-gradient-to-tl from-gray-800 to-gray-800 rounded-[29px] shadow border blur-sm mr-9" >
      <img className="w-[231px] h-[346px]" src="https://via.placeholder.com/231x346" />
      </div>
      <div className="text-center text-white text-opacity-50 text-[22px] font-medium font-'Poppins' leading-normal tracking-tight m-7 flex flex-col">
        
          <input type="text" className="w-[457px] h-[69px] bg-gray-800 rounded-xl shadow-inner mt-4 border-gray-100 border-2" placeholder='Name'/>
          <input type="text" className="w-[457px] h-[69px] bg-gray-800 rounded-xl shadow-inner mt-4 border-gray-100 border-2" placeholder='Email Id'/>
          <input type="text" className="w-[457px] h-[171px] bg-gray-800 rounded-xl shadow-inner mt-4 border-gray-100 border-2" placeholder='Message'/>
          <button className='mt-[100px]'><NavC name="Send" /></button>
      </div>
      
      </div>

    </div>
  )
}

export default Contacts