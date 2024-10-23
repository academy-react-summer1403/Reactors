import React from 'react'

const NoneItems = ({ title }) => {
    return (
        <div className="w-full h-full flex justify-center items-center p-5">
            <p className="font-semibold"> {title} </p>
        </div>
    )
}

export { NoneItems }
