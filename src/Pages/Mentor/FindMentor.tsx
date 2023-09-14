import React from 'react'
import Scrollbar from "react-custom-scrollbars";
import pic1 from '../../assets/coursePage/profilePic.png'
import {FiArrowUpRight} from 'react-icons/fi'

const FindMentor = () => {
  return (
    <Scrollbar
    style={{ width: "100%", height: "80vh"  }}
    className="App  "
    autoHide
    removeTracksWhenNotUsed
    >
        <main className='p-4 grid w-[95%] h-[80vh] mt-8  gap-4 grid-cols-2 mx-auto  '>
        <section className=' h-fit flex gap-2 border-[4px] w-[90%] p-4 rounded-lg border-solid border-gray-400 border-opacity-[0.4]  items-center bg-gray-100'>
            <article className='w-[70%] flex flex-col gap-4'>
                <div className='min-w-[45%] w-fit flex flex-col gap-1'>
                    <h1 className='text-[1.5rem] font-[600]'>Shivam Aryan</h1>
                    {/* <p>Language Skill Development and Growth</p> */}
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <p className='font-[500] '>Language Skill Development and Growth</p>
                    <p className='text-[0.75rem]'>Joined since 8th August, 2023</p>
                </div>
                <button className='bg-[#43D02C] w-[55%] p-2 text-white text-[1rem] font-[600] rounded-lg flex items-center justify-center gap-1'>
                    <p>Enroll Now</p>
                    {/* <FiArrowUpRight className='text-[1.5rem]'/> */}
                </button>
            </article>
            <article>
                <img src={pic1} alt="" />
            </article>
        </section>
        
        
    </main>
    </Scrollbar>
  )
}

export default FindMentor