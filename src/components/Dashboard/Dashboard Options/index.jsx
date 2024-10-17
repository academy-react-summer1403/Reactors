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
                {
                    [
                        ["پیشخوان", <GrAppsRounded />, "/dashboard/user-overview"],
                        ["ویرایش پروفایل", <FaRegUser />, "/dashboard/edit-profile"],
                        ["دوره های من", <HiOutlineVideoCamera />, "/dashboard/my-courses"],
                        ["دوره های رزرو", <HiOutlineShoppingBag />, "/dashboard/reserved-courses"],
                        ["مورد علاقه ها", <FaRegHeart />, "/dashboard/favorites"],
                        ["نظرات من", <BiCommentDetail />, "/dashboard/my-comments"],
                        ["تغییر رمز", <HiOutlineKey />, "/dashboard/change-password"],

                    ].map((item, key) => <DashboardOptions key={key} title={item[0]} icon={item[1]} url={item[2]} />)
                }

                <div className="mt-20 flex flex-col gap-[10px]">
                    <DashboardOptions title="بازگشت به خانه" icon={<HiOutlineHome />} url="/" />
                    <DashboardOptions title="خروج" icon={<HiOutlineLogout />} url="#" />
                </div>

            </ul>
        </div>
    )
}

export { OptionsHolder }
