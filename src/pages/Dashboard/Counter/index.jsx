import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { WelcomeUser } from '../../../components/Dashboard/Dashboard Pages/Counter/WelcomeUser'
import { CounterCourses } from '../../../components/Dashboard/Dashboard Pages/Counter/CounterCourses'
import { UserInformation } from '../../../components/Dashboard/Dashboard Pages/Counter/UserInformation'
import { CoursesStatus } from '../../../components/Dashboard/Dashboard Pages/Counter/CoursesStatus'
import { ProfileProgress } from '../../../components/Dashboard/Dashboard Pages/Counter/ProfileProgress'
import { getUserInfo } from '../../../core/services/api/dashboard'

import { handleEmail, handleNationalCode, handlePhoneNumber, handleProfileCompletionPercentage, handleProfileImages } from '../../../redux/userInfo'

const Counter = () => {

    const dispatch = useDispatch()
    const [profileCompletionPercentage, setProfileCompletionPercentage] = useState()

    const userInfo = async () => {
        const result = await getUserInfo()
        console.log(result)
        dispatch(handleEmail(result.email))
        dispatch(handlePhoneNumber(result.phoneNumber))
        dispatch(handleNationalCode(result.nationalCode))
        dispatch(handleProfileImages(result.userImage))
        setProfileCompletionPercentage(result.profileCompletionPercentage)
    }

    useEffect(() => {
        userInfo()
    }, [])

    return (
        <div className="w-full h-full">
            <div className="flex flex-col gap-5">
                <div className="flex gap-5 justify-center max-[850px]:flex-wrap">
                    <WelcomeUser />
                    <CounterCourses title="جدیدترین دوره ها" />
                </div>

                <div className="flex gap-5 max-[900px]:flex-wrap max-[900px]:justify-center">
                    <UserInformation />
                    <div className="flex flex-col gap-5 w-[55%] max-[900px]:w-full">
                        <CoursesStatus />
                        <div className="flex gap-5 justify-center">
                            <ProfileProgress percentage={profileCompletionPercentage} />
                            <CounterCourses title="دوره های من" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Counter }
