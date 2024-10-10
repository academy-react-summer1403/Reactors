import React from 'react'

import profile from '../../../assets/images/profile.png'

const UserProfile = () => {
    return (
        <div className="size-[70px] mr-5">
            <img className="size-full" src={profile} alt="" />
        </div>
    )
}

export { UserProfile }
