import React from 'react'
import { Field } from 'formik'

const FormInput = ({ icon, name, placeholder, type, value }) => {
    return (
        <div className="px-[15px] py-5 flex gap-[5px] bg-white rounded-[15px] border-2 border-[#158B68]">
            {/* <IoPhonePortraitOutline className="w-10 h-[30px] text-[#158B68]" /> */}
            {icon}
            <Field name={name} type={type} placeholder={placeholder} value={value} className="w-full outline-none text-[#ABA7A7]" />
        </div>
    )
}

export { FormInput }
