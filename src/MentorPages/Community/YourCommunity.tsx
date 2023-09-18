import React from 'react'
import MentorHeader from '../MentorDashboard/MentorHeader'
import SingleCommunity from './SingleCommunity'

const YourCommunity = () => {
  return (
    <main>
        <MentorHeader create='Create new community' path1='/mentorFeatures/1/community/createCommunity' title='Your Communities' />
        <section className='flex flex-col gap-4 h-[100vh] overflow-y-auto'>
            <SingleCommunity/>
            <SingleCommunity/>
            <SingleCommunity/>
            <SingleCommunity/>
            <SingleCommunity/>
            <SingleCommunity/>
            <SingleCommunity/>
            <SingleCommunity/>
            <SingleCommunity/>
        </section>
    </main>
  )
}

export default YourCommunity