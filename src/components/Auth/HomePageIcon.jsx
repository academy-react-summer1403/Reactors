import React from 'react'
import { HiOutlineHome } from "react-icons/hi2"
import { Link } from 'react-router-dom'

const HomePageIcon = () => {
    return (
        <div className="w-full flex flex-row-reverse">
            <Link to={"/Home"}>
                <HiOutlineHome className="w-[30px] h-[30px] text-[#158B68]" />
            </Link>
        </div>
    )
}

export { HomePageIcon }
