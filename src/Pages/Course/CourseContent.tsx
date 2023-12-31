import React ,{useState,useEffect,useContext} from 'react'
import { db } from '../../config/firebase-config';
import Scrollbar from "react-custom-scrollbars";
import SingleCourse from './SingleCourse';
import { collection, addDoc, getDocs } from "firebase/firestore"
import DataContext from '../../context/DataContext';


const CourseContent = () => {
  
  const {featuresData} = useContext(DataContext)

  return (
    <Scrollbar
    style={{ width: "100%", height: "80vh"  }}
    className="App  "
    autoHide
    removeTracksWhenNotUsed
    >
        <main className='p-4 grid w-[95%] h-[80vh] mt-8  gap-4 grid-cols-2 mx-auto '>
          {featuresData  && (
            featuresData.map((course) => (
              <SingleCourse
                course={course} 
              />
            ))
          )}
        </main>
    </Scrollbar>
  )
}

export default CourseContent