import React from 'react'
import Header from '../../Components/CoursePage/Header'
import Sidebar from '../../Components/CoursePage/Sidebar'
import CourseContent from './CourseContent'
import Scrollbar from "react-custom-scrollbars";

const Course = () => {
  return (
    <main className=' grid grid-cols-8 w-full'>
        <Sidebar/>
        <div className='flex flex-col'>
            <Header/>
            
            <CourseContent/>
        </div>        
    </main>
  )
}

export default Course