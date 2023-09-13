import React from 'react'
import accountPic from '../../assets/coursePage/accountPic.png'


const AccountBar = () => {
  return (
    <main className='w-full p-4 flex gap-4'>
        <section className='w-[25%]'>
            <img className='w-full' src={accountPic} alt="" />
        </section>
        <section className='min-w-[50%] flex flex-col gap-1'>
            <h2 className='text-[1.5rem] font-[500] '>Ayush</h2>
            <p>9876543210</p>
        </section>
    </main>
  )
}

export default AccountBar