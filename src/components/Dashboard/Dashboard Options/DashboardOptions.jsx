import React from 'react'

const DashboardOptions = ({ title, icon }) => {
    return (
        <li className="flex items-center gap-[15px] py-[10px] px-5 rounded-[45px]">
            <div className="bg-[#158B68] p-[10px] rounded-[45px] text-white flex justify-center items-center text-2xl">
                {icon}
            </div>
            <p className="mt-[-8px]"> {title} </p>
        </li>
    )
}

export { DashboardOptions }
