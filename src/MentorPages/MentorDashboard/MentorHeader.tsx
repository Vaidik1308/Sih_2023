import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const MentorHeader = ({title,create,path1}) => {
  return (
    <main className='w-[95%] mx-auto h-[20vh] flex justify-between items-center'>
      <section className='w-[45%]'>
        <h1 className='text-[2rem] w-fit font-[500] border-b-[3px] rounded-lg border-solid border-[#FF8C38]'>{title}</h1>
      </section>
      <section className='w-[45%] flex justify-end'>
        <Link to={path1} className='w-[75%]'>

        <button className='text-[1.5rem] p-2 text-white rounded-lg bg-[#0CB407] font-[500]  flex items-center justify-center gap-2'>{create} <AiOutlinePlus/></button>
        
        </Link>
      </section>
    </main>
  )
}

export default MentorHeader