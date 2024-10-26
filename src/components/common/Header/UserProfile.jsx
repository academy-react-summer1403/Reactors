import React from 'react'

import profile from '../../../assets/images/profile.png'
import { useSelector } from 'react-redux'

const UserProfile = () => {

    const { userProfile } = useSelector((state) => state.userInfo)

    return (
        <div className="size-[70px] mr-5">
            <img className="size-full rounded-full" src={userProfile?.currentPictureAddress} alt="" />
        </div>
    )
}

export { UserProfile }
