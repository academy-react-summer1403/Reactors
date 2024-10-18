import React, { useEffect } from 'react'

import { DashboardPartsBody } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { ComplexTableHeader } from '../../../components/common/Dashboard/Dashboard Tables/ComplexTableHeader'
import { TableBody } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody'
import { TableRow } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow'
import { TableCell } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell'

import CourseImg from '../../../assets/images/courseImg2.png'
import { getReservedCourses } from '../../../core/services/api/dashboard'

const ReservedCourses = () => {

    // const getMyReservedCourses = async () => {
    //     const result = await getReservedCourses()
    //     console.log(result)
    // }

    // useEffect(() => {
    //     getMyReservedCourses()
    // }, [])

    return (
        <DashboardPartsBody className="flex flex-col">
            <ComplexTableHeader
                first="نام دوره"
                second="نام استاد"
                third="نام ترم"
                forth="تاریخ شروع"
                fifth="وضعیت تایید"
                sixth="حذف"
            />
            <TableBody>
                <TableRow>
                    <TableCell className="flex gap-5 items-center" style={{ minWidth: "200px" }}>
                        <img src={CourseImg} alt="" className="w-16" />
                        نکست جی اس
                    </TableCell>
                    <TableCell> استاد بحر </TableCell>
                    <TableCell> بهار </TableCell>
                    <TableCell> سه شنبه </TableCell>
                    <TableCell> 1403/03/16 </TableCell>
                    <TableCell> پرداخت نشده </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="flex gap-5 items-center" style={{ minWidth: "200px" }}>
                        <img src={CourseImg} alt="" className="w-16" />
                        نکست جی اس
                    </TableCell>
                    <TableCell> استاد بحر </TableCell>
                    <TableCell> بهار </TableCell>
                    <TableCell> سه شنبه </TableCell>
                    <TableCell> 1403/03/16 </TableCell>
                    <TableCell> پرداخت نشده </TableCell>
                </TableRow>
            </TableBody>
        </DashboardPartsBody>
    )
}

export { ReservedCourses }
