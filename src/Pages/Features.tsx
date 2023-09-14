import React from 'react'
import Sidebar from '../Components/CoursePage/Sidebar'
import { Outlet } from 'react-router-dom'

const Features = () => {
  return (
    <main className=' grid grid-cols-8 w-full h-fit'>
        <Sidebar/>
        <Outlet/>        
    </main>
  )
}

export default Features