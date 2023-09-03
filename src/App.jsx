import { useState } from 'react'
import './App.css'
import CommonNavigation from './Navigation/CommonNavigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-[100vh] font-Inter h-fit'>
      <CommonNavigation/>
    </div>
  )
}

export default App
