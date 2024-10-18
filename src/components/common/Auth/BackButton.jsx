import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ title, url }) => {
    return (
        <Link to={url} className="w-full border-2 border-[#158B68] py-5 bg-white rounded-[10px] text-[18px] text-center"> {title} </Link>
    )
}

export { BackButton }
