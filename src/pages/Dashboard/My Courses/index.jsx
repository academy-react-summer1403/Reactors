import React from 'react'

import { DashboardPartsBody } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../components/common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'
import { TableHeader } from '../../../components/common/Dashboard/Styled DashboardPages/StyledTableHeader'
import { TableBody } from '../../../components/common/Dashboard/Styled DashboardPages/StyledTableBody'
import { TableRow } from '../../../components/common/Dashboard/Styled DashboardPages/StyledTableRow'
import { TableFirstTitle } from '../../../components/common/Dashboard/Styled DashboardPages/StyledTableFirstTitle'
import { TableLastTitle } from '../../../components/common/Dashboard/Styled DashboardPages/StyledTableLastTitle'
import { TableCell } from '../../../components/common/Dashboard/Styled DashboardPages/StyledTableCell'

import CourseImg from '../../../assets/images/courseImg2.png'

const MyCourses = () => {
    return (
        <DashboardPartsBody className="flex flex-col">
            <DashboardPartsTitle className="py-6 px-9 min-w-[700px]" style={{ fontSize: "20px" }}>
                <TableHeader>
                    <TableFirstTitle> نام دوره </TableFirstTitle>
                    <p> نام استاد </p>
                    <p> نام ترم </p>
                    <p> نام گروه </p>
                    <p> تاریخ شروع </p>
                    <TableLastTitle> وضعیت پرداخت </TableLastTitle>
                </TableHeader>
            </DashboardPartsTitle>
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

export { MyCourses }
