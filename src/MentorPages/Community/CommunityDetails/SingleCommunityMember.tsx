import React from 'react'
import pic1 from '../../../assets/MentorLogin/MentorFeatures/community/communitymember.png'

const SingleCommunityMember = () => {
  return (
    <div className='w-full flex gap-2 items-center border-b-[1px] border-gray-300 pb-2'>
        <div className='w-[12%]'>
            <img className='rounded-[50%]' src={pic1} alt="" />
        </div>
        <div>
            <h3 className='text-[1.125rem] font-[500]'>Ayush Gupta</h3>
            <p className='text-[0.85rem]'>9876543210</p>
        </div>
    </div>
  )
}

export default SingleCommunityMember