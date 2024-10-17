import React from 'react'

import { WelcomeUser } from '../../../components/Dashboard/Dashboard Pages/Counter/WelcomeUser'
import { CounterCourses } from '../../../components/Dashboard/Dashboard Pages/Counter/CounterCourses'
import { UserInformation } from '../../../components/Dashboard/Dashboard Pages/Counter/UserInformation'
import { CoursesStatus } from '../../../components/Dashboard/Dashboard Pages/Counter/CoursesStatus'
import { ProfileProgress } from '../../../components/Dashboard/Dashboard Pages/Counter/ProfileProgress'

const Counter = () => {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col gap-5">
                <div className="flex gap-5 justify-center max-[850px]:flex-wrap">
                    <WelcomeUser />
                    <CounterCourses title="جدیدترین دوره ها" />
                </div>

                <div className="flex gap-5 max-[900px]:flex-wrap max-[900px]:justify-center">
                    <UserInformation />
                    <div className="flex flex-col gap-5 w-1/2 max-[900px]:w-full">
                        <CoursesStatus />
                        <div className="flex gap-5">
                            <ProfileProgress />
                            <CounterCourses title="دوره های من" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Counter }
