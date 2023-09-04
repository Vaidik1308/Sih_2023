import React from 'react'
import logo from '../assets/login/logo.png'
import bottomLogo from '../assets/login/bottomLogo.png'
import { Link } from 'react-router-dom'
// import LogoImg from '../assets/login_img.png';

const Login = () => {
  return (
    <div className='flex w-full' >
      <section  className=' w-[60%] h-[100vh]  bg-center bg-cover bg-no-repeat bg-login_bg flex justify-end items-end p-4 text-white '>
        <div className='flex items-end text-[24px] font-[600] italic flex-col pr-16'>
          <h1>“The soul of India lives in its villages”</h1>
          <h1>-Mahatma Gandhi</h1>
        </div>
      </section>
      <section className='w-[40%] flex flex-col justify-center items-center  '>
        <article className='w-[50%]'>
          <img className='w-full ' src={logo} alt="" />
        </article>
        <form onSubmit={(e) => e.preventDefault()}  className='w-[85%] p-4 flex flex-col gap-8'>
          <div className='flex flex-col gap-1'>
            <label className='text-[15px] font-[500]' htmlFor="loginEmail">Mobile No. / Email</label>
            <input 
              type="text" 
              name="" 
              id="loginEmail"
              required
              className='p-2 border-[1px] border-solid border-[#FF8541] h-[6vh] rounded-[8px] ' 
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-[15px] font-[500]' htmlFor="loginEmail">Password</label>
            <input 
              type="password" 
              name="" 
              id="loginEmail"
              required
              className='  p-2 border-[1px] border-solid border-[#FF8541] h-[6vh] rounded-[8px] ' 
            />
            <div className='flex w-full justify-start' >
              <a className=' underline text-[#666363] text-[13px] mt-2 hover:text-red-500 ' href="">Forgot Password</a>
            </div>
          </div>
          
          <article className=' border-solid border-[1px] border-[#b2bbc0] rounded-[8px] p-4 flex gap-4 flex-col'>
            <h1 className='text-[18px] font-[500]' >Choose Language</h1>
            <div className=' grid grid-cols-3 gap-2'>
              <div className='flex gap-2 ' >
                <input type="radio" name="language" id="english" />
                <label htmlFor="english">English</label>
              </div>
              <div className='flex gap-2' >
                <input type="radio" name="language" id="kannada" />
                <label htmlFor="kannada">Kannada</label>
              </div>
              <div className='flex gap-2' >
                <input type="radio" name="language" id="hindi" />
                <label htmlFor="hindi">Hindi</label>
              </div>
            </div>
          </article>
          <div className='w-full flex flex-col items-center gap-1'>
            <button className='bg-[#0CB407] w-fit min-w-[35%] text-white font-[600] p-2 px-6 rounded-[12px]' type='submit'>Login</button>
            <Link to='/register' className='text-[14px] font-[600] text-[black] ' >New here? <span className='text-[#0CB407]'>Create an Account</span> </Link>
          </div>
        </form>
        <article>
          <img src={bottomLogo} alt="" />
        </article>
      </section>
    </div>
  )
}

export default Login