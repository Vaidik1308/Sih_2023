import React from 'react'
import SinglePost from './SinglePost'


const MentorPosts = () => {
  return (
    <main className='w-full flex flex-col gap-8 overflow-y-auto h-[100vh] '>
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>
    </main>
  )
}

export default MentorPosts