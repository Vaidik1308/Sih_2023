import React from 'react'
import PostsHeader from './PostsHeader'
import SinglePost from '../Community/CommunityDetails/SinglePost'

const Posts = () => {
  return (
    <div>
      <PostsHeader/>
      <section className='mt-4 flex flex-col gap-10 h-[100vh] overflow-y-auto'>
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>
      </section>
    </div>
  )
}

export default Posts