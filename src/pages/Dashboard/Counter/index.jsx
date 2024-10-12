import React from 'react'

import CounterImg from '../../../assets/images/counterImg.svg'
import CourseImg from '../../../assets/images/courseImg.png'
import Profile from '../../../assets/images/profile.png'

const Counter = () => {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col gap-5">

                <div className="flex gap-5 justify-center">

                    <div className="flex gap-[30px] px-5 py-4 bg-[#FBF6F6] rounded-[10px] shadow-[10px_10px_5px_0_#00000029] w-2/3">
                        <div className="h-full">
                            <img src={CounterImg} alt="" className="w-[90%] h-[90%]" />
                        </div>
                        <div className="flex flex-col gap-5 justify-center">
                            <p className="text-[30px]"> سلام نام کاربری، خوش آمدید! </p>
                            <p className="text-[18px]"> دوره شما نود جی اس توسط 11 کاربر جدید در این هفته تکمیل شد </p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-[#FBF6F6] rounded-[10px] shadow-[10px_10px_5px_0_#00000029] w-1/3">
                        <div className="flex justify-center items-center py-[10px] bg-[#A4F6DE] rounded-[10px_10px_0_0]">
                            <p> جدید ترین دوره ها </p>
                        </div>

                        <div className="p-3 w-full h-full">
                            <div className="bg-white w-full h-full rounded-[10px] flex gap-[15px] p-[7px] justify-center items-center">
                                <div className="">
                                    <img src={CourseImg} alt="" className="w-full h-full" />
                                </div>
                                <div className="flex flex-col gap-3 justify-center text-nowrap">
                                    <p> عنوان: دوره </p>
                                    <p> نام مدرس: استاد </p>
                                    <p> قیمت: 3.000.000 تومان </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center items-center gap-5">

                    <div className="flex flex-col rounded-[10px] w-1/2 bg-[#FBF6F6] shadow-[10px_10px_5px_0_#00000029]">
                        <div className="flex justify-center items-center py-[30px] bg-[#A4F6DE] rounded-[10px_10px_0_0]">
                            <p> جدید ترین دوره ها </p>
                        </div>

                        <div className="p-[30px] flex flex-col gap-5 items-center">
                            <div className="flex flex-col items-center">
                                <div className="w-[174px]">
                                    <img src={Profile} alt="" className="mb-[12px] w-full h-full" />
                                </div>
                                <p> نام و نام خانوادگی </p>
                            </div>

                            <div className="flex gap-5 justify-center">
                                <div className="flex flex-col gap-5">
                                    <p> تلفن همراه: </p>
                                    <p> ایمیل:  </p>
                                    <p> کد ملی: </p>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <p> 09381803771 </p>
                                    <p> parham.khoshnazar@gmail.com </p>
                                    <p> 2150938952 </p>
                                </div>
                            </div>

                            <button className="py-[10px] px-5 bg-[#12926C] text-white rounded-[50px]"> ویرایش </button>

                        </div>
                    </div>

                    <div className="flex flex-col gap-5 w-1/2">

                        <div className="flex flex-col bg-[#FBF6F6] rounded-[10px] shadow-[10px_10px_5px_0_#00000029]">
                            <div className="flex justify-center items-center py-[30px] bg-[#A4F6DE] rounded-[10px_10px_0_0]">
                                <p> جدید ترین دوره ها </p>
                            </div>

                            <div className="py-5 px-10 flex flex-col">

                                <div>
                                    <p> دوره های من - پرداخت شده </p>
                                </div>

                            </div>

                        </div>

                        <div></div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export { Counter }
