import React from 'react'

import { BiCommentDetail } from 'react-icons/bi'
import { FaRegHeart, FaRegUser } from 'react-icons/fa6'
import { GrAppsRounded } from 'react-icons/gr'
import { HiOutlineHome, HiOutlineKey, HiOutlineLogout, HiOutlineShoppingBag, HiOutlineVideoCamera } from 'react-icons/hi'
import { DashboardOptions } from './DashboardOptions'

const OptionsHolder = () => {
    return (
        <div className="bg-[#A4F6DE] h-full px-10 pt-10 pb-40 overflow-y-scroll">
            <ul className="w-full flex flex-col gap-[10px] text-xl text-[#158B68]">
                {/* <DashboardOptions title="پیشخوان" icon={<GrAppsRounded />} /> */}
                {
                    [
                        ["پیشخوان", <GrAppsRounded />]
                        ["ویرایش پروفایل", <FaRegUser />]
                        ["دوره های من", <HiOutlineVideoCamera />]
                        ["دوره های رزرو", <HiOutlineShoppingBag />]
                        ["مورد علاقه ها", <FaRegHeart />]
                        ["نظرات من", <BiCommentDetail />]
                        ["تغییر رمز", <HiOutlineKey />]
                        ["بازگشت به خانه", <HiOutlineHome />]
                        ["خروج", <HiOutlineLogout />]
                    ].map((item, key) => <DashboardOptions key={key} title={item[0]} icon={item[1]} />)
                }
            </ul>
        </div>
    )
}

export { OptionsHolder }
