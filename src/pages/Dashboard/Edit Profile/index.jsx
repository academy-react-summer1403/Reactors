import React from 'react'
import { Form, Formik } from 'formik'
import { useSelector } from 'react-redux'

import { TwoStepPassword } from '../../../components/Dashboard/Dashboard Pages/Edit Profile/TwoStepPassword'
import { EditProfileInput } from '../../../components/common/Dashboard/Edit Profile Form/EditProfileInput'

import { DashboardPartsBody } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'
import { EditProfileImage } from '../../../components/Dashboard/Dashboard Pages/Edit Profile/EditProfileImage'
import { ConfirmButton } from '../../../components/common/Auth/Styled Form/StyledConfirmButton'

import '../../../components/Dashboard/Dashboard Pages/Edit Profile/Options Style/toggle.css'

const EditProfile = () => {

    const userInfo = useSelector((state) => state.userInfo)

    return (
        <div className="w-full h-full flex gap-5">
            <div className="flex flex-col gap-5 w-1/3">
                <EditProfileImage />
                <TwoStepPassword />
            </div>

            <DashboardPartsBody className="flex-col w-2/3">
                <DashboardPartsTitle className="py-5">
                    <p> مشخصات کاربر </p>
                </DashboardPartsTitle>
                <Formik initialValues={{
                    firstName: userInfo.firstName,
                    lastName: userInfo.lastName,
                    phoneNumber: userInfo.phoneNumber,
                    nationalCode: userInfo.nationalCode,
                    birthday: userInfo.birthday,
                    homeAddress: userInfo.homeAddress,
                    email: userInfo.email,
                    gender: userInfo.gender,
                    userAbout: userInfo.userAbout,
                    telegramLink: userInfo.telegramLink,
                    linkdinProfile: userInfo.linkdinProfile
                }}>
                    <Form className="py-4 px-10 flex flex-col gap-1">
                        <div className="flex gap-5">
                            <EditProfileInput inputTitle="نام" name="firstName" />
                            <EditProfileInput inputTitle="نام خانوادگی" name="lastName" />
                        </div>
                        <EditProfileInput inputTitle="شماره همراه" name="phoneNumber" />
                        <div className="flex gap-5">
                            <EditProfileInput inputTitle="شماره ملی" name="nationalCode" />
                            <EditProfileInput inputTitle="تاریخ تولد" name="birthday" type="date" />
                        </div>
                        <EditProfileInput inputTitle="آدرس منزل" name="homeAddress" />
                        <div className="flex gap-5">
                            <EditProfileInput inputTitle="ایمیل" name="email" />
                            <EditProfileInput inputTitle="جنسیت" name="gender" style={{ width: "30%" }} />
                        </div>
                        <EditProfileInput inputTitle="درباره من" name="userAbout" />
                        <div className="flex gap-5">
                            <EditProfileInput inputTitle="لینک تلگرام" name="telegramLink" />
                            <EditProfileInput inputTitle="پروفایل لینکدین" name="linkdinProfile" />
                        </div>
                        <ConfirmButton className="mt-10"> ثبت تغییرات </ConfirmButton>
                    </Form>
                </Formik>
            </DashboardPartsBody>
        </div>
    )
}

export { EditProfile }
