import React, { useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'

import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { ComplexTableHeader } from '../../../common/Dashboard/Dashboard Tables/ComplexTableHeader'
import { TableBody } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody'
import { TableRow } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow'
import { TablePagination } from '../../../common/Dashboard/Dashboard Tables/TablePagination'
import { TableCell } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell'

import CourseImg from '../../../../assets/images/courseImg2.png'

const MyFavoriteArticles = () => {

    const [favoriteArticles, setFavoriteArticles] = useState([])

    const getMyFavoriteArticles = async () => {
        
    }

    return (
        <DashboardPartsBody className="flex flex-col">
            <ComplexTableHeader
                first="عنوان مقاله"
                second="نویسنده"
                third="تعداد بازدید"
                forth="امتیاز"
                fifth="آخرین بروزرسانی"
                sixth="حذف"
            />
            <TableBody>
                <TableRow>
                    <TableCell className="flex gap-5 items-center" style={{ minWidth: "200px" }}>
                        <img src={CourseImg} alt="" className="w-16" />
                        نکست جی اس
                    </TableCell>
                    <TableCell className="pr-10"> استاد بحر </TableCell>
                    <TableCell className="pr-4"> بهار </TableCell>
                    <TableCell className="pl-5"> سه شنبه </TableCell>
                    <TableCell className="pl-4"> 1403/03/16 </TableCell>
                    <TableCell className="pr-[85px]"> <HiOutlineTrash className="size-8" /> </TableCell>
                </TableRow>
            </TableBody>
        </DashboardPartsBody>
    )
}

export { MyFavoriteArticles }
