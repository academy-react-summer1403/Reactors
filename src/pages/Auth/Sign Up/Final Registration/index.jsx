import React from 'react'

import { Form, Formik } from 'formik'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { HiOutlineKey } from "react-icons/hi2"
import { LuAtSign } from "react-icons/lu"
import { MdOutlineVerifiedUser } from "react-icons/md"

import { FormInput } from '../../../../components/common/Auth/FormInput'
import { FormCheckbox } from '../../../../components/common/Auth/FormCheckbox'

import { FormTitle } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledFormTitle'
import { FormSection } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledFormSection'
import { FormInputsHolder } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledFormInputsHolder'
import { ButtonHolder } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledButtonHolder'
import { ConfirmButton } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledConfirmButton'

const FinalRegistration = () => {
    return (
        <Formik initialValues={{ phoneNumber: "", email: "", password: "", repeatPassword: "" , agreement: false }}>
            <Form className="w-full flex justify-center">
                <FormSection>
                    <FormTitle> ثبت نام </FormTitle>
                    <FormInputsHolder>
                        <FormInput name="phoneNumber" placeholder="شماره همراه" icon={<IoPhonePortraitOutline className="w-10 h-[30px] text-[#158B68]" />} />
                        <FormInput name="email" placeholder="ایمیل کاربر" icon={<LuAtSign className="w-10 h-[30px] text-[#158B68]" />} />
                        <FormInput name="password" placeholder="رمز عبور" icon={<HiOutlineKey className="w-10 h-[30px] text-[#158B68]" />} />
                        <FormInput name="repeatPassword" placeholder="تکرار رمز عبور" icon={<MdOutlineVerifiedUser className="w-10 h-[30px] text-[#158B68]" />} />
                    </FormInputsHolder>
                    <FormCheckbox name="agreement" id="agreement" labelText="من با تمام اظهارات موافقم" />
                    <ButtonHolder>
                        <ConfirmButton> ادامه </ConfirmButton>
                    </ButtonHolder>
                </FormSection>
            </Form>
        </Formik>
    )
}

export { FinalRegistration }
