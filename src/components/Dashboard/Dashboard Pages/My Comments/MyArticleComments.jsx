import React from 'react'
import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { ComplexTableHeader } from '../../../common/Dashboard/Dashboard Tables/ComplexTableHeader'
import { TableBody } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody'
import { TableRow } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow'
import { TablePagination } from '../../../common/Dashboard/Dashboard Tables/TablePagination'
import { TableCell } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell'

import CourseImg from '../../../../assets/images/courseImg2.png'
import { IoIosMore } from 'react-icons/io'


const MyArticleComments = () => {
    return (
        <DashboardPartsBody className="flex flex-col">
            <ComplexTableHeader
                first="عنوان مقاله"
                second="عنوان نظر"
                third="تعداد پاسخ"
                forth="تاریخ ارسال"
                fifth="وضعیت"
                sixth="جزئیات"
            />
            <TableBody>
                <TableRow>
                    <TableCell className="flex gap-5 items-center ml-10" style={{ minWidth: "200px" }}>
                        <img src={CourseImg} alt="" className="w-16" />
                        نکست جی اس
                    </TableCell>
                    <TableCell> استاد بحر </TableCell>
                    <TableCell> بهار </TableCell>
                    <TableCell> سه شنبه </TableCell>
                    <TableCell> 1403/03/16 </TableCell>
                    <TableCell className="pr-[85px]"> <IoIosMore className="size-8" /> </TableCell>
                </TableRow>
            </TableBody>
        </DashboardPartsBody>
    )
}

export { MyArticleComments }
