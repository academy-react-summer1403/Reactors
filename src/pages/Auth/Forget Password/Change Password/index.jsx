import React from 'react'

import { Form, Formik } from 'formik'
import { HiOutlineKey } from "react-icons/hi2"
import { MdOutlineVerifiedUser } from "react-icons/md"

import { FormInput } from '../../../../components/common/Auth/FormInput'

import { FormSection } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledFormSection'
import { FormTitle } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledFormTitle'
import { FormInputsHolder } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledFormInputsHolder'
import { ButtonHolder } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledButtonHolder'
import { ConfirmButton } from '../../../../components/common/Auth/Styled Auth/Styled Form/StyledConfirmButton'

const ChangePassword = () => {
    return (
        <Formik initialValues={{ password: "", repeatPassword: "" }}>
            <Form className="w-full h-[80%] flex justify-center">
                <FormSection>
                    <FormTitle> تغییر رمز </FormTitle>
                    <FormInputsHolder>
                        <FormInput name="password" placeholder="رمز عبور" icon={<HiOutlineKey className="w-10 h-[30px] text-[#158B68]" />} />
                        <FormInput name="repeatPassword" placeholder="تکرار رمز عبور" icon={<MdOutlineVerifiedUser className="w-10 h-[30px] text-[#158B68]" />} />
                    </FormInputsHolder>
                    <ButtonHolder style={{ marginTop: "80px" }}>
                        <ConfirmButton> تایید </ConfirmButton>
                    </ButtonHolder>
                </FormSection>
            </Form>
        </Formik>
    )
}

export { ChangePassword }
