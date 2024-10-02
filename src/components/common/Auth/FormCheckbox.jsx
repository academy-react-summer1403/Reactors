import React from 'react'
import { Field } from 'formik'

const FormCheckbox = ({ name, id, labelText }) => {
    return (
        <div className="flex gap-[15px] mt-[25px]">
            <div className="w-7 h-7 border-2 border-[#158B68] rounded-[2px]">
                <Field type="checkbox" name={name} id={id} className="w-full h-full" />
            </div>
            <label htmlFor={id}> {labelText} </label>
        </div>
    )
}

export { FormCheckbox }
