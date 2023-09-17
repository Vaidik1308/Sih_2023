import React, { useContext,useState } from 'react'
import Header from '../../Components/CoursePage/Header'
import CourseContent from './CourseContent'
import Progress from './Progress'
import DataContext from '../../context/DataContext'
import { Outlet } from 'react-router-dom'


const Course = () => {

  // const { isProgress,setIsProgress,isLearn,setIsLearn } = useContext(DataContext)
  const [isOption1,setIsOption1] = useState<boolean>(true)
  const [isOption2,setIsOption2] = useState<boolean>(false) 
  return (
        <div className='flex flex-col w-full'>
            <Header
              isOption1 = {isOption1} 
              setIsOption1={setIsOption1}
              isOption2={isOption2}
              setIsOption2={setIsOption2}
              header1='Learn'
              header2='Progress'
              path1='/skills/courses'
              path2='/skills/progress'
            />
            {/* {isOption1 && (
              <CourseContent/>
            )}
            {isOption2 && (
              <Progress/>
            )} */}
            <Outlet/>
        </div>        
  )
}

export default Course