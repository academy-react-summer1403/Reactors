import React from 'react'
import { GrAppsRounded } from "react-icons/gr"
import { FaRegUser } from "react-icons/fa6"
import { HiOutlineVideoCamera } from "react-icons/hi"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { FaRegHeart } from "react-icons/fa6"
import { BiCommentDetail } from "react-icons/bi"
import { HiOutlineKey } from "react-icons/hi2"
import { HiOutlineHome } from "react-icons/hi2"
import { HiOutlineLogout } from "react-icons/hi"
import { HiOutlineEyeDropper } from "react-icons/hi2"
import { HiOutlineMoon } from "react-icons/hi2"

import profile from '../../assets/images/profile.png'

const Dashboard = () => {
    return (
        <div className="w-full h-full flex">
            <div className="w-[400px] h-full flex flex-col">
                <div className="h-[100px] flex shrink-0 justify-center items-center bg-[#FBF6F6]">
                    <p> username<br></br>نقش کاربر </p>
                </div>
                <div className="bg-[#A4F6DE] h-full px-10 pt-10 pb-40 overflow-y-scroll">
                    <ul className="w-full flex flex-col gap-[10px] text-xl text-[#158B68]">

                        <li className="flex items-center gap-[15px] py-[10px] px-5 rounded-[45px] bg-white">
                            <div className="bg-[#158B68] p-[10px] rounded-[45px] text-white flex justify-center items-center text-2xl">
                                <GrAppsRounded />
                            </div>
                            <p className="mt-[-8px]"> پیشخوان </p>
                        </li>
                        <li className="flex items-center gap-[10px] py-[10px] px-5 rounded-[45px]">
                            <div className="bg-[#158B68] p-[10px] rounded-[45px] text-white flex justify-center items-center">
                                <FaRegUser />
                            </div>
                            <p className="mt-[-8px]"> پیشخوان </p>
                        </li>
                        <li className="flex items-center gap-[10px] py-[10px] px-5 rounded-[45px]">
                            <div className="bg-[#158B68] p-[10px] rounded-[45px] text-white flex justify-center items-center">
                                <HiOutlineVideoCamera />
                            </div>
                            <p className="mt-[-8px]"> پیشخوان </p>
                        </li>
                        <li className="flex items-center gap-[10px] py-[10px] px-5 rounded-[45px]">
                            <div className="bg-[#158B68] p-[10px] rounded-[45px] text-white flex justify-center items-center">
                                <HiOutlineShoppingBag />
                            </div>
                            <p className="mt-[-8px]"> پیشخوان </p>
                        </li>
                        <li className="flex items-center gap-[10px] py-[10px] px-5 rounded-[45px]">
                            <div className="bg-[#158B68] p-[10px] rounded-[45px] text-white flex justify-center items-center">
                                <FaRegHeart />
                            </div>
                            <p className="mt-[-8px]"> پیشخوان </p>
                        </li>
                        <li className="flex items-center gap-[10px] py-[10px] px-5 rounded-[45px]">
                            <div className="bg-[#158B68] p-[10px] rounded-[45px] text-white flex justify-center items-center">
                                <BiCommentDetail />
                            </div>
                            <p className="mt-[-8px]"> پیشخوان </p>
                        </li>
                        <li className="flex items-center gap-[10px] py-[10px] px-5 rounded-[45px] mb-20">
                            <div className="bg-[#158B68] p-[10px] rounded-[45px] text-white flex justify-center items-center">
                                <HiOutlineKey />
                            </div>
                            <p className="mt-[-8px]"> پیشخوان </p>
                        </li>


                        <li className="flex items-center gap-[10px] py-[10px] px-5 rounded-[45px]">
                            <div className="bg-[#158B68] p-[10px] rounded-[45px] text-white flex justify-center items-center">
                                <HiOutlineHome />
                            </div>
                            <p className="mt-[-8px]"> پیشخوان </p>
                        </li>
                        <li className="flex items-center gap-[10px] py-[10px] px-5 rounded-[45px]">
                            <div className="bg-[#158B68] p-[10px] rounded-[45px] text-white flex justify-center items-center">
                                <HiOutlineLogout />
                            </div>
                            <p className="mt-[-8px]"> پیشخوان </p>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="w-full h-full flex flex-col ">
                <div className="w-full h-[100px] py-[20px] pr-[15px] pl-[35px] flex justify-between items-center bg-[#A4F6DE] shadow-[0px_10px_3px_0_#00000024]">


                    <div className="flex gap-2 items-center text-2xl">
                        <div className="size-[50px] flex justify-center items-center">
                            <svg className="w-full h-full" width="47" height="73" viewBox="0 0 47 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9833 0.546528L1.18911 10.7399C0.696453 11.1665 0.413609 11.7863 0.414105 12.438V57.3228C0.408726 58.2038 0.919323 59.0064 1.71955 59.375C2.51978 59.7435 3.46161 59.6097 4.12757 59.0329L15.9203 48.8321C16.4126 48.4058 16.6954 47.7866 16.6953 47.1355V2.25065C16.6978 1.37134 16.1866 0.571575 15.3874 0.204701C14.5883 -0.162174 13.6485 -0.0285528 12.9833 0.546528Z" fill="#00A19A" />
                                <path d="M42.9825 13.1846L17.669 30.6478C15.8571 31.8986 16.7414 34.7398 18.9437 34.7398H27.976C29.2155 34.7398 30.2203 35.7446 30.2203 36.984L30.2203 70.7568C30.2207 71.6348 30.7331 72.4319 31.5316 72.7969C32.3301 73.1618 33.2681 73.0277 33.9323 72.4535L45.7205 62.2541C46.2138 61.83 46.4987 61.2126 46.5015 60.562L46.5015 15.0324C46.5017 14.1981 46.0392 13.4325 45.3006 13.0447C44.562 12.6568 43.6691 12.7107 42.9825 13.1846Z" fill="#1D71B8" />
                            </svg>
                        </div>
                        <p> آکادمی اچ وان </p>
                    </div>

                    <div className="flex gap-5 items-center">
                        <div className="text-[#158B68] flex">
                            <div className="p-[10px] text-3xl">
                                <HiOutlineEyeDropper />
                            </div>
                            <div className="p-[10px] text-3xl">
                                <HiOutlineMoon />
                            </div>
                            <div className="p-[10px] text-3xl relative">
                                <span className="absolute bg-white size-[25px] flex items-center justify-center rounded-full opacity-80 top-[-5px] right-[-5px] text-base"> 3 </span>
                                <HiOutlineShoppingBag />
                            </div>
                        </div>

                        <div className="size-[70px]">
                            <img className="size-full" src={profile} alt="" />
                        </div>
                    </div>

                </div>
                <div className="h-full w-full">

                </div>
            </div>

        </div>
    )
}

export { Dashboard }
