import React, { useState } from 'react'
import Header from '../../Components/CoursePage/Header'
import { Outlet } from 'react-router-dom'

const Jobs = () => {
  const [isOption1,setIsOption1] = useState<boolean>(true)
  const [isOption2,setIsOption2] = useState<boolean>(false)
  return (
    <div className='flex flex-col w-full'>
            <Header
              isOption1 = {isOption1} 
              setIsOption1={setIsOption1}
              isOption2={isOption2}
              setIsOption2={setIsOption2}
              header1='All Jobs'
              header2='Saved'
              path1={'/jobs/alljobs'}
              path2={'/jobs/savedjobs'}
            />
            
            <Outlet/>
    </div>
  )
}

export default Jobs