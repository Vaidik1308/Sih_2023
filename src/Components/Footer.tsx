import React from 'react'
import {BsLinkedin,BsInstagram,BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='flex w-[95%] justify-between mb-4 mx-4 mt-32'>
        <section>
            <p className='text-[1.125rem] text-[#0CB407]'>2023 Gramina Shiksha Sahayog ,Inc. All rights reserved </p>
        </section>
        <section className='flex gap-4 text-[1.5rem]'>
            <BsLinkedin/>
            <BsInstagram/>
            <BsTwitter/>
        </section>
    </footer>
  )
}

export default Footer