import React, { useEffect } from 'react'

import { Form, Formik } from 'formik'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'

import { sendVerifyMessage } from '../../../core/services/api/auth'
import { FormInput } from '../../../components/common/Auth/FormInput'
import { BackButton } from '../../../components/common/Auth/BackButton'
import { handleImage, handlePhoneNumber } from '../../../redux/auth'

import { FormSection } from '../../../components/common/Auth/Styled Form/StyledFormSection'
import { FormTitle } from '../../../components/common/Auth/Styled Form/StyledFormTitle'
import { FormInputsHolder } from '../../../components/common/Auth/Styled Form/StyledFormInputsHolder'
import { ButtonHolder } from '../../../components/common/Auth/Styled Form/StyledButtonHolder'
import { ConfirmButton } from '../../../components/common/Auth/Styled Form/StyledConfirmButton'

import image from '../../../assets/images/register.svg'
import SignUpLinks from '../../../components/Auth/SignUpLinks'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const SignUp = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const verifyUser = async (values) => {
        const result = await sendVerifyMessage({ phoneNumber: values.phoneNumber })
        console.log(result)

        if (result.success) {
            if (result.message !== "درخواست نامعتبر") {
                dispatch(handlePhoneNumber(values.phoneNumber))
                navigate("/authentication/verify-user")
            } else toast.error("این کاربر ثبت نام شده است")
        } 
    }

    useEffect(() => {
        dispatch(handleImage(image))
    }, [])

    return (
        <Formik initialValues={{ phoneNumber: "" }} onSubmit={(values) => verifyUser(values)} >
            <Form className="w-full h-[80%] flex justify-center">
                <Toaster />
                <FormSection>
                    <FormTitle> ثبت نام </FormTitle>
                    <FormInputsHolder>
                        <FormInput name="phoneNumber" placeholder="شماره همراه" icon={<IoPhonePortraitOutline className="w-10 h-[30px] text-[#158B68]" />} />
                    </FormInputsHolder>
                    <ButtonHolder style={{ marginTop: "80px" }}>
                        <ConfirmButton type='submit'> ورود </ConfirmButton>
                        <BackButton title="بازگشت به صفحه اصلی" url="/" />
                    </ButtonHolder>
                    <SignUpLinks />
                </FormSection>
            </Form>
        </Formik>
    )
}

export { SignUp }
