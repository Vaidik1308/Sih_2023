import React from 'react'
import profilePic from '../../assets/coursePage/profilePic.png'
import { Link } from 'react-router-dom'


const SingleCourse = () => {
  return (
    <section className=' h-fit flex gap-2 border-[4px] w-[90%] p-4 rounded-lg border-solid border-gray-400 border-opacity-[0.4]  items-center'>
                <article className='w-[70%] flex flex-col gap-4'>
                    <div className='min-w-[45%] w-fit flex flex-col gap-1'>
                        <h1 className='text-[1.5rem] font-[600]'>English Speaking Course</h1>
                        <p>Beginner to Amateur Level</p>
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <p className='font-[500] italic'>By Shivam Aryan</p>
                        <p className='text-[0.75rem]'>Created on 8th August, 2023</p>
                    </div>
                    <Link to='/features/skills/courses/1'>
                        <button className='bg-[#43D02C] w-[55%] p-2 text-white text-[1rem] font-[600] rounded-lg'>
                            Enroll Now
                        </button>
                    </Link>
                </article>
                <article>
                    <img src={profilePic} alt="" />
                </article>
            </section>
  )
}

export default SingleCourse