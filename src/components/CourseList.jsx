import React, { useEffect, useState } from "react";
import { getCoursList } from "../core/services/api/course";
import { CardWrapper } from "./CardWarpper/CardWarpper";
import "swiper/css";
import "swiper/css/navigation";
import "../app/App.css";
import { useDispatch, useSelector } from "react-redux";
import PaginationWrapper from "./Pagination/Pagination";
import { handlePageNumber } from "../Redux/CourseSlice";


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

      <div className="flex flex-col min-h-screen bg-[#FFFFFF] gap-3 p-4 rounded-[30px] shadow-2xl">
        <CardWrapper course={course} />
        <PaginationWrapper count={10} handleChangePage={handleChangePage} />
      </div>


    </>
  );
};

export { CoursLists };
