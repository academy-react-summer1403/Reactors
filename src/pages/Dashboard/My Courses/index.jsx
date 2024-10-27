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
                tableHeaders={["نام دوره", "نام استاد", "نام ترم", "نام گروه", "تاریخ شروع", "وضعیت پرداخت"]}
            />
            <TableBody>
                {myCourses?.map((item, key) => <TableRow key={key}>
                    <TableCell className="flex gap-1 items-center">
                        <img src={item.tumbImageAddress} alt="" className="w-12" />
                        {item.courseTitle}
                    </TableCell>
                    <TableCell> {item.fullName} </TableCell>
                    <TableCell> {item.termName} </TableCell>
                    <TableCell> {item.groupName} </TableCell>
                    <TableCell> 1403/03/16 </TableCell>
                    <TableCell> {item.paymentStatus} </TableCell>
                </TableRow>)}
            </TableBody>
            {myCourses.length === 0 ? null : <TablePagination />}
        </DashboardPartsBody>
    )
}

export { MyCourses }
