import React from 'react'
import Scrollbar from "react-custom-scrollbars";
import {FaAward,FaComputer} from 'react-icons/fa6'
import {RiEnglishInput} from 'react-icons/ri'

const Progress = () => {
  return (
    
    <main className='p-4 grid w-[100%] h-[80vh] mt-8  mx-auto '>
        <section className='w-[90%] mx-auto border-solid border-black border-[1px] rounded-lg h-fit flex flex-col justify-start p-6 gap-6 items-start'>
            <div className='w-[45%]'>
                <h1 className='text-[2rem] font-[500]'>Badges Earned</h1>
            <div className='bg-[#0CB407] w-[45%] h-[0.5vh] ' ></div>
            </div>
            <div className='flex w-full flex-wrap gap-6'>
                <div className='flex flex-col w-fit min-w-[10%] h-fit min-h-[12vh] p-1 rounded-lg justify-center items-center bg-[#F6E89B] gap-1'>
                    <FaAward className='text-[2.8rem]'/>
                    <p className='text-[0.75rem] font-[500]'>10+ course</p>
                </div>
                <div className='flex flex-col w-fit min-w-[10%] h-fit min-h-[12vh] p-1 rounded-lg justify-center items-center bg-[#F6E89B] gap-1'>
                    <FaComputer className='text-[2.8rem]'/>
                    <p className='text-[0.75rem] font-[500]'>Computer Course</p>
                </div>
                <div className='flex flex-col w-fit min-w-[10%] h-fit min-h-[12vh] p-1 rounded-lg justify-center items-center bg-[#F6E89B] gap-1'>
                    <RiEnglishInput className='text-[2.8rem]'/>
                    <p className='text-[0.75rem] font-[500]'>English Course</p>
                </div>

            </div>
        </section>
        <section>
            <article></article>
            <article></article>
        </section>
    </main>
    
  )
}

export default Progress