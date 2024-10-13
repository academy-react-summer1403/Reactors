import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CoursLists } from '../components/CourseList'
import { Header } from '../components/Header/header'
import { Footer } from '../components/Footer/footer'
import { Bar } from '../components/TopBar/bar'
import CoursesList from '../pages/CoursesList'
function App() {

  return (
    <>
      <Header/>
      <CoursesList/>
      <Footer/>

    </>
  )
}

export default App
