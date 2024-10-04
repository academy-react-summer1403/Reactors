import React from 'react'
import { LinksHolder } from '../common/Auth/Styled Form/StyledLinksHolder'
import { Link } from 'react-router-dom'

const LoginLinks = () => {
    return (
        <LinksHolder className="flex justify-between mt-[30px] underline">
            <Link to={"/authentication/signup"}> یک حساب کاربری ایجاد کنید </Link>
            <Link to={"/authentication/forget-password"}> فراموشی رمز </Link>
        </LinksHolder>
    )
}

export { LoginLinks }
