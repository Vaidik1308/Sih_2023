import { useState } from 'react'
import './App.css'
import CommonNavigation from './Navigation/CommonNavigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-green-500'>
      <CommonNavigation/>
    </div>
  )
}

export default App
