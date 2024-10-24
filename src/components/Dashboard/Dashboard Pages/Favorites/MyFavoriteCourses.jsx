import React, { useEffect, useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'

import { getFavoriteCourses } from '../../../../core/services/api/dashboard'
import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { ComplexTableHeader } from '../../../common/Dashboard/Dashboard Tables/ComplexTableHeader'
import { TableBody } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody'
import { TableRow } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow'
import { TablePagination } from '../../../common/Dashboard/Dashboard Tables/TablePagination'
import { TableCell } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell'

import CourseImg from '../../../../assets/images/courseImg2.png'
import { NoneItems } from '../../../common/Dashboard/Dashboard Tables/NoneItems'

const MyFavoriteCourses = () => {

    const [favoriteCourses, setFavoriteCourses] = useState([])

    const getMyFavoriteCourses = async () => {
        const result = await getFavoriteCourses()
        console.log(result)
        setFavoriteCourses(result.favoriteCourseDto)
    }

    useEffect(() => {
        getMyFavoriteCourses()
    }, [])

    return (
        <DashboardPartsBody className="flex flex-col">
            <ComplexTableHeader
                first="نام دوره"
                second="نام استاد"
                third="نوع دوره"
                forth="سطح دوره"
                fifth="تاریخ شروع"
                sixth="حذف"
            />
            <TableBody>
                {favoriteCourses?.length === 0 ? <NoneItems title="دوره ای وجود ندارد" /> : favoriteCourses?.map((item, key) => <TableRow key={key}>
                        <TableCell className="flex gap-3 items-center" style={{ minWidth: "200px" }}>
                            <img src={item.tumbImageAddress} alt="" className="w-16" />
                            {item.courseTitle}
                        </TableCell>
                        <TableCell> {item.teacheName} </TableCell>
                        <TableCell> {item.typeName} </TableCell>
                        <TableCell> {item.levelName} </TableCell>
                        <TableCell> 1403/03/16 </TableCell>
                        <TableCell> <HiOutlineTrash className="size-8" /> </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </DashboardPartsBody>
    )
}

export { MyFavoriteCourses }
