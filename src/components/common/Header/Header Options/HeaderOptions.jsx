import React from 'react'
import { HiOutlineEyeDropper } from 'react-icons/hi2'

const HeaderOptions = ({ icon, span }) => {
    return (
        <div className="p-[10px] text-3xl relative">
            {span ? span : null}
            {icon ? icon : null}
        </div>
    )
}

export { HeaderOptions }
