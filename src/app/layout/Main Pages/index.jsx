import React from 'react'
import { Header } from '../../../components/common/Hearder/Header'
// import { Footer } from '../../../components/Footer/footer'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../../components/common/Footer/Footer'

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
