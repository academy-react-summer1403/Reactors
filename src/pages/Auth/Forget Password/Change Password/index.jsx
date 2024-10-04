import React, { useEffect } from 'react'

import { Form, Formik } from 'formik'
import { HiOutlineKey } from "react-icons/hi2"
import { MdOutlineVerifiedUser } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

import { changePassword, getConfigValue } from '../../../../core/services/api/auth'
import { FormInput } from '../../../../components/common/Auth/FormInput'
import { handleImage, handleUserId } from '../../../../redux/auth'

import { FormSection } from '../../../../components/common/Auth/Styled Form/StyledFormSection'
import { FormTitle } from '../../../../components/common/Auth/Styled Form/StyledFormTitle'
import { FormInputsHolder } from '../../../../components/common/Auth/Styled Form/StyledFormInputsHolder'
import { ButtonHolder } from '../../../../components/common/Auth/Styled Form/StyledButtonHolder'
import { ConfirmButton } from '../../../../components/common/Auth/Styled Form/StyledConfirmButton'

import image from '../../../../assets/images/newPass.svg'

const ChangePassword = () => {

    const { userId } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const { configValue } = useParams()
    const navigate = useNavigate()

    const getUserConfig = async () => {
        const result = await getConfigValue(configValue)
        dispatch(handleUserId(result.id))
    }

    const recoveryPassword = async (values) => {
        const data = {
            userId: userId,
            newPassword: values.password,
            resetValue: configValue
        }
        if (values.password === values.repeatPassword) {
            const result = await changePassword(data)
            if (result.success) {
                toast.success("رمز شما بازیابی شد!")
                navigate("/authentication")
            }
        } else toast.error("مثل اینکه در تکرار رمز عبور اشتباهی پیش آمده!")
    }

    useEffect(() => {
        dispatch(handleImage(image))
        getUserConfig()
    }, [])

    return (
        <Formik initialValues={{ password: "", repeatPassword: "" }} onSubmit={(values) => recoveryPassword(values)}>
            <Form className="w-full h-[80%] flex justify-center">
                <Toaster />
                <FormSection>
                    <FormTitle> تغییر رمز </FormTitle>
                    <FormInputsHolder>
                        <FormInput name="password" placeholder="رمز عبور" icon={<HiOutlineKey className="w-10 h-[30px] text-[#158B68]" />} />
                        <FormInput name="repeatPassword" placeholder="تکرار رمز عبور" icon={<MdOutlineVerifiedUser className="w-10 h-[30px] text-[#158B68]" />} />
                    </FormInputsHolder>
                    <ButtonHolder style={{ marginTop: "80px" }}>
                        <ConfirmButton type="submit"> تایید </ConfirmButton>
                    </ButtonHolder>
                </FormSection>
            </Form>
        </Formik>
    )
}

export { ChangePassword }
