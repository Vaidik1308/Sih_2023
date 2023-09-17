import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FiArrowUpRight} from 'react-icons/fi'
import {AiTwotoneHeart} from 'react-icons/ai'

const SingleJobs = ({data}) => {
    const [selected,setSelected] = useState(false)
  return (
    <section className=' h-fit  gap-6 flex flex-col border-[4px] min-w-[45%]  p-4 rounded-lg border-solid border-gray-400 border-opacity-[0.4]  items-center bg-gray-100'>
            <article className='w-[100%] flex gap-4 justify-between items-start'>
                <div className='min-w-[45%] w-fit flex flex-col gap-1'>
                    <h1 className='text-[1.5rem] font-[600]'>{data.jobTitle}</h1>
                    <p>{`Company: ${data.company}`}</p>
                </div>
                <div className='w-[25%] rounded-lg flex justify-center  items-center gap-2 bg-gray-500 text-white p-2'>
                    <button onClick={() => setSelected(!selected)}>
                        <AiTwotoneHeart className={selected ? 'text-red-500 text-[1.9rem]  duration-300' : 'text-[1.9rem] duration-300'}/>
                    </button>
                    <p className='text-[1.3rem]'>Save</p>
                </div>
            </article>
            <article className=' text-left w-full '>
                <p>{data.desc}</p>
            </article>
            <article className='w-full'>
                <Link to='/features/jobs/alljobs'>
                    <button  className='bg-[#43D02C] w-[35%] p-2 text-white text-[1rem] font-[600] rounded-lg flex items-center justify-center gap-1'>
                        <p>Apply Now</p>
                        <FiArrowUpRight className='text-[1.5rem]'/>
                    </button>
                </Link>
               
            </article>
        </section>
  )
}

export default SingleJobs