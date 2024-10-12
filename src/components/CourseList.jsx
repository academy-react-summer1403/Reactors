import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import axios from "axios";
import Filter from "./Filter/Filter";
import { getCoursList } from "../core/services/api/course";
import { CardWrapper } from "./CardWarpper/CardWarpper";
import { Button, IconButton } from "@material-tailwind/react";
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../app/App.css"
import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import PaginationWrapper from "./Pagination/Pagination";
import { handlePageNumber } from "../Redux/CourseSlice";
import { Dropdown } from "flowbite-react";
import ChangeBar from "./TopBar/changeBar";
import Search from "./TopBar/Search";
import { Bar } from "./TopBar/bar";

const CoursLists = () => {
  const dispatch = useDispatch();

  const {
    typeName,
    techName,
    levelName,
    PageNumber,
    SearchInput,
    SortingCol,
    SortingType,
    CostUp,
    CostDown,
    CardView,
  } = useSelector((state) => {
    return state.Courses;
  });

  const [course, setCourseList] = useState([]);

  const getCours = async () => {
    const courses = await getCoursList(
      typeName,
      levelName,
      techName,
      PageNumber,
      SearchInput,
      SortingCol,
      SortingType,
      CostUp,
      CostDown
    );
    setCourseList(courses.courseFilterDtos);
    console.log(courses, "Course");
  };

  const handleChangePage = (event, newPage) => {
    console.log("page :", newPage);
    dispatch(handlePageNumber(newPage));
  };

  useEffect(() => {
    getCours();
  }, [
    typeName,
    levelName,
    techName,
    SearchInput,
    PageNumber,
    SortingCol,
    SortingType,
    CostUp,
    CostDown,
  ]);

  return (
    <>
      <div className="w-full py-9 px-16 flex justify-between items-center">
        <Bar></Bar>
      </div>
      
      <div className="min-h-screen bg-[#FFFFFF]  flex flex-col gap-3 p-4 rounded-[30px] shadow-2xl">
        <CardWrapper course={course} />
        <PaginationWrapper count={10} handleChangePage={handleChangePage} />
      </div>

      <div className="pt-[-100px] flex flex-col items-start">
        <Filter />
      </div>

      {/* <Filter></Filter> */}

      {/* Slider */}

      <div className="w-full h-[150px] mt-[-465px]   ">
        <h1 className="text-center text-[34px]  ">دوره های برتر</h1>

        <h2 className="text-center text-[20px] mt-5 ">
          ساختن دنیایی بهتر، یک دوره در یک زمان
        </h2>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        dir="ltr"
      >
        {course.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {" "}
              <Card data={item} />{" "}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="w-full flex items-center justify-center">
        <button className="bg-[#12926C] text-[20px] hover:bg-blue-700 text-white font-bold py-2 px-4 pl-[10px] rounded-full">
          مشاهده دوره های بیشتر
        </button>
      </div>
    </>
  );
};

export { CoursLists };
