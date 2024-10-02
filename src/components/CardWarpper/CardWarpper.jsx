import React from "react"
import { Card } from "../../pages/CourseList/Card"
import Filter from "../../pages/CourseList/Filter/Filter"


const CardWrapper = ({ course }) => {
    return (
        <div className="grid grid-cols-3 items-center mt-28  gap-5">
            {course.map((item) => {
               return <Card key={item.id} img={item.img} title={item.title} price={item.price} id={item.id} desription={item.description} readMore={item.readMore} reserv={item.reserv} />
            })}
            <Filter></Filter>
        </div>
    );
};





export { CardWrapper };