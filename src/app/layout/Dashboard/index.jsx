import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { UserInformation } from '../../../components/Dashboard/Dashcoard Header/UserInformation'
import { OptionsHolder } from '../../../components/Dashboard/Dashboard Options'
import { DashboardPageHolder } from '../../../components/Dashboard/Dashboard Pages/Styled Dashboard Pages/StyledDashboardPageHolder'
import { DashboardHeader } from '../../../components/Dashboard/Dashcoard Header'


const DashboardLayout = () => {
    return (
        <div className="w-full h-full flex text-[#22445D] text-[18px]">
            <Toaster />
            <div className="w-[400px] h-full flex flex-col text-nowrap max-[1400px]:w-[300px] max-[1100px]:hidden">
                <UserInformation />
                <OptionsHolder />
            </div>
            <div className="w-full h-full flex flex-col">
                <DashboardHeader />
                <div className="h-full p-5 overflow-y-scroll">
                    <DashboardPageHolder>
                        <Outlet />
                    </DashboardPageHolder>
                </div>
            </div>
        </div>
    )
}

export { DashboardLayout }
