import React from 'react'
import AccountBar from './AccountBar'
import SideNav from './SideNav'

const Sidebar = () => {
  return (
    <main className='bg-[#292929] text-white w-[100%] min-h-[100vh] h-fit rounded-r-[20px]'>
      <AccountBar/>
      <hr />
      <SideNav/>
    </main>
  )
}

export default Sidebar