import React from 'react'
import { Outlet } from 'react-router-dom'

import { AuthBody } from '../../../components/Auth/Styled Auth/StyledAuthBody'
import { AuthCover } from '../../../components/Auth/AuthCover'
import { FormBody } from '../../../components/Auth/Styled Auth/Styled Form/StyledFormBody'
import { HomePageIcon } from '../../../components/Auth/HomePageIcon'

const AuthLayout = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center px-[100px] py-[50px] max-[600px]:px-[50px]">
            {/* <Login /> */}
            <AuthBody>
                <AuthCover />
                <FormBody className="w-1/2 max-[1000px]:w-full">
                    <HomePageIcon />
                    <Outlet />
                </FormBody>
            </AuthBody>
        </div>
    )
}

export { AuthLayout }
