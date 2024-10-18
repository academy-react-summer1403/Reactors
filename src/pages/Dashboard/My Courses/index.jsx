import React, { useEffect, useState } from 'react'

import { getMyCourses } from '../../../core/services/api/dashboard'
import { ComplexTableHeader } from '../../../components/common/Dashboard/Dashboard Tables/ComplexTableHeader'

import { DashboardPartsBody } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { TableBody } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody'
import { TableRow } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow'
import { TableCell } from '../../../components/common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell'

import CourseImg from '../../../assets/images/courseImg2.png'
import { TablePagination } from '../../../components/common/Dashboard/Dashboard Tables/TablePagination'

const MyCourses = () => {

    const [myCourses, setMyCourses] = useState([])

    const getAllMyCourses = async () => {
        const result = await getMyCourses()
        setMyCourses(result.listOfMyCourses)
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
                {myCourses.length === 0 ? <div className="w-full h-full flex justify-center items-center p-5">
                    <p className="font-semibold"> دوره ای وجود ندارد </p>
                </div> : myCourses.map(() => <TableRow>
                    <TableCell className="flex gap-5 items-center" style={{ minWidth: "200px" }}>
                        <img src={CourseImg} alt="" className="w-16" />
                        نکست جی اس
                    </TableCell>
                    <TableCell> استاد بحر </TableCell>
                    <TableCell> بهار </TableCell>
                    <TableCell> سه شنبه </TableCell>
                    <TableCell> 1403/03/16 </TableCell>
                    <TableCell> پرداخت نشده </TableCell>
                </TableRow>)}
            </TableBody>
            {myCourses.length === 0? null : <TablePagination />}
        </DashboardPartsBody>
    )
}

export { MyCourses }
