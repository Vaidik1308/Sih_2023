import React from 'react'
import Scrollbar from "react-custom-scrollbars";
import pic1 from '../../assets/ruralAid/pic1.png'
import {FiArrowUpRight} from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom';
import SingleScheme from './govScheme/SingleScheme';

const GovScheme = () => {
  const location = useLocation()
  return (
    <Scrollbar
    style={{ width: "100%", height: "80vh"  }}
    className="App  "
    autoHide
    removeTracksWhenNotUsed
    >
        <main className='p-4  w-[100%] h-[80vh] mt-8 flex flex-wrap  mx-auto justify-center  gap-4 '>
            <SingleScheme/>
            <SingleScheme/>
            <SingleScheme/>
            <SingleScheme/>
            <SingleScheme/>
            <SingleScheme/>
            <SingleScheme/>
            <SingleScheme/>
            <SingleScheme/>
        </main>
    </Scrollbar>
  )
}

export default GovScheme