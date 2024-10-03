import React from 'react'
import { Login } from '../../../pages/Auth/Login'
import { AuthBody } from '../../../components/common/Auth/Styled Auth/StyledAuthBody'
import { AuthCover } from '../../../components/common/Auth/AuthCover'
import { FormBody } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledFormBody'
import { HomePageIcon } from '../../../components/common/Auth/HomePageIcon'
import { LoginVerification } from '../../../pages/Auth/Login/Login Verification'
import { SignUp } from '../../../pages/Auth/Sign Up'
import { FinalRegistration } from '../../../pages/Auth/Sign Up/Final Registration'
import { SignUpVerification } from '../../../pages/Auth/Sign Up/Sign Up Verification'
import { ForgetPassword } from '../../../pages/Auth/Forget Password'
import { ChangePassword } from '../../../pages/Auth/Forget Password/Change Password'

const AuthLayout = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center px-[100px] py-[50px]">
            {/* <Login /> */}
            <AuthBody>
                <AuthCover />
                <FormBody>
                    <HomePageIcon />
                    <Login />
                    {/* <LoginVerification /> */}
                    {/* <SignUp /> */}
                    {/* <FinalRegistration /> */}
                    {/* <SignUpVerification /> */}
                    {/* <ForgetPassword /> */}
                    {/* <ChangePassword /> */}
                </FormBody>
            </AuthBody>
        </div>
    )
}

export { AuthLayout }
