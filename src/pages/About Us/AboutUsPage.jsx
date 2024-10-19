import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import { Header } from '../../components/Header/header'
import { Footer } from '../../components/common/Footer/Footer'

const AboutUsPage = () => {
  return (
    <div>
        <Header/>
    <AboutUs></AboutUs>
      <Footer/>
    </div>
  )
}

export default AboutUsPage
