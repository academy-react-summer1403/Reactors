import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'
import { EditButton } from '../../../common/Dashboard/Styled DashboardPages/StyledEditButton'

import Profile from '../../../../assets/images/profile.png'

const UserInformation = () => {

    const { userProfile } = useSelector((state) => state.userInfo)

    return (
        <DashboardPartsBody className="flex-col w-[45%] max-[1100px]:w-full">
            <DashboardPartsTitle className="py-5">
                <p> اطلاعات کاربری </p>
            </DashboardPartsTitle>
            <div className="h-full flex flex-col items-center justify-evenly max-[1100px]:py-5 max-[1100px]:gap-5">
                <div className="flex flex-col items-center">
                    <div className="max-[900px]:mt-5">
                        <img src={userProfile?.currentPictureAddress} alt="" className="mb-[12px] rounded-full" />
                    </div>
                    <p> {userProfile?.fName + " " + userProfile?.lName} </p>
                </div>

                <div className="flex gap-5 justify-center max-xl:text-[16px] max-[1100px]:text-[18px]">
                    <div className="flex flex-col gap-5">
                        <p> تلفن همراه: </p>
                        <p> ایمیل:  </p>
                        <p> کد ملی: </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p> {userProfile?.phoneNumber} </p>
                        <p> {userProfile?.email} </p>
                        <p> {userProfile?.nationalCode} </p>
                    </div>
                </div>

                <EditButton style={{ padding: 0 }}>
                    <Link to={"/dashboard/edit-profile"} className="block w-full h-full py-[8px] px-6"> ویرایش </Link>
                </EditButton>
            </div>
        </DashboardPartsBody>
    )
}

export { UserInformation }
