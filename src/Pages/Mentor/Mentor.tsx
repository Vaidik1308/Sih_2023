import React,{useState} from 'react'
import Header from '../../Components/CoursePage/Header'
import { Outlet } from 'react-router-dom'

const Mentor = () => {
  const [isOption1,setIsOption1] = useState<boolean>(true)
  const [isOption2,setIsOption2] = useState<boolean>(false)
  return (
    <div className='flex flex-col w-full'>
            <Header
              isOption1 = {isOption1} 
              setIsOption1={setIsOption1}
              isOption2={isOption2}
              setIsOption2={setIsOption2}
              header1='Find Mentors'
              header2='Your Mentors'
              path1={'/mentor/findmentor'}
              path2={'/mentor/yourmentor'}
            />
            {/* {isOption1 && (
              <FindMentor/>
            )} */}
            {/* {isOption2 && (
              <Progress/>
            )} */}
            <Outlet/>
    </div>
  )
}

export default Mentor