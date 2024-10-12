import React from 'react'
import { Dashboard } from '../../../pages/Dashboard'
import { UserInformation } from '../../../components/Dashboard/Dashcoard Header/UserInformation'
import { OptionsHolder } from '../../../components/Dashboard/Dashboard Options'
import { HeaderBody } from '../../../components/common/Header/Styled Header/StyledHeaderBody'
import { H1Academy } from '../../../components/common/Header/H1Academy'
import { HeaderOptionsHolder } from '../../../components/common/Header/Header Options/Styled Header Options/StyledOptionsHolder'
import { HeaderOptions } from '../../../components/common/Header/Header Options/HeaderOptions'
import { UserProfile } from '../../../components/common/Header/UserProfile'
import { HiOutlineEyeDropper } from 'react-icons/hi2'
import { HiOutlineMoon, HiOutlineShoppingBag } from 'react-icons/hi'
import { ShopBasketSapn } from '../../../components/common/Header/Header Options/Styled Header Options/StyledShopBasketSpan'
import { DashboardPageHolder } from '../../../components/Dashboard/Dashboard Pages/Styled Dashboard Pages/StyledDashboardPageHolder'
import { Counter } from '../../../pages/Dashboard/Counter'

const DashboardLayout = () => {
    return (
        <>
            <div className="w-full h-full flex text-[#22445D] text-[18px]">
                <div className="w-[400px] h-full flex flex-col text-nowrap">
                    <UserInformation />
                    <OptionsHolder />
                </div>
                <div className="w-full h-full flex flex-col">
                    <HeaderBody className="bg-[#A4F6DE] shadow-[0px_10px_3px_0_#00000024]">
                        <H1Academy />
                        <HeaderOptionsHolder>
                            <HeaderOptions icon={<HiOutlineEyeDropper />} />
                            <HeaderOptions icon={<HiOutlineMoon />} />
                            <HeaderOptions icon={<HiOutlineShoppingBag />} span={<ShopBasketSapn> 3 </ShopBasketSapn>} />
                            <UserProfile />
                        </HeaderOptionsHolder>
                    </HeaderBody>
                    <div className="h-full p-5">
                        <DashboardPageHolder>
                            <Counter />
                        </DashboardPageHolder>
                    </div>
                </div>
            </div>

        </>
    )
}

export { DashboardLayout }
