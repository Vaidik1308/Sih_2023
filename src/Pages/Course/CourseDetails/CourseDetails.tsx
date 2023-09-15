import React from 'react'
import { useParams } from 'react-router-dom'
import pic1 from '../../../assets/coursePage/courseDetails/pic.png'

const CourseDetails = () => {
    const {id} = useParams()
  return (
    <main className='w-[100%] mt-8'>
        <section className='w-[90%] mx-auto flex justify-between'>
            <article className='w-[65%] flex flex-col gap-4'>
                <div>
                    <h1 className='text-[2rem] font-[600]'>Computer Course for Rural Youth</h1>
                </div>
                <div>
                    <p className='text-[1.45rem]'>Beginner level</p>
                    <p className='text-[0.9rem]'>Created on <span>25-9-23</span></p>
                </div>
            </article>
            <article className='w-[30%]'>
                <img className='w-[60%]' src={pic1} alt="" />
            </article>
        </section>
        <section className='w-[90%] mx-auto flex flex-col gap-2 '>
            <h3 className='text-[1.5rem] font-[600]'>Description</h3>
            <p className='w-[85%] text-[1.125rem]'>
                This beginner-level computer course, offered by Smile Foundation, is designed to empower rural youth with essential digital skills. Participants will learn the basics of computer operation, including using the keyboard and mouse, navigating the desktop, and understanding file management.
            </p>
        </section>
        <section className='w-[90%] mx-auto mb-8 my-4'>
            <article className='mb-3'>
                <h5 className='text-[1.5rem] font-[600]'>Skills You will be learning</h5>
            </article>
            <article className='flex gap-4 flex-wrap'>
                <div className='p-3 shadow-lg rounded-lg w-fit bg-[#F7F9B6]'>
                    <p className='font-[500]'>Computer Skills</p>
                </div>
                <div className='p-3 shadow-lg rounded-lg w-fit bg-[#F7F9B6]'>
                    <p className='font-[500]'>File Management</p>
                </div>
                
            </article>
        </section>
        <section className='w-full flex justify-center items-center' >
            <button className='w-[40%] text-[1.5rem] font-[600] rounded-lg min-h-[6vh] text-white bg-[#ED8129]' >Enroll Now</button>
        </section>
    </main>
  )
}

export default CourseDetails