import React from 'react'

import { Form, Formik } from 'formik'
import { IoPhonePortraitOutline } from 'react-icons/io5'

import { FormInput } from '../../../components/common/Auth/FormInput'
import { BackButton } from '../../../components/common/Auth/BackButton'

import { FormSection } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledFormSection'
import { FormTitle } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledFormTitle'
import { FormInputsHolder } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledFormInputsHolder'
import { ButtonHolder } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledButtonHolder'
import { ConfirmButton } from '../../../components/common/Auth/Styled Auth/Styled Form/StyledConfirmButton'

const SignUp = () => {
    return (
        <Formik initialValues={{ phoneNumber: "" }}>
            <Form className="w-full h-[80%] flex justify-center">
                <FormSection>
                    <FormTitle> ثبت نام </FormTitle>
                    <FormInputsHolder>
                        <FormInput name="phoneNumber" placeholder="شماره همراه" icon={<IoPhonePortraitOutline className="w-10 h-[30px] text-[#158B68]" />} />
                    </FormInputsHolder>
                    <ButtonHolder style={{marginTop: "80px"}}>
                        <ConfirmButton> ورود </ConfirmButton>
                        <BackButton title="بازگشت به صفحه قبل" />
                    </ButtonHolder>
                </FormSection>
            </Form>
        </Formik>
    )
}

export { SignUp }
