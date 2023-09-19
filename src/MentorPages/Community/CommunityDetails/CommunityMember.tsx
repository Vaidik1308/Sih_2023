import React from 'react'
import {FaRegCopy} from 'react-icons/fa6'
import {BsPencilFill} from 'react-icons/bs'
import SingleCommunityMember from './SingleCommunityMember'
import Scrollbar from "react-custom-scrollbars";




const CommunityMember = () => {
  return (
    <main className='w-full flex flex-col gap-8 overflow-y-auto h-[100vh] '>
        <section className='w-[95%] mx-auto mt-4'>
          <h1 className='text-[2rem] font-[600]'>English Tutorials</h1>
          <p className='text-[1.125rem]'>200 members enrolled</p>
        </section>
        <section className='w-[95%] mx-auto flex gap-4 '>
          <article className='w-[45%] h-[25vh] border-[2px] border-gray-300 rounded-md shadow-lg'>
            <div className='flex w-[90%] py-4 mx-auto justify-between'>
              <h3 className='flex text-[1.2rem] font-[600] '>
                Access Token: <span> 88271</span>
              </h3>
              <button>
                <FaRegCopy className='text-[1.2rem]'/>
              </button>
            </div>
            <div className='flex w-[90%] flex-col py-4 mx-auto gap-3 '>
              <div className=' text-[1.2rem] items-center gap-4 flex'>
                <p className='min-w-[65%]'>chat.whatsapp.com/21213sad</p>
                <button>
                  <BsPencilFill/>
                </button>
              </div>
              <div className=' text-[1.2rem] items-center gap-4 flex'>
                <p className='min-w-[65%]'>link.telegram.com/21213sad</p>
                <button>
                  <BsPencilFill/>
                </button>
              </div>
              
            </div>
          </article>
          <article className='w-[45%] border-[2px] border-gray-300 h-fit pb-1 rounded-md shadow-lg'>
            <div className='w-[90%] mx-auto mt-4'>
              <h1 className='text-[1.5rem] font-[600]'>Members</h1>
              <Scrollbar
                style={{ width: "100%", height: "65vh"  }}
                className="App  "
                autoHide
                removeTracksWhenNotUsed
              >
                <div className='mt-6 h-[65vh] '>
                  <SingleCommunityMember/>
                  <SingleCommunityMember/>
                  <SingleCommunityMember/>
                  <SingleCommunityMember/>
                  <SingleCommunityMember/>
                  <SingleCommunityMember/>
                  <SingleCommunityMember/>
                  <SingleCommunityMember/>
                  <SingleCommunityMember/>
                </div>
              </Scrollbar>
              
            </div>
          </article>
        </section>
        
    </main>
  )
}

export default CommunityMember