import React from 'react'
import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'
import { DashboardPartsTitle } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsTitle'
import { StatusProgress } from '../../../common/Dashboard/StatusProgress'

const CoursesStatus = () => {
    return (
        <DashboardPartsBody className="flex-col">
            <DashboardPartsTitle className="py-5">
                <p> وضعیت دوره های من </p>
            </DashboardPartsTitle>
            <div className="pt-5 px-10 pb-10">
                <StatusProgress color="#5BE1B9" title="دوره های من - پرداخت شده" />
                <StatusProgress color="#158B68" title="دوره های تایید شده - پرداخت نشده" />
                <StatusProgress color="#5BE1B9" title="دوره های رزرو شده" />
                <StatusProgress color="#158B68" title="دوره های مورد علاقه" />
            </div>
        </DashboardPartsBody>
    )
}

export { CoursesStatus }
