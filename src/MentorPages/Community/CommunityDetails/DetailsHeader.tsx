import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'


const DetailsHeader = ({path1,path2}) => {
    const location = useLocation()
  return (
    <header className=' border-b-[6px] border-opacity-[0.4] border-solid border-gray-400  min-h-[15vh] w-full flex justify-between px-6 items-center gap-4'>
        <section className='flex gap-2 justify-start w-[45%]'>
            <Link to={`/mentorFeatures/1/community/communityDetails/1/mentorPosts`} style={location.pathname.includes(path1) ? {borderBottom:"#FF8C38 4px solid"  } : {borderBottom:"none"}}   className='min-w-[20%]  rounded-sm border-b-[4px] border-[#FF8C38] ' >
                <button className='text-[1.75rem]  font-[500] p-2 rounded-lg min-w-[100%] duration-300 ' >Mentor Posts</button>
            </Link>

            <Link className='min-w-[20%] rounded-sm'  style={location.pathname.includes(path2) ? {borderBottom:"#FF8C38 4px solid"  } : {borderBottom:"none"}} to={`/mentorFeatures/1/community/communityDetails/1/communityMembers`}>
                <button  className='text-[1.75rem]  font-[500] rounded-sm duration-300 p-2 w-[100%]'  >Community</button>
            </Link>
        </section>
        <section className='w-[15%]'>
            {
                location.pathname.includes(path1) ? (
                    <button className='flex items-center justify-center gap-2 bg-[#0CB407] text-white p-2 text-[1.3rem] w-full rounded-md font-[500]'>
                        New Post
                        <AiOutlinePlus/>
                    </button>
                )
                :
                (
                    <button className='flex items-center justify-center gap-2 bg-[#0CB407] text-white p-2 text-[1.3rem] w-full rounded-md font-[500]'>
                        Add Link
                        <AiOutlinePlus/>
                    </button>
                )
            }
        </section>
        
        
    </header>
  )
}

export default DetailsHeader