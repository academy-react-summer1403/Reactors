import React from 'react'
import { FormInput } from '../../Auth/FormInput'

const EditProfileInput = ({ inputTitle, icon, name, placeholder, type, style }) => {
    return (
        <div className="flex flex-col gap-[10px] w-full" style={style}>
            <p className="text-[#158B68] text-[20px]"> {inputTitle} </p>
            <FormInput icon={icon} name={name} placeholder={placeholder} type={type} />
        </div>
    )
}

export { EditProfileInput }
