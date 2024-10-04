import React from "react"
import { Card } from "../../pages/CourseList/Card"

const CardWrapper = ({ course }) => {
    return (
        <>
            <div className="grid grid-cols-3 items-center mt-4 gap-5  p">
                {course.map((item) => {
                    return <Card
                        data={item}
                         />
                })}
            </div>

        </>
    );
};





export { CardWrapper };