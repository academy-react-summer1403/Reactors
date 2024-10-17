import React, { useEffect } from 'react'

import { Form, Formik } from 'formik'
import { LuAtSign } from "react-icons/lu"
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'

import { forgetPassword } from '../../../core/services/api/auth'
import { FormInput } from '../../../components/common/Auth/FormInput'
import { BackButton } from '../../../components/common/Auth/BackButton'
import { handleImage } from '../../../redux/auth'

import { FormSection } from '../../../components/common/Auth/Styled Form/StyledFormSection'
import { FormTitle } from '../../../components/common/Auth/Styled Form/StyledFormTitle'
import { FormInputsHolder } from '../../../components/common/Auth/Styled Form/StyledFormInputsHolder'
import { ButtonHolder } from '../../../components/common/Auth/Styled Form/StyledButtonHolder'
import { ConfirmButton } from '../../../components/common/Auth/Styled Form/StyledConfirmButton'

import image from '../../../assets/images/forgot.svg'

const ForgetPassword = () => {

    const dispatch = useDispatch()

    const recoveryUserPassword = async (values) => {
        const data = {
            email: values.email,
            baseUrl: "http://localhost:5173/authentication/change-password"
        }
        const result = await forgetPassword(data)
        if (result.success) toast.custom("ایمیل حاوی لینک بازیابی رمز برای شما ارسال شد. به ایمیل هایتان مراجعه کرده و از طریق آن وارد صفحه بازیابی رمز عبور شوید.")
    }

    useEffect(() => {
        dispatch(handleImage(image))
    }, [])

    return (
        <Formik initialValues={{ email: "" }} onSubmit={(values) => recoveryUserPassword(values)}>
            <Form className="w-full h-[80%] flex justify-center">
                <Toaster />
                <FormSection>
                    <FormTitle> ورود به سیستم </FormTitle>
                    <FormInputsHolder>
                        <FormInput name="email" placeholder="ایمیل خود را وارد کنید" icon={<LuAtSign className="w-10 h-[30px] text-[#158B68]" />} />
                    </FormInputsHolder>
                    <ButtonHolder style={{marginTop: "80px"}}>
                        <ConfirmButton type="submit"> ادامه </ConfirmButton>
                        <BackButton title="بازگشت به صفحه قبل" url="/authentication" />
                    </ButtonHolder>
                </FormSection>
            </Form>
        </Formik>
    )
}

export { ForgetPassword }
