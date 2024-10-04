import React from 'react'
import { Login } from '../pages/Auth/Login'
import { AuthLayout } from './layout/Auth'
import { Outlet } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default App