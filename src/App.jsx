import React from 'react'
import HomePage from './HomePage'
import SideBar from './components/SideBar'

const App = () => {
  return (
    <>
    <div className='flex'>
      <SideBar/>
      <HomePage/>
    </div>
      
    </>
  )
}

export default App