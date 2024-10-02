import React from 'react'

import { Form, Formik } from 'formik'
import { IoPhonePortraitOutline } from 'react-icons/io5'

import { FormInput } from '../../../components/common/Auth/FormInput'
import { FormCheckbox } from '../../../components/common/Auth/FormCheckbox'
import { BackButton } from '../../../components/common/Auth/BackButton'
import { LoginLinks } from '../../../components/Auth/LoginLinks'

import { FormTitle } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledFormTitle'
import { FormSection } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledFormSection'
import { FormInputsHolder } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledFormInputsHolder'
import { ButtonHolder } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledButtonHolder'
import { ConfirmButton } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledConfirmButton'

import image from '../../../assets/images/login.svg'

const Login = () => {
    return (
        <Formik initialValues={{ phoneNumber: "", password: "", rememberMe: false }}>
            <Form className="w-full flex justify-center">
                <FormSection>
                    <FormTitle> ورود به سیستم </FormTitle>
                    <FormInputsHolder>
                        <FormInput name="phoneNumber" placeholder="شماره همراه" icon={<IoPhonePortraitOutline className="w-10 h-[30px] text-[#158B68]" />} />
                        <FormInput name="password" placeholder="رمز عبور" icon={<IoPhonePortraitOutline className="w-10 h-[30px] text-[#158B68]" />} />
                    </FormInputsHolder>
                    <FormCheckbox name="rememberMe" id="rememberMe" labelText="مرا به خاطر بسپار" />
                    <ButtonHolder>
                        <ConfirmButton> تایید </ConfirmButton>
                        <BackButton title="بازگشت به صفحه اصلی" />
                    </ButtonHolder>
                    <LoginLinks />
                </FormSection>
            </Form>
        </Formik>
    )
}

export { Login }
