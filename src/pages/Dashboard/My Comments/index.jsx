import React, { useState } from 'react'

import { TwoSectionPage } from '../../../components/common/Dashboard/TwoSectionPage'
import { MyCourseComments } from '../../../components/Dashboard/Dashboard Pages/My Comments/MyCourseComments'
import { MyArticleComments } from '../../../components/Dashboard/Dashboard Pages/My Comments/MyArticleComments'

const MyComments = () => {

    const [isCourseClicked, setIsCourseClicked] = useState(true)

    return (
        <div className="flex flex-col gap-[30px]">
            <TwoSectionPage fistTitle="دوره ها" secondTitle="مقالات" isCourseClicked={isCourseClicked} setIsCourseClicked={setIsCourseClicked} />
            {isCourseClicked ? <MyCourseComments /> : <MyArticleComments />}
        </div>
    )
}

export { MyComments }
