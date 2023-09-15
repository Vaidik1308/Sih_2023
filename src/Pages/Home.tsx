import { Divider } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className=' mb-20 relative back bg-no-repeat bg-cover  flex flex-col justify-center items-start px-4 bg-blue-200 w-full gap-10 h-[75vh]'>
      <section>
        <h1 className='font-[600] text-[3.75rem] text-[#0CB407]'>Gramina Shiksha Sahayog</h1>
        <p className='text-[1.75rem] ml-2'>Where Rural Meets Digital – Educating the Heartland</p>
      </section>
      <section className='w-[50%] text-justify ml-3 '>
        <p className='text-[1.125rem] '>This is a dedicated online platform committed to bridging the educational gap in rural communities. Our mission is to bring quality education right to your doorstep, empowering rural learners with knowledge, skills, and opportunities that were once out of reach.</p>
      </section>
      <section className='w-full ml-2'>
        <Link to='/register'>
        <button className='bg-[#ED8129] rounded-[0.5rem] p-3 w-[18%] text-white text-[1.5rem] font-[500]'>Signup for free</button>
        </Link>
      </section>
      <section className='bg-white w-fit px-4 h-[15vh] shadow-lg rounded-[5px] flex justify-start absolute bottom-[-13%] justify-self-center translate-x-[40%] p-2 items-center gap-6' >
        <article className='w-fit '>
          <h2 className='text-[2.8rem] text-[#0CB407] font-[600]'>500+</h2>
        </article>
        <article className='w-fit flex flex-col justify-center items-center'>
          <p>Users have already join us,</p>
          <Link className='text-[#ED8129] underline ' to='/register'>Sighup now</Link>
        </article>
        <Divider orientation="vertical" sx={{backgroundColor:"gray"}} flexItem />
        <article className='w-fit flex flex-col justify-center items-center'>
          <p>Want to contribute to the cause? Join us now as a</p>
          <Link className='text-[#ED8129] underline ' to='/'>Contributor</Link>
        </article>
      </section>

    </main>
  )
}

export default Home