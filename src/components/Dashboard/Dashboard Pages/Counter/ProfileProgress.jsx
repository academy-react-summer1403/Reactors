import React from 'react'
import { DashboardPartsBody } from '../../../common/Dashboard/Styled DashboardPages/StyledDashboardPartsBody'

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProfileProgress = ({ percentage }) => {
    return (
        <DashboardPartsBody className="p-5 flex-col justify-center flex-grow items-center max-w-[200px]">
            <div className="w-full h-3/4 flex justify-center items-center">
                <CircularProgressbar value={percentage? percentage : 0} circleRatio={0.75} strokeWidth={10} text={`${percentage? percentage : 0}%`} styles={buildStyles({
                    rotation: 1 / 2 + 1 / 8,
                    trailColor: "#E1E1E1",
                    pathColor: "#158B68",
                    textColor: "black"
                })} className="w-[120px]"/>
            </div>
            <p className="text-nowrap p-3 text-[17px]"> درصد تکمیل پروفایل </p>
        </DashboardPartsBody>
    )
}

export { ProfileProgress }
