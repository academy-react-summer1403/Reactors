import React from 'react'
import { Outlet } from 'react-router-dom'

import { AuthBody } from '../../../components/Auth/Styled Auth/StyledAuthBody'
import { AuthCover } from '../../../components/Auth/AuthCover'
import { FormBody } from '../../../components/Auth/Styled Auth/Styled Form/StyledFormBody'
import { HomePageIcon } from '../../../components/Auth/HomePageIcon'

const AuthLayout = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center px-[100px] py-[50px]">
            {/* <Login /> */}
            <AuthBody>
                <AuthCover />
                <FormBody>
                    <HomePageIcon />
                    <Outlet />
                </FormBody>
            </AuthBody>
        </div>
    )
}

export { AuthLayout }
