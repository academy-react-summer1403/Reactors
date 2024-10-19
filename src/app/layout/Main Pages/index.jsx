import React from 'react'
import { Header } from '../../../components/common/Hearder/Header'
import { Footer } from '../../../components/Footer/footer'
import CoursesList from '../../../pages/CoursesList'
import { Outlet } from 'react-router-dom'

const MainPagesLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export {MainPagesLayout}
