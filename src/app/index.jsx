import React from 'react'
import { Login } from '../pages/Auth/Login'
import { AuthLayout } from './layout/Auth'
import { Outlet } from 'react-router-dom'
import { MainPagesLayout } from './layout/Main Pages'
import NewsDetails from "../pages/newsDetails/NewsDetails"

const App = () => {
    return (
        <div>
            {/* <Outlet /> */}
            <MainPagesLayout/>
            <NewsDetails/>
        </div>
    )
  }
// =======
// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import NewsDetails from '../pages/newsDetails/newsDetails'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <NewsDetails/>
    
//     </>
//   )
// }
// >>>>>>> news-details

export default App
