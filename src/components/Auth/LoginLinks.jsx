import React from 'react'
import { LinksHolder } from '../common/Auth/Styled Auth/Styled Form/StyledLinksHolder'

const LoginLinks = () => {
    return (
        <LinksHolder className="flex justify-between mt-[30px] underline">
            <a href="#"> یک حساب کاربری ایجاد کنید </a>
            <a href="#"> فراموشی رمز </a>
        </LinksHolder>
    )
}

export { LoginLinks }
