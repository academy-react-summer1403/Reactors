import React, { useEffect, useState } from 'react'

import { WelcomeUser } from '../../../components/Dashboard/Dashboard Pages/Counter/WelcomeUser'
import { CounterCourses } from '../../../components/Dashboard/Dashboard Pages/Counter/CounterCourses'
import { UserInformation } from '../../../components/Dashboard/Dashboard Pages/Counter/UserInformation'
import { CoursesStatus } from '../../../components/Dashboard/Dashboard Pages/Counter/CoursesStatus'
import { ProfileProgress } from '../../../components/Dashboard/Dashboard Pages/Counter/ProfileProgress'
import { getMyCourses, getUserInfo } from '../../../core/services/api/dashboard'
import { useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import { getCourseTop } from '../../../core/services/api/getCourseTop'

const Counter = () => {

    const { userProfile } = useSelector((state) => state.userInfo)
    console.log(userProfile)

    // const dispatch = useDispatch()
    // const [profileCompletionPercentage, setProfileCompletionPercentage] = useState()

    // const userInfo = async () => {
    //     const result = await getUserInfo()
    //     console.log(result)
    //     // dispatch(handleEmail(result.email))
    //     // dispatch(handlePhoneNumber(result.phoneNumber))
    //     // dispatch(handleNationalCode(result.nationalCode))
    //     // dispatch(handleProfileImages(result.userImage))
    //     dispatch(handleUserProfile(result))
    //     setProfileCompletionPercentage(result.profileCompletionPercentage)
    // }

    // useEffect(() => {
    //     userInfo()
    // }, [])

    const { data: newestCourse } = useQuery({
        queryKey: ["newestCourse"],
        queryFn: getCourseTop
    })

    const { data: myCourses } = useQuery({
        queryKey: ["myCourses"],
        queryFn: getMyCourses
    })

    useEffect(() => {
        console.log(newestCourse)
    }, [newestCourse])

    return (
        <div className="w-full h-full">
            <div className="flex flex-col gap-5">
                <div className="flex gap-5 justify-center max-[850px]:flex-wrap">
                    <WelcomeUser />
                    <CounterCourses
                        title="جدیدترین دوره ها"
                        responsive={"max-[850px]:w-full"}
                        courseTitle={newestCourse ? newestCourse[0].title : null}
                        teacher={newestCourse ? newestCourse[0].teacherName : null}
                        cost={newestCourse ? newestCourse[0].cost : null}
                    />
                </div>

                <div className="flex gap-5 max-[1100px]:flex-wrap max-[1100px]:justify-center">
                    <UserInformation />
                    <div className="flex flex-col gap-5 w-[55%] max-[1100px]:w-full">
                        <CoursesStatus />
                        <div className="flex gap-5 justify-center max-[1400px]:flex-wrap max-[1100px]:flex-nowrap max-[650px]:flex-wrap">
                            <ProfileProgress percentage={userProfile?.profileCompletionPercentage} />
                            {myCourses?.listOfMyCourses.length === 0 ? null : <CounterCourses
                                title="دوره های من"
                                responsive={"max-[1400px]:w-full"}
                                courseTitle={myCourses ? myCourses?.listOfMyCourses[0].courseTitle : ""}
                                teacher={myCourses ? myCourses?.listOfMyCourses[0].fullName : ""}
                                cost={myCourses ? myCourses?.listOfMyCourses[0].cost : ""}
                            />}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Counter }
