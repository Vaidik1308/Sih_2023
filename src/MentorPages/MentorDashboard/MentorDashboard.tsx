import React from 'react'
import MentorSidebar from './MentorSidebar'
import { Outlet } from 'react-router-dom'

const MentorDashboard = () => {
  return (
    <main className='flex w-full '>
      <div className='w-[20%]'>
        <MentorSidebar/>
      </div>
      <div className='w-[75%]'>
        <Outlet/>
      </div>
    </main>
  )
}

export default MentorDashboard