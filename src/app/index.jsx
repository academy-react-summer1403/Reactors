import React from 'react'
import { Login } from '../pages/Auth/Login'
import { AuthLayout } from './layout/Auth'
import { Outlet } from 'react-router-dom'
import { MainPagesLayout } from './layout/Main Pages'

const App = () => {
    return (
        <div>
            {/* <Outlet /> */}
            <MainPagesLayout/>
        </div>
    )
  }

export default App
