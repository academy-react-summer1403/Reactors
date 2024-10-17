import React from 'react'

import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'

import CourseImg from '../../../../assets/images/courseImg.png'

const CounterCourses = ({ title }) => {
    return (
        <DashboardPartsBody className="flex-col">
            <DashboardPartsTitle className="py-[10px]">
                <p> {title} </p>
            </DashboardPartsTitle>
            <div className="p-3 w-full h-full">
                <div className="bg-white w-full h-full rounded-[10px] flex gap-[15px] p-[10px] justify-center items-center shadow-[10px_10px_5px_0_#00000029]">
                    <div className="flex justify-center items-center shrink-0 w-40 max-[1550px]:w-36">
                        <img src={CourseImg} alt="عکس دوره" className="w-[90%]" />
                    </div>
                    <div className="flex flex-col gap-3 justify-center text-nowrap">
                        <p> عنوان: دوره </p>
                        <p> نام مدرس: استاد </p>
                        <p> قیمت: <span className="text-[#E11818]"> 3.000.000 </span> تومان </p>
                    </div>
                </div>
            </div>
        </DashboardPartsBody>
    )
}

export { CounterCourses }
