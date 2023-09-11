import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Course from '../Pages/Course/Course'

const CommonNavigation = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/course' element={<Course/>}/>
        </Routes>
    </>
  )
}

export default CommonNavigation