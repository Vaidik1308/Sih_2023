import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../../assets/coursePage/accountPic.png'
import {BsFillPencilFill,BsArrowRight} from 'react-icons/bs'
import {PiWarningCircleFill} from 'react-icons/pi'



const Account = () => {
  return (
    <main className='w-full flex flex-col gap-6'>
        <section className='w-full min-h-[16vh] flex flex-col justify-center border-b-[4px] border-solid border-gray-300 pl-12'>
            <h1 className='text-[2.81rem] font-[500]'>Your <span className='text-[#ED8129]'>Account</span></h1>
    
        </section>
        <section className='w-[95%] border-solid border-[2px] border-gray-400 p-4 rounded-lg mx-auto flex gap-2 items-center'>
            <article className='w-[18%]'>
                {/* image */}
                <img className='w-[100%]' src={pic} alt="" />
            </article>
            <article className='w-[85%]'>
                <div className='w-[100%] mx-auto flex flex-col gap-4'>
                    <div className='flex w-[95%] mx-auto items-start justify-between'>
                        <div>
                            <h2 className='text-[2rem] font-[500]'>Ayush Gupta</h2>
                            <p  className='text-[1.125rem]'>ayus@gmail.com</p>
                        </div>
                        <button className='flex justify-start items-start mt-3'>
                            <BsFillPencilFill className='text-[1.6rem]'/>
                            {/* icon */}
                        </button>
                    </div>
                    <div className='flex flex-col gap-2 w-[95%] mx-auto'>
                        <div className='flex text-[1.125rem] w-full justify-between'>
                            <div className='font-[500]'>Phone no: </div>
                            <div>9876514632</div>
                        </div>
                        <div className='flex text-[1.125rem] w-full justify-between'>
                            <div className='font-[500]'>Gender : </div>
                            <div>Male</div>
                        </div>
                        <div className='flex text-[1.125rem] w-full justify-between'>
                            <div className='font-[500]'>Date of Birth: </div>
                            <div>23/03/2000</div>
                        </div>
                        
                    </div>
                </div>
            </article>
        </section>
        <section className='w-[95%] mx-auto'>
            <h2 className='text-[2rem] font-[500]'>Additional Information</h2>
            <article className='w-full flex gap-6 mt-8'>
                <div className='bg-[#C1F0BD] h-fit min-h-[12vh] shadow-lg rounded-lg p-3 w-fit min-w-[25%] flex flex-col gap-2 ' >
                    <div>
                        {/* icon */}
                        <PiWarningCircleFill className='text-[2rem]'/>
                    </div>
                    <div>
                        <p className='text-[0.85rem]'>What do you do for a living?</p>
                    </div>
                    <button className='w-full flex justify-end'>
                        <BsArrowRight className='text-[2.5rem]'/>
                    </button>
                </div>
                <div className='bg-[#C1F0BD] h-fit min-h-[12vh] shadow-lg rounded-lg p-3 w-fit min-w-[25%] flex flex-col gap-2 ' >
                    <div>
                        {/* icon */}
                        <PiWarningCircleFill className='text-[2rem]'/>
                    </div>
                    <div>
                        <p className='text-[0.85rem]'>Add your location</p>
                    </div>
                    <button className='w-full flex justify-end'>
                        <BsArrowRight className='text-[2.5rem]'/>
                    </button>
                </div>
                <div className='bg-[#C1F0BD] h-fit min-h-[12vh] shadow-lg rounded-lg p-3 w-fit min-w-[25%] flex flex-col gap-2 ' >
                    <div>
                        {/* icon */}
                        <PiWarningCircleFill className='text-[2rem]'/>
                    </div>
                    <div>
                        <p className='text-[0.85rem]'>Add your hobbies and interests</p>
                    </div>
                    <button className='w-full flex justify-end'>
                        <BsArrowRight className='text-[2.5rem]'/>
                    </button>
                </div>

                
                
            </article>
        </section>
    </main>
  )
}

export default Account