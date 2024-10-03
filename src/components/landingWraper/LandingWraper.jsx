import React from "react";
import { AmozeshH1 } from "../AmozeshH1/AmozeshH1";
import { CardWraper } from "../OurServices/CardWraper";
import { StatisticsWraper } from "../Statistics/StatisticsWraper";
import { CategoryWraper } from "../Category/CategoryWraper";
import { Courses } from "../courses/CourseWraper";
const LandingWraper = () => {
    return(

        <div className="w-full  flex flex-col flex-nowrap">
                <AmozeshH1/> 
                <CardWraper/>
                <StatisticsWraper/>
                <CategoryWraper/>
                <Courses/>
        </div>

    )
}

export {LandingWraper}