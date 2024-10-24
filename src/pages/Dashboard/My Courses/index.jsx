import React, { useEffect, useState } from 'react'

import { getMyCourses } from '../../../core/services/api/dashboard'
import { ComplexTableHeader } from '../../../components/common/Dashboard/Dashboard Tables/ComplexTableHeader'

import { DashboardPartsBody } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { TableBody } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody'
import { TableRow } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow'
import { TableCell } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell'
import { TablePagination } from '../../../components/common/Dashboard/Dashboard Tables/TablePagination'

import CourseImg from '../../../assets/images/courseImg2.png'
import { NoneItems } from '../../../components/common/Dashboard/Dashboard Tables/NoneItems'

const MyCourses = () => {

    const [myCourses, setMyCourses] = useState([])

    const getAllMyCourses = async () => {
        const result = await getMyCourses()
        setMyCourses(result.listOfMyCourses)
        console.log(result)
    }

    useEffect(() => {
        getAllMyCourses()
    }, [])

    return (
        <DashboardPartsBody className="flex flex-col">
            <ComplexTableHeader
                first="نام دوره"
                second="نام استاد"
                third="نام ترم"
                forth="نام گروه"
                fifth="تاریخ شروع"
                sixth="وضعیت پرداخت"
            />
            <TableBody>
                {myCourses?.length === 0 ? <NoneItems title="دوره ای وجود ندارد" /> : myCourses?.map((item) => <TableRow>
                    <TableCell className="flex gap-5 items-center" style={{ minWidth: "200px" }}>
                        <img src={CourseImg} alt="" className="w-16" />
                        نکست جی اس
                    </TableCell>
                    <TableCell className="pr-6"> استاد بحر </TableCell>
                    <TableCell> بهار </TableCell>
                    <TableCell className="pl-6"> سه شنبه </TableCell>
                    <TableCell className="pl-3"> 1403/03/16 </TableCell>
                    <TableCell className="pr-10"> پرداخت نشده </TableCell>
                </TableRow>)}
            </TableBody>
            {myCourses.length === 0 ? null : <TablePagination />}
        </DashboardPartsBody>
    )
}

export { MyCourses }
