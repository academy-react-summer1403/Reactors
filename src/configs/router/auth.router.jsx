import { AuthLayout } from "../../app/layout/Auth";
import { ForgetPassword } from "../../pages/Auth/Forget Password";
import { ChangePassword } from "../../pages/Auth/Forget Password/Change Password";
import { Login } from "../../pages/Auth/Login";
import { SignUp } from "../../pages/Auth/Sign Up";
import { FinalRegistration } from "../../pages/Auth/Sign Up/Final Registration";
import { SignUpVerification } from "../../pages/Auth/Sign Up/Sign Up Verification";

export const auth = {
    path: "/authentication",
    element: <AuthLayout />,
    children: [
        {
            index: true,
            path: "/authentication",
            element: <Login />
        },
        {
            path: "/authentication/signup",
            element: <SignUp />,
        },
        {
            path: "/authentication/verify-user",
            element: <SignUpVerification />
        },
        {
            path: "/authentication/final-registeration",
            element: <FinalRegistration />
        },
        {
            path: "/authentication/forget-password",
            element: <ForgetPassword />
        },
        {
            path: "/authentication/change-password/:configValue",
            element: <ChangePassword />
        }
    ]
}