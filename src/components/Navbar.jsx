import React from 'react'
import { MdExpandMore } from "react-icons/md";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='nav flex w-full bg-white h-[10vh] items-center justify-end text-black border-b-2 border-[#848484] p-1'>

        <div className='flex items-center gap-2'>

          <FaBell className='text-xl'/>

          <div className='profile flex items-center pr-5'>
            <div className='h-8 w-8 bg-black rounded-full'></div>
            <div className='leading-tight pl-2'>
              <h3 className='font-semibold text-black text-sm'>Abhishek Sharma</h3>
              <h4 className='text-sm'>Developer</h4>
            </div>
            <MdExpandMore className='text-black text-2xl font-semibold mb-5'/>  
          </div>
        </div>
      </div>
  )
}

export default Navbar