import React from 'react'
import { Header } from '../../components/common/Hearder/Header'
import { Footer } from '../../components/common/Footer/Footer'
import BlogList from '../../components/BlogList/blogList'

const NewsList = () => {
  return (
    <div>
        <Header/>
        {/* <Footer/> */}
        <BlogList/>
    </div>
  )
}

export default NewsList
