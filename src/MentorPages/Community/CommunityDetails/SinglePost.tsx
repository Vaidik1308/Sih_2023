import React,{useState} from 'react'
import pic1 from '../../../assets/MentorLogin/MentorFeatures/postPic.png'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai' 
import {BiLike,BiSolidLike} from 'react-icons/bi' 
import {FaRegComment} from 'react-icons/fa6' 



const SinglePost = () => {
  const [like,setLike] = useState(false)
  return (
    <div className='flex flex-col gap-1 '>
      <main className='w-[95%] mx-auto border-solid border-gray-300 border-[2px] rounded-md min-h-[45vh] mt-4 p-3 pl-6 h-fit bg-gray-100 ' >
        <section className='w-full flex justify-between'>
          <article className=' w-[45%] flex items-center gap-2'>
            <img className='rounded-[50%]' src={pic1} alt="" />
            <div>
              <h1 className='text-[1.5rem] font-[500]'>Shivam Aryan</h1>
              <p className='text-[0.875rem] font-[500]'>Posted on 01:02 pm, 9th September, 2023</p>
            </div>
          </article>
          <article className='flex w-[25%] gap-3 h-[8vh] justify-end'>
            <button className='border-[2px] border-solid border-black flex items-center justify-center gap-1 h-[5vh] w-fit min-w-[35%] rounded-md'><AiFillEdit/>Edit</button>
            <button className='text-white flex items-center justify-center gap-1 h-[5vh] w-fit min-w-[40%] rounded-md bg-[#ED8129] text-[0.975rem]'><AiFillDelete/>Delete</button>
           
          </article>
        </section>
        <section className='text-[1rem] font-[500] mt-8 w-[85%] flex flex-col justify-start h-fit min-h-[25vh]' >
          {/* desc */}
          <p className=' break-words'>
            Hello everyone!

            I have listed out some career options for those who are passing 12th boards this year 

            Vocational Training
            IT and computer skills
            Healthcare
            Teaching and education
            Social welfare
            Media
          </p>
        </section>
      </main>
      <section className='flex  mt-2 items-start justify-start gap-2 w-[95%] mx-auto '>
        <div className='min-w-[10%]'>
          <button onClick={() => setLike(!like)} className='w-full p-1 shadow-gray-500 shadow-md rounded-sm  flex items-center gap-1 ' >
            {like ? <BiSolidLike className='text-[1.2rem]'/> : <BiLike className='text-[1.2rem]'/> }
            
            200 Likes
          </button>
        </div>
        <div className='min-w-[10%]'>
          <button className='w-full p-1 shadow-gray-500 shadow-md rounded-sm bg-[#ED8129] text-white flex gap-1 items-center justify-center ' ><FaRegComment/>10 replies</button>
        </div>
      </section>
    </div>
  )
}

export default SinglePost