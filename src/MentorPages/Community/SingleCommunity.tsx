import React from 'react'
import pic1 from '../../assets/MentorLogin/MentorFeatures/mentorCommunity.png'
import {Link} from 'react-router-dom'



const SingleCommunity = () => {
  return (
    <main className=' p-2 flex justify-between w-[90%] mx-auto border-solid border-[2px] border-gray-300 h-fit min-h-[25vh]'>
        <section className='w-[35%] flex flex-col gap-2'>
            <div>
                <h2 className='text-[2rem] font-[600]'>English Tutorials</h2>
                <p>200 members enrolled</p>
            </div>
            <div>
                <p className='text-[1.5rem] font-[500]'>Public</p>
            </div>
            <div>
                <Link to='/mentorFeatures/1/community/communityDetails/1/mentorPosts'>
                    <button className='text-[0.9rem] p-2 rounded-lg bg-[#0CB407] text-white'>View Activity</button>
                </Link>
            </div>
        </section>
        <section>
            <img src={pic1} alt="" />
        </section>
    </main>
  )
}

export default SingleCommunity