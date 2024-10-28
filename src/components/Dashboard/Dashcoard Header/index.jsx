import React, { useState } from 'react'
import { HiOutlineMoon, HiOutlineShoppingBag } from 'react-icons/hi'
import { CgMenuRightAlt } from 'react-icons/cg'

import { HeaderBody } from '../../common/Header/Styled Header/StyledHeaderBody'
import { H1Academy } from '../../common/Header/H1Academy'
import { HeaderOptionsHolder } from '../../common/Header/Header Options/Styled Header Options/StyledOptionsHolder'
import { HeaderOptions } from '../../common/Header/Header Options/HeaderOptions'
import { HiOutlineEyeDropper } from 'react-icons/hi2'
import { ShopBasketSapn } from '../../common/Header/Header Options/Styled Header Options/StyledShopBasketSpan'
import { UserProfile } from '../../common/Header/UserProfile'
import basket from '../../../assets/Image/basket.png'
import { AnimatePresence, motion } from "framer-motion";
import { OptionsHolder } from '../Dashboard Options'

const DashboardHeader = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <HeaderBody className="bg-[#A4F6DE] shadow-[0px_10px_3px_0_#00000024] z-10">
            <div className="flex gap-5">
                <CgMenuRightAlt className="hidden size-10 text-[#158B68] max-[1100px]:block" onClick={toggleMenu} />
                <H1Academy />
            </div>
            <HeaderOptionsHolder>
                <HeaderOptions icon={<HiOutlineEyeDropper />} />
                {/* <HeaderOptions icon={<HiOutlineMoon />} /> */}
                <HeaderOptions icon={<HiOutlineShoppingBag />} />
                <UserProfile />
            </HeaderOptionsHolder>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ x: 200 }}
                            animate={{ x: 0 }}
                            exit={{ x: 200 }}
                            transition={{ duration: 0.35 }}
                            className="flex flex-col fixed right-0 min-w-[240px] py-10 items-center bottom-0 top-0 bg-[#22c7ab] z-20"
                        >

                            <OptionsHolder />

                        </motion.div>
                        <div
                            className="absolute top-0 bottom-0 w-11/12 z-10"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        ></div>
                    </>
                )}
            </AnimatePresence>

        </HeaderBody>
    )
}

export { DashboardHeader }
