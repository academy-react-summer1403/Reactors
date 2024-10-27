import React, { useEffect, useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'

import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { ComplexTableHeader } from '../../../common/Dashboard/Dashboard Tables/ComplexTableHeader'
import { TableBody } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody'
import { TableRow } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow'
import { TablePagination } from '../../../common/Dashboard/Dashboard Tables/TablePagination'
import { TableCell } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell'

import CourseImg from '../../../../assets/images/courseImg2.png'
import { getFavoriteArticles } from '../../../../core/services/api/dashboard'
import { NoneItems } from '../../../common/Dashboard/Dashboard Tables/NoneItems'

const MyFavoriteArticles = () => {

    const [favoriteArticles, setFavoriteArticles] = useState([])

    const getMyFavoriteArticles = async () => {
        const result = await getFavoriteArticles()
        console.log(result)
        setFavoriteArticles(result.myFavoriteNews)
    }

    useEffect(() => {
        getMyFavoriteArticles()
    }, [])

    return (
        <DashboardPartsBody className="flex flex-col">
            <ComplexTableHeader
            tableHeaders={["عنوان مقاله", "تعداد لایک", "تعداد بازدید", "امتیاز", "آخرین بروزرسانی", "حذف"]}
                // first="عنوان مقاله"
                // second="تعداد لایک"
                // third="تعداد بازدید"
                // forth="امتیاز"
                // fifth="آخرین بروزرسانی"
                // sixth="حذف"
            />
            <TableBody>
                {favoriteArticles?.length === 0 ? <NoneItems title="دوره ای وجود ندارد" /> : favoriteArticles?.map((item, key) => <TableRow key={key}>
                    <TableCell className="flex gap-5 items-center" style={{ minWidth: "200px" }}>
                        <img src={item.currentImageAddressTumb} alt="" className="w-16" />
                        {item.title}
                    </TableCell>
                    <TableCell> {item.currentLikeCount} </TableCell>
                    <TableCell> {item.currentView} </TableCell>
                    <TableCell> {item.currentRate} </TableCell>
                    <TableCell> 1403/03/16 </TableCell>
                    <TableCell> <HiOutlineTrash className="size-8" /> </TableCell>
                </TableRow>
                )}
            </TableBody>
        </DashboardPartsBody>
    )
}

export { MyFavoriteArticles }
