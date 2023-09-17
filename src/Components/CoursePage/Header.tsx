import React,{useContext,useEffect} from 'react'
import SearchBar from './SearchBar'
import DataContext from '../../context/DataContext'
import { Link, useLocation } from 'react-router-dom'
// import DataContext from '../../context/DataContext'


const Header = ({isOption1,isOption2,setIsOption1,setIsOption2,header1,header2,path1,path2}) => {

  const {field,setField} = useContext(DataContext)
  const location = useLocation()
  // const onProgress = () => {
  //   setField('ngoDB')
  //   setIsOption1(false)
  //   setIsOption2(true)
  // }
  // const onLearn = () => {
  //   // setField('ngoDB')
  //   setIsOption1(true)
  //   setIsOption2(false)
  // }
  
  

  return (
    <header className=' border-b-[6px] border-opacity-[0.4] border-solid border-gray-400  min-h-[20vh] w-full flex justify-evenly px-6 items-center gap-4'>
        <Link to={`/features${path1}`} style={ location.pathname.includes(path1) ?  {backgroundColor:"#ED8129",color:"white"} : {backgroundColor:"white",color:"black"}}  className='min-w-[20%]  rounded-lg' >
            <button className='text-[1.75rem]  font-[500] p-2 rounded-lg min-w-[100%] duration-300'      >{header1}</button>
        </Link>

        <Link className='min-w-[20%] rounded-lg'  to={`/features${path2}`} style={ location.pathname.includes(path2) ?  {backgroundColor:"#ED8129",color:"white"} : {backgroundColor:"white"}}>
            <button  className='text-[1.75rem]  font-[500] rounded-lg duration-300 p-2 w-[100%]'  >{header2}</button>
        </Link>
        
        <section className='w-[45%]'>
            {/* //search functionality  */}
            <SearchBar/>
        </section>
        
    </header>
  )
}

export default Header