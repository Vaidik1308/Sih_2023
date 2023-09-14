import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Course from '../Pages/Course/Course'
import RuralAid from '../Pages/RuralAid/RuralAid'
import Features  from '../Pages/Features'
import Mentor from '../Pages/Mentor/Mentor'
import GovScheme from '../Pages/RuralAid/GovScheme'
import NgoFunding from '../Pages/RuralAid/NgoFunding'
import FindMentor from '../Pages/Mentor/FindMentor'
import YourMentor from '../Pages/Mentor/YourMentor'
import CourseContent from '../Pages/Course/CourseContent'
import Progress from '../Pages/Course/Progress'
import Missing from '../Pages/MIssing'
import Account from '../Pages/Account/Account'

const CommonNavigation = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/features' element={<Features/>} >
              <Route index element={<Course/>} />
              <Route path='account' element={<Account/>}/>
              <Route path='skills' element={<Course/>} >
                <Route index element={<CourseContent/>}/>
                <Route path='courses' element={<CourseContent/>}/>
                <Route path='progress' element={<Progress/>}/>
                <Route path='*' element={<Missing/>} />
              </Route>
              <Route path='ruralaid' element={<RuralAid/>} >
                <Route index element={<GovScheme/>} />
                <Route path='govschemes' element={<GovScheme/>} />
                <Route path='ngofunding' element={<NgoFunding/>} />
                <Route path='*' element={<Missing/>} />
              </Route>
              <Route path='mentor' element={<Mentor/>} >
                <Route index element={<FindMentor/>}/>
                <Route path='findmentor' element={<FindMentor/>}/>
                <Route path='yourmentor' element={<YourMentor/>} />
                <Route path='*' element={<Missing/>} />
              </Route>
              <Route path='/features/*' element={<Missing/>} />
            </Route>
            <Route path='*' element={<Missing/>} />
        </Routes>
    </>
  )
}

export default CommonNavigation