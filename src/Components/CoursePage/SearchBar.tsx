import React from 'react'
import {ImSearch} from 'react-icons/im'
const SearchBar = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className='w-[100%] relative' >
        <input 

            type="text" 
            name="" 
            id=""
            className=' rounded-lg w-[100%] pr-16 h-[8vh] border-[1px] border-solid border-gray-500 p-2 text-[1.55rem] outline-none' 
            placeholder='Search'
        />
        <button type='submit'  className='absolute right-5 top-5'>
            <ImSearch className='text-[1.6rem]' />
        </button>
    </form>
  )
}

export default SearchBar