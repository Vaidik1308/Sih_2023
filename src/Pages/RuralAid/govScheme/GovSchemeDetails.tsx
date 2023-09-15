import React from 'react'
import { useParams } from 'react-router-dom'
import pic1 from '../../../assets/ruralAid/pic1.png'

const GovSchemeDetails = () => {
    const {id} = useParams()
  return (
    <main className='w-full mt-8'>
        <section className='w-[95%] flex  justify-between mx-auto border-b-[2px] border-solid border-[#0CB407] pb-8 '>
            <article className='w-[65%]'>
                <div className='max-w-[85%]'>
                    <h1 className='text-[2rem] font-[600]'>AICTE Pragati Scholarship Scheme for Girls</h1>
                </div>
                <div>
                    <p className='text-[1.5rem] font-[500]'>For girls pursuing UG</p>
                    <p>Started from 2003</p>
                </div>
            </article>
            <article className='max-w-[30%] w-fit'>
                <img src={pic1} alt="" />
            </article>
        </section>
        <section>
            <article className='w-[95%] mx-auto mt-4'>
                <h2 className='text-[1.5rem] font-[500]'>Eligibility</h2>
                <ul className=' list-disc w-[80%] m-4 ml-5 text-[1.125rem]'>
                    <li>You should be a girl student.</li>
                    <li>You should be pursuing a full-time degree/diploma program in any of the AICTE-approved institutions.</li>
                    <li> You must have taken admission in the first year of your degree/diploma program during the current academic year.</li>
                    <li>Your family income should be less than Rs. 8 lakh per annum from all sources.</li>
                    <li> Applicable for undergraduate courses in Engineering, Pharmacy, Architecture, Hotel Management, and Applied Arts and Crafts.</li>
                    <li>You should have passed your Class 12 board examination with a minimum of 60% marks or a minimum CPI of 6.0 on a 10-point scale.</li>
                </ul>
            </article>
        </section>
        <section className='w-full'>
            <article className='w-[95%] mx-auto mt-4'>
                <h2 className='text-[1.5rem] font-[500]'>Documents</h2>
                <ul className=' list-disc w-[80%] m-4 ml-5 text-[1.125rem]'>
                    <li>Proof of admission to the first year of the eligible course.</li>
                    <li>Proof of annual family income.</li>
                    <li> Mark sheets of Class 10 and Class 12.</li>
                    <li>A tuition fee receipt.</li>
                    <li> Bank account details (Aadhar-linked bank account is preferred).</li>
                    
                </ul>
            </article>
        </section>
        <section className='w-full flex justify-center items-center' >
            <button className='w-[50%] text-[1.5rem] font-[600] rounded-lg min-h-[10vh] text-white bg-[#0CB407]' >Enroll Now</button>
        </section>
    </main>
  )
}

export default GovSchemeDetails