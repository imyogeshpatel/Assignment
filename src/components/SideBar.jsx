import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { HiSpeakerphone } from "react-icons/hi";
import { MdInput } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLogoApple } from "react-icons/io";






const SideBar = () => {
  return (
    <div className='h-screen w-[20%] bg-[#DF5532] text-white'>

        <div className='text-2xl font-bold pl-4 pt-5 flex'> 
            <IoLogoApple className='text-3xl'/>
            <h3 className='pl-1'>LOGO</h3>
        </div>

        <div className='menu pl-5 mt-10 flex flex-col gap-4'>

            <div className='flex items-center '>
                <RxDashboard className='text-2xl'/>
                <h3 className='font-semibold ml-2'>Dashboard</h3>
            </div>

            <div className='flex items-center'>
                <HiSpeakerphone className='text-2xl'/>
                <h3 className='font-semibold ml-2'>Portfolio</h3>
            </div>

            <div className='flex items-center'>
                <MdInput className='text-2xl'/>
                <h3 className='font-semibold ml-2'>Inputs</h3>
            </div>

            <div className='flex items-center'>
                <CgProfile className='text-2xl'/>
                <h3 className='font-semibold ml-2'>Profile</h3>
            </div>
        </div>
    </div>
  )
}

export default SideBar