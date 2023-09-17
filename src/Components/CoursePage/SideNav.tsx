import React,{useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {FaGraduationCap,FaHandshake} from 'react-icons/fa6'
import {BsPersonVideo3,BsBriefcaseFill,BsPersonCircle} from 'react-icons/bs'
import DataContext from '../../context/DataContext'

const SideNav = () => {
    const location = useLocation()
    const {field,setField} = useContext(DataContext)
  return (
    <main className=' pl-6  flex flex-col justify-evenly min-h-[55vh]'>
        <section style={location.pathname.includes('/skills' || 'features/skills') ? {
            color:"#ED8129"
        }: {
            color:"white"
        }}  className='flex gap-6 '>
            <FaGraduationCap className='text-[1.9rem]'/>
            <Link className={ 'text-[1.275rem]'}  to='/features/skills/courses'>Skills</Link>
        </section>
        <section style={location.pathname.includes('/features/mentor') ? {
            color:"#ED8129"
        }: {
            color:"white"
        }}  className='flex gap-6 x'>
            <BsPersonVideo3 className='text-[1.9rem]'/>
            <Link className='text-[1.275rem]' to='/features/mentor'>Mentor</Link>
        </section>
        <section style={location.pathname.includes('/features/jobs') ? {
            color:"#ED8129"
        }: {
            color:"white"
        }}   className='flex gap-6 x'>
            <BsBriefcaseFill className='text-[1.9rem]'/>
            <Link className='text-[1.275rem]' to='/features/jobs/alljobs'><button onClick={() => setField('jobDB') } >Jobs</button></Link>
        </section>
        <section style={location.pathname.includes('features/ruralaid/') ? {
            color:"#ED8129"
        }: {
            color:"white"
        }}  className='flex gap-6 x'>
            <FaHandshake className='text-[1.9rem]'/>
            <Link className='text-[1.275rem]' to='/features/ruralaid/govschemes'><button onClick={() => setField('ruralAidGovtDB') }  >Rural Aid</button></Link>
        </section>
        <section className='flex gap-6 x'>
            <BsPersonCircle className='text-[1.9rem]'/>
            <Link className='text-[1.275rem]' to='/'>Logout</Link>
        </section>
    </main>
  )
}

export default SideNav