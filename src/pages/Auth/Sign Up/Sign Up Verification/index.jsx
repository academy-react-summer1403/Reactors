import React, { useEffect } from 'react'

import { Form, Formik } from 'formik'
import { HiOutlineFingerPrint } from "react-icons/hi2"
import { useDispatch, useSelector } from 'react-redux'

import { verifyMessage } from '../../../../core/services/api/auth'
import { FormInput } from '../../../../components/common/Auth/FormInput'
import { BackButton } from '../../../../components/common/Auth/BackButton'
import { handleImage } from '../../../../redux/auth'

import { FormSection } from '../../../../components/common/Auth/Styled Form/StyledFormSection'
import { FormTitle } from '../../../../components/common/Auth/Styled Form/StyledFormTitle'
import { FormInputsHolder } from '../../../../components/common/Auth/Styled Form/StyledFormInputsHolder'
import { ButtonHolder } from '../../../../components/common/Auth/Styled Form/StyledButtonHolder'
import { ConfirmButton } from '../../../../components/common/Auth/Styled Form/StyledConfirmButton'

import image from '../../../../assets/images/registerVerfy.svg'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SignUpVerification = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { phoneNumber } = useSelector((state) => state.auth)

    const verifyUser = async (values) => {
        const userVerification = {
            phoneNumber: phoneNumber,
            verifyCode: values.verificationCode
        }
        const result = await verifyMessage(userVerification)
        if (result.success) {
            toast.custom("اطلاعات تکمیلی را وارد کنید")
            navigate("/authentication/final-registeration")
        }
        else if (!result.success) {
            toast.error("خطا")
        }
        console.log(result)
    }

    useEffect(() => {
        dispatch(handleImage(image))
    }, [])

    return (
        <Formik initialValues={{ verificationCode: "" }} onSubmit={(values) => verifyUser(values)}>
            <Form className="w-full h-[80%] flex justify-center">
                <FormSection>
                    <FormTitle> ثبت نام </FormTitle>
                    <FormInputsHolder>
                        <FormInput name="verificationCode" placeholder="کد تایید" icon={<HiOutlineFingerPrint className="w-10 h-[30px] text-[#158B68]" />} />
                    </FormInputsHolder>
                    <ButtonHolder style={{ marginTop: "80px" }}>
                        <ConfirmButton type='submit'> ورود </ConfirmButton>
                        <BackButton title="بازگشت به صفحه قبل" url="/authentication/signup" />
                    </ButtonHolder>
                </FormSection>
            </Form>
        </Formik>
    )
}

export { SignUpVerification }
