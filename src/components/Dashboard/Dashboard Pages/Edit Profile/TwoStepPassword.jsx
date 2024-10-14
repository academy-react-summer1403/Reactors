import React from 'react'
import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'

const TwoStepPassword = () => {
    return (
        <DashboardPartsBody className="flex-col">
            <DashboardPartsTitle className="p-5">
                <p> امنیت </p>
            </DashboardPartsTitle>
            <div className="p-6 flex items-end justify-center gap-5">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <p className="text-[20px] text-[#158B68]"> رمز ورود دو مرحله ای </p>
            </div>
        </DashboardPartsBody>
    )
}

export { TwoStepPassword }
