import React, { useEffect, useState } from 'react'
import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { ComplexTableHeader } from '../../../common/Dashboard/Dashboard Tables/ComplexTableHeader'
import { TableBody } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableBody'
import { TableRow } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableRow'
import { TablePagination } from '../../../common/Dashboard/Dashboard Tables/TablePagination'
import { TableCell } from '../../../common/Dashboard/Dashboard Tables/Styled Dashboard Tables/StyledTableCell'

import CourseImg from '../../../../assets/images/courseImg2.png'
import { IoIosMore } from 'react-icons/io'
import { getArticlesComments } from '../../../../core/services/api/dashboard'
import { NoneItems } from '../../../common/Dashboard/Dashboard Tables/NoneItems'


const MyArticleComments = () => {

    const [articleComments, setArticleComments] = useState([])

    const getMyArticlesComments = async () => {
        const result = await getArticlesComments()
        console.log(result)
        setArticleComments(result.myNewsCommetDtos)
    }

    useEffect(() => {
        getMyArticlesComments()
    }, [])

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
                {articleComments?.length === 0 ? <NoneItems title="دوره ای وجود ندارد" /> : articleComments?.map((item, key) => <TableRow key={key}>
                    <TableCell className="flex gap-5 items-center" style={{ minWidth: "200px" }}>
                        <img src="" alt="" className="w-16" />
                        salam
                    </TableCell>
                    <TableCell> {23} </TableCell>
                    <TableCell> {102} </TableCell>
                    <TableCell> {4.3} </TableCell>
                    <TableCell> 1403/03/16 </TableCell>
                    <TableCell> <HiOutlineTrash className="size-8" /> </TableCell>
                </TableRow>
                )}
            </TableBody>
        </DashboardPartsBody>
    )
}

export { MyArticleComments }
