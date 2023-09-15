import React from 'react'
import { Link } from 'react-router-dom'
import {FiArrowUpRight} from 'react-icons/fi'
import {AiTwotoneHeart} from 'react-icons/ai'

const SingleJobs = () => {
  return (
    <section className=' h-fit  gap-6 flex flex-col border-[4px] max-w-[45%]  p-4 rounded-lg border-solid border-gray-400 border-opacity-[0.4]  items-center bg-gray-100'>
            <article className='w-[100%] flex gap-4 justify-between items-start'>
                <div className='min-w-[45%] w-fit flex flex-col gap-1'>
                    <h1 className='text-[1.5rem] font-[600]'>Job name</h1>
                    <p>Posted a day ago</p>
                </div>
                <div className='w-[25%] rounded-lg flex justify-center  items-center gap-2 bg-gray-500 text-white p-2'>
                    <button>
                        <AiTwotoneHeart className='text-red-500 text-[1.9rem] opacity-[100%]'/>
                    </button>
                    <p className='text-[1.3rem]'>Save</p>
                </div>
            </article>
            <article>
                <p>Job description lorem ipsum debd edge dwduwbd wdhbwdvw dwuw dwuw dwjndnw ddihdyf fiyq dbftv</p>
            </article>
            <article className='w-full'>
                <Link to='/features/jobs/alljobs'>
                    <button className='bg-[#43D02C] w-[35%] p-2 text-white text-[1rem] font-[600] rounded-lg flex items-center justify-center gap-1'>
                        <p>Apply Now</p>
                        <FiArrowUpRight className='text-[1.5rem]'/>
                    </button>
                </Link>
               
            </article>
        </section>
  )
}

export default SingleJobs