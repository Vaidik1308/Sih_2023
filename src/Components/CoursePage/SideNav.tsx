import React from 'react'
import { Link } from 'react-router-dom'
import {FaGraduationCap,FaHandshake} from 'react-icons/fa6'
import {BsPersonVideo3,BsBriefcaseFill,BsPersonCircle} from 'react-icons/bs'

const SideNav = () => {
  return (
    <main className=' pl-6  flex flex-col justify-evenly min-h-[55vh]'>
        <section className='flex gap-6 '>
            <FaGraduationCap className='text-[1.9rem]'/>
            <Link className='text-[1.275rem]' to='/'>Skills</Link>
        </section>
        <section className='flex gap-6 x'>
            <BsPersonVideo3 className='text-[1.9rem]'/>
            <Link className='text-[1.275rem]' to='/'>Mentor</Link>
        </section>
        <section className='flex gap-6 x'>
            <BsBriefcaseFill className='text-[1.9rem]'/>
            <Link className='text-[1.275rem]' to='/'>Jobs</Link>
        </section>
        <section className='flex gap-6 x'>
            <FaHandshake className='text-[1.9rem]'/>
            <Link className='text-[1.275rem]' to='/'>Rural Aid</Link>
        </section>
        <section className='flex gap-6 x'>
            <BsPersonCircle className='text-[1.9rem]'/>
            <Link className='text-[1.275rem]' to='/'>Logout</Link>
        </section>
    </main>
  )
}

export default SideNav