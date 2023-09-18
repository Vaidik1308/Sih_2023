import React,{useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {FaGraduationCap,FaHandshake} from 'react-icons/fa6'
import {ImStatsDots} from 'react-icons/im'
import {TbBuildingCommunity} from 'react-icons/tb'
import {BsPersonVideo3,BsFileEarmarkPost,BsPersonCircle} from 'react-icons/bs'
import MentorAccount from './MentorAccount'

const MentorSidebar = () => {
  return (
    <main className='bg-[#292929] text-white w-[100%] min-h-full h-[100vh] rounded-r-[20px]'>
      <MentorAccount/>
      <div className=' pl-6  flex flex-col justify-evenly min-h-[55vh] ' >
      <section   className='flex gap-6 '>
            <ImStatsDots className='text-[1.9rem]'/>
            <Link className={ 'text-[1.275rem]'}  to='/features/skills/courses'>Statistics</Link>
        </section>
        <section
        style={location.pathname.includes('mentorFeatures/1/community') ? {
          color:"#ED8129"
            }: {
                color:"white"
            }}   className='flex gap-6 x'>
            <TbBuildingCommunity className='text-[1.9rem]'/>
            <Link className='text-[1.275rem]' to='/mentorFeatures/1/community'>Communities</Link>
        </section>
        <section    className='flex gap-6 x'>
            <BsFileEarmarkPost className='text-[1.9rem]'/>
            <Link className='text-[1.275rem]' to='/features/jobs/alljobs'> Posts</Link>
        </section>

        <section className='flex gap-6 x'>
            <BsPersonCircle className='text-[1.9rem]'/>
            <Link className='text-[1.275rem]' to='/'>Logout</Link>
        </section>
      </div>
    </main>
  )
}

export default MentorSidebar