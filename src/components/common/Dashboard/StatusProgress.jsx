import React from 'react'

const StatusProgress = ({ color, title }) => {
    return (
        <div className="flex flex-col gap-5">
            <p> {title} </p>
            <div className="flex w-full gap-3">
                <div className="w-full">
                    <span className="inline-block rounded-[15px] w-full border-[8px] border-[#E1E1E1] relative">
                        <span className={`inline-block rounded-[15px] w-1/2 absolute right-[-8px] top-[-8px] border-[8px] border-[${color}]`}></span>
                    </span>
                </div>
                <p className="text-[#158B68]"> 4 </p>
            </div>
        </div>
    )
}

export { StatusProgress }
