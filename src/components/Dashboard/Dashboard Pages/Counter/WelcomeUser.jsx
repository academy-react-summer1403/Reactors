import React from 'react'
import { useSelector } from 'react-redux'

import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'

import CounterImg from '../../../../assets/images/counterImg.svg'

const WelcomeUser = () => {

    const { firstName, lastName } = useSelector((state) => state.userInfo)

    return (
        <DashboardPartsBody className="gap-[30px] flex-grow px-5 py-4 max-[1550px]:gap-[15px] max-[850px]:w-full max-[850px]:py-10">
            <div className="flex items-center justify-center shrink-0 w-44 max-[1330px]:hidden">
                <img src={CounterImg} alt="" className="w-[100%] h-[100%] max-[1550px]:w-[80%]" />
            </div>
            <div className="flex flex-col gap-5 justify-center">
                <p className="text-[30px] max-[1500px]:text-[25px]"> سلام {firstName + " " + lastName}، خوش آمدید! </p>
                <p className="text-[18px]"> دوره شما نود جی اس توسط 11 کاربر جدید در این هفته تکمیل شد </p>
            </div>
        </DashboardPartsBody>
    )
}

export { WelcomeUser }
