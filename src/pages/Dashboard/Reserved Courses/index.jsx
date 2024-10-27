import React, { useEffect, useState } from 'react'
import { HiOutlineTrash } from "react-icons/hi2"

import { DashboardPartsBody } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { ComplexTableHeader } from '../../../components/common/Dashboard/Dashboard Tables/ComplexTableHeader'
import { TableBody } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody'
import { TableRow } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow'
import { TableCell } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell'

import CourseImg from '../../../assets/images/courseImg2.png'
import { getReservedCourses } from '../../../core/services/api/dashboard'
import { NoneItems } from '../../../components/common/Dashboard/Dashboard Tables/NoneItems'
import { getCoursId } from '../../../core/services/api/getCourseID'

const ReservedCourses = () => {

    const [courseReserved, setCourseReserved] = useState([])
    const [courseId, setCourseId] = useState()

    const getMyReservedCourses = async () => {
        const result = await getReservedCourses()
        setCourseReserved(result)
        setCourseId(result.courseId)
        console.log(result)
    }

    const getReservedCoursesById = async () => {
        const result = await getCoursId(courseId)
        return result
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
                {courseReserved?.length === 0 ? <NoneItems title="دوره ای وجود ندارد" /> : courseReserved?.map((item, key) => <TableRow key={key}>
                    <TableCell className="flex gap-5 items-center" style={{ minWidth: "200px" }}>
                        <img src="" alt="" className="w-16" />
                        {item.courseName}
                    </TableCell>
                    <TableCell> {} </TableCell>
                    <TableCell> {} </TableCell>
                    <TableCell> {item.reserverDate} </TableCell>
                    <TableCell> {item.accept ? "تایید شده" : "تایید نشده"} </TableCell>
                    <TableCell> <HiOutlineTrash className="size-8" /> </TableCell>
                </TableRow>)}
            </TableBody>
        </DashboardPartsBody>
    )
}

export { ReservedCourses }
