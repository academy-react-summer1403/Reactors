import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { useSelector } from 'react-redux'

import { TwoStepPassword } from '../../../components/Dashboard/Dashboard Pages/Edit Profile/TwoStepPassword'
import { EditProfileInput } from '../../../components/common/Dashboard/Edit Profile Form/EditProfileInput'

import { DashboardPartsBody } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'
import { EditProfileImage } from '../../../components/Dashboard/Dashboard Pages/Edit Profile/EditProfileImage'
import { ConfirmButton } from '../../../components/common/Auth/Styled Form/StyledConfirmButton'

import '../../../components/Dashboard/Dashboard Pages/Edit Profile/Options Style/toggle.css'
import { setFormData } from '../../../core/utils/setFormData'
import { editProfile } from '../../../core/services/api/dashboard'

const EditProfile = () => {

    const { userProfile } = useSelector((state) => state.userInfo)

    const editUserProfile = async (values) => {
        const userProfileInfo = new FormData()
        const birthday = new Date(values.birthday).toISOString()
        // const userProfileObj = {
        //     LName: values.lastName,
        //     FName: values.firstName,
        //     UserAbout: values.userAbout,
        //     LinkdinProfile: values.linkdinProfile,
        //     TelegramLink: values.telegramLink,
        //     ReceiveMessageEvent: values.receiveMessageEvent,
        //     HomeAdderess: values.homeAddress,
        //     NationalCode: values.nationalCode,
        //     Gender: values.gender,
        //     BirthDay: values.birthday
        // }
        // setFormData(userProfileObj, userProfileInfo)
        // const result = await editProfile(userProfileInfo)
        // console.log(result)
        userProfileInfo.append("LName", values.lastName)
        userProfileInfo.append("FName", values.firstName)
        userProfileInfo.append("UserAbout", values.userAbout)
        userProfileInfo.append("LinkdinProfile", values.linkdinProfile)
        userProfileInfo.append("TelegramLink", values.telegramLink)
        userProfileInfo.append("ReceiveMessageEvent", values.receiveMessageEvent)
        userProfileInfo.append("HomeAdderess", values.homeAddress)
        userProfileInfo.append("NationalCode", values.nationalCode)
        userProfileInfo.append("Gender", values.gender)
        userProfileInfo.append("BirthDay", birthday)
        const result = await editProfile(userProfile)
        console.log(birthday)
        console.log(result)
    }

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
                    firstName: userProfile?.fName,
                    lastName: userProfile?.lName,
                    phoneNumber: userProfile?.phoneNumber,
                    nationalCode: userProfile?.nationalCode,
                    birthday: userProfile?.birthDay,
                    homeAddress: userProfile?.homeAdderess,
                    email: userProfile?.email,
                    gender: userProfile?.gender,
                    userAbout: userProfile?.userAbout,
                    telegramLink: userProfile?.telegramLink,
                    linkdinProfile: userProfile?.linkdinProfile,
                    receiveMessageEvent: userProfile?.receiveMessageEvent
                }}
                    onSubmit={(values) => editUserProfile(values)}
                >
                    {(form) => (
                        <Form className="py-4 px-10 flex flex-col gap-1">
                            <div className="flex gap-5">
                                <EditProfileInput inputTitle="نام" name="firstName" value={form.values.firstName} />
                                <EditProfileInput inputTitle="نام خانوادگی" name="lastName" value={form.values.lastName} />
                            </div>
                            <EditProfileInput inputTitle="شماره همراه" name="phoneNumber" value={form.values.phoneNumber} />
                            <div className="flex gap-5">
                                <EditProfileInput inputTitle="شماره ملی" name="nationalCode" value={form.values.nationalCode} />
                                <EditProfileInput inputTitle="تاریخ تولد" name="birthday" type="date" />
                            </div>
                            <EditProfileInput inputTitle="آدرس منزل" name="homeAddress" value={form.values.homeAddress} />
                            <div className="flex gap-5">
                                <EditProfileInput inputTitle="ایمیل" name="email" value={form.values.email} />
                                <div className="flex flex-col gap-[10px] w-1/3">
                                    <p className="text-[#158B68] text-[20px]"> جنسیت </p>
                                    <select name="gender" className="px-[15px] py-5 flex gap-[5px] bg-white rounded-[15px] border-2 border-[#158B68] outline-none">
                                        <option value={false}> زن </option>
                                        <option value={true}> مرد </option>
                                    </select>
                                </div>

                            </div>
                            <EditProfileInput inputTitle="درباره من" name="userAbout" value={form.values.userAbout} />
                            <div className="flex gap-5">
                                <EditProfileInput inputTitle="لینک تلگرام" name="telegramLink" value={form.values.telegramLink} />
                                <EditProfileInput inputTitle="پروفایل لینکدین" name="linkdinProfile" value={form.values.linkdinProfile} />
                            </div>
                            <ConfirmButton type="submit" className="mt-10"> ثبت تغییرات </ConfirmButton>
                        </Form>
                    )}
                </Formik>
            </DashboardPartsBody>
        </div>
    )
}

export { EditProfile }
