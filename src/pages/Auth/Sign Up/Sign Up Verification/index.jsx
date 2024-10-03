import React, { useEffect } from 'react'

import { Form, Formik } from 'formik'
import { HiOutlineFingerPrint } from "react-icons/hi2"
import { useDispatch } from 'react-redux'

import { FormInput } from '../../../../components/common/Auth/FormInput'
import { BackButton } from '../../../../components/common/Auth/BackButton'
import { handleImage } from '../../../../redux/auth'

import { FormSection } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledFormSection'
import { FormTitle } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledFormTitle'
import { FormInputsHolder } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledFormInputsHolder'
import { ButtonHolder } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledButtonHolder'
import { ConfirmButton } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledConfirmButton'

import image from '../../../../assets/images/registerVerfy.svg'

const SignUpVerification = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleImage(image))
    }, [])

    return (
        <Formik initialValues={{ verificationCode: "" }}>
            <Form className="w-full h-[80%] flex justify-center">
                <FormSection>
                    <FormTitle> ثبت نام </FormTitle>
                    <FormInputsHolder>
                        <FormInput name="verificationCode" placeholder="کد تایید" icon={<HiOutlineFingerPrint className="w-10 h-[30px] text-[#158B68]" />} />
                    </FormInputsHolder>
                    <ButtonHolder style={{ marginTop: "80px" }}>
                        <ConfirmButton> ورود </ConfirmButton>
                        <BackButton title="بازگشت به صفحه قبل" />
                    </ButtonHolder>
                </FormSection>
            </Form>
        </Formik>
    )
}

export { SignUpVerification }
