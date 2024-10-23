import React from 'react'
import { NavLink } from 'react-router-dom'

const TwoSectionPage = ({ fistTitle, secondTitle, isCourseClicked, setIsCourseClicked }) => {
    return (
        <div className="w-full h-[70px] flex items-center overflow-hidden text-[25px] justify-center">
            <div className="w-[90%] flex h-full">
                <div onClick={() => setIsCourseClicked(true)} className={`w-1/2 h-full flex justify-center items-center border-[3px] border-[#A4F6DE] ${isCourseClicked? "rounded-[0_15px_15px_0] bg-[#A4F6DE]" : "rounded-[0_15px_0_0]" }`} > {fistTitle} </div>
                <div onClick={() => setIsCourseClicked(false)} className={`w-1/2 h-full flex justify-center items-center border-[3px] border-[#A4F6DE] ${isCourseClicked? "rounded-[15px_0_0_0]" : "rounded-[15px_0_0_15px] bg-[#A4F6DE]"}`}> {secondTitle} </div>
            </div>
        </div>
    )
}

export { TwoSectionPage }
