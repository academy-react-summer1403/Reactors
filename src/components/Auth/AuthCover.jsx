import React from 'react'
import { useSelector } from 'react-redux'

const AuthCover = () => {

    const {image}= useSelector((state) =>{ 
         return state.auth;
        })
    return (
        <div className="w-1/2 h-full rounded-l-[20px] bg-[#A4F6DE] flex justify-center items-center max-[1000px]:hidden">
            <img src={image} alt="" className="w-[90%] h-[70%]" />
        </div>
    )
}

export { AuthCover }
