import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header className=' border-b-[6px] border-opacity-[0.4] border-solid border-gray-400  min-h-[20vh] w-full flex justify-evenly px-6 items-center gap-4'>
        <section className='w-[20%] ' >
            <button className='text-[1.75rem] bg-[#ED8129]  text-white font-[500] p-2 rounded-lg w-[100%]'  >Learn</button>
        </section>

        <section className='w-[20%] ' >
            <button className='text-[1.75rem]  font-[500] p-2 w-[100%]'  >Progress</button>
        </section>
        
        <section className='w-[45%]'>
            {/* //search functionality  */}
            <SearchBar/>
        </section>
        
    </header>
  )
}

export default Header