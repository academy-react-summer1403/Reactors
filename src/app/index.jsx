import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CoursLists } from '../pages/CourseList/CourseList'
import { Header } from '../components/Header/header'
import { Footer } from '../components/Footer/footer'
import { Bar } from '../pages/CourseList/TopBar/bar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Bar></Bar>
      <CoursLists></CoursLists>
      <Footer></Footer>

    </>
  )
}

export default App
