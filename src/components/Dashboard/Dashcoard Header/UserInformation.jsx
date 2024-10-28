import React from 'react'
import { useSelector } from 'react-redux'

const UserInformation = () => {

    const { userProfile } = useSelector((state) => state.userInfo)

    return (
        <div className="h-[100px] flex shrink-0 justify-center items-center bg-[#FBF6F6]">
            <p> {userProfile?.fName + " " + userProfile?.lName} </p>
        </div>
    )
}

export { UserInformation }
