import React,{useState} from 'react'
import Header from '../../Components/CoursePage/Header'
import GovScheme from './GovScheme'
import NgoFunding from './NgoFunding'
import { Outlet } from 'react-router-dom'

const RuralAid = () => {
  const [isOption1,setIsOption1] = useState<boolean>(true)
  const [isOption2,setIsOption2] = useState<boolean>(false)
  return (
    <div className='flex flex-col w-full'>
            <Header
              isOption1 = {isOption1} 
              setIsOption1={setIsOption1}
              isOption2={isOption2}
              setIsOption2={setIsOption2}
              header1='Gov Schemes'
              header2='NGO funding'
              path1 = {'/ruralaid/govschemes'}
              path2 = {'/ruralaid/ngofunding'}
            />
            {/* {isOption1 && (
              <GovScheme/>
            )}
            {isOption2 && (
              <NgoFunding/>
            )} */}
            <Outlet/>
    </div> 
  )
}

export default RuralAid