import React from 'react'
import DetailsHeader from './DetailsHeader'
import {Outlet} from 'react-router-dom'

const CommunityDetails = () => {
  return (
    <main className='w-full'>
        <DetailsHeader path1='/mentorPosts' path2='/communityMembers' />
        <Outlet/>
    </main>
  )
}

export default CommunityDetails