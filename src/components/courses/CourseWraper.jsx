import { useEffect, useState, useRef } from "react";
import { getCoursList } from "../../core/services/api/course";
import { Course } from "./Course";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import "../../app/App.css"
import { Navigation } from 'swiper/modules';


const Courses = () => {

    const [course, setCourseList] = useState([]);


    const getCours = async () => {
        const courses = await getCoursList(0);
        setCourseList(courses.courseFilterDtos);
        console.log(courses, "Course");
    }

    useEffect(() => {
        getCours();
    }, []);

    return (
        <div className=" w-full h-[500px]   flex flex-col flex-nowrap  mt-14  ">
            <div className="w-full h-[150px]   ">

                <h1 className="text-center text-[34px]  ">دوره های ما</h1>

                <h2 className="text-center text-[20px] mt-5 "> ساختن دنیایی بهتر، یک دوره در یک زمان</h2>

            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                dir="ltr"
            >
                {/* <div className="  w-[1300px] h-[350px] border border-black   m-auto px-14 flex flex-row flex-nowrap gap-8   "> */}

                {course.map((item) => {
                    return <SwiperSlide> <Course
                        // key={item.id}
                        data={item}
                    /> </SwiperSlide>
                })}

            </Swiper>
            {/* </div> */}
        </div>

    )
}

export { Courses }