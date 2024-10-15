import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseDetails from '../pages/CourseDetails/CourseDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CourseDetails/>
    </>
  )
}

export default App
