import React from 'react'
import { MdFilterListAlt } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Card from './Card';


const Hero = () => {
  return (
    <div className='p-5 h-[90vh] bg-[#F5F5F5] w-full overflow-hidden' >
      <div className='rounded-md p-3 bg-white'>

        <h3 className='text-xl font-semibold mb-4'>Portfolio</h3>
  
        <div className='flex justify-between items-center'>

          <ul className='flex gap-10 text-sm w-[50%] border-b border-gray-700 pb-1 font-medium px-3'>
            <li className='text-[#DF5532] font-bold'>Project</li>
            <li>Saved</li>
            <li>Shared</li>
            <li>Achievment</li>
        
          </ul>

          <div className='flex w-[50%] justify-end'> 
            <div className='flex items-center pr-7'>
              <MdFilterListAlt />
              <h3>Filter</h3>
            </div>

            <div className='searchbar border px-2 py-1 w-[50%] text-sm rounded-md flex'>
              <input type="text" placeholder='Search a project' className='w-[100%]'/>
              <div className='bg-[#DF5532] w-5 h-5 rounded-md flex justify-center items-center text-white'>
                <IoIosSearch />
              </div>
            </div>

          </div>

        </div>

        <div className='cards flex flex-col gap-3 py-4'>
          <Card/>
          <Card/>
          <Card/>
            
        </div>
        
      </div>
    </div>
  )
}

export default Hero