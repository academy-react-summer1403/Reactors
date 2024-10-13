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
import "../app/App.css";
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
      {/* <div className="w-full py-9 px-16 flex justify-between items-center">
        <Bar></Bar>
      </div> */}

      <div className="flex flex-col min-h-screen bg-[#FFFFFF] gap-3 p-4 rounded-[30px] shadow-2xl">
        <CardWrapper course={course} />
        <PaginationWrapper count={10} handleChangePage={handleChangePage} />
      </div>

      <div className="flex flex-col items-start"></div>

      {/* <Filter></Filter> */}

      {/* Slider */}



        {/* <Swiper
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
        </Swiper> */}
    </>
  );
};

export { CoursLists };
