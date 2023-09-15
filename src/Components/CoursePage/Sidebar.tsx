import React from 'react'
import AccountBar from './AccountBar'
import SideNav from './SideNav'
import { useLocation } from 'react-router-dom'
import { log } from 'console'

const Sidebar = () => {
  const location = useLocation()
  console.log(location);
  
  return (
    <main className='bg-[#292929] text-white w-[100%] min-h-full h-fit rounded-r-[20px]'>
      <AccountBar/>
      <hr />
      <SideNav/>
    </main>
  )
}

export default Sidebar