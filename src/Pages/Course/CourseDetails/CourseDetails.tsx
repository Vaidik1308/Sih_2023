import React ,{useState,useEffect} from 'react'
import { db } from '../../../config/firebase-config';
import { useParams } from 'react-router-dom'
import { collection, addDoc, getDocs } from "firebase/firestore"
import pic1 from '../../../assets/coursePage/courseDetails/pic.png'

const CourseDetails = () => {
    const {id} = useParams()
    const [courses,setCourses] = useState([])
    const fetchPost = async () => {
        
        await getDocs(collection(db, "coursesDB"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                    setCourses(newData);                
                // console.log(course, newData);
            })
    
    }
useEffect(() => {
  fetchPost()
}, [])
    const course = courses.find((course) => ( course?.id.toString() === id?.toString()) )
    console.log(course);
    
  return (
    <>
        {course && (
            <main className='w-[100%] mt-8'>
            <section className='w-[90%] mx-auto flex justify-between'>
                <article className='w-[65%] flex flex-col gap-4'>
                    <div>
                        <h1 className='text-[2rem] font-[600]'>{course.name}</h1>
                    </div>
                    <div>
                        <p className='text-[1.45rem]'>{course?.level}</p>
                        <p className='text-[0.9rem]'>Created on <span>{course.createdOn}</span></p>
                    </div>
                </article>
                <article className='w-[30%]'>
                    <img className='w-[60%]' src={pic1} alt="" />
                </article>
            </section>
            <section className='w-[90%] mx-auto flex flex-col gap-2 '>
                <h3 className='text-[1.5rem] font-[600]'>Description</h3>
                <p className='w-[85%] text-[1.125rem]'>
                    {course.description}
                </p>
            </section>
            <section className='w-[90%] mx-auto mb-8 my-4'>
                <article className='mb-3'>
                    <h5 className='text-[1.5rem] font-[600]'>Skills You will be learning</h5>
                </article>
                <article className='flex gap-4 flex-wrap'>
                    { course?.skills && (
                        course?.skills.map((skill) => (
                            <div className='p-3 shadow-lg rounded-lg w-fit bg-[#F7F9B6]'>
                                <p className='font-[500]'>{skill}</p>
                            </div>
                        ))
                        )}
                    
                    
                </article>
            </section>
            <section className='w-full flex justify-center items-center' >
                <button className='w-[40%] text-[1.5rem] font-[600] rounded-lg min-h-[6vh] text-white bg-[#ED8129]' >Enroll Now</button>
            </section>
        </main>
        )}
    </>
  )
}

export default CourseDetails