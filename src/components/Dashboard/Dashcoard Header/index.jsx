import React from 'react'
import { HiOutlineMoon, HiOutlineShoppingBag } from 'react-icons/hi'
import { CgMenuRightAlt } from 'react-icons/cg'

import { HeaderBody } from '../../common/Header/Styled Header/StyledHeaderBody'
import { H1Academy } from '../../common/Header/H1Academy'
import { HeaderOptionsHolder } from '../../common/Header/Header Options/Styled Header Options/StyledOptionsHolder'
import { HeaderOptions } from '../../common/Header/Header Options/HeaderOptions'
import { HiOutlineEyeDropper } from 'react-icons/hi2'
import { ShopBasketSapn } from '../../common/Header/Header Options/Styled Header Options/StyledShopBasketSpan'
import { UserProfile } from '../../common/Header/UserProfile'

const DashboardHeader = () => {
    return (
        <HeaderBody className="bg-[#A4F6DE] shadow-[0px_10px_3px_0_#00000024] z-10">
            <div className="flex gap-5">
                <CgMenuRightAlt className="hidden size-10 text-[#158B68] max-[1100px]:block" />
                <H1Academy />
            </div>
            <HeaderOptionsHolder>
                <HeaderOptions icon={<HiOutlineEyeDropper />} />
                <HeaderOptions icon={<HiOutlineMoon />} />
                <HeaderOptions icon={<HiOutlineShoppingBag />} span={<ShopBasketSapn> 3 </ShopBasketSapn>} />
                <UserProfile />
            </HeaderOptionsHolder>
        </HeaderBody>
    )
}

export { DashboardHeader }
