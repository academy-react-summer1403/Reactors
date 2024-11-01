import React, { useEffect } from 'react'

import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'

import CourseImg from '../../../../assets/images/courseImg.png'
import { getCourseTop } from '../../../../core/services/api/getCourseTop'

const CounterCourses = ({ title, responsive, courseTitle, teacher, cost }) => {


    return (
        <DashboardPartsBody className={`flex-col text-[16px] w-[350px] ${responsive}`}>
            <DashboardPartsTitle className="py-[10px]">
                <p> {title} </p>
            </DashboardPartsTitle>
            <div className="p-3 w-full h-full">
                <div className="bg-white w-full h-full  rounded-[10px] flex gap-[15px] p-[10px] justify-center items-center shadow-[10px_10px_5px_0_#00000029]">
                    <div className="flex items-center w-1/3">
                        <img src={CourseImg} alt="عکس دوره" className="w-[160px]" />
                    </div>
                    <div className="flex flex-col gap-3 justify-center text-nowrap">
                        <p> عنوان: {courseTitle} </p>
                        <p> نام مدرس: {teacher} </p>
                        <p> قیمت: <span className="text-[#E11818]"> {cost} </span> تومان </p>
                    </div>
                </div>
            </div>
        </DashboardPartsBody>
    )
}

export { CounterCourses }
