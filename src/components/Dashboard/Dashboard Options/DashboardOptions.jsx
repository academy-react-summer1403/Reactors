import React from 'react'

import { NavLink } from 'react-router-dom'

const DashboardOptions = ({ title, icon, url }) => {
    return (
        <NavLink to={url} className={({isActive}) => `${isActive && "bg-[#158B68] text-white"} flex items-center gap-[15px] py-[10px] px-5 rounded-[45px]`}>
            <div className="bg-[#158B68] p-[10px] rounded-[45px] text-white flex justify-center items-center text-2xl">
                {icon}
            </div>
            <p> {title} </p>
        </NavLink>
    )
}

export { DashboardOptions }
