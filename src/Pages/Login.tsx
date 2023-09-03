import React from 'react'
import logo from '../assets/login/logo.png'
import bottomLogo from '../assets/login/bottomLogo.png'
// import LogoImg from '../assets/login_img.png';

const Login = () => {
  return (
    <div className='flex w-full' >
      <section  className=' w-[60%] h-[100vh]  bg-center bg-cover bg-no-repeat bg-login_bg flex justify-end items-end p-4 text-white '>
        <div className='flex items-end text-[24px] font-[600] italic flex-col'>
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
              className='p-2 border-[1px] border-solid border-black h-[6vh] rounded-[8px] ' 
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-[15px] font-[500]' htmlFor="loginEmail">Password</label>
            <input 
              type="password" 
              name="" 
              id="loginEmail"
              required
              className='p-2 border-[1px] border-solid border-black h-[6vh] rounded-[8px] ' 
            />
            <div className='flex w-full justify-end' >
              <a className=' underline text-[#666363] text-[13px] mt-2' href="">Forgot Password</a>
            </div>
          </div>
          <div className='w-full flex flex-col items-center gap-1'>
            <button className='bg-[#FF8541] w-fit min-w-[35%] text-white font-[600] p-2 px-6 rounded-[12px]' type='submit'>Login</button>
            <a className='text-[14px] font-[600] text-[#20CB11] ' href="">New here? Create an Account</a>
          </div>
          <article></article>
        </form>
        <article>
          <img src={bottomLogo} alt="" />
        </article>
      </section>
    </div>
  )
}

export default Login