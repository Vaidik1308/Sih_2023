import React from 'react'
import DetailsHeader from './DetailsHeader'
import {Outlet} from 'react-router-dom'

const CommunityDetails = () => {
  return (
    <main className='w-full'>
        <DetailsHeader/>
        <Outlet/>
    </main>
  )
}

export default CommunityDetails