import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CoursLists } from '../pages/CourseList/CourseList'
import { Header } from '../Header/header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <CoursLists></CoursLists>

    </>
  )
}

export default App
