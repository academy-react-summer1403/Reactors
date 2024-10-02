import React from "react"
import { Card } from "../../pages/CourseList/Card"


const CardWrapper = ({ course }) => {
    return (
        <>
        <div className="grid grid-cols-3 items-center mt-4 gap-5">
            {course.map((item) => {
               return <Card key={item.id} img={item.img} title={item.title} price={item.price} id={item.id} desription={item.description} readMore={item.readMore} reserv={item.reserv} />
            })}
        </div>

        </>
    );
};





export { CardWrapper };