import React from 'react'

import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'

import Profile from '../../../../assets/images/profile.png'

const UserInformation = () => {
    return (
        <DashboardPartsBody className="flex-col w-1/2">
            <DashboardPartsTitle className="py-5">
                <p> اطلاعات کاربری </p>
            </DashboardPartsTitle>
            <div className="h-full flex flex-col items-center justify-evenly">
                <div className="flex flex-col items-center">
                    <div className="">
                        <img src={Profile} alt="" className="mb-[12px]" />
                    </div>
                    <p> نام و نام خانوادگی </p>
                </div>

                <div className="flex gap-5 justify-center">
                    <div className="flex flex-col gap-5">
                        <p> تلفن همراه: </p>
                        <p> ایمیل:  </p>
                        <p> کد ملی: </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p> 09381803771 </p>
                        <p> parham.khoshnazar@gmail.com </p>
                        <p> 2150938952 </p>
                    </div>
                </div>

                <button className="py-[10px] px-5 bg-[#12926C] text-white rounded-[50px]"> ویرایش </button>

            </div>
        </DashboardPartsBody>
    )
}

export { UserInformation }
