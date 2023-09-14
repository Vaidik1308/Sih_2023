import React from 'react'
import Scrollbar from "react-custom-scrollbars";
import {FaAward,FaComputer} from 'react-icons/fa6'
import {RiEnglishInput} from 'react-icons/ri'
import {BsQuestionCircle} from 'react-icons/bs'

const Progress = () => {
  return (
    
    <main className='p-4 gap-4 flex flex-col w-[100%] h-[80vh] mt-8  mx-auto '>
        <section className='w-[90%] mx-auto border-solid border-black border-[1px] rounded-lg h-fit flex flex-col justify-start p-6 gap-6 items-start'>
            <div className='w-[45%]'>
                <h1 className='text-[2rem] font-[500]'>Badges Earned</h1>
            <div className='bg-[#0CB407] w-[45%] h-[0.5vh] ' ></div>
            </div>
            <div className='flex w-full flex-wrap gap-6'>
                <div className='flex flex-col w-fit min-w-[10%] h-fit min-h-[12vh] p-1 rounded-lg justify-center items-center bg-[#F6E89B] gap-1 shadow-lg'>
                    <FaAward className='text-[2.8rem]'/>
                    <p className='text-[0.75rem] font-[500]'>10+ course</p>
                </div>
                <div className='flex flex-col w-fit min-w-[10%] h-fit min-h-[12vh] p-1 rounded-lg justify-center items-center bg-[#F6E89B] gap-1 shadow-lg'>
                    <FaComputer className='text-[2.8rem]'/>
                    <p className='text-[0.75rem] font-[500]'>Computer Course</p>
                </div>
                <div className='flex flex-col w-fit min-w-[10%] h-fit min-h-[12vh] p-1 rounded-lg justify-center items-center bg-[#F6E89B] gap-1 shadow-lg'>
                    <RiEnglishInput className='text-[2.8rem]'/>
                    <p className='text-[0.75rem] font-[500]'>English Course</p>
                </div>

            </div>
        </section>
        <section className='w-[90%] mx-auto flex gap-4'>
            <article className='border-solid border-black border-[1px] h-fit p-2 rounded-lg w-[30%] '>
                <div className='flex flex-col p-2'>
                    <div className='w-[100%]'>
                        <h1 className='text-[2rem] font-[500]'>Your skill grade</h1>
                    </div>
                    <div className='bg-[#0CB407] w-[55%] h-[0.5vh] ' ></div>
                </div>
                <div className='w-full h-fit flex justify-center gap-10 items-center'>
                    <p className='font-[500]'>Current grade-</p>
                    <h2 className='text-[6rem] font-[600] text-[#18722C]'>A</h2>
                </div>
                <div className='w-[95%] mx-auto mb-2'>
                    <p className='font-[500]'>You are doing an amazing job!</p>
                </div>
                <div className='flex w-[95%] bg-[#C3C3C3] mx-auto p-1 rounded-lg gap-2'>
                    <BsQuestionCircle className='text-[2rem]'/>
                    <p className='text-[0.7rem] font-[500]'>Skill score helps NGOs to award scholarships, incentives and loans</p>
                </div>
            </article>
            <article className='border-solid border-black border-[1px] h-[40vh] rounded-lg w-[70%] p-4'>
                <div className='w-full '>
                    <div className='w-[100%]'>
                        <h1 className='text-[2rem] font-[500]'>Your activity</h1>
                    </div>
                    <div className='bg-[#0CB407] w-[20%] h-[0.5vh] ' ></div>
                </div>
                <section className='flex flex-col w-full justify-evenly h-[30vh]'>
                <div className='flex justify-between w-[90%] mx-auto text-[1.375rem]'>
                    <div>
                    <h5>Courses Enrolled :</h5>
                    </div>
                    <div>12</div>
                </div>
                <div className='flex justify-between w-[90%] mx-auto text-[1.375rem]'>
                    <div>
                    <h5>Courses Completed :</h5>
                    </div>
                    <div>12</div>
                </div>
                <div className='flex justify-between w-[90%] mx-auto text-[1.375rem]'>
                    <div>
                    <h5>Quizzes given :</h5>
                    </div>
                    <div>12</div>
                </div>
                <div className='flex justify-between w-[90%] mx-auto text-[1.375rem]'>
                    <div>
                    <h5>Quizzes Average Score :</h5>
                    </div>
                    <div>80%</div>
                </div>
                </section>
            </article>
        </section>
    </main>
    
  )
}

export default Progress