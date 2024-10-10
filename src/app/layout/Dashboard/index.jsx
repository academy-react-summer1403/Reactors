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

const DashboardLayout = () => {
    return (
        <div className="w-full h-full flex">
            <div className="w-[400px] h-full flex flex-col text-nowrap">
                <UserInformation />
                <OptionsHolder />
            </div>
            <div className="w-full h-full flex flex-col ">
                <HeaderBody className="bg-[#A4F6DE]">
                    <H1Academy />
                    <HeaderOptionsHolder>
                        <HeaderOptions icon={<HiOutlineEyeDropper />} />
                        <HeaderOptions icon={<HiOutlineMoon />} />
                        <HeaderOptions icon={<HiOutlineShoppingBag />} span={<ShopBasketSapn> 3 </ShopBasketSapn>} />
                        <UserProfile />
                    </HeaderOptionsHolder>
                </HeaderBody>
            </div>
        </div>
    )
}

export { DashboardLayout }
