import React from 'react'

import { Form, Formik } from 'formik'
import { RxLockClosed } from 'react-icons/rx'
import { HiOutlineKey } from 'react-icons/hi2'
import { MdOutlineVerifiedUser } from 'react-icons/md'

import { DashboardPartsBody } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'
import { AuthBody } from '../../../components/Auth/Styled Auth/StyledAuthBody'
import { FormBody } from '../../../components/Auth/Styled Auth/Styled Form/StyledFormBody'
import { FormInput } from '../../../components/common/Auth/FormInput'
import { FormSection } from '../../../components/common/Auth/Styled Form/StyledFormSection'
import { ConfirmButton } from '../../../components/common/Auth/Styled Form/StyledConfirmButton'

import ChangePasswordImg from '../../../assets/images/changePassword.png'
import { changePassword } from '../../../core/services/api/dashboard'
import toast from 'react-hot-toast'

const ChangePassword = () => {

    const changeUserPassword = async (values) => {
        const newPassword = {
            oldPassword: values.oldPassword,
            newPassword: values.newPassword
        }
        const result = await changePassword(newPassword)
        if (result.success) {
            toast.success("تغییر رمز با موفقیت انجام شد")
        }
        console.log(result)
    }

    return (
        <DashboardPartsBody className="flex-col w-full">
            <DashboardPartsTitle className="py-5">
                <p> تغییر رمز عبور </p>
            </DashboardPartsTitle>
            <AuthBody className="px-12 py-20 justify-center items-center">
                <div className="w-[45%] h-full flex justify-center items-center">
                    <img src={ChangePasswordImg} alt="" className="w-[90%] h-[70%]" />
                </div>
                <FormBody style={{ width: "55%", padding: "0" }}>
                    <Formik initialValues={{
                        oldPassword: "",
                        newPassword: "",
                        repeatNewPassword: ""
                    }}
                    onSubmit={(values) => changeUserPassword(values)}
                    >
                        <Form className="w-full flex justify-start">
                            <FormSection className="gap-5">
                                <div className="mb-5">
                                    <FormInput icon={<RxLockClosed className="w-10 h-[30px] text-[#158B68]" />} name="oldPassword" placeholder="رمز عبور فعلی" />
                                </div>
                                <FormInput icon={<HiOutlineKey className="w-10 h-[30px] text-[#158B68]" />} name="newPassword" placeholder="رمز عبور جدید" />
                                <div className="mb-5">
                                    <FormInput icon={<MdOutlineVerifiedUser className="w-10 h-[30px] text-[#158B68]" />} name="repeatNewPassword" placeholder="تکرار رمز عبور جدید" />
                                </div>
                                <ConfirmButton type="submit"> تایید </ConfirmButton>
                            </FormSection>
                        </Form>
                    </Formik>
                </FormBody>
            </AuthBody>
        </DashboardPartsBody>
    )
}

export { ChangePassword }
