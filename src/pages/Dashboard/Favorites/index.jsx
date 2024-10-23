import React, { useState } from 'react'

import { TwoSectionPage } from '../../../components/common/Dashboard/TwoSectionPage'
import { MyFavoriteCourses } from '../../../components/Dashboard/Dashboard Pages/Favorites/MyFavoriteCourses'
import { MyFavoriteArticles } from '../../../components/Dashboard/Dashboard Pages/Favorites/MyFavoritesArticles'

const Favorites = () => {

    const [isCourseClicked, setIsCourseClicked] = useState(true)

    return (
        <div className="flex flex-col gap-[30px]">
            <TwoSectionPage fistTitle="دوره های مورد علاقه من" secondTitle="مقالات مورد علاقه من" isCourseClicked={isCourseClicked} setIsCourseClicked={setIsCourseClicked} />
            {isCourseClicked ? <MyFavoriteCourses /> : <MyFavoriteArticles />}
        </div>
    )
}

export { Favorites }
