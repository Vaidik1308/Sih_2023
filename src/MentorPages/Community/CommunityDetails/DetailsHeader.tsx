import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'


const DetailsHeader = () => {
  return (
    <header className=' border-b-[6px] border-opacity-[0.4] border-solid border-gray-400  min-h-[15vh] w-full flex justify-between px-6 items-center gap-4'>
        <section className='flex gap-2 justify-start w-[45%]'>
            <Link to={`/features`}   className='min-w-[20%]  rounded-lg' >
                <button className='text-[1.75rem]  font-[500] p-2 rounded-lg min-w-[100%] duration-300 '      >Mentor Posts</button>
            </Link>

            <Link className='min-w-[20%] rounded-lg'  to={`/features`}>
                <button  className='text-[1.75rem]  font-[500] rounded-lg duration-300 p-2 w-[100%]'  >Community</button>
            </Link>
        </section>
        <section className='w-[20%]'>
            <button className='bg-[#0CB407] text-[1.5rem] font-[500] text-white p-1 rounded-lg w-full flex items-center justify-center gap-2'>New Post <AiOutlinePlus/></button>
        </section>
        
        
        
    </header>
  )
}

export default DetailsHeader