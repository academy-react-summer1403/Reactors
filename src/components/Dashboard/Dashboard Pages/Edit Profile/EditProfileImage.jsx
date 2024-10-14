import React from 'react'
import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'
import { EditButton } from '../../../common/Dashboard/Styled DashboardPages/StyledEditButton'

import Profile from '../../../../assets/images/profile.png'

const EditProfileImage = () => {
    return (
        <DashboardPartsBody className="flex-col">
            <DashboardPartsTitle className="p-5">
                <p> عکس پروفایل </p>
            </DashboardPartsTitle>
            <div className="p-6 flex flex-col items-center gap-5">
                <div>
                    <img src={Profile} alt="" />
                </div>
                <EditButton> ویرایش عکس </EditButton>
            </div>
        </DashboardPartsBody>
    )
}

export { EditProfileImage }
