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


const CoursLists = () => {

    const { typeName } = useSelector((state) => { return state.Courses })
    const { techName } = useSelector((state) => { return state.Courses })
    const { levelName } = useSelector((state) => { return state.Courses })
    const { CostDown } = useSelector((state) => { return state.Courses })
    const { CostUp } = useSelector((state) => { return state.Courses })
    const { PageNumber } = useSelector((state) => { return state.Courses })
    const { title } = useSelector((state) => { return state.Courses })
    const { StatusName } = useSelector((state) => { return state.Courses })




    const [course, setCourseList] = useState([]);

    const [active, setActive] = useState(1);

    const getItemProps = (index) =>
    ({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActive(index),
        className: "rounded-full",
    });

    const next = () => {
        if (active === 5) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };


    const getCours = async () => {
        const courses = await getCoursList(typeName, levelName, techName, CostDown, CostUp, PageNumber, title,StatusName);
        setCourseList(courses.courseFilterDtos);
        console.log(courses, "Course");

    }


    useEffect(() => {
        getCours();

    }, [typeName, levelName, techName, CostDown, CostUp, PageNumber, title,StatusName]
    );




    return (

        <>

            <div className=" justify-center bg-white rounded-[30px] shadow-2xl py-14 w-[1016px] px-4 ml-[27px] mt-4">

                <CardWrapper course={course} />

                {/* search */}

                {/* <Search></Search> */}








                <div className="flex items-center gap-4 pl-[323px]">
                    <Button
                        variant="text"
                        className="flex items-center gap-2 rounded-full "
                        onClick={prev}
                        disabled={active === 1}
                    >
                        <ChevronDoubleLeftIcon strokeWidth={2} className="h-4 w-4 text-[#5BE1B9]" />
                    </Button>
                    <div className="flex items-center gap-2 ">
                        <IconButton {...getItemProps(1)}>1</IconButton>
                        <IconButton {...getItemProps(2)}>2</IconButton>
                        <IconButton {...getItemProps(3)}>3</IconButton>
                        <IconButton {...getItemProps(4)}>4</IconButton>
                        <IconButton {...getItemProps(5)}>5</IconButton>
                    </div>
                    <Button
                        variant="text"
                        className="flex items-center gap-2 rounded-full text-[#158B68]"
                        onClick={next}
                        disabled={active === 5}
                    >
                        <ChevronDoubleRightIcon strokeWidth={2} className="h-4 w-4 text-[#5BE1B9]" />
                    </Button>
                </div>

            </div>

            {/* Filter */}
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
                {course.map((item) => {
                    return <SwiperSlide> <Card
                        data={item}
                    /> </SwiperSlide>
                })}

            </Swiper>

        </>
    );
};

export { CoursLists };

