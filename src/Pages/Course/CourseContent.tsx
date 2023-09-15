import React  from 'react'

import Scrollbar from "react-custom-scrollbars";
import SingleCourse from './SingleCourse';


const CourseContent = () => {
    
  return (
    <Scrollbar
    style={{ width: "100%", height: "80vh"  }}
    className="App  "
    autoHide
    removeTracksWhenNotUsed
    >
        <main className='p-4 grid w-[95%] h-[80vh] mt-8  gap-4 grid-cols-2 mx-auto '>
            <SingleCourse/>
        </main>
    </Scrollbar>
  )
}

export default CourseContent