import React from 'react'

import CourseImg from '../../../assets/images/courseImg2.png'
import { DashboardPartsBody } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'

const MyCourses = () => {
    return (
        <table className="w-full h-full bg-[#FBF6F6] border-separate border-spacing-5">
            <thead className="bg-[#A4F6DE]">
                <tr>
                    <th className="py-6 px-10"> نام دوره </th>
                    <th className="py-6 px-10"> نام استاد </th>
                    <th className="py-6 px-10"> نام ترم </th>
                    <th className="py-6 px-10"> نام گروه </th>
                    <th className="py-6 px-10"> تاریخ شروع </th>
                    <th className="py-6 px-10"> وضعیت پرداخت </th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr className="bg-white rounded-[25px]">
                    <td className="flex justify-center items-center gap-10 py-5 px-10">
                        <img src={CourseImg} alt="" className="w-[80px]" />
                        نکست جی اس
                    </td>
                    <td> استاد بحر </td>
                    <td> بهار </td>
                    <td> سه شنبه </td>
                    <td> 1403/03/16 </td>
                    <td> پرداخت نشده </td>
                </tr>

                <tr className="bg-white rounded-[25px] ">
                    <td className="flex justify-center items-center gap-10 py-5 px-10">
                        <img src={CourseImg} alt="" className="w-[80px]" />
                        نکست جی اس
                    </td>
                    <td> استاد بحر </td>
                    <td> بهار </td>
                    <td> سه شنبه </td>
                    <td> 1403/03/16 </td>
                    <td> پرداخت نشده </td>
                </tr>

                <tr className="bg-white rounded-[25px] ">
                    <td className="flex justify-center items-center gap-10 py-5 px-10">
                        <img src={CourseImg} alt="" className="w-[80px]" />
                        نکست جی اس
                    </td>
                    <td> استاد بحر </td>
                    <td> بهار </td>
                    <td> سه شنبه </td>
                    <td> 1403/03/16 </td>
                    <td> پرداخت نشده </td>
                </tr>
            </tbody>
        </table>
    )
}

export { MyCourses }
