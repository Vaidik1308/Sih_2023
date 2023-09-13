import React, { useContext } from 'react'
import Header from '../../Components/CoursePage/Header'
import Sidebar from '../../Components/CoursePage/Sidebar'
import CourseContent from './CourseContent'
import Progress from './Progress'
import DataContext from '../../context/DataContext'
const Course = () => {

  const { isProgress,setIsProgress,isLearn,setIsLearn } = useContext(DataContext)

  return (
    <main className=' grid grid-cols-8 w-full h-fit'>
        <Sidebar/>
        <div className='flex flex-col w-full'>
            <Header/>
            {isLearn && (
              <CourseContent/>
            )}
            {isProgress && (
              <Progress/>
            )}
        </div>        
    </main>
  )
}

export default Course