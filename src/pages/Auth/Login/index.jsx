import React, { useEffect } from 'react'

import { Form, Formik } from 'formik'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { HiOutlineKey } from "react-icons/hi2"
import { useDispatch } from 'react-redux'

import { loginAPI } from '../../../core/services/api/auth.js'
import { FormInput } from '../../../components/common/Auth/FormInput'
import { FormCheckbox } from '../../../components/common/Auth/FormCheckbox'
import { BackButton } from '../../../components/common/Auth/BackButton'
import { LoginLinks } from '../../../components/Auth/LoginLinks'
import { handleImage } from '../../../redux/auth.jsx'

import { FormTitle } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledFormTitle'
import { FormSection } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledFormSection'
import { FormInputsHolder } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledFormInputsHolder'
import { ButtonHolder } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledButtonHolder'
import { ConfirmButton } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledConfirmButton'

import image from '../../../assets/images/login.svg'
import { setItem } from '../../../core/utils/storage.services.js'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {

    const dispatch = useDispatch()

    const loginUser = async (values) => {
        const user = {
            phoneOrGmail: values.phoneNumber,
            password: values.password,
            rememberMe: values.rememberMe
        }
        const result = await loginAPI(user)
        console.log(result)

        if (result.success) {
            setItem(result.token)
            toast.success("خوش آمدید")
        }
    }

    useEffect(() => {
        dispatch(handleImage(image))
    }, [])

    return (
        <Formik
            initialValues={{ phoneNumber: "", password: "", rememberMe: false }}
            onSubmit={(values) => {
                loginUser(values)
            }}
        >
            <Form className="w-full flex justify-center">
                <Toaster />
                <FormSection>
                    <FormTitle> ورود به سیستم </FormTitle>
                    <FormInputsHolder>
                        <FormInput name="phoneNumber" placeholder="شماره همراه" icon={<IoPhonePortraitOutline className="w-10 h-[30px] text-[#158B68]" />} />
                        <FormInput name="password" placeholder="رمز عبور" icon={<HiOutlineKey className="w-10 h-[30px] text-[#158B68]" />} />
                    </FormInputsHolder>
                    <FormCheckbox name="rememberMe" id="rememberMe" labelText="مرا به خاطر بسپار" />
                    <ButtonHolder>
                        <ConfirmButton type='submit'> تایید </ConfirmButton>
                        <BackButton title="بازگشت به صفحه اصلی" />
                    </ButtonHolder>
                    <LoginLinks />
                </FormSection>
            </Form>
        </Formik>
    )
}

export { Login }
