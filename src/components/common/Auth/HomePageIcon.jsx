import React from 'react'
import { HiOutlineHome } from "react-icons/hi2"

const HomePageIcon = () => {
    return (
        <div className="w-full flex flex-row-reverse">
            <a href="#">
                <HiOutlineHome className="w-[30px] h-[30px] text-[#158B68]" />
            </a>
        </div>
    )
}

export { HomePageIcon }
