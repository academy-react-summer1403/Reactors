import React from 'react'
import { DashboardPartsBody } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'

const EditProfile = () => {
    return (
        <DashboardPartsBody className="flex-col">
            <DashboardPartsTitle className="py-5">
                <p> مشخصات کاربر </p>
            </DashboardPartsTitle>
        </DashboardPartsBody>
    )
}

export { EditProfile }
