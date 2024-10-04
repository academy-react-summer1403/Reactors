import React from 'react'
import { LinksHolder } from '../common/Auth/Styled Auth/StyledLinksHolder'
import { Link } from 'react-router-dom'

const SignUpLinks = () => {
    return (
        <LinksHolder>
            <Link to={"/authentication"}> من از قبل عضو هستم </Link>
        </LinksHolder>
    )
}

export default SignUpLinks
