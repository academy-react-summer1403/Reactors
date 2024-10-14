import React from 'react'
import { DashboardPartsBody } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'
import { EditProfileImage } from '../../../components/Dashboard/Dashboard Pages/Edit Profile/EditProfileImage'

import '../../../components/Dashboard/Dashboard Pages/Edit Profile/Options Style/toggle.css'
import { TwoStepPassword } from '../../../components/Dashboard/Dashboard Pages/Edit Profile/TwoStepPassword'
import { EditProfileInput } from '../../../components/common/Dashboard/Edit Profile Form/EditProfileInput'
import { Form, Formik } from 'formik'
import { ConfirmButton } from '../../../components/common/Auth/Styled Form/StyledConfirmButton'


const EditProfile = () => {
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
                <Formik>
                    <Form className="py-4 px-10 flex flex-col gap-1">
                        <div className="flex gap-5">
                            <EditProfileInput inputTitle="نام" />
                            <EditProfileInput inputTitle="نام خانوادگی" />
                        </div>
                        <EditProfileInput inputTitle="شماره همراه" />
                        <div className="flex gap-5">
                            <EditProfileInput inputTitle="شماره ملی" />
                            <EditProfileInput inputTitle="تاریخ تولد" />
                        </div>
                        <EditProfileInput inputTitle="آدرس منزل" />
                        <div className="flex gap-5">
                            <EditProfileInput inputTitle="ایمیل" />
                            <EditProfileInput inputTitle="جنسیت" style={{ width: "30%" }} />
                        </div>
                        <EditProfileInput inputTitle="درباره من" />
                        <div className="flex gap-5">
                            <EditProfileInput inputTitle="لینک تلگرام" />
                            <EditProfileInput inputTitle="پروفایل لینکدین" />
                        </div>
                        <ConfirmButton className="mt-10"> ثبت تغییرات </ConfirmButton>
                    </Form>
                </Formik>
            </DashboardPartsBody>
        </div>
    )
}

export { EditProfile }
