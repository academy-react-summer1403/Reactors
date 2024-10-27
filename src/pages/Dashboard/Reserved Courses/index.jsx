import React, { useEffect } from 'react'
import { HiOutlineTrash } from "react-icons/hi2"

import { DashboardPartsBody } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { ComplexTableHeader } from '../../../components/common/Dashboard/Dashboard Tables/ComplexTableHeader'
import { TableBody } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody'
import { TableRow } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow'
import { TableCell } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell'

import CourseImg from '../../../assets/images/courseImg2.png'
import { getReservedCourses } from '../../../core/services/api/dashboard'

const ReservedCourses = () => {

    const getMyReservedCourses = async () => {
        const result = await getReservedCourses()
        console.log(result)
    }

    useEffect(() => {
        getMyReservedCourses()
    }, [])

    return (
        <DashboardPartsBody className="flex flex-col">
            <ComplexTableHeader
                tableHeaders={["نام دوره", "نام استاد", "نام ترم", "تاریخ شروع", "وضعیت تایید", "حذف"]}
                // first="نام دوره"
                // second="نام استاد"
                // third="نام ترم"
                // forth="تاریخ شروع"
                // fifth="وضعیت تایید"
                // sixth="حذف"
            />
            <TableBody>
                <TableRow>
                    <TableCell className="flex gap-5 items-center" style={{ minWidth: "200px" }}>
                        <img src={CourseImg} alt="" className="w-16" />
                        نکست جی اس
                    </TableCell>
                    <TableCell className="pr-3"> استاد بحر </TableCell>
                    <TableCell className="pl-5"> بهار </TableCell>
                    <TableCell className="pl-[45px]"> سه شنبه </TableCell>
                    <TableCell className="pl-3"> 1403/03/16 </TableCell>
                    <TableCell className="flex justify-center items-center pr-[55px]"> <HiOutlineTrash className="size-8" /> </TableCell>
                </TableRow>
            </TableBody>
        </DashboardPartsBody>
    )
}

export { ReservedCourses }
