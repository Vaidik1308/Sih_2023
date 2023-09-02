import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Home from '../Pages/Home'

const CommonNavigation = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </>
  )
}

export default CommonNavigation