import React,{useContext} from 'react'
import SearchBar from './SearchBar'
import DataContext from '../../context/DataContext'
import { Link } from 'react-router-dom'


const Header = ({isOption1,isOption2,setIsOption1,setIsOption2,header1,header2,path1,path2}) => {

  // const {isProgress,setIsProgress,isLearn,setIsLearn} = useContext(DataContext) 
  const onProgress = () => {
    setIsOption1(false)
    setIsOption2(true)
  }
  const onLearn = () => {
    setIsOption1(true)
    setIsOption2(false)
  }

  return (
    <header className=' border-b-[6px] border-opacity-[0.4] border-solid border-gray-400  min-h-[20vh] w-full flex justify-evenly px-6 items-center gap-4'>
        <Link style={ isOption1 ?  {backgroundColor:"#ED8129",color:"white"} : {backgroundColor:"white",color:"black"}} to={`/features${path1}`} className='min-w-[20%]  rounded-lg' >
            <button className='text-[1.75rem]  font-[500] p-2 rounded-lg min-w-[100%] duration-300'   onClick={() => onLearn()}   >{header1}</button>
        </Link>

        <Link className='min-w-[20%] rounded-lg'  to={`/features${path2}`} style={ isOption2 ?  {backgroundColor:"#ED8129",color:"white"} : {backgroundColor:"white"}}>
            <button onClick={() => onProgress()} className='text-[1.75rem]  font-[500] rounded-lg duration-300 p-2 w-[100%]'  >{header2}</button>
        </Link>
        
        <section className='w-[45%]'>
            {/* //search functionality  */}
            <SearchBar/>
        </section>
        
    </header>
  )
}

export default Header