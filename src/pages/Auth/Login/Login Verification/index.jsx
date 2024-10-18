import React from 'react'
import { Form, Formik } from 'formik'
import { HiOutlineFingerPrint } from "react-icons/hi2"

import { FormInput } from '../../../../components/common/Auth/FormInput'
import { BackButton } from '../../../../components/common/Auth/BackButton'

import { FormSection } from '../../../../components/common/Auth/Styled Form/StyledFormSection'
import { FormTitle } from '../../../../components/common/Auth/Styled Form/StyledFormTitle'
import { FormInputsHolder } from '../../../../components/common/Auth/Styled Form/StyledFormInputsHolder'
import { ButtonHolder } from '../../../../components/common/Auth/Styled Form/StyledButtonHolder'
import { ConfirmButton } from '../../../../components/common/Auth/Styled Form/StyledConfirmButton'

const LoginVerification = () => {
    return (
        <Formik initialValues={{ verificationCode: "" }}>
            <Form className="w-full h-[80%] flex justify-center">
                <FormSection>
                    <FormTitle> ورود به سیستم </FormTitle>
                    <FormInputsHolder>
                        <FormInput name="verificationCode" placeholder="کد تایید" icon={<HiOutlineFingerPrint className="w-10 h-[30px] text-[#158B68]" />} />
                    </FormInputsHolder>
                    <ButtonHolder style={{marginTop: "80px"}}>
                        <ConfirmButton> ورود </ConfirmButton>
                        <BackButton title="بازگشت به صفحه قبل" url="/authentication" />
                    </ButtonHolder>
                </FormSection>
            </Form>
        </Formik>
    )
}

export { LoginVerification }
