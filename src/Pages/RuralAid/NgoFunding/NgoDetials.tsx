import React from 'react'
import pic1 from '../../../assets/ruralAid/ngoFunding1.png'

const NgoDetials = () => {
  return (
    <main className='w-[95%] mx-auto mt-8'>
        <section className='w-[95%] flex  justify-between mx-auto border-b-[2px] border-solid border-[#0CB407] pb-8 '>
            <article className='w-[65%]'>
                <div className='max-w-[85%]'>
                    <h1 className='text-[2rem] font-[600]'>Swades Foundation</h1>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[1.5rem] font-[500]'>Secondary School Scholarship</p>
                    <p className=' justify-center text-[1.125rem]'>“ Since 2013, we have reached out to 2700 hamlets/villages across Raigad and Nashik district in Maharashtra. Our holistic development model covers all aspects of individual and community development through a unique ‘4E’ strategy: engage, empower, execute and exit. ”</p>
                </div>
            </article>
            <article className='max-w-[30%] w-fit'>
                <img src={pic1} alt="" />
            </article>
        </section>
        <section className='w-[95%] mx-auto my-6'>
            <h1 className='text-[1.4rem] font-[600]'>About the Program</h1>
            <div className='text-[1.125rem]'>
                <p>This programme is aimed to provide scholarship to 300 needy students all over the India for their 11th and 12th standard education.</p>
                <p className='font-[600]' >Amount - 12,000 Rs per year</p>
            </div>
        </section>
        <section className='w-[95%] mx-auto my-4'>
            <h1 className='text-[1.4rem] font-[600]'>Requirements</h1>
            <ul className='text-[1.125rem] list-decimal ml-6'>
                <li>Passed 10th class with at least 50% marks.</li>
                <li>Must be of age less than 21.</li>
            </ul>
        </section>
        <section className='w-[95%] mx-auto'>
            <h1 className='text-[1.4rem] font-[600]'>Below is the link to apply for this scholarship program</h1>
            <a href="http//:google.com">http//:nehb edcevxe link to form</a>
        </section>
    </main>
  )
}

export default NgoDetials