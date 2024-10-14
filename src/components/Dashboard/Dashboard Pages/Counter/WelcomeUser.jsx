import React from 'react'
import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'

import CounterImg from '../../../../assets/images/counterImg.svg'

const WelcomeUser = () => {
    return (
        <DashboardPartsBody className="gap-[30px] px-5 py-4">
            <div>
                <img src={CounterImg} alt="" className="w-[90%] h-[90%]" />
            </div>
            <div className="flex flex-col gap-5 justify-center">
                <p className="text-[30px]"> سلام نام کاربری، خوش آمدید! </p>
                <p className="text-[18px]"> دوره شما نود جی اس توسط 11 کاربر جدید در این هفته تکمیل شد </p>
            </div>
        </DashboardPartsBody>
    )
}

export { WelcomeUser }
