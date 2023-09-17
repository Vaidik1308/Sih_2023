import React from 'react'
import pic1 from '../../../assets/ruralAid/pic1.png'
import {FiArrowUpRight} from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom';

const SingleScheme = ({data,setField}) => {
  return (
    <section className='  min-h-[18vh] flex gap-2 border-[4px] w-[45%] p-4 rounded-lg border-solid border-gray-400 border-opacity-[0.4]  items-center bg-gray-100'>
            <article className='w-[70%] h-full flex flex-col gap-4 justify-between'>
                <div className='min-w-[45%] w-fit flex flex-col gap-1'>
                    <h1 className='text-[1.5rem] font-[600]'>{data.name}</h1>
                    {/* <p>For all Indian citizens</p> */}
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <p className='font-[500] '>{data.shortdesc}</p>
                    <p className='text-[0.75rem]'>Started from 2003</p>
                </div>
                <Link to={`/features/ruralaid/govschemes/${data.id}`}>
                    <button onClick={() => setField('ruralAidGovtDB')} className='bg-[#43D02C] w-[55%] p-2 text-white text-[1rem] font-[600] rounded-lg flex items-center justify-center gap-1'>
                        <p>Apply Now</p>
                        <FiArrowUpRight className='text-[1.5rem]'/>
                    </button>
                </Link>
            </article>
            <article>
                <img src={pic1} alt="" />
            </article>
    </section>
  )
}

export default SingleScheme