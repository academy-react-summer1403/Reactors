import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import axios from "axios";
import Filter from "./Filter/Filter";
import { getCoursList } from "../../core/services/api/course";
import { CardWrapper } from "../../components/CardWarpper/CardWarpper";
import { Button, IconButton } from "@material-tailwind/react";
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import "../../app/App.css"
import { Navigation } from 'swiper/modules';
import { useSelector } from "react-redux";
import PaginationWrapper from "../../components/Pagination/Pagination";
import { handlePageNumber } from "../../Redux/CourseSlice";

const CoursLists = () => {

    const { typeName, techName, levelName, PageNumber, SearchInput, SortingCol, SortingType,CostUp,CostDown } = useSelector((state) => { return state.Courses })

    const [course, setCourseList] = useState([]);

    const getCours = async () => {
        const courses = await getCoursList(typeName, levelName, techName, PageNumber, SearchInput, SortingCol, SortingType,CostUp,CostDown);
        setCourseList(courses.courseFilterDtos);
        console.log(courses, "Course");
    }

    useEffect(() => {
        getCours();
    }, [typeName, levelName, techName, SearchInput, PageNumber, SortingCol, SortingType,CostUp,CostDown]
    
    );

    return (
        <>
            <div className=" justify-center bg-white rounded-[30px] shadow-2xl py-14 w-[1016px] px-4 ml-[27px] mt-4">

                <CardWrapper course={course} />
                <PaginationWrapper count={10} PageNumber={handlePageNumber} />
            </div>

                <Filter></Filter>

            {/* Slider */}

            <div className="w-full h-[150px]   ">

                <h1 className="text-center text-[34px]  ">دوره های برتر</h1>

                <h2 className="text-center text-[20px] mt-5 "> ساختن دنیایی بهتر، یک دوره در یک زمان</h2>

            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                dir="ltr"
            >
                {course.map((item, index) => {
                    return <SwiperSlide key={index}> <Card
                        data={item}
                    /> </SwiperSlide>
                })}
            </Swiper>
        </>
    );
};

export { CoursLists };

