import React, { useEffect } from 'react'

import { Form, Formik } from 'formik'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { HiOutlineKey } from "react-icons/hi2"
import { LuAtSign } from "react-icons/lu"
import { MdOutlineVerifiedUser } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'

import { finalRegisteration } from '../../../../core/services/api/auth'
import { FormInput } from '../../../../components/common/Auth/FormInput'
import { FormCheckbox } from '../../../../components/common/Auth/FormCheckbox'
import { handleImage } from '../../../../redux/auth'

import { FormTitle } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledFormTitle'
import { FormSection } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledFormSection'
import { FormInputsHolder } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledFormInputsHolder'
import { ButtonHolder } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledButtonHolder'
import { ConfirmButton } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledConfirmButton'

import image from '../../../../assets/images/finalRegister.svg'

const FinalRegistration = () => {

    const { phoneNumber } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const register = async (values) => {
        const userData = {
            password: values.password,
            gmail: values.email,
            phoneNumber: values.phoneNumber
        }
        const result = await finalRegisteration(userData)
        console.log(result)
    }

    useEffect(() => {
        dispatch(handleImage(image))
    }, [])

    return (
        <Formik
            initialValues={{ phoneNumber: phoneNumber, email: "", password: "", repeatPassword: "", agreement: false }}
            onSubmit={(values) => register(values)}
        >
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
                        <ConfirmButton type="submit"> ادامه </ConfirmButton>
                    </ButtonHolder>
                </FormSection>
            </Form>
        </Formik>
    )
}

export { FinalRegistration }
