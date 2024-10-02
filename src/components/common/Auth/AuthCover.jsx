import React from 'react'

const AuthCover = ({ image }) => {
    return (
        <div className="w-1/2 h-full rounded-l-[20px] bg-[#A4F6DE] flex justify-center items-center">
            <img src={image} alt="" className="w-[90%] h-[70%]" />
        </div>
    )
}

export { AuthCover }
