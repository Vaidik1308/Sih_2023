import React from 'react'
import ngoFunding1 from '../../../assets/ruralAid/ngoFunding1.png'
import {FiArrowUpRight} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const SingleNgo = () => {
  return (
    <section className=' h-fit flex gap-2 border-[4px] w-[90%] p-4 rounded-lg border-solid border-gray-400 border-opacity-[0.4]  items-center bg-gray-100'>
            <article className='w-[70%] flex flex-col gap-4'>
                <div className='min-w-[45%] w-fit flex flex-col gap-1'>
                    <h1 className='text-[1.5rem] font-[600]'>Swades Foundation</h1>
                    {/* <p>For all Indian citizens</p> */}
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <p className='font-[500] '>Secondary School Scholarship </p>
                    <p className='text-[0.75rem]'>100+ students have already applied for this </p>
                </div>
                <Link to='/features/ruralaid/ngofunding/1'>
                <button className='bg-[#43D02C] w-[55%] p-2 text-white text-[1rem] font-[600] rounded-lg flex items-center justify-center gap-1'>
                    <p>Apply Now</p>
                    <FiArrowUpRight className='text-[1.5rem]'/>
                </button>
                </Link>
            </article>
            <article>
                <img src={ngoFunding1} alt="" />
            </article>
        </section>
  )
}

export default SingleNgo