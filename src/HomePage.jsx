import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
const HomePage = () => {
  return (
    <>
    <div className='w-[80%] h-100vh flex flex-col'>
      <Navbar/>
      <Hero/>
    </div>
    </>
  )
}

export default HomePage