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
import GovSchemeDetails from '../Pages/RuralAid/govScheme/GovSchemeDetails'
import CourseDetails from '../Pages/Course/CourseDetails/CourseDetails'
import NgoDetials from '../Pages/RuralAid/NgoFunding/NgoDetials'
import Jobs from '../Pages/Jobs/Jobs'
import AllJobs from '../Pages/Jobs/AllJobs'
import SavedJobs from '../Pages/Jobs/SavedJobs'
import MentorDashboard from '../MentorPages/MentorDashboard/MentorDashboard'
import MentorSignUp from '../MentorPages/MentorSignUp'
import MentorLogin from '../MentorPages/MentorLogin'

const CommonNavigation = () => {
  return (
    <>
        <Routes>

            {/* User Routes */}
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/features' element={<Features/>} >
              <Route index element={<Course/>} />
              <Route path='account' element={<Account/>}/>
              <Route path='jobs' element={<Jobs/>} >
                <Route index path='alljobs' element={<AllJobs/>} />
                <Route index path='savedjobs' element={<SavedJobs/>} />
              </Route>
              <Route path='skills' element={<Course/>} >
                <Route index element={<CourseContent/>}/>
                <Route path='courses' element={<CourseContent/>}/>
                <Route path='courses/:id' element={<CourseDetails/>}/>
                <Route path='progress' element={<Progress/>}/>
                <Route path='*' element={<Missing/>} />
              </Route>
              <Route path='ruralaid' element={<RuralAid/>} >
                <Route index element={<GovScheme/>} />
                <Route path='govschemes' element={<GovScheme/>}/>
                <Route path='govschemes/:id' element={<GovSchemeDetails/>} />
                <Route path='ngofunding' element={<NgoFunding/>} />
                <Route path='ngofunding/:id' element={<NgoDetials/>} />
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


            {/* Mentor Routes */}
            <Route path='/mentorSignUp' element={<MentorSignUp/>} />
            <Route path='/mentorLogin' element={<MentorLogin/>} />
            <Route path='/mentor/:mentorId' element={<MentorDashboard/>} >
              <Route path='statistics' >
                <Route index path=''/>
              </Route>
            </Route>
            <Route path='*' element={<Missing/>} />
        </Routes>
    </>
  )
}

export default CommonNavigation