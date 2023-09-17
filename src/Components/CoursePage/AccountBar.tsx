import React ,{useContext}from 'react'
import accountPic from '../../assets/coursePage/accountPic.png'
import { Link } from 'react-router-dom'
import DataContext from '../../context/DataContext'


const AccountBar = () => {
  const {userData} = useContext(DataContext)
  return (
    <main className='w-full p-4 '>
      <Link className='w-full flex gap-4' to="/features/account">
        <section className='w-[25%]'>
            <img className='w-full' src={accountPic} alt="" />
        </section>
        <section className='min-w-[50%] flex flex-col gap-1'>
            <h2 className='text-[1.5rem] font-[500] '>{userData?.name?.length>=6 ? userData.name.slice(0,6): userData.name}</h2>
            <p>{userData.number}</p>
        </section>
        </Link>
    </main>
  )
}

export default AccountBar