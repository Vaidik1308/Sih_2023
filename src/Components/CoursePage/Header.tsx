import React,{useContext} from 'react'
import SearchBar from './SearchBar'
import DataContext from '../../context/DataContext'


const Header = () => {

  const {isProgress,setIsProgress,isLearn,setIsLearn} = useContext(DataContext) 
  const onProgress = () => {
    setIsLearn(false)
    setIsProgress(true)
  }
  const onLearn = () => {
    setIsLearn(true)
    setIsProgress(false)
  }

  return (
    <header className=' border-b-[6px] border-opacity-[0.4] border-solid border-gray-400  min-h-[20vh] w-full flex justify-evenly px-6 items-center gap-4'>
        <section className='w-[20%] ' >
            <button style={ isLearn ?  {backgroundColor:"#ED8129"} : {backgroundColor:"white",color:"black"}} onClick={() => onLearn()} className='text-[1.75rem]   text-white font-[500] p-2 rounded-lg w-[100%] duration-300'  >Learn</button>
        </section>

        <section className='w-[20%] ' >
            <button style={ isProgress ?  {backgroundColor:"#ED8129",color:"white"} : {backgroundColor:"white"}} onClick={() => onProgress()} className='text-[1.75rem]  font-[500] rounded-lg duration-300 p-2 w-[100%]'  >Progress</button>
        </section>
        
        <section className='w-[45%]'>
            {/* //search functionality  */}
            <SearchBar/>
        </section>
        
    </header>
  )
}

export default Header