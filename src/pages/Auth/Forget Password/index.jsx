import React, { useEffect } from 'react'

import { Form, Formik } from 'formik'
import { LuAtSign } from "react-icons/lu"
import { useDispatch } from 'react-redux'

import { FormInput } from '../../../components/common/Auth/FormInput'
import { BackButton } from '../../../components/common/Auth/BackButton'
import { handleImage } from '../../../redux/auth'

import { FormSection } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledFormSection'
import { FormTitle } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledFormTitle'
import { FormInputsHolder } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledFormInputsHolder'
import { ButtonHolder } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledButtonHolder'
import { ConfirmButton } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledConfirmButton'

import image from '../../../assets/images/forgot.svg'

const ForgetPassword = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleImage(image))
    }, [])

    return (
        <Formik initialValues={{ email: "" }}>
            <Form className="w-full h-[80%] flex justify-center">
                <FormSection>
                    <FormTitle> ورود به سیستم </FormTitle>
                    <FormInputsHolder>
                        <FormInput name="email" placeholder="ایمیل خود را وارد کنید" icon={<LuAtSign className="w-10 h-[30px] text-[#158B68]" />} />
                    </FormInputsHolder>
                    <ButtonHolder style={{marginTop: "80px"}}>
                        <ConfirmButton> ادامه </ConfirmButton>
                        <BackButton title="بازگشت به صفحه قبل" />
                    </ButtonHolder>
                </FormSection>
            </Form>
        </Formik>
    )
}

export { ForgetPassword }
