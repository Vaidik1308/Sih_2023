import React from 'react'
import MentorSidebar from './MentorSidebar'
import { Outlet } from 'react-router-dom'

const MentorDashboard = () => {
  return (
    <main>
        <MentorSidebar/>
        <Outlet/>
    </main>
  )
}

export default MentorDashboard