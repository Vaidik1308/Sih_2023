import { useState } from 'react'
import './App.css'
import CommonNavigation from './Navigation/CommonNavigation'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Scrollbar from "react-custom-scrollbars";
import { DataProvider } from './context/DataContext'

function App() {
  const [count, setCount] = useState(0)

  return (

    <Scrollbar
      style={{ width: "100%", height: "100vh" }}
      className="App"
      autoHide
      removeTracksWhenNotUsed
    >
      <DataProvider>
        <div className='w-full min-h-[100vh] font-Inter h-fit'>
          <Navbar/>
          <CommonNavigation/>
          <Footer/>
        </div>
      </DataProvider>
    </Scrollbar>
  )
}

export default App
