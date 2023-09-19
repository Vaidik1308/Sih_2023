import React from 'react'
import SinglePost from './SinglePost'


const MentorPosts = () => {
  return (
    <main className='w-full flex flex-col gap-8 overflow-y-auto h-[100vh] '>
        <section className='w-[95%] mx-auto mt-4'>
          <h1 className='text-[2rem] font-[600]'>English Tutorials</h1>
          <p className='text-[1.125rem]'>200 members enrolled</p>
        </section>
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>
    </main>
  )
}

export default MentorPosts